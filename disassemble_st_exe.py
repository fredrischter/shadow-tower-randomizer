#!/usr/bin/env python3
"""
Shadow Tower ST.EXE Disassembler
Analyzes and decompiles MIPS code from Shadow Tower's executable

Usage:
    python3 disassemble_st_exe.py <runtime_address>
    python3 disassemble_st_exe.py --file-offset <hex_offset>
    python3 disassemble_st_exe.py --function <runtime_address>
"""

import struct
import sys
import argparse

# PSX-EXE constants
PSX_LOAD_ADDRESS = 0x80010000
PSX_HEADER_SIZE = 0x800
EXE_PATH = "iso-dump/ST.EXE"

# MIPS register names
REG_NAMES = [
    'zero', 'at', 'v0', 'v1', 'a0', 'a1', 'a2', 'a3',
    't0', 't1', 't2', 't3', 't4', 't5', 't6', 't7',
    's0', 's1', 's2', 's3', 's4', 's5', 's6', 's7',
    't8', 't9', 'k0', 'k1', 'gp', 'sp', 'fp', 'ra'
]

def runtime_to_file_offset(runtime_addr):
    """Convert runtime address to file offset"""
    return runtime_addr - PSX_LOAD_ADDRESS + PSX_HEADER_SIZE

def file_offset_to_runtime(file_offset):
    """Convert file offset to runtime address"""
    return file_offset + PSX_LOAD_ADDRESS - PSX_HEADER_SIZE

def disassemble_mips(instruction):
    """Disassemble a single MIPS instruction"""
    opcode = (instruction >> 26) & 0x3F
    rs = (instruction >> 21) & 0x1F
    rt = (instruction >> 16) & 0x1F
    rd = (instruction >> 11) & 0x1F
    shamt = (instruction >> 6) & 0x1F
    funct = instruction & 0x3F
    imm = instruction & 0xFFFF
    
    # Sign extend immediate
    if imm & 0x8000:
        imm_signed = imm - 0x10000
    else:
        imm_signed = imm
    
    # R-type instructions (opcode = 0)
    if opcode == 0x00:
        if instruction == 0:
            return "nop"
        elif funct == 0x08:
            return f"jr    ${REG_NAMES[rs]}"
        elif funct == 0x09:
            return f"jalr  ${REG_NAMES[rd]}, ${REG_NAMES[rs]}"
        elif funct == 0x20:
            return f"add   ${REG_NAMES[rd]}, ${REG_NAMES[rs]}, ${REG_NAMES[rt]}"
        elif funct == 0x21:
            return f"addu  ${REG_NAMES[rd]}, ${REG_NAMES[rs]}, ${REG_NAMES[rt]}"
        elif funct == 0x22:
            return f"sub   ${REG_NAMES[rd]}, ${REG_NAMES[rs]}, ${REG_NAMES[rt]}"
        elif funct == 0x23:
            return f"subu  ${REG_NAMES[rd]}, ${REG_NAMES[rs]}, ${REG_NAMES[rt]}"
        elif funct == 0x24:
            return f"and   ${REG_NAMES[rd]}, ${REG_NAMES[rs]}, ${REG_NAMES[rt]}"
        elif funct == 0x25:
            return f"or    ${REG_NAMES[rd]}, ${REG_NAMES[rs]}, ${REG_NAMES[rt]}"
        elif funct == 0x26:
            return f"xor   ${REG_NAMES[rd]}, ${REG_NAMES[rs]}, ${REG_NAMES[rt]}"
        elif funct == 0x27:
            return f"nor   ${REG_NAMES[rd]}, ${REG_NAMES[rs]}, ${REG_NAMES[rt]}"
        elif funct == 0x2a:
            return f"slt   ${REG_NAMES[rd]}, ${REG_NAMES[rs]}, ${REG_NAMES[rt]}"
        elif funct == 0x2b:
            return f"sltu  ${REG_NAMES[rd]}, ${REG_NAMES[rs]}, ${REG_NAMES[rt]}"
        elif funct == 0x00 and shamt != 0:
            return f"sll   ${REG_NAMES[rd]}, ${REG_NAMES[rt]}, {shamt}"
        elif funct == 0x02:
            return f"srl   ${REG_NAMES[rd]}, ${REG_NAMES[rt]}, {shamt}"
        elif funct == 0x03:
            return f"sra   ${REG_NAMES[rd]}, ${REG_NAMES[rt]}, {shamt}"
        else:
            return f"R-type (funct=0x{funct:02x})"
    
    # J-type instructions
    elif opcode == 0x02:  # J
        target = instruction & 0x3FFFFFF
        return f"j     0x{(target << 2) | 0x80000000:08x}"
    elif opcode == 0x03:  # JAL
        target = instruction & 0x3FFFFFF
        return f"jal   0x{(target << 2) | 0x80000000:08x}"
    
    # I-type instructions
    elif opcode == 0x04:  # BEQ
        return f"beq   ${REG_NAMES[rs]}, ${REG_NAMES[rt]}, {imm_signed}"
    elif opcode == 0x05:  # BNE
        return f"bne   ${REG_NAMES[rs]}, ${REG_NAMES[rt]}, {imm_signed}"
    elif opcode == 0x06:  # BLEZ
        return f"blez  ${REG_NAMES[rs]}, {imm_signed}"
    elif opcode == 0x07:  # BGTZ
        return f"bgtz  ${REG_NAMES[rs]}, {imm_signed}"
    elif opcode == 0x08:  # ADDI
        return f"addi  ${REG_NAMES[rt]}, ${REG_NAMES[rs]}, {imm_signed}"
    elif opcode == 0x09:  # ADDIU
        return f"addiu ${REG_NAMES[rt]}, ${REG_NAMES[rs]}, {imm_signed}"
    elif opcode == 0x0a:  # SLTI
        return f"slti  ${REG_NAMES[rt]}, ${REG_NAMES[rs]}, {imm_signed}"
    elif opcode == 0x0b:  # SLTIU
        return f"sltiu ${REG_NAMES[rt]}, ${REG_NAMES[rs]}, {imm_signed}"
    elif opcode == 0x0c:  # ANDI
        return f"andi  ${REG_NAMES[rt]}, ${REG_NAMES[rs]}, 0x{imm:x}"
    elif opcode == 0x0d:  # ORI
        return f"ori   ${REG_NAMES[rt]}, ${REG_NAMES[rs]}, 0x{imm:x}"
    elif opcode == 0x0e:  # XORI
        return f"xori  ${REG_NAMES[rt]}, ${REG_NAMES[rs]}, 0x{imm:x}"
    elif opcode == 0x0f:  # LUI
        return f"lui   ${REG_NAMES[rt]}, 0x{imm:x}"
    
    # Load instructions
    elif opcode == 0x20:  # LB
        return f"lb    ${REG_NAMES[rt]}, 0x{imm:x}(${REG_NAMES[rs]})"
    elif opcode == 0x21:  # LH
        return f"lh    ${REG_NAMES[rt]}, 0x{imm:x}(${REG_NAMES[rs]})"
    elif opcode == 0x23:  # LW
        return f"lw    ${REG_NAMES[rt]}, 0x{imm:x}(${REG_NAMES[rs]})"
    elif opcode == 0x24:  # LBU
        return f"lbu   ${REG_NAMES[rt]}, 0x{imm:x}(${REG_NAMES[rs]})"
    elif opcode == 0x25:  # LHU
        return f"lhu   ${REG_NAMES[rt]}, 0x{imm:x}(${REG_NAMES[rs]})"
    
    # Store instructions
    elif opcode == 0x28:  # SB
        return f"sb    ${REG_NAMES[rt]}, 0x{imm:x}(${REG_NAMES[rs]})"
    elif opcode == 0x29:  # SH
        return f"sh    ${REG_NAMES[rt]}, 0x{imm:x}(${REG_NAMES[rs]})"
    elif opcode == 0x2b:  # SW
        return f"sw    ${REG_NAMES[rt]}, 0x{imm:x}(${REG_NAMES[rs]})"
    
    else:
        return f"unknown (op=0x{opcode:02x}, 0x{instruction:08x})"

def disassemble_range(exe_data, start_offset, count, highlight_offset=None):
    """Disassemble a range of instructions"""
    results = []
    for i in range(count):
        offset = start_offset + (i * 4)
        if offset + 4 > len(exe_data):
            break
        
        inst = struct.unpack('<I', exe_data[offset:offset+4])[0]
        runtime_addr = file_offset_to_runtime(offset)
        disasm = disassemble_mips(inst)
        
        marker = ""
        if highlight_offset and offset == highlight_offset:
            marker = " <-- TARGET"
        
        results.append({
            'offset': offset,
            'runtime': runtime_addr,
            'instruction': inst,
            'disasm': disasm,
            'marker': marker
        })
    
    return results

def find_function_bounds(exe_data, start_offset):
    """
    Try to find function boundaries by looking for:
    - Function prologue (stack allocation)
    - Function epilogue (jr $ra)
    """
    # Look backwards for function start
    func_start = start_offset
    for i in range(start_offset - 4, max(0, start_offset - 0x200), -4):
        inst = struct.unpack('<I', exe_data[i:i+4])[0]
        # Look for stack allocation (addiu $sp, $sp, -X)
        opcode = (inst >> 26) & 0x3F
        rs = (inst >> 21) & 0x1F
        rt = (inst >> 16) & 0x1F
        imm = inst & 0xFFFF
        if imm & 0x8000:
            imm_signed = imm - 0x10000
        else:
            imm_signed = imm
        
        # addiu $sp, $sp, negative value = function prologue
        if opcode == 0x09 and rs == 29 and rt == 29 and imm_signed < 0:
            func_start = i
            break
    
    # Look forward for function end
    func_end = start_offset + 4
    for i in range(start_offset, min(len(exe_data) - 4, start_offset + 0x400), 4):
        inst = struct.unpack('<I', exe_data[i:i+4])[0]
        # jr $ra (0x03e00008)
        if inst == 0x03e00008:
            func_end = i + 8  # Include delay slot
            break
    
    return func_start, func_end

def main():
    parser = argparse.ArgumentParser(description='Disassemble Shadow Tower ST.EXE')
    parser.add_argument('address', nargs='?', help='Runtime address (0x8003d7f8) or file offset with --file-offset')
    parser.add_argument('--file-offset', action='store_true', help='Treat address as file offset')
    parser.add_argument('--function', action='store_true', help='Disassemble entire function')
    parser.add_argument('--count', type=int, default=32, help='Number of instructions to show (default: 32)')
    parser.add_argument('--before', type=int, default=8, help='Instructions before target (default: 8)')
    
    args = parser.parse_args()
    
    if not args.address:
        # Default example: the HP instruction
        print("Example usage:")
        print(f"  python3 {sys.argv[0]} 0x8003d7f8")
        print(f"  python3 {sys.argv[0]} 0x8003d7f8 --function")
        print(f"  python3 {sys.argv[0]} 0x2dff8 --file-offset")
        return
    
    # Parse address
    addr = int(args.address, 16) if '0x' in args.address.lower() else int(args.address)
    
    # Convert to file offset
    if args.file_offset:
        file_offset = addr
        runtime_addr = file_offset_to_runtime(file_offset)
    else:
        runtime_addr = addr
        file_offset = runtime_to_file_offset(addr)
    
    # Read executable
    try:
        with open(EXE_PATH, 'rb') as f:
            exe_data = f.read()
    except FileNotFoundError:
        print(f"Error: Could not find {EXE_PATH}")
        return
    
    print(f"Shadow Tower ST.EXE Disassembler")
    print(f"=" * 80)
    print(f"Runtime Address: 0x{runtime_addr:08x}")
    print(f"File Offset:     0x{file_offset:x} ({file_offset} bytes)")
    print()
    
    if args.function:
        # Find function boundaries
        func_start, func_end = find_function_bounds(exe_data, file_offset)
        func_start_runtime = file_offset_to_runtime(func_start)
        func_end_runtime = file_offset_to_runtime(func_end)
        
        print(f"Function bounds:")
        print(f"  Start: 0x{func_start_runtime:08x} (file offset 0x{func_start:x})")
        print(f"  End:   0x{func_end_runtime:08x} (file offset 0x{func_end:x})")
        print(f"  Size:  {func_end - func_start} bytes ({(func_end - func_start) // 4} instructions)")
        print()
        
        # Disassemble entire function
        count = (func_end - func_start) // 4
        results = disassemble_range(exe_data, func_start, count, file_offset)
    else:
        # Disassemble range around target
        start = file_offset - (args.before * 4)
        results = disassemble_range(exe_data, start, args.count, file_offset)
    
    print("Disassembly:")
    print("-" * 80)
    for r in results:
        print(f"0x{r['runtime']:08x}: {r['instruction']:08x}  {r['disasm']:<40}{r['marker']}")

if __name__ == '__main__':
    main()
