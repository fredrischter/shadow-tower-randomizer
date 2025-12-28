/**
 * Shadow Tower - Damage Calculation Functions (Hypothesized C-like Code)
 * 
 * Based on binary analysis of hp_damage.mips
 * Decompiled structure based on MIPS patterns found at offsets:
 * - 0x07: attack1 (UInt8)
 * - 0x0f: enemyPower (UInt16)
 * - 0x11: baseDamage (UInt16)
 * 
 * THIS IS HYPOTHESIZED CODE based on binary patterns.
 * Actual decompilation requires Ghidra with the ISO file.
 */

#include <stdint.h>

// Creature data structure (partial)
typedef struct {
    uint8_t  unknown1[7];          // 0x00-0x06
    uint8_t  attack1;              // 0x07 ⭐
    uint8_t  attack2;              // 0x08 ⭐
    uint8_t  magic1;               // 0x09 ⭐
    uint8_t  unknown2[5];          // 0x0a-0x0e
    uint16_t enemyPower;           // 0x0f ⭐ NEWLY IDENTIFIED
    uint16_t baseDamage;           // 0x11 ⭐ NEWLY IDENTIFIED
    uint8_t  unknown3[47];         // 0x13-0x41
    uint16_t weaponDefense1;       // 0x4a
    uint16_t weaponDefense2;       // 0x4c
    uint16_t weaponDefense3;       // 0x4e
    uint16_t magDefense1;          // 0x50
    uint16_t magDefense2;          // 0x52
    uint16_t magDefense3;          // 0x54
    uint16_t magDefense4;          // 0x56
    uint16_t magDefense5;          // 0x58
    // ... more fields
} CreatureData;

#define MAX_DAMAGE 9999
#define MIN_DAMAGE 0

/**
 * Calculate physical damage dealt by attacker to defender
 * 
 * Hypothesis based on binary analysis:
 *   damage = (baseDamage + attack1) × enemyPower - defense
 * 
 * @param attacker Pointer to attacking creature's data
 * @param defender Pointer to defending creature's data
 * @return Calculated damage value (clamped to 0-9999)
 */
int32_t calculate_physical_damage(CreatureData *attacker, CreatureData *defender) {
    int32_t damage;
    int32_t base_attack;
    int32_t power_multiplied;
    int32_t defense;
    
    // Load attack value (offset 0x07)
    base_attack = attacker->attack1;
    
    // Add base damage (offset 0x11)
    base_attack += attacker->baseDamage;
    
    // Multiply by enemy power (offset 0x0f)
    power_multiplied = base_attack * attacker->enemyPower;
    
    // Load defender's physical defense (offset 0x4a)
    defense = defender->weaponDefense1;
    
    // Calculate final damage
    damage = power_multiplied - defense;
    
    // Clamp to valid range
    if (damage < MIN_DAMAGE) {
        damage = MIN_DAMAGE;
    }
    if (damage > MAX_DAMAGE) {
        damage = MAX_DAMAGE;
    }
    
    return damage;
}

/**
 * Calculate magic damage dealt by attacker to defender
 * 
 * Similar formula but uses magic1 instead of attack1
 * 
 * @param attacker Pointer to attacking creature's data
 * @param defender Pointer to defending creature's data
 * @return Calculated magic damage value
 */
int32_t calculate_magic_damage(CreatureData *attacker, CreatureData *defender) {
    int32_t damage;
    int32_t base_magic;
    int32_t power_multiplied;
    int32_t defense;
    
    // Load magic value (offset 0x09)
    base_magic = attacker->magic1;
    
    // Add base damage (offset 0x11)
    base_magic += attacker->baseDamage;
    
    // Multiply by enemy power (offset 0x0f)
    power_multiplied = base_magic * attacker->enemyPower;
    
    // Load defender's magic defense (offset 0x50)
    defense = defender->magDefense1;
    
    // Calculate final damage
    damage = power_multiplied - defense;
    
    // Clamp to valid range
    if (damage < MIN_DAMAGE) {
        damage = MIN_DAMAGE;
    }
    if (damage > MAX_DAMAGE) {
        damage = MAX_DAMAGE;
    }
    
    return damage;
}

/**
 * Alternative hypothesis: enemyPower could be a divisor instead
 * This would make weaker enemies deal proportionally less damage
 */
int32_t calculate_damage_alternative(CreatureData *attacker, CreatureData *defender) {
    int32_t damage;
    int32_t base_value;
    
    // Combine base damage and attack
    base_value = attacker->baseDamage + attacker->attack1;
    
    // Alternative: divide instead of multiply
    // This would make enemyPower a "power level" where higher = weaker
    if (attacker->enemyPower > 0) {
        damage = base_value / attacker->enemyPower;
    } else {
        damage = base_value;
    }
    
    damage -= defender->weaponDefense1;
    
    if (damage < MIN_DAMAGE) damage = MIN_DAMAGE;
    if (damage > MAX_DAMAGE) damage = MAX_DAMAGE;
    
    return damage;
}

/**
 * Evidence from Binary Analysis
 * ==============================
 * 
 * 1. Offset 0x0f appears in multiplication operations (MULT instruction)
 * 2. Offset 0x11 appears in addition operations (ADDU instruction)
 * 3. Sequential loads of 0x07, 0x0f, 0x11 found in 6 code regions
 * 4. Pattern consistent with formula: (base + attack) * multiplier
 * 
 * Binary patterns found:
 * - 0x330: LHU $a1, 0x0f($a2)  -- Load enemyPower
 * - 0x320: LBU $v1, 0x07($a2)  -- Load attack1
 * - Multiple MULT instructions follow offset loads
 * 
 * MIPS instruction evidence:
 * ```
 * LHU  $t2, 0x0f($s0)    # Load enemyPower (UInt16)
 * LHU  $t3, 0x11($s0)    # Load baseDamage (UInt16)
 * LBU  $t0, 0x07($s0)    # Load attack1 (UInt8)
 * ADDU $t4, $t3, $t0     # baseDamage + attack1
 * MULT $t4, $t2          # (baseDamage + attack1) * enemyPower
 * ```
 * 
 * See: decompilation/analysis-output/lhu_instructions.txt
 *      decompilation/asm/damage_calculation_hypothesized.asm
 */

/**
 * IMPORTANT NOTES
 * ===============
 * 
 * This is HYPOTHESIZED C-like code based on:
 * - MIPS instruction patterns found in hp_damage.mips
 * - Offset usage analysis (10 references each for 0x0f and 0x11)
 * - Common damage calculation formulas in games
 * 
 * CONFIRMATION REQUIRED:
 * - Ghidra decompilation of actual hp_damage.mips binary
 * - In-game testing by modifying enemyPower and baseDamage values
 * - Verification that damage output matches formula
 * 
 * To complete verification:
 * 1. Download ST.bin from provided Google Drive link
 * 2. Follow GHIDRA_DECOMPILATION_METHODOLOGY.md
 * 3. Decompile functions containing offsets 0x0f and 0x11
 * 4. Compare actual decompiled code to this hypothesis
 * 5. Test in-game to verify
 */
