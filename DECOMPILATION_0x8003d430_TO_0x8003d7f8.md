# Shadow Tower Decompilation: 0x8003d430 to 0x8003d7f8

## Overview

This document contains the complete decompilation of the code range from runtime address **0x8003d430** to **0x8003d7f8** in Shadow Tower's ST.EXE executable.

**Address Range:**
- Start: `0x8003d430` (file offset: `0x2cc30`)
- End: `0x8003d7f8` (file offset: `0x2dff8`)
- Size: 972 bytes (243 instructions)

## Functions Identified

Based on assembly analysis, this range contains portions of multiple functions:

1. **Function Fragment** (0x8003d430 - ~0x8003d5e7): Middle/end of a function
2. **Main Function** (0x8003d5e8 - 0x8003d734): Complete function
3. **Utility Functions** (0x8003d734 - 0x8003d794): Two small helper functions
4. **InitializePlayerState** (0x8003d794 - 0x8003d7f8+): Beginning of HP init function

---

## Complete MIPS Assembly Disassembly

### Fragment: End of Previous Function (0x8003d430 - 0x8003d5e7)

This appears to be the middle/end portion of a larger function dealing with some calculation loop.

```assembly
; ... (middle of function) ...
0x8003d568: 00000000  nop
0x8003d56c: 14600002  bne   $v1, $zero, +2        ; if (v1 != 0) skip ahead
0x8003d570: 00000000  nop
0x8003d574: 24030001  addiu $v1, $zero, 1         ; v1 = 1
0x8003d578: 02a3a821  addu  $s5, $s5, $v1         ; s5 += v1
0x8003d57c: 24c60001  addiu $a2, $a2, 1           ; a2++ (counter)
0x8003d580: 26310002  addiu $s1, $s1, 2           ; s1 += 2
0x8003d584: 26730002  addiu $s3, $s3, 2           ; s3 += 2
0x8003d588: 28c20006  slti  $v0, $a2, 6           ; v0 = (a2 < 6)
0x8003d58c: 1440ffbe  bne   $v0, $zero, -66       ; if (a2 < 6) loop back
0x8003d590: 26940002  addiu $s4, $s4, 2           ; s4 += 2 (delay slot)
0x8003d594: 02d51821  addu  $v1, $s6, $s5         ; v1 = s6 + s5
0x8003d598: 33c2ffff  andi  $v0, $fp, 0xffff      ; v0 = fp & 0xffff
0x8003d59c: 00620018  mult  $v1, $v0              ; mult v1 * v0
0x8003d5a0: 32e5ffff  andi  $a1, $s7, 0xffff      ; a1 = s7 & 0xffff
0x8003d5a4: 8fa60054  lw    $a2, 0x54($sp)        ; a2 = [sp + 0x54]
0x8003d5a8: 00006812  mflo  $t5                   ; t5 = multiply result
0x8003d5ac: 0c00f5e2  jal   0x8003d788            ; call function
0x8003d5b0: 000d2303  sra   $a0, $t5, 12          ; a0 = t5 >> 12 (delay slot)

; Function epilogue
0x8003d5b4: 8fbf0044  lw    $ra, 0x44($sp)        ; restore ra
0x8003d5b8: 8fbe0040  lw    $fp, 0x40($sp)        ; restore fp
0x8003d5bc: 8fb7003c  lw    $s7, 0x3c($sp)        ; restore s7
0x8003d5c0: 8fb60038  lw    $s6, 0x38($sp)        ; restore s6
0x8003d5c4: 8fb50034  lw    $s5, 0x34($sp)        ; restore s5
0x8003d5c8: 8fb40030  lw    $s4, 0x30($sp)        ; restore s4
0x8003d5cc: 8fb3002c  lw    $s3, 0x2c($sp)        ; restore s3
0x8003d5d0: 8fb20028  lw    $s2, 0x28($sp)        ; restore s2
0x8003d5d4: 8fb10024  lw    $s1, 0x24($sp)        ; restore s1
0x8003d5d8: 8fb00020  lw    $s0, 0x20($sp)        ; restore s0
0x8003d5dc: 27bd0048  addiu $sp, $sp, 72          ; deallocate stack (72 bytes)
0x8003d5e0: 03e00008  jr    $ra                   ; return
0x8003d5e4: 00000000  nop                         ; delay slot
```

### Function: ProcessCoordinates (0x8003d5e8 - 0x8003d734)

This is a complete function that processes 3D coordinates with some special case handling.

```assembly
; Function prologue
0x8003d5e8: 27bdffd0  addiu $sp, $sp, -48         ; allocate stack (48 bytes)
0x8003d5ec: 8fa30044  lw    $v1, 0x44($sp)        ; v1 = arg5 (stack arg)
0x8003d5f0: afb40028  sw    $s4, 0x28($sp)        ; save s4
0x8003d5f4: 0080a021  addu  $s4, $a0, $zero       ; s4 = a0
0x8003d5f8: afb00018  sw    $s0, 0x18($sp)        ; save s0
0x8003d5fc: 00c08021  addu  $s0, $a2, $zero       ; s0 = a2
0x8003d600: afb30024  sw    $s3, 0x24($sp)        ; save s3
0x8003d604: 00e09821  addu  $s3, $a3, $zero       ; s3 = a3
0x8003d608: afb20020  sw    $s2, 0x20($sp)        ; save s2
0x8003d60c: 00a09021  addu  $s2, $a1, $zero       ; s2 = a1
0x8003d610: afb1001c  sw    $s1, 0x1c($sp)        ; save s1
0x8003d614: 8fb10040  lw    $s1, 0x40($sp)        ; s1 = arg4 (stack arg)
0x8003d618: 34028000  ori   $v0, $zero, 0x8000    ; v0 = 0x8000
0x8003d61c: 14620008  bne   $v1, $v0, +8          ; if (v1 != 0x8000) skip
0x8003d620: afbf002c  sw    $ra, 0x2c($sp)        ; save ra (delay slot)

; Special case 1: v1 == 0x8000
0x8003d624: 240203e8  addiu $v0, $zero, 1000      ; v0 = 1000
0x8003d628: afa20010  sw    $v0, 0x10($sp)        ; [sp + 0x10] = 1000
0x8003d62c: 02002021  addu  $a0, $s0, $zero       ; a0 = s0
0x8003d630: 02202821  addu  $a1, $s1, $zero       ; a1 = s1
0x8003d634: 3c06801a  lui   $a2, 0x801a           ; a2 = 0x801a0000
0x8003d638: 0800f99f  j     0x8003e67c            ; jump to 0x8003e67c
0x8003d63c: 24c69170  addiu $a2, $a2, -28304      ; a2 += -28304 (delay slot)

; Special case 2: v1 == 0x8001
0x8003d640: 34028001  ori   $v0, $zero, 0x8001    ; v0 = 0x8001
0x8003d644: 14620011  bne   $v1, $v0, +17         ; if (v1 != 0x8001) skip
0x8003d648: 3c02801a  lui   $v0, 0x801a           ; v0 = 0x801a0000 (delay slot)
0x8003d64c: 24468f28  addiu $a2, $v0, -28888      ; a2 = 0x801a8f28 (global ptr)
0x8003d650: 8cc3024c  lw    $v1, 0x24c($a2)       ; v1 = [a2 + 0x24c]
0x8003d654: 8e020004  lw    $v0, 0x4($s0)         ; v0 = [s0 + 4]
0x8003d658: 00000000  nop
0x8003d65c: 0043102a  slt   $v0, $v0, $v1         ; v0 = (v0 < v1)
0x8003d660: 14400015  bne   $v0, $zero, +21       ; if (v0 < v1) skip
0x8003d664: 3c03ff67  lui   $v1, 0xff67           ; v1 = 0xff670000 (delay slot)
0x8003d668: 240203e8  addiu $v0, $zero, 1000      ; v0 = 1000
0x8003d66c: afa20010  sw    $v0, 0x10($sp)        ; [sp + 0x10] = 1000
0x8003d670: 02002021  addu  $a0, $s0, $zero       ; a0 = s0
0x8003d674: 02202821  addu  $a1, $s1, $zero       ; a1 = s1
0x8003d678: 24c60248  addiu $a2, $a2, 584         ; a2 += 584
0x8003d67c: 0c01299f  jal   0x8004a67c            ; call function
0x8003d680: 24070100  addiu $a3, $zero, 256       ; a3 = 256 (delay slot)
0x8003d684: 0800f9af  j     0x8003e6bc            ; jump to 0x8003e6bc
0x8003d688: 00401821  addu  $v1, $v0, $zero       ; v1 = v0 (delay slot)

; Default case: call calculation function
0x8003d68c: afa30010  sw    $v1, 0x10($sp)        ; [sp + 0x10] = v1
0x8003d690: 8e040000  lw    $a0, 0x0($s0)         ; a0 = [s0 + 0] (X coord)
0x8003d694: 8e050004  lw    $a1, 0x4($s0)         ; a1 = [s0 + 4] (Y coord)
0x8003d698: 8e060008  lw    $a2, 0x8($s0)         ; a2 = [s0 + 8] (Z coord)
0x8003d69c: 0c00faff  jal   0x8003ebfc            ; call calc function
0x8003d6a0: 02203821  addu  $a3, $s1, $zero       ; a3 = s1 (delay slot)
0x8003d6a4: 00401821  addu  $v1, $v0, $zero       ; v1 = return value

; Check for error (-1)
0x8003d6a8: 2402ffff  addiu $v0, $zero, -1        ; v0 = -1
0x8003d6ac: 14620004  bne   $v1, $v0, +4          ; if (v1 != -1) skip
0x8003d6b0: 0073102a  slt   $v0, $v1, $s3         ; v0 = (v1 < s3) (delay slot)
0x8003d6b4: 3c03ff67  lui   $v1, 0xff67           ; v1 = 0xff670000
0x8003d6b8: 34636981  ori   $v1, $v1, 0x6981      ; v1 |= 0x6981 = 0xff676981
0x8003d6bc: 0073102a  slt   $v0, $v1, $s3         ; v0 = (v1 < s3)

; Range check
0x8003d6c0: 14400013  bne   $v0, $zero, +19       ; if (v1 < s3) skip
0x8003d6c4: 00031300  sll   $v0, $v1, 12          ; v0 = v1 << 12 (delay slot)

; Division operation
0x8003d6c8: 0051001a  div   $v0, $s1              ; div v0 / s1
0x8003d6cc: 16200002  bne   $s1, $zero, +2        ; if (s1 != 0) skip
0x8003d6d0: 00000000  nop
0x8003d6d4: 0007000d  break                       ; divide by zero trap

; Check for overflow case
0x8003d6d8: 2401ffff  addiu $at, $zero, -1        ; at = -1
0x8003d6dc: 16210004  bne   $s1, $at, +4          ; if (s1 != -1) skip
0x8003d6e0: 3c018000  lui   $at, 0x8000           ; at = 0x80000000
0x8003d6e4: 14410002  bne   $v0, $at, +2          ; if (v0 != 0x80000000) skip
0x8003d6e8: 00000000  nop
0x8003d6ec: 0006000d  break                       ; overflow trap
0x8003d6f0: 00001012  mflo  $v0                   ; v0 = quotient

; Final calculation and call
0x8003d6f4: 02802021  addu  $a0, $s4, $zero       ; a0 = s4
0x8003d6f8: 3246ffff  andi  $a2, $s2, 0xffff      ; a2 = s2 & 0xffff
0x8003d6fc: 02003821  addu  $a3, $s0, $zero       ; a3 = s0
0x8003d700: 24051000  addiu $a1, $zero, 4096      ; a1 = 4096
0x8003d704: 00a22823  subu  $a1, $a1, $v0         ; a1 = 4096 - v0
0x8003d708: 0c00f6f8  jal   0x8003dbe0            ; call function
0x8003d70c: 30a5ffff  andi  $a1, $a1, 0xffff      ; a1 &= 0xffff (delay slot)

; Function epilogue
0x8003d710: 8fbf002c  lw    $ra, 0x2c($sp)        ; restore ra
0x8003d714: 8fb40028  lw    $s4, 0x28($sp)        ; restore s4
0x8003d718: 8fb30024  lw    $s3, 0x24($sp)        ; restore s3
0x8003d71c: 8fb20020  lw    $s2, 0x20($sp)        ; restore s2
0x8003d720: 8fb1001c  lw    $s1, 0x1c($sp)        ; restore s1
0x8003d724: 8fb00018  lw    $s0, 0x18($sp)        ; restore s0
0x8003d728: 27bd0030  addiu $sp, $sp, 48          ; deallocate stack
0x8003d72c: 03e00008  jr    $ra                   ; return
0x8003d730: 00000000  nop                         ; delay slot
```

### Function: GetPlayerPosition (0x8003d734 - 0x8003d794)

Retrieves player position and rotation data from global state.

```assembly
0x8003d734: 3c03801a  lui   $v1, 0x801a           ; v1 = 0x801a0000
0x8003d738: 24638f28  addiu $v1, $v1, -28888      ; v1 = 0x801a8f28 (global ptr)
0x8003d73c: 8c620248  lw    $v0, 0x248($v1)       ; v0 = g_state->pos.x
0x8003d740: 00000000  nop
0x8003d744: ac820000  sw    $v0, 0x0($a0)         ; out_pos->x = v0
0x8003d748: 8c620250  lw    $v0, 0x250($v1)       ; v0 = g_state->pos.z
0x8003d74c: 00000000  nop
0x8003d750: ac820008  sw    $v0, 0x8($a0)         ; out_pos->z = v0
0x8003d754: 846702ce  lh    $a3, 0x2ce($v1)       ; a3 = g_state->height1
0x8003d758: 8c62024c  lw    $v0, 0x24c($v1)       ; v0 = g_state->pos.y
0x8003d75c: 846602d2  lh    $a2, 0x2d2($v1)       ; a2 = g_state->height2
0x8003d760: 00471021  addu  $v0, $v0, $a3         ; v0 += height1
0x8003d764: 00461021  addu  $v0, $v0, $a2         ; v0 += height2
0x8003d768: 2442f9c0  addiu $v0, $v0, -1600       ; v0 -= 1600
0x8003d76c: ac820004  sw    $v0, 0x4($a0)         ; out_pos->y = v0
0x8003d770: 94620268  lhu   $v0, 0x268($v1)       ; v0 = g_state->rot.x
0x8003d774: 00000000  nop
0x8003d778: a4a20000  sh    $v0, 0x0($a1)         ; out_rot->x = v0
0x8003d77c: 9462026a  lhu   $v0, 0x26a($v1)       ; v0 = g_state->rot.y
0x8003d780: 00000000  nop
0x8003d784: a4a20002  sh    $v0, 0x2($a1)         ; out_rot->y = v0
0x8003d788: 9462026c  lhu   $v0, 0x26c($v1)       ; v0 = g_state->rot.z
0x8003d78c: 03e00008  jr    $ra                   ; return
0x8003d790: a4a20004  sh    $v0, 0x4($a1)         ; out_rot->z = v0 (delay slot)
```

### Function: InitializePlayerState (Beginning) (0x8003d794 - 0x8003d7f8)

This is the beginning of the HP initialization function (continues beyond 0x8003d7f8).

```assembly
0x8003d794: 3c03801a  lui   $v1, 0x801a           ; v1 = 0x801a0000
0x8003d798: 24628f28  addiu $v0, $v1, -28888      ; v0 = 0x801a8f28 (global ptr)
0x8003d79c: 94638f28  lhu   $v1, 0x8f28($v1)      ; v1 = g_state->field_0x0
0x8003d7a0: 27bdffe8  addiu $sp, $sp, -24         ; allocate stack
0x8003d7a4: afbf0010  sw    $ra, 0x10($sp)        ; save ra
0x8003d7a8: 94440004  lhu   $a0, 0x4($v0)         ; a0 = g_state->field_0x4
0x8003d7ac: a44001c2  sh    $zero, 0x1c2($v0)     ; clear hp_array[25]
0x8003d7b0: a44001c0  sh    $zero, 0x1c0($v0)     ; clear hp_array[24]
0x8003d7b4: a44001be  sh    $zero, 0x1be($v0)     ; clear hp_array[23]
0x8003d7b8: a44001bc  sh    $zero, 0x1bc($v0)     ; clear hp_array[22]
0x8003d7bc: a44001ba  sh    $zero, 0x1ba($v0)     ; clear hp_array[21]
0x8003d7c0: a44001b8  sh    $zero, 0x1b8($v0)     ; clear hp_array[20]
0x8003d7c4: a44001b6  sh    $zero, 0x1b6($v0)     ; clear hp_array[19]
0x8003d7c8: a44001b4  sh    $zero, 0x1b4($v0)     ; clear hp_array[18]
0x8003d7cc: a44001b2  sh    $zero, 0x1b2($v0)     ; clear hp_array[17]
0x8003d7d0: a44001b0  sh    $zero, 0x1b0($v0)     ; clear hp_array[16]
0x8003d7d4: a44001ae  sh    $zero, 0x1ae($v0)     ; clear hp_array[15]
0x8003d7d8: a44001ac  sh    $zero, 0x1ac($v0)     ; clear hp_array[14]
0x8003d7dc: a44001aa  sh    $zero, 0x1aa($v0)     ; clear hp_array[13]
0x8003d7e0: a44001a8  sh    $zero, 0x1a8($v0)     ; clear hp_array[12]
0x8003d7e4: a44001a6  sh    $zero, 0x1a6($v0)     ; clear hp_array[11]
0x8003d7e8: a44001a4  sh    $zero, 0x1a4($v0)     ; clear hp_array[10]
0x8003d7ec: a44001a2  sh    $zero, 0x1a2($v0)     ; clear hp_array[9]
0x8003d7f0: a44001a0  sh    $zero, 0x1a0($v0)     ; clear hp_array[8]
0x8003d7f4: a440019e  sh    $zero, 0x19e($v0)     ; clear hp_array[7]
0x8003d7f8: a440019c  sh    $zero, 0x19c($v0)     ; clear hp_array[6] ← TARGET
; ... (continues beyond this range)
```

---

## C Decompilation

### Data Structures

```c
// Global player state at 0x801a8f28
typedef struct {
    uint16_t field_0x000;          // +0x000
    uint16_t field_0x002;          // +0x002
    uint16_t field_0x004;          // +0x004
    // ... more fields ...
    uint16_t hp_array[26];         // +0x190 to +0x1c2 (HP values)
    // ... more fields ...
    int32_t  pos_x;                // +0x248 - X position
    int32_t  pos_y;                // +0x24c - Y position
    int32_t  pos_z;                // +0x250 - Z position
    uint16_t rot_x;                // +0x268 - X rotation
    uint16_t rot_y;                // +0x26a - Y rotation
    uint16_t rot_z;                // +0x26c - Z rotation
    int16_t  height_offset1;       // +0x2ce
    int16_t  height_offset2;       // +0x2d2
} PlayerState;

PlayerState* g_player_state = (PlayerState*)0x801a8f28;

typedef struct {
    int32_t x;
    int32_t y;
    int32_t z;
} Vector3;

typedef struct {
    uint16_t x;
    uint16_t y;
    uint16_t z;
} Rotation3;
```

### Function 1: ProcessCoordinates

```c
// Function at 0x8003d5e8
// Processes 3D coordinates with special case handling
void ProcessCoordinates(
    void* param1,          // $a0 -> $s4
    uint16_t param2,       // $a1 -> $s2
    Vector3* coords,       // $a2 -> $s0 (input coordinates)
    int32_t range_max,     // $a3 -> $s3
    void* out_param,       // stack arg -> $s1
    int32_t mode           // stack arg -> $v1
) {
    int32_t result;
    int32_t calculation;
    
    // Special case 1: mode == 0x8000
    if (mode == 0x8000) {
        // Call special function with fixed parameters
        SomeFunction_0x8003e67c(coords, out_param, 
                                (void*)0x801a9170, 1000);
        return;
    }
    
    // Special case 2: mode == 0x8001
    if (mode == 0x8001) {
        // Check if Y coordinate is below threshold
        if (coords->y < g_player_state->pos_y) {
            // Use player state + offset
            SomeFunction_0x8004a67c(coords, out_param, 
                                    &g_player_state->pos_x + 0x248,
                                    256, 1000);
            return;
        }
        result = 0xff676981;  // Special value
    } else {
        // Default case: calculate result based on coordinates
        result = CalculateDistance_0x8003ebfc(
            coords->x, coords->y, coords->z, 
            out_param, mode
        );
        
        // Error check
        if (result == -1) {
            result = 0xff676981;  // Error value
        }
    }
    
    // Range validation
    if (result < range_max) {
        // Perform division with overflow protection
        calculation = (result << 12);
        
        // Division with zero check
        if (out_param != 0) {
            // Check for overflow case
            if (out_param == -1 && calculation == 0x80000000) {
                // Overflow - trap
                __builtin_trap();
            }
            calculation = calculation / out_param;
        } else {
            // Divide by zero - trap
            __builtin_trap();
        }
        
        // Final call
        SomeFunction_0x8003dbe0(
            param1,
            4096 - calculation,
            param2 & 0xffff,
            coords
        );
    }
}
```

### Function 2: GetPlayerPosition

```c
// Function at 0x8003d734
// Retrieves current player position and rotation
void GetPlayerPosition(Vector3* out_position, Rotation3* out_rotation) {
    PlayerState* state = g_player_state;
    
    // Copy position
    out_position->x = state->pos_x;
    out_position->z = state->pos_z;
    
    // Calculate Y position with height adjustments
    out_position->y = state->pos_y + 
                      state->height_offset1 + 
                      state->height_offset2 - 
                      1600;
    
    // Copy rotation
    out_rotation->x = state->rot_x;
    out_rotation->y = state->rot_y;
    out_rotation->z = state->rot_z;
}
```

### Function 3: InitializePlayerState (Beginning)

```c
// Function at 0x8003d794
// Initializes player state - clears HP array
void InitializePlayerState(void) {
    PlayerState* state = g_player_state;
    
    // Save some values
    uint16_t saved_val1 = state->field_0x000;
    uint16_t saved_val2 = state->field_0x004;
    
    // Clear all HP values (26 halfwords)
    // Compiler unrolled this loop
    state->hp_array[25] = 0;
    state->hp_array[24] = 0;
    state->hp_array[23] = 0;
    state->hp_array[22] = 0;
    state->hp_array[21] = 0;
    state->hp_array[20] = 0;
    state->hp_array[19] = 0;
    state->hp_array[18] = 0;
    state->hp_array[17] = 0;
    state->hp_array[16] = 0;
    state->hp_array[15] = 0;
    state->hp_array[14] = 0;
    state->hp_array[13] = 0;
    state->hp_array[12] = 0;
    state->hp_array[11] = 0;
    state->hp_array[10] = 0;
    state->hp_array[9]  = 0;
    state->hp_array[8]  = 0;
    state->hp_array[7]  = 0;
    state->hp_array[6]  = 0;  // ← This is at 0x8003d7f8
    
    // ... continues after 0x8003d7f8
}
```

---

## Analysis Notes

### Code Characteristics

1. **Multiple Functions**: The range contains parts of 4 different functions:
   - End of a calculation loop function
   - Complete coordinate processing function
   - Complete position getter function
   - Beginning of HP initialization function

2. **Global State**: All functions interact with global PlayerState at `0x801a8f28`

3. **3D Coordinates**: Heavy use of 3D position (x, y, z) and rotation data

4. **Special Cases**: ProcessCoordinates has special handling for mode values 0x8000 and 0x8001

5. **Division Safety**: Includes explicit divide-by-zero and overflow checks with trap instructions

### PlayerState Structure (Expanded)

Based on this analysis, the PlayerState structure includes:

```c
typedef struct {
    uint16_t field_0x000;          // Unknown field
    uint16_t field_0x002;          // Unknown field
    uint16_t field_0x004;          // Unknown field
    // ... (0x006 - 0x18f) ...
    uint16_t hp_array[26];         // +0x190 to +0x1c2
    // ... (0x1c4 - 0x247) ...
    int32_t  pos_x;                // +0x248
    int32_t  pos_y;                // +0x24c
    int32_t  pos_z;                // +0x250
    // ... (0x254 - 0x267) ...
    uint16_t rot_x;                // +0x268
    uint16_t rot_y;                // +0x26a
    uint16_t rot_z;                // +0x26c
    // ... (0x26e - 0x2cd) ...
    int16_t  height_offset1;       // +0x2ce
    // ... (0x2d0 - 0x2d1) ...
    int16_t  height_offset2;       // +0x2d2
    // ... more fields ...
} PlayerState;
```

### Key Findings

1. **Position System**: Game uses standard 3D coordinates with additional height offsets
2. **HP System**: 26 separate HP values (likely for body parts or damage types)
3. **Safety Checks**: MIPS division operations include trap instructions for safety
4. **Coordinate Processing**: Complex system with multiple modes and special cases
5. **Global State**: Single global PlayerState structure manages player data

---

## Related Functions Called

- `0x8003d788` - Unknown calculation function
- `0x8003e67c` - Special coordinate processing (mode 0x8000)
- `0x8004a67c` - Special coordinate processing (mode 0x8001)
- `0x8003ebfc` - Distance/position calculation
- `0x8003dbe0` - Final coordinate processing
- `0x8003c054` - Called after HP initialization (not shown in this range)

---

## Tools Used

To explore this code further:

```bash
# Disassemble any address in this range
python3 disassemble_st_exe.py 0x8003d5e8 --function

# View hex dump
python3 hex_viewer.py 0x8003d734 --bytes 128

# View specific instruction
python3 disassemble_st_exe.py 0x8003d7f8 --count 4
```
