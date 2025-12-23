#!/usr/bin/env python3
"""
Generate binary search patches to pinpoint exact HP damage instruction.

User testing confirmed: full_nop_1 (NOPs 0x2d430-0x2d530) reduces magic damage
from 120 HP to 3 HP. This script creates 32 patches to systematically narrow
down to the exact instruction(s) responsible.

Binary search strategy:
1. Level 1: Split 256 bytes into 2 halves (128 bytes each)
2. Level 2: Split successful half into 4 quarters (64 bytes each)
3. Level 3: Split successful quarter into 8 eighths (32 bytes each)
4. Level 4: Split successful eighth into 16 groups (16 bytes/4 instructions each)
"""

import shutil
import os

# Base ST.EXE from iso-dump
BASE_ST_EXE = "iso-dump/ST.EXE"
OUTPUT_DIR = "binary_search_patches"

# Damage function range (confirmed by full_nop_1 success)
FUNCTION_START = 0x2d430
FUNCTION_END = 0x2d530
FUNCTION_SIZE = FUNCTION_END - FUNCTION_START  # 256 bytes

NOP_INSTRUCTION = b'\x00\x00\x00\x00'

def create_patch(name, offset, size, description):
    """Create a patch that NOPs a specific range."""
    print(f"Creating {name}: NOP {size} bytes at 0x{offset:x}-0x{offset+size:x}")
    
    # Read original ST.EXE
    with open(BASE_ST_EXE, 'rb') as f:
        data = bytearray(f.read())
    
    # NOP the specified range
    for i in range(offset, offset + size, 4):
        data[i:i+4] = NOP_INSTRUCTION
    
    # Write patched file
    output_path = os.path.join(OUTPUT_DIR, f"ST.EXE.{name}")
    with open(output_path, 'wb') as f:
        f.write(data)
    
    return f"{name}: {description}"

def main():
    # Ensure output directory exists
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    
    # Copy original as backup
    shutil.copy(BASE_ST_EXE, os.path.join(OUTPUT_DIR, "ST.EXE.original"))
    
    descriptions = []
    
    print("\n=== SECTION M: 128-Byte Halves (2 patches) ===")
    # Split 256 bytes into 2 halves
    half_size = FUNCTION_SIZE // 2  # 128 bytes
    descriptions.append(create_patch(
        "half_1",
        FUNCTION_START,
        half_size,
        f"NOP first 128 bytes (0x{FUNCTION_START:x}-0x{FUNCTION_START+half_size:x})"
    ))
    descriptions.append(create_patch(
        "half_2",
        FUNCTION_START + half_size,
        half_size,
        f"NOP second 128 bytes (0x{FUNCTION_START+half_size:x}-0x{FUNCTION_END:x})"
    ))
    
    print("\n=== SECTION N: 64-Byte Quarters (4 patches) ===")
    # Split 256 bytes into 4 quarters
    quarter_size = FUNCTION_SIZE // 4  # 64 bytes
    for i in range(4):
        offset = FUNCTION_START + (i * quarter_size)
        descriptions.append(create_patch(
            f"quarter_{i+1}",
            offset,
            quarter_size,
            f"NOP quarter {i+1}/4 (0x{offset:x}-0x{offset+quarter_size:x})"
        ))
    
    print("\n=== SECTION O: 32-Byte Eighths (8 patches) ===")
    # Split 256 bytes into 8 eighths
    eighth_size = FUNCTION_SIZE // 8  # 32 bytes
    for i in range(8):
        offset = FUNCTION_START + (i * eighth_size)
        descriptions.append(create_patch(
            f"eighth_{i+1}",
            offset,
            eighth_size,
            f"NOP eighth {i+1}/8 (0x{offset:x}-0x{offset+eighth_size:x})"
        ))
    
    print("\n=== SECTION P: 16-Byte Groups (16 patches) ===")
    # Split 256 bytes into 16 groups (4 instructions each)
    group_size = 16  # 4 MIPS instructions
    for i in range(16):
        offset = FUNCTION_START + (i * group_size)
        descriptions.append(create_patch(
            f"group_{i+1}",
            offset,
            group_size,
            f"NOP group {i+1}/16 - 4 instructions (0x{offset:x}-0x{offset+group_size:x})"
        ))
    
    print(f"\n✓ Created 32 binary search patches in {OUTPUT_DIR}/")
    print(f"✓ Total coverage: 256 bytes from 0x{FUNCTION_START:x} to 0x{FUNCTION_END:x}")
    
    # Create summary file
    with open(os.path.join(OUTPUT_DIR, "PATCH_SUMMARY.txt"), 'w') as f:
        f.write("Binary Search Patches - Summary\n")
        f.write("=" * 60 + "\n\n")
        f.write(f"Target function: 0x{FUNCTION_START:x} - 0x{FUNCTION_END:x}\n")
        f.write(f"Total size: {FUNCTION_SIZE} bytes ({FUNCTION_SIZE//4} instructions)\n\n")
        for desc in descriptions:
            f.write(desc + "\n")
    
    print(f"✓ Created PATCH_SUMMARY.txt")

if __name__ == "__main__":
    main()
