#!/usr/bin/env python3
"""
Apply a damage zero patch to ST.EXE

Usage: python3 apply_st_exe_patch.py <patch_name>

Example: python3 apply_st_exe_patch.py zero_attack_power_reads
"""

import sys
import struct
import os
import shutil

def apply_patch(st_exe_path, patch_name):
    """Apply a patch to ST.EXE."""
    
    # Backup original
    backup_path = st_exe_path + '.backup'
    if not os.path.exists(backup_path):
        print(f"Creating backup: {backup_path}")
        shutil.copy2(st_exe_path, backup_path)
    
    # Define patches
    patches = {
        'zero_attack_power_reads': [
            (0x28514, bytes([0x00, 0x00, 0x30, 0x25])),
            (0x28570, bytes([0x00, 0x00, 0x30, 0x25])),
            (0x2d8c4, bytes([0x00, 0x00, 0x18, 0x25])),
        ],
        'zero_multiply_by_5': [
            (0x1f800, bytes([0x00, 0x00, 0x18, 0x25])),
            (0x1f804, bytes([0x00, 0x00, 0x00, 0x00])),
        ],
        'zero_final_damage_write': [
            (0x2dff8, bytes([0xa4, 0x60, 0x01, 0x9c])),
        ],
        'force_damage_to_one': [
            (0x2dff4, bytes([0x34, 0x02, 0x00, 0x01])),
        ],
    }
    
    if patch_name not in patches:
        print(f"Error: Unknown patch '{patch_name}'")
        print(f"Available patches: {', '.join(patches.keys())}")
        return False
    
    # Apply patch
    with open(st_exe_path, 'r+b') as f:
        for offset, new_bytes in patches[patch_name]:
            f.seek(offset)
            f.write(new_bytes)
            print(f"Patched offset 0x{offset:06x} with {len(new_bytes)} bytes")
    
    print(f"\nPatch '{patch_name}' applied successfully!")
    print(f"Patched file: {st_exe_path}")
    print(f"Backup saved: {backup_path}")
    return True

def restore_backup(st_exe_path):
    """Restore ST.EXE from backup."""
    backup_path = st_exe_path + '.backup'
    if not os.path.exists(backup_path):
        print("Error: No backup file found!")
        return False
    
    shutil.copy2(backup_path, st_exe_path)
    print(f"Restored from backup: {backup_path}")
    return True

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("Usage: python3 apply_st_exe_patch.py <patch_name|restore>")
        print("\nAvailable patches:")
        print("  - zero_attack_power_reads")
        print("  - zero_multiply_by_5")
        print("  - zero_final_damage_write")
        print("  - force_damage_to_one")
        print("  - restore (restore from backup)")
        sys.exit(1)
    
    st_exe_path = 'iso-dump/ST.EXE'
    
    if not os.path.exists(st_exe_path):
        print(f"Error: {st_exe_path} not found!")
        sys.exit(1)
    
    patch_name = sys.argv[1]
    
    if patch_name == 'restore':
        restore_backup(st_exe_path)
    else:
        apply_patch(st_exe_path, patch_name)
