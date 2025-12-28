# MIPS Assembly - Damage Calculation Function (Hypothesized)
# Based on binary analysis of hp_damage.mips
# Source: Offsets 0x07 (attack1), 0x0f (enemyPower), 0x11 (baseDamage)

# This is a RECONSTRUCTED example based on binary patterns found
# Actual decompilation requires Ghidra with the ISO file

##############################################################################
# Function: calculate_damage (hypothesized)
# Purpose: Calculate damage dealt by creature to target
# Parameters:
#   $a0 = Pointer to attacker creature data
#   $a1 = Pointer to defender creature data
# Returns:
#   $v0 = Calculated damage value
##############################################################################

calculate_damage:
    # Prologue
    ADDIU  $sp, $sp, -0x20      # Allocate stack frame
    SW     $ra, 0x1C($sp)       # Save return address
    SW     $s0, 0x18($sp)       # Save $s0
    SW     $s1, 0x14($sp)       # Save $s1
    
    # Load attacker stats
    MOVE   $s0, $a0             # $s0 = attacker pointer
    MOVE   $s1, $a1             # $s1 = defender pointer
    
    # Load attack1 (offset 0x07) - UInt8
    LBU    $t0, 0x07($s0)       # $t0 = attacker->attack1
    
    # Load attack2 (offset 0x08) - UInt8  
    LBU    $t1, 0x08($s0)       # $t1 = attacker->attack2
    
    # Load enemyPower (offset 0x0f) - UInt16
    LHU    $t2, 0x0f($s0)       # $t2 = attacker->enemyPower ⭐
    
    # Load baseDamage (offset 0x11) - UInt16
    LHU    $t3, 0x11($s0)       # $t3 = attacker->baseDamage ⭐
    
    # Calculate base damage: baseDamage + attack1
    ADDU   $t4, $t3, $t0        # $t4 = baseDamage + attack1
    
    # Multiply by enemyPower: (baseDamage + attack1) * enemyPower
    MULT   $t4, $t2             # (baseDamage + attack1) * enemyPower
    MFLO   $t5                  # $t5 = result of multiplication
    
    # Load defender's defense (offset 0x4a) - UInt16
    LHU    $t6, 0x4a($s1)       # $t6 = defender->weaponDefense1
    
    # Subtract defense from damage
    SUBU   $v0, $t5, $t6        # $v0 = damage - defense
    
    # Clamp to minimum of 0
    BGEZ   $v0, damage_positive # If damage >= 0, skip
    NOP
    MOVE   $v0, $zero           # damage = 0
    
damage_positive:
    # Clamp to maximum (e.g., 9999)
    LI     $t7, 9999            # $t7 = MAX_DAMAGE
    BLE    $v0, $t7, damage_in_range
    NOP
    MOVE   $v0, $t7             # damage = MAX_DAMAGE
    
damage_in_range:
    # Epilogue
    LW     $ra, 0x1C($sp)       # Restore return address
    LW     $s0, 0x18($sp)       # Restore $s0
    LW     $s1, 0x14($sp)       # Restore $s1
    ADDIU  $sp, $sp, 0x20       # Deallocate stack frame
    JR     $ra                  # Return
    NOP                         # Branch delay slot

##############################################################################
# Alternative: Magic Damage Calculation
##############################################################################

calculate_magic_damage:
    # Similar structure but uses magic1 (offset 0x09) instead of attack1
    LBU    $t0, 0x09($s0)       # $t0 = attacker->magic1
    LHU    $t2, 0x0f($s0)       # $t2 = attacker->enemyPower
    LHU    $t3, 0x11($s0)       # $t3 = attacker->baseDamage
    
    # Calculate: (baseDamage + magic1) * enemyPower
    ADDU   $t4, $t3, $t0
    MULT   $t4, $t2
    MFLO   $t5
    
    # Subtract magic defense instead
    LHU    $t6, 0x50($s1)       # $t6 = defender->magDefense1
    SUBU   $v0, $t5, $t6
    
    # ... rest of function
    JR     $ra
    NOP

##############################################################################
# Evidence from Binary Analysis
##############################################################################

# Pattern found at offset 0x330 in hp_damage.mips:
# 08 00 c4 98 0f 00 c5 88
# Decoded: LBU $a0, 0x08($a2); LHU $a1, 0x0f($a2)

# Pattern found at offset 0x320:
# 07 00 c3 88
# Decoded: LBU $v1, 0x07($a2)

# Multiple multiplication operations found after offset loads
# Consistent with formula: (baseDamage + attack) * enemyPower

##############################################################################
# Note: This is HYPOTHESIZED assembly based on:
# - Binary pattern analysis
# - Known MIPS calling conventions
# - Offset usage patterns
# 
# REQUIRES GHIDRA DECOMPILATION FOR CONFIRMATION
##############################################################################
