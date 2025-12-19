#!/bin/bash

# Script to extract ST.EXE from the Shadow Tower ISO
# This helps investigate where creature speed data is stored

echo "=== ST.EXE Extraction Helper ==="
echo ""

# Check if ISO file exists
ISO_PATH="generated/st.bin"
if [ ! -f "$ISO_PATH" ]; then
    echo "❌ ISO file not found at: $ISO_PATH"
    echo ""
    echo "Please ensure st.bin is in the generated/ directory"
    exit 1
fi

echo "✓ Found ISO: $ISO_PATH"
echo ""

# Create extraction directory
EXTRACT_DIR="generated/exe_extracted"
mkdir -p "$EXTRACT_DIR"

echo "Extracting ISO to: $EXTRACT_DIR"
echo ""

# Use dumpsxiso to extract the ISO
# This should extract all files including ST.EXE
dumpsxiso -x "$EXTRACT_DIR" -s "$EXTRACT_DIR/iso.xml" "$ISO_PATH"

if [ $? -ne 0 ]; then
    echo "❌ dumpsxiso failed"
    echo ""
    echo "Make sure dumpsxiso is installed and in PATH"
    exit 1
fi

echo ""
echo "=== Searching for executable files ==="
echo ""

# Find executable files (common PS1 executable names)
EXECUTABLES=$(find "$EXTRACT_DIR" -type f \( -name "*.EXE" -o -name "*.exe" -o -name "SLPS*" -o -name "SCPS*" -o -name "SLES*" -o -name "SLUS*" \))

if [ -z "$EXECUTABLES" ]; then
    echo "❌ No executable files found"
    echo ""
    echo "Listing all files in extracted directory:"
    find "$EXTRACT_DIR" -type f | head -20
else
    echo "✓ Found executable(s):"
    echo ""
    for exe in $EXECUTABLES; do
        FILE_SIZE=$(stat -f%z "$exe" 2>/dev/null || stat -c%s "$exe" 2>/dev/null)
        echo "  $exe"
        echo "    Size: $FILE_SIZE bytes ($((FILE_SIZE / 1024)) KB)"
        
        # Check if it's a PS-X EXE
        MAGIC=$(head -c 8 "$exe" | tr -d '\0')
        if [ "$MAGIC" = "PS-X EXE" ]; then
            echo "    Type: PlayStation Executable (PS-X EXE)"
        else
            echo "    Type: Unknown (first 8 bytes: $(head -c 8 "$exe" | xxd -p))"
        fi
        echo ""
    done
    
    echo "=== Next Steps ==="
    echo ""
    echo "1. Run the analysis tool:"
    echo "   node analyze_stexe.js"
    echo ""
    echo "2. For deeper analysis, use:"
    echo "   - no\$psx debugger (easiest for PS1)"
    echo "   - Ghidra with PlayStation extension"
    echo "   - IDA Pro with MIPS module"
    echo ""
fi

echo "=== Complete ==="
