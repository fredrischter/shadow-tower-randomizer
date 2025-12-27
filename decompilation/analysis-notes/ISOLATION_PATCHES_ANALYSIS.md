# Isolation Patches Analysis

## Overview

This document analyzes the "isolation patches" code that was commented out in `randomize.js` (lines 346-370). These patches were designed to set various enemy stats to 1, effectively neutralizing enemy offensive and defensive capabilities for testing purposes.

## What Are Isolation Patches?

Isolation patches are debugging/testing modifications that set specific game values to known constants (in this case, 1) to isolate and test specific game mechanics. By setting damage-related stats to 1, developers can:

1. **Test damage formulas** - Simplify calculations to verify the formula is correct
2. **Isolate variables** - Determine which stats affect which damage outputs
3. **Debug crashes** - Prevent overflow/underflow in damage calculations
4. **Balance testing** - Create controlled testing environments

## The Commented Code (randomize.js lines 346-370)

```javascript
/*
        creature1.attack1.set(1);
        creature1.attack2.set(1);
        creature1.magic1.set(1);
        creature1.weaponDefense1.set(1);
        creature1.weaponDefense2.set(1);
        creature1.weaponDefense3.set(1);
        creature1.magDefense1.set(1);
        creature1.magDefense2.set(1);
        creature1.magDefense3.set(1);
        creature1.magDefense4.set(1);
        creature1.magDefense5.set(1);
        creature1.attacks.forEach(attack => attack.set(1));

        creature2.attack1.set(1);
        creature2.attack2.set(1);
        creature2.magic1.set(1);
        creature2.weaponDefense1.set(1);
        creature2.weaponDefense2.set(1);
        creature2.weaponDefense3.set(1);
        creature2.magDefense1.set(1);
        creature2.magDefense2.set(1);
        creature2.magDefense3.set(1);
        creature2.magDefense4.set(1);
        creature2.magDefense5.set(1);
        creature2.attacks.forEach(attack => attack.set(1));
*/
```

## Binary Offset Mapping

When these `.set(1)` calls are executed, they write to specific offsets in the creature's binary data structure. Here's the complete mapping:

### Attack Stats (Creature Base Structure)

| Field Name | Offset | Size | Data Type | Set Value | Binary Write |
|------------|--------|------|-----------|-----------|--------------|
| attack1 | 0x07 | 1 byte | UInt8 | 1 | `bin[offset + 0x07] = 0x01` |
| attack2 | 0x08 | 1 byte | UInt8 | 1 | `bin[offset + 0x08] = 0x01` |
| magic1 | 0x09 | 1 byte | UInt8 | 1 | `bin[offset + 0x09] = 0x01` |

### Defense Stats (Creature Base Structure)

| Field Name | Offset | Size | Data Type | Set Value | Binary Write |
|------------|--------|------|-----------|-----------|--------------|
| weaponDefense1 | 0x4a | 2 bytes | UInt16 | 1 | `bin[offset + 0x4a] = 0x01; bin[offset + 0x4b] = 0x00` |
| weaponDefense2 | 0x4c | 2 bytes | UInt16 | 1 | `bin[offset + 0x4c] = 0x01; bin[offset + 0x4d] = 0x00` |
| weaponDefense3 | 0x4e | 2 bytes | UInt16 | 1 | `bin[offset + 0x4e] = 0x01; bin[offset + 0x4f] = 0x00` |
| magDefense1 | 0x50 | 2 bytes | UInt16 | 1 | `bin[offset + 0x50] = 0x01; bin[offset + 0x51] = 0x00` |
| magDefense2 | 0x52 | 2 bytes | UInt16 | 1 | `bin[offset + 0x52] = 0x01; bin[offset + 0x53] = 0x00` |
| magDefense3 | 0x54 | 2 bytes | UInt16 | 1 | `bin[offset + 0x54] = 0x01; bin[offset + 0x55] = 0x00` |
| magDefense4 | 0x56 | 2 bytes | UInt16 | 1 | `bin[offset + 0x56] = 0x01; bin[offset + 0x57] = 0x00` |
| magDefense5 | 0x58 | 2 bytes | UInt16 | 1 | `bin[offset + 0x58] = 0x01; bin[offset + 0x59] = 0x00` |

### EntityState Attack Stats (Dynamic Combat States)

| Field Name | Offset | Size | Data Type | Set Value | Binary Write |
|------------|--------|------|-----------|-----------|--------------|
| attack1 | 0x1a | 2 bytes | UInt16 | 1 | `bin[entityOffset + 0x1a] = 0x01; bin[entityOffset + 0x1b] = 0x00` |
| attack2 | 0x1c | 2 bytes | UInt16 | 1 | `bin[entityOffset + 0x1c] = 0x01; bin[entityOffset + 0x1d] = 0x00` |
| attack3 | 0x1e | 2 bytes | UInt16 | 1 | `bin[entityOffset + 0x1e] = 0x01; bin[entityOffset + 0x1f] = 0x00` |

## How to Track Binary Changes

### Step 1: Locate the Creature Data in FDAT.T

Creature data is stored in FDAT.T_PARTS files. Each area has creature definitions at specific offsets.

Example path:
```
FDAT.T_PARTS/128 281000-2c0800.T
```

### Step 2: Find Creature Base Offset

The creature base offset is calculated as:
```
offset = area_creature_section_start + (creature_index * creature_struct_size)
```

Typical creature struct size: ~0x200 bytes (varies by creature type)

### Step 3: Apply Isolation Patch

To set attack1 to 1:
```javascript
// In memory (Node.js Buffer)
creature.attack1.set(1);

// Actual binary write
bin[creature.offset_in_file + 0x07] = 0x01;
```

### Step 4: Verify in Hexdump

Use hexdump to verify the change:
```bash
hexdump -C FDAT.T_PARTS/file.T | grep -A2 -B2 "offset"
```

Look for the byte at offset 0x07 changing from original value to 0x01.

## Variables Involved in Damage Calculation

Based on hp_damage.mips analysis and the isolation patches, the damage calculation involves:

### Primary Damage Variables

1. **attack1, attack2, magic1** (0x07-0x09)
   - Base attack power values
   - UInt8 (0-255 range)
   - Setting to 1 creates minimal damage

2. **enemyPower** (0x0f) 
   - Damage multiplier or power rating
   - UInt16 (0-65535 range)
   - **NEWLY IDENTIFIED** - not in isolation patches
   - Used in multiplication operations in hp_damage.mips

3. **baseDamage** (0x11)
   - Base damage before modifiers
   - UInt16 (0-65535 range)
   - **NEWLY IDENTIFIED** - not in isolation patches
   - Used in arithmetic operations in hp_damage.mips

### Defense Variables

1. **weaponDefense1-3** (0x4a, 0x4c, 0x4e)
   - Physical damage reduction
   - UInt16 (0-65535 range)
   - Setting to 1 creates minimal defense

2. **magDefense1-5** (0x50, 0x52, 0x54, 0x56, 0x58)
   - Magical damage reduction (5 elements)
   - UInt16 (0-65535 range)
   - Setting to 1 creates minimal magic defense

### EntityState Attack Variables

1. **EntityState.attack1-3** (0x1a, 0x1c, 0x1e)
   - Dynamic attack values per combat state
   - Each creature can have multiple combat states (idle, attacking, special)
   - UInt16 (0-65535 range)
   - Setting to 1 neutralizes specific attack patterns

## Why enemyPower and baseDamage Were Not In Isolation Patches

The isolation patches **did not** include enemyPower (0x0f) or baseDamage (0x11) because:

1. **They weren't identified yet** - The patches were written before analyzing hp_damage.mips
2. **Offsets 0x0f and 0x11 were labeled "something3" and "something4"** - Unknown purpose at the time
3. **Focus was on known attack/defense stats** - Testing the obvious damage variables first

## Hypothesis: Complete Damage Formula

Based on the variables we've identified:

```
Final Damage = (baseDamage + attack1) * enemyPower - defenseValue
```

Where:
- `baseDamage` (0x11) - Base damage constant per creature
- `attack1` (0x07) - Attack power of current attack type
- `enemyPower` (0x0f) - Damage multiplier/power rating
- `defenseValue` - Player's defense stat (weaponDefense or magDefense)

This is a **hypothesis** that needs verification via Ghidra decompilation.

## Testing Strategy to Verify enemyPower and baseDamage

### Test 1: Verify enemyPower Affects Damage Multiplier

1. Create two identical enemies
2. Set enemy A: enemyPower = 10, attack1 = 5, baseDamage = 0
3. Set enemy B: enemyPower = 20, attack1 = 5, baseDamage = 0
4. Test in-game: Enemy B should deal ~2x damage of enemy A

### Test 2: Verify baseDamage Affects Base Output

1. Create two identical enemies
2. Set enemy A: baseDamage = 10, attack1 = 0, enemyPower = 1
3. Set enemy B: baseDamage = 20, attack1 = 0, enemyPower = 1
4. Test in-game: Enemy B should deal +10 more damage than enemy A

### Test 3: Isolation Patch Completeness

1. Apply original isolation patches (all known stats to 1)
2. **Additionally set**: enemyPower = 1, baseDamage = 1
3. Test in-game: Damage should be absolutely minimal (likely 1-2 HP per hit)
4. If damage is still high, other variables are involved

## Next Steps for Complete Understanding

### Immediate Actions

1. ✅ **Document this analysis** (this file)
2. ✅ **Fix data_model.js toString()** - Use enemyPower/baseDamage instead of something3/4
3. ⏳ **Create test preset** - Test enemyPower and baseDamage modifications
4. ⏳ **Verify in-game** - Confirm these fields affect damage output as hypothesized

### Decompilation Tasks

1. **Install Ghidra** (if not already installed)
2. **Import ST.EXE** - Main game executable
3. **Import hp_damage.mips** - Damage calculation routines
4. **Find damage function** - Locate function that uses offsets 0x07, 0x0f, 0x11
5. **Decompile to C** - Understand exact formula
6. **Document formula** - Write precise damage calculation

### Implementation Tasks

1. **Add randomization** - Include enemyPower and baseDamage in creature randomization
2. **Create presets** - Test presets with various enemyPower/baseDamage values
3. **Balance testing** - Ensure randomized values don't break game balance
4. **Document fields** - Update README with new discovered fields

## File Locations

### Source Code
- `randomize.js` lines 346-370 - Commented isolation patches
- `data_model.js` lines 1656-1850 - Creature class with field definitions
- `data_model.js` lines 1080-1130 - EntityStateData class

### Binary Data
- `FDAT.T_PARTS/` - Creature data files
- `hp_damage.mips` - Damage calculation binary
- `decompilation/ST.EXE` - Main executable

### Documentation
- `DECOMPILATION_TRACKING.md` - Overall tracking
- `decompilation/analysis-notes/INITIAL_ANALYSIS_RESULTS.md` - Binary analysis results
- `decompilation/GHIDRA_IMPORT_INSTRUCTIONS.md` - Decompilation setup
- This file - Isolation patches deep dive

## Glossary

- **Isolation Patch** - Setting game values to known constants for testing
- **Binary Offset** - Position of data field within binary file
- **UInt8** - Unsigned 8-bit integer (0-255)
- **UInt16** - Unsigned 16-bit integer (0-65535)
- **EntityState** - Dynamic combat state of creature (idle, attacking, etc.)
- **FDAT.T** - Main game data container file
- **hp_damage.mips** - MIPS assembly code for damage calculations
- **Creature Base** - Static creature definition data
- **Changeset** - JSON file describing binary modifications

## References

- PSX MIPS R3000A architecture
- Shadow Tower (SLUS-00863) US version
- Ghidra reverse engineering tool
- FDAT.T file format documentation (internal)

---

**Last Updated:** 2025-12-27
**Analyst:** AI Assistant
**Status:** Analysis complete, decompilation pending
