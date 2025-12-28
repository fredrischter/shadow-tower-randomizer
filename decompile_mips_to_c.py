#!/usr/bin/env python3
"""
MIPS to C Decompiler for Shadow Tower
Decompiles MIPS assembly from ST.EXE to C-like code
"""

import re
import sys

class MIPSDecompiler:
    def __init__(self):
        self.registers = {
            'zero': '0', 'at': 'temp_at', 'v0': 'ret0', 'v1': 'ret1',
            'a0': 'arg0', 'a1': 'arg1', 'a2': 'arg2', 'a3': 'arg3',
            't0': 'temp0', 't1': 'temp1', 't2': 'temp2', 't3': 'temp3',
            't4': 'temp4', 't5': 'temp5', 't6': 'temp6', 't7': 'temp7',
            's0': 'saved0', 's1': 'saved1', 's2': 'saved2', 's3': 'saved3',
            's4': 'saved4', 's5': 'saved5', 's6': 'saved6', 's7': 'saved7',
            't8': 'temp8', 't9': 'temp9',
            'k0': 'kernel0', 'k1': 'kernel1',
            'gp': 'global_ptr', 'sp': 'stack_ptr', 'fp': 'frame_ptr',
            's8': 'frame_ptr', 'ra': 'return_addr',
            'hi': 'hi', 'lo': 'lo'
        }
        self.functions = {}
        self.current_function = None
        self.labels = {}
        self.output_lines = []
        
    def get_reg_name(self, reg):
        """Convert MIPS register to C variable name"""
        reg = reg.strip()
        if reg in self.registers:
            return self.registers[reg]
        # Handle register numbers like $2, $3, etc.
        return reg
        
    def parse_instruction(self, addr, opcode, operands):
        """Parse a single MIPS instruction and return C-like code"""
        operands = operands.strip()
        
        # Arithmetic and logical operations
        if opcode in ['addu', 'add']:
            match = re.match(r'(\w+),(\w+),(\w+)', operands)
            if match:
                rd, rs, rt = match.groups()
                return f"{self.get_reg_name(rd)} = {self.get_reg_name(rs)} + {self.get_reg_name(rt)};"
                
        elif opcode in ['addiu', 'addi']:
            match = re.match(r'(\w+),(\w+),([-\w]+)', operands)
            if match:
                rt, rs, imm = match.groups()
                return f"{self.get_reg_name(rt)} = {self.get_reg_name(rs)} + {imm};"
                
        elif opcode in ['subu', 'sub']:
            match = re.match(r'(\w+),(\w+),(\w+)', operands)
            if match:
                rd, rs, rt = match.groups()
                return f"{self.get_reg_name(rd)} = {self.get_reg_name(rs)} - {self.get_reg_name(rt)};"
                
        elif opcode in ['and']:
            match = re.match(r'(\w+),(\w+),(\w+)', operands)
            if match:
                rd, rs, rt = match.groups()
                return f"{self.get_reg_name(rd)} = {self.get_reg_name(rs)} & {self.get_reg_name(rt)};"
                
        elif opcode in ['andi']:
            match = re.match(r'(\w+),(\w+),(0x[\da-fA-F]+|\d+)', operands)
            if match:
                rt, rs, imm = match.groups()
                return f"{self.get_reg_name(rt)} = {self.get_reg_name(rs)} & {imm};"
                
        elif opcode in ['or']:
            match = re.match(r'(\w+),(\w+),(\w+)', operands)
            if match:
                rd, rs, rt = match.groups()
                return f"{self.get_reg_name(rd)} = {self.get_reg_name(rs)} | {self.get_reg_name(rt)};"
                
        elif opcode in ['ori']:
            match = re.match(r'(\w+),(\w+),(0x[\da-fA-F]+|\d+)', operands)
            if match:
                rt, rs, imm = match.groups()
                return f"{self.get_reg_name(rt)} = {self.get_reg_name(rs)} | {imm};"
                
        elif opcode in ['xor']:
            match = re.match(r'(\w+),(\w+),(\w+)', operands)
            if match:
                rd, rs, rt = match.groups()
                return f"{self.get_reg_name(rd)} = {self.get_reg_name(rs)} ^ {self.get_reg_name(rt)};"
                
        elif opcode in ['nor']:
            match = re.match(r'(\w+),(\w+),(\w+)', operands)
            if match:
                rd, rs, rt = match.groups()
                return f"{self.get_reg_name(rd)} = ~({self.get_reg_name(rs)} | {self.get_reg_name(rt)});"
                
        # Shift operations
        elif opcode == 'sll':
            match = re.match(r'(\w+),(\w+),(0x[\da-fA-F]+|\d+)', operands)
            if match:
                rd, rt, sa = match.groups()
                return f"{self.get_reg_name(rd)} = {self.get_reg_name(rt)} << {sa};"
                
        elif opcode == 'srl':
            match = re.match(r'(\w+),(\w+),(0x[\da-fA-F]+|\d+)', operands)
            if match:
                rd, rt, sa = match.groups()
                return f"{self.get_reg_name(rd)} = (unsigned){self.get_reg_name(rt)} >> {sa};"
                
        elif opcode == 'sra':
            match = re.match(r'(\w+),(\w+),(0x[\da-fA-F]+|\d+)', operands)
            if match:
                rd, rt, sa = match.groups()
                return f"{self.get_reg_name(rd)} = {self.get_reg_name(rt)} >> {sa};"
                
        elif opcode == 'sllv':
            match = re.match(r'(\w+),(\w+),(\w+)', operands)
            if match:
                rd, rt, rs = match.groups()
                return f"{self.get_reg_name(rd)} = {self.get_reg_name(rt)} << {self.get_reg_name(rs)};"
                
        # Comparison operations
        elif opcode == 'slt':
            match = re.match(r'(\w+),(\w+),(\w+)', operands)
            if match:
                rd, rs, rt = match.groups()
                return f"{self.get_reg_name(rd)} = ({self.get_reg_name(rs)} < {self.get_reg_name(rt)}) ? 1 : 0;"
                
        elif opcode == 'sltu':
            match = re.match(r'(\w+),(\w+),(\w+)', operands)
            if match:
                rd, rs, rt = match.groups()
                return f"{self.get_reg_name(rd)} = ((unsigned){self.get_reg_name(rs)} < (unsigned){self.get_reg_name(rt)}) ? 1 : 0;"
                
        elif opcode == 'slti':
            match = re.match(r'(\w+),(\w+),([-\w]+)', operands)
            if match:
                rt, rs, imm = match.groups()
                return f"{self.get_reg_name(rt)} = ({self.get_reg_name(rs)} < {imm}) ? 1 : 0;"
                
        # Load operations
        elif opcode == 'lui':
            match = re.match(r'(\w+),(0x[\da-fA-F]+|\d+)', operands)
            if match:
                rt, imm = match.groups()
                return f"{self.get_reg_name(rt)} = {imm} << 16;"
                
        elif opcode == 'lw':
            match = re.match(r'(\w+),([-\d]+)\((\w+)\)', operands)
            if match:
                rt, offset, base = match.groups()
                return f"{self.get_reg_name(rt)} = *(int*)({self.get_reg_name(base)} + {offset});"
                
        elif opcode == 'lh':
            match = re.match(r'(\w+),([-\d]+)\((\w+)\)', operands)
            if match:
                rt, offset, base = match.groups()
                return f"{self.get_reg_name(rt)} = *(short*)({self.get_reg_name(base)} + {offset});"
                
        elif opcode == 'lhu':
            match = re.match(r'(\w+),([-\d]+)\((\w+)\)', operands)
            if match:
                rt, offset, base = match.groups()
                return f"{self.get_reg_name(rt)} = *(unsigned short*)({self.get_reg_name(base)} + {offset});"
                
        elif opcode == 'lb':
            match = re.match(r'(\w+),([-\d]+)\((\w+)\)', operands)
            if match:
                rt, offset, base = match.groups()
                return f"{self.get_reg_name(rt)} = *(char*)({self.get_reg_name(base)} + {offset});"
                
        elif opcode == 'lbu':
            match = re.match(r'(\w+),([-\d]+)\((\w+)\)', operands)
            if match:
                rt, offset, base = match.groups()
                return f"{self.get_reg_name(rt)} = *(unsigned char*)({self.get_reg_name(base)} + {offset});"
                
        # Store operations
        elif opcode == 'sw':
            match = re.match(r'(\w+),([-\d]+)\((\w+)\)', operands)
            if match:
                rt, offset, base = match.groups()
                return f"*(int*)({self.get_reg_name(base)} + {offset}) = {self.get_reg_name(rt)};"
                
        elif opcode == 'sh':
            match = re.match(r'(\w+),([-\d]+)\((\w+)\)', operands)
            if match:
                rt, offset, base = match.groups()
                return f"*(short*)({self.get_reg_name(base)} + {offset}) = {self.get_reg_name(rt)};"
                
        elif opcode == 'sb':
            match = re.match(r'(\w+),([-\d]+)\((\w+)\)', operands)
            if match:
                rt, offset, base = match.groups()
                return f"*(char*)({self.get_reg_name(base)} + {offset}) = {self.get_reg_name(rt)};"
                
        # Branch operations
        elif opcode == 'beq':
            match = re.match(r'(\w+),(\w+),(0x[\da-fA-F]+)', operands)
            if match:
                rs, rt, target = match.groups()
                return f"if ({self.get_reg_name(rs)} == {self.get_reg_name(rt)}) goto label_{target};"
                
        elif opcode == 'bne':
            match = re.match(r'(\w+),(\w+),(0x[\da-fA-F]+)', operands)
            if match:
                rs, rt, target = match.groups()
                return f"if ({self.get_reg_name(rs)} != {self.get_reg_name(rt)}) goto label_{target};"
                
        elif opcode == 'beqz':
            match = re.match(r'(\w+),(0x[\da-fA-F]+)', operands)
            if match:
                rs, target = match.groups()
                return f"if ({self.get_reg_name(rs)} == 0) goto label_{target};"
                
        elif opcode == 'bnez':
            match = re.match(r'(\w+),(0x[\da-fA-F]+)', operands)
            if match:
                rs, target = match.groups()
                return f"if ({self.get_reg_name(rs)} != 0) goto label_{target};"
                
        elif opcode == 'bgtz':
            match = re.match(r'(\w+),(0x[\da-fA-F]+)', operands)
            if match:
                rs, target = match.groups()
                return f"if ({self.get_reg_name(rs)} > 0) goto label_{target};"
                
        elif opcode == 'blez':
            match = re.match(r'(\w+),(0x[\da-fA-F]+)', operands)
            if match:
                rs, target = match.groups()
                return f"if ({self.get_reg_name(rs)} <= 0) goto label_{target};"
                
        elif opcode == 'bgez':
            match = re.match(r'(\w+),(0x[\da-fA-F]+)', operands)
            if match:
                rs, target = match.groups()
                return f"if ({self.get_reg_name(rs)} >= 0) goto label_{target};"
                
        elif opcode == 'bltz':
            match = re.match(r'(\w+),(0x[\da-fA-F]+)', operands)
            if match:
                rs, target = match.groups()
                return f"if ({self.get_reg_name(rs)} < 0) goto label_{target};"
                
        # Jump operations
        elif opcode == 'j':
            match = re.match(r'(0x[\da-fA-F]+)', operands)
            if match:
                target = match.group(1)
                return f"goto label_{target};"
                
        elif opcode == 'jal':
            match = re.match(r'(0x[\da-fA-F]+)', operands)
            if match:
                target = match.group(1)
                return f"return_addr = current_pc + 8; call_function_{target}();"
                
        elif opcode == 'jr':
            match = re.match(r'(\w+)', operands)
            if match:
                rs = match.group(1)
                if rs == 'ra':
                    return f"return;"
                else:
                    return f"goto *{self.get_reg_name(rs)};"
                    
        elif opcode == 'jalr':
            match = re.match(r'(\w+)', operands)
            if match:
                rs = match.group(1)
                return f"return_addr = current_pc + 8; call_indirect({self.get_reg_name(rs)});"
                
        # Pseudo instructions
        elif opcode == 'move':
            match = re.match(r'(\w+),(\w+)', operands)
            if match:
                rd, rs = match.groups()
                return f"{self.get_reg_name(rd)} = {self.get_reg_name(rs)};"
                
        elif opcode == 'li':
            match = re.match(r'(\w+),([-\dxa-fA-F]+)', operands)
            if match:
                rd, imm = match.groups()
                return f"{self.get_reg_name(rd)} = {imm};"
                
        elif opcode == 'nop':
            return "/* nop */;"
            
        # Multiplication and Division
        elif opcode == 'mult':
            match = re.match(r'(\w+),(\w+)', operands)
            if match:
                rs, rt = match.groups()
                return f"{{long long temp = (long long){self.get_reg_name(rs)} * (long long){self.get_reg_name(rt)}; lo = (int)temp; hi = (int)(temp >> 32);}};"
                
        elif opcode == 'multu':
            match = re.match(r'(\w+),(\w+)', operands)
            if match:
                rs, rt = match.groups()
                return f"{{unsigned long long temp = (unsigned long long){self.get_reg_name(rs)} * (unsigned long long){self.get_reg_name(rt)}; lo = (int)temp; hi = (int)(temp >> 32);}};"
                
        elif opcode == 'div':
            match = re.match(r'(\w+),(\w+)', operands)
            if match:
                rs, rt = match.groups()
                return f"{{lo = {self.get_reg_name(rs)} / {self.get_reg_name(rt)}; hi = {self.get_reg_name(rs)} % {self.get_reg_name(rt)};}};"
                
        elif opcode == 'divu':
            match = re.match(r'(\w+),(\w+)', operands)
            if match:
                rs, rt = match.groups()
                return f"{{lo = (unsigned){self.get_reg_name(rs)} / (unsigned){self.get_reg_name(rt)}; hi = (unsigned){self.get_reg_name(rs)} % (unsigned){self.get_reg_name(rt)};}};"
                
        elif opcode == 'mfhi':
            match = re.match(r'(\w+)', operands)
            if match:
                rd = match.group(1)
                return f"{self.get_reg_name(rd)} = hi;"
                
        elif opcode == 'mflo':
            match = re.match(r'(\w+)', operands)
            if match:
                rd = match.group(1)
                return f"{self.get_reg_name(rd)} = lo;"
                
        # Default: keep as comment
        return f"/* {opcode} {operands} */;"
        
    def decompile_file(self, input_file, output_file):
        """Decompile entire MIPS assembly file to C"""
        with open(input_file, 'r') as f:
            lines = f.readlines()
            
        self.output_lines.append("/*")
        self.output_lines.append(" * Shadow Tower - Decompiled from MIPS Assembly")
        self.output_lines.append(" * Address Range: 0x80030000 to 0x80040000")
        self.output_lines.append(" * Auto-generated from ST_EXE_0x80030000_to_0x80040000.asm")
        self.output_lines.append(" */")
        self.output_lines.append("")
        self.output_lines.append("#include <stdint.h>")
        self.output_lines.append("")
        self.output_lines.append("/* Register variables */")
        self.output_lines.append("int32_t ret0, ret1;")
        self.output_lines.append("int32_t arg0, arg1, arg2, arg3;")
        self.output_lines.append("int32_t temp0, temp1, temp2, temp3, temp4, temp5, temp6, temp7, temp8, temp9;")
        self.output_lines.append("int32_t saved0, saved1, saved2, saved3, saved4, saved5, saved6, saved7;")
        self.output_lines.append("int32_t global_ptr, stack_ptr, frame_ptr, return_addr;")
        self.output_lines.append("int32_t hi, lo;")
        self.output_lines.append("")
        
        current_addr = None
        in_code = False
        
        for line in lines:
            line = line.strip()
            
            # Skip header lines
            if not line or line.startswith('decompilation/') or line.startswith('Disassembly'):
                continue
                
            # Parse address labels
            addr_match = re.match(r'([\da-f]+)\s+<([^>]+)>:', line)
            if addr_match:
                addr = addr_match.group(1)
                label = addr_match.group(2)
                self.output_lines.append(f"\n/* Address 0x{addr}: {label} */")
                in_code = True
                continue
                
            # Parse instruction lines
            inst_match = re.match(r'([\da-f]+):\s+([\da-f]{8})\s+(\w+)\s*(.*)', line)
            if inst_match and in_code:
                addr = inst_match.group(1)
                raw = inst_match.group(2)
                opcode = inst_match.group(3)
                operands = inst_match.group(4)
                
                # Add address label
                self.output_lines.append(f"label_0x{addr}:")
                
                # Add raw instruction as comment
                self.output_lines.append(f"    /* 0x{addr}: {raw} - {opcode} {operands} */")
                
                # Generate C code
                c_code = self.parse_instruction(addr, opcode, operands)
                self.output_lines.append(f"    {c_code}")
                
        # Write output
        with open(output_file, 'w') as f:
            f.write('\n'.join(self.output_lines))
            
        print(f"Decompilation complete!")
        print(f"Input:  {input_file} ({len(lines)} lines)")
        print(f"Output: {output_file} ({len(self.output_lines)} lines)")

if __name__ == '__main__':
    if len(sys.argv) != 3:
        print("Usage: python3 decompile_mips_to_c.py <input.asm> <output.c>")
        sys.exit(1)
        
    decompiler = MIPSDecompiler()
    decompiler.decompile_file(sys.argv[1], sys.argv[2])
