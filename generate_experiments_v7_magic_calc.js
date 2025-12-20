#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Read original ST.EXE
const exePath = './iso-dump/ST.EXE';
if (!fs.existsSync(exePath)) {
    console.error('ERROR: ST.EXE not found at', exePath);
    console.error('Please extract ST.EXE from ISO first');
    process.exit(1);
}

const originalExe = fs.readFileSync(exePath);

// Magic damage calculation region candidates based on backward tracing
const experiments = [
    // Experiments 1-5: Core magic region (512B, MINIMAL patches)
    { num: 1, desc: "Core Magic (512B), Broad 10-100", region: 0x35f00, size: 0x200, valueMin: 10, valueMax: 100 },
    { num: 2, desc: "Core Magic (512B), Mid 20-60", region: 0x35f00, size: 0x200, valueMin: 20, valueMax: 60 },
    { num: 3, desc: "Core Magic (512B), Upper 30-80", region: 0x35f00, size: 0x200, valueMin: 30, valueMax: 80 },
    { num: 4, desc: "Core Magic (512B), High 40-100", region: 0x35f00, size: 0x200, valueMin: 40, valueMax: 100 },
    { num: 5, desc: "Core Magic (512B), Lower 15-50", region: 0x35f00, size: 0x200, valueMin: 15, valueMax: 50 },
    
    // Experiments 6-10: Broader magic region (4KB)
    { num: 6, desc: "Broader Magic (4KB), Broad 10-100", region: 0x35800, size: 0x1000, valueMin: 10, valueMax: 100 },
    { num: 7, desc: "Broader Magic (4KB), Mid 20-60", region: 0x35800, size: 0x1000, valueMin: 20, valueMax: 60 },
    { num: 8, desc: "Broader Magic (4KB), Upper 30-80", region: 0x35800, size: 0x1000, valueMin: 30, valueMax: 80 },
    { num: 9, desc: "Broader Magic (4KB), High 40-100", region: 0x35800, size: 0x1000, valueMin: 40, valueMax: 100 },
    { num: 10, desc: "Broader Magic (4KB), Lower 15-50", region: 0x35800, size: 0x1000, valueMin: 15, valueMax: 50 },
    
    // Experiments 11-15: Extended magic region (8KB)
    { num: 11, desc: "Extended Magic (8KB), Broad 10-100", region: 0x35000, size: 0x2000, valueMin: 10, valueMax: 100 },
    { num: 12, desc: "Extended Magic (8KB), Mid 20-60", region: 0x35000, size: 0x2000, valueMin: 20, valueMax: 60 },
    { num: 13, desc: "Extended Magic (8KB), Upper 30-80", region: 0x35000, size: 0x2000, valueMin: 30, valueMax: 80 },
    { num: 14, desc: "Extended Magic (8KB), High 40-100", region: 0x35000, size: 0x2000, valueMin: 40, valueMax: 100 },
    { num: 15, desc: "Extended Magic (8KB), Lower 15-50", region: 0x35000, size: 0x2000, valueMin: 15, valueMax: 50 },
    
    // Experiments 16-18: Alternative region 0x07000 (40 MULT ops)
    { num: 16, desc: "Alt Region 0x07000, Broad 10-100", region: 0x06f00, size: 0x800, valueMin: 10, valueMax: 100 },
    { num: 17, desc: "Alt Region 0x07000, Mid 20-60", region: 0x06f00, size: 0x800, valueMin: 20, valueMax: 60 },
    { num: 18, desc: "Alt Region 0x07000, Lower 15-50", region: 0x06f00, size: 0x800, valueMin: 15, valueMax: 50 },
    
    // Experiments 19-20: Alternative region 0x22000 (24 MULT ops)
    { num: 19, desc: "Alt Region 0x22000, Broad 10-100", region: 0x21f00, size: 0x400, valueMin: 10, valueMax: 100 },
    { num: 20, desc: "Alt Region 0x22000, Mid 20-60", region: 0x21f00, size: 0x400, valueMin: 20, valueMax: 60 },
];

const generationLog = [];

console.log('Generating 20 experimental EXE files targeting magic damage calculation regions...\n');

for (const exp of experiments) {
    const exeData = Buffer.from(originalExe);
    let patchCount = 0;
    
    const startOffset = exp.region;
    const endOffset = exp.region + exp.size;
    
    console.log(`Experiment ${String(exp.num).padStart(2, '0')}: ${exp.desc}`);
    console.log(`  Region: 0x${startOffset.toString(16)}-0x${endOffset.toString(16)} (${exp.size} bytes)`);
    console.log(`  Value range: ${exp.valueMin}-${exp.valueMax}`);
    
    // Find and modify ADDIU instructions in this region
    for (let offset = startOffset; offset < endOffset && offset < exeData.length - 4; offset += 4) {
        const instr = exeData.readUInt32LE(offset);
        
        // ADDIU: 0x24000000 (bits 31-26 = 0b001001)
        if ((instr & 0xFC000000) === 0x24000000) {
            const immediate = instr & 0xFFFF;
            
            // Only modify values in our target range
            if (immediate >= exp.valueMin && immediate <= exp.valueMax) {
                // Divide by 4 (reduce to 25%)
                const newImmediate = Math.floor(immediate / 4);
                const newInstr = (instr & 0xFFFF0000) | newImmediate;
                exeData.writeUInt32LE(newInstr, offset);
                patchCount++;
            }
        }
    }
    
    console.log(`  Patches applied: ${patchCount}\n`);
    
    // Write experimental EXE
    const outputPath = `./experimental-exe-patches/ST-experiment-${String(exp.num).padStart(2, '0')}.EXE`;
    fs.writeFileSync(outputPath, exeData);
    
    generationLog.push({
        experiment: exp.num,
        description: exp.desc,
        region: `0x${startOffset.toString(16)}-0x${endOffset.toString(16)}`,
        regionSize: exp.size,
        valueRange: `${exp.valueMin}-${exp.valueMax}`,
        patchCount: patchCount,
        priority: exp.num <= 5 ? "HIGHEST" : exp.num <= 10 ? "HIGH" : exp.num <= 15 ? "MEDIUM" : "LOW"
    });
}

// Write generation log
fs.writeFileSync(
    './experimental-exe-patches/generation_log.json',
    JSON.stringify(generationLog, null, 2)
);

console.log('✓ All 20 experimental EXE files generated successfully!');
console.log('✓ Generation log written to experimental-exe-patches/generation_log.json');
console.log('\nTesting priority:');
console.log('  1. Experiments 01-05 (core magic region, 512B)');
console.log('  2. Experiments 06-10 (broader magic region, 4KB)');
console.log('  3. Experiments 11-15 (extended magic region, 8KB)');
console.log('  4. Experiments 16-20 (alternative regions)');
