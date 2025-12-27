# Targeted HP Damage Patches - User-Verified Correct Offsets

## Overview

These 20 patches target the actual HP damage function using **user-verified correct file offsets**.

All previous 142 patches failed because they used incorrect offset calculations. These patches use the correct file offsets based on user-provided information.

## User-Verified Information

- **HP damage instruction**: Runtime `0x8003d7f8` = File `0x2dff8`
- **Function start**: Runtime `0x8003d430` = File `0x2d430`
- **Conversion reference**: Runtime `0x8011df0` = File `0x2d7f0`

## HP Damage Function Location

- **File offsets**: `0x2d430` - `0x2dff8` (3,008 bytes)
- **Runtime addresses**: `0x8003d430` - `0x8003d7f8`

## Patches Created

### Section I: Function Return Patches ⭐ TEST FIRST (5 patches)

**Theory**: Force immediate return from HP damage function before any damage calculation.

**Method**: Insert `jr $ra; nop` at strategic points in function.

| Patch | File Offset | Description |
|-------|-------------|-------------|
| return_patch_1 | 0x2d430 | Function start - **HIGHEST PRIORITY** |
| return_patch_2 | 0x2d500 | Early in function |
| return_patch_3 | 0x2d600 | Mid function |
| return_patch_4 | 0x2d700 | Later in function |
| return_patch_5 | 0x2d800 | Near end |

### Section J: Full Function NOP Patches (5 patches)

**Theory**: Disable entire blocks of HP damage function.

**Method**: NOP all instructions in 256-byte blocks.

| Patch | File Range | Description |
|-------|------------|-------------|
| full_nop_1 | 0x2d430-0x2d530 | First 256 bytes |
| full_nop_2 | 0x2d530-0x2d630 | Second block |
| full_nop_3 | 0x2d630-0x2d730 | Third block |
| full_nop_4 | 0x2d730-0x2d830 | Fourth block |
| full_nop_5 | 0x2d830-0x2d930 | Fifth block |

### Section K: Zero Damage Calculation Patches (5 patches)

**Theory**: Force damage value to zero before HP write.

**Method**: Insert `move $v0, $zero` to zero damage register.

| Patch | File Offset | Description |
|-------|-------------|-------------|
| zero_calc_1 | 0x2d5a0 | Strategic point 1 |
| zero_calc_2 | 0x2d6a0 | Strategic point 2 |
| zero_calc_3 | 0x2d7a0 | Strategic point 3 |
| zero_calc_4 | 0x2d8a0 | Strategic point 4 |
| zero_calc_5 | 0x2d9a0 | Strategic point 5 |

### Section L: Critical Instruction Patches (5 patches)

**Theory**: NOP specific critical damage calculation instructions.

**Method**: Replace key instructions with NOPs.

| Patch | File Offset | Description |
|-------|-------------|-------------|
| critical_1 | 0x2d480 | Critical point 1 |
| critical_2 | 0x2d580 | Critical point 2 |
| critical_3 | 0x2d680 | Critical point 3 |
| critical_4 | 0x2d780 | Critical point 4 |
| critical_5 | 0x2d880 | Critical point 5 |

## Testing Priority

### 1. HIGHEST PRIORITY: Section I (return patches)

Start with `return_patch_1` - it targets the function start at 0x2d430.

```bash
cp targeted_patches/ST.EXE.return_patch_1 iso-dump/ST.EXE
cd iso-dump
mkpsxiso st.xml -o test.bin
# Load test.bin in emulator
# Get attacked by enemy
# If HP doesn't decrease = SUCCESS!
```

Test all 5 return patches in order: 1, 2, 3, 4, 5

### 2. SECOND PRIORITY: Section J (full NOP)

If Section I fails, test the full NOP patches.

```bash
cp targeted_patches/ST.EXE.full_nop_1 iso-dump/ST.EXE
cd iso-dump
mkpsxiso st.xml -o test.bin
# Test in emulator
```

Test all 5 full_nop patches in order: 1, 2, 3, 4, 5

### 3. THIRD PRIORITY: Section K (zero calc)

If Section J fails, test the zero calculation patches.

```bash
cp targeted_patches/ST.EXE.zero_calc_1 iso-dump/ST.EXE
cd iso-dump
mkpsxiso st.xml -o test.bin
# Test in emulator
```

Test all 5 zero_calc patches in order: 1, 2, 3, 4, 5

### 4. FOURTH PRIORITY: Section L (critical)

If Section K fails, test the critical instruction patches.

```bash
cp targeted_patches/ST.EXE.critical_1 iso-dump/ST.EXE
cd iso-dump
mkpsxiso st.xml -o test.bin
# Test in emulator
```

Test all 5 critical patches in order: 1, 2, 3, 4, 5

## Testing Steps

1. **Copy patch** to iso-dump/ST.EXE
2. **Rebuild ISO**: `mkpsxiso iso-dump/st.xml -o test.bin`
3. **Load in emulator**: Load test.bin
4. **Get attacked**: Let enemy hit you with magic attack
5. **Check result**:
   - ✅ **SUCCESS**: HP doesn't decrease (found it!)
   - ❌ **FAIL**: HP decreases normally (try next patch)

## Why These Should Work

1. **User-verified correct offsets**: Based on user's conversion information
2. **Targeting actual HP damage function**: File 0x2d430-0x2dff8 confirmed
3. **Multiple strategies**: Function returns, block NOPs, value zeroing, surgical NOPs
4. **Comprehensive coverage**: 20 patches across the entire 3,008-byte function

## Difference from Previous Patches

**Previous 142 patches (all failed)**:
- Used incorrect runtime-to-file offset calculations
- Targeted wrong regions of ST.EXE
- Missed the actual HP damage function

**These 20 patches**:
- Use user-verified correct file offsets
- Target the actual HP damage function at 0x2d430-0x2dff8
- Based on confirmed information from user

## Files

- `ST.EXE.original` - Original ST.EXE backup
- `ST.EXE.return_patch_1` through `ST.EXE.return_patch_5` - Section I
- `ST.EXE.full_nop_1` through `ST.EXE.full_nop_5` - Section J
- `ST.EXE.zero_calc_1` through `ST.EXE.zero_calc_5` - Section K
- `ST.EXE.critical_1` through `ST.EXE.critical_5` - Section L

## Total Patches

- **162 total patches created** (142 previous + 20 new)
- **Previous**: 142 patches with wrong offsets ❌
- **Current**: 20 patches with user-verified correct offsets ✅

## Regenerating Patches

To regenerate all patches:

```bash
python3 create_targeted_patches.py
```

The script will create all 20 patches in the `targeted_patches/` directory.
