/**
 * Additional C-like Functions Decompiled from Shadow Tower Assembly
 * 
 * These functions show common patterns found throughout the damage
 * calculation code in hp_damage.mips
 */

#include <stdint.h>

/**
 * Creature flags and constants based on assembly patterns
 */
#define CREATURE_FLAG_02  0x02
#define CREATURE_FLAG_10  0x10
#define CREATURE_FLAG_20  0x20
#define CREATURE_FLAG_40  0x40


/**
 * Function decompiled from assembly at 0x2edc-0x2f00
 * 
 * Assembly shows bit testing pattern:
 *   2ee0: andi v0,a0,0x2      # Test bit 1
 *   2ee4: beqz v0,0x2f20      # Branch if zero
 *   2ee8: andi v0,a0,0x10     # Test bit 4
 *   2eec: bnez v0,0x2f4c      # Branch if not zero
 *   2ef4: andi v0,a0,0x20     # Test bit 5
 *   2ef8: bnez v0,0x2f4c      # Branch if not zero
 *   2f00: andi v0,a0,0x40     # Test bit 6
 *   2f04: bnez v0,0x2f4c      # Branch if not zero
 * 
 * This appears to be testing creature flags/status
 */
int32_t check_creature_flags(uint8_t flags) {
    if (!(flags & CREATURE_FLAG_02)) {
        return 0;  // Branch to 0x2f20
    }
    
    if (flags & CREATURE_FLAG_10) {
        return 1;  // Branch to 0x2f4c
    }
    
    if (flags & CREATURE_FLAG_20) {
        return 1;  // Branch to 0x2f4c
    }
    
    if (flags & CREATURE_FLAG_40) {
        return 1;  // Branch to 0x2f4c
    }
    
    return 0;
}


/**
 * Function decompiled from assembly at 0x341c-0x3464
 * 
 * Assembly evidence:
 *   341c: andi a2,v1,0x7f      # Mask to 7 bits
 *   3420: sltiu v0,a2,64       # Set if less than 64
 *   3424: bnez v0,0x3524       # Branch if < 64
 *   342c: lw t0,28168(a1)      # Load word at offset 28168
 *   3430: lbu v1,28157(a1)     # Load byte at offset 28157
 *   3434: sb zero,28158(a1)    # Store zero at offset 28158
 *   3438-3448: Complex multiplication by 108 (same as before)
 *   3450: addiu a3,a0,108      # Add 108 to address
 *   3454: or v0,a3,t0          # Bitwise OR
 *   3458: lbu v1,28180(a1)     # Load byte at offset 28180
 *   345c: andi v0,v0,0x3       # Mask to 2 bits
 *   3460: beqz v0,0x34c0       # Branch if zero
 *   3464: sb v1,28156(a1)      # Store byte at offset 28156
 * 
 * This appears to handle creature state updates with bounds checking
 */
void update_creature_state(uint8_t *creature_data, uint8_t value) {
    uint8_t masked_value = value & 0x7F;  // Limit to 7 bits
    
    if (masked_value < 64) {
        return;  // Early return
    }
    
    // Access creature data at various offsets
    uint32_t state_flags = *(uint32_t*)(creature_data + 28168);
    uint8_t creature_index = *(creature_data + 28157);
    *(creature_data + 28158) = 0;  // Clear byte
    
    // Calculate creature struct offset (108 bytes per creature)
    uint32_t offset = ((((creature_index << 3) - creature_index) << 2) - creature_index) << 2;
    uint8_t *creature_ptr = creature_data + offset + 108;
    
    // Check alignment
    if (((uint32_t)creature_ptr | state_flags) & 0x3) {
        // Not aligned, handle differently
        uint8_t flag_value = *(creature_data + 28180);
        *(creature_data + 28156) = flag_value;
    }
}


/**
 * Function showing creature comparison logic
 * Decompiled from assembly at 0x31fc-0x3260
 * 
 * Assembly evidence:
 *   31fc: bne v0,a3,0x320c     # Branch if not equal
 *   3208: sb zero,10(a0)       # Store zero at offset 10
 *   320c: lbu a1,22825(v0)     # Load from global/static data
 *   3210: lbu v0,7(a0)         # Load attack1 field
 *   3218: beq a1,v0,0x323c     # Compare with loaded value
 *   3230: sb a2,8(a0)          # Store to attack2
 *   3234: sb a1,7(a0)          # Store to attack1
 *   3238: sb zero,28158(v0)    # Clear flag
 *   323c-3260: Additional comparisons and branches
 * 
 * This shows creature stat comparison and update logic
 */
typedef struct {
    uint8_t unknown[7];
    uint8_t attack1;      // Offset 0x07
    uint8_t attack2;      // Offset 0x08
    uint8_t magic1;       // Offset 0x09
    uint8_t field_0a;     // Offset 0x0a
    // More fields...
} CreatureStats;

void compare_and_update_creature(CreatureStats *creature, uint8_t *global_data, 
                                  uint8_t compare_value, uint8_t new_attack1, uint8_t new_attack2) {
    if (creature->attack1 == compare_value) {
        creature->field_0a = 0;
        return;
    }
    
    uint8_t global_attack = *(global_data + 22825);
    uint8_t current_attack = creature->attack1;
    
    if (global_attack != current_attack) {
        creature->attack2 = new_attack2;
        creature->attack1 = new_attack1;
        *(global_data + 28158) = 0;  // Clear global flag
    }
    
    // Additional checks for magic field
    if (creature->magic1 == compare_value) {
        uint8_t flag = *(global_data + 0x1a9140);  // Offset from address 0x801a9140
        if (flag == 6) {
            creature->unknown[3] = 0;
        }
    }
}


/**
 * MIPS Instruction Patterns Observed
 * 
 * These patterns appear frequently in the damage calculation code:
 * 
 * 1. Load-Multiply-Shift pattern:
 *    lbu/lh   -> load value
 *    mult     -> multiply
 *    mflo     -> get result
 *    sra      -> shift right (divide by power of 2)
 * 
 * 2. Structure offset calculation:
 *    sll      -> shift left (multiply by power of 2)
 *    subu     -> subtract (for complex multiplications)
 *    addu     -> add base pointer
 * 
 * 3. Conditional updates:
 *    beq/bne  -> compare
 *    sb/sh/sw -> store if condition met
 * 
 * 4. Bit manipulation:
 *    andi     -> mask bits
 *    ori      -> set bits
 *    sll/srl  -> shift for bit operations
 */
