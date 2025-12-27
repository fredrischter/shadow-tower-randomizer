# Initial Binary Analysis Results

## Date: 2025-12-27

## Analysis Method
Used hexdump and grep to search for known creature stat offset patterns in `hp_damage.mips`.

## Findings

### Offset 0x07 (attack1) - CONFIRMED
**Found 10 references** in hp_damage.mips

Example pattern at 0x000002c0:
```
07 00 c4 88 04 00 c4 98  # Load instructions
```

This is a known working field, confirms our analysis method is valid.

### Offset 0x0f (something3) - CANDIDATE FOR enemy_power ⭐
**Found 10 references** in hp_damage.mips

Example patterns:
- `0x00000330: 08 00 c4 98 0f 00 c5 88` - Load halfword at offset 0x0f
- `0x00000350: 08 00 e4 b8 0f 00 e5 a8` - Store/manipulate 0x0f value
- Multiple instances at 0x820, 0x870, 0x8c0, 0x910

**Significance:** The frequency and context of 0x0f references suggest this is actively used in damage calculations. Very likely candidate for enemy_power.

### Offset 0x11 (something4) - CANDIDATE FOR base_damage ⭐
**Found 10 references** in hp_damage.mips

Example patterns:
- `0x0000005b0: 11 00 42 2c` - Compare/branch on 0x11
- `0x000000a0: 40 10 11 00 21 10 43 00` - Arithmetic with 0x11 value
- `0x00002880: 40 10 11 00` - Multiply/shift operation

**Significance:** The 0x11 offset appears in arithmetic contexts (especially `40 10 11 00` which is a left shift operation in MIPS). This suggests it's used in damage multiplier or calculation formulas. Strong candidate for base_damage.

### Offset 0x32 (HP) - CONFIRMED
**Found 9 references** in hp_damage.mips

Example patterns:
- `0x000000ec0: 23 80 82 00 32 00 02 24` - Load/store HP
- `0x00006480: 32 00 80 a4` - Store to HP offset

This is our known HP field, further validates the analysis.

## MIPS Instruction Patterns Observed

### Pattern 1: Load Halfword Unsigned (LHU)
```mips
0f 00 c5 88  # LHU instruction loading offset 0x0f
```
This loads a UInt16 value from creature structure.

### Pattern 2: Arithmetic Operations
```mips
40 10 11 00  # SLL (Shift Left Logical) - multiply by power of 2
21 10 43 00  # ADDU (Add Unsigned)
```
These appear with offsets 0x0f and 0x11, indicating they're used in calculations.

### Pattern 3: Sequential Field Access
Multiple offsets are loaded sequentially (0x07, 0x08, 0x0f), suggesting they're part of the same calculation routine.

## Conclusions

### High Confidence
1. **Offset 0x0f (something3)** is actively used in hp_damage.mips
2. **Offset 0x11 (something4)** is actively used in hp_damage.mips
3. Both offsets appear in arithmetic/calculation contexts

### Hypothesis
- **0x0f = enemy_power** (UInt16) - Damage multiplier or power rating
- **0x11 = base_damage** (UInt16) - Base damage value before modifiers

### Evidence Supporting This
1. Both offsets found in damage calculation binary (hp_damage.mips)
2. Both used in arithmetic operations (shifts, adds, multiplies)
3. Both are UInt16 fields (matching the field size in data_model.js)
4. Proximity to other combat stats (attack1 at 0x07-0x09)

## Next Steps

### Immediate Actions
1. ✅ Update data_model.js to add accessor methods for these fields
2. ✅ Name them appropriately (enemyPower, baseDamage)
3. ✅ Add to randomization logic
4. ⏳ Test in-game to verify changes affect damage output

### Further Analysis Needed
1. **Install Ghidra** for full decompilation
2. **Disassemble specific functions** that reference these offsets
3. **Understand the exact formula** used in damage calculation
4. **Document the relationship** between enemy_power, base_damage, and attack stats

### Testing Strategy
1. Create test preset with:
   - Normal values for all stats
   - Modified 0x0f value (double it)
   - Modified 0x11 value (double it)
2. Test each enemy to see damage output changes
3. Confirm which field affects what aspect of damage

## File Locations

### Analysis Output
- `/decompilation/analysis-output/offset_patterns.txt` - Full offset search results
- `/decompilation/analysis-output/lhu_instructions.txt` - UInt16 load instructions
- `/decompilation/analysis-output/hp_damage.mips.hexdump.txt` - Complete hexdump

### Documentation
- `DECOMPILATION_TRACKING.md` - Overall tracking document
- This file - Initial analysis results

## References

- MIPS instruction reference: `/decompilation/MIPS_REFERENCE.md`
- Ghidra setup guide: `/decompilation/GHIDRA_IMPORT_INSTRUCTIONS.md`
- Creature structure: `data_model.js` lines 1656-1850
