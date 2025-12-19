#!/usr/bin/env node

/**
 * Generate 20 aggressive experimental EXE patches
 * ALL experiments reduce magic damage to 1/4
 * VARIETY is in WHERE the patches are applied (different code locations/patterns)
 */

const fs = require('fs');
const path = require('path');

const SOURCE_EXE = 'iso-dump/ST.EXE';
const OUTPUT_DIR = 'experimental-exe-patches';

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
}

// Read original EXE
const originalBuffer = fs.readFileSync(SOURCE_EXE);

console.log('╔══════════════════════════════════════════════════════════════╗');
console.log('║  Generating 20 Experimental EXE Patches                     ║');
console.log('║  All reduce magic damage to 1/4                              ║');
console.log('║  Variety in WHERE patches are applied                        ║');
console.log('╚══════════════════════════════════════════════════════════════╝');
console.log();
console.log(`Source: ${SOURCE_EXE} (${originalBuffer.length} bytes)`);
console.log(`Output: ${OUTPUT_DIR}/`);
console.log();

const experiments = [];

/**
 * Helper: Apply 1/4 damage (divide by 4 = shift right by 2)
 */
function applyQuarterDamage(value) {
    return Math.max(1, Math.floor(value / 4));
}

/**
 * EXPERIMENT 1: Modify damage constants in first 32KB
 */
function experiment01() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    // Target damage-like values (4-255) in first 32KB
    for (let i = 0; i < Math.min(0x8000, buffer.length - 4); i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        if ((instruction & 0xFC000000) === 0x24000000) {
            const immediate = instruction & 0xFFFF;
            if (immediate >= 4 && immediate <= 255) {
                const newImmediate = applyQuarterDamage(immediate);
                const newInstruction = (instruction & 0xFFFF0000) | newImmediate;
                buffer.writeUInt32LE(newInstruction, i);
                changes++;
            }
        }
    }
    
    return { buffer, changes, desc: 'Quarter damage constants in first 32KB' };
}

/**
 * EXPERIMENT 2: Modify damage constants in 32KB-64KB range
 */
function experiment02() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = 0x8000; i < Math.min(0x10000, buffer.length - 4); i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        if ((instruction & 0xFC000000) === 0x24000000) {
            const immediate = instruction & 0xFFFF;
            if (immediate >= 4 && immediate <= 255) {
                const newImmediate = applyQuarterDamage(immediate);
                const newInstruction = (instruction & 0xFFFF0000) | newImmediate;
                buffer.writeUInt32LE(newInstruction, i);
                changes++;
            }
        }
    }
    
    return { buffer, changes, desc: 'Quarter damage in 32KB-64KB range' };
}

/**
 * EXPERIMENT 3: Modify damage constants in 64KB-128KB range
 */
function experiment03() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = 0x10000; i < Math.min(0x20000, buffer.length - 4); i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        if ((instruction & 0xFC000000) === 0x24000000) {
            const immediate = instruction & 0xFFFF;
            if (immediate >= 4 && immediate <= 255) {
                const newImmediate = applyQuarterDamage(immediate);
                const newInstruction = (instruction & 0xFFFF0000) | newImmediate;
                buffer.writeUInt32LE(newInstruction, i);
                changes++;
            }
        }
    }
    
    return { buffer, changes, desc: 'Quarter damage in 64KB-128KB range' };
}

/**
 * EXPERIMENT 4: Modify ALL damage constants (broad approach)
 */
function experiment04() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = 0; i < buffer.length - 4; i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        if ((instruction & 0xFC000000) === 0x24000000) {
            const immediate = instruction & 0xFFFF;
            if (immediate >= 4 && immediate <= 255) {
                const newImmediate = applyQuarterDamage(immediate);
                const newInstruction = (instruction & 0xFFFF0000) | newImmediate;
                buffer.writeUInt32LE(newInstruction, i);
                changes++;
            }
        }
    }
    
    return { buffer, changes, desc: 'Quarter ALL damage constants (entire EXE)' };
}

/**
 * EXPERIMENT 5: Modify damage via shift operations (SLL increase by 2)
 */
function experiment05() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = 0; i < buffer.length - 4; i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        // SRL (shift right) - used for division
        if ((instruction & 0xFC00003F) === 0x00000002) {
            const shamt = (instruction >> 6) & 0x1F;
            // Add 2 to shift amount (divide by 4 more)
            const newShamt = Math.min(31, shamt + 2);
            const newInstruction = (instruction & 0xFFFFF83F) | (newShamt << 6);
            buffer.writeUInt32LE(newInstruction, i);
            changes++;
        }
    }
    
    return { buffer, changes, desc: 'Quarter damage via shift operations (+2 to SRL)' };
}

/**
 * EXPERIMENT 6: Modify LUI (load upper immediate) values
 */
function experiment06() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = 0; i < buffer.length - 4; i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        if ((instruction & 0xFC000000) === 0x3C000000) {
            const immediate = instruction & 0xFFFF;
            if (immediate > 0 && immediate < 0x1000) {
                const newImmediate = applyQuarterDamage(immediate);
                const newInstruction = (instruction & 0xFFFF0000) | newImmediate;
                buffer.writeUInt32LE(newInstruction, i);
                changes++;
            }
        }
    }
    
    return { buffer, changes, desc: 'Quarter damage via LUI instructions' };
}

/**
 * EXPERIMENT 7: Modify ADDIU with damage-like patterns
 */
function experiment07() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    // Specific damage values we think might be magic damage
    const magicDamageValues = [10, 12, 15, 16, 20, 24, 25, 30, 32, 40, 48, 50, 60, 64, 80, 100, 120, 128];
    
    for (let i = 0; i < buffer.length - 4; i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        if ((instruction & 0xFC000000) === 0x24000000) {
            const immediate = instruction & 0xFFFF;
            if (magicDamageValues.includes(immediate)) {
                const newImmediate = applyQuarterDamage(immediate);
                const newInstruction = (instruction & 0xFFFF0000) | newImmediate;
                buffer.writeUInt32LE(newInstruction, i);
                changes++;
            }
        }
    }
    
    return { buffer, changes, desc: 'Quarter specific magic damage values' };
}

/**
 * EXPERIMENT 8: Modify via ORI instructions
 */
function experiment08() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = 0; i < buffer.length - 4; i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        // ORI instruction (OR immediate)
        if ((instruction & 0xFC000000) === 0x34000000) {
            const immediate = instruction & 0xFFFF;
            if (immediate >= 4 && immediate <= 255) {
                const newImmediate = applyQuarterDamage(immediate);
                const newInstruction = (instruction & 0xFFFF0000) | newImmediate;
                buffer.writeUInt32LE(newInstruction, i);
                changes++;
            }
        }
    }
    
    return { buffer, changes, desc: 'Quarter damage via ORI instructions' };
}

/**
 * EXPERIMENT 9: Modify via ANDI instructions
 */
function experiment09() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = 0; i < buffer.length - 4; i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        // ANDI instruction (AND immediate)
        if ((instruction & 0xFC000000) === 0x30000000) {
            const immediate = instruction & 0xFFFF;
            if (immediate >= 4 && immediate <= 255) {
                const newImmediate = applyQuarterDamage(immediate);
                const newInstruction = (instruction & 0xFFFF0000) | newImmediate;
                buffer.writeUInt32LE(newInstruction, i);
                changes++;
            }
        }
    }
    
    return { buffer, changes, desc: 'Quarter damage via ANDI instructions' };
}

/**
 * EXPERIMENT 10: Modify raw byte values in first 64KB
 */
function experiment10() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = 0; i < Math.min(0x10000, buffer.length); i++) {
        const val = buffer[i];
        if (val >= 8 && val <= 200) {
            buffer[i] = applyQuarterDamage(val);
            changes++;
        }
    }
    
    return { buffer, changes, desc: 'Quarter raw bytes (8-200) in first 64KB' };
}

/**
 * EXPERIMENT 11: Modify 16-bit damage values
 */
function experiment11() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = 0; i < buffer.length - 2; i += 2) {
        const value = buffer.readUInt16LE(i);
        if (value >= 4 && value <= 500) {
            const newValue = applyQuarterDamage(value);
            buffer.writeUInt16LE(newValue, i);
            changes++;
        }
    }
    
    return { buffer, changes, desc: 'Quarter 16-bit damage values (4-500)' };
}

/**
 * EXPERIMENT 12: Modify SLTI comparison thresholds (damage checks)
 */
function experiment12() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = 0; i < buffer.length - 4; i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        // SLTI/SLTIU
        if ((instruction & 0xFC000000) === 0x28000000 || 
            (instruction & 0xFC000000) === 0x2C000000) {
            const immediate = instruction & 0xFFFF;
            if (immediate >= 4 && immediate <= 255) {
                const newImmediate = applyQuarterDamage(immediate);
                const newInstruction = (instruction & 0xFFFF0000) | newImmediate;
                buffer.writeUInt32LE(newInstruction, i);
                changes++;
            }
        }
    }
    
    return { buffer, changes, desc: 'Quarter damage comparison thresholds (SLTI)' };
}

/**
 * EXPERIMENT 13: Modify via branch delay slots
 */
function experiment13() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = 0; i < buffer.length - 8; i += 4) {
        const instruction = buffer.readUInt32LE(i);
        const nextInstr = buffer.readUInt32LE(i + 4);
        
        // If branch/jump followed by immediate load
        if ((instruction & 0xFC000000) === 0x10000000) {
            if ((nextInstr & 0xFC000000) === 0x24000000) {
                const immediate = nextInstr & 0xFFFF;
                if (immediate >= 4 && immediate <= 255) {
                    const newImm = applyQuarterDamage(immediate);
                    const newInstr = (nextInstr & 0xFFFF0000) | newImm;
                    buffer.writeUInt32LE(newInstr, i + 4);
                    changes++;
                }
            }
        }
    }
    
    return { buffer, changes, desc: 'Quarter damage in branch delay slots' };
}

/**
 * EXPERIMENT 14: Modify memory store operations (SW/SH)
 */
function experiment14() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    // Look for store word (SW) with small offsets (potential damage stores)
    for (let i = 0; i < buffer.length - 4; i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        // SW instruction
        if ((instruction & 0xFC000000) === 0xAC000000) {
            const offset = instruction & 0xFFFF;
            if (offset >= 0 && offset <= 100) {
                // Look ahead for potential damage value in next instruction
                if (i + 4 < buffer.length - 4) {
                    const nextInstr = buffer.readUInt32LE(i + 4);
                    if ((nextInstr & 0xFC000000) === 0x24000000) {
                        const immediate = nextInstr & 0xFFFF;
                        if (immediate >= 4 && immediate <= 255) {
                            const newImm = applyQuarterDamage(immediate);
                            const newInstr = (nextInstr & 0xFFFF0000) | newImm;
                            buffer.writeUInt32LE(newInstr, i + 4);
                            changes++;
                        }
                    }
                }
            }
        }
    }
    
    return { buffer, changes, desc: 'Quarter damage before store operations' };
}

/**
 * EXPERIMENT 15: Modify high-range values (100-255)
 */
function experiment15() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = 0; i < buffer.length - 4; i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        if ((instruction & 0xFC000000) === 0x24000000) {
            const immediate = instruction & 0xFFFF;
            if (immediate >= 100 && immediate <= 255) {
                const newImmediate = applyQuarterDamage(immediate);
                const newInstruction = (instruction & 0xFFFF0000) | newImmediate;
                buffer.writeUInt32LE(newInstruction, i);
                changes++;
            }
        }
    }
    
    return { buffer, changes, desc: 'Quarter high damage values (100-255)' };
}

/**
 * EXPERIMENT 16: Modify mid-range values (30-100)
 */
function experiment16() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = 0; i < buffer.length - 4; i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        if ((instruction & 0xFC000000) === 0x24000000) {
            const immediate = instruction & 0xFFFF;
            if (immediate >= 30 && immediate <= 100) {
                const newImmediate = applyQuarterDamage(immediate);
                const newInstruction = (instruction & 0xFFFF0000) | newImmediate;
                buffer.writeUInt32LE(newInstruction, i);
                changes++;
            }
        }
    }
    
    return { buffer, changes, desc: 'Quarter mid damage values (30-100)' };
}

/**
 * EXPERIMENT 17: Modify low-range values (4-30)
 */
function experiment17() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = 0; i < buffer.length - 4; i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        if ((instruction & 0xFC000000) === 0x24000000) {
            const immediate = instruction & 0xFFFF;
            if (immediate >= 4 && immediate <= 30) {
                const newImmediate = applyQuarterDamage(immediate);
                const newInstruction = (instruction & 0xFFFF0000) | newImmediate;
                buffer.writeUInt32LE(newInstruction, i);
                changes++;
            }
        }
    }
    
    return { buffer, changes, desc: 'Quarter low damage values (4-30)' };
}

/**
 * EXPERIMENT 18: Modify via multiply operations context
 */
function experiment18() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = 0; i < buffer.length - 12; i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        // Look for MULT/MULTU followed by loads
        if ((instruction & 0xFC0007FF) === 0x00000018 || 
            (instruction & 0xFC0007FF) === 0x00000019) {
            // Check next few instructions for immediate loads
            for (let j = 1; j <= 3; j++) {
                if (i + j*4 < buffer.length - 4) {
                    const nextInstr = buffer.readUInt32LE(i + j*4);
                    if ((nextInstr & 0xFC000000) === 0x24000000) {
                        const immediate = nextInstr & 0xFFFF;
                        if (immediate >= 4 && immediate <= 255) {
                            const newImm = applyQuarterDamage(immediate);
                            const newInstr = (nextInstr & 0xFFFF0000) | newImm;
                            buffer.writeUInt32LE(newInstr, i + j*4);
                            changes++;
                        }
                    }
                }
            }
        }
    }
    
    return { buffer, changes, desc: 'Quarter damage near multiply operations' };
}

/**
 * EXPERIMENT 19: Modify alternating bytes pattern
 */
function experiment19() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    // Modify every other aligned 4-byte group
    for (let i = 0; i < buffer.length - 4; i += 8) {
        const instruction = buffer.readUInt32LE(i);
        
        if ((instruction & 0xFC000000) === 0x24000000) {
            const immediate = instruction & 0xFFFF;
            if (immediate >= 4 && immediate <= 255) {
                const newImmediate = applyQuarterDamage(immediate);
                const newInstruction = (instruction & 0xFFFF0000) | newImmediate;
                buffer.writeUInt32LE(newInstruction, i);
                changes++;
            }
        }
    }
    
    return { buffer, changes, desc: 'Quarter damage in alternating pattern' };
}

/**
 * EXPERIMENT 20: Modify last 128KB of EXE
 */
function experiment20() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    const startOffset = Math.max(0, buffer.length - 0x20000);
    
    for (let i = startOffset; i < buffer.length - 4; i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        if ((instruction & 0xFC000000) === 0x24000000) {
            const immediate = instruction & 0xFFFF;
            if (immediate >= 4 && immediate <= 255) {
                const newImmediate = applyQuarterDamage(immediate);
                const newInstruction = (instruction & 0xFFFF0000) | newImmediate;
                buffer.writeUInt32LE(newInstruction, i);
                changes++;
            }
        }
    }
    
    return { buffer, changes, desc: 'Quarter damage in last 128KB' };
}

// Run all experiments
experiments.push(experiment01());
experiments.push(experiment02());
experiments.push(experiment03());
experiments.push(experiment04());
experiments.push(experiment05());
experiments.push(experiment06());
experiments.push(experiment07());
experiments.push(experiment08());
experiments.push(experiment09());
experiments.push(experiment10());
experiments.push(experiment11());
experiments.push(experiment12());
experiments.push(experiment13());
experiments.push(experiment14());
experiments.push(experiment15());
experiments.push(experiment16());
experiments.push(experiment17());
experiments.push(experiment18());
experiments.push(experiment19());
experiments.push(experiment20());

// Save all experiments
console.log('Generating experimental patches:');
console.log('═'.repeat(70));
console.log('ALL experiments reduce magic damage to 1/4');
console.log('Variety is in WHERE patches are applied');
console.log('═'.repeat(70));

experiments.forEach((exp, index) => {
    const num = String(index + 1).padStart(2, '0');
    const filename = `ST-experiment-${num}.EXE`;
    const filepath = path.join(OUTPUT_DIR, filename);
    
    fs.writeFileSync(filepath, exp.buffer);
    
    console.log(`[${num}] ${exp.desc}`);
    console.log(`     Changes: ${exp.changes} | File: ${filename}`);
});

console.log('═'.repeat(70));
console.log();
console.log(`✓ Generated ${experiments.length} experimental EXE files`);
console.log(`  All reduce magic damage to 1/4`);
console.log(`  Location: ${OUTPUT_DIR}/`);
console.log();
console.log('Next: Commit these files to the branch for testing');
