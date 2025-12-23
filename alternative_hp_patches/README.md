# Alternative HP Damage Patches - Testing Guide

## Overview

Created **63 experimental patches** using a new strategy after 34 previous `sh`-only patches failed.

**New Approach:** Target different instruction types and patterns that could be performing HP damage calculations.

## Patch Categories

### Section A: Subtraction Instructions (15 patches)
**Files:** `ST.EXE.subu_patch_1` through `ST.EXE.subu_patch_15`

**Theory:** HP damage is calculated by subtracting damage from current HP using `subu` (subtract unsigned) instruction.

**Instruction:** `subu $dest, $current_hp, $damage`

**Priority:** ⭐ **HIGH** - Most likely to work

### Section B: Store Byte Instructions (12 patches)
**Files:** `ST.EXE.sb_patch_1` through `ST.EXE.sb_patch_12`

**Theory:** HP might be stored as 8-bit values (0-255) using `sb` (store byte) instead of `sh` (store halfword).

**Instruction:** `sb $value, offset($base)`

**Priority:** MEDIUM

### Section C: Store Word Instructions (10 patches)
**Files:** `ST.EXE.sw_patch_1` through `ST.EXE.sw_patch_10`

**Theory:** HP might be stored as 32-bit values using `sw` (store word) instruction.

**Instruction:** `sw $value, offset($base)`

**Priority:** LOW

### Section D: Load-Modify-Store Patterns (15 patches)
**Files:** `ST.EXE.pattern_patch_1` through `ST.EXE.pattern_patch_15`

**Theory:** HP damage uses typical pattern: load current HP, subtract damage, store result.

**Pattern:**
```
lh   $t0, offset($base)   # Load current HP
subu $t0, $t0, $damage    # Subtract damage (PATCHED)
sh   $t0, offset($base)   # Store new HP
```

**Priority:** ⭐ **HIGH** - Complete damage sequence

### Section E: Expanded Search (11 patches)
**Files:** `ST.EXE.expanded_patch_1` through `ST.EXE.expanded_patch_11`

**Theory:** HP damage code might be outside the hp_damage section of ST.EXE.

**Target:** Various locations throughout entire ST.EXE file.

**Priority:** MEDIUM

## Testing Procedure

### Quick Test (Priority Patches First)

```bash
# 1. Test Section A (subu) - 15 patches
for patch in alternative_hp_patches/ST.EXE.subu_patch_*; do
    echo "Testing $(basename $patch)"
    cp "$patch" iso-dump/ST.EXE
    mkpsxiso iso-dump/st.xml -o test_patch.bin
    # Load test_patch.bin in emulator
    # Get attacked by enemy
    # If HP doesn't decrease → FOUND IT!
done

# 2. Test Section D (patterns) - 15 patches
for patch in alternative_hp_patches/ST.EXE.pattern_patch_*; do
    echo "Testing $(basename $patch)"
    cp "$patch" iso-dump/ST.EXE
    mkpsxiso iso-dump/st.xml -o test_patch.bin
    # Test in emulator
done

# 3. Test remaining sections if needed
```

### Systematic Test (All 63 Patches)

```bash
# Test all patches in order
for patch in alternative_hp_patches/ST.EXE.subu_patch_* \
             alternative_hp_patches/ST.EXE.pattern_patch_* \
             alternative_hp_patches/ST.EXE.sb_patch_* \
             alternative_hp_patches/ST.EXE.expanded_patch_* \
             alternative_hp_patches/ST.EXE.sw_patch_*; do
    
    PATCH_NAME=$(basename "$patch" | sed 's/ST.EXE.//')
    echo "==== Testing $PATCH_NAME ===="
    
    cp "$patch" iso-dump/ST.EXE
    mkpsxiso iso-dump/st.xml -o "test_${PATCH_NAME}.bin"
    
    # Load ISO in emulator
    # Start game or load save
    # Get attacked by enemy (slime, etc.)
    # Record result below
    
    read -p "Did HP decrease? (y/n): " result
    echo "$PATCH_NAME: $result" >> test_results.txt
done
```

## Expected Results

### If Patch WORKS (HP doesn't decrease)
```
✓ Found actual HP damage code!
✓ Location: [check create_alternative_patches.py for offset]
✓ Instruction type: [subu/sb/sw/pattern/etc.]
```

### If Patch FAILS (HP decreases normally)
```
✗ Not the HP damage code
✗ Continue testing next patch
```

## Results Matrix

| Section | Patch Name | Offset | Result | Notes |
|---------|-----------|--------|--------|-------|
| A | subu_patch_1 | 0x2d6f0 | ? | Subtraction instruction |
| A | subu_patch_2 | 0x2d6f8 | ? | Subtraction instruction |
| ... | ... | ... | ? | ... |
| D | pattern_patch_1 | 0x2d5e0 | ? | Load-modify-store pattern |
| D | pattern_patch_2 | 0x2d5f0 | ? | Load-modify-store pattern |
| ... | ... | ... | ? | ... |

## Restore Original

```bash
cp alternative_hp_patches/ST.EXE.original iso-dump/ST.EXE
```

## Why This Approach Should Work

**Previous Failures:**
- 14 original patches → targeted MP calculation (wrong target)
- 6 corrected patches → targeted `sh` instructions only (incomplete)
- 34 experimental patches → targeted `sh` instructions only (wrong instruction type)

**New Strategy:**
1. **Target calculation, not just storage** - `subu` performs the actual damage subtraction
2. **Try alternative storage types** - `sb` (byte) and `sw` (word) instead of just `sh` (halfword)
3. **Target complete patterns** - entire load-modify-store sequences
4. **Expand search area** - beyond just hp_damage section

**Logic:**
- HP damage MUST subtract damage from current HP somewhere
- This subtraction uses `subu` or similar instruction
- NOPing the subtraction should prevent damage
- If not subtraction, try different storage instruction types
- If not in hp_damage section, search elsewhere

## Next Steps After Finding Working Patch

1. Note which patch worked and its offset
2. Examine the actual instruction at that offset
3. Create verified patches:
   - Invincibility (confirmed)
   - Force damage to specific values
   - Damage multipliers
4. Document complete HP damage flow
5. Update analysis with confirmed locations

## Contact

Report results in GitHub PR comments with patch name that worked!
