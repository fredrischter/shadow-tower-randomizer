#!/usr/bin/env python3
"""
Extract hp_damage code from ST.EXE

This script extracts the 65KB damage calculation code from ST.EXE
and saves it as hp_damage_extracted.mips for verification.
"""

import sys
import struct

def extract_hp_damage():
    """Extract hp_damage code from ST.EXE"""
    
    # Read ST.EXE
    with open('iso-dump/ST.EXE', 'rb') as f:
        st_exe = f.read()
    
    print("ST.EXE Analysis")
    print("=" * 80)
    print(f"File size: {len(st_exe):,} bytes (0x{len(st_exe):x})")
    print(f"Text section: 0x80011000-0x80088800 (runtime)")
    print()
    
    # Extract the hp_damage section
    HP_DAMAGE_OFFSET = 0x1f800
    HP_DAMAGE_SIZE = 65552  # 65 KB
    
    hp_damage_code = st_exe[HP_DAMAGE_OFFSET:HP_DAMAGE_OFFSET + HP_DAMAGE_SIZE]
    
    print("HP Damage Code Section")
    print("=" * 80)
    print(f"File offset: 0x{HP_DAMAGE_OFFSET:x}")
    print(f"Size: {len(hp_damage_code):,} bytes ({len(hp_damage_code)//4:,} MIPS instructions)")
    print(f"Runtime address: 0x{0x80011000 + (HP_DAMAGE_OFFSET - 0x800):08x}")
    print()
    
    # Verify the signature
    signature = hp_damage_code[:12]
    expected = bytes([0x00, 0x1c, 0x03, 0x00, 0x03, 0x1c, 0x03, 0x00, 0x80, 0x20, 0x03, 0x00])
    
    if signature == expected:
        print("✓ Signature verified: Damage calculation function found")
    else:
        print("✗ Signature mismatch!")
        print(f"Expected: {' '.join(f'{b:02x}' for b in expected)}")
        print(f"Got:      {' '.join(f'{b:02x}' for b in signature)}")
        return
    
    print()
    
    # Save extracted code
    output_file = 'hp_damage_extracted.mips'
    with open(output_file, 'wb') as f:
        f.write(hp_damage_code)
    
    print(f"✓ Extracted code saved to: {output_file}")
    print()
    
    # Show first few instructions
    print("First 20 MIPS instructions:")
    print("-" * 80)
    
    REG_NAMES = ['zero', 'at', 'v0', 'v1', 'a0', 'a1', 'a2', 'a3',
                 't0', 't1', 't2', 't3', 't4', 't5', 't6', 't7',
                 's0', 's1', 's2', 's3', 's4', 's5', 's6', 's7',
                 't8', 't9', 'k0', 'k1', 'gp', 'sp', 'fp', 'ra']
    
    for i in range(0, min(80, len(hp_damage_code)), 4):
        inst = struct.unpack('<I', hp_damage_code[i:i+4])[0]
        addr = 0x80030000 + i
        
        # Simple disassembly
        opcode = (inst >> 26) & 0x3F
        rs = (inst >> 21) & 0x1F
        rt = (inst >> 16) & 0x1F
        rd = (inst >> 11) & 0x1F
        shamt = (inst >> 6) & 0x1F
        funct = inst & 0x3F
        imm = inst & 0xFFFF
        
        disasm = ""
        if opcode == 0x00:  # R-type
            if inst == 0:
                disasm = "nop"
            elif funct == 0x00 and shamt > 0:
                disasm = f"sll ${REG_NAMES[rd]}, ${REG_NAMES[rt]}, {shamt}"
            elif funct == 0x03:
                disasm = f"sra ${REG_NAMES[rd]}, ${REG_NAMES[rt]}, {shamt}"
            elif funct == 0x21:
                disasm = f"addu ${REG_NAMES[rd]}, ${REG_NAMES[rs]}, ${REG_NAMES[rt]}"
            else:
                disasm = f"R-type(0x{funct:02x})"
        elif opcode == 0x09:
            imm_signed = imm if imm < 0x8000 else imm - 0x10000
            disasm = f"addiu ${REG_NAMES[rt]}, ${REG_NAMES[rs]}, {imm_signed}"
        elif opcode == 0x0c:
            disasm = f"andi ${REG_NAMES[rt]}, ${REG_NAMES[rs]}, 0x{imm:x}"
        elif opcode == 0x0f:
            disasm = f"lui ${REG_NAMES[rt]}, 0x{imm:x}"
        elif opcode == 0x23:
            disasm = f"lw ${REG_NAMES[rt]}, 0x{imm:x}(${REG_NAMES[rs]})"
        elif opcode == 0x24:
            disasm = f"lbu ${REG_NAMES[rt]}, 0x{imm:x}(${REG_NAMES[rs]})"
        elif opcode == 0x03:
            target = inst & 0x3FFFFFF
            disasm = f"jal 0x{target << 2:08x}"
        elif opcode == 0x0d:
            disasm = f"ori ${REG_NAMES[rt]}, ${REG_NAMES[rs]}, 0x{imm:x}"
        else:
            disasm = f"op=0x{opcode:02x}"
        
        print(f"0x{addr:08x}: {inst:08x}  {disasm}")
    
    print()
    print("=" * 80)
    print("Extraction complete!")

if __name__ == '__main__':
    extract_hp_damage()
