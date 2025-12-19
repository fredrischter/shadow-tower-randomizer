#!/usr/bin/env node

/**
 * Generate 20+ aggressive experimental EXE patches
 * Each experiment tries a different approach to modifying creature speed
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
console.log('║  Generating 20 Aggressive Experimental EXE Patches          ║');
console.log('╚══════════════════════════════════════════════════════════════╝');
console.log();
console.log(`Source: ${SOURCE_EXE} (${originalBuffer.length} bytes)`);
console.log(`Output: ${OUTPUT_DIR}/`);
console.log();

const experiments = [];

/**
 * EXPERIMENT 1: Double all small constants (1-30)
 */
function experiment01() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = 0; i < buffer.length - 4; i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        // addiu/li instructions
        if ((instruction & 0xFC000000) === 0x24000000) {
            const immediate = instruction & 0xFFFF;
            if (immediate >= 1 && immediate <= 30) {
                const newImmediate = Math.min(60, immediate * 2);
                const newInstruction = (instruction & 0xFFFF0000) | newImmediate;
                buffer.writeUInt32LE(newInstruction, i);
                changes++;
            }
        }
    }
    
    return { buffer, changes, desc: 'Double all small constants (1-30)' };
}

/**
 * EXPERIMENT 2: Halve all small constants (2-60)
 */
function experiment02() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = 0; i < buffer.length - 4; i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        if ((instruction & 0xFC000000) === 0x24000000) {
            const immediate = instruction & 0xFFFF;
            if (immediate >= 2 && immediate <= 60) {
                const newImmediate = Math.max(1, Math.floor(immediate / 2));
                const newInstruction = (instruction & 0xFFFF0000) | newImmediate;
                buffer.writeUInt32LE(newInstruction, i);
                changes++;
            }
        }
    }
    
    return { buffer, changes, desc: 'Halve all small constants (2-60)' };
}

/**
 * EXPERIMENT 3: Set all delays to 1 (minimum)
 */
function experiment03() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    const delays = [2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 30, 60];
    
    for (let i = 0; i < buffer.length - 4; i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        if ((instruction & 0xFC000000) === 0x24000000) {
            const immediate = instruction & 0xFFFF;
            if (delays.includes(immediate)) {
                const newInstruction = (instruction & 0xFFFF0000) | 1;
                buffer.writeUInt32LE(newInstruction, i);
                changes++;
            }
        }
    }
    
    return { buffer, changes, desc: 'Set all delay constants to 1 (fastest)' };
}

/**
 * EXPERIMENT 4: Zero out all shift right instructions
 */
function experiment04() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = 0; i < buffer.length - 4; i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        // SRL instruction
        if ((instruction & 0xFC00003F) === 0x00000002) {
            const shamt = (instruction >> 6) & 0x1F;
            if (shamt >= 1) {
                const newInstruction = (instruction & 0xFFFFF83F); // Zero shift amount
                buffer.writeUInt32LE(newInstruction, i);
                changes++;
            }
        }
    }
    
    return { buffer, changes, desc: 'Zero all shift right amounts (no division)' };
}

/**
 * EXPERIMENT 5: Triple all velocity constants
 */
function experiment05() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    const velocities = [0x0080, 0x0100, 0x0180, 0x0200, 0x0280, 0x0300];
    
    for (let i = 0; i < buffer.length - 2; i += 2) {
        const value = buffer.readUInt16LE(i);
        if (velocities.includes(value)) {
            const newValue = Math.min(0xFFFF, value * 3);
            buffer.writeUInt16LE(newValue, i);
            changes++;
        }
    }
    
    return { buffer, changes, desc: 'Triple all velocity constants' };
}

/**
 * EXPERIMENT 6: Modify specific offset ranges (first 64KB)
 */
function experiment06() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    // Modify every 4th byte in first 64KB
    for (let i = 0; i < Math.min(0x10000, buffer.length); i += 4) {
        const val = buffer[i];
        if (val >= 2 && val <= 30) {
            buffer[i] = Math.max(1, Math.floor(val / 2));
            changes++;
        }
    }
    
    return { buffer, changes, desc: 'Halve bytes in first 64KB range' };
}

/**
 * EXPERIMENT 7: Aggressive shift reduction
 */
function experiment07() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = 0; i < buffer.length - 4; i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        // SRL and SRA instructions
        if ((instruction & 0xFC00003F) === 0x00000002 || 
            (instruction & 0xFC00003F) === 0x00000003) {
            const shamt = (instruction >> 6) & 0x1F;
            if (shamt >= 2) {
                const newShamt = 1; // Always shift by 1
                const newInstruction = (instruction & 0xFFFFF83F) | (newShamt << 6);
                buffer.writeUInt32LE(newInstruction, i);
                changes++;
            }
        }
    }
    
    return { buffer, changes, desc: 'Set all shifts to minimum (1)' };
}

/**
 * EXPERIMENT 8: Modify jump/branch delays (NOP slots)
 */
function experiment08() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = 0; i < buffer.length - 8; i += 4) {
        const instruction = buffer.readUInt32LE(i);
        const nextInstr = buffer.readUInt32LE(i + 4);
        
        // If this is a branch/jump and next is delay slot
        if ((instruction & 0xFC000000) === 0x10000000) { // BEQ/BNE
            // Check if delay slot has immediate load
            if ((nextInstr & 0xFC000000) === 0x24000000) {
                const immediate = nextInstr & 0xFFFF;
                if (immediate >= 2 && immediate <= 60) {
                    const newImm = Math.max(1, Math.floor(immediate / 2));
                    const newInstr = (nextInstr & 0xFFFF0000) | newImm;
                    buffer.writeUInt32LE(newInstr, i + 4);
                    changes++;
                }
            }
        }
    }
    
    return { buffer, changes, desc: 'Halve constants in branch delay slots' };
}

/**
 * EXPERIMENT 9: Modify all multiply operations
 */
function experiment09() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = 0; i < buffer.length - 4; i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        // MULT/MULTU instructions
        if ((instruction & 0xFC0007FF) === 0x00000018 || 
            (instruction & 0xFC0007FF) === 0x00000019) {
            // Change to ADDU (add instead of multiply)
            const newInstruction = (instruction & 0xFFFFFC00) | 0x21;
            buffer.writeUInt32LE(newInstruction, i);
            changes++;
        }
    }
    
    return { buffer, changes, desc: 'Replace multiply with add (faster math)' };
}

/**
 * EXPERIMENT 10: Set constants to powers of 2 (faster bit ops)
 */
function experiment10() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = 0; i < buffer.length - 4; i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        if ((instruction & 0xFC000000) === 0x24000000) {
            const immediate = instruction & 0xFFFF;
            if (immediate >= 3 && immediate <= 60) {
                // Round down to nearest power of 2
                let pow2 = 1;
                while (pow2 * 2 <= immediate) pow2 *= 2;
                
                if (pow2 !== immediate) {
                    const newInstruction = (instruction & 0xFFFF0000) | pow2;
                    buffer.writeUInt32LE(newInstruction, i);
                    changes++;
                }
            }
        }
    }
    
    return { buffer, changes, desc: 'Round constants to powers of 2' };
}

/**
 * EXPERIMENT 11: Modify specific byte patterns (0x00, 0x01, 0x02, 0x03)
 */
function experiment11() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = 0; i < buffer.length; i++) {
        if (buffer[i] === 0x02) {
            buffer[i] = 0x01;
            changes++;
        } else if (buffer[i] === 0x03) {
            buffer[i] = 0x01;
            changes++;
        } else if (buffer[i] === 0x04) {
            buffer[i] = 0x02;
            changes++;
        }
    }
    
    return { buffer, changes, desc: 'Halve common byte values (2→1, 3→1, 4→2)' };
}

/**
 * EXPERIMENT 12: Extreme - set all non-zero small values to 1
 */
function experiment12() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = 0; i < buffer.length - 4; i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        if ((instruction & 0xFC000000) === 0x24000000) {
            const immediate = instruction & 0xFFFF;
            if (immediate >= 1 && immediate <= 120) {
                const newInstruction = (instruction & 0xFFFF0000) | 1;
                buffer.writeUInt32LE(newInstruction, i);
                changes++;
            }
        }
    }
    
    return { buffer, changes, desc: 'Set all small constants (1-120) to 1' };
}

/**
 * EXPERIMENT 13: Invert shift directions
 */
function experiment13() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = 0; i < buffer.length - 4; i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        // SRL -> SLL and vice versa
        if ((instruction & 0xFC00003F) === 0x00000002) { // SRL
            const newInstruction = (instruction & 0xFFFFFFC0) | 0x00; // Change to SLL
            buffer.writeUInt32LE(newInstruction, i);
            changes++;
        }
    }
    
    return { buffer, changes, desc: 'Invert shift direction (SRL→SLL)' };
}

/**
 * EXPERIMENT 14: Modify load upper immediate (LUI) instructions
 */
function experiment14() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = 0; i < buffer.length - 4; i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        // LUI instruction
        if ((instruction & 0xFC000000) === 0x3C000000) {
            const immediate = instruction & 0xFFFF;
            if (immediate > 0 && immediate < 0x8000) {
                const newImmediate = Math.floor(immediate / 2);
                const newInstruction = (instruction & 0xFFFF0000) | newImmediate;
                buffer.writeUInt32LE(newInstruction, i);
                changes++;
            }
        }
    }
    
    return { buffer, changes, desc: 'Halve LUI immediate values' };
}

/**
 * EXPERIMENT 15: Aggressive constant zeroing
 */
function experiment15() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    const targets = [8, 10, 12, 16, 20, 24, 30, 32, 40, 48, 60];
    
    for (let i = 0; i < buffer.length - 4; i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        if ((instruction & 0xFC000000) === 0x24000000) {
            const immediate = instruction & 0xFFFF;
            if (targets.includes(immediate)) {
                const newInstruction = (instruction & 0xFFFF0000) | 0;
                buffer.writeUInt32LE(newInstruction, i);
                changes++;
            }
        }
    }
    
    return { buffer, changes, desc: 'Zero specific delay constants' };
}

/**
 * EXPERIMENT 16: Modify only first 32KB aggressively
 */
function experiment16() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = 0; i < Math.min(0x8000, buffer.length - 4); i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        if ((instruction & 0xFC000000) === 0x24000000) {
            const immediate = instruction & 0xFFFF;
            if (immediate >= 2 && immediate <= 100) {
                const newImmediate = 1;
                const newInstruction = (instruction & 0xFFFF0000) | newImmediate;
                buffer.writeUInt32LE(newInstruction, i);
                changes++;
            }
        }
    }
    
    return { buffer, changes, desc: 'Set first 32KB constants to 1' };
}

/**
 * EXPERIMENT 17: Modify comparison instructions
 */
function experiment17() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = 0; i < buffer.length - 4; i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        // SLTI/SLTIU (set less than immediate)
        if ((instruction & 0xFC000000) === 0x28000000 || 
            (instruction & 0xFC000000) === 0x2C000000) {
            const immediate = instruction & 0xFFFF;
            if (immediate >= 5 && immediate <= 100) {
                const newImmediate = Math.max(1, Math.floor(immediate / 3));
                const newInstruction = (instruction & 0xFFFF0000) | newImmediate;
                buffer.writeUInt32LE(newInstruction, i);
                changes++;
            }
        }
    }
    
    return { buffer, changes, desc: 'Reduce comparison thresholds' };
}

/**
 * EXPERIMENT 18: 10x speed - divide all by 10
 */
function experiment18() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = 0; i < buffer.length - 4; i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        if ((instruction & 0xFC000000) === 0x24000000) {
            const immediate = instruction & 0xFFFF;
            if (immediate >= 10 && immediate <= 600) {
                const newImmediate = Math.max(1, Math.floor(immediate / 10));
                const newInstruction = (instruction & 0xFFFF0000) | newImmediate;
                buffer.writeUInt32LE(newInstruction, i);
                changes++;
            }
        }
    }
    
    return { buffer, changes, desc: 'Divide delays by 10 (extreme speed)' };
}

/**
 * EXPERIMENT 19: Modify specific offset ranges (0x10000-0x20000)
 */
function experiment19() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = 0x10000; i < Math.min(0x20000, buffer.length - 4); i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        if ((instruction & 0xFC000000) === 0x24000000) {
            const immediate = instruction & 0xFFFF;
            if (immediate >= 2 && immediate <= 60) {
                const newImmediate = Math.max(1, Math.floor(immediate / 4));
                const newInstruction = (instruction & 0xFFFF0000) | newImmediate;
                buffer.writeUInt32LE(newInstruction, i);
                changes++;
            }
        }
    }
    
    return { buffer, changes, desc: 'Quarter delays in 0x10000-0x20000 range' };
}

/**
 * EXPERIMENT 20: Conservative - only modify values 16-60
 */
function experiment20() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = 0; i < buffer.length - 4; i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        if ((instruction & 0xFC000000) === 0x24000000) {
            const immediate = instruction & 0xFFFF;
            if (immediate >= 16 && immediate <= 60) {
                const newImmediate = Math.max(4, Math.floor(immediate / 4));
                const newInstruction = (instruction & 0xFFFF0000) | newImmediate;
                buffer.writeUInt32LE(newInstruction, i);
                changes++;
            }
        }
    }
    
    return { buffer, changes, desc: 'Quarter only large delays (16-60)' };
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
console.log(`  Location: ${OUTPUT_DIR}/`);
console.log();
console.log('Next: Commit these files to the branch for testing');
