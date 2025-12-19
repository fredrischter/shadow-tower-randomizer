#!/usr/bin/env node

/**
 * Generate 20 CONSERVATIVE experimental EXE patches
 * Based on user feedback: experiments 1-14 crash, 15 loads but no effect
 * 
 * New strategy: More conservative, targeted patches
 * ALL reduce magic damage to 1/4
 * VARIETY in WHERE patches are applied (more careful approach)
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
console.log('║  Generating 20 CONSERVATIVE Experimental EXE Patches        ║');
console.log('║  All reduce magic damage to 1/4                              ║');
console.log('║  Less aggressive to avoid crashes                            ║');
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
 * EXPERIMENT 1: Only specific magic damage constants (very targeted)
 * Target only values that are likely magic damage: 8, 10, 12, 16, 20, 24, 32, 40
 */
function experiment01() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    const magicValues = [8, 10, 12, 16, 20, 24, 32, 40];
    
    for (let i = 0; i < buffer.length - 4; i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        if ((instruction & 0xFC000000) === 0x24000000) {
            const immediate = instruction & 0xFFFF;
            if (magicValues.includes(immediate)) {
                const newImmediate = applyQuarterDamage(immediate);
                const newInstruction = (instruction & 0xFFFF0000) | newImmediate;
                buffer.writeUInt32LE(newInstruction, i);
                changes++;
            }
        }
    }
    
    return { buffer, changes, desc: 'Only specific magic values (8,10,12,16,20,24,32,40)' };
}

/**
 * EXPERIMENT 2: Only power-of-2 damage values
 * 8, 16, 32, 64, 128
 */
function experiment02() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    const powerOf2 = [8, 16, 32, 64, 128];
    
    for (let i = 0; i < buffer.length - 4; i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        if ((instruction & 0xFC000000) === 0x24000000) {
            const immediate = instruction & 0xFFFF;
            if (powerOf2.includes(immediate)) {
                const newImmediate = applyQuarterDamage(immediate);
                const newInstruction = (instruction & 0xFFFF0000) | newImmediate;
                buffer.writeUInt32LE(newInstruction, i);
                changes++;
            }
        }
    }
    
    return { buffer, changes, desc: 'Only power-of-2 values (8,16,32,64,128)' };
}

/**
 * EXPERIMENT 3: Only multiples of 10 (10, 20, 30, 40, 50)
 */
function experiment03() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    const multiplesOf10 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    
    for (let i = 0; i < buffer.length - 4; i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        if ((instruction & 0xFC000000) === 0x24000000) {
            const immediate = instruction & 0xFFFF;
            if (multiplesOf10.includes(immediate)) {
                const newImmediate = applyQuarterDamage(immediate);
                const newInstruction = (instruction & 0xFFFF0000) | newImmediate;
                buffer.writeUInt32LE(newInstruction, i);
                changes++;
            }
        }
    }
    
    return { buffer, changes, desc: 'Only multiples of 10 (10,20,30,...,100)' };
}

/**
 * EXPERIMENT 4: Only values 50-150 range
 */
function experiment04() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = 0; i < buffer.length - 4; i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        if ((instruction & 0xFC000000) === 0x24000000) {
            const immediate = instruction & 0xFFFF;
            if (immediate >= 50 && immediate <= 150) {
                const newImmediate = applyQuarterDamage(immediate);
                const newInstruction = (instruction & 0xFFFF0000) | newImmediate;
                buffer.writeUInt32LE(newInstruction, i);
                changes++;
            }
        }
    }
    
    return { buffer, changes, desc: 'Only values 50-150 range' };
}

/**
 * EXPERIMENT 5: Only values 20-80 range (conservative)
 */
function experiment05() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = 0; i < buffer.length - 4; i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        if ((instruction & 0xFC000000) === 0x24000000) {
            const immediate = instruction & 0xFFFF;
            if (immediate >= 20 && immediate <= 80) {
                const newImmediate = applyQuarterDamage(immediate);
                const newInstruction = (instruction & 0xFFFF0000) | newImmediate;
                buffer.writeUInt32LE(newInstruction, i);
                changes++;
            }
        }
    }
    
    return { buffer, changes, desc: 'Only values 20-80 range (conservative)' };
}

/**
 * EXPERIMENT 6: Only 16-bit values in 50-200 range (not raw bytes)
 */
function experiment06() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = 0; i < buffer.length - 2; i += 2) {
        const value = buffer.readUInt16LE(i);
        if (value >= 50 && value <= 200 && value % 2 === 0) {
            const newValue = applyQuarterDamage(value);
            buffer.writeUInt16LE(newValue, i);
            changes++;
        }
    }
    
    return { buffer, changes, desc: 'Only 16-bit even values 50-200' };
}

/**
 * EXPERIMENT 7: Target specific "magic signature" patterns
 * Look for 0x18 (24 damage) - common magic value
 */
function experiment07() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = 0; i < buffer.length - 4; i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        if ((instruction & 0xFC000000) === 0x24000000) {
            const immediate = instruction & 0xFFFF;
            if (immediate === 24) {  // 0x18 hex
                const newImmediate = 6;  // 24/4 = 6
                const newInstruction = (instruction & 0xFFFF0000) | newImmediate;
                buffer.writeUInt32LE(newInstruction, i);
                changes++;
            }
        }
    }
    
    return { buffer, changes, desc: 'Only value 24 (common magic damage)' };
}

/**
 * EXPERIMENT 8: Target 32 (0x20) specifically
 */
function experiment08() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = 0; i < buffer.length - 4; i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        if ((instruction & 0xFC000000) === 0x24000000) {
            const immediate = instruction & 0xFFFF;
            if (immediate === 32) {
                const newImmediate = 8;  // 32/4 = 8
                const newInstruction = (instruction & 0xFFFF0000) | newImmediate;
                buffer.writeUInt32LE(newInstruction, i);
                changes++;
            }
        }
    }
    
    return { buffer, changes, desc: 'Only value 32' };
}

/**
 * EXPERIMENT 9: Target 48 (0x30) specifically
 */
function experiment09() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = 0; i < buffer.length - 4; i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        if ((instruction & 0xFC000000) === 0x24000000) {
            const immediate = instruction & 0xFFFF;
            if (immediate === 48) {
                const newImmediate = 12;  // 48/4 = 12
                const newInstruction = (instruction & 0xFFFF0000) | newImmediate;
                buffer.writeUInt32LE(newInstruction, i);
                changes++;
            }
        }
    }
    
    return { buffer, changes, desc: 'Only value 48' };
}

/**
 * EXPERIMENT 10: Target 64 (0x40) specifically
 */
function experiment10() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = 0; i < buffer.length - 4; i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        if ((instruction & 0xFC000000) === 0x24000000) {
            const immediate = instruction & 0xFFFF;
            if (immediate === 64) {
                const newImmediate = 16;  // 64/4 = 16
                const newInstruction = (instruction & 0xFFFF0000) | newImmediate;
                buffer.writeUInt32LE(newInstruction, i);
                changes++;
            }
        }
    }
    
    return { buffer, changes, desc: 'Only value 64' };
}

/**
 * EXPERIMENT 11: Conservative 16-bit values - only exact multiples of 4 in 40-120 range
 */
function experiment11() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = 0; i < buffer.length - 2; i += 2) {
        const value = buffer.readUInt16LE(i);
        if (value >= 40 && value <= 120 && value % 4 === 0) {
            const newValue = applyQuarterDamage(value);
            buffer.writeUInt16LE(newValue, i);
            changes++;
        }
    }
    
    return { buffer, changes, desc: 'Only 16-bit values divisible by 4 (40-120)' };
}

/**
 * EXPERIMENT 12: Target values 12, 18, 24, 36, 48, 72 (multiples of 6)
 */
function experiment12() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    const multiplesOf6 = [12, 18, 24, 36, 48, 72];
    
    for (let i = 0; i < buffer.length - 4; i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        if ((instruction & 0xFC000000) === 0x24000000) {
            const immediate = instruction & 0xFFFF;
            if (multiplesOf6.includes(immediate)) {
                const newImmediate = applyQuarterDamage(immediate);
                const newInstruction = (instruction & 0xFFFF0000) | newImmediate;
                buffer.writeUInt32LE(newInstruction, i);
                changes++;
            }
        }
    }
    
    return { buffer, changes, desc: 'Multiples of 6 (12,18,24,36,48,72)' };
}

/**
 * EXPERIMENT 13: Target values 15, 30, 45, 60 (multiples of 15)
 */
function experiment13() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    const multiplesOf15 = [15, 30, 45, 60, 75, 90];
    
    for (let i = 0; i < buffer.length - 4; i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        if ((instruction & 0xFC000000) === 0x24000000) {
            const immediate = instruction & 0xFFFF;
            if (multiplesOf15.includes(immediate)) {
                const newImmediate = applyQuarterDamage(immediate);
                const newInstruction = (instruction & 0xFFFF0000) | newImmediate;
                buffer.writeUInt32LE(newInstruction, i);
                changes++;
            }
        }
    }
    
    return { buffer, changes, desc: 'Multiples of 15 (15,30,45,60,75,90)' };
}

/**
 * EXPERIMENT 14: Only in specific region: 0x40000-0x60000
 */
function experiment14() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = Math.min(0x40000, buffer.length - 4); i < Math.min(0x60000, buffer.length - 4); i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        if ((instruction & 0xFC000000) === 0x24000000) {
            const immediate = instruction & 0xFFFF;
            if (immediate >= 10 && immediate <= 100) {
                const newImmediate = applyQuarterDamage(immediate);
                const newInstruction = (instruction & 0xFFFF0000) | newImmediate;
                buffer.writeUInt32LE(newInstruction, i);
                changes++;
            }
        }
    }
    
    return { buffer, changes, desc: 'Region 0x40000-0x60000, values 10-100' };
}

/**
 * EXPERIMENT 15: Only in specific region: 0x20000-0x40000
 */
function experiment15() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = Math.min(0x20000, buffer.length - 4); i < Math.min(0x40000, buffer.length - 4); i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        if ((instruction & 0xFC000000) === 0x24000000) {
            const immediate = instruction & 0xFFFF;
            if (immediate >= 10 && immediate <= 100) {
                const newImmediate = applyQuarterDamage(immediate);
                const newInstruction = (instruction & 0xFFFF0000) | newImmediate;
                buffer.writeUInt32LE(newInstruction, i);
                changes++;
            }
        }
    }
    
    return { buffer, changes, desc: 'Region 0x20000-0x40000, values 10-100' };
}

/**
 * EXPERIMENT 16: Target 80, 96, 112 (multiples of 16)
 */
function experiment16() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    const multiplesOf16 = [16, 32, 48, 64, 80, 96, 112, 128];
    
    for (let i = 0; i < buffer.length - 4; i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        if ((instruction & 0xFC000000) === 0x24000000) {
            const immediate = instruction & 0xFFFF;
            if (multiplesOf16.includes(immediate)) {
                const newImmediate = applyQuarterDamage(immediate);
                const newInstruction = (instruction & 0xFFFF0000) | newImmediate;
                buffer.writeUInt32LE(newInstruction, i);
                changes++;
            }
        }
    }
    
    return { buffer, changes, desc: 'Multiples of 16 (16,32,48,64,80,96,112,128)' };
}

/**
 * EXPERIMENT 17: Only prime-ish values: 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53
 */
function experiment17() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    const primes = [11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
    
    for (let i = 0; i < buffer.length - 4; i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        if ((instruction & 0xFC000000) === 0x24000000) {
            const immediate = instruction & 0xFFFF;
            if (primes.includes(immediate)) {
                const newImmediate = applyQuarterDamage(immediate);
                const newInstruction = (instruction & 0xFFFF0000) | newImmediate;
                buffer.writeUInt32LE(newInstruction, i);
                changes++;
            }
        }
    }
    
    return { buffer, changes, desc: 'Prime numbers 11-97' };
}

/**
 * EXPERIMENT 18: Only odd numbers 15-95
 */
function experiment18() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = 0; i < buffer.length - 4; i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        if ((instruction & 0xFC000000) === 0x24000000) {
            const immediate = instruction & 0xFFFF;
            if (immediate >= 15 && immediate <= 95 && immediate % 2 === 1) {
                const newImmediate = applyQuarterDamage(immediate);
                const newInstruction = (instruction & 0xFFFF0000) | newImmediate;
                buffer.writeUInt32LE(newInstruction, i);
                changes++;
            }
        }
    }
    
    return { buffer, changes, desc: 'Only odd numbers 15-95' };
}

/**
 * EXPERIMENT 19: Only even numbers 14-96  
 */
function experiment19() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = 0; i < buffer.length - 4; i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        if ((instruction & 0xFC000000) === 0x24000000) {
            const immediate = instruction & 0xFFFF;
            if (immediate >= 14 && immediate <= 96 && immediate % 2 === 0) {
                const newImmediate = applyQuarterDamage(immediate);
                const newInstruction = (instruction & 0xFFFF0000) | newImmediate;
                buffer.writeUInt32LE(newInstruction, i);
                changes++;
            }
        }
    }
    
    return { buffer, changes, desc: 'Only even numbers 14-96' };
}

/**
 * EXPERIMENT 20: Fibonacci-like sequence: 8, 13, 21, 34, 55, 89
 */
function experiment20() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    const fibonacci = [8, 13, 21, 34, 55, 89];
    
    for (let i = 0; i < buffer.length - 4; i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        if ((instruction & 0xFC000000) === 0x24000000) {
            const immediate = instruction & 0xFFFF;
            if (fibonacci.includes(immediate)) {
                const newImmediate = applyQuarterDamage(immediate);
                const newInstruction = (instruction & 0xFFFF0000) | newImmediate;
                buffer.writeUInt32LE(newInstruction, i);
                changes++;
            }
        }
    }
    
    return { buffer, changes, desc: 'Fibonacci-like (8,13,21,34,55,89)' };
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
console.log('Generating CONSERVATIVE experimental patches:');
console.log('═'.repeat(70));
console.log('ALL experiments reduce magic damage to 1/4');
console.log('More targeted, less aggressive to avoid crashes');
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
console.log(`✓ Generated ${experiments.length} CONSERVATIVE experimental EXE files`);
console.log(`  All reduce magic damage to 1/4`);
console.log(`  More targeted to avoid game crashes`);
console.log(`  Location: ${OUTPUT_DIR}/`);
console.log();
console.log('Next: Commit these files to the branch for testing');
