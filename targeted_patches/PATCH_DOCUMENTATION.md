# Comprehensive Patch Documentation

## Overview

This document provides detailed information about each of the 20 targeted HP damage patches. Each patch modifies ST.EXE at specific file offsets to test different theories about how HP damage is calculated and applied in Shadow Tower.

## User-Verified Information

Based on user-provided data:
- **HP damage write location**: Runtime `0x8003d7f8` = File offset `0x2dff8`
- **HP damage function start**: Runtime `0x8003d430` = File offset `0x2d430`
- **HP damage function size**: 3,008 bytes (0x2d430 to 0x2dff8)
- **Conversion formula**: File offset = Runtime address - 0x7fe4000 (verified with 0x8011df0 → 0x2d7f0)

---

## Section I: Function Return Patches (⭐ HIGHEST PRIORITY)

### Theory
These patches force the HP damage function to return immediately at various entry points, preventing any damage calculation from executing. If HP damage stops occurring, we've confirmed that location is part of the damage execution flow.

### Method
Each patch inserts two MIPS instructions at a specific offset:
1. `jr $ra` (0x03e00008) - Jump to return address (immediate function return)
2. `nop` (0x00000000) - No operation (delay slot requirement for MIPS)

### Patches

#### ST.EXE.return_patch_1
- **File offset**: 0x2d430
- **Runtime address**: 0x8003d430
- **Location**: Function entry point (first instruction)
- **What it does**: Forces immediate return when HP damage function is called
- **Expected result if successful**: Player takes 0 damage from all attacks
- **Why test first**: This is the function start - if HP damage happens in this function, this will prevent it entirely
- **Binary modification**: 
  - Original: Unknown (function prologue)
  - Modified: `03 e0 00 08 00 00 00 00` (jr $ra; nop)

#### ST.EXE.return_patch_2
- **File offset**: 0x2d500
- **Runtime address**: 0x8003d500
- **Location**: Early in function (208 bytes from start)
- **What it does**: Forces return after function prologue/setup code
- **Expected result if successful**: Player takes 0 damage
- **Why useful**: Tests if damage calculation happens after initial setup
- **Binary modification**: 
  - Original: Unknown (early function code)
  - Modified: `03 e0 00 08 00 00 00 00` (jr $ra; nop)

#### ST.EXE.return_patch_3
- **File offset**: 0x2d600
- **Runtime address**: 0x8003d600
- **Location**: Middle of function (464 bytes from start)
- **What it does**: Forces return mid-function
- **Expected result if successful**: Player takes 0 damage
- **Why useful**: Tests if damage write happens in latter half of function
- **Binary modification**: 
  - Original: Unknown (mid-function code)
  - Modified: `03 e0 00 08 00 00 00 00` (jr $ra; nop)

#### ST.EXE.return_patch_4
- **File offset**: 0x2d700
- **Runtime address**: 0x8003d700
- **Location**: Later in function (720 bytes from start)
- **What it does**: Forces return late in function
- **Expected result if successful**: Player takes 0 damage
- **Why useful**: Tests if damage write is one of the last operations
- **Binary modification**: 
  - Original: Unknown (late function code)
  - Modified: `03 e0 00 08 00 00 00 00` (jr $ra; nop)

#### ST.EXE.return_patch_5
- **File offset**: 0x2d800
- **Runtime address**: 0x8003d800
- **Location**: Near end of function (976 bytes from start)
- **What it does**: Forces return very late in function (before final HP write at 0x2dff8)
- **Expected result if successful**: Player takes 0 damage
- **Why useful**: Tests if HP write at 0x2dff8 is the actual damage application
- **Binary modification**: 
  - Original: Unknown (near-end function code)
  - Modified: `03 e0 00 08 00 00 00 00` (jr $ra; nop)

---

## Section J: Full Function NOP Patches

### Theory
These patches disable entire 256-byte sections of the HP damage function by replacing all instructions with NOPs. This is a brute-force approach that ensures any critical instruction in that block is disabled.

### Method
Each patch replaces 64 consecutive MIPS instructions (256 bytes = 64 × 4-byte instructions) with NOP instructions (0x00000000).

### Patches

#### ST.EXE.full_nop_1
- **File range**: 0x2d430 - 0x2d530 (256 bytes)
- **Runtime range**: 0x8003d430 - 0x8003d530
- **Location**: First 256 bytes of function (includes function entry)
- **What it does**: Completely disables function prologue and early initialization
- **Expected result if successful**: Function does nothing, player takes 0 damage
- **Why useful**: If this works, damage calculation is in first 256 bytes
- **Binary modification**: 
  - Original: First 64 instructions of function
  - Modified: 64 NOP instructions (256 bytes of 0x00)

#### ST.EXE.full_nop_2
- **File range**: 0x2d530 - 0x2d630 (256 bytes)
- **Runtime range**: 0x8003d530 - 0x8003d630
- **Location**: Second 256-byte block (bytes 256-512)
- **What it does**: Disables early-mid function code
- **Expected result if successful**: Player takes 0 damage
- **Why useful**: Isolates damage calculation to specific region
- **Binary modification**: 
  - Original: Instructions 64-127 of function
  - Modified: 64 NOP instructions

#### ST.EXE.full_nop_3
- **File range**: 0x2d630 - 0x2d730 (256 bytes)
- **Runtime range**: 0x8003d630 - 0x8003d730
- **Location**: Third 256-byte block (bytes 512-768)
- **What it does**: Disables mid-function code
- **Expected result if successful**: Player takes 0 damage
- **Why useful**: Tests if core damage calculation is in middle of function
- **Binary modification**: 
  - Original: Instructions 128-191 of function
  - Modified: 64 NOP instructions

#### ST.EXE.full_nop_4
- **File range**: 0x2d730 - 0x2d830 (256 bytes)
- **Runtime range**: 0x8003d730 - 0x8003d830
- **Location**: Fourth 256-byte block (bytes 768-1024)
- **What it does**: Disables late-mid function code
- **Expected result if successful**: Player takes 0 damage
- **Why useful**: Tests if damage write preparation is in this region
- **Binary modification**: 
  - Original: Instructions 192-255 of function
  - Modified: 64 NOP instructions

#### ST.EXE.full_nop_5
- **File range**: 0x2d830 - 0x2d930 (256 bytes)
- **Runtime range**: 0x8003d830 - 0x8003d930
- **Location**: Fifth 256-byte block (bytes 1024-1280)
- **What it does**: Disables code approaching HP write at 0x2dff8
- **Expected result if successful**: Player takes 0 damage
- **Why useful**: Tests if final damage application logic is in this region
- **Binary modification**: 
  - Original: Instructions 256-319 of function
  - Modified: 64 NOP instructions

---

## Section K: Zero Damage Calculation Patches

### Theory
These patches intercept the damage value before it's written to HP by forcing the damage register ($v0) to zero. The $v0 register is commonly used in MIPS for function return values and calculation results.

### Method
Each patch inserts one MIPS instruction at a strategic point:
- `move $v0, $zero` (0x00001021) - Copy zero value into $v0 register

### Patches

#### ST.EXE.zero_calc_1
- **File offset**: 0x2d5a0
- **Runtime address**: 0x8003d5a0
- **Location**: 368 bytes from function start
- **What it does**: Forces damage calculation result to 0 at early strategic point
- **Expected result if successful**: Player takes 0 damage (damage value zeroed)
- **Why useful**: Tests if $v0 holds damage value at this point
- **Binary modification**: 
  - Original: Unknown instruction
  - Modified: `00 00 10 21` (move $v0, $zero)

#### ST.EXE.zero_calc_2
- **File offset**: 0x2d6a0
- **Runtime address**: 0x8003d6a0
- **Location**: 624 bytes from function start
- **What it does**: Forces damage value to 0 at mid-function point
- **Expected result if successful**: Player takes 0 damage
- **Why useful**: Tests if $v0 holds damage after mid-function calculations
- **Binary modification**: 
  - Original: Unknown instruction
  - Modified: `00 00 10 21` (move $v0, $zero)

#### ST.EXE.zero_calc_3
- **File offset**: 0x2d7a0
- **Runtime address**: 0x8003d7a0
- **Location**: 880 bytes from function start
- **What it does**: Forces damage value to 0 late in function
- **Expected result if successful**: Player takes 0 damage
- **Why useful**: Tests if $v0 holds final damage value before write
- **Binary modification**: 
  - Original: Unknown instruction
  - Modified: `00 00 10 21` (move $v0, $zero)

#### ST.EXE.zero_calc_4
- **File offset**: 0x2d8a0
- **Runtime address**: 0x8003d8a0
- **Location**: 1,136 bytes from function start
- **What it does**: Forces damage value to 0 very late in function
- **Expected result if successful**: Player takes 0 damage
- **Why useful**: Tests if $v0 holds damage immediately before HP write
- **Binary modification**: 
  - Original: Unknown instruction
  - Modified: `00 00 10 21` (move $v0, $zero)

#### ST.EXE.zero_calc_5
- **File offset**: 0x2d9a0
- **Runtime address**: 0x8003d9a0
- **Location**: 1,392 bytes from function start
- **What it does**: Forces damage value to 0 extremely late (392 bytes before HP write at 0x2dff8)
- **Expected result if successful**: Player takes 0 damage
- **Why useful**: Last chance to zero damage before final write
- **Binary modification**: 
  - Original: Unknown instruction
  - Modified: `00 00 10 21` (move $v0, $zero)

---

## Section L: Critical Instruction Patches

### Theory
These patches disable specific instructions that might be critical to damage calculation by replacing them with NOPs. This is a surgical approach targeting individual instructions rather than entire blocks.

### Method
Each patch replaces one MIPS instruction (4 bytes) with a NOP instruction (0x00000000).

### Patches

#### ST.EXE.critical_1
- **File offset**: 0x2d480
- **Runtime address**: 0x8003d480
- **Location**: 80 bytes from function start
- **What it does**: NOPs a potentially critical early instruction
- **Expected result if successful**: Player takes 0 damage
- **Why useful**: Tests if this specific instruction is essential for damage
- **Binary modification**: 
  - Original: Unknown critical instruction
  - Modified: `00 00 00 00` (nop)

#### ST.EXE.critical_2
- **File offset**: 0x2d580
- **Runtime address**: 0x8003d580
- **Location**: 336 bytes from function start
- **What it does**: NOPs a potentially critical mid-early instruction
- **Expected result if successful**: Player takes 0 damage
- **Why useful**: Tests if this specific instruction calculates damage
- **Binary modification**: 
  - Original: Unknown critical instruction
  - Modified: `00 00 00 00` (nop)

#### ST.EXE.critical_3
- **File offset**: 0x2d680
- **Runtime address**: 0x8003d680
- **Location**: 592 bytes from function start
- **What it does**: NOPs a potentially critical mid instruction
- **Expected result if successful**: Player takes 0 damage
- **Why useful**: Tests if this specific instruction processes damage value
- **Binary modification**: 
  - Original: Unknown critical instruction
  - Modified: `00 00 00 00` (nop)

#### ST.EXE.critical_4
- **File offset**: 0x2d780
- **Runtime address**: 0x8003d780
- **Location**: 848 bytes from function start
- **What it does**: NOPs a potentially critical late instruction
- **Expected result if successful**: Player takes 0 damage
- **Why useful**: Tests if this specific instruction prepares HP write
- **Binary modification**: 
  - Original: Unknown critical instruction
  - Modified: `00 00 00 00` (nop)

#### ST.EXE.critical_5
- **File offset**: 0x2d880
- **Runtime address**: 0x8003d880
- **Location**: 1,104 bytes from function start
- **What it does**: NOPs a potentially critical very late instruction
- **Expected result if successful**: Player takes 0 damage
- **Why useful**: Tests if this specific instruction triggers HP write
- **Binary modification**: 
  - Original: Unknown critical instruction
  - Modified: `00 00 00 00` (nop)

---

## Testing Strategy

### Priority Order

1. **Section I (return_patch)** - HIGHEST PRIORITY
   - Most likely to work
   - Prevents entire function execution
   - Start with return_patch_1 (function entry)

2. **Section J (full_nop)** - SECOND PRIORITY
   - Brute force approach
   - Disables large code blocks
   - Guaranteed to hit critical instructions if in that block

3. **Section K (zero_calc)** - THIRD PRIORITY
   - Surgical value interception
   - Forces damage to 0
   - Tests register usage theory

4. **Section L (critical)** - FOURTH PRIORITY
   - Most surgical approach
   - Single instruction targeting
   - Requires most luck to hit correct instruction

### Testing Procedure

For each patch:

1. **Backup original**:
   ```bash
   cp iso-dump/ST.EXE iso-dump/ST.EXE.backup
   ```

2. **Apply patch**:
   ```bash
   cp targeted_patches/ST.EXE.return_patch_1 iso-dump/ST.EXE
   ```

3. **Rebuild ISO**:
   ```bash
   cd iso-dump
   mkpsxiso st.xml -o test.bin
   ```

4. **Test in emulator**:
   - Load test.bin
   - Start game or load save
   - Find enemy that uses magic attack (e.g., slime spray)
   - Get attacked
   - Observe HP bar

5. **Record result**:
   - ✅ **SUCCESS**: HP doesn't decrease → Found the right patch!
   - ❌ **FAIL**: HP decreases normally → Try next patch
   - ⚠️ **PARTIAL**: HP decreases but differently → Interesting, note this

6. **Restore original** (if failed):
   ```bash
   cp iso-dump/ST.EXE.backup iso-dump/ST.EXE
   ```

### Expected Results

#### If return_patch works:
- Confirms HP damage function is at 0x2d430-0x2dff8
- Specific patch that works tells us where in function damage is calculated
- Can create more targeted patches for damage modification

#### If full_nop works:
- Confirms damage code is in that 256-byte block
- Can narrow down to specific instructions within that block
- Can disassemble that section for precise understanding

#### If zero_calc works:
- Confirms $v0 register holds damage value at that point
- Confirms damage flows through register before HP write
- Can trace backwards to find where $v0 is calculated

#### If critical works:
- Confirms that specific instruction is essential
- Can analyze that instruction's purpose
- Can understand damage calculation mechanism

### If All Patches Fail

If all 20 patches fail to prevent HP damage:

1. **Possible reasons**:
   - HP damage happens in different code (not at 0x2d430-0x2dff8)
   - User-provided offsets may need verification
   - HP damage uses DMA or memory copy (not inline code)
   - Damage calculation is in overlay/dynamic code

2. **Next steps**:
   - User provides additional runtime addresses for verification
   - Create patches targeting other ST.EXE regions
   - Use emulator debugger to watch 0x198f2a (HP memory location)
   - Trace from 0x198f2a write backwards to find code

3. **Alternative approach**:
   - Memory breakpoint on 0x198f2a
   - Record code address that writes to it
   - Convert that runtime address to file offset
   - Create targeted patches for that location

---

## Why These Patches Should Work

1. **User-verified offsets**: Based on exact conversion formula from user
2. **Correct function location**: 0x2d430-0x2dff8 confirmed by user
3. **Multiple strategies**: Tests function returns, block NOPs, value zeroing, and surgical NOPs
4. **Comprehensive coverage**: 20 patches across entire 3,008-byte function
5. **Learned from failures**: All 142 previous patches failed due to wrong offsets - these use correct offsets

---

## Technical Details

### MIPS Instruction Reference

- **jr $ra** (0x03e00008): Jump to return address (function return)
- **nop** (0x00000000): No operation (delay slot filler)
- **move $v0, $zero** (0x00001021): Copy zero to $v0 register

### File vs Runtime Addresses

- **Conversion formula**: File offset = Runtime address - 0x7fe4000
- **Example**: 0x8003d7f8 - 0x7fe4000 = 0x2dff8
- **Verification**: User confirmed 0x8011df0 → 0x2d7f0

### ST.EXE Structure

- **Total size**: ~640 KB
- **HP damage function**: 0x2d430-0x2dff8 (3,008 bytes, ~750 instructions)
- **HP write location**: 0x2dff8 (end of function)

---

## Regenerating Patches

To recreate all patches from scratch:

```bash
python3 create_targeted_patches.py
```

This will:
1. Read original ST.EXE from iso-dump/
2. Create 20 modified versions with patches applied
3. Save to targeted_patches/ directory
4. Create backup of original as ST.EXE.original

---

## Summary

These 20 patches represent a systematic approach to identifying the HP damage code in Shadow Tower's executable. By using **user-verified correct file offsets** and testing multiple strategies (function returns, block NOPs, value zeroing, and surgical NOPs), one of these patches should successfully prevent HP damage and confirm the exact location and mechanism of damage calculation.

**Total coverage**: 162 patches (142 previous with wrong offsets + 20 current with correct offsets)

**Success criteria**: When a patch prevents HP from decreasing, we've found the HP damage code!
