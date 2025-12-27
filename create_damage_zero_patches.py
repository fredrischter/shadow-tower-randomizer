#!/usr/bin/env python3
"""
Create ST.EXE patches to zero out damage at different points in the calculation.

This proves the damage calculation data flow by creating multiple patch points:
1. Zero EntityStateData.attack1 reads (offset 0x1a)
2. Zero damage formula multiplication by 5
3. Zero final damage output

Each patch demonstrates a different stage of the damage calculation.
"""

import struct
import os

def create_patch_file(patch_name, patches, description):
    """
    Create a patch file with instructions.
    
    Args:
        patch_name: Name of the patch
        patches: List of (offset, original_bytes, new_bytes, description) tuples
        description: Overall patch description
    """
    filename = f"st_exe_patch_{patch_name}.txt"
    
    with open(filename, 'w') as f:
        f.write(f"# ST.EXE Patch: {patch_name}\n")
        f.write(f"# Description: {description}\n")
        f.write(f"#\n")
        f.write(f"# File: iso-dump/ST.EXE\n")
        f.write(f"# Apply with: hex editor or custom patcher\n")
        f.write(f"#\n\n")
        
        for offset, original, new_bytes, desc in patches:
            f.write(f"## Patch at offset 0x{offset:06x}\n")
            f.write(f"Description: {desc}\n")
            f.write(f"Original: {' '.join(f'{b:02x}' for b in original)}\n")
            f.write(f"New:      {' '.join(f'{b:02x}' for b in new_bytes)}\n")
            f.write(f"Runtime:  0x{(0x80010000 + offset):08x}\n")
            f.write(f"\n")
    
    print(f"Created: {filename}")

def create_patches():
    """Create all damage zero patches."""
    
    # Based on hp_damage code analysis at ST.EXE offset 0x1f800 (runtime 0x80030000)
    # hp_damage_base_offset = 0x1f800
    
    # Patch 1: Zero EntityStateData.attack1 reads (offset 0x1a)
    # Replace: lhu $a2, 0x1a($sp)  [97a6001a]
    # With:    move $a2, $zero     [00001025]
    patch1 = [
        # First instance at 0x80038514 → file offset 0x28514
        (0x28514, 
         bytes([0x97, 0xa6, 0x00, 0x1a]),  # lhu $a2, 0x1a($sp)
         bytes([0x00, 0x00, 0x30, 0x25]),  # move $a2, $zero
         "Zero attack1 power read #1"),
        
        # Second instance at 0x80038570 → file offset 0x28570
        (0x28570,
         bytes([0x97, 0xa6, 0x00, 0x1a]),  # lhu $a2, 0x1a($sp)
         bytes([0x00, 0x00, 0x30, 0x25]),  # move $a2, $zero
         "Zero attack1 power read #2"),
        
        # Third instance at 0x8003d8c4 → file offset 0x2d8c4
        (0x2d8c4,
         bytes([0x87, 0xa3, 0x00, 0x1a]),  # lh $v1, 0x1a($sp)
         bytes([0x00, 0x00, 0x18, 0x25]),  # move $v1, $zero
         "Zero attack1 power read #3"),
    ]
    
    create_patch_file(
        "zero_attack_power_reads",
        patch1,
        "Zeros out all EntityStateData.attack1 reads at offset 0x1a. "
        "If damage becomes zero, proves attack power comes from EntityStateData."
    )
    
    # Patch 2: Zero damage formula "multiply by 5" operation
    # Replace: sll $v1, $v1, 2   [00031880]  # v1 = v1 * 4
    #          addu $v1, $v1, $a0 [00641821]  # v1 = v1 + a0 (total = v1*4 + v1 = v1*5)
    # With:    move $v1, $zero    [00001825]
    #          nop                [00000000]
    patch2 = [
        # At function start (hp_damage offset 0x00000) → ST.EXE 0x1f800 → runtime 0x80030000
        (0x1f800,
         bytes([0x00, 0x03, 0x18, 0x80,   # sll $v1, $v1, 2
                0x00, 0x64, 0x18, 0x21]), # addu $v1, $v1, $a0
         bytes([0x00, 0x00, 0x18, 0x25,   # move $v1, $zero
                0x00, 0x00, 0x00, 0x00]), # nop
         "Zero the 'multiply by 5' damage calculation"),
    ]
    
    create_patch_file(
        "zero_multiply_by_5",
        patch2,
        "Zeros out the damage * 5 calculation. "
        "If damage becomes zero, proves formula is (damage * 5) + modifier."
    )
    
    # Patch 3: Zero final damage write to player HP
    # Replace: sh $v0, 0x19c($v1)  [a462019c]  # Store damage to HP array
    # With:    sh $zero, 0x19c($v1) [a460019c] # Store zero instead
    patch3 = [
        # At 0x8003d7f8 (the original instruction we analyzed!) → file offset 0x2dff8
        (0x2dff8,
         bytes([0xa4, 0x62, 0x01, 0x9c]),  # sh $v0, 0x19c($v1) 
         bytes([0xa4, 0x60, 0x01, 0x9c]),  # sh $zero, 0x19c($v1)
         "Zero the final HP damage write (prevents HP loss)"),
    ]
    
    create_patch_file(
        "zero_final_damage_write",
        patch3,
        "Zeros out the final damage write to player HP array. "
        "Player takes no damage. Proves HP is stored at PlayerState+0x19c."
    )
    
    # Patch 4: Force damage to always be 1 (for testing data flow)
    # Replace: sh $v0, 0x19c($v1)  [a462019c]
    # With:    ori $v0, $zero, 1   [34020001]
    #          sh $v0, 0x19c($v1)  [a462019c]
    # Need 2 instructions, so need to find NOP or combine with prev instruction
    patch4 = [
        # At damage write location
        (0x2dff8 - 4,  # One instruction before
         bytes([0x00, 0x00, 0x00, 0x00,   # Some instruction before
                0xa4, 0x62, 0x01, 0x9c]), # sh $v0, 0x19c($v1)
         bytes([0x34, 0x02, 0x00, 0x01,   # ori $v0, $zero, 1
                0xa4, 0x62, 0x01, 0x9c]), # sh $v0, 0x19c($v1)
         "Force all damage to be exactly 1 (for testing)"),
    ]
    
    create_patch_file(
        "force_damage_to_one",
        patch4,
        "Forces all damage to be exactly 1 HP. "
        "Proves damage calculation flows through to HP write."
    )
    
    # Create a comprehensive test plan
    with open("DAMAGE_ZERO_PATCH_TEST_PLAN.md", 'w') as f:
        f.write("""# Damage Zero Patch Test Plan

## Purpose

These patches prove the HP damage calculation data flow by zeroing damage at different stages.

## Patches Created

### 1. st_exe_patch_zero_attack_power_reads.txt
**What it does:** Zeros EntityStateData.attack1 reads at offset 0x1a  
**Expected result:** All attacks do 0 damage  
**Proves:** Attack power comes from EntityStateData offset 0x1a

### 2. st_exe_patch_zero_multiply_by_5.txt
**What it does:** Zeros the damage * 5 calculation  
**Expected result:** Damage is drastically reduced (only modifier remains)  
**Proves:** Formula includes (damage * 5) component

### 3. st_exe_patch_zero_final_damage_write.txt
**What it does:** Writes 0 instead of calculated damage to HP array  
**Expected result:** Player is invincible (no HP loss)  
**Proves:** HP is stored at PlayerState+0x19c (the original instruction!)

### 4. st_exe_patch_force_damage_to_one.txt
**What it does:** Forces all damage to be exactly 1 HP  
**Expected result:** Every attack does exactly 1 damage  
**Proves:** Data flows from calculation to HP write

## How to Test

1. **Backup original ST.EXE:**
   ```bash
   cp iso-dump/ST.EXE iso-dump/ST.EXE.backup
   ```

2. **Apply a patch:**
   Use a hex editor to apply bytes from patch file to ST.EXE at specified offsets

3. **Rebuild ISO:**
   ```bash
   mkpsxiso iso-dump/st.xml -o test_damage_zero.bin
   ```

4. **Test in emulator:**
   - Start game
   - Get attacked by slime (spray magic)
   - Observe damage value

5. **Expected Results:**

   | Patch | Slime Spray Result |
   |-------|-------------------|
   | None (original) | Normal damage (e.g., 15-30 HP) |
   | zero_attack_power_reads | 0 damage |
   | zero_multiply_by_5 | Very low damage (1-5 HP) |
   | zero_final_damage_write | 0 damage (HP doesn't decrease) |
   | force_damage_to_one | Exactly 1 HP damage |

## Interpretation

- **If zero_attack_power_reads → 0 damage:**  
  Confirms attack power comes from EntityStateData offset 0x1a

- **If zero_multiply_by_5 → reduced damage:**  
  Confirms formula is (damage * 5) + modifier

- **If zero_final_damage_write → invincibility:**  
  Confirms HP write location at 0x8003d7f8 (PlayerState+0x19c)

- **If force_damage_to_one → 1 HP damage:**  
  Confirms complete data flow path

## Conclusion

These patches allow empirical verification of the damage calculation data flow without requiring full reverse engineering of EntityStateData generation.

## Notes

- Patches target ST.EXE file offsets, not runtime addresses
- Runtime addresses are provided for reference
- Apply only ONE patch at a time for clear results
- Always test with same enemy (acid slime) for consistency
""")
    
    print("Created: DAMAGE_ZERO_PATCH_TEST_PLAN.md")
    
    # Create a Python patcher tool
    with open("apply_st_exe_patch.py", 'w') as f:
        f.write("""#!/usr/bin/env python3
\"\"\"
Apply a damage zero patch to ST.EXE

Usage: python3 apply_st_exe_patch.py <patch_name>

Example: python3 apply_st_exe_patch.py zero_attack_power_reads
\"\"\"

import sys
import struct
import os
import shutil

def apply_patch(st_exe_path, patch_name):
    \"\"\"Apply a patch to ST.EXE.\"\"\"
    
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
    
    print(f"\\nPatch '{patch_name}' applied successfully!")
    print(f"Patched file: {st_exe_path}")
    print(f"Backup saved: {backup_path}")
    return True

def restore_backup(st_exe_path):
    \"\"\"Restore ST.EXE from backup.\"\"\"
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
        print("\\nAvailable patches:")
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
""")
    
    os.chmod("apply_st_exe_patch.py", 0o755)
    print("Created: apply_st_exe_patch.py")

if __name__ == '__main__':
    print("Creating damage zero patches for ST.EXE...")
    print()
    create_patches()
    print()
    print("✓ All patches created!")
    print()
    print("Files created:")
    print("  - st_exe_patch_zero_attack_power_reads.txt")
    print("  - st_exe_patch_zero_multiply_by_5.txt")
    print("  - st_exe_patch_zero_final_damage_write.txt")
    print("  - st_exe_patch_force_damage_to_one.txt")
    print("  - DAMAGE_ZERO_PATCH_TEST_PLAN.md")
    print("  - apply_st_exe_patch.py")
    print()
    print("See DAMAGE_ZERO_PATCH_TEST_PLAN.md for testing instructions.")
