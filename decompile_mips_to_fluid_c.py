#!/usr/bin/env python3
"""
MIPS to Highly Readable C Decompiler for Shadow Tower
Produces fluid, natural C code with minimal inline comments
"""

import re
import sys
from collections import defaultdict

class FluidMIPSDecompiler:
    def __init__(self):
        self.functions = {}
        self.output_lines = []
        
    def identify_functions(self, lines):
        """Identify function boundaries based on jr ra patterns"""
        functions = []
        current_func_start = None
        
        for i, line in enumerate(lines):
            if i == 0 or (i > 0 and 'jr' in lines[i-1] and 'ra' in lines[i-1]):
                addr_match = re.match(r'([\da-f]+):', line)
                if addr_match:
                    current_func_start = addr_match.group(1)
            
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
        
    def get_var_name(self, reg):
        """Get meaningful variable name from register"""
        # Map MIPS registers to more readable names
        name_map = {
            'v0': 'result', 'v1': 'result2',
            'a0': 'arg0', 'a1': 'arg1', 'a2': 'arg2', 'a3': 'arg3',
            't0': 'temp0', 't1': 'temp1', 't2': 'temp2', 't3': 'temp3',
            't4': 'temp4', 't5': 'temp5', 't6': 'temp6', 't7': 'temp7',
            't8': 'temp8', 't9': 'temp9',
            's0': 'saved0', 's1': 'saved1', 's2': 'saved2', 's3': 'saved3',
            's4': 'saved4', 's5': 'saved5', 's6': 'saved6', 's7': 'saved7',
            'sp': 'sp', 'ra': 'ra', 'zero': '0',
            'at': 'temp_at', 'gp': 'gp', 'fp': 'fp'
        }
        return name_map.get(reg, f'var_{reg}')
        
    def simplify_shifts(self, statements):
        """Simplify common shift patterns"""
        simplified = []
        i = 0
        while i < len(statements):
            # Pattern: x << 16 followed by x >> 16 = sign extend
            if i < len(statements) - 1:
                match1 = re.search(r'(\w+) = (\w+) << 0x10;', statements[i])
                match2 = re.search(r'(\w+) = \1 >> 0x10;', statements[i+1])
                if match1 and match2 and match1.group(1) == match2.group(1):
                    var = match1.group(1)
                    src = match1.group(2)
                    simplified.append(f"{var} = (int16_t){src};")
                    i += 2
                    continue
            simplified.append(statements[i])
            i += 1
        return simplified
        
    def decompile_function(self, func_lines, func_addr):
        """Decompile a single function to highly readable C"""
        output = []
        output.append(f"\n// Function at address 0x{func_addr}")
        output.append(f"void func_0x{func_addr}() {{")
        
        local_vars = set()
        statements = []
        skip_next = False
        last_comment_line = -10
        
        for i, line in enumerate(func_lines):
            if skip_next:
                skip_next = False
                continue
                
            inst_match = re.match(r'([\da-f]+):\s+([\da-f]{8})\s+(\w+)\s*(.*)', line)
            if not inst_match:
                continue
                
            addr = inst_match.group(1)
            opcode = inst_match.group(3)
            operands = inst_match.group(4).strip()
            
            # Skip nops
            if opcode == 'nop':
                continue
                
            # Handle function calls - add comment only occasionally
            if opcode == 'jal':
                target_match = re.match(r'(0x[\da-f]+)', operands)
                if target_match:
                    target = target_match.group(1)
                    # Add address comment only every 10 calls or so
                    if i - last_comment_line > 10:
                        statements.append(f"    func_{target}();  // 0x{addr}")
                        last_comment_line = i
                    else:
                        statements.append(f"    func_{target}();")
                    skip_next = True
                continue
                
            # Handle returns
            if opcode == 'jr' and 'ra' in operands:
                statements.append(f"    return;")
                continue
                
            # Handle loads
            if opcode in ['lw', 'lh', 'lhu', 'lb', 'lbu']:
                match = re.match(r'(\w+),([-\d]+)\((\w+)\)', operands)
                if match:
                    rt, offset, base = match.groups()
                    var_name = self.get_var_name(rt)
                    base_name = 'stack' if base == 'sp' else self.get_var_name(base)
                    local_vars.add(var_name)
                    
                    type_map = {'lw': 'int32_t', 'lh': 'int16_t', 'lhu': 'uint16_t', 
                               'lb': 'int8_t', 'lbu': 'uint8_t'}
                    cast_type = type_map.get(opcode, 'int32_t')
                    
                    statements.append(f"    {var_name} = *({cast_type}*)({base_name} + {offset});")
                continue
                
            # Handle stores
            if opcode in ['sw', 'sh', 'sb']:
                match = re.match(r'(\w+),([-\d]+)\((\w+)\)', operands)
                if match:
                    rt, offset, base = match.groups()
                    var_name = self.get_var_name(rt)
                    base_name = 'stack' if base == 'sp' else self.get_var_name(base)
                    
                    type_map = {'sw': 'int32_t', 'sh': 'int16_t', 'sb': 'int8_t'}
                    cast_type = type_map.get(opcode, 'int32_t')
                    
                    statements.append(f"    *({cast_type}*)({base_name} + {offset}) = {var_name};")
                continue
                
            # Handle arithmetic
            if opcode in ['addu', 'add', 'addiu', 'addi']:
                match = re.match(r'(\w+),(\w+),([-\w]+)', operands)
                if match:
                    rd, rs, rt = match.groups()
                    var_rd = self.get_var_name(rd)
                    var_rs = self.get_var_name(rs)
                    local_vars.add(var_rd)
                    
                    if rt.startswith('-') or rt.isdigit() or rt.startswith('0x'):
                        statements.append(f"    {var_rd} = {var_rs} + {rt};")
                    else:
                        var_rt = self.get_var_name(rt)
                        statements.append(f"    {var_rd} = {var_rs} + {var_rt};")
                continue
                
            if opcode in ['subu', 'sub']:
                match = re.match(r'(\w+),(\w+),(\w+)', operands)
                if match:
                    rd, rs, rt = match.groups()
                    var_rd = self.get_var_name(rd)
                    var_rs = self.get_var_name(rs)
                    var_rt = self.get_var_name(rt)
                    local_vars.add(var_rd)
                    statements.append(f"    {var_rd} = {var_rs} - {var_rt};")
                continue
                
            # Handle logical operations
            if opcode in ['and', 'andi']:
                match = re.match(r'(\w+),(\w+),([-\w]+)', operands)
                if match:
                    rd, rs, rt = match.groups()
                    var_rd = self.get_var_name(rd)
                    var_rs = self.get_var_name(rs)
                    local_vars.add(var_rd)
                    
                    if rt.startswith('0x') or rt.isdigit():
                        statements.append(f"    {var_rd} = {var_rs} & {rt};")
                    else:
                        var_rt = self.get_var_name(rt)
                        statements.append(f"    {var_rd} = {var_rs} & {var_rt};")
                continue
                
            if opcode in ['or', 'ori']:
                match = re.match(r'(\w+),(\w+),([-\w]+)', operands)
                if match:
                    rd, rs, rt = match.groups()
                    var_rd = self.get_var_name(rd)
                    var_rs = self.get_var_name(rs)
                    local_vars.add(var_rd)
                    
                    if rt.startswith('0x') or rt.isdigit():
                        statements.append(f"    {var_rd} = {var_rs} | {rt};")
                    else:
                        var_rt = self.get_var_name(rt)
                        statements.append(f"    {var_rd} = {var_rs} | {var_rt};")
                continue
                
            # Handle shifts
            if opcode in ['sll', 'srl', 'sra']:
                match = re.match(r'(\w+),(\w+),(0x[\da-f]+|\d+)', operands)
                if match:
                    rd, rt, sa = match.groups()
                    var_rd = self.get_var_name(rd)
                    var_rt = self.get_var_name(rt)
                    local_vars.add(var_rd)
                    
                    op = '<<' if opcode == 'sll' else '>>'
                    unsigned = '(uint32_t)' if opcode == 'srl' else ''
                    statements.append(f"    {var_rd} = {unsigned}{var_rt} {op} {sa};")
                continue
                
            # Handle moves
            if opcode == 'move':
                match = re.match(r'(\w+),(\w+)', operands)
                if match:
                    rd, rs = match.groups()
                    var_rd = self.get_var_name(rd)
                    var_rs = self.get_var_name(rs)
                    local_vars.add(var_rd)
                    statements.append(f"    {var_rd} = {var_rs};")
                continue
                
            # Handle li (load immediate)
            if opcode == 'li':
                match = re.match(r'(\w+),([-\dxa-fA-F]+)', operands)
                if match:
                    rd, imm = match.groups()
                    var_rd = self.get_var_name(rd)
                    local_vars.add(var_rd)
                    statements.append(f"    {var_rd} = {imm};")
                continue
                
            # Handle lui (load upper immediate)
            if opcode == 'lui':
                match = re.match(r'(\w+),(0x[\da-f]+|\d+)', operands)
                if match:
                    rt, imm = match.groups()
                    var_rt = self.get_var_name(rt)
                    local_vars.add(var_rt)
                    statements.append(f"    {var_rt} = {imm} << 16;")
                continue
        
        # Simplify shift patterns
        statements = self.simplify_shifts(statements)
        
        # Add local variable declarations (compact format)
        if local_vars:
            # Group by common prefixes
            results = [v for v in local_vars if v.startswith('result')]
            args = [v for v in local_vars if v.startswith('arg')]
            temps = [v for v in local_vars if v.startswith('temp')]
            saved = [v for v in local_vars if v.startswith('saved')]
            others = [v for v in local_vars if v not in results + args + temps + saved and v not in ['sp', 'ra', 'gp', 'fp']]
            
            if results:
                output.append(f"    int32_t {', '.join(sorted(results))};")
            if args:
                output.append(f"    int32_t {', '.join(sorted(args))};")
            if saved:
                output.append(f"    int32_t {', '.join(sorted(saved))};")
            if temps:
                output.append(f"    int32_t {', '.join(sorted(temps))};")
            if others:
                output.append(f"    int32_t {', '.join(sorted(others))};")
            output.append("")
            
        # Add statements
        output.extend(statements)
        output.append("}")
        
        return output
        
    def decompile_file(self, input_file, output_file):
        """Decompile entire MIPS assembly file to fluid readable C"""
        with open(input_file, 'r') as f:
            lines = f.readlines()
            
        # Filter to instruction lines
        inst_lines = []
        for line in lines:
            line = line.strip()
            if re.match(r'[\da-f]+:\s+[\da-f]{8}\s+\w+', line):
                inst_lines.append(line)
                
        # Identify functions
        functions = self.identify_functions(inst_lines)
        
        # Write header
        self.output_lines.append("/*")
        self.output_lines.append(" * Shadow Tower - Highly Readable C Decompilation")
        self.output_lines.append(" * Address Range: 0x80030000 to 0x80040000")
        self.output_lines.append(" * ")
        self.output_lines.append(" * This is a fluid, readable version of the MIPS decompilation.")
        self.output_lines.append(" * Comments are sparse to improve readability.")
        self.output_lines.append(" * Address references are included only where helpful for debugging.")
        self.output_lines.append(" */")
        self.output_lines.append("")
        self.output_lines.append("#include <stdint.h>")
        self.output_lines.append("#include <stdbool.h>")
        self.output_lines.append("")
        self.output_lines.append("// Global state")
        self.output_lines.append("uint8_t* stack;")
        self.output_lines.append("uint32_t gp, sp;")
        self.output_lines.append("")
        
        # Decompile ALL functions
        for func_start, func_end, line_num in functions:
            func_lines = self.analyze_function(inst_lines, func_start, func_end)
            func_output = self.decompile_function(func_lines, func_start)
            self.output_lines.extend(func_output)
            
        # Add summary
        self.output_lines.append(f"\n// Total: {len(functions)} functions decompiled")
            
        # Write output
        with open(output_file, 'w') as f:
            f.write('\n'.join(self.output_lines))
            
        print(f"Fluid decompilation complete!")
        print(f"Input:  {input_file}")
        print(f"Output: {output_file} ({len(self.output_lines)} lines)")
        print(f"Functions: {len(functions)}")

if __name__ == '__main__':
    if len(sys.argv) != 3:
        print("Usage: python3 decompile_mips_to_fluid_c.py <input.asm> <output.c>")
        sys.exit(1)
        
    decompiler = FluidMIPSDecompiler()
    decompiler.decompile_file(sys.argv[1], sys.argv[2])
