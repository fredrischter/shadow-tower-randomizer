# Shadow Tower Decompilation & Enemy Power/Base Damage Tracking

## Overview

This document tracks our work to identify and understand the `enemy_power` and `base_damage` fields in Shadow Tower's binary data, enabling them to be randomized.

## Background

### Commented Code in randomize.js
Lines 346-370 in `randomize.js` contain commented-out code that sets various enemy stats to 1:
- `attack1`, `attack2`, `magic1` 
- `weaponDefense1`, `weaponDefense2`, `weaponDefense3`
- `magDefense1` through `magDefense5`

These were apparently part of "isolation patches" that needed investigation.

## Current Understanding of Creature Data Structure

### Creature Class (data_model.js, lines 1656-1850)

The Creature class has the following known stat fields:

**Base Stats (offset from creature base):**
- `0x07` - attack1 (UInt8)
- `0x08` - attack2 (UInt8) 
- `0x09` - magic1 (UInt8)
- `0x0b` - height (UInt16)
- `0x0d` - weight (UInt16)
- `0x0f` - something3 (UInt16) - **UNKNOWN**
- `0x11` - something4 (UInt16) - **UNKNOWN**
- `0x19` - centerPositionHeight (UInt16)
- `0x1b` - shadowSize (UInt8)

**RPG-style Stats (offset from creature base):**
- `0x24` - str (Strength, UInt8)
- `0x25` - spd (Speed, UInt8)
- `0x26` - def (Defense, UInt8)
- `0x27` - bal (Balance, UInt8)
- `0x28` - sla (Slash, UInt8)
- `0x29` - smh (Smash, UInt8)
- `0x2a` - pir (Pierce, UInt8)
- `0x2b` - spr (Spirit, UInt8)
- `0x2c` - foc (Focus, UInt8)
- `0x2d` - ham (Harmony, UInt8)
- `0x2e` - pur (Purity, UInt8)
- `0x2f` - par (Particle, UInt8)
- `0x30` - mel (Melting, UInt8)
- `0x31` - sol (Soul, UInt8)
- `0x32` - hp (HP, UInt16)

**Defense Stats (offset from creature base):**
- `0x4a` - weaponDefense1 (UInt16)
- `0x4c` - weaponDefense2 (UInt16)
- `0x4e` - weaponDefense3 (UInt16)
- `0x50` - magDefense1 (UInt16)
- `0x52` - magDefense2 (UInt16)
- `0x54` - magDefense3 (UInt16)
- `0x56` - magDefense4 (UInt16)
- `0x58` - magDefense5 (UInt16)

### EntityStateData Class (data_model.js, lines 1080-1130)

EntityStateData contains attack-related fields in attack/spell states (type 0x20/0x30):
- `0x1a` - attack1 (UInt16)
- `0x1c` - attack2 (UInt16)
- `0x1e` - attack3 (UInt16)
- `0x03` - actionSpeedTimer (UInt8) - animation/action speed
- `0x08` - movementSpeed (UInt8) - movement speed

## Missing Fields to Identify

### enemy_power
- **Purpose:** Likely a damage multiplier or base attack power
- **Possible locations:**
  - Could be `something3` at offset 0x0f
  - Could be `something4` at offset 0x11
  - Could be in unmapped offsets between known fields
  - Could be in EntityStateData

### base_damage
- **Purpose:** Likely base damage value before modifiers
- **Possible locations:**
  - Could be `something3` at offset 0x0f
  - Could be `something4` at offset 0x11
  - Could be related to attack1/attack2/magic1 fields
  - Could be in EntityStateData

## Binary Analysis Files

### hp_damage.mips
- **Location:** `/home/runner/work/shadow-tower-randomizer/shadow-tower-randomizer/hp_damage.mips`
- **Size:** 65,552 bytes
- **Type:** MIPS assembly code/binary
- **Purpose:** Appears to contain damage calculation routines
- **Analysis needed:** Decompile to understand damage formulas

### ST.EXE
- **Location:** `/home/runner/work/shadow-tower-randomizer/shadow-tower-randomizer/iso-dump/ST.EXE`
- **Size:** 491,520 bytes
- **Type:** PlayStation executable (MIPS)
- **Purpose:** Main game executable
- **Analysis needed:** Find damage calculation functions

## Decompilation Setup Plan

### Tools Required

1. **Ghidra**
   - Free and open-source reverse engineering tool
   - Excellent MIPS support
   - Download: https://ghidra-sre.org/

2. **Alternative: IDA Pro**
   - Commercial tool (free version available)
   - Good MIPS support

3. **PSX-specific tools**
   - PSXImager - ISO extraction (already using dumpsxiso)
   - no$psx debugger - PSX emulator with debugging

### Setup Steps

```bash
# 1. Install Ghidra
# Download from https://ghidra-sre.org/ and extract

# 2. Import ST.EXE into Ghidra
# - Create new project
# - Import File: iso-dump/ST.EXE
# - Processor: MIPS:LE:32:default (little-endian)
# - Base address: 0x80000000 (typical PSX load address)

# 3. Import hp_damage.mips as raw MIPS code
# - Import File: hp_damage.mips
# - File format: Raw Binary
# - Language: MIPS:LE:32:default
# - Base address: TBD (needs analysis to determine)

# 4. Analyze binaries
# - Run Auto Analysis in Ghidra
# - Look for damage calculation functions
# - Cross-reference with known stat fields
```

## Analysis Strategy

### Phase 1: Function Identification
1. Search for functions that reference HP (offset 0x32)
2. Search for functions that reference attack1/attack2/magic1 (offsets 0x07-0x09)
3. Look for multiplication/division operations (damage calculations)
4. Identify damage calculation formulas

### Phase 2: Data Structure Mapping
1. Cross-reference decompiled code with known creature structure
2. Identify which offsets are read during damage calculations
3. Map unknown fields (something3, something4) to their purposes
4. Verify field sizes (UInt8 vs UInt16)

### Phase 3: Testing & Validation
1. Create test cases with known creature data
2. Modify suspected enemy_power/base_damage fields
3. Test in-game to verify changes affect damage output
4. Document confirmed field locations

### Phase 4: Implementation
1. Add enemy_power and base_damage accessors to Creature class
2. Add to randomization logic in randomize.js
3. Create test presets to verify randomization works
4. Document the new fields in README

## Next Steps

- [ ] Install Ghidra
- [ ] Import ST.EXE and set up PSX environment
- [ ] Import hp_damage.mips
- [ ] Begin function analysis
- [ ] Document findings as we discover them

## References

- Creature class: `data_model.js` lines 1656-1850
- EntityStateData class: `data_model.js` lines 1080-1130
- Commented isolation patches: `randomize.js` lines 346-370
- Creature data CSV: `creatures_data.csv`

## Notes

- PSX uses MIPS R3000A CPU (little-endian)
- PSX executables typically load at 0x80000000
- Shadow Tower is SLUS-00863 (US version)
