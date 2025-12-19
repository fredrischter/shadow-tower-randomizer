#!/usr/bin/env node

/**
 * Find MIPS store instructions that write to address 0x198f2a (HP storage)
 */

const fs = require('fs');

const exePath = process.argv[2] || './iso-dump/ST.EXE';
const targetAddress = 0x198f2a;

console.log(`Analyzing ${exePath} for stores to address 0x${targetAddress.toString(16)}...\n`);

const exeData = fs.readFileSync(exePath);

// MIPS store instruction opcodes
const STORE_OPCODES = {
    0x28: 'SB',   // Store Byte
    0x29: 'SH',   // Store Halfword
    0x2B: 'SW',   // Store Word
    0x2A: 'SWL',  // Store Word Left
    0x2E: 'SWR',  // Store Word Right
    0x38: 'SWC0', // Store Word from Coprocessor 0
    0x39: 'SWC1', // Store Word from Coprocessor 1
    0x3A: 'SWC2', // Store Word from Coprocessor 2
    0x3B: 'SWC3', // Store Word from Coprocessor 3
};

function decodeInstruction(offset) {
    const instr = exeData.readUInt32LE(offset);
    const opcode = (instr >> 26) & 0x3F;
    const rs = (instr >> 21) & 0x1F;
    const rt = (instr >> 16) & 0x1F;
    const immediate = instr & 0xFFFF;
    const signedImm = immediate > 0x7FFF ? immediate - 0x10000 : immediate;
    
    return { opcode, rs, rt, immediate, signedImm, raw: instr };
}

function getRegName(reg) {
    const names = [
        'zero', 'at', 'v0', 'v1', 'a0', 'a1', 'a2', 'a3',
        't0', 't1', 't2', 't3', 't4', 't5', 't6', 't7',
        's0', 's1', 's2', 's3', 's4', 's5', 's6', 's7',
        't8', 't9', 'k0', 'k1', 'gp', 'sp', 'fp', 'ra'
    ];
    return `$${names[reg]}`;
}

// Search for store instructions
const matches = [];

for (let offset = 0; offset < exeData.length - 4; offset += 4) {
    const instr = decodeInstruction(offset);
    
    if (STORE_OPCODES[instr.opcode]) {
        const instrName = STORE_OPCODES[instr.opcode];
        
        // Store instructions: OPCODE rt, immediate(rs)
        // Effective address = [rs] + immediate
        
        // Check if immediate offset matches our target
        // Common patterns:
        // 1. Direct: SW $rt, 0x8f2a($gp) where $gp = 0x190000
        // 2. LUI + offset: LUI $at, 0x0019; SW $rt, 0x8f2a($at)
        
        // Check if offset matches lower 16 bits of target
        const targetLower = targetAddress & 0xFFFF;
        const targetUpper = (targetAddress >> 16) & 0xFFFF;
        
        if (instr.immediate === targetLower || instr.signedImm === (targetLower > 0x7FFF ? targetLower - 0x10000 : targetLower)) {
            // Found a store with matching offset
            matches.push({
                offset: offset,
                address: 0x80010000 + offset, // PlayStation RAM base
                instruction: instrName,
                rt: getRegName(instr.rt),
                rs: getRegName(instr.rs),
                immediate: `0x${instr.immediate.toString(16)}`,
                signedImm: instr.signedImm,
                raw: `0x${instr.raw.toString(16).padStart(8, '0')}`
            });
        }
    }
}

console.log(`Found ${matches.length} store instructions with offset 0x${(targetAddress & 0xFFFF).toString(16)}:\n`);

matches.forEach(m => {
    console.log(`Offset: 0x${m.offset.toString(16).padStart(6, '0')} | RAM: 0x${m.address.toString(16)}`);
    console.log(`  ${m.instruction} ${m.rt}, ${m.immediate}(${m.rs})`);
    console.log(`  Raw: ${m.raw}`);
    console.log('');
});

// Now look for LUI instructions that load the upper part
const targetUpper = (targetAddress >> 16) & 0xFFFF;
console.log(`\nSearching for LUI instructions loading upper part (0x${targetUpper.toString(16)})...\n`);

const luiMatches = [];

for (let offset = 0; offset < exeData.length - 4; offset += 4) {
    const instr = decodeInstruction(offset);
    
    // LUI opcode is 0x0F
    if (instr.opcode === 0x0F) {
        // LUI rt, immediate
        const rt = instr.rt;
        const immediate = instr.immediate;
        
        // Check if immediate matches upper 16 bits of target
        if (immediate === targetUpper) {
            luiMatches.push({
                offset: offset,
                address: 0x80010000 + offset,
                rt: getRegName(rt),
                immediate: `0x${immediate.toString(16)}`,
                raw: `0x${instr.raw.toString(16).padStart(8, '0')}`
            });
        }
    }
}

console.log(`Found ${luiMatches.length} LUI instructions loading 0x${targetUpper.toString(16)}:\n`);

luiMatches.forEach(m => {
    console.log(`Offset: 0x${m.offset.toString(16).padStart(6, '0')} | RAM: 0x${m.address.toString(16)}`);
    console.log(`  LUI ${m.rt}, ${m.immediate}`);
    console.log(`  Raw: ${m.raw}`);
    
    // Look ahead for nearby store instructions using this register
    const luiOffset = parseInt(m.offset);
    for (let i = 1; i <= 10; i++) {
        const nextOffset = luiOffset + (i * 4);
        if (nextOffset < exeData.length - 4) {
            const nextInstr = decodeInstruction(nextOffset);
            if (STORE_OPCODES[nextInstr.opcode]) {
                const instrName = STORE_OPCODES[nextInstr.opcode];
                console.log(`  -> +${i*4}: ${instrName} ${getRegName(nextInstr.rt)}, 0x${nextInstr.immediate.toString(16)}(${getRegName(nextInstr.rs)})`);
                
                // Check if this store uses the LUI register and has the right offset
                if (getRegName(nextInstr.rs) === m.rt && nextInstr.immediate === (targetAddress & 0xFFFF)) {
                    console.log(`     *** MATCHES TARGET ADDRESS 0x${targetAddress.toString(16)} ***`);
                }
            }
        }
    }
    console.log('');
});

// Summary
console.log('\n=== SUMMARY ===');
console.log(`Target address: 0x${targetAddress.toString(16)}`);
console.log(`Direct offset matches: ${matches.length}`);
console.log(`LUI upper part matches: ${luiMatches.length}`);

if (matches.length > 0 || luiMatches.length > 0) {
    console.log('\nThese locations are candidates for HP storage operations.');
    console.log('Regions containing these instructions should be targeted for experiments.');
} else {
    console.log('\nNo direct matches found. The address might be computed differently.');
    console.log('Consider searching for:');
    console.log('  - Computed addresses (base + offset calculations)');
    console.log('  - Register-based addressing');
    console.log('  - Indirect memory access patterns');
}
