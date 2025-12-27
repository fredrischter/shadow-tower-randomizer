#!/bin/bash
# Binary analysis helper script for Shadow Tower
# Uses objdump, strings, and hexdump for initial analysis

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DECOMPILATION_DIR="$SCRIPT_DIR/decompilation"
ST_EXE="$DECOMPILATION_DIR/ST.EXE"
HP_DAMAGE="$DECOMPILATION_DIR/hp_damage.mips"

echo "Shadow Tower Binary Analysis Helper"
echo "====================================="
echo ""

# Check if files exist
if [ ! -f "$ST_EXE" ]; then
    echo "Error: ST.EXE not found at $ST_EXE"
    echo "Run ./setup_decompilation.sh first"
    exit 1
fi

if [ ! -f "$HP_DAMAGE" ]; then
    echo "Error: hp_damage.mips not found at $HP_DAMAGE"
    echo "Run ./setup_decompilation.sh first"
    exit 1
fi

mkdir -p "$DECOMPILATION_DIR/analysis-output"

echo "1. Extracting strings from ST.EXE..."
strings "$ST_EXE" > "$DECOMPILATION_DIR/analysis-output/ST.EXE.strings.txt"
echo "   Saved to: analysis-output/ST.EXE.strings.txt"

echo ""
echo "2. Creating hexdump of hp_damage.mips..."
hexdump -C "$HP_DAMAGE" > "$DECOMPILATION_DIR/analysis-output/hp_damage.mips.hexdump.txt"
echo "   Saved to: analysis-output/hp_damage.mips.hexdump.txt"

echo ""
echo "3. Analyzing hp_damage.mips for MIPS instructions..."

# Look for load halfword unsigned (LHU) instructions that might be loading creature stats
# MIPS LHU instruction format: 0x94 or 0x95 as second byte (big endian representation)
echo "   Searching for LHU instructions (loads of UInt16 values)..."
hexdump -C "$HP_DAMAGE" | grep -E " (94|95)[0-9a-f]{2} " | head -20 > "$DECOMPILATION_DIR/analysis-output/lhu_instructions.txt"
echo "   Found potential UInt16 loads - saved to: analysis-output/lhu_instructions.txt"

echo ""
echo "4. Searching for creature stat offset patterns..."

# Common offsets we're looking for
# 0x07 (attack1), 0x08 (attack2), 0x09 (magic1), 0x0f (unknown), 0x11 (unknown), 0x32 (HP)

cat > "$DECOMPILATION_DIR/analysis-output/offset_patterns.txt" << 'EOF'
# Creature Stat Offset Patterns in hp_damage.mips

## Searching for known offsets in little-endian format:

Known creature offsets to search for:
- 0x07 = attack1 (byte 0x07 0x00)
- 0x08 = attack2 (byte 0x08 0x00)
- 0x09 = magic1 (byte 0x09 0x00)
- 0x0f = something3 (byte 0x0f 0x00) - UNKNOWN, possible enemy_power
- 0x11 = something4 (byte 0x11 0x00) - UNKNOWN, possible base_damage
- 0x32 = HP (byte 0x32 0x00)

## Pattern matches:
EOF

# Search for these patterns in the file
echo "" >> "$DECOMPILATION_DIR/analysis-output/offset_patterns.txt"
echo "### Offset 0x07 (attack1):" >> "$DECOMPILATION_DIR/analysis-output/offset_patterns.txt"
hexdump -C "$HP_DAMAGE" | grep "07 00" | head -10 >> "$DECOMPILATION_DIR/analysis-output/offset_patterns.txt"

echo "" >> "$DECOMPILATION_DIR/analysis-output/offset_patterns.txt"
echo "### Offset 0x0f (something3 - candidate for enemy_power):" >> "$DECOMPILATION_DIR/analysis-output/offset_patterns.txt"
hexdump -C "$HP_DAMAGE" | grep "0f 00" | head -10 >> "$DECOMPILATION_DIR/analysis-output/offset_patterns.txt"

echo "" >> "$DECOMPILATION_DIR/analysis-output/offset_patterns.txt"
echo "### Offset 0x11 (something4 - candidate for base_damage):" >> "$DECOMPILATION_DIR/analysis-output/offset_patterns.txt"
hexdump -C "$HP_DAMAGE" | grep "11 00" | head -10 >> "$DECOMPILATION_DIR/analysis-output/offset_patterns.txt"

echo "" >> "$DECOMPILATION_DIR/analysis-output/offset_patterns.txt"
echo "### Offset 0x32 (HP):" >> "$DECOMPILATION_DIR/analysis-output/offset_patterns.txt"
hexdump -C "$HP_DAMAGE" | grep "32 00" | head -10 >> "$DECOMPILATION_DIR/analysis-output/offset_patterns.txt"

echo "   Saved offset pattern analysis to: analysis-output/offset_patterns.txt"

echo ""
echo "5. Analyzing file structure..."

cat > "$DECOMPILATION_DIR/analysis-output/file_info.txt" << EOF
# File Information

## ST.EXE
- Size: $(stat -f%z "$ST_EXE" 2>/dev/null || stat -c%s "$ST_EXE") bytes
- Type: PlayStation Executable (MIPS)

## hp_damage.mips
- Size: $(stat -f%z "$HP_DAMAGE" 2>/dev/null || stat -c%s "$HP_DAMAGE") bytes
- Type: MIPS binary code/data

## File header (first 256 bytes):
EOF

hexdump -C "$HP_DAMAGE" | head -16 >> "$DECOMPILATION_DIR/analysis-output/file_info.txt"

echo "   Saved file info to: analysis-output/file_info.txt"

echo ""
echo "6. Creating disassembly sample..."

# Try to use objdump if available
if command -v mips-linux-gnu-objdump &> /dev/null; then
    echo "   Using mips-linux-gnu-objdump for disassembly..."
    mips-linux-gnu-objdump -D -b binary -m mips:3000 "$HP_DAMAGE" | head -200 > "$DECOMPILATION_DIR/analysis-output/hp_damage_disassembly_sample.txt"
    echo "   Saved disassembly to: analysis-output/hp_damage_disassembly_sample.txt"
elif command -v objdump &> /dev/null; then
    echo "   Note: MIPS objdump not found. Install with: apt-get install binutils-mips-linux-gnu"
    echo "   Skipping disassembly step."
else
    echo "   objdump not found. Skipping disassembly step."
fi

echo ""
echo "Analysis complete!"
echo ""
echo "Review these files for clues:"
echo "  - analysis-output/offset_patterns.txt - Look for creature stat access patterns"
echo "  - analysis-output/lhu_instructions.txt - UInt16 load instructions"
echo "  - analysis-output/ST.EXE.strings.txt - Debug strings or function names"
echo "  - analysis-output/file_info.txt - Basic file information"
echo ""
echo "Next steps:"
echo "  1. Review offset_patterns.txt to see how stats are accessed"
echo "  2. Look for patterns where 0x0f or 0x11 offsets are used"
echo "  3. Cross-reference with known working offsets (0x07, 0x32)"
echo "  4. Set up Ghidra for detailed analysis (see GHIDRA_IMPORT_INSTRUCTIONS.md)"
echo ""
