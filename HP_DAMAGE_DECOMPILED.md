# HP Damage Function - Reverse Engineered C-Like Pseudocode

## Overview

Based on MIPS disassembly analysis of the HP store instruction at **0x02c77c**, this document provides a reverse-engineered C-like representation of the damage calculation and HP storage logic.

## Memory Layout

```c
// Base address for game state data
#define GAME_STATE_BASE 0x801a0000

// HP structure offsets (relative to base)
struct EntityHP {
    uint16_t max_hp;      // Offset 0x8f28 - Maximum HP
    uint16_t current_hp;  // Offset 0x8f2a - Current HP (TARGET ADDRESS 0x198f2a)
};
```

## Function: Apply Damage/Healing to HP

**Location:** 0x02c728 - 0x02c78c  
**Purpose:** Modifies current HP by damage/healing amount with bounds checking

### Disassembly Breakdown

```mips
0x02c728: ADDIU $sp, $sp, -24      # Allocate stack frame
0x02c72c: LUI   $v1, 0x801a        # Load upper: $v1 = 0x801a0000
0x02c730: ADDIU $v0, $v1, 0x8f28   # $v0 = ptr to HP struct (0x801a8f28)
0x02c734: SW    $ra, 0x14($sp)     # Save return address
0x02c738: SW    $s0, 0x10($sp)     # Save $s0 register
0x02c73c: LHU   $v0, 0x2($v0)      # Load current_hp from offset +2 (0x8f2a)
0x02c740: NOP
0x02c744: ADDU  $s0, $v0, $a0      # new_hp = current_hp + damage_value ($a0)
0x02c748: BGTZ  $s0, skip_zero     # if (new_hp > 0) goto skip_zero
0x02c74c: NOP
0x02c750: ADDU  $s0, $zero, $zero  # else new_hp = 0 (death/minimum)
0x02c754: JAL   sub_0x3BD14        # Call some function (possibly death handler)
0x02c758: ADDU  $a0, $s0, $zero    # Pass new_hp as argument
0x02c75c: J     0x02c7f8           # Jump to cleanup/return
0x02c760: LUI   $v0, 0x801a        # (delay slot)

skip_zero:
0x02c764: LHU   $v1, 0x8f28($v1)   # Load max_hp from offset 0x8f28
0x02c768: NOP
0x02c76c: SLT   $v0, $s0, $v1      # $v0 = (new_hp < max_hp) ? 1 : 0
0x02c770: BEQ   $v0, $zero, clamp  # if (new_hp >= max_hp) goto clamp
0x02c774: LUI   $v0, 0x801a        # (delay slot)
0x02c778: ADDU  $s0, $v1, $zero    # else new_hp = max_hp (clamp to maximum)

clamp:
0x02c77c: SH    $s0, 0x8f2a($v0)   # *** STORE new_hp to current_hp ***
0x02c780: LW    $ra, 0x14($sp)     # Restore return address
0x02c784: LW    $s0, 0x10($sp)     # Restore $s0
0x02c788: ADDIU $sp, $sp, 24       # Deallocate stack
0x02c78c: JR    $ra                # Return
0x02c790: NOP
```

## C-Like Pseudocode

```c
// Global HP data structure
volatile struct {
    uint16_t max_hp;      // 0x801a8f28
    uint16_t current_hp;  // 0x801a8f2a - User-identified address 0x198f2a
} entity_hp;

/**
 * Apply damage or healing to entity HP
 * 
 * @param damage_value Signed damage amount:
 *                     - Negative values = healing (increase HP)
 *                     - Positive values = damage (decrease HP)
 * 
 * This function is the FINAL step where damage is applied to HP.
 * All previous damage calculations (physical, magic, elemental, etc.)
 * converge here as the final damage_value parameter.
 */
void apply_damage_to_hp(int16_t damage_value)
{
    // Step 1: Load current HP
    uint16_t current_hp = entity_hp.current_hp;
    
    // Step 2: Calculate new HP after damage/healing
    int16_t new_hp = (int16_t)current_hp + damage_value;
    
    // Step 3: Bounds checking - clamp to valid range [0, max_hp]
    
    // Check for death/underflow
    if (new_hp <= 0) {
        new_hp = 0;  // Died or HP can't go negative
        
        // Possible death handler call here
        handle_entity_death(new_hp);  // JAL sub_0x3BD14
        return;
    }
    
    // Load maximum HP for clamping
    uint16_t max_hp = entity_hp.max_hp;
    
    // Check for overflow
    if (new_hp >= max_hp) {
        new_hp = max_hp;  // Can't exceed maximum HP
    }
    
    // Step 4: CRITICAL - Store final HP value
    // *** THIS IS THE HP STORE AT 0x02c77c ***
    entity_hp.current_hp = (uint16_t)new_hp;
    
    return;
}
```

## Key Observations

### 1. **This is the Final Damage Application**

```c
// The damage_value parameter is the RESULT of all previous calculations:
// - Base damage calculation (physical/magic)
// - Elemental multipliers
// - Defense reduction
// - Critical hits
// - Random variance
// ALL converge into this single damage_value parameter
```

### 2. **Damage Calculation Happens Elsewhere**

The actual damage **calculation** (MULT, DIV operations) happens in different code regions:
- Physical damage: Region 0x37274-0x3dd58 (198 MULT/DIV ops)
- Magic damage: Unknown region (possibly different location)
- Both eventually call this function with final damage_value

### 3. **Why Modifying This Function Affects All Damage Types**

```c
// Modifying this function's arithmetic affects EVERYTHING:
apply_damage_to_hp(physical_damage);  // Physical attack
apply_damage_to_hp(magic_damage);     // Magic attack
apply_damage_to_hp(poison_damage);    // Poison damage
apply_damage_to_hp(-healing_amount);  // Healing (negative damage)
```

### 4. **How to Reduce Damage to 1/4**

To reduce damage to 25%, modify the calculation at **0x02c744**:

```mips
# Original:
0x02c744: ADDU  $s0, $v0, $a0      # new_hp = current_hp + damage_value

# Modified (divide damage by 4):
# Replace with: SRA $t0, $a0, 2     # $t0 = damage_value / 4
#               ADDU $s0, $v0, $t0  # new_hp = current_hp + (damage_value / 4)
```

Or modify the incoming damage_value before the function is called.

## Arithmetic Pattern

The function performs minimal arithmetic:

```c
// Only 3 arithmetic operations:
1. new_hp = current_hp + damage_value     // ADDU at 0x02c744
2. is_alive = (new_hp > 0)                // BGTZ at 0x02c748
3. is_overflow = (new_hp < max_hp)        // SLT at 0x02c76c

// No multiplication, division, or complex math
// The complex damage calculation happens BEFORE calling this function
```

## Related Functions

### Previous Damage Calculation (Not This Function)

The damage **calculation** likely looks like:

```c
// This happens in regions like 0x37274-0x3dd58
int16_t calculate_physical_damage(Entity* attacker, Entity* target)
{
    int16_t base_damage = attacker->strength;           // MULT
    int16_t defense_reduction = target->defense / 2;    // DIV
    int16_t final_damage = base_damage - defense_reduction;  // SUBU
    
    // Apply elemental multipliers, critical hits, etc.
    final_damage = apply_multipliers(final_damage);     // More MULT/DIV
    
    return final_damage;
}

// Then calls:
apply_damage_to_hp(final_damage);  // Function at 0x02c728
```

## Experiment Strategy Based on This Analysis

### Target 1: Modify damage_value parameter (BEFORE 0x02c744)

Look for ADDIU/LW instructions that load or calculate damage_value into $a0 register before calling this function.

### Target 2: Modify the addition operation (AT 0x02c744)

Replace the ADDU with a shifted version to divide damage by 4:
```mips
# Instead of: ADDU $s0, $v0, $a0
# Use:        SRA $t0, $a0, 2      # Shift right arithmetic (divide by 4)
#             ADDU $s0, $v0, $t0
```

### Target 3: Modify calling functions

Find JAL instructions that call 0x02c728 and modify damage_value in those functions.

## Conclusion

The HP store at **0x02c77c** is indeed the **final damage application point** where all damage types (physical, magic, poison, etc.) converge. The actual damage **calculation** with complex arithmetic (MULT/DIV) happens in separate functions that eventually call this HP storage function.

**User's hypothesis was 100% correct:** 0x198f2a (offset 0x8f2a from base 0x801a0000) is the final HP storage position.

To modify damage, we need to either:
1. Modify this function's arithmetic (simple, affects all damage types)
2. Modify the calling functions (complex, might miss some damage types)
3. Modify the damage calculation regions (very complex, separate for each damage type)

**Recommendation:** Target the code that prepares the damage_value parameter ($a0) BEFORE calling this function, or modify the ADDU operation itself.
