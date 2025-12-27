# MIPS Assembly Quick Reference for Damage Analysis

## Load/Store Instructions (Creature Data Access)

| Instruction | Description | Example |
|-------------|-------------|---------|
| LB | Load Byte (8-bit) | `lb $t0, 0x07($a0)` - Load attack1 |
| LBU | Load Byte Unsigned | `lbu $t0, 0x07($a0)` - Load UInt8 |
| LH | Load Halfword (16-bit) | `lh $t0, 0x32($a0)` - Load HP |
| LHU | Load Halfword Unsigned | `lhu $t0, 0x32($a0)` - Load UInt16 |
| LW | Load Word (32-bit) | `lw $t0, 0x00($a0)` |
| SB | Store Byte | `sb $t0, 0x07($a0)` |
| SH | Store Halfword | `sh $t0, 0x32($a0)` |
| SW | Store Word | `sw $t0, 0x00($a0)` |

## Arithmetic Instructions (Damage Calculations)

| Instruction | Description | Example |
|-------------|-------------|---------|
| ADD/ADDU | Add | `add $t0, $t1, $t2` |
| ADDI/ADDIU | Add Immediate | `addi $t0, $t1, 10` |
| SUB/SUBU | Subtract | `sub $t0, $t1, $t2` |
| MULT/MULTU | Multiply | `mult $t0, $t1` (result in HI:LO) |
| DIV/DIVU | Divide | `div $t0, $t1` (quotient in LO) |
| MFLO | Move From LO | `mflo $t0` (get result) |
| MFHI | Move From HI | `mfhi $t0` (get remainder) |
| SLL | Shift Left Logical | `sll $t0, $t1, 2` (multiply by 4) |
| SRL | Shift Right Logical | `srl $t0, $t1, 2` (divide by 4) |

## Typical Damage Calculation Patterns

### Pattern 1: Base Damage with Multiplier
```mips
lhu $t0, 0x0f($a0)  # Load unknown field (enemy_power?)
lhu $t1, 0x07($a0)  # Load attack1
mult $t0, $t1       # Multiply enemy_power * attack
mflo $t2           # Get result
```

### Pattern 2: Base Damage with Addition
```mips
lhu $t0, 0x11($a0)  # Load unknown field (base_damage?)
lhu $t1, 0x07($a0)  # Load attack1
add $t2, $t0, $t1   # Add base_damage + attack
```

### Pattern 3: Percentage-based Calculation
```mips
lhu $t0, 0x32($a0)  # Load HP
lhu $t1, 0x0f($a0)  # Load percentage/multiplier
mult $t0, $t1       # Multiply
mflo $t2           # Get result
li $t3, 100        # Load 100
div $t2, $t3       # Divide by 100
mflo $t4           # Final damage
```

## Register Conventions (PSX)

| Register | Name | Purpose |
|----------|------|---------|
| $a0-$a3 | Arguments | Function parameters |
| $v0-$v1 | Values | Return values |
| $t0-$t9 | Temporaries | Temporary values |
| $s0-$s7 | Saved | Preserved across calls |
| $sp | Stack Pointer | Points to stack |
| $ra | Return Address | Function return |

## Creature Pointer Pattern

Typically, the creature structure pointer is passed in $a0:
```mips
# Function called with creature pointer in $a0
lhu $t0, 0x32($a0)  # Load HP from creature at offset 0x32
lbu $t1, 0x07($a0)  # Load attack1 from creature at offset 0x07
```

## What to Look For

1. **Sequential offset access** - Functions loading multiple creature fields
2. **Arithmetic on loaded values** - Damage calculations
3. **Offset 0x0f or 0x11 usage** - Our unknown fields
4. **Function calls with creature pointer** - Entry points for analysis
5. **Loops with creature data** - Batch processing of multiple enemies

## Example Analysis

If you see:
```mips
lhu $t0, 0x0f($a0)  # Load at offset 0x0f
lhu $t1, 0x07($a0)  # Load attack1
mult $t0, $t1       # Multiply them
mflo $v0           # Return result
```

This suggests offset 0x0f is a damage multiplier (likely enemy_power).

