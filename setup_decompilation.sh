#!/bin/bash
# Setup script for Shadow Tower decompilation environment

set -e

echo "Shadow Tower Decompilation Setup"
echo "================================="
echo ""

# Check if Ghidra is installed
GHIDRA_DIR=""
if [ -d "/opt/ghidra" ]; then
    GHIDRA_DIR="/opt/ghidra"
elif [ -d "$HOME/ghidra" ]; then
    GHIDRA_DIR="$HOME/ghidra"
elif [ -d "$HOME/Downloads/ghidra"* ]; then
    GHIDRA_DIR=$(ls -d $HOME/Downloads/ghidra* 2>/dev/null | head -1)
fi

if [ -z "$GHIDRA_DIR" ]; then
    echo "Ghidra not found. Please install Ghidra:"
    echo "1. Download from https://ghidra-sre.org/"
    echo "2. Extract to ~/ghidra or /opt/ghidra"
    echo ""
    echo "Continuing without Ghidra setup..."
else
    echo "Found Ghidra at: $GHIDRA_DIR"
fi

# Create decompilation workspace
echo ""
echo "Creating decompilation workspace..."
mkdir -p decompilation
mkdir -p decompilation/ghidra-projects
mkdir -p decompilation/analysis-notes
mkdir -p decompilation/extracted-functions

# Copy relevant files to workspace
echo "Copying binary files to workspace..."
if [ -f "iso-dump/ST.EXE" ]; then
    cp iso-dump/ST.EXE decompilation/ST.EXE
    echo "  - Copied ST.EXE"
fi

if [ -f "hp_damage.mips" ]; then
    cp hp_damage.mips decompilation/hp_damage.mips
    echo "  - Copied hp_damage.mips"
fi

# Create analysis notes template
cat > decompilation/analysis-notes/damage-calculation-analysis.md << 'EOF'
# Damage Calculation Analysis

## Objective
Identify enemy_power and base_damage fields in creature data structure.

## Known Creature Structure Offsets

### Documented Fields
- 0x07: attack1 (UInt8)
- 0x08: attack2 (UInt8)
- 0x09: magic1 (UInt8)
- 0x32: hp (UInt16)
- 0x4a: weaponDefense1 (UInt16)
- 0x4c: weaponDefense2 (UInt16)
- 0x4e: weaponDefense3 (UInt16)

### Unknown Fields (Candidates for enemy_power/base_damage)
- 0x0f: something3 (UInt16) - **INVESTIGATE**
- 0x11: something4 (UInt16) - **INVESTIGATE**

## Functions to Analyze

### Damage Calculation Functions
(To be filled in during analysis)

### Functions Referencing Creature Stats
(To be filled in during analysis)

## Findings

### Date: [YYYY-MM-DD]
**Analyst:** [Your Name]

**Function:** [Function Name/Address]

**Observations:**
- 

**Conclusions:**
- 

## Field Confirmations

| Offset | Size | Name | Purpose | Confirmed? |
|--------|------|------|---------|------------|
| 0x0f | UInt16 | ? | ? | No |
| 0x11 | UInt16 | ? | ? | No |

EOF

echo "  - Created analysis notes template"

# Create Ghidra import instructions
cat > decompilation/GHIDRA_IMPORT_INSTRUCTIONS.md << 'EOF'
# Ghidra Import Instructions for Shadow Tower

## Import ST.EXE

1. **Launch Ghidra**
   ```bash
   $GHIDRA_HOME/ghidraRun
   ```

2. **Create New Project**
   - File > New Project
   - Non-Shared Project
   - Project Name: "ShadowTower"
   - Project Directory: ./decompilation/ghidra-projects/

3. **Import ST.EXE**
   - File > Import File
   - Select: decompilation/ST.EXE
   - Format: "PlayStation Executable (PSX-EXE)"
     - If not available, select "Raw Binary"
   - Language: MIPS:LE:32:default (Little Endian, 32-bit)
   - Options:
     - Base Address: 0x80010000 (typical PSX load address)
     - Block Name: .text
     - Read: checked
     - Write: unchecked
     - Execute: checked

4. **Analyze ST.EXE**
   - Double-click ST.EXE in project
   - Analysis > Auto Analyze
   - Check all default analyzers
   - Click "Analyze"
   - Wait for analysis to complete (may take several minutes)

## Import hp_damage.mips

1. **Import File**
   - File > Import File
   - Select: decompilation/hp_damage.mips
   - Format: "Raw Binary"
   - Language: MIPS:LE:32:default

2. **Set Base Address**
   - Base Address: 0x80100000 (arbitrary, adjust if needed)
   - Block Name: hp_damage

3. **Analyze**
   - Analysis > Auto Analyze
   - Select MIPS analyzers
   - Click "Analyze"

## Search Strategy

### Find Damage Calculation Functions

1. **Search for HP references**
   - Search > For Scalars
   - Enter offset: 0x32 (HP offset)
   - Look for functions reading this offset

2. **Search for attack references**
   - Search for offsets: 0x07, 0x08, 0x09
   - Identify functions using these values in calculations

3. **Search for multiplication/division**
   - Search > For Instructions
   - MULT, MULTU, DIV, DIVU instructions
   - These likely indicate damage calculations

### Find Unknown Field Usage

1. **Search for offset 0x0f** (something3)
   - Identify all functions reading this offset
   - Analyze what they do with the value

2. **Search for offset 0x11** (something4)
   - Identify all functions reading this offset
   - Analyze what they do with the value

### Cross-Reference Analysis

1. **Find function that loads creature data**
   - Look for sequential loads of known offsets
   - Map the data structure being read

2. **Trace data flow**
   - Follow values from creature structure loads
   - See how they're used in calculations
   - Identify damage formula

## Tips

- Use Ghidra's "Function Call Tree" to trace calls
- Set up custom data types for Creature structure
- Use bookmarks to mark important functions
- Export decompiled code for reference
- Document findings in analysis-notes/

## Expected Results

- Identification of enemy_power field location
- Identification of base_damage field location
- Understanding of damage calculation formula
- Documentation of creature structure layout
EOF

echo "  - Created Ghidra import instructions"

# Create a quick reference for MIPS instruction analysis
cat > decompilation/MIPS_REFERENCE.md << 'EOF'
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

EOF

echo "  - Created MIPS reference guide"

echo ""
echo "Setup complete!"
echo ""
echo "Next steps:"
echo "1. Review: decompilation/GHIDRA_IMPORT_INSTRUCTIONS.md"
echo "2. Import ST.EXE and hp_damage.mips into Ghidra"
echo "3. Search for damage calculation functions"
echo "4. Document findings in: decompilation/analysis-notes/"
echo "5. Update DECOMPILATION_TRACKING.md with discoveries"
echo ""
echo "Workspace created at: ./decompilation/"
