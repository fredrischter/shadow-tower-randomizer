#!/usr/bin/env python3
"""
Shadow Tower ST.EXE Damage Calculation Analyzer

This script analyzes the ST.EXE PlayStation executable to locate and
disassemble damage calculation code paths.

Usage:
    python3 analyze_st_exe.py [options]

Options:
    --full                Show full disassembly output
    --region ADDR         Disassemble specific region (hex address)
    --search OFFSET       Search for loads from specific offset
    --search-stores ADDR  Search for stores to specific memory address (e.g., HP at 0x198F28)
    --stats               Show statistics only
"""

import struct
import sys
import argparse

# Known offsets from data_model.js
CREATURE_OFFSETS = {
    0x07: 'attack1',
    0x08: 'attack2',
    0x09: 'magic1',
}

ENTITYSTATE_OFFSETS = {
    0x1a: 'attack1',
    0x1c: 'attack2',
    0x1e: 'attack3',
}

# MIPS register names
MIPS_REGS = [
    'zero', 'at', 'v0', 'v1', 'a0', 'a1', 'a2', 'a3',
    't0', 't1', 't2', 't3', 't4', 't5', 't6', 't7',
    's0', 's1', 's2', 's3', 's4', 's5', 's6', 's7',
    't8', 't9', 'k0', 'k1', 'gp', 'sp', 'fp', 'ra'
]

def read_mips_instruction(data, offset):
    """Read a MIPS instruction (4 bytes, little endian)"""
    if offset + 4 > len(data):
        return None
    return struct.unpack('<I', data[offset:offset+4])[0]

def decode_mips_basic(instr):
    """Basic MIPS instruction decode"""
    opcode = (instr >> 26) & 0x3F
    rs = (instr >> 21) & 0x1F
    rt = (instr >> 16) & 0x1F
    rd = (instr >> 11) & 0x1F
    shamt = (instr >> 6) & 0x1F
    funct = instr & 0x3F
    imm = instr & 0xFFFF
    
    return {
        'opcode': opcode,
        'rs': rs,
        'rt': rt,
        'rd': rd,
        'shamt': shamt,
        'funct': funct,
        'imm': imm
    }

def disasm_mips(instr):
    """Disassemble MIPS instruction to human-readable format"""
    opcode = (instr >> 26) & 0x3F
    rs = (instr >> 21) & 0x1F
    rt = (instr >> 16) & 0x1F
    rd = (instr >> 11) & 0x1F
    shamt = (instr >> 6) & 0x1F
    funct = instr & 0x3F
    imm = instr & 0xFFFF
    simm = imm if imm < 0x8000 else imm - 0x10000
    
    # R-type instructions (opcode = 0)
    if opcode == 0:
        if funct == 0x00: return f"sll    ${MIPS_REGS[rd]}, ${MIPS_REGS[rt]}, {shamt}"
        if funct == 0x02: return f"srl    ${MIPS_REGS[rd]}, ${MIPS_REGS[rt]}, {shamt}"
        if funct == 0x03: return f"sra    ${MIPS_REGS[rd]}, ${MIPS_REGS[rt]}, {shamt}"
        if funct == 0x08: return f"jr     ${MIPS_REGS[rs]}"
        if funct == 0x09: return f"jalr   ${MIPS_REGS[rd]}, ${MIPS_REGS[rs]}"
        if funct == 0x10: return f"mfhi   ${MIPS_REGS[rd]}"
        if funct == 0x12: return f"mflo   ${MIPS_REGS[rd]}"
        if funct == 0x18: return f"mult   ${MIPS_REGS[rs]}, ${MIPS_REGS[rt]}"
        if funct == 0x19: return f"multu  ${MIPS_REGS[rs]}, ${MIPS_REGS[rt]}"
        if funct == 0x1a: return f"div    ${MIPS_REGS[rs]}, ${MIPS_REGS[rt]}"
        if funct == 0x1b: return f"divu   ${MIPS_REGS[rs]}, ${MIPS_REGS[rt]}"
        if funct == 0x20: return f"add    ${MIPS_REGS[rd]}, ${MIPS_REGS[rs]}, ${MIPS_REGS[rt]}"
        if funct == 0x21: return f"addu   ${MIPS_REGS[rd]}, ${MIPS_REGS[rs]}, ${MIPS_REGS[rt]}"
        if funct == 0x22: return f"sub    ${MIPS_REGS[rd]}, ${MIPS_REGS[rs]}, ${MIPS_REGS[rt]}"
        if funct == 0x23: return f"subu   ${MIPS_REGS[rd]}, ${MIPS_REGS[rs]}, ${MIPS_REGS[rt]}"
        if funct == 0x24: return f"and    ${MIPS_REGS[rd]}, ${MIPS_REGS[rs]}, ${MIPS_REGS[rt]}"
        if funct == 0x25: return f"or     ${MIPS_REGS[rd]}, ${MIPS_REGS[rs]}, ${MIPS_REGS[rt]}"
        if funct == 0x26: return f"xor    ${MIPS_REGS[rd]}, ${MIPS_REGS[rs]}, ${MIPS_REGS[rt]}"
        if funct == 0x27: return f"nor    ${MIPS_REGS[rd]}, ${MIPS_REGS[rs]}, ${MIPS_REGS[rt]}"
        if funct == 0x2a: return f"slt    ${MIPS_REGS[rd]}, ${MIPS_REGS[rs]}, ${MIPS_REGS[rt]}"
        if funct == 0x2b: return f"sltu   ${MIPS_REGS[rd]}, ${MIPS_REGS[rs]}, ${MIPS_REGS[rt]}"
        return f"SPECIAL_{funct:02x}"
    
    # I-type and J-type instructions
    if opcode == 0x01: 
        bcond = (rt >> 0) & 0x1F
        if bcond == 0: return f"bltz   ${MIPS_REGS[rs]}, {simm*4:+d}"
        if bcond == 1: return f"bgez   ${MIPS_REGS[rs]}, {simm*4:+d}"
        return f"bcond  ${MIPS_REGS[rs]}, {simm}"
    if opcode == 0x02: return f"j      0x{((instr & 0x3FFFFFF) << 2):08x}"
    if opcode == 0x03: return f"jal    0x{((instr & 0x3FFFFFF) << 2):08x}"
    if opcode == 0x04: return f"beq    ${MIPS_REGS[rs]}, ${MIPS_REGS[rt]}, {simm*4:+d}"
    if opcode == 0x05: return f"bne    ${MIPS_REGS[rs]}, ${MIPS_REGS[rt]}, {simm*4:+d}"
    if opcode == 0x06: return f"blez   ${MIPS_REGS[rs]}, {simm*4:+d}"
    if opcode == 0x07: return f"bgtz   ${MIPS_REGS[rs]}, {simm*4:+d}"
    if opcode == 0x08: return f"addi   ${MIPS_REGS[rt]}, ${MIPS_REGS[rs]}, {simm}"
    if opcode == 0x09: return f"addiu  ${MIPS_REGS[rt]}, ${MIPS_REGS[rs]}, {simm}"
    if opcode == 0x0a: return f"slti   ${MIPS_REGS[rt]}, ${MIPS_REGS[rs]}, {simm}"
    if opcode == 0x0b: return f"sltiu  ${MIPS_REGS[rt]}, ${MIPS_REGS[rs]}, {simm}"
    if opcode == 0x0c: return f"andi   ${MIPS_REGS[rt]}, ${MIPS_REGS[rs]}, 0x{imm:04x}"
    if opcode == 0x0d: return f"ori    ${MIPS_REGS[rt]}, ${MIPS_REGS[rs]}, 0x{imm:04x}"
    if opcode == 0x0e: return f"xori   ${MIPS_REGS[rt]}, ${MIPS_REGS[rs]}, 0x{imm:04x}"
    if opcode == 0x0f: return f"lui    ${MIPS_REGS[rt]}, 0x{imm:04x}"
    if opcode == 0x20: return f"lb     ${MIPS_REGS[rt]}, {simm}(${MIPS_REGS[rs]})"
    if opcode == 0x21: return f"lh     ${MIPS_REGS[rt]}, {simm}(${MIPS_REGS[rs]})"
    if opcode == 0x23: return f"lw     ${MIPS_REGS[rt]}, {simm}(${MIPS_REGS[rs]})"
    if opcode == 0x24: return f"lbu    ${MIPS_REGS[rt]}, {simm}(${MIPS_REGS[rs]})"
    if opcode == 0x25: return f"lhu    ${MIPS_REGS[rt]}, {simm}(${MIPS_REGS[rs]})"
    if opcode == 0x28: return f"sb     ${MIPS_REGS[rt]}, {simm}(${MIPS_REGS[rs]})"
    if opcode == 0x29: return f"sh     ${MIPS_REGS[rt]}, {simm}(${MIPS_REGS[rs]})"
    if opcode == 0x2b: return f"sw     ${MIPS_REGS[rt]}, {simm}(${MIPS_REGS[rs]})"
    
    return f"OP_{opcode:02x}_{imm:04x}"

def find_damage_patterns(code, text_addr):
    """Search for potential damage calculation patterns"""
    patterns = []
    
    for i in range(0, len(code) - 20, 4):
        instr = read_mips_instruction(code, i)
        if instr is None:
            break
            
        dec = decode_mips_basic(instr)
        
        # LBU (Load Byte Unsigned) opcode = 0x24
        if dec['opcode'] == 0x24:
            offset = dec['imm']
            if offset in CREATURE_OFFSETS:
                addr = text_addr + i
                patterns.append({
                    'file_offset': i + 0x800,
                    'vaddr': addr,
                    'type': 'creature_base',
                    'offset': offset,
                    'name': CREATURE_OFFSETS[offset],
                    'instr': instr
                })
        
        # LHU (Load Halfword Unsigned) opcode = 0x25
        if dec['opcode'] == 0x25:
            offset = dec['imm']
            if offset in ENTITYSTATE_OFFSETS:
                addr = text_addr + i
                patterns.append({
                    'file_offset': i + 0x800,
                    'vaddr': addr,
                    'type': 'entitystate',
                    'offset': offset,
                    'name': ENTITYSTATE_OFFSETS[offset],
                    'instr': instr
                })
        
        # MULT/MULTU - funct field = 0x18 or 0x19
        if dec['opcode'] == 0 and (dec['funct'] == 0x18 or dec['funct'] == 0x19):
            addr = text_addr + i
            patterns.append({
                'file_offset': i + 0x800,
                'vaddr': addr,
                'type': 'multiply',
                'instr': instr
            })
    
    return patterns

def disasm_region(code, file_offset, vaddr, num_instrs=20, before=0):
    """Disassemble a region of code"""
    lines = []
    start_offset = file_offset - 0x800 - (before * 4)
    start_vaddr = vaddr - (before * 4)
    
    for i in range(num_instrs + before):
        offset = start_offset + (i * 4)
        if offset < 0 or offset + 4 > len(code):
            continue
        instr = struct.unpack('<I', code[offset:offset+4])[0]
        addr = start_vaddr + (i * 4)
        dis = disasm_mips(instr)
        
        # Highlight the target instruction
        marker = ">>>" if i == before else "   "
        lines.append(f"{marker} 0x{addr:08X}:  {instr:08X}  {dis}")
    
    return '\n'.join(lines)

def find_memory_stores(code, text_addr, target_addr):
    """Search for store instructions to a specific memory address"""
    stores = []
    
    # Calculate the parts of the address
    addr_upper = (target_addr >> 16) & 0xFFFF
    addr_lower = target_addr & 0xFFFF
    if addr_lower >= 0x8000:
        addr_lower = addr_lower - 0x10000  # Sign-extend for negative offset
    
    for i in range(0, len(code) - 20, 4):
        instr = read_mips_instruction(code, i)
        if instr is None:
            break
            
        dec = decode_mips_basic(instr)
        
        # SW (Store Word) opcode = 0x2b
        # SH (Store Halfword) opcode = 0x29
        # SB (Store Byte) opcode = 0x28
        if dec['opcode'] in [0x28, 0x29, 0x2b]:
            # Check if the immediate offset matches
            simm = dec['imm'] if dec['imm'] < 0x8000 else dec['imm'] - 0x10000
            if simm == addr_lower:
                vaddr = text_addr + i
                store_type = {0x28: 'sb', 0x29: 'sh', 0x2b: 'sw'}[dec['opcode']]
                stores.append({
                    'file_offset': i + 0x800,
                    'vaddr': vaddr,
                    'type': store_type,
                    'instr': instr,
                    'offset': simm,
                    'reg': MIPS_REGS[dec['rs']]
                })
    
    return stores

def main():
    parser = argparse.ArgumentParser(description='Analyze Shadow Tower ST.EXE')
    parser.add_argument('--full', action='store_true', help='Show full disassembly output')
    parser.add_argument('--region', type=str, help='Disassemble specific region (hex address)')
    parser.add_argument('--search', type=str, help='Search for loads from specific offset (hex)')
    parser.add_argument('--search-stores', type=str, help='Search for stores to specific memory address (hex)')
    parser.add_argument('--stats', action='store_true', help='Show statistics only')
    args = parser.parse_args()
    
    # Read ST.EXE
    try:
        with open('iso-dump/ST.EXE', 'rb') as f:
            # Parse header
            header = f.read(0x800)
            pc = struct.unpack('<I', header[0x10:0x14])[0]
            text_addr = struct.unpack('<I', header[0x18:0x1C])[0]
            text_size = struct.unpack('<I', header[0x1C:0x20])[0]
            
            # Read code
            f.seek(0x800)
            code = f.read(text_size)
    except FileNotFoundError:
        print("Error: iso-dump/ST.EXE not found")
        print("Please ensure the file exists in the iso-dump directory")
        return 1
    
    print("=" * 80)
    print("Shadow Tower ST.EXE Damage Calculation Analyzer")
    print("=" * 80)
    print(f"Entry Point:  0x{pc:08X}")
    print(f"Text Address: 0x{text_addr:08X}")
    print(f"Text Size:    0x{text_size:08X} ({text_size:,} bytes)")
    print()
    
    # Find patterns
    patterns = find_damage_patterns(code, text_addr)
    
    # Statistics
    by_type = {}
    for p in patterns:
        t = p['type']
        if t not in by_type:
            by_type[t] = []
        by_type[t].append(p)
    
    print(f"Found {len(patterns)} damage-related patterns:")
    for ptype, items in sorted(by_type.items()):
        print(f"  {ptype:20s}: {len(items):4d} occurrences")
    print()
    
    if args.stats:
        return 0
    
    # Search for stores to specific memory address
    if args.search_stores:
        addr = int(args.search_stores, 16)
        print(f"Searching for store instructions to memory address 0x{addr:08X}...")
        print("=" * 80)
        
        stores = find_memory_stores(code, text_addr, addr)
        
        if len(stores) == 0:
            print(f"\nNo store instructions found writing to 0x{addr:08X}")
            print("\nNote: This searches for direct stores with matching offset.")
            print("The address might be accessed via pointer arithmetic or")
            print("loaded into a register first. Try searching for the base")
            print("address pattern (e.g., LUI + offset calculations).")
        else:
            print(f"\nFound {len(stores)} store instruction(s):\n")
            for s in stores[:20]:
                print(f"Virtual Address: 0x{s['vaddr']:08X}")
                print(f"File Offset:     0x{s['file_offset']:08X}")
                print(f"Type:            {s['type'].upper()} (Store via ${s['reg']} + {s['offset']})")
                print()
                print(disasm_region(code, s['file_offset'], s['vaddr'], 10, before=5))
                print()
        return 0
    
    # Search for specific offset
    if args.search:
        offset = int(args.search, 16)
        print(f"Searching for loads from offset 0x{offset:02X}...")
        print("=" * 80)
        
        matches = [p for p in patterns if p.get('offset') == offset]
        for p in matches[:10]:
            print(f"\nVirtual Address: 0x{p['vaddr']:08X}")
            print(f"File Offset:     0x{p['file_offset']:08X}")
            print(f"Type:            {p['type']}")
            print(f"Attribute:       {p.get('name', 'unknown')}")
            print()
            print(disasm_region(code, p['file_offset'], p['vaddr'], 10, before=5))
            print()
        return 0
    
    # Disassemble specific region
    if args.region:
        addr = int(args.region, 16)
        file_off = (addr - text_addr) + 0x800
        print(f"Disassembling region at 0x{addr:08X}")
        print("=" * 80)
        print(disasm_region(code, file_off, addr, 50, before=10))
        return 0
    
    # Default: Show key regions
    print("Key Damage Calculation Regions:")
    print("=" * 80)
    
    # Show creature base attack loads
    if 'creature_base' in by_type:
        print("\nCREATURE BASE ATTACK LOADS:")
        print("-" * 80)
        for p in by_type['creature_base'][:5]:
            print(f"\n{p['name'].upper()} at 0x{p['vaddr']:08X} (offset 0x{p['offset']:02X}):")
            print(disasm_region(code, p['file_offset'], p['vaddr'], 10, before=3))
    
    # Show EntityState attack loads
    if 'entitystate' in by_type:
        print("\n\nENTITYSTATE ATTACK LOADS:")
        print("-" * 80)
        for p in by_type['entitystate'][:5]:
            print(f"\n{p['name'].upper()} at 0x{p['vaddr']:08X} (offset 0x{p['offset']:02X}):")
            print(disasm_region(code, p['file_offset'], p['vaddr'], 10, before=3))
    
    return 0

if __name__ == '__main__':
    sys.exit(main())
