#!/usr/bin/env python3
"""
Generate isolation patches to test individual damage formula components.

The damage formula is: damage = (base_damage * player_stat * enemy_power) / 10

Each patch isolates one component by forcing it to 1, allowing us to identify
which component contributes most to the final damage value.
"""

import struct
import os

def create_isolation_patches():
    """Create 3 patches that isolate each damage component."""
    
    # Read original ST.EXE
    original_path = 'targeted_patches/ST.EXE.original'
    if not os.path.exists(original_path):
        print(f"Error: {original_path} not found")
        return
    
    with open(original_path, 'rb') as f:
        original = bytearray(f.read())
    
    # Create output directory
    os.makedirs('isolation_patches', exist_ok=True)
    
    print("Creating damage component isolation patches...")
    
    # Patch 1: Force base_damage to 1 by NOPing its multiplication
    # This NOPs the mult instruction at 0x2d4cc
    patch1 = original.copy()
    patch1[0x2d4cc:0x2d4d0] = b'\x00\x00\x00\x00'  # NOP
    output1 = 'isolation_patches/ST.EXE.force_base_damage_to_1'
    with open(output1, 'wb') as f:
        f.write(patch1)
    print(f"  Created {output1}")
    print(f"    - NOPs multiplication at 0x2d4cc")
    print(f"    - Formula: damage = (1 * player_stat * enemy_power) / 10")
    
    # Patch 2: Force player_stat to 1
    # Insert li $a2, 1 at 0x2d4c8 (load immediate 1 to register a2)
    patch2 = original.copy()
    patch2[0x2d4c8:0x2d4cc] = struct.pack('<I', 0x24060001)  # li $a2, 1
    output2 = 'isolation_patches/ST.EXE.force_player_stat_to_1'
    with open(output2, 'wb') as f:
        f.write(patch2)
    print(f"  Created {output2}")
    print(f"    - Forces player stat to 1 at 0x2d4c8")
    print(f"    - Formula: damage = (base_damage * 1 * enemy_power) / 10")
    
    # Patch 3: Force enemy_power to 1
    # Insert li $a1, 1 at 0x2d4c4 (load immediate 1 to register a1)
    patch3 = original.copy()
    patch3[0x2d4c4:0x2d4c8] = struct.pack('<I', 0x24050001)  # li $a1, 1
    output3 = 'isolation_patches/ST.EXE.force_enemy_power_to_1'
    with open(output3, 'wb') as f:
        f.write(patch3)
    print(f"  Created {output3}")
    print(f"    - Forces enemy power to 1 at 0x2d4c4")
    print(f"    - Formula: damage = (base_damage * player_stat * 1) / 10")
    
    # Copy original for reference
    output_orig = 'isolation_patches/ST.EXE.original'
    with open(output_orig, 'wb') as f:
        f.write(original)
    print(f"  Created {output_orig}")
    
    print(f"\nTotal: 3 isolation patches + 1 original")
    print(f"\nTesting strategy:")
    print(f"  1. Test each patch and note damage value")
    print(f"  2. Compare to baseline (~40 HP per hit)")
    print(f"  3. Largest damage reduction identifies primary scaling factor")

if __name__ == '__main__':
    create_isolation_patches()
