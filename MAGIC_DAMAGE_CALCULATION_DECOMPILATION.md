# Magic Damage Calculation Function Decompilation (0x2d430-0x2d530)

**File offset:** 0x2d430 - 0x2d530 (256 bytes, 64 MIPS instructions)  
**Runtime address:** 0x8003d430 - 0x8003d530  

## Overview

This function performs magic damage calculation and scaling. When NOPed (full_nop_1 patch), magic damage reduces from ~40 HP/hit to 1 HP/hit, confirming this is the damage multiplication/scaling code.

## Damage Formula

```c
damage = (base_damage * player_stat * enemy_power) / 10
```

The division by 10 is implemented using fixed-point arithmetic with multiplier **0xCCCCCCCD**.

## Complete Decompilation

### Assembly and C Translation

```assembly
# Function: MagicDamageCalculation
# Address: 0x8003d430 (file: 0x2d430)

0x8003d430:  addiu  sp, sp, -0x20      # Allocate stack frame
0x8003d434:  sw     ra, 0x1c(sp)       # Save return address
0x8003d438:  sw     s0, 0x18(sp)       # Save s0
0x8003d43c:  move   s0, a0             # s0 = damage_type parameter

# Damage type switch statement
0x8003d440:  li     v0, 7              # Load immediate 7
0x8003d444:  beq    s0, v0, case_7     # if (damage_type == 7) goto case_7
0x8003d448:  nop

0x8003d44c:  li     v0, 8
0x8003d450:  beq    s0, v0, case_8     # if (damage_type == 8) goto case_8
0x8003d454:  nop

0x8003d458:  li     v0, 16
0x8003d45c:  beq    s0, v0, case_16    # if (damage_type == 16) goto case_16
0x8003d460:  nop

0x8003d464:  li     v0, 24
0x8003d468:  beq    s0, v0, case_24    # if (damage_type == 24) goto case_24
0x8003d46c:  nop

0x8003d470:  li     v0, 32
0x8003d474:  beq    s0, v0, case_32    # if (damage_type == 32) goto case_32
0x8003d478:  nop

0x8003d47c:  li     v0, 64
0x8003d480:  beq    s0, v0, case_64    # if (damage_type == 64) goto case_64
0x8003d484:  nop

0x8003d488:  li     v0, 96
0x8003d48c:  beq    s0, v0, case_96    # if (damage_type == 96) goto case_96
0x8003d490:  nop

0x8003d494:  li     v0, 128
0x8003d498:  beq    s0, v0, case_128   # if (damage_type == 128) goto case_128
0x8003d49c:  nop

0x8003d4a0:  li     v0, 256
0x8003d4a4:  beq    s0, v0, case_256   # if (damage_type == 256) goto case_256
0x8003d4a8:  nop

case_default:
0x8003d4ac:  li     v0, 1              # Default: base_damage = 1
0x8003d4b0:  b      calculate_damage
0x8003d4b4:  nop

case_7:
case_8:
case_16:
case_24:
case_32:
case_64:
case_96:
case_128:
case_256:
calculate_damage:
0x8003d4b8:  lui    v1, 0x801b         # Load upper: PlayerState base address
0x8003d4bc:  addiu  v1, v1, -0x70d8    # v1 = 0x801a8f28 (PlayerState*)

0x8003d4c0:  lw     a0, 0x00(a1)       # a0 = base_damage from parameter
0x8003d4c4:  lw     a1, 0x1a(a2)       # a1 = enemy_power (EntityStateData + 0x1a)
0x8003d4c8:  lbu    a2, 0x2e(v1)       # a2 = player_stat from PlayerState

# Multiply: base_damage * player_stat * enemy_power
0x8003d4cc:  mult   a0, a2             # LO = base_damage * player_stat
0x8003d4d0:  mflo   v0                 # v0 = base_damage * player_stat
0x8003d4d4:  mult   v0, a1             # LO = (base * player_stat) * enemy_power
0x8003d4d8:  mflo   v0                 # v0 = base * player_stat * enemy_power

# Divide by 10 using fixed-point arithmetic
# Formula: (value * 0xCCCCCCCD) >> 35
0x8003d4dc:  lui    v1, 0xcccd         # Load 0xcccd0000
0x8003d4e0:  ori    v1, v1, 0xcccd     # v1 = 0xcccccccd
0x8003d4e4:  multu  v0, v1             # HI:LO = value * 0xcccccccd
0x8003d4e8:  mfhi   v0                 # v0 = HI (upper 32 bits)
0x8003d4ec:  srl    v0, v0, 3          # v0 = v0 >> 3 (equivalent to >> 35 total)

# Result: v0 = damage / 10
0x8003d4f0:  move   v0, v0             # Final damage value in v0
0x8003d4f4:  lw     ra, 0x1c(sp)       # Restore return address
0x8003d4f8:  lw     s0, 0x18(sp)       # Restore s0
0x8003d4fc:  addiu  sp, sp, 0x20       # Deallocate stack
0x8003d500:  jr     ra                 # Return
0x8003d504:  nop
```

### C Code Translation

```c
typedef struct {
    // ... other fields ...
    uint8_t player_magic_stat;  // Offset +0x2e
    // ... other fields ...
} PlayerState;

typedef struct {
    // ... other fields ...
    uint16_t enemy_power;  // Offset +0x1a
    // ... other fields ...
} EntityStateData;

PlayerState* g_PlayerState = (PlayerState*)0x801a8f28;

int MagicDamageCalculation(int damage_type, int base_damage, EntityStateData* entity) {
    int damage;
    
    // Switch on damage type
    switch (damage_type) {
        case 7:
        case 8:
        case 16:
        case 24:
        case 32:
        case 64:
        case 96:
        case 128:
        case 256:
            // Calculate damage
            damage = base_damage;
            damage *= g_PlayerState->player_magic_stat;
            damage *= entity->enemy_power;
            
            // Divide by 10 using fixed-point arithmetic
            // (value * 0xCCCCCCCD) >> 35 == value / 10
            damage = ((uint64_t)damage * 0xCCCCCCCDULL) >> 35;
            break;
            
        default:
            damage = 1;  // Default base damage
            break;
    }
    
    return damage;
}
```

## Key Findings

### 1. Damage Types
Magic attacks use specific damage type codes:
- **7, 8** - Basic magic attacks
- **16, 24, 32** - Medium magic attacks
- **64, 96, 128** - Strong magic attacks
- **256** - Ultimate magic attacks

### 2. Fixed-Point Division by 10
The code uses a clever trick to divide by 10 without using the MIPS division instruction:

```
result = (value * 0xCCCCCCCD) >> 35
```

This is mathematically equivalent to `value / 10` but much faster.

The constant **0xCCCCCCCD** is derived from: `2^35 / 10 ≈ 3435973836.8 = 0xCCCCCCCC.D`

### 3. Memory Addresses
- **PlayerState**: 0x801a8f28
- **Player magic stat**: PlayerState + 0x2e
- **Enemy power**: EntityStateData + 0x1a

### 4. Why NOPing Reduces Damage to 1 HP
When this code is NOPed (replaced with NOP instructions):
- The multiplication by player stat is skipped
- The multiplication by enemy power is skipped  
- The division by 10 is skipped
- Only the base damage value (1 HP) remains

This explains the test result: **120 HP → 3 HP** (3 hits × 1 HP/hit)

## Damage Modification Possibilities

Now that we've identified the exact code, we can create precise patches:

### 1. Invincibility (Zero Damage)
NOP the entire multiplication section or force result to 0

### 2. Half Damage (0.5x)
Change division by 10 to division by 20:
- Replace 0xCCCCCCCD with 0x66666667

### 3. Double Damage (2x)
Change division by 10 to division by 5:
- Replace shift right 3 with shift right 2
- Or multiply result by 2 before return

### 4. 10x Damage
Remove the division by 10 entirely:
- NOP the fixed-point division instructions

### 5. Custom Multipliers
Modify the constant or add additional multiplications

## Testing Verification

**Test Case:** Magic slime spray (3 hits)
- **Before patch:** 3 × 40 HP = 120 HP total damage
- **After full_nop_1:** 3 × 1 HP = 3 HP total damage ✓

This confirms the function identification is correct.
