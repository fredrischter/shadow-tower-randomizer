#!/bin/bash

# Script to trace binary modifications made by isolation patches
# This helps understand where in FDAT.T_PARTS the changes occur

echo "========================================="
echo "Isolation Patches Binary Trace Tool"
echo "========================================="
echo ""

# Check if FDAT.T_PARTS directory exists
if [ ! -d "FDAT.T_PARTS" ]; then
    echo "ERROR: FDAT.T_PARTS directory not found"
    echo "Please run unpack.js first to extract the T-files"
    exit 1
fi

echo "Analyzing creature data structure offsets..."
echo ""

# Define the offsets that isolation patches modify
declare -A OFFSETS=(
    ["attack1"]="0x07"
    ["attack2"]="0x08"
    ["magic1"]="0x09"
    ["enemyPower"]="0x0f"
    ["baseDamage"]="0x11"
    ["weaponDefense1"]="0x4a"
    ["weaponDefense2"]="0x4c"
    ["weaponDefense3"]="0x4e"
    ["magDefense1"]="0x50"
    ["magDefense2"]="0x52"
    ["magDefense3"]="0x54"
    ["magDefense4"]="0x56"
    ["magDefense5"]="0x58"
)

# Define which fields were in the original isolation patches
ORIGINAL_PATCHES=(
    "attack1"
    "attack2"
    "magic1"
    "weaponDefense1"
    "weaponDefense2"
    "weaponDefense3"
    "magDefense1"
    "magDefense2"
    "magDefense3"
    "magDefense4"
    "magDefense5"
)

# Define newly identified fields
NEW_FIELDS=(
    "enemyPower"
    "baseDamage"
)

echo "Original Isolation Patch Fields:"
echo "================================"
for field in "${ORIGINAL_PATCHES[@]}"; do
    offset="${OFFSETS[$field]}"
    echo "  $field: $offset"
done
echo ""

echo "Newly Identified Damage Fields (NOT in original patches):"
echo "=========================================================="
for field in "${NEW_FIELDS[@]}"; do
    offset="${OFFSETS[$field]}"
    echo "  $field: $offset (HYPOTHESIS - needs testing)"
done
echo ""

# Function to search for a byte pattern in a file
search_offset_in_file() {
    local file=$1
    local offset=$2
    local field_name=$3
    
    # Convert hex offset to decimal
    local dec_offset=$((offset))
    
    # Get file size
    local file_size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
    
    if [ -z "$file_size" ]; then
        echo "  [ERROR] Could not get file size for $file"
        return
    fi
    
    # Check if offset is within file
    if [ $dec_offset -lt $file_size ]; then
        # Read the byte at the offset
        local byte=$(hexdump -s $dec_offset -n 1 -e '1/1 "%02x"' "$file" 2>/dev/null)
        if [ -n "$byte" ]; then
            echo "  $field_name at $offset: 0x$byte"
        fi
    fi
}

# Example: Analyze a specific creature file
EXAMPLE_FILE="FDAT.T_PARTS/128 281000-2c0800.T"

if [ -f "$EXAMPLE_FILE" ]; then
    echo "Example Analysis: $EXAMPLE_FILE"
    echo "================================"
    echo "Creature base offset assumed at 0x0000 (adjust as needed)"
    echo ""
    
    # Search for all isolation patch offsets
    for field in "${ORIGINAL_PATCHES[@]}"; do
        offset="${OFFSETS[$field]}"
        search_offset_in_file "$EXAMPLE_FILE" "$offset" "$field"
    done
    
    echo ""
    echo "Newly identified fields:"
    for field in "${NEW_FIELDS[@]}"; do
        offset="${OFFSETS[$field]}"
        search_offset_in_file "$EXAMPLE_FILE" "$offset" "$field"
    done
else
    echo "Example file not found: $EXAMPLE_FILE"
    echo "Please check FDAT.T_PARTS directory structure"
fi

echo ""
echo "========================================="
echo "To verify these offsets:"
echo "1. Modify a creature using data_model.js"
echo "2. Run this script before and after"
echo "3. Compare the byte values at each offset"
echo "4. In-game testing to verify damage changes"
echo "========================================="
echo ""

# Create a visual offset map
echo "Creature Data Structure Offset Map:"
echo "===================================="
echo "Offset | Size   | Field Name        | In Isolation Patches?"
echo "-------|--------|-------------------|----------------------"
echo "0x07   | 1 byte | attack1           | YES"
echo "0x08   | 1 byte | attack2           | YES"
echo "0x09   | 1 byte | magic1            | YES"
echo "0x0f   | 2 bytes| enemyPower        | NO (newly identified)"
echo "0x11   | 2 bytes| baseDamage        | NO (newly identified)"
echo "0x4a   | 2 bytes| weaponDefense1    | YES"
echo "0x4c   | 2 bytes| weaponDefense2    | YES"
echo "0x4e   | 2 bytes| weaponDefense3    | YES"
echo "0x50   | 2 bytes| magDefense1       | YES"
echo "0x52   | 2 bytes| magDefense2       | YES"
echo "0x54   | 2 bytes| magDefense3       | YES"
echo "0x56   | 2 bytes| magDefense4       | YES"
echo "0x58   | 2 bytes| magDefense5       | YES"
echo ""

# EntityState offsets (for reference)
echo "EntityState Attack Offsets (in entity states section):"
echo "======================================================"
echo "Offset | Size   | Field Name        | In Isolation Patches?"
echo "-------|--------|-------------------|----------------------"
echo "0x1a   | 2 bytes| attack1           | YES (forEach loop)"
echo "0x1c   | 2 bytes| attack2           | YES (forEach loop)"
echo "0x1e   | 2 bytes| attack3           | YES (forEach loop)"
echo ""

echo "For MIPS decompilation analysis:"
echo "================================"
echo "hp_damage.mips analysis found these offsets used in damage calculations:"
echo "  - 0x07 (attack1): 10 references"
echo "  - 0x0f (enemyPower): 10 references ⭐"
echo "  - 0x11 (baseDamage): 10 references ⭐"
echo "  - 0x32 (HP): 9 references"
echo ""
echo "See: decompilation/analysis-notes/INITIAL_ANALYSIS_RESULTS.md"
echo ""
