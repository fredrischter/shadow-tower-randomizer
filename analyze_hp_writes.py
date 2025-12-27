#!/usr/bin/env python3
"""
Analyzes hp_damage code to find all HP array write locations.
Categorizes them by purpose: initialization, damage calculation, healing, etc.
"""

import struct
import sys

def analyze_hp_writes(filename='hp_damage_extracted.mips'):
    """Find all HP array write instructions in the damage calculation code."""
    
    try:
        with open(filename, 'rb') as f:
            data = f.read()
    except FileNotFoundError:
        print(f"Error: {filename} not found")
        return
    
    print(f"Analyzing {filename} ({len(data)} bytes)")
    print("="*80)
    
    # Find 'sh' instructions that write to HP array offsets (0x190-0x1c2)
    hp_writes = []
    for i in range(0, len(data)-4, 4):
        instr = struct.unpack('>I', data[i:i+4])[0]
        opcode = (instr >> 26) & 0x3F
        
        if opcode == 0x29:  # sh (store halfword)
            rt = (instr >> 16) & 0x1F
            rs = (instr >> 21) & 0x1F
            offset = instr & 0xFFFF
            if offset >= 0x8000:  # Sign extend
                offset = offset - 0x10000
            
            # Check if offset is in HP array range (0x190-0x1c2)
            if 0x190 <= offset <= 0x1c2:
                hp_index = (offset - 0x190) // 2
                hp_writes.append({
                    'file_offset': i,
                    'runtime_offset': i + 0x80030000,  # Base runtime address
                    'hp_offset': offset,
                    'hp_index': hp_index,
                    'instruction': instr,
                    'rs': rs,
                    'rt': rt
                })
    
    print(f"\nFound {len(hp_writes)} HP array write instructions\n")
    
    # Categorize by file offset ranges
    init_writes = [w for w in hp_writes if 0x0dfac <= w['file_offset'] <= 0x0dff8]
    damage_writes = [w for w in hp_writes if 0x0d740 <= w['file_offset'] <= 0x0d8ec]
    other_writes = [w for w in hp_writes if w not in init_writes and w not in damage_writes]
    
    print(f"Categorization:")
    print(f"  Initialization writes (0x0dfac-0x0dff8): {len(init_writes)}")
    print(f"  Damage calculation writes (0x0d740-0x0d8ec): {len(damage_writes)}")
    print(f"  Other writes: {len(other_writes)}")
    print()
    
    # Show damage calculation writes (these are the ones we want to patch)
    print("DAMAGE CALCULATION HP WRITES (Target for patches):")
    print("-"*80)
    for w in damage_writes[:15]:
        print(f"File 0x{w['file_offset']:05x} | Runtime 0x{w['runtime_offset']:08x} | "
              f"HP[{w['hp_index']:2d}] at +0x{w['hp_offset']:03x} | "
              f"Instr: 0x{w['instruction']:08x}")
    
    if len(damage_writes) > 15:
        print(f"... and {len(damage_writes)-15} more damage calculation writes")
    
    print("\n" + "="*80)
    return hp_writes, init_writes, damage_writes, other_writes

if __name__ == '__main__':
    analyze_hp_writes()
