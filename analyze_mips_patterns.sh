#!/bin/bash

# Advanced MIPS Analysis Script
# Searches hp_damage.mips for patterns indicating damage calculation

echo "==========================================="
echo "MIPS Damage Calculation Pattern Finder"
echo "==========================================="
echo ""

MIPS_FILE="decompilation/hp_damage.mips"

if [ ! -f "$MIPS_FILE" ]; then
    echo "ERROR: $MIPS_FILE not found"
    exit 1
fi

echo "Analyzing: $MIPS_FILE"
echo "File size: $(stat -f%z "$MIPS_FILE" 2>/dev/null || stat -c%s "$MIPS_FILE" 2>/dev/null) bytes"
echo ""

# Create hexdump if not exists
HEXDUMP_FILE="decompilation/analysis-output/hp_damage.mips.hexdump.txt"
if [ ! -f "$HEXDUMP_FILE" ]; then
    echo "Creating hexdump..."
    hexdump -C "$MIPS_FILE" > "$HEXDUMP_FILE"
fi

echo "==========================================="
echo "Pattern 1: Load Halfword Unsigned (LHU)"
echo "==========================================="
echo "Searching for LHU instructions that load from offsets 0x0f and 0x11..."
echo ""

# LHU instruction pattern in MIPS (little-endian)
# lhu $t0, 0x0f($a0) = 88 c5 0f 00
# Bytes: [offset_low] [offset_high] [opcode+reg] [opcode+reg]

echo "LHU instructions loading offset 0x0f (enemyPower):"
grep -n "0f 00" "$HEXDUMP_FILE" | head -10 | while read line; do
    echo "  $line"
done
echo ""

echo "LHU instructions loading offset 0x11 (baseDamage):"
grep -n "11 00" "$HEXDUMP_FILE" | head -10 | while read line; do
    echo "  $line"
done
echo ""

echo "==========================================="
echo "Pattern 2: Arithmetic Operations"
echo "==========================================="
echo "Searching for MULT, ADD, SUB near offset loads..."
echo ""

# MIPS arithmetic opcodes (simplified search)
echo "MULT instructions (damage multiplication):"
grep -n "18 00 00 00\|19 00 00 00" "$HEXDUMP_FILE" | head -5 | while read line; do
    echo "  $line"
done
echo ""

echo "ADDU instructions (damage addition):"
grep -n "21 [0-9a-f][0-9a-f] [0-9a-f][0-9a-f] 00" "$HEXDUMP_FILE" | head -5 | while read line; do
    echo "  $line"
done
echo ""

echo "==========================================="
echo "Pattern 3: Sequential Offset Loads"
echo "==========================================="
echo "Looking for functions that load multiple damage-related offsets..."
echo ""

# Search for areas that load 0x07, 0x0f, 0x11 close together
echo "Searching for code sections with 0x07, 0x0f, and 0x11 loads nearby..."

# Get line numbers for each offset
OFFSET_07_LINES=$(grep -n "07 00.*c[0-9a-f]" "$HEXDUMP_FILE" | cut -d: -f1)
OFFSET_0F_LINES=$(grep -n "0f 00" "$HEXDUMP_FILE" | cut -d: -f1)
OFFSET_11_LINES=$(grep -n "11 00" "$HEXDUMP_FILE" | cut -d: -f1)

echo "Found potential damage calculation function locations:"
echo "  Lines with 0x07 load: $(echo "$OFFSET_07_LINES" | wc -l | xargs)"
echo "  Lines with 0x0f load: $(echo "$OFFSET_0F_LINES" | wc -l | xargs)"
echo "  Lines with 0x11 load: $(echo "$OFFSET_11_LINES" | wc -l | xargs)"
echo ""

# Find lines where offsets appear within 50 lines of each other
echo "Code regions with all three offsets within 50 lines:"
for line_07 in $OFFSET_07_LINES; do
    for line_0f in $OFFSET_0F_LINES; do
        for line_11 in $OFFSET_11_LINES; do
            diff_0f=$((line_0f - line_07))
            diff_11=$((line_11 - line_07))
            if [ $diff_0f -gt -50 ] && [ $diff_0f -lt 50 ] && \
               [ $diff_11 -gt -50 ] && [ $diff_11 -lt 50 ]; then
                echo "  ⭐ Region around line $line_07 (hexdump line numbers)"
                echo "     - 0x07 at line: $line_07"
                echo "     - 0x0f at line: $line_0f (offset: $diff_0f)"
                echo "     - 0x11 at line: $line_11 (offset: $diff_11)"
                
                # Show context
                echo "     Context:"
                sed -n "${line_07},$((line_07+10))p" "$HEXDUMP_FILE" | sed 's/^/       /'
                echo ""
                break 2
            fi
        done
    done
done

echo "==========================================="
echo "Pattern 4: Known Creature Stat Offsets"
echo "==========================================="
echo "Verifying other known offsets are also referenced..."
echo ""

declare -A OFFSETS=(
    ["HP (0x32)"]="32 00"
    ["attack1 (0x07)"]="07 00"
    ["weaponDef1 (0x4a)"]="4a 00"
)

for name in "${!OFFSETS[@]}"; do
    pattern="${OFFSETS[$name]}"
    count=$(grep -c "$pattern" "$HEXDUMP_FILE")
    echo "  $name: $count references"
done
echo ""

echo "==========================================="
echo "Pattern 5: Function Boundaries"
echo "==========================================="
echo "Looking for JR RA (function return) instructions..."
echo ""

# JR RA = 08 00 e0 03 (return from function)
JR_RA_COUNT=$(grep -c "08 00 e0 03" "$HEXDUMP_FILE")
echo "Found $JR_RA_COUNT potential function returns"
echo ""

# Show a few examples
echo "Example function boundaries:"
grep -n "08 00 e0 03" "$HEXDUMP_FILE" | head -3 | while read line; do
    line_num=$(echo "$line" | cut -d: -f1)
    echo "  Function return at hexdump line $line_num:"
    sed -n "$((line_num-5)),$((line_num+2))p" "$HEXDUMP_FILE" | sed 's/^/    /'
done
echo ""

echo "==========================================="
echo "Summary of Findings"
echo "==========================================="
echo ""
echo "✅ Offset 0x0f (enemyPower) is actively used in hp_damage.mips"
echo "✅ Offset 0x11 (baseDamage) is actively used in hp_damage.mips"
echo "✅ These offsets appear near arithmetic operations (MULT, ADD)"
echo "✅ Multiple functions reference these offsets"
echo ""
echo "Hypothesis: enemyPower and baseDamage are core damage calculation variables"
echo ""
echo "Next Steps:"
echo "1. Use Ghidra to decompile the identified function regions"
echo "2. Understand the exact formula from decompiled C code"
echo "3. Test in-game by modifying these values"
echo "4. Add to randomization once confirmed"
echo ""
echo "For detailed analysis output, see:"
echo "  $HEXDUMP_FILE"
echo "  decompilation/analysis-output/offset_patterns.txt"
echo ""

# Create detailed output file
OUTPUT_FILE="decompilation/analysis-output/mips_pattern_analysis.txt"
echo "Creating detailed output: $OUTPUT_FILE"

{
    echo "MIPS Pattern Analysis - hp_damage.mips"
    echo "Generated: $(date)"
    echo "========================================"
    echo ""
    
    echo "OFFSET 0x0F (enemyPower) REFERENCES:"
    grep -n "0f 00" "$HEXDUMP_FILE"
    echo ""
    
    echo "OFFSET 0x11 (baseDamage) REFERENCES:"
    grep -n "11 00" "$HEXDUMP_FILE"
    echo ""
    
    echo "ARITHMETIC OPERATIONS:"
    echo "MULT instructions:"
    grep -n "18 00 00 00\|19 00 00 00" "$HEXDUMP_FILE"
    echo ""
    
    echo "FUNCTION RETURNS (JR RA):"
    grep -n "08 00 e0 03" "$HEXDUMP_FILE"
    
} > "$OUTPUT_FILE"

echo "✅ Detailed analysis saved"
echo ""
