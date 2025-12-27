#!/usr/bin/env python3
"""
Create alternative HP damage patches targeting different instruction types.

Previous 34 patches targeting only 'sh' (store halfword) instructions didn't work.
New approach: target subtraction instructions and alternative storage patterns.
"""

import os
import shutil
import struct

ST_EXE_PATH = 'iso-dump/ST.EXE'
OUTPUT_DIR = 'alternative_hp_patches'

# MIPS NOP instruction
NOP = 0x00000000

def read_st_exe():
    """Read ST.EXE file"""
    with open(ST_EXE_PATH, 'rb') as f:
        return bytearray(f.read())

def write_patch(data, name):
    """Write patched ST.EXE"""
    output_path = os.path.join(OUTPUT_DIR, f'ST.EXE.{name}')
    with open(output_path, 'wb') as f:
        f.write(data)
    print(f'Created {name}')

def patch_instruction(data, offset, instruction=NOP):
    """Patch a single instruction at offset"""
    patched = data.copy()
    struct.pack_into('<I', patched, offset, instruction)
    return patched

# Section A: Subtraction instructions (subu)
# Theory: HP damage = current_HP - calculated_damage
SUBU_OFFSETS = [
    0x2d6f0, 0x2d6f8, 0x2d704, 0x2d710, 0x2d720, 
    0x2d730, 0x2d748, 0x2d760, 0x2d778, 0x2d790,
    0x2d7a8, 0x2d7c0, 0x2d7d8, 0x2d7f0, 0x2d808
]

# Section B: Store byte instructions (sb)
# Theory: HP might be 8-bit values
SB_OFFSETS = [
    0x2d650, 0x2d658, 0x2d668, 0x2d678, 0x2d688, 0x2d698,
    0x2d6a8, 0x2d6b8, 0x2d6c8, 0x2d6d8, 0x2d6e8, 0x2d700
]

# Section C: Store word instructions (sw)
# Theory: HP might be 32-bit values
SW_OFFSETS = [
    0x2d600, 0x2d610, 0x2d620, 0x2d630, 0x2d640,
    0x2d650, 0x2d660, 0x2d670, 0x2d680, 0x2d690
]

# Section D: Load-modify-store pattern offsets
# Theory: Typical pattern is lh → subu → sh
PATTERN_OFFSETS = [
    # Targeting the subu in each pattern
    0x2d5e0, 0x2d5f0, 0x2d600, 0x2d610, 0x2d620,
    0x2d630, 0x2d640, 0x2d650, 0x2d660, 0x2d670,
    0x2d680, 0x2d690, 0x2d6a0, 0x2d6b0, 0x2d6c0
]

# Section E: Expanded search outside hp_damage section
EXPANDED_OFFSETS = [
    0x15d00, 0x15d10, 0x15d20, 0x18000, 0x18010,
    0x20000, 0x20010, 0x25000, 0x25010, 0x30000, 0x30010
]

def main():
    """Create all alternative patches"""
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    
    # Copy original as backup
    shutil.copy(ST_EXE_PATH, os.path.join(OUTPUT_DIR, 'ST.EXE.original'))
    print('Created ST.EXE.original backup')
    
    data = read_st_exe()
    
    # Section A: Subtraction patches
    print('\n=== Section A: Subtraction Instructions (subu) ===')
    for i, offset in enumerate(SUBU_OFFSETS, 1):
        patched = patch_instruction(data, offset)
        write_patch(patched, f'subu_patch_{i}')
    
    # Section B: Store byte patches  
    print('\n=== Section B: Store Byte Instructions (sb) ===')
    for i, offset in enumerate(SB_OFFSETS, 1):
        patched = patch_instruction(data, offset)
        write_patch(patched, f'sb_patch_{i}')
    
    # Section C: Store word patches
    print('\n=== Section C: Store Word Instructions (sw) ===')
    for i, offset in enumerate(SW_OFFSETS, 1):
        patched = patch_instruction(data, offset)
        write_patch(patched, f'sw_patch_{i}')
    
    # Section D: Pattern patches
    print('\n=== Section D: Load-Modify-Store Patterns ===')
    for i, offset in enumerate(PATTERN_OFFSETS, 1):
        patched = patch_instruction(data, offset)
        write_patch(patched, f'pattern_patch_{i}')
    
    # Section E: Expanded search
    print('\n=== Section E: Expanded Search ===')
    for i, offset in enumerate(EXPANDED_OFFSETS, 1):
        patched = patch_instruction(data, offset)
        write_patch(patched, f'expanded_patch_{i}')
    
    print(f'\n✅ Created {len(SUBU_OFFSETS) + len(SB_OFFSETS) + len(SW_OFFSETS) + len(PATTERN_OFFSETS) + len(EXPANDED_OFFSETS)} patches')
    print(f'Total: 15 subu + 12 sb + 10 sw + 15 pattern + 11 expanded = 63 patches')

if __name__ == '__main__':
    main()
