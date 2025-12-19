#!/usr/bin/env node

/**
 * MIPS R3000 Disassembler for Shadow Tower ST.EXE
 * 
 * Analyzes the PlayStation executable to find damage calculation code
 * by looking for arithmetic-heavy regions (multiply, add, subtract, divide)
 */

const fs = require('fs');

// MIPS R3000 instruction decoder
class MIPSDisassembler {
    constructor(buffer) {
        this.buffer = buffer;
        this.size = buffer.length;
    }

    // Read 32-bit little-endian
    readU32(offset) {
        return this.buffer.readUInt32LE(offset);
    }

    // Decode MIPS instruction
    decode(offset) {
        if (offset + 4 > this.size) return null;
        
        const instr = this.readU32(offset);
        const opcode = (instr >>> 26) & 0x3F;
        const rs = (instr >>> 21) & 0x1F;
        const rt = (instr >>> 16) & 0x1F;
        const rd = (instr >>> 11) & 0x1F;
        const shamt = (instr >>> 6) & 0x1F;
        const funct = instr & 0x3F;
        const imm = instr & 0xFFFF;
        const immSigned = (imm & 0x8000) ? (imm | 0xFFFF0000) : imm;
        const target = instr & 0x3FFFFFF;

        let type = 'unknown';
        let mnemonic = '???';
        let isArithmetic = false;
        let isMultDiv = false;
        let isLoad = false;
        let isStore = false;

        // R-type instructions (opcode == 0)
        if (opcode === 0x00) {
            type = 'R';
            switch(funct) {
                case 0x00: mnemonic = 'SLL'; break;
                case 0x02: mnemonic = 'SRL'; break;
                case 0x03: mnemonic = 'SRA'; break;
                case 0x04: mnemonic = 'SLLV'; break;
                case 0x06: mnemonic = 'SRLV'; break;
                case 0x07: mnemonic = 'SRAV'; break;
                case 0x08: mnemonic = 'JR'; break;
                case 0x09: mnemonic = 'JALR'; break;
                case 0x0C: mnemonic = 'SYSCALL'; break;
                case 0x0D: mnemonic = 'BREAK'; break;
                case 0x10: mnemonic = 'MFHI'; break;
                case 0x11: mnemonic = 'MTHI'; break;
                case 0x12: mnemonic = 'MFLO'; break;
                case 0x13: mnemonic = 'MTLO'; break;
                case 0x18: mnemonic = 'MULT'; isMultDiv = true; isArithmetic = true; break;
                case 0x19: mnemonic = 'MULTU'; isMultDiv = true; isArithmetic = true; break;
                case 0x1A: mnemonic = 'DIV'; isMultDiv = true; isArithmetic = true; break;
                case 0x1B: mnemonic = 'DIVU'; isMultDiv = true; isArithmetic = true; break;
                case 0x20: mnemonic = 'ADD'; isArithmetic = true; break;
                case 0x21: mnemonic = 'ADDU'; isArithmetic = true; break;
                case 0x22: mnemonic = 'SUB'; isArithmetic = true; break;
                case 0x23: mnemonic = 'SUBU'; isArithmetic = true; break;
                case 0x24: mnemonic = 'AND'; break;
                case 0x25: mnemonic = 'OR'; break;
                case 0x26: mnemonic = 'XOR'; break;
                case 0x27: mnemonic = 'NOR'; break;
                case 0x2A: mnemonic = 'SLT'; break;
                case 0x2B: mnemonic = 'SLTU'; break;
            }
        }
        // I-type and J-type instructions
        else {
            switch(opcode) {
                case 0x01: type = 'I'; mnemonic = 'BCOND'; break;
                case 0x02: type = 'J'; mnemonic = 'J'; break;
                case 0x03: type = 'J'; mnemonic = 'JAL'; break;
                case 0x04: type = 'I'; mnemonic = 'BEQ'; break;
                case 0x05: type = 'I'; mnemonic = 'BNE'; break;
                case 0x06: type = 'I'; mnemonic = 'BLEZ'; break;
                case 0x07: type = 'I'; mnemonic = 'BGTZ'; break;
                case 0x08: type = 'I'; mnemonic = 'ADDI'; isArithmetic = true; break;
                case 0x09: type = 'I'; mnemonic = 'ADDIU'; isArithmetic = true; break;
                case 0x0A: type = 'I'; mnemonic = 'SLTI'; break;
                case 0x0B: type = 'I'; mnemonic = 'SLTIU'; break;
                case 0x0C: type = 'I'; mnemonic = 'ANDI'; break;
                case 0x0D: type = 'I'; mnemonic = 'ORI'; break;
                case 0x0E: type = 'I'; mnemonic = 'XORI'; break;
                case 0x0F: type = 'I'; mnemonic = 'LUI'; break;
                case 0x20: type = 'I'; mnemonic = 'LB'; isLoad = true; break;
                case 0x21: type = 'I'; mnemonic = 'LH'; isLoad = true; break;
                case 0x22: type = 'I'; mnemonic = 'LWL'; isLoad = true; break;
                case 0x23: type = 'I'; mnemonic = 'LW'; isLoad = true; break;
                case 0x24: type = 'I'; mnemonic = 'LBU'; isLoad = true; break;
                case 0x25: type = 'I'; mnemonic = 'LHU'; isLoad = true; break;
                case 0x26: type = 'I'; mnemonic = 'LWR'; isLoad = true; break;
                case 0x28: type = 'I'; mnemonic = 'SB'; isStore = true; break;
                case 0x29: type = 'I'; mnemonic = 'SH'; isStore = true; break;
                case 0x2A: type = 'I'; mnemonic = 'SWL'; isStore = true; break;
                case 0x2B: type = 'I'; mnemonic = 'SW'; isStore = true; break;
                case 0x2E: type = 'I'; mnemonic = 'SWR'; isStore = true; break;
            }
        }

        return {
            offset,
            instr,
            opcode,
            rs, rt, rd, shamt, funct,
            imm, immSigned, target,
            type, mnemonic,
            isArithmetic, isMultDiv, isLoad, isStore
        };
    }

    // Find arithmetic-heavy regions
    findArithmeticRegions(minInstructions = 10) {
        const regions = [];
        let currentRegion = null;

        for (let offset = 0; offset < this.size - 4; offset += 4) {
            const decoded = this.decode(offset);
            if (!decoded) continue;

            if (decoded.isArithmetic || decoded.isMultDiv) {
                if (!currentRegion) {
                    currentRegion = {
                        start: offset,
                        end: offset,
                        instructions: [],
                        arithmeticCount: 0,
                        multDivCount: 0,
                        loadCount: 0,
                        storeCount: 0
                    };
                }
                
                currentRegion.end = offset;
                currentRegion.instructions.push(decoded);
                if (decoded.isArithmetic) currentRegion.arithmeticCount++;
                if (decoded.isMultDiv) currentRegion.multDivCount++;
            } else {
                // Track loads/stores in arithmetic regions
                if (currentRegion && (decoded.isLoad || decoded.isStore)) {
                    currentRegion.end = offset;
                    currentRegion.instructions.push(decoded);
                    if (decoded.isLoad) currentRegion.loadCount++;
                    if (decoded.isStore) currentRegion.storeCount++;
                }
                // End region if we've gone too far without arithmetic
                else if (currentRegion && offset - currentRegion.end > 40) {
                    if (currentRegion.arithmeticCount >= minInstructions) {
                        currentRegion.length = currentRegion.end - currentRegion.start + 4;
                        currentRegion.density = currentRegion.arithmeticCount / (currentRegion.length / 4);
                        regions.push(currentRegion);
                    }
                    currentRegion = null;
                }
            }
        }

        // Sort by arithmetic density and mult/div count
        regions.sort((a, b) => {
            const scoreA = a.multDivCount * 10 + a.arithmeticCount;
            const scoreB = b.multDivCount * 10 + b.arithmeticCount;
            return scoreB - scoreA;
        });

        return regions;
    }

    // Analyze specific region in detail
    analyzeRegion(start, end) {
        const instructions = [];
        const registers = new Set();
        const constants = new Set();

        for (let offset = start; offset <= end && offset < this.size - 4; offset += 4) {
            const decoded = this.decode(offset);
            if (!decoded) continue;

            instructions.push(decoded);

            // Track register usage
            if (decoded.rs) registers.add(`$${decoded.rs}`);
            if (decoded.rt) registers.add(`$${decoded.rt}`);
            if (decoded.rd) registers.add(`$${decoded.rd}`);

            // Track constants (immediates)
            if (decoded.type === 'I' && decoded.imm > 0 && decoded.imm < 1000) {
                constants.add(decoded.imm);
            }
        }

        return {
            instructions,
            registers: Array.from(registers),
            constants: Array.from(constants).sort((a, b) => a - b)
        };
    }

    // Format instruction for display
    formatInstruction(decoded) {
        const addr = `0x${decoded.offset.toString(16).padStart(6, '0')}`;
        const hex = `0x${decoded.instr.toString(16).padStart(8, '0')}`;
        
        let operands = '';
        if (decoded.type === 'R') {
            if (decoded.mnemonic === 'JR' || decoded.mnemonic === 'JALR') {
                operands = `$${decoded.rs}`;
            } else if (decoded.shamt > 0) {
                operands = `$${decoded.rd}, $${decoded.rt}, ${decoded.shamt}`;
            } else {
                operands = `$${decoded.rd}, $${decoded.rs}, $${decoded.rt}`;
            }
        } else if (decoded.type === 'I') {
            if (decoded.isLoad || decoded.isStore) {
                operands = `$${decoded.rt}, ${decoded.immSigned}($${decoded.rs})`;
            } else if (decoded.mnemonic === 'LUI') {
                operands = `$${decoded.rt}, 0x${decoded.imm.toString(16)}`;
            } else {
                operands = `$${decoded.rt}, $${decoded.rs}, ${decoded.immSigned}`;
            }
        } else if (decoded.type === 'J') {
            operands = `0x${(decoded.target * 4).toString(16)}`;
        }

        return `${addr}: ${hex}  ${decoded.mnemonic.padEnd(8)} ${operands}`;
    }
}

// Main analysis
function main() {
    const exePath = process.argv[2] || './iso-dump/ST.EXE';
    
    console.log(`\n=== MIPS Disassembler for Shadow Tower ===`);
    console.log(`Analyzing: ${exePath}\n`);

    const buffer = fs.readFileSync(exePath);
    const disasm = new MIPSDisassembler(buffer);

    console.log(`File size: ${buffer.length} bytes (0x${buffer.length.toString(16)})\n`);

    // Find arithmetic-heavy regions
    console.log(`Searching for arithmetic-heavy code regions...`);
    const regions = disasm.findArithmeticRegions(5);

    console.log(`\nFound ${regions.length} arithmetic-heavy regions\n`);
    console.log(`Top 20 regions (sorted by mult/div and arithmetic operations):\n`);
    console.log(`Rank  Offset Range          Length  Arith  Mult/Div  Loads  Stores  Score`);
    console.log(`----  --------------------  ------  -----  --------  -----  ------  -----`);

    const topRegions = regions.slice(0, 20);
    topRegions.forEach((region, idx) => {
        const startHex = `0x${region.start.toString(16).padStart(6, '0')}`;
        const endHex = `0x${region.end.toString(16).padStart(6, '0')}`;
        const score = region.multDivCount * 10 + region.arithmeticCount;
        
        console.log(
            `${(idx + 1).toString().padStart(2)}    ${startHex}-${endHex}  ` +
            `${region.length.toString().padStart(6)}  ` +
            `${region.arithmeticCount.toString().padStart(5)}  ` +
            `${region.multDivCount.toString().padStart(8)}  ` +
            `${region.loadCount.toString().padStart(5)}  ` +
            `${region.storeCount.toString().padStart(6)}  ` +
            `${score.toString().padStart(5)}`
        );
    });

    // Detailed analysis of top regions
    console.log(`\n\n=== Detailed Analysis of Top 5 Damage Calculation Candidates ===\n`);

    topRegions.slice(0, 5).forEach((region, idx) => {
        console.log(`\n--- Region #${idx + 1} ---`);
        console.log(`Offset: 0x${region.start.toString(16)} - 0x${region.end.toString(16)}`);
        console.log(`Arithmetic ops: ${region.arithmeticCount}, Mult/Div: ${region.multDivCount}`);
        
        const analysis = disasm.analyzeRegion(region.start, region.end);
        console.log(`Constants found: ${analysis.constants.join(', ')}`);
        console.log(`\nDisassembly:`);
        
        analysis.instructions.slice(0, 30).forEach(instr => {
            const marker = (instr.isMultDiv ? ' **MULT/DIV**' : instr.isArithmetic ? ' *ARITH*' : '');
            console.log(disasm.formatInstruction(instr) + marker);
        });
        
        if (analysis.instructions.length > 30) {
            console.log(`  ... (${analysis.instructions.length - 30} more instructions)`);
        }
    });

    // Generate experimental patches for top regions
    console.log(`\n\n=== Generating Experimental Patches ===\n`);
    
    const experiments = [];
    topRegions.slice(0, 10).forEach((region, idx) => {
        experiments.push({
            id: idx + 1,
            start: region.start,
            end: region.end,
            description: `High arithmetic density region (${region.multDivCount} mult/div, ${region.arithmeticCount} arithmetic)`,
            targetValues: region.instructions
                .filter(i => i.type === 'I' && i.imm > 0 && i.imm < 256)
                .map(i => i.imm)
                .filter((v, i, arr) => arr.indexOf(v) === i) // unique
                .sort((a, b) => a - b)
        });
    });

    // Save analysis results
    const reportPath = './mips_analysis_report.json';
    fs.writeFileSync(reportPath, JSON.stringify({
        file: exePath,
        size: buffer.length,
        topRegions: topRegions.map(r => ({
            start: `0x${r.start.toString(16)}`,
            end: `0x${r.end.toString(16)}`,
            arithmeticCount: r.arithmeticCount,
            multDivCount: r.multDivCount,
            loadCount: r.loadCount,
            storeCount: r.storeCount,
            score: r.multDivCount * 10 + r.arithmeticCount
        })),
        experiments
    }, null, 2));

    console.log(`\nFull analysis saved to: ${reportPath}`);
    console.log(`\nRecommendation: Focus patches on regions with high mult/div count.`);
    console.log(`These likely contain damage calculations.\n`);

    return experiments;
}

if (require.main === module) {
    main();
}

module.exports = { MIPSDisassembler };
