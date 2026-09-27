#!/usr/bin/env python3
"""
Parse spell damage data from FDAT.T part 481, subpart 3
File: FDAT.T_PARTS/481 138b800-139c000.T_SIZED_MIX_PARTS/3 2b64-3b54.sizedMixPart
Size: 4080 bytes (0xFF0)

This data was found at runtime address 0x8018D73A during debugging.
"""

import struct
import sys

def parse_spell_damage_data(file_path):
    """Parse the spell damage binary data and create a readable table."""
    
    with open(file_path, 'rb') as f:
        data = f.read()
    
    print(f"Total file size: {len(data)} bytes (0x{len(data):X})")
    print()
    
    # Each spell damage entry appears to be 24 bytes (0x18) based on the pattern
    # The data shows groups of 12 uint16 values (24 bytes total)
    entry_size = 24
    num_entries = len(data) // entry_size
    
    print(f"Spell Damage Data Table ({num_entries} entries)")
    print("=" * 150)
    print(f"{'Index':<6} {'Offset':<8} {'Val0':<6} {'Val1':<6} {'Val2':<6} {'Val3':<6} {'Val4':<6} {'Val5':<6} {'Val6':<6} {'Val7':<6} {'Val8':<6} {'Val9':<6} {'Val10':<6} {'Val11':<6}")
    print("=" * 150)
    
    for i in range(num_entries):
        offset = i * entry_size
        
        # Read 12 uint16 values (little-endian)
        values = struct.unpack('<12H', data[offset:offset + entry_size])
        
        # Format output
        val_str = ' '.join(f'{v:<6}' for v in values)
        print(f'{i:<6} 0x{offset:04X}  {val_str}')
    
    print("=" * 150)
    print()
    
    # Also output in hex format for verification
    print("\nHex View (first 192 bytes):")
    print("=" * 80)
    for i in range(0, min(192, len(data)), 24):
        hex_str = ' '.join(f'{b:02x}' for b in data[i:i+24])
        print(f'0x{i:04X}: {hex_str}')
    print("=" * 80)

def create_txt_table(file_path, output_path):
    """Create a formatted text table file."""
    
    with open(file_path, 'rb') as f:
        data = f.read()
    
    entry_size = 24
    num_entries = len(data) // entry_size
    
    with open(output_path, 'w') as out:
        out.write("Spell Damage Data Table\n")
        out.write(f"Source: FDAT.T Part 481, Subpart 3 (2b64-3b54.sizedMixPart)\n")
        out.write(f"Runtime Address: 0x8018D73A (as found in debugging)\n")
        out.write(f"Total Entries: {num_entries}\n")
        out.write(f"Entry Size: {entry_size} bytes (12 x uint16)\n")
        out.write("\n")
        out.write("=" * 150 + "\n")
        out.write(f"{'Index':<6} {'Offset':<8} {'Val0':<6} {'Val1':<6} {'Val2':<6} {'Val3':<6} {'Val4':<6} {'Val5':<6} {'Val6':<6} {'Val7':<6} {'Val8':<6} {'Val9':<6} {'Val10':<6} {'Val11':<6}\n")
        out.write("=" * 150 + "\n")
        
        for i in range(num_entries):
            offset = i * entry_size
            values = struct.unpack('<12H', data[offset:offset + entry_size])
            val_str = ' '.join(f'{v:<6}' for v in values)
            out.write(f'{i:<6} 0x{offset:04X}  {val_str}\n')
        
        out.write("=" * 150 + "\n")
        out.write("\n")
        out.write("Notes:\n")
        out.write("- Each entry contains 12 uint16 values (little-endian)\n")
        out.write("- These values are spell damage components used in func_0x8003e0a0()\n")
        out.write("- Loaded at addresses 0x8003e488, 0x8003e4f4, 0x8003e4f8 (s1, s3, s4 registers)\n")
        out.write("- Values are combined in a 6-iteration loop with distance modifiers\n")
        out.write("- Final damage = (accumulated_damage * spell_power) >> 12\n")

if __name__ == '__main__':
    input_file = 'FDAT.T_PARTS/481 138b800-139c000.T_SIZED_MIX_PARTS/3 2b64-3b54.sizedMixPart'
    output_file = 'spell_damage_data.txt'
    
    print("Parsing spell damage data...")
    parse_spell_damage_data(input_file)
    
    print(f"\nCreating table file: {output_file}")
    create_txt_table(input_file, output_file)
    print(f"Done! Table saved to {output_file}")
