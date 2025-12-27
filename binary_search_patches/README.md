# Binary Search Patches - HP Damage Instruction Identification

## Overview

These 32 patches use binary search to pinpoint the exact instruction(s) responsible for magic damage calculation within the confirmed 256-byte range (0x2d430-0x2d530).

**User testing confirmed:** `full_nop_1` (NOPs entire 256-byte range) reduces magic damage from 120 HP to 3 HP (97.5% reduction).

## Binary Search Strategy

Progressive refinement from 256 bytes down to 4-instruction groups:

```
Level 1: 256 bytes → 2 halves (128 bytes each)
Level 2: 128 bytes → 4 quarters (64 bytes each)
Level 3: 64 bytes → 8 eighths (32 bytes each)
Level 4: 32 bytes → 16 groups (16 bytes = 4 instructions each)
```

## Patches Included

### Section M: 128-Byte Halves (2 patches)
- **half_1**: NOP 0x2d430-0x2d4b0 (first 128 bytes)
- **half_2**: NOP 0x2d4b0-0x2d530 (second 128 bytes)

### Section N: 64-Byte Quarters (4 patches)
- **quarter_1**: NOP 0x2d430-0x2d470 (bytes 0-63)
- **quarter_2**: NOP 0x2d470-0x2d4b0 (bytes 64-127)
- **quarter_3**: NOP 0x2d4b0-0x2d4f0 (bytes 128-191)
- **quarter_4**: NOP 0x2d4f0-0x2d530 (bytes 192-255)

### Section O: 32-Byte Eighths (8 patches)
- **eighth_1** through **eighth_8**: 32-byte blocks

### Section P: 16-Byte Groups (16 patches)
- **group_1** through **group_16**: 16-byte blocks (4 MIPS instructions each)

## Testing Procedure

### Step 1: Test Halves (2 tests)

Test which 128-byte half contains the damage calculation:

```bash
# Test first half
cp binary_search_patches/ST.EXE.half_1 iso-dump/ST.EXE
cd iso-dump
mkpsxiso st.xml -o ../test.bin
cd ..
# Load test.bin in emulator, get attacked by magic
# If damage reduced (120→3 HP): damage code is in first half
# If damage normal (120 HP): damage code is in second half

# Test second half if first didn't work
cp binary_search_patches/ST.EXE.half_2 iso-dump/ST.EXE
# ... same process
```

### Step 2: Test Quarters (4 tests max)

Once you know which half works, test the 2 quarters within that half:

```bash
# Example: If half_1 worked, test quarter_1 and quarter_2
cp binary_search_patches/ST.EXE.quarter_1 iso-dump/ST.EXE
# ... test in game

cp binary_search_patches/ST.EXE.quarter_2 iso-dump/ST.EXE
# ... test in game
```

### Step 3: Test Eighths (8 tests max)

Test the 2 eighths within the successful quarter:

```bash
# Example: If quarter_1 worked (0x2d430-0x2d470), test eighth_1 and eighth_2
```

### Step 4: Test Groups (16 tests max)

Test the 2 groups within the successful eighth to find the exact 4-instruction cluster:

```bash
# Example: If eighth_1 worked, test group_1 and group_2
```

### Step 5: Identify Exact Instructions

Once you've found the working group (16 bytes = 4 instructions):

```bash
# Use the disassembler to view those 4 instructions
python3 disassemble_st_exe.py --file iso-dump/ST.EXE --offset 0x[group_offset] --count 4
```

## Expected Results

When you find the correct range:
- **Damage reduced:** ~120 HP → ~3 HP (same as full_nop_1)
- **Per-hit:** ~40 HP → 1 HP

When range doesn't contain damage code:
- **Damage unchanged:** ~120 HP (normal)

## Maximum Testing Required

With binary search:
- **Worst case:** 2 + 4 + 8 + 16 = 30 tests
- **Best case:** 2 + 2 + 2 + 2 = 8 tests
- **Average:** ~15 tests

Much better than testing all 64 instructions individually (64 tests).

## After Finding Exact Instruction

Once you identify the specific instruction(s):

1. **Disassemble** to understand the operation
2. **Create precise patches:**
   - Invincibility (NOP the instruction)
   - Half damage (modify multiplier/divisor)
   - Double damage (modify multiplier/divisor)
   - 10x damage (remove division)
   - Custom damage values

## Files

- **ST.EXE.half_1** through **ST.EXE.group_16**: 32 test patches
- **ST.EXE.original**: Backup of original ST.EXE
- **PATCH_SUMMARY.txt**: Complete list of all patches
- **README.md**: This file

## Notes

- All patches based on file offsets (not runtime addresses)
- Each patch is a complete ST.EXE file ready to test
- Patches are independent - test one at a time
- Restore original ST.EXE between tests if needed
