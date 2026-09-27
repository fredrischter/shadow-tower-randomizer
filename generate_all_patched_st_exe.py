#!/usr/bin/env python3
"""
Generate All Patched ST.EXE Versions
Creates 14 different patched versions of ST.EXE for empirical testing
"""

import os
import shutil

# Define all patches
PATCHES = {
    "zero_attack_power_reads": {
        "desc": "Zero EntityStateData.attack1 reads (offset 0x1a)",
        "expected": "All attacks do 0 damage",
        "patches": [
            (0x1f944, "00 00"),  # lhu $a0, 0x1a($s0) → li $a0, 0
            (0x20124, "00 00"),  # lhu $v1, 0x1a($s1) → li $v1, 0
            (0x208ec, "00 00"),  # lhu $a1, 0x1a($s2) → li $a1, 0
        ]
    },
    "zero_multiply_by_5": {
        "desc": "Zero damage * 5 calculation",
        "expected": "Drastically reduced damage (only modifier remains)",
        "patches": [
            (0x1f960, "00 00 00 00"),  # mul/add → nop
            (0x1f964, "00 00 00 00"),  # mul/add → nop
        ]
    },
    "zero_final_damage_write": {
        "desc": "Zero HP write at PlayerState+0x19c (invincibility)",
        "expected": "Player invincible - HP never decreases",
        "patches": [
            (0x2dff8, "00 00"),  # sh $zero, 0x19c($v0) → nop (keep upper bits)
        ]
    },
    "force_damage_to_one": {
        "desc": "Force all damage to 1 HP",
        "expected": "Every attack does exactly 1 damage",
        "patches": [
            (0x2dff0, "01 00 04 24"),  # li $a0, 1 before write
        ]
    },
    "double_all_damage": {
        "desc": "Double all damage values",
        "expected": "All attacks do 2x damage",
        "patches": [
            (0x1f968, "00 00 04 00"),  # sll $v0, $v0, 1 (shift left = multiply by 2)
        ]
    },
    "half_all_damage": {
        "desc": "Half all damage values",
        "expected": "All attacks do 0.5x damage",
        "patches": [
            (0x1f968, "02 00 04 00"),  # srl $v0, $v0, 1 (shift right = divide by 2)
        ]
    },
    "multiply_by_10_not_5": {
        "desc": "Change damage formula from *5 to *10",
        "expected": "All attacks do ~2x damage",
        "patches": [
            (0x1f960, "0a 00 05 24"),  # li $a1, 10 instead of li $a1, 5
        ]
    },
    "multiply_by_1_not_5": {
        "desc": "Change damage formula from *5 to *1 (remove multiplier)",
        "expected": "All attacks do ~20% damage",
        "patches": [
            (0x1f960, "01 00 05 24"),  # li $a1, 1 instead of li $a1, 5
        ]
    },
    "force_damage_to_100": {
        "desc": "Force all damage to 100 HP",
        "expected": "Every attack does exactly 100 damage",
        "patches": [
            (0x2dff0, "64 00 04 24"),  # li $a0, 100 before write
        ]
    },
    "force_damage_to_255": {
        "desc": "Force all damage to 255 HP (max uint8)",
        "expected": "Every attack does exactly 255 damage (likely instant death)",
        "patches": [
            (0x2dff0, "ff 00 04 24"),  # li $a0, 255 before write
        ]
    },
    "ignore_armor": {
        "desc": "Skip armor/defense calculation",
        "expected": "All attacks ignore player defense stats",
        "patches": [
            (0x20400, "00 00 00 00"),  # nop out defense reduction
            (0x20404, "00 00 00 00"),  # nop out defense reduction
        ]
    },
    "max_armor": {
        "desc": "Force 99% damage reduction (super armor)",
        "expected": "All attacks do ~1% damage",
        "patches": [
            (0x20400, "63 00 05 24"),  # li $a1, 99 (99% reduction)
        ]
    },
    "always_critical": {
        "desc": "Force all attacks to be critical hits",
        "expected": "All attacks do critical hit damage",
        "patches": [
            (0x20800, "01 00 02 24"),  # li $v0, 1 (always crit)
        ]
    },
    "never_critical": {
        "desc": "Disable all critical hits",
        "expected": "No attacks do critical hit damage",
        "patches": [
            (0x20800, "00 00 02 24"),  # li $v0, 0 (never crit)
        ]
    },
}

def apply_patch(input_file, output_file, patches):
    """Apply patches to create modified ST.EXE"""
    shutil.copy(input_file, output_file)
    
    with open(output_file, 'r+b') as f:
        for offset, hex_bytes in patches:
            f.seek(offset)
            byte_data = bytes.fromhex(hex_bytes.replace(" ", ""))
            f.write(byte_data)
    
    print(f"✓ Created: {output_file}")

def main():
    source_file = "iso-dump/ST.EXE"
    output_dir = "patched_st_exe"
    
    if not os.path.exists(source_file):
        print(f"ERROR: Source file not found: {source_file}")
        print("Please ensure iso-dump/ST.EXE exists")
        return
    
    # Create output directory
    os.makedirs(output_dir, exist_ok=True)
    
    print(f"Generating {len(PATCHES)} patched ST.EXE versions...\n")
    
    # Copy original
    original_output = os.path.join(output_dir, "ST.EXE.original")
    shutil.copy(source_file, original_output)
    print(f"✓ Created: {original_output} (original backup)")
    
    # Create patched versions
    for patch_name, patch_info in PATCHES.items():
        output_file = os.path.join(output_dir, f"ST.EXE.{patch_name}")
        apply_patch(source_file, output_file, patch_info["patches"])
    
    # Create README
    readme_path = os.path.join(output_dir, "README.md")
    with open(readme_path, 'w') as f:
        f.write("# Patched ST.EXE Versions for Empirical Testing\n\n")
        f.write(f"This directory contains {len(PATCHES)} modified versions of ST.EXE.\n\n")
        f.write("## Files\n\n")
        f.write("- `ST.EXE.original` - Original unmodified ST.EXE\n")
        
        for patch_name, patch_info in PATCHES.items():
            f.write(f"- `ST.EXE.{patch_name}`\n")
            f.write(f"  - **Description:** {patch_info['desc']}\n")
            f.write(f"  - **Expected Result:** {patch_info['expected']}\n")
        
        f.write("\n## Usage\n\n")
        f.write("1. Copy desired ST.EXE version to `iso-dump/ST.EXE`\n")
        f.write("2. Rebuild ISO: `mkpsxiso iso-dump/st.xml -o test.bin`\n")
        f.write("3. Test in PSX emulator\n")
        f.write("4. Compare results with expected behavior\n\n")
        f.write("## Testing Methodology\n\n")
        f.write("Each patch tests a different aspect of the damage calculation:\n\n")
        f.write("1. **Data Flow Patches** - Verify where damage values come from\n")
        f.write("2. **Formula Patches** - Verify the damage calculation formula\n")
        f.write("3. **Multiplier Patches** - Verify the multiplication constants\n")
        f.write("4. **Defense Patches** - Verify armor/defense mechanics\n")
        f.write("5. **Critical Patches** - Verify critical hit system\n\n")
    
    print(f"\n✓ Created: {readme_path}")
    print(f"\n{'='*60}")
    print(f"Successfully created {len(PATCHES)} patched ST.EXE versions!")
    print(f"Output directory: {output_dir}/")
    print(f"{'='*60}\n")
    
    print("Patch Summary:")
    print("-" * 60)
    for patch_name, patch_info in PATCHES.items():
        print(f"\n{patch_name}:")
        print(f"  {patch_info['desc']}")
        print(f"  Expected: {patch_info['expected']}")
    
    print("\n" + "="*60)
    print("To test a patch:")
    print(f"  cp {output_dir}/ST.EXE.<patch_name> iso-dump/ST.EXE")
    print("  mkpsxiso iso-dump/st.xml -o test_<patch_name>.bin")
    print("  # Load test_<patch_name>.bin in PSX emulator")
    print("="*60)

if __name__ == "__main__":
    main()
