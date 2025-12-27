# Extensive HP Damage Patches - Testing Guide

## Overview

Created **34 experimental patches** targeting different potential HP damage write locations throughout ST.EXE.

Previous patches didn't affect HP damage, so this comprehensive approach tests many different code locations to empirically identify the actual HP damage code.

## Patch Categories

### Section 1: Early Code (2 patches)
- `zero_section1_patch1` - File offset 0x15d50
- `zero_section1_patch2` - File offset 0x15d54

### Section 2: Mid Code (3 patches)
- `zero_section2_patch1` - File offset 0x2bc64
- `zero_section2_patch2` - File offset 0x2bc68
- `zero_section2_patch3` - File offset 0x2bc70

### Section 3: Damage Calculation (21 patches - most likely)
- `zero_damage_calc_1` through `zero_damage_calc_21`
- File offsets: 0x2d740 - 0x2d924
- These target the suspected damage calculation section

### Section 4: UI/Display (4 patches)
- `zero_ui_patch1` through `zero_ui_patch4`
- File offsets: 0x2daf4 - 0x2db3c

### Section 5: Initialization (4 patches)
- `zero_init_patch1` through `zero_init_patch4`
- File offsets: 0x2dfac - 0x2dff8

## Testing Procedure

Test each patch systematically:

```bash
# For each patch:
cp extensive_hp_patches/ST.EXE.zero_<patch_name> iso-dump/ST.EXE
mkpsxiso iso-dump/st.xml -o test_<patch_name>.bin
# Load test_<patch_name>.bin in emulator
# Start game or load save
# Get attacked by enemy
# Record result below
```

## Testing Results Matrix

Mark each patch as:
- ✓ WORKS - HP doesn't decrease (invincibility)
- ✗ FAILS - HP decreases normally
- ? - Needs testing

| Patch Name | File Offset | Result | Notes |
|------------|-------------|--------|-------|
| zero_section1_patch1 | 0x15d50 | ? | Early code |
| zero_section1_patch2 | 0x15d54 | ? | Early code |
| zero_section2_patch1 | 0x2bc64 | ? | Mid code |
| zero_section2_patch2 | 0x2bc68 | ? | Mid code |
| zero_section2_patch3 | 0x2bc70 | ? | Mid code |
| zero_damage_calc_1 | 0x2d740 | ? | HP[7] write |
| zero_damage_calc_2 | 0x2d74c | ? | HP[6] write |
| zero_damage_calc_3 | 0x2d750 | ? | HP[6] write alt |
| zero_damage_calc_4 | 0x2d75c | ? | HP[7] write alt |
| zero_damage_calc_5 | 0x2d77c | ? | HP[5] write |
| zero_damage_calc_6 | 0x2d794 | ? | HP[5] write alt |
| zero_damage_calc_7 | 0x2d79c | ? | HP[4] write |
| zero_damage_calc_8 | 0x2d7ac | ? | HP[4] write alt |
| zero_damage_calc_9 | 0x2d7b8 | ? | HP[5] write alt2 |
| zero_damage_calc_10 | 0x2d7dc | ? | HP[6.5] write |
| zero_damage_calc_11 | 0x2d7e4 | ? | HP[6] write |
| zero_damage_calc_12 | 0x2d7f0 | ? | HP[6] write alt |
| zero_damage_calc_13 | 0x2d7fc | ? | HP[6.5] write alt |
| zero_damage_calc_14 | 0x2d858 | ? | HP[8] write |
| zero_damage_calc_15 | 0x2d860 | ? | HP[8] write |
| zero_damage_calc_16 | 0x2d88c | ? | HP[8] write alt |
| zero_damage_calc_17 | 0x2d898 | ? | HP[8] write alt |
| zero_damage_calc_18 | 0x2d8e4 | ? | HP[0] write |
| zero_damage_calc_19 | 0x2d8ec | ? | HP[1] write |
| zero_damage_calc_20 | 0x2d91c | ? | HP[1] write alt |
| zero_damage_calc_21 | 0x2d924 | ? | HP[0] write alt |
| zero_ui_patch1 | 0x2daf4 | ? | UI HP[7] |
| zero_ui_patch2 | 0x2db0c | ? | UI HP[5] |
| zero_ui_patch3 | 0x2db24 | ? | UI HP[6.5] |
| zero_ui_patch4 | 0x2db3c | ? | UI HP[1] |
| zero_init_patch1 | 0x2dfac | ? | Init HP[25] |
| zero_init_patch2 | 0x2dfd0 | ? | Init HP[16] |
| zero_init_patch3 | 0x2dff4 | ? | Init HP[7] |
| zero_init_patch4 | 0x2dff8 | ? | Init HP[6] (target) |

## What to Look For

**If patch WORKS (HP doesn't decrease):**
- This is the actual HP damage code location!
- Report which patch worked
- We can then create verified patches (invincibility, force damage amounts, etc.)

**If patch FAILS (HP decreases normally):**
- That's not the HP damage code
- Continue testing other patches

**Expected:**
- Most likely one of the `damage_calc_*` patches will work
- UI patches probably won't affect actual damage
- Init patches definitely won't affect damage (they only run at startup)

## Quick Test Script

```bash
#!/bin/bash
for patch in extensive_hp_patches/ST.EXE.zero_damage_calc_*; do
    name=$(basename $patch)
    echo "========================================="
    echo "Testing $name"
    echo "========================================="
    cp $patch iso-dump/ST.EXE
    mkpsxiso iso-dump/st.xml -o test.bin -y
    echo "Load test.bin and check if HP decreases when attacked"
    read -p "Result (w=works/f=fails/s=skip): " result
    if [ "$result" = "w" ]; then
        echo "✓✓✓ FOUND IT: $name ✓✓✓"
        break
    fi
done
```

## After Finding Working Patch

Once identified, we can create:
1. **Invincibility patch** - Confirmed zero damage
2. **Force damage patches** - Set specific damage amounts (1 HP, 10 HP, etc.)
3. **Damage multiplier patches** - Double/half damage
4. Complete HP damage analysis documentation
