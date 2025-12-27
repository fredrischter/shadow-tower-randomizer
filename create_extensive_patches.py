#!/usr/bin/env python3
"""
Creates extensive set of HP damage patches for empirical testing.
Tests 25+ different potential HP write locations.
"""

import struct
import os
import shutil

# Read original ST.EXE
with open('iso-dump/ST.EXE', 'rb') as f:
    original = bytearray(f.read())

# Ensure output directory exists
os.makedirs('extensive_hp_patches', exist_ok=True)

# Save original backup
with open('extensive_hp_patches/ST.EXE.original', 'wb') as f:
    f.write(original)

# Target locations based on analysis
# Format: (file_offset, name, description)
patch_targets = [
    # Section 1: Early code
    (0x15d50, "section1_patch1", "Early HP write 0x18a"),
    (0x15d54, "section1_patch2", "Early HP write 0x18c"),
    
    # Section 2: Mid code  
    (0x2bc64, "section2_patch1", "Mid HP write 0x1d0"),
    (0x2bc68, "section2_patch2", "Mid HP write 0x1ce"),
    (0x2bc70, "section2_patch3", "Mid HP write 0x1cc"),
    
    # Section 3: Damage calculation section (most likely candidates)
    (0x2d740, "damage_calc_1", "Damage calc HP[7] 0x19e"),
    (0x2d74c, "damage_calc_2", "Damage calc HP[6] 0x19c"),
    (0x2d750, "damage_calc_3", "Damage calc HP[6] 0x19c alt"),
    (0x2d75c, "damage_calc_4", "Damage calc HP[7] 0x19e alt"),
    (0x2d77c, "damage_calc_5", "Damage calc HP[5] 0x196"),
    (0x2d794, "damage_calc_6", "Damage calc HP[5] 0x196 alt"),
    (0x2d79c, "damage_calc_7", "Damage calc HP[4] 0x194"),
    (0x2d7ac, "damage_calc_8", "Damage calc HP[4] 0x194 alt"),
    (0x2d7b8, "damage_calc_9", "Damage calc HP[5] 0x196 alt2"),
    (0x2d7dc, "damage_calc_10", "Damage calc HP[6.5] 0x19a"),
    (0x2d7e4, "damage_calc_11", "Damage calc HP[6] 0x198"),
    (0x2d7f0, "damage_calc_12", "Damage calc HP[6] 0x198 alt"),
    (0x2d7fc, "damage_calc_13", "Damage calc HP[6.5] 0x19a alt"),
    (0x2d858, "damage_calc_14", "Damage calc HP[8] 0x1a2"),
    (0x2d860, "damage_calc_15", "Damage calc HP[8] 0x1a0"),
    (0x2d88c, "damage_calc_16", "Damage calc HP[8] 0x1a0 alt"),
    (0x2d898, "damage_calc_17", "Damage calc HP[8] 0x1a2 alt"),
    (0x2d8e4, "damage_calc_18", "Damage calc HP[0] 0x190"),
    (0x2d8ec, "damage_calc_19", "Damage calc HP[1] 0x192"),
    (0x2d91c, "damage_calc_20", "Damage calc HP[1] 0x192 alt"),
    (0x2d924, "damage_calc_21", "Damage calc HP[0] 0x190 alt"),
    
    # Section 4: UI/Display
    (0x2daf4, "ui_patch1", "UI HP[7] 0x19e"),
    (0x2db0c, "ui_patch2", "UI HP[5] 0x196"),
    (0x2db24, "ui_patch3", "UI HP[6.5] 0x19a"),
    (0x2db3c, "ui_patch4", "UI HP[1] 0x192"),
    
    # Section 5: Initialization
    (0x2dfac, "init_patch1", "Init HP[25] 0x1c2"),
    (0x2dfd0, "init_patch2", "Init HP[16] 0x1b0"),
    (0x2dff4, "init_patch3", "Init HP[7] 0x19e"),
    (0x2dff8, "init_patch4", "Init HP[6] 0x19c TARGET"),
]

print(f"Creating {len(patch_targets)} experimental patches...")

for file_offset, name, description in patch_targets:
    # Create patched version
    patched = bytearray(original)
    
    # Read original instruction
    orig_instr = struct.unpack('<I', patched[file_offset:file_offset+4])[0]
    
    # Replace sh (store halfword) with nop (0x00000000)
    patched[file_offset:file_offset+4] = struct.pack('<I', 0x00000000)
    
    # Write patched file
    patch_filename = f'extensive_hp_patches/ST.EXE.zero_{name}'
    with open(patch_filename, 'wb') as f:
        f.write(patched)
    
    print(f"✓ Created {name:25s} - offset 0x{file_offset:05x} (0x{orig_instr:08x} → NOP)")

print(f"\nAll {len(patch_targets)} patches created in extensive_hp_patches/")
print("\nTest each patch to find which one prevents HP damage!")
