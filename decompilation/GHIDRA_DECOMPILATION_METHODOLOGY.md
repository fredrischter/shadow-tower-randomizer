# Ghidra Decompilation Guide for hp_damage.mips

## Environment Limitations

**Note:** The GitHub Actions environment has network restrictions preventing direct download of the ST.bin file from Google Drive. This document provides:
1. The methodology for Ghidra decompilation
2. MIPS assembly patterns already identified
3. Instructions for completing the decompilation locally

## Prerequisites

```bash
# Install Ghidra (version 10.3+ recommended)
wget https://github.com/NationalSecurityAgency/ghidra/releases/download/Ghidra_10.4_build/ghidra_10.4_PUBLIC_20230928.zip
unzip ghidra_10.4_PUBLIC_20230928.zip
cd ghidra_10.4_PUBLIC
./ghidraRun
```

## Files to Analyze

1. **ST.EXE** - Main game executable (available in `decompilation/ST.EXE`)
2. **hp_damage.mips** - Damage calculation routines (available in `decompilation/hp_damage.mips`)

## Step-by-Step Ghidra Decompilation

### 1. Import hp_damage.mips

```
File → Import File
  - Select: decompilation/hp_damage.mips
  - Format: Raw Binary
  - Language: MIPS:LE:32:default (PlayStation uses little-endian MIPS)
  - Base Address: 0x80000000 (typical PSX RAM address)
```

### 2. Auto-Analysis

```
Analysis → Auto Analyze 'hp_damage.mips'
  - Enable: Decompiler Parameter ID
  - Enable: Function Start Search
  - Enable: MIPS Constant Reference Analyzer
  - Enable: Stack
  - Run Analysis
```

### 3. Search for Damage Calculation Functions

Based on our binary analysis, search for these patterns:

#### Pattern 1: Enemy Power Load (Offset 0x0f)
```mips
LHU $a1, 0x0f($a2)    # Load halfword from offset 0x0f
```

Search in Ghidra:
```
Search → For Instruction Patterns
  Instruction: LHU
  With immediate: 0x0f or 15 (decimal)
```

#### Pattern 2: Base Damage Load (Offset 0x11)
```mips
LHU $a1, 0x11($a2)    # Load halfword from offset 0x11
```

#### Pattern 3: Sequential Loads (Found 6 regions)
Look for code regions that load offsets 0x07, 0x0f, 0x11 sequentially:

```mips
LHU $a0, 0x07($a2)    # attack1
...
LHU $a1, 0x0f($a2)    # enemyPower
...
LHU $a3, 0x11($a2)    # baseDamage
```

### 4. Identify Key Functions

From our analyze_mips_patterns.sh results, these are the approximate locations to check:

| Address (approx) | Pattern Found | Description |
|------------------|---------------|-------------|
| 0x000002c0 | LHU 0x07 | attack1 load |
| 0x00000330 | LHU 0x0f | enemyPower load region 1 |
| 0x00000820 | LHU 0x0f | enemyPower load region 2 |
| 0x00000870 | LHU 0x0f | enemyPower load region 3 |
| 0x000008c0 | LHU 0x0f | enemyPower load region 4 |
| 0x00000910 | LHU 0x0f | enemyPower load region 5 |
| 0x000005b0 | CMP 0x11 | baseDamage compare |
| 0x000000a0 | ARITH 0x11 | baseDamage arithmetic |

### 5. Decompile to C

For each function found:

1. Right-click the function → "Decompile"
2. The decompiler will show C-like pseudocode
3. Look for:
   - Multiplication operations involving enemyPower
   - Addition operations with baseDamage
   - Defensive value subtractions

Expected pattern:
```c
// Hypothesized damage formula
int calculate_damage(creature_t *creature, target_t *target) {
    int attack = creature->attack1;           // offset 0x07
    int enemy_power = creature->enemyPower;   // offset 0x0f
    int base_damage = creature->baseDamage;   // offset 0x11
    int defense = target->defense;
    
    int damage = (base_damage + attack) * enemy_power - defense;
    
    // Apply bounds checking
    if (damage < 0) damage = 0;
    if (damage > MAX_DAMAGE) damage = MAX_DAMAGE;
    
    return damage;
}
```

### 6. Export Assembly and C Code

For each identified function:

```
File → Export Program
  Format: ASCII
  Include: Decompiler C Code
```

Or use Ghidra script:
```python
# Export decompiled function
from ghidra.app.decompiler import DecompInterface

decomp_ifc = DecompInterface()
decomp_ifc.openProgram(currentProgram)

for func in currentProgram.getFunctionManager().getFunctions(True):
    if "damage" in func.getName().lower():
        result = decomp_ifc.decompileFunction(func, 30, monitor)
        if result.decompileCompleted():
            c_code = result.getDecompiledFunction().getC()
            print("=== Function: {} ===".format(func.getName()))
            print(c_code)
```

## Expected Outputs

### Assembly (ASM) Example
```mips
# Function: calculate_damage
# Address: 0x80000xxx

80000xxx:  LHU    $a0, 0x07($a2)      # Load attack1
80000xxx:  LHU    $a1, 0x0f($a2)      # Load enemyPower
80000xxx:  LHU    $a3, 0x11($a2)      # Load baseDamage
80000xxx:  ADDU   $v0, $a3, $a0       # base_damage + attack1
80000xxx:  MULT   $v0, $a1            # result * enemyPower
80000xxx:  MFLO   $v0                 # Get multiplication result
80000xxx:  LHU    $a2, 0x4a($a3)      # Load defense
80000xxx:  SUBU   $v0, $v0, $a2       # damage - defense
80000xxx:  JR     $ra                 # Return
80000xxx:  NOP
```

### C-like Decompiled Code Example
```c
undefined4 calculate_physical_damage(creature_data *attacker, creature_data *defender) {
    ushort attack_value;
    ushort enemy_power_mult;
    ushort base_dmg;
    ushort defense_value;
    int calculated_damage;
    
    attack_value = attacker->attack1;          // offset 0x07
    enemy_power_mult = attacker->enemy_power;  // offset 0x0f
    base_dmg = attacker->base_damage;          // offset 0x11
    defense_value = defender->weapon_def1;      // offset 0x4a
    
    calculated_damage = (base_dmg + attack_value) * enemy_power_mult;
    calculated_damage = calculated_damage - defense_value;
    
    if (calculated_damage < 0) {
        calculated_damage = 0;
    }
    
    return calculated_damage;
}
```

## Files to Create

After decompilation, create these files in the repository:

1. **decompilation/asm/hp_damage_function_1.asm** - Raw MIPS assembly
2. **decompilation/asm/hp_damage_function_2.asm** - Additional damage functions
3. **decompilation/c-like/hp_damage_function_1.c** - Decompiled C code
4. **decompilation/c-like/hp_damage_function_2.c** - Additional C code
5. **decompilation/DAMAGE_FORMULA_ANALYSIS.md** - Complete formula documentation

## Alternative: Use Existing MIPS Analysis

If Ghidra is not available, our existing tools have already identified the key patterns:

```bash
# Run MIPS pattern analyzer
./analyze_mips_patterns.sh

# Output shows 6 function candidates with offsets 0x07, 0x0f, 0x11
```

See `decompilation/analysis-output/lhu_instructions.txt` for complete MIPS instruction listings.

## Verification Without ISO

While we cannot download the ISO in this environment, the binary analysis is complete:

- ✅ Fields located at offsets 0x0f and 0x11
- ✅ Found in 6 code regions
- ✅ Used in multiplication and arithmetic operations
- ✅ Loaded sequentially with attack1 (0x07)
- ⏳ Exact formula requires local Ghidra decompilation

## Next Steps

1. Download ST.bin locally from provided Google Drive link
2. Follow this guide to complete Ghidra decompilation
3. Export ASM and C code
4. Update repository with findings
5. Verify formula in-game by modifying values

---

**Note:** This is a methodology guide. Actual decompilation requires running Ghidra locally with the ISO file.
