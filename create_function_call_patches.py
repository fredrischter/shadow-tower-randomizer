#!/usr/bin/env python3
"""
Create function call interception, broad NOP, and register forcing patches for HP damage testing.
After 97 previous patches failed, this uses new strategies:
- Section F: NOP jal (function call) instructions
- Section G: NOP entire code blocks (4-16 instructions)
- Section H: Force damage registers to zero
"""

import os
import shutil

def create_patches():
    # Base directory
    patch_dir = 'function_call_patches'
    os.makedirs(patch_dir, exist_ok=True)
    
    # Copy original ST.EXE
    if os.path.exists('iso-dump/ST.EXE'):
        shutil.copy('iso-dump/ST.EXE', os.path.join(patch_dir, 'ST.EXE.original'))
    
    # Read original ST.EXE
    with open(os.path.join(patch_dir, 'ST.EXE.original'), 'rb') as f:
        original_data = bytearray(f.read())
    
    # Section F: Function Call Interception Patches (15 patches)
    # NOP jal (jump and link) instructions in damage calculation section
    # jal instruction: 0x0c?????? (opcode 0x0c = 3 in top 6 bits)
    call_offsets = [
        0x2d600, 0x2d620, 0x2d640, 0x2d660, 0x2d680,
        0x2d6a0, 0x2d6c0, 0x2d6e0, 0x2d700, 0x2d720,
        0x2d740, 0x2d760, 0x2d780, 0x2d7a0, 0x2d7c0
    ]
    
    for i, offset in enumerate(call_offsets, 1):
        data = original_data.copy()
        # NOP the jal instruction (0x00000000)
        data[offset:offset+4] = b'\x00\x00\x00\x00'
        output_path = os.path.join(patch_dir, f'ST.EXE.call_patch_{i}')
        with open(output_path, 'wb') as f:
            f.write(data)
        print(f'Created call_patch_{i} at offset 0x{offset:x}')
    
    # Section G: Broad NOP Patches (15 patches)
    # NOP entire blocks of 4-16 instructions
    nop_blocks = [
        (0x2d700, 4),   # 4 instructions
        (0x2d710, 4),
        (0x2d720, 8),   # 8 instructions
        (0x2d730, 8),
        (0x2d740, 8),
        (0x2d750, 12),  # 12 instructions
        (0x2d760, 12),
        (0x2d770, 12),
        (0x2d780, 16),  # 16 instructions
        (0x2d790, 16),
        (0x2d7a0, 16),
        (0x2d7b0, 8),
        (0x2d7c0, 8),
        (0x2d7d0, 4),
        (0x2d7e0, 4)
    ]
    
    for i, (offset, count) in enumerate(nop_blocks, 1):
        data = original_data.copy()
        # NOP the entire block
        for j in range(count):
            data[offset + j*4:offset + j*4 + 4] = b'\x00\x00\x00\x00'
        output_path = os.path.join(patch_dir, f'ST.EXE.nop_block_{i}')
        with open(output_path, 'wb') as f:
            f.write(data)
        print(f'Created nop_block_{i} at offset 0x{offset:x} ({count} instructions)')
    
    # Section H: Register Forcing Patches (15 patches)
    # Insert "move $reg, $zero" before suspected HP writes
    # move $v0, $zero = 0x00001021 (addu $v0, $zero, $zero)
    # move $a0, $zero = 0x00002021 (addu $a0, $zero, $zero)
    register_offsets = [
        (0x2d600, b'\x21\x10\x00\x00'),  # move $v0, $zero
        (0x2d610, b'\x21\x10\x00\x00'),
        (0x2d620, b'\x21\x20\x00\x00'),  # move $a0, $zero
        (0x2d630, b'\x21\x20\x00\x00'),
        (0x2d640, b'\x21\x10\x00\x00'),
        (0x2d650, b'\x21\x10\x00\x00'),
        (0x2d660, b'\x21\x20\x00\x00'),
        (0x2d670, b'\x21\x20\x00\x00'),
        (0x2d680, b'\x21\x10\x00\x00'),
        (0x2d690, b'\x21\x10\x00\x00'),
        (0x2d6a0, b'\x21\x20\x00\x00'),
        (0x2d6b0, b'\x21\x20\x00\x00'),
        (0x2d6c0, b'\x21\x10\x00\x00'),
        (0x2d6d0, b'\x21\x10\x00\x00'),
        (0x2d6e0, b'\x21\x20\x00\x00')
    ]
    
    for i, (offset, instruction) in enumerate(register_offsets, 1):
        data = original_data.copy()
        # Insert "move $reg, $zero" instruction
        data[offset:offset+4] = instruction
        output_path = os.path.join(patch_dir, f'ST.EXE.register_patch_{i}')
        with open(output_path, 'wb') as f:
            f.write(data)
        print(f'Created register_patch_{i} at offset 0x{offset:x}')
    
    print(f'\nTotal: 45 patches created in {patch_dir}/')
    print('- Section F: 15 function call patches (call_patch_1 to call_patch_15)')
    print('- Section G: 15 broad NOP patches (nop_block_1 to nop_block_15)')
    print('- Section H: 15 register forcing patches (register_patch_1 to register_patch_15)')

if __name__ == '__main__':
    create_patches()
