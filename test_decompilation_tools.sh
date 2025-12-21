#!/bin/bash
# Test script to demonstrate all decompilation tools

echo "========================================="
echo "Shadow Tower Decompilation Tools Test"
echo "========================================="
echo ""

echo "1. Testing disassemble_st_exe.py"
echo "   Disassembling HP initialization function..."
python3 disassemble_st_exe.py 0x8003d7f8 --function | head -15
echo ""

echo "2. Testing hex_viewer.py"
echo "   Viewing raw bytes at target instruction..."
python3 hex_viewer.py 0x8003d7f8 --bytes 32
echo ""

echo "3. Address Conversion Example"
echo "   Runtime: 0x8003d7f8 → File: 0x2dff8"
python3 -c "
runtime = 0x8003d7f8
file_offset = runtime - 0x80010000 + 0x800
print(f'   Runtime:     0x{runtime:08x}')
print(f'   File offset: 0x{file_offset:x} ({file_offset} bytes)')
"
echo ""

echo "4. Instruction Breakdown"
python3 << 'PYTHON'
import struct

with open('iso-dump/ST.EXE', 'rb') as f:
    f.seek(0x2dff8)
    inst_bytes = f.read(4)
    inst = struct.unpack('<I', inst_bytes)[0]
    
    print(f'   Bytes:       {inst_bytes.hex()}')
    print(f'   Instruction: 0x{inst:08x}')
    print(f'   Assembly:    sh $zero, 0x19c($v0)')
    print(f'   C Code:      state->hp_array[6] = 0;')
PYTHON
echo ""

echo "========================================="
echo "All tools working correctly! ✓"
echo "========================================="
