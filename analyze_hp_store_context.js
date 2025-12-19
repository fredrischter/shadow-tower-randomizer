#!/usr/bin/env node

/**
 * Analyze context around HP store instructions at 0x198f2a
 */

const fs = require('fs');

const exePath = process.argv[2] || './iso-dump/ST.EXE';
const exeData = fs.readFileSync(exePath);

// HP store locations found
const hpStoreOffsets = [
    0x02c77c,  // SH $s0, 0x8f2a($v0)
    0x05e96c,  // SH $zero, 0x8f2a($at)
    0x05fe78,  // SH $zero, 0x8f2a($at)
    0x06154c   // SH $zero, 0x8f2a($at)
];

// Arithmetic regions from MIPS analysis
const arithmeticRegions = [
    { start: 0x37274, end: 0x3dd58, multDivCount: 198, name: "Region #1 (TOP CANDIDATE)" },
    { start: 0x79f0, end: 0x16358, multDivCount: 95, name: "Region #2" },
    { start: 0x40148, end: 0x4e790, multDivCount: 93, name: "Region #3" },
];

function getRegName(reg) {
    const names = [
        'zero', 'at', 'v0', 'v1', 'a0', 'a1', 'a2', 'a3',
        't0', 't1', 't2', 't3', 't4', 't5', 't6', 't7',
        's0', 's1', 's2', 's3', 's4', 's5', 's6', 's7',
        't8', 't9', 'k0', 'k1', 'gp', 'sp', 'fp', 'ra'
    ];
    return `$${names[reg]}`;
}

function decodeInstruction(offset) {
    const instr = exeData.readUInt32LE(offset);
    const opcode = (instr >> 26) & 0x3F;
    const rs = (instr >> 21) & 0x1F;
    const rt = (instr >> 16) & 0x1F;
    const rd = (instr >> 11) & 0x1F;
    const shamt = (instr >> 6) & 0x1F;
    const funct = instr & 0x3F;
    const immediate = instr & 0xFFFF;
    const signedImm = immediate > 0x7FFF ? immediate - 0x10000 : immediate;
    const target = instr & 0x3FFFFFF;
    
    return { opcode, rs, rt, rd, shamt, funct, immediate, signedImm, target, raw: instr };
}

function disassembleInstruction(offset) {
    const instr = decodeInstruction(offset);
    const op = instr.opcode;
    
    // R-type instructions (opcode 0x00)
    if (op === 0x00) {
        const functNames = {
            0x00: 'SLL', 0x02: 'SRL', 0x03: 'SRA', 0x04: 'SLLV', 0x06: 'SRLV', 0x07: 'SRAV',
            0x08: 'JR', 0x09: 'JALR', 0x0C: 'SYSCALL', 0x0D: 'BREAK',
            0x10: 'MFHI', 0x11: 'MTHI', 0x12: 'MFLO', 0x13: 'MTLO',
            0x18: 'MULT', 0x19: 'MULTU', 0x1A: 'DIV', 0x1B: 'DIVU',
            0x20: 'ADD', 0x21: 'ADDU', 0x22: 'SUB', 0x23: 'SUBU',
            0x24: 'AND', 0x25: 'OR', 0x26: 'XOR', 0x27: 'NOR',
            0x2A: 'SLT', 0x2B: 'SLTU'
        };
        const fname = functNames[instr.funct] || 'UNKNOWN';
        
        if (instr.funct === 0x18 || instr.funct === 0x19) { // MULT/MULTU
            return `${fname} ${getRegName(instr.rs)}, ${getRegName(instr.rt)}`;
        } else if (instr.funct === 0x1A || instr.funct === 0x1B) { // DIV/DIVU
            return `${fname} ${getRegName(instr.rs)}, ${getRegName(instr.rt)}`;
        } else if (instr.funct === 0x10 || instr.funct === 0x12) { // MFHI/MFLO
            return `${fname} ${getRegName(instr.rd)}`;
        } else if (instr.funct >= 0x20 && instr.funct <= 0x27) { // ALU ops
            return `${fname} ${getRegName(instr.rd)}, ${getRegName(instr.rs)}, ${getRegName(instr.rt)}`;
        } else if (instr.funct === 0x00) { // SLL
            return `${fname} ${getRegName(instr.rd)}, ${getRegName(instr.rt)}, ${instr.shamt}`;
        }
        return fname;
    }
    
    // I-type and J-type instructions
    const opcodeNames = {
        0x02: 'J', 0x03: 'JAL',
        0x04: 'BEQ', 0x05: 'BNE', 0x06: 'BLEZ', 0x07: 'BGTZ',
        0x08: 'ADDI', 0x09: 'ADDIU', 0x0A: 'SLTI', 0x0B: 'SLTIU',
        0x0C: 'ANDI', 0x0D: 'ORI', 0x0E: 'XORI', 0x0F: 'LUI',
        0x20: 'LB', 0x21: 'LH', 0x23: 'LW', 0x24: 'LBU', 0x25: 'LHU',
        0x28: 'SB', 0x29: 'SH', 0x2B: 'SW'
    };
    
    const opname = opcodeNames[op] || 'UNKNOWN';
    
    if (op >= 0x20 && op <= 0x26) { // Load instructions
        return `${opname} ${getRegName(instr.rt)}, 0x${instr.immediate.toString(16)}(${getRegName(instr.rs)})`;
    } else if (op >= 0x28 && op <= 0x2E) { // Store instructions
        return `${opname} ${getRegName(instr.rt)}, 0x${instr.immediate.toString(16)}(${getRegName(instr.rs)})`;
    } else if (op === 0x0F) { // LUI
        return `${opname} ${getRegName(instr.rt)}, 0x${instr.immediate.toString(16)}`;
    } else if (op >= 0x08 && op <= 0x0E) { // Immediate ALU
        return `${opname} ${getRegName(instr.rt)}, ${getRegName(instr.rs)}, 0x${instr.immediate.toString(16)}`;
    } else if (op >= 0x04 && op <= 0x07) { // Branches
        return `${opname} ${getRegName(instr.rs)}, ${getRegName(instr.rt)}, 0x${instr.signedImm.toString(16)}`;
    }
    
    return opname;
}

console.log('=== ANALYZING HP STORE LOCATIONS ===\n');
console.log('Target address: 0x198f2a (user-identified HP storage position)\n');

hpStoreOffsets.forEach((offset, idx) => {
    console.log(`\n--- HP Store #${idx + 1}: Offset 0x${offset.toString(16)} ---`);
    
    // Check if in any arithmetic region
    let inRegion = null;
    arithmeticRegions.forEach(region => {
        if (offset >= region.start && offset <= region.end) {
            inRegion = region;
        }
    });
    
    if (inRegion) {
        console.log(`✓ INSIDE ${inRegion.name}`);
        console.log(`  Region: 0x${inRegion.start.toString(16)}-0x${inRegion.end.toString(16)}`);
        console.log(`  Mult/Div count: ${inRegion.multDivCount}`);
    } else {
        console.log(`✗ NOT in any identified arithmetic region`);
    }
    
    console.log(`\nContext (20 instructions before and after):\n`);
    
    for (let i = -20; i <= 20; i++) {
        const contextOffset = offset + (i * 4);
        if (contextOffset >= 0 && contextOffset < exeData.length - 4) {
            const marker = (i === 0) ? '>>> ' : '    ';
            const disasm = disassembleInstruction(contextOffset);
            console.log(`${marker}0x${contextOffset.toString(16).padStart(6, '0')}: ${disasm}`);
        }
    }
});

console.log('\n\n=== SUMMARY ===');
console.log(`Found ${hpStoreOffsets.length} HP store locations at offset 0x8f2a\n`);

hpStoreOffsets.forEach((offset, idx) => {
    let inRegion = null;
    arithmeticRegions.forEach(region => {
        if (offset >= region.start && offset <= region.end) {
            inRegion = region;
        }
    });
    
    console.log(`HP Store #${idx + 1} (0x${offset.toString(16)}): ${inRegion ? `✓ IN ${inRegion.name}` : '✗ Outside arithmetic regions'}`);
});

console.log('\n=== RECOMMENDATION ===');
const storesInRegions = hpStoreOffsets.filter(offset => {
    return arithmeticRegions.some(region => offset >= region.start && offset <= region.end);
});

if (storesInRegions.length > 0) {
    console.log('✓ Some HP stores ARE in arithmetic-heavy regions!');
    console.log('  Current experiments should target these regions.');
    console.log('  These are likely damage calculation -> HP update sequences.');
} else {
    console.log('✗ HP stores are NOT in arithmetic-heavy regions.');
    console.log('  HP stores might be in separate update/UI code.');
    console.log('  Need to target HP store regions specifically for experiments.');
    console.log('\nSuggested new experiment regions:');
    hpStoreOffsets.forEach((offset, idx) => {
        const start = Math.max(0, offset - 2000);
        const end = Math.min(exeData.length, offset + 2000);
        console.log(`  ${idx + 1}. Region around 0x${offset.toString(16)}: 0x${start.toString(16)}-0x${end.toString(16)}`);
    });
}
