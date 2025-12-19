#!/usr/bin/env node

/**
 * Generate 20 experimental EXE patches based on WORKING pattern
 * 
 * User feedback: Experiment 14 WORKS (loads successfully)
 * Pattern: Region 0x40000-0x60000, ADDIU only, values 10-100
 * 
 * New strategy: Variations of the working pattern
 * - Different memory regions
 * - Different value ranges within 10-100
 * - Same conservative ADDIU-only approach
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
console.log('║  Generating 20 Experiments Based on WORKING Pattern        ║');
console.log('║  Experiment 14 worked: Region 0x40000-0x60000               ║');
console.log('║  All reduce magic damage to 1/4                              ║');
console.log('╚══════════════════════════════════════════════════════════════╝');
console.log();
console.log(`Source: ${SOURCE_EXE} (${originalBuffer.length} bytes)`);
console.log(`Output: ${OUTPUT_DIR}/`);
console.log();

const experiments = [];

/**
 * Helper: Apply 1/4 damage
 */
function applyQuarterDamage(value) {
    return Math.max(1, Math.floor(value / 4));
}

/**
 * EXPERIMENT 1: Same region as 14, but values 20-60
 */
function experiment01() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = Math.min(0x40000, buffer.length - 4); i < Math.min(0x60000, buffer.length - 4); i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        if ((instruction & 0xFC000000) === 0x24000000) {
            const immediate = instruction & 0xFFFF;
            if (immediate >= 20 && immediate <= 60) {
                const newImmediate = applyQuarterDamage(immediate);
                const newInstruction = (instruction & 0xFFFF0000) | newImmediate;
                buffer.writeUInt32LE(newInstruction, i);
                changes++;
            }
        }
    }
    
    return { buffer, changes, desc: 'Region 0x40000-0x60000, values 20-60' };
}

/**
 * EXPERIMENT 2: Same region, but values 30-80
 */
function experiment02() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = Math.min(0x40000, buffer.length - 4); i < Math.min(0x60000, buffer.length - 4); i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        if ((instruction & 0xFC000000) === 0x24000000) {
            const immediate = instruction & 0xFFFF;
            if (immediate >= 30 && immediate <= 80) {
                const newImmediate = applyQuarterDamage(immediate);
                const newInstruction = (instruction & 0xFFFF0000) | newImmediate;
                buffer.writeUInt32LE(newInstruction, i);
                changes++;
            }
        }
    }
    
    return { buffer, changes, desc: 'Region 0x40000-0x60000, values 30-80' };
}

/**
 * EXPERIMENT 3: Same region, only specific values
 */
function experiment03() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    const specificValues = [10, 12, 16, 20, 24, 32, 40, 48, 64, 80];
    
    for (let i = Math.min(0x40000, buffer.length - 4); i < Math.min(0x60000, buffer.length - 4); i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        if ((instruction & 0xFC000000) === 0x24000000) {
            const immediate = instruction & 0xFFFF;
            if (specificValues.includes(immediate)) {
                const newImmediate = applyQuarterDamage(immediate);
                const newInstruction = (instruction & 0xFFFF0000) | newImmediate;
                buffer.writeUInt32LE(newInstruction, i);
                changes++;
            }
        }
    }
    
    return { buffer, changes, desc: 'Region 0x40000-0x60000, specific values' };
}

/**
 * EXPERIMENT 4: Adjacent region before - 0x30000-0x50000
 */
function experiment04() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = Math.min(0x30000, buffer.length - 4); i < Math.min(0x50000, buffer.length - 4); i += 4) {
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
    
    return { buffer, changes, desc: 'Region 0x30000-0x50000, values 10-100' };
}

/**
 * EXPERIMENT 5: Adjacent region after - 0x50000-0x70000
 */
function experiment05() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = Math.min(0x50000, buffer.length - 4); i < Math.min(0x70000, buffer.length - 4); i += 4) {
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
    
    return { buffer, changes, desc: 'Region 0x50000-0x70000, values 10-100' };
}

/**
 * EXPERIMENT 6: Smaller region within working area - 0x48000-0x58000
 */
function experiment06() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = Math.min(0x48000, buffer.length - 4); i < Math.min(0x58000, buffer.length - 4); i += 4) {
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
    
    return { buffer, changes, desc: 'Region 0x48000-0x58000 (smaller), values 10-100' };
}

/**
 * EXPERIMENT 7: First half of working region - 0x40000-0x50000
 */
function experiment07() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = Math.min(0x40000, buffer.length - 4); i < Math.min(0x50000, buffer.length - 4); i += 4) {
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
    
    return { buffer, changes, desc: 'Region 0x40000-0x50000 (first half), values 10-100' };
}

/**
 * EXPERIMENT 8: Second half of working region - 0x50000-0x60000
 */
function experiment08() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = Math.min(0x50000, buffer.length - 4); i < Math.min(0x60000, buffer.length - 4); i += 4) {
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
    
    return { buffer, changes, desc: 'Region 0x50000-0x60000 (second half), values 10-100' };
}

/**
 * EXPERIMENT 9: Working region, only power-of-2 values
 */
function experiment09() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    const powerOf2 = [8, 16, 32, 64];
    
    for (let i = Math.min(0x40000, buffer.length - 4); i < Math.min(0x60000, buffer.length - 4); i += 4) {
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
    
    return { buffer, changes, desc: 'Region 0x40000-0x60000, power-of-2 only' };
}

/**
 * EXPERIMENT 10: Working region, only multiples of 10
 */
function experiment10() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    const multiplesOf10 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    
    for (let i = Math.min(0x40000, buffer.length - 4); i < Math.min(0x60000, buffer.length - 4); i += 4) {
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
    
    return { buffer, changes, desc: 'Region 0x40000-0x60000, multiples of 10' };
}

/**
 * EXPERIMENT 11: Larger region - 0x38000-0x68000
 */
function experiment11() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = Math.min(0x38000, buffer.length - 4); i < Math.min(0x68000, buffer.length - 4); i += 4) {
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
    
    return { buffer, changes, desc: 'Region 0x38000-0x68000 (larger), values 10-100' };
}

/**
 * EXPERIMENT 12: Very narrow region - 0x4C000-0x54000
 */
function experiment12() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = Math.min(0x4C000, buffer.length - 4); i < Math.min(0x54000, buffer.length - 4); i += 4) {
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
    
    return { buffer, changes, desc: 'Region 0x4C000-0x54000 (very narrow), values 10-100' };
}

/**
 * EXPERIMENT 13: Working region, values 15-50
 */
function experiment13() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = Math.min(0x40000, buffer.length - 4); i < Math.min(0x60000, buffer.length - 4); i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        if ((instruction & 0xFC000000) === 0x24000000) {
            const immediate = instruction & 0xFFFF;
            if (immediate >= 15 && immediate <= 50) {
                const newImmediate = applyQuarterDamage(immediate);
                const newInstruction = (instruction & 0xFFFF0000) | newImmediate;
                buffer.writeUInt32LE(newInstruction, i);
                changes++;
            }
        }
    }
    
    return { buffer, changes, desc: 'Region 0x40000-0x60000, values 15-50' };
}

/**
 * EXPERIMENT 14: EXACT COPY of working experiment (baseline)
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
    
    return { buffer, changes, desc: 'Region 0x40000-0x60000, values 10-100 (WORKING BASELINE)' };
}

/**
 * EXPERIMENT 15: Working region, values 40-100
 */
function experiment15() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = Math.min(0x40000, buffer.length - 4); i < Math.min(0x60000, buffer.length - 4); i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        if ((instruction & 0xFC000000) === 0x24000000) {
            const immediate = instruction & 0xFFFF;
            if (immediate >= 40 && immediate <= 100) {
                const newImmediate = applyQuarterDamage(immediate);
                const newInstruction = (instruction & 0xFFFF0000) | newImmediate;
                buffer.writeUInt32LE(newInstruction, i);
                changes++;
            }
        }
    }
    
    return { buffer, changes, desc: 'Region 0x40000-0x60000, values 40-100' };
}

/**
 * EXPERIMENT 16: Working region, values 10-40
 */
function experiment16() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = Math.min(0x40000, buffer.length - 4); i < Math.min(0x60000, buffer.length - 4); i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        if ((instruction & 0xFC000000) === 0x24000000) {
            const immediate = instruction & 0xFFFF;
            if (immediate >= 10 && immediate <= 40) {
                const newImmediate = applyQuarterDamage(immediate);
                const newInstruction = (instruction & 0xFFFF0000) | newImmediate;
                buffer.writeUInt32LE(newInstruction, i);
                changes++;
            }
        }
    }
    
    return { buffer, changes, desc: 'Region 0x40000-0x60000, values 10-40' };
}

/**
 * EXPERIMENT 17: Different region entirely - 0x60000-0x70000
 */
function experiment17() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = Math.min(0x60000, buffer.length - 4); i < Math.min(0x70000, buffer.length - 4); i += 4) {
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
    
    return { buffer, changes, desc: 'Region 0x60000-0x70000, values 10-100' };
}

/**
 * EXPERIMENT 18: Different region - 0x28000-0x38000
 */
function experiment18() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = Math.min(0x28000, buffer.length - 4); i < Math.min(0x38000, buffer.length - 4); i += 4) {
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
    
    return { buffer, changes, desc: 'Region 0x28000-0x38000, values 10-100' };
}

/**
 * EXPERIMENT 19: Multiple regions combined - 0x40000-0x48000 + 0x58000-0x60000
 */
function experiment19() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    // First region
    for (let i = Math.min(0x40000, buffer.length - 4); i < Math.min(0x48000, buffer.length - 4); i += 4) {
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
    
    // Second region
    for (let i = Math.min(0x58000, buffer.length - 4); i < Math.min(0x60000, buffer.length - 4); i += 4) {
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
    
    return { buffer, changes, desc: 'Two regions: 0x40000-0x48000 + 0x58000-0x60000' };
}

/**
 * EXPERIMENT 20: Working region, only even values 10-100
 */
function experiment20() {
    const buffer = Buffer.from(originalBuffer);
    let changes = 0;
    
    for (let i = Math.min(0x40000, buffer.length - 4); i < Math.min(0x60000, buffer.length - 4); i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        if ((instruction & 0xFC000000) === 0x24000000) {
            const immediate = instruction & 0xFFFF;
            if (immediate >= 10 && immediate <= 100 && immediate % 2 === 0) {
                const newImmediate = applyQuarterDamage(immediate);
                const newInstruction = (instruction & 0xFFFF0000) | newImmediate;
                buffer.writeUInt32LE(newInstruction, i);
                changes++;
            }
        }
    }
    
    return { buffer, changes, desc: 'Region 0x40000-0x60000, even values only' };
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
console.log('Generating experiments based on WORKING pattern:');
console.log('═'.repeat(70));
console.log('Experiment 14 WORKED - using similar patterns');
console.log('═'.repeat(70));

experiments.forEach((exp, index) => {
    const num = String(index + 1).padStart(2, '0');
    const filename = `ST-experiment-${num}.EXE`;
    const filepath = path.join(OUTPUT_DIR, filename);
    
    fs.writeFileSync(filepath, exp.buffer);
    
    const marker = num === '14' ? ' ✓ WORKING' : '';
    console.log(`[${num}] ${exp.desc}${marker}`);
    console.log(`     Changes: ${exp.changes} | File: ${filename}`);
});

console.log('═'.repeat(70));
console.log();
console.log(`✓ Generated ${experiments.length} experimental EXE files`);
console.log(`  Experiment 14 is the WORKING baseline`);
console.log(`  Others are variations to find what affects magic damage`);
console.log(`  Location: ${OUTPUT_DIR}/`);
console.log();
