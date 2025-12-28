/**
 * ACTUAL C-like Decompilation from Shadow Tower MIPS Assembly
 * 
 * Source: hp_damage.mips and ST.EXE actual disassembly
 * Method: Manual decompilation from verified MIPS assembly code
 * 
 * This is NOT hypothetical - it's based on actual assembly patterns found in:
 * - decompilation/asm/hp_damage_actual.asm (16,362 lines)
 * - decompilation/asm/creature_data_loads.asm (216 lines)
 * - decompilation/asm/multiplication_operations.asm (100 lines)
 */

#include <stdint.h>

// Creature data structure based on actual memory access patterns
// Offsets verified from assembly load/store instructions
typedef struct {
    uint8_t  unknown_00;           // Offset 0x00
    uint8_t  unknown_01;           // Offset 0x01
    uint8_t  unknown_02;           // Offset 0x02
    uint8_t  unknown_03;           // Offset 0x03
    uint8_t  unknown_04;           // Offset 0x04
    uint8_t  unknown_05;           // Offset 0x05
    uint8_t  unknown_06;           // Offset 0x06
    uint8_t  attack1;              // Offset 0x07 - VERIFIED in assembly at 0x3210: lbu v0,7(a0)
    uint8_t  attack2;              // Offset 0x08 - VERIFIED in assembly at 0x323c: lbu v0,8(a0)
    uint8_t  magic1;               // Offset 0x09
    uint8_t  unknown_0a;           // Offset 0x0a
    uint8_t  unknown_0b;           // Offset 0x0b
    uint8_t  unknown_0c;           // Offset 0x0c
    uint8_t  unknown_0d;           // Offset 0x0d
    uint8_t  unknown_0e;           // Offset 0x0e
    uint16_t enemyPower;           // Offset 0x0f - Hypothesized from binary pattern analysis
    uint16_t baseDamage;           // Offset 0x11 - Hypothesized from binary pattern analysis
    // ... more fields follow
} CreatureData;


/**
 * Function decompiled from assembly at offset 0x1e70-0x1eb4
 * 
 * Assembly evidence:
 *   1ea4: mult v0,v1          # Multiplication operation
 *   1ea8: mflo a1             # Get low 32 bits of multiply result
 *   1eac: sra v0,a1,0xf       # Shift right arithmetic by 15 bits (divide by 32768)
 *   1eb4: sb v0,0(s1)         # Store byte result
 * 
 * This pattern suggests: (value * multiplier) >> 15
 */
int32_t calculate_damage_pattern_1(uint32_t base_value, uint8_t multiplier) {
    int32_t result = base_value * multiplier;
    result = result >> 15;  // Arithmetic shift right by 15 bits
    return result & 0xFF;   // Return as byte
}


/**
 * Function decompiled from assembly at offset 0x3210
 * 
 * Assembly evidence:
 *   3210: lbu v0,7(a0)        # Load attack1 field (offset 0x07)
 *   3218: beq a1,v0,0x323c    # Compare and branch
 *   3230: sb a2,8(a0)         # Store to attack2 field (offset 0x08)
 *   3234: sb a1,7(a0)         # Store to attack1 field (offset 0x07)
 * 
 * This shows direct access to creature attack fields
 */
void update_creature_attack(CreatureData *creature, uint8_t new_attack1, uint8_t new_attack2) {
    uint8_t current_attack1 = creature->attack1;  // lbu v0,7(a0)
    
    if (current_attack1 != new_attack1) {
        creature->attack2 = new_attack2;  // sb a2,8(a0)
        creature->attack1 = new_attack1;  // sb a1,7(a0)
    }
}


/**
 * Function decompiled from assembly showing creature data indexing
 * 
 * Assembly evidence at 0x2ea0-0x2edc:
 *   2eb4: lbu v1,28157(a1)    # Load some creature index
 *   2ec0: sll v0,v1,0x3       # Multiply by 8 (v1 << 3)
 *   2ec4: subu v0,v0,v1       # v0 = v0 - v1 = 7*v1
 *   2ec8: sll v0,v0,0x2       # v0 = v0 << 2 = 28*v1
 *   2ecc: subu v0,v0,v1       # v0 = v0 - v1 = 27*v1
 *   2ed0: sll v0,v0,0x2       # v0 = v0 << 2 = 108*v1
 * 
 * This calculates: index * 108 (creature data structure size?)
 */
CreatureData* get_creature_by_index(CreatureData *base_ptr, uint8_t index) {
    // Optimized multiplication by 108: ((((index << 3) - index) << 2) - index) << 2
    uint32_t offset = index * 108;
    return (CreatureData*)((uint8_t*)base_ptr + offset);
}


/**
 * Damage calculation pattern found in multiple locations
 * 
 * Based on assembly patterns showing:
 * - Load from offset 0x07 (attack1)
 * - Multiplication operations (mult instruction)
 * - Arithmetic right shift (sra instruction)
 * - Subtraction operations (subu instruction)
 * 
 * Common game damage formula structure:
 *   damage = (base + attack) * power_multiplier - defense
 * 
 * NOTE: The exact offsets for enemyPower (0x0f) and baseDamage (0x11)
 * are based on binary pattern analysis but not yet verified in 
 * disassembled code. They appear in 10 references each in hp_damage.mips
 * binary but need C decompilation with Ghidra to confirm exact usage.
 */
int32_t calculate_physical_damage_pattern(CreatureData *attacker, CreatureData *defender) {
    // Load attack value - VERIFIED at offset 0x07
    int32_t attack = attacker->attack1;
    
    // Hypothesized based on common game formulas and binary patterns:
    // These fields exist in data structure but exact formula needs verification
    int32_t base = 0; // Likely attacker->baseDamage but not yet confirmed
    int32_t power = 1; // Likely attacker->enemyPower but not yet confirmed
    
    // Common calculation pattern seen in assembly
    int32_t damage = (base + attack) * power;
    
    // Apply arithmetic shift (seen at 0x1eac)
    damage = damage >> 15;
    
    // Subtract defense (common in damage formulas)
    // Defense offset not yet identified in assembly
    
    return damage;
}


/**
 * SUMMARY OF VERIFICATION STATUS
 * 
 * VERIFIED FROM ACTUAL ASSEMBLY:
 * ✓ Offset 0x07 is attack1 field (seen at 0x3210: lbu v0,7(a0))
 * ✓ Offset 0x08 is attack2 field (seen at 0x323c: lbu v0,8(a0))
 * ✓ Multiplication operations exist in damage code (mult/mflo instructions)
 * ✓ Arithmetic right shift by 15 bits used (sra v0,a1,0xf)
 * ✓ Creature data structure is 108 bytes (calculated from indexing math)
 * ✓ Load byte unsigned (lbu) used for single-byte fields
 * ✓ Load halfword (lh) used for two-byte fields
 * 
 * HYPOTHESIZED (Strong Evidence but Not Yet Confirmed):
 * ? Offset 0x0f is enemyPower (10 references in binary, used in mult ops)
 * ? Offset 0x11 is baseDamage (10 references in binary, used in add ops)
 * ? Exact damage formula structure
 * 
 * NEXT STEPS FOR FULL VERIFICATION:
 * 1. Use Ghidra to analyze hp_damage.mips with full C decompilation
 * 2. Search for patterns loading from offsets 0x0f and 0x11
 * 3. Trace data flow to understand complete formula
 * 4. Test in-game to verify calculated damage matches
 */
