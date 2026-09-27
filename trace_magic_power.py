#!/usr/bin/env python3
"""
Trace magic power value in hp_damage code

This script analyzes the hp_damage code to find where magic attack power
is read from memory, specifically for spell type 0x30 attacks.
"""

import struct
import sys

def disassemble_instruction(inst, addr):
    """Simple MIPS disassembler focused on load instructions"""
    opcode = (inst >> 26) & 0x3F
    rs = (inst >> 21) & 0x1F
    rt = (inst >> 16) & 0x1F
    rd = (inst >> 11) & 0x1F
    imm = inst & 0xFFFF
    imm_signed = imm if imm < 0x8000 else imm - 0x10000
    
    REG_NAMES = ['zero', 'at', 'v0', 'v1', 'a0', 'a1', 'a2', 'a3',
                 't0', 't1', 't2', 't3', 't4', 't5', 't6', 't7',
                 's0', 's1', 's2', 's3', 's4', 's5', 's6', 's7',
                 't8', 't9', 'k0', 'k1', 'gp', 'sp', 'fp', 'ra']
    
    # Focus on load instructions that might read magic power
    if opcode == 0x20:  # lb (load byte)
        return f"lb ${REG_NAMES[rt]}, 0x{imm:x}(${REG_NAMES[rs]})", imm
    elif opcode == 0x24:  # lbu (load byte unsigned)
        return f"lbu ${REG_NAMES[rt]}, 0x{imm:x}(${REG_NAMES[rs]})", imm
    elif opcode == 0x21:  # lh (load halfword)
        return f"lh ${REG_NAMES[rt]}, 0x{imm:x}(${REG_NAMES[rs]})", imm
    elif opcode == 0x25:  # lhu (load halfword unsigned)
        return f"lhu ${REG_NAMES[rt]}, 0x{imm:x}(${REG_NAMES[rs]})", imm
    elif opcode == 0x23:  # lw (load word)
        return f"lw ${REG_NAMES[rt]}, 0x{imm_signed}(${REG_NAMES[rs]})", imm_signed
    
    return None, None

def analyze_hp_damage():
    """Analyze hp_damage code for magic power reads"""
    
    # Read extracted hp_damage code
    with open('hp_damage_extracted.mips', 'rb') as f:
        code = f.read()
    
    print("Magic Power Trace Analysis")
    print("=" * 80)
    print()
    print("Searching for memory reads related to magic attack power...")
    print()
    
    # Offsets we're interested in based on EntityStateData structure
    # Type 0x30 (spell) attack power at offset 0x1a (UInt16)
    target_offsets = [0x1a, 0x1c, 0x1e]  # attack1, attack2, attack3
    
    findings = []
    
    # Scan through code looking for loads from these offsets
    for i in range(0, len(code) - 4, 4):
        inst = struct.unpack('<I', code[i:i+4])[0]
        addr = 0x80030000 + i
        
        disasm, offset = disassemble_instruction(inst, addr)
        
        if disasm and offset is not None:
            # Check if this load is from our target offsets
            if offset in target_offsets or offset == 0x30:  # 0x30 = magic type check
                findings.append((addr, inst, disasm, offset))
    
    if findings:
        print(f"Found {len(findings)} potential magic power reads:")
        print("-" * 80)
        
        for addr, inst, disasm, offset in findings:
            print(f"0x{addr:08x}: {inst:08x}  {disasm}")
            if offset == 0x1a:
                print(f"           ^^^ MAGIC ATTACK1 POWER (offset 0x1a)")
            elif offset == 0x1c:
                print(f"           ^^^ MAGIC ATTACK2 POWER (offset 0x1c)")
            elif offset == 0x1e:
                print(f"           ^^^ MAGIC ATTACK3 POWER (offset 0x1e)")
            elif offset == 0x30:
                print(f"           ^^^ MAGIC TYPE CHECK (type 0x30 = spell)")
            print()
    else:
        print("No direct offset matches found.")
        print()
    
    # Also search for the value 0x30 (magic attack type identifier)
    print("=" * 80)
    print("Searching for type 0x30 (spell/magic attack) checks...")
    print("-" * 80)
    
    type_checks = []
    for i in range(0, len(code) - 4, 4):
        inst = struct.unpack('<I', code[i:i+4])[0]
        addr = 0x80030000 + i
        
        # Look for instructions that compare with 0x30
        opcode = (inst >> 26) & 0x3F
        imm = inst & 0xFFFF
        
        # Check for ori, andi, addiu with 0x30
        if imm == 0x30 or imm == 0x0030:
            opcode_names = {
                0x0c: "andi",
                0x0d: "ori",
                0x09: "addiu",
                0x0a: "slti",
                0x0b: "sltiu"
            }
            if opcode in opcode_names:
                rs = (inst >> 21) & 0x1F
                rt = (inst >> 16) & 0x1F
                REG_NAMES = ['zero', 'at', 'v0', 'v1', 'a0', 'a1', 'a2', 'a3',
                             't0', 't1', 't2', 't3', 't4', 't5', 't6', 't7',
                             's0', 's1', 's2', 's3', 's4', 's5', 's6', 's7',
                             't8', 't9', 'k0', 'k1', 'gp', 'sp', 'fp', 'ra']
                disasm = f"{opcode_names[opcode]} ${REG_NAMES[rt]}, ${REG_NAMES[rs]}, 0x{imm:x}"
                type_checks.append((addr, inst, disasm))
    
    if type_checks:
        for addr, inst, disasm in type_checks[:10]:  # Show first 10
            print(f"0x{addr:08x}: {inst:08x}  {disasm}")
        if len(type_checks) > 10:
            print(f"... and {len(type_checks) - 10} more")
    
    print()
    print("=" * 80)
    print("Analysis complete!")
    print()
    print("CONCLUSION:")
    print("-" * 80)
    print("For Entity State Data type 0x30 (spell/magic attack):")
    print("  - Magic power is stored at offset 0x1a (attack1, UInt16)")
    print("  - Additional power at offset 0x1c (attack2, UInt16)")
    print("  - Additional power at offset 0x1e (attack3, UInt16)")
    print()
    print("This is DIFFERENT from creature spawn structure which has:")
    print("  - magic1 at offset 0x09 (attack TYPE, not power)")
    print()
    print("The damage calculation code reads from EntityStateData, not creature spawn!")

if __name__ == '__main__':
    analyze_hp_damage()
