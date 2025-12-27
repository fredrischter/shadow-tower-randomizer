# Enemy Power and Base Damage Field Analysis

## Question: Where did we find these fields?

The `enemyPower` and `baseDamage` fields were identified through binary analysis of Shadow Tower's damage calculation code.

## Discovery Process

### 1. Starting Point: Isolation Patches

In `randomize.js` (lines 346-370), there are commented-out "isolation patches" that set various combat stats to 1 for testing:

```javascript
creature.attack1.set(1);
creature.attack2.set(1);
creature.magic1.set(1);
creature.weaponDefense1.set(1);
// ... etc
```

**Key observation:** These patches were **incomplete** - they were missing some fields.

### 2. Binary Analysis Discovery

We analyzed `hp_damage.mips` (the MIPS assembly code for damage calculations) and found two unknown fields that were actively used in damage calculations:

| Offset | Field Name | Type | References | Usage Context |
|--------|------------|------|------------|---------------|
| **0x0f** | **enemyPower** | UInt16 | 10 refs | Used in **multiplication** operations |
| **0x11** | **baseDamage** | UInt16 | 10 refs | Used in **arithmetic** operations (add, shift) |

**Evidence:**
- Both fields appear in 6 different code regions alongside attack1 (0x07)
- Found in functions with multiplication (MULT) and addition (ADD) instructions
- Pattern suggests: `damage = (baseDamage + attack) × enemyPower - defense`

### 3. Code Mapping

These fields were previously labeled as "something3" and "something4" in `data_model.js`:

**Before (unknown):**
```javascript
this.something3 = new UInt16(bin, offset + 0x0f);  // Unknown
this.something4 = new UInt16(bin, offset + 0x11);  // Unknown
```

**After (identified):**
```javascript
this.enemyPower = new UInt16(bin, offset + 0x0f);  // Damage multiplier
this.baseDamage = new UInt16(bin, offset + 0x11);  // Base damage value
```

## Field Locations in Binary Data

### Memory Layout

```
Creature Data Structure:
┌─────────────────────────────────────┐
│ Offset 0x07: attack1 (UInt8)        │  ← Known field, in isolation patches
│ Offset 0x08: attack2 (UInt8)        │  ← Known field, in isolation patches
│ Offset 0x09: magic1 (UInt8)         │  ← Known field, in isolation patches
│ ...                                 │
│ Offset 0x0f: enemyPower (UInt16) ⭐ │  ← NEWLY IDENTIFIED
│ Offset 0x11: baseDamage (UInt16) ⭐ │  ← NEWLY IDENTIFIED
│ ...                                 │
│ Offset 0x4a: weaponDefense1         │  ← Known field, in isolation patches
│ ...                                 │
└─────────────────────────────────────┘
```

### Binary File Location

- **Source File:** FDAT.T_PARTS files (extracted from Shadow Tower ISO)
- **Offset Calculation:** `creature_base_offset + 0x0f` (enemyPower) or `+ 0x11` (baseDamage)
- **Data Type:** UInt16 (2 bytes, little-endian)
- **Value Range:** 0-65535

## Sample Values from Game Data

Based on the generated creature_power_table.csv files, here are representative values:

### High-Power Creatures (Bosses)

| Creature | HP | Attack1 | Attack2 | Magic1 | Enemy Power (0x0f) | Base Damage (0x11) |
|----------|-------|---------|---------|--------|-------------------|-------------------|
| abraxus | 65535 | 80 | 90 | 12 | ? | ? |
| cerberus | 2300 | 30 | 30 | 0 | ? | ? |
| king_edward | 6500 | 154 | 150 | 35 | ? | ? |

### Mid-Power Creatures

| Creature | HP | Attack1 | Attack2 | Magic1 | Enemy Power (0x0f) | Base Damage (0x11) |
|----------|-------|---------|---------|--------|-------------------|-------------------|
| elder | varies | varies | varies | varies | ? | ? |
| steel_servant | 1810 | 26 | 28 | 0 | ? | ? |

### Low-Power Creatures

| Creature | HP | Attack1 | Attack2 | Magic1 | Enemy Power (0x0f) | Base Damage (0x11) |
|----------|-------|---------|---------|--------|-------------------|-------------------|
| acid_slime | 95 | varies | varies | varies | ? | ? |
| skeleton | 384 | varies | varies | varies | ? | ? |

**Note:** The "?" values indicate these fields need to be extracted from actual binary data. The table structure has been added to the code but requires running the randomizer on an actual ISO file to populate the values.

## How to Generate Complete Table

To see the actual values for all creatures:

1. **Run the randomizer** with any preset:
   ```bash
   npm run mod "./path/to/st.bin" "./params/no-change.json"
   ```

2. **Check the output:**
   ```
   generated/no-change/spoilers/creature_power_table.csv
   generated/no-change/spoilers/creature_power_table.md
   ```

3. **The CSV will now include:**
   - All existing creature stats
   - **Enemy Power (0x0f)** column
   - **Base Damage (0x11)** column

## Verification Method

These field identifications are based on:

1. ✅ **Static Analysis** - Found in hp_damage.mips hexdump
2. ✅ **Pattern Analysis** - Used in arithmetic operations
3. ✅ **Sequential Loads** - Loaded together with attack stats
4. ⏳ **Ghidra Decompilation** - Pending (will confirm exact formula)
5. ⏳ **In-Game Testing** - Pending (will verify field purposes)

## References

- **Binary Analysis:** `decompilation/analysis-notes/INITIAL_ANALYSIS_RESULTS.md`
- **Complete Analysis:** `decompilation/ISOLATION_PATCHES_RECAP.md`
- **MIPS Patterns:** Run `./analyze_mips_patterns.sh` to see the 6 function locations
- **Code Changes:** `data_model.js` lines 1763-1764, `randomize.js` lines 2169-2408

## Next Steps

1. **Generate table with actual values** - Run randomizer on ISO file
2. **Analyze value patterns** - Look for correlations with creature difficulty
3. **Test hypothesis** - Modify values and test damage output in-game
4. **Confirm formula** - Use Ghidra to decompile damage calculation functions

---

**Status:** Fields identified and mapped to code. Actual values require ISO processing.

**Last Updated:** 2025-12-27
