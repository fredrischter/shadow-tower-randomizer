#!/usr/bin/env python3
"""
MIPS to Readable C Decompiler for Shadow Tower
Produces actual readable C code with proper functions
"""

import re
import sys
from collections import defaultdict

class ReadableMIPSDecompiler:
    def __init__(self):
        self.functions = {}
        self.current_function = None
        self.current_block = []
        self.local_vars = set()
        self.output_lines = []
        
    def identify_functions(self, lines):
        """Identify function boundaries based on jr ra patterns"""
        functions = []
        current_func_start = None
        
        for i, line in enumerate(lines):
            # Look for function starts (after jr ra or at beginning)
            if i == 0 or (i > 0 and 'jr' in lines[i-1] and 'ra' in lines[i-1]):
                addr_match = re.match(r'([\da-f]+):', line)
                if addr_match:
                    current_func_start = addr_match.group(1)
            
            # Look for function ends (jr ra)
            if current_func_start and 'jr' in line and 'ra' in line:
                addr_match = re.match(r'([\da-f]+):', line)
                if addr_match:
                    func_end = addr_match.group(1)
                    functions.append((current_func_start, func_end, i))
                    current_func_start = None
                    
        return functions
        
    def analyze_function(self, lines, start_addr, end_addr):
        """Analyze a function to extract its structure"""
        func_lines = []
        in_function = False
        
        for line in lines:
            addr_match = re.match(r'([\da-f]+):', line)
            if addr_match:
                addr = addr_match.group(1)
                if addr == start_addr:
                    in_function = True
                elif addr == end_addr:
                    func_lines.append(line)
                    break
                    
            if in_function:
                func_lines.append(line)
                
        return func_lines
        
    def simplify_expression(self, expr):
        """Simplify C expressions"""
        # Remove redundant shifts: (x << 16) >> 16 = (short)x
        expr = re.sub(r'\(\((\w+)\s*<<\s*16\)\s*>>\s*16\)', r'(short)(\1)', expr)
        # Simplify (x << 16) as upper halfword
        expr = re.sub(r'(\w+)\s*<<\s*16', r'((\1) << 16)', expr)
        return expr
        
    def decompile_function(self, func_lines, func_addr):
        """Decompile a single function to readable C"""
        output = []
        output.append(f"\n/* Function at 0x{func_addr} */")
        output.append(f"void func_0x{func_addr}() {{")
        
        # Track variables used
        local_vars = set()
        statements = []
        skip_next = False
        
        for i, line in enumerate(func_lines):
            if skip_next:
                skip_next = False
                continue
                
            # Parse instruction
            inst_match = re.match(r'([\da-f]+):\s+([\da-f]{8})\s+(\w+)\s*(.*)', line)
            if not inst_match:
                continue
                
            addr = inst_match.group(1)
            opcode = inst_match.group(3)
            operands = inst_match.group(4).strip()
            
            # Skip nops
            if opcode == 'nop':
                continue
                
            # Handle function calls
            if opcode == 'jal':
                target_match = re.match(r'(0x[\da-f]+)', operands)
                if target_match:
                    target = target_match.group(1)
                    statements.append(f"    func_{target}(); /* 0x{addr} */")
                    skip_next = True  # Skip delay slot
                continue
                
            # Handle returns
            if opcode == 'jr' and 'ra' in operands:
                statements.append(f"    return; /* 0x{addr} */")
                continue
                
            # Handle loads
            if opcode in ['lw', 'lh', 'lhu', 'lb', 'lbu']:
                match = re.match(r'(\w+),([-\d]+)\((\w+)\)', operands)
                if match:
                    rt, offset, base = match.groups()
                    var_name = f"var_{rt}"
                    local_vars.add((var_name, 'int32_t'))
                    
                    type_map = {'lw': 'int32_t', 'lh': 'int16_t', 'lhu': 'uint16_t', 
                               'lb': 'int8_t', 'lbu': 'uint8_t'}
                    cast_type = type_map.get(opcode, 'int32_t')
                    
                    base_var = f"reg_{base}" if base != 'sp' else 'stack'
                    statements.append(f"    {var_name} = *({cast_type}*)({base_var} + {offset}); /* 0x{addr} */")
                continue
                
            # Handle stores
            if opcode in ['sw', 'sh', 'sb']:
                match = re.match(r'(\w+),([-\d]+)\((\w+)\)', operands)
                if match:
                    rt, offset, base = match.groups()
                    var_name = f"var_{rt}"
                    
                    type_map = {'sw': 'int32_t', 'sh': 'int16_t', 'sb': 'int8_t'}
                    cast_type = type_map.get(opcode, 'int32_t')
                    
                    base_var = f"reg_{base}" if base != 'sp' else 'stack'
                    statements.append(f"    *({cast_type}*)({base_var} + {offset}) = {var_name}; /* 0x{addr} */")
                continue
                
            # Handle arithmetic
            if opcode in ['addu', 'add', 'addiu', 'addi']:
                match = re.match(r'(\w+),(\w+),([-\w]+)', operands)
                if match:
                    rd, rs, rt = match.groups()
                    var_rd = f"var_{rd}"
                    var_rs = f"var_{rs}" if not rs.isdigit() else rs
                    local_vars.add((var_rd, 'int32_t'))
                    
                    if rt.startswith('-') or rt.isdigit():
                        statements.append(f"    {var_rd} = {var_rs} + {rt}; /* 0x{addr} */")
                    else:
                        var_rt = f"var_{rt}"
                        statements.append(f"    {var_rd} = {var_rs} + {var_rt}; /* 0x{addr} */")
                continue
                
            # Handle logical operations
            if opcode in ['and', 'andi', 'or', 'ori']:
                match = re.match(r'(\w+),(\w+),([-\w]+)', operands)
                if match:
                    rd, rs, rt = match.groups()
                    var_rd = f"var_{rd}"
                    var_rs = f"var_{rs}"
                    local_vars.add((var_rd, 'int32_t'))
                    
                    op = '&' if 'and' in opcode else '|'
                    if rt.startswith('0x') or rt.isdigit():
                        statements.append(f"    {var_rd} = {var_rs} {op} {rt}; /* 0x{addr} */")
                    else:
                        var_rt = f"var_{rt}"
                        statements.append(f"    {var_rd} = {var_rs} {op} {var_rt}; /* 0x{addr} */")
                continue
                
            # Handle shifts
            if opcode in ['sll', 'srl', 'sra']:
                match = re.match(r'(\w+),(\w+),(0x[\da-f]+|\d+)', operands)
                if match:
                    rd, rt, sa = match.groups()
                    var_rd = f"var_{rd}"
                    var_rt = f"var_{rt}"
                    local_vars.add((var_rd, 'int32_t'))
                    
                    op = '<<' if opcode == 'sll' else '>>'
                    unsigned = '(uint32_t)' if opcode == 'srl' else ''
                    statements.append(f"    {var_rd} = {unsigned}{var_rt} {op} {sa}; /* 0x{addr} */")
                continue
                
            # Handle branches
            if opcode in ['beq', 'bne', 'beqz', 'bnez', 'bgtz', 'blez']:
                # Simplified - just add as comment
                statements.append(f"    /* Branch {opcode} at 0x{addr} */")
                continue
                
            # Handle moves
            if opcode == 'move':
                match = re.match(r'(\w+),(\w+)', operands)
                if match:
                    rd, rs = match.groups()
                    var_rd = f"var_{rd}"
                    var_rs = f"var_{rs}"
                    local_vars.add((var_rd, 'int32_t'))
                    statements.append(f"    {var_rd} = {var_rs}; /* 0x{addr} */")
                continue
                
            # Handle li (load immediate)
            if opcode == 'li':
                match = re.match(r'(\w+),([-\dxa-fA-F]+)', operands)
                if match:
                    rd, imm = match.groups()
                    var_rd = f"var_{rd}"
                    local_vars.add((var_rd, 'int32_t'))
                    statements.append(f"    {var_rd} = {imm}; /* 0x{addr} */")
                continue
                
            # Handle lui (load upper immediate)
            if opcode == 'lui':
                match = re.match(r'(\w+),(0x[\da-f]+|\d+)', operands)
                if match:
                    rt, imm = match.groups()
                    var_rt = f"var_{rt}"
                    local_vars.add((var_rt, 'int32_t'))
                    statements.append(f"    {var_rt} = {imm} << 16; /* 0x{addr} */")
                continue
        
        # Add local variable declarations
        if local_vars:
            output.append("    /* Local variables */")
            for var_name, var_type in sorted(local_vars):
                output.append(f"    {var_type} {var_name};")
            output.append("")
            
        # Add statements
        output.extend(statements)
        output.append("}")
        
        return output
        
    def decompile_file(self, input_file, output_file):
        """Decompile entire MIPS assembly file to readable C"""
        with open(input_file, 'r') as f:
            lines = f.readlines()
            
        # Filter to just instruction lines
        inst_lines = []
        for line in lines:
            line = line.strip()
            if re.match(r'[\da-f]+:\s+[\da-f]{8}\s+\w+', line):
                inst_lines.append(line)
                
        # Identify functions
        functions = self.identify_functions(inst_lines)
        
        # Write header
        self.output_lines.append("/*")
        self.output_lines.append(" * Shadow Tower - Readable C Decompilation")
        self.output_lines.append(" * Address Range: 0x80030000 to 0x80040000")
        self.output_lines.append(" * Decompiled from ST_EXE_0x80030000_to_0x80040000.asm")
        self.output_lines.append(" */")
        self.output_lines.append("")
        self.output_lines.append("#include <stdint.h>")
        self.output_lines.append("#include <stdbool.h>")
        self.output_lines.append("")
        self.output_lines.append("/* Global variables and registers */")
        self.output_lines.append("uint8_t* stack;")
        self.output_lines.append("uint32_t reg_sp, reg_gp, reg_s0, reg_s1, reg_s2, reg_s3, reg_s4, reg_s5, reg_s6, reg_s7;")
        self.output_lines.append("")
        
        # Decompile ALL functions
        for func_start, func_end, line_num in functions:
            func_lines = self.analyze_function(inst_lines, func_start, func_end)
            func_output = self.decompile_function(func_lines, func_start)
            self.output_lines.extend(func_output)
            
        # Add summary
        self.output_lines.append(f"\n/* Total functions decompiled: {len(functions)} */")
            
        # Write output
        with open(output_file, 'w') as f:
            f.write('\n'.join(self.output_lines))
            
        print(f"Decompilation complete!")
        print(f"Input:  {input_file}")
        print(f"Output: {output_file} ({len(self.output_lines)} lines)")
        print(f"Functions decompiled: {len(functions)} total")

if __name__ == '__main__':
    if len(sys.argv) != 3:
        print("Usage: python3 decompile_mips_to_readable_c.py <input.asm> <output.c>")
        sys.exit(1)
        
    decompiler = ReadableMIPSDecompiler()
    decompiler.decompile_file(sys.argv[1], sys.argv[2])
