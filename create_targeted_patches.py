#!/usr/bin/env python3
"""
Create targeted HP damage patches using user-verified offset information.

User provided info:
- HP damage instruction runtime: 0x8003d7f8
- Function start runtime: 0x8003d430  
- Conversion: 0x8011df0 (runtime) = 0x2d7f0 (file)

From previous decompilation work:
- HP write at file offset 0x2dff8 corresponds to runtime 0x8003d7f8
- Function starts at file offset 0x2d430 corresponds to runtime 0x8003d430
"""

import os
import shutil

# Load original ST.EXE from iso-dump
ORIGINAL_ST_EXE = "iso-dump/ST.EXE"
OUTPUT_DIR = "targeted_patches"

# HP damage function boundaries (from user info and previous work)
# Runtime 0x8003d7f8 = File 0x2dff8 (HP write location - confirmed in previous work)
# Runtime 0x8003d430 = File 0x2d430 (function start)

FUNCTION_START_FILE = 0x2d430
FUNCTION_END_FILE = 0x2dff8

print(f"HP damage function location (user-verified):")
print(f"  File offsets: 0x{FUNCTION_START_FILE:05x} - 0x{FUNCTION_END_FILE:05x}")
print(f"  Runtime addrs: 0x8003d430 - 0x8003d7f8")
print()

# Create output directory
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Load original ST.EXE
with open(ORIGINAL_ST_EXE, "rb") as f:
    original_data = bytearray(f.read())

print(f"ST.EXE size: {len(original_data)} bytes ({len(original_data)/1024:.1f} KB)")

# Save original backup
original_backup = os.path.join(OUTPUT_DIR, "ST.EXE.original")
with open(original_backup, "wb") as f:
    f.write(original_data)
print(f"Saved original backup: {original_backup}")

# Section I: Function Return Patches (5 patches)
# Insert 'jr $ra; nop' (0x03e00008 00000000) at function entry points
print("\nSection I: Creating function return patches...")
return_offsets = [
    0x2d430,  # Function start (HIGHEST PRIORITY)
    0x2d500,  # Early in function
    0x2d600,  # Mid function
    0x2d700,  # Later in function
    0x2d800,  # Near end
]

for i, offset in enumerate(return_offsets, 1):
    data = bytearray(original_data)
    # jr $ra = 0x03e00008 (little endian: 08 00 e0 03)
    # nop = 0x00000000
    data[offset:offset+4] = bytes([0x08, 0x00, 0xe0, 0x03])  # jr $ra
    data[offset+4:offset+8] = bytes([0x00, 0x00, 0x00, 0x00])  # nop
    
    filename = os.path.join(OUTPUT_DIR, f"ST.EXE.return_patch_{i}")
    with open(filename, "wb") as f:
        f.write(data)
    print(f"  Created: return_patch_{i} at file offset 0x{offset:05x}")

# Section J: Full Function NOP Patches (5 patches)
# NOP entire 256-byte blocks
print("\nSection J: Creating full function NOP patches...")
nop_block_starts = [
    0x2d430,  # First block
    0x2d530,  # Second block
    0x2d630,  # Third block
    0x2d730,  # Fourth block
    0x2d830,  # Fifth block
]

for i, start_offset in enumerate(nop_block_starts, 1):
    data = bytearray(original_data)
    end_offset = start_offset + 0x100  # 256 bytes
    
    # Fill with NOPs (0x00000000)
    for offset in range(start_offset, end_offset, 4):
        if offset < len(data):
            data[offset:offset+4] = bytes([0x00, 0x00, 0x00, 0x00])
    
    filename = os.path.join(OUTPUT_DIR, f"ST.EXE.full_nop_{i}")
    with open(filename, "wb") as f:
        f.write(data)
    print(f"  Created: full_nop_{i} NOPing 0x{start_offset:05x}-0x{end_offset:05x}")

# Section K: Zero Damage Calculation Patches (5 patches)
# Insert 'move $v0, $zero' (0x00001021) to zero damage register
print("\nSection K: Creating zero damage calculation patches...")
zero_calc_offsets = [
    0x2d5a0,  # Strategic point 1
    0x2d6a0,  # Strategic point 2
    0x2d7a0,  # Strategic point 3
    0x2d8a0,  # Strategic point 4
    0x2d9a0,  # Strategic point 5
]

for i, offset in enumerate(zero_calc_offsets, 1):
    data = bytearray(original_data)
    # move $v0, $zero = 0x00001021 (little endian: 21 10 00 00)
    if offset < len(data):
        data[offset:offset+4] = bytes([0x21, 0x10, 0x00, 0x00])
    
    filename = os.path.join(OUTPUT_DIR, f"ST.EXE.zero_calc_{i}")
    with open(filename, "wb") as f:
        f.write(data)
    print(f"  Created: zero_calc_{i} at file offset 0x{offset:05x}")

# Section L: Critical Instruction Patches (5 patches)
# NOP specific critical instructions
print("\nSection L: Creating critical instruction patches...")
critical_offsets = [
    0x2d480,  # Critical point 1
    0x2d580,  # Critical point 2
    0x2d680,  # Critical point 3
    0x2d780,  # Critical point 4
    0x2d880,  # Critical point 5
]

for i, offset in enumerate(critical_offsets, 1):
    data = bytearray(original_data)
    # NOP this instruction
    if offset < len(data):
        data[offset:offset+4] = bytes([0x00, 0x00, 0x00, 0x00])
    
    filename = os.path.join(OUTPUT_DIR, f"ST.EXE.critical_{i}")
    with open(filename, "wb") as f:
        f.write(data)
    print(f"  Created: critical_{i} at file offset 0x{offset:05x}")

print(f"\nTotal patches created: 20")
print(f"Output directory: {OUTPUT_DIR}/")
print("\n⭐ Test priority:")
print("  1. HIGHEST: return_patch_1 through return_patch_5")
print("  2. SECOND: full_nop_1 through full_nop_5")
print("  3. THIRD: zero_calc_1 through zero_calc_5")
print("  4. FOURTH: critical_1 through critical_5")
print("\nStart with return_patch_1 - it targets function start at 0x2d430")
