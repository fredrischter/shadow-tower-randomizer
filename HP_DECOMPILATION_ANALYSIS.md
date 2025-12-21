# Shadow Tower HP Value Decompilation Analysis

## Overview

This document contains the decompilation and analysis of the Shadow Tower executable code that modifies the HP value at runtime address 0x8003d7f8.

## Address Mappings

### Runtime to File Offset Conversion
- **Runtime Address**: `0x8003d7f8`
- **PSX Load Address**: `0x80010000`
- **PSX-EXE Header Size**: `0x800` (2048 bytes)
- **File Offset**: `0x2dff8` (188,408 bytes in ST.EXE)

### HP Data Address
- **HP File Offset (mentioned)**: `0x198f2a` (1,675,050 bytes)
- **Global Structure Base**: `0x801a8f28`
- **HP Offset from Base**: `0x19c`
- **HP Runtime Address**: `0x801a90c4` (calculated: 0x801a8f28 + 0x19c)

## Function Information

### Function: InitializePlayerState
- **Runtime Address**: `0x8003d794`
- **File Offset**: `0x2df94`
- **Size**: Approximately 168 bytes (42 instructions)

## MIPS Assembly Disassembly

```assembly
; Function: InitializePlayerState
; Address: 0x8003d794 (File offset: 0x2df94)

0x8003d794: 3c03801a  lui   $v1, 0x801a          ; Load upper immediate 0x801a
0x8003d798: 24628f28  addiu $v0, $v1, -28888    ; $v0 = 0x801a8f28 (base ptr)
0x8003d79c: 94638f28  lhu   $v1, 0x8f28($v1)    ; Load halfword from base
0x8003d7a0: 27bdffe8  addiu $sp, $sp, -24       ; Allocate stack frame
0x8003d7a4: afbf0010  sw    $ra, 0x10($sp)      ; Save return address
0x8003d7a8: 94440004  lhu   $a0, 0x4($v0)       ; Load value at offset 0x4

; Clear HP array - 26 consecutive halfword stores (52 bytes total)
; Each 'sh $zero' writes 0 to the address [$v0 + offset]
0x8003d7ac: a44001c2  sh    $zero, 0x1c2($v0)   ; Clear offset 0x1c2
0x8003d7b0: a44001c0  sh    $zero, 0x1c0($v0)   ; Clear offset 0x1c0
0x8003d7b4: a44001be  sh    $zero, 0x1be($v0)   ; Clear offset 0x1be
0x8003d7b8: a44001bc  sh    $zero, 0x1bc($v0)   ; Clear offset 0x1bc
0x8003d7bc: a44001ba  sh    $zero, 0x1ba($v0)   ; Clear offset 0x1ba
0x8003d7c0: a44001b8  sh    $zero, 0x1b8($v0)   ; Clear offset 0x1b8
0x8003d7c4: a44001b6  sh    $zero, 0x1b6($v0)   ; Clear offset 0x1b6
0x8003d7c8: a44001b4  sh    $zero, 0x1b4($v0)   ; Clear offset 0x1b4
0x8003d7cc: a44001b2  sh    $zero, 0x1b2($v0)   ; Clear offset 0x1b2
0x8003d7d0: a44001b0  sh    $zero, 0x1b0($v0)   ; Clear offset 0x1b0
0x8003d7d4: a44001ae  sh    $zero, 0x1ae($v0)   ; Clear offset 0x1ae
0x8003d7d8: a44001ac  sh    $zero, 0x1ac($v0)   ; Clear offset 0x1ac
0x8003d7dc: a44001aa  sh    $zero, 0x1aa($v0)   ; Clear offset 0x1aa
0x8003d7e0: a44001a8  sh    $zero, 0x1a8($v0)   ; Clear offset 0x1a8
0x8003d7e4: a44001a6  sh    $zero, 0x1a6($v0)   ; Clear offset 0x1a6
0x8003d7e8: a44001a4  sh    $zero, 0x1a4($v0)   ; Clear offset 0x1a4
0x8003d7ec: a44001a2  sh    $zero, 0x1a2($v0)   ; Clear offset 0x1a2
0x8003d7f0: a44001a0  sh    $zero, 0x1a0($v0)   ; Clear offset 0x1a0
0x8003d7f4: a440019e  sh    $zero, 0x19e($v0)   ; Clear offset 0x19e
0x8003d7f8: a440019c  sh    $zero, 0x19c($v0)   ; *** TARGET INSTRUCTION ***
                                                 ; Clear HP at offset 0x19c
0x8003d7fc: a440019a  sh    $zero, 0x19a($v0)   ; Clear offset 0x19a
0x8003d800: a4400198  sh    $zero, 0x198($v0)   ; Clear offset 0x198
0x8003d804: a4400196  sh    $zero, 0x196($v0)   ; Clear offset 0x196
0x8003d808: a4400194  sh    $zero, 0x194($v0)   ; Clear offset 0x194
0x8003d80c: a4400192  sh    $zero, 0x192($v0)   ; Clear offset 0x192
0x8003d810: a4400190  sh    $zero, 0x190($v0)   ; Clear offset 0x190

; Store other values
0x8003d814: a0400238  sb    $zero, 0x238($v0)   ; Clear byte at offset 0x238
0x8003d818: a443018a  sh    $v1, 0x18a($v0)     ; Restore value to offset 0x18a
0x8003d81c: a4430002  sh    $v1, 0x2($v0)       ; Restore value to offset 0x2
0x8003d820: a444018c  sh    $a0, 0x18c($v0)     ; Restore value to offset 0x18c
0x8003d824: a4440006  sh    $a0, 0x6($v0)       ; Restore value to offset 0x6
0x8003d828: 0c00f015  jal   0x8003c054          ; Call sub-function
0x8003d82c: ac40002c  sw    $zero, 0x2c($v0)    ; Clear word at offset 0x2c (delay slot)

; Function epilogue
0x8003d830: 8fbf0010  lw    $ra, 0x10($sp)      ; Restore return address
0x8003d834: 27bd0018  addiu $sp, $sp, 24        ; Deallocate stack frame
0x8003d838: 03e00008  jr    $ra                 ; Return
0x8003d83c: 00000000  nop                       ; Delay slot
```

## C Decompilation

### Data Structure Definition

```c
// Global structure at runtime address 0x801a8f28
// This appears to be a player/character state structure
typedef struct {
    uint16_t field_0x002;   // +0x002
    uint16_t field_0x004;   // +0x004
    uint16_t field_0x006;   // +0x006
    // ... many fields ...
    uint16_t field_0x18a;   // +0x18a
    uint16_t field_0x18c;   // +0x18c
    uint16_t hp_array[26];  // +0x190 to +0x1c2 (26 halfwords, 52 bytes)
                            // HP value at +0x19c (index 6 in array)
    uint32_t field_0x02c;   // +0x02c
    uint8_t  field_0x238;   // +0x238
} PlayerState;

// Global variable at 0x801a8f28
PlayerState* g_player_state = (PlayerState*)0x801a8f28;

// External function called during initialization
extern void sub_8003c054(void);
```

### Function Decompilation (Literal Translation)

```c
// Function at 0x8003d794 - Initialize Player State
void InitializePlayerState(void) {
    // Load base address 0x801a8f28 into register
    PlayerState* state = g_player_state;
    
    // Load some values from the structure
    uint16_t val1 = state->field_0x002;  // Actually loads from 0x8f28 offset
    uint16_t val2 = state->field_0x004;
    
    // Clear HP array - writes 0 to 26 consecutive halfwords
    // This loop clears offsets 0x190 through 0x1c2
    state->hp_array[25] = 0;  // offset 0x1c2
    state->hp_array[24] = 0;  // offset 0x1c0
    state->hp_array[23] = 0;  // offset 0x1be
    state->hp_array[22] = 0;  // offset 0x1bc
    state->hp_array[21] = 0;  // offset 0x1ba
    state->hp_array[20] = 0;  // offset 0x1b8
    state->hp_array[19] = 0;  // offset 0x1b6
    state->hp_array[18] = 0;  // offset 0x1b4
    state->hp_array[17] = 0;  // offset 0x1b2
    state->hp_array[16] = 0;  // offset 0x1b0
    state->hp_array[15] = 0;  // offset 0x1ae
    state->hp_array[14] = 0;  // offset 0x1ac
    state->hp_array[13] = 0;  // offset 0x1aa
    state->hp_array[12] = 0;  // offset 0x1a8
    state->hp_array[11] = 0;  // offset 0x1a6
    state->hp_array[10] = 0;  // offset 0x1a4
    state->hp_array[9]  = 0;  // offset 0x1a2
    state->hp_array[8]  = 0;  // offset 0x1a0
    state->hp_array[7]  = 0;  // offset 0x19e
    state->hp_array[6]  = 0;  // offset 0x19c <-- TARGET INSTRUCTION (0x8003d7f8)
    state->hp_array[5]  = 0;  // offset 0x19a
    state->hp_array[4]  = 0;  // offset 0x198
    state->hp_array[3]  = 0;  // offset 0x196
    state->hp_array[2]  = 0;  // offset 0x194
    state->hp_array[1]  = 0;  // offset 0x192
    state->hp_array[0]  = 0;  // offset 0x190
    
    // Clear status byte
    state->field_0x238 = 0;
    
    // Restore some values
    state->field_0x18a = val1;
    state->field_0x002 = val1;
    state->field_0x18c = val2;
    state->field_0x006 = val2;
    
    // Clear another field
    state->field_0x02c = 0;
    
    // Call another initialization function
    sub_8003c054();
}
```

### Function Decompilation (Optimized/Readable)

```c
// More compact version showing the likely original source code:
void InitializePlayerState_Optimized(void) {
    PlayerState* state = (PlayerState*)0x801a8f28;
    
    // Save some values that need to be preserved
    uint16_t saved_val1 = state->field_0x002;
    uint16_t saved_val2 = state->field_0x004;
    
    // Clear HP array (26 halfwords = 52 bytes)
    // Compiler unrolled this loop for optimization
    for (int i = 0; i < 26; i++) {
        state->hp_array[i] = 0;
    }
    
    // Clear status byte
    state->field_0x238 = 0;
    
    // Restore saved values to both their original and alternate locations
    state->field_0x18a = saved_val1;
    state->field_0x002 = saved_val1;
    state->field_0x18c = saved_val2;
    state->field_0x006 = saved_val2;
    
    // Clear another field
    state->field_0x02c = 0;
    
    // Call another initialization function
    sub_8003c054();
}
```

## Analysis Notes

### What This Function Does
1. **Initializes a player state structure** located at global address `0x801a8f28`
2. **Clears the HP array** - 26 consecutive halfword (16-bit) values from offset 0x190 to 0x1c2
3. **The target instruction at 0x8003d7f8** specifically clears the HP value at offset 0x19c (6th element in the array)
4. **Preserves and restores** certain values before clearing
5. **Calls a sub-function** at 0x8003c054 (likely additional initialization)

### Why HP is Being Zeroed
This appears to be a **state initialization or reset function** that:
- Clears player HP statistics (possibly for different body parts or damage types)
- The compiler **unrolled the loop** to clear 26 consecutive values for optimization
- The instruction at 0x8003d7f8 is **part of a larger initialization sequence**, not a bug

### HP Array Structure
The HP array spans from offset 0x190 to 0x1c2 (52 bytes, 26 halfwords):
- Each element is a 16-bit value (halfword)
- The specific HP at offset 0x19c is the 7th value in the array (index 6)
- This could represent:
  - Different body part HP values
  - HP for different damage types
  - Historical HP values (HP over time)
  - Multiple character states

## Files in This Repository

### Location in ST.EXE
- **File**: `iso-dump/ST.EXE`
- **Function Offset**: `0x2df94` (188,308 bytes)
- **Target Instruction Offset**: `0x2dff8` (188,408 bytes)
- **Size**: 491,520 bytes total

## How to Verify

You can verify this analysis using the following commands:

```bash
# Extract the instruction bytes
dd if=iso-dump/ST.EXE bs=1 skip=$((0x2dff8)) count=4 2>/dev/null | xxd

# Expected output: 9c 01 40 a4 (little-endian: 0xa440019c)
# This disassembles to: sh $zero, 0x19c($v0)
```

## Additional Investigation

To further investigate the HP system:
1. **Search for writes to 0x801a90c4** - Find other code that modifies this HP value
2. **Analyze sub_8003c054** - The function called after initialization
3. **Find HP read operations** - Look for lhu/lh instructions reading from offset 0x19c
4. **Trace back callers** - Find what calls InitializePlayerState to understand when HP is reset

## References

- **PSX Executable Format**: Standard PSX-EXE with 2KB header
- **MIPS Instruction Set**: R3000A architecture
- **Shadow Tower**: FromSoftware PlayStation 1 game
