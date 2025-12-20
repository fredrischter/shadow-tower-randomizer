#!/usr/bin/env node

/**
 * Generate 20 experimental ST.EXE files with ZERO magic damage targeting
 * Based on Exp 19 success (Region 0x22000 showed magic damage reduction)
 * Strategy: SET values to 0 (not divide by 4), ultra-conservative patches
 */

const fs = require('fs');
const path = require('path');

// Load original ST.EXE
const exePath = './iso-dump/ST.EXE';
if (!fs.existsSync(exePath)) {
    console.error('ERROR: ST.EXE not found at', exePath);
    console.error('Please extract ST.EXE from game ISO first');
    process.exit(1);
}

const originalExe = fs.readFileSync(exePath);
const outputDir = './experimental-exe-patches';

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const experiments = [
    // Experiments 1-5: Region 0x22000 vicinity (where Exp 19 showed effect)
    {
        id: 1,
        name: 'Region 0x22000 center (0 patches baseline)',
        region: { start: 0x22000, end: 0x22000 },
        valueRange: { min: 10, max: 100 },
        setTo: 0,
        instructionType: 'ADDIU'
    },
    {
        id: 2,
        name: 'Region 0x21f00-0x22100 narrow (512B)',
        region: { start: 0x21f00, end: 0x22100 },
        valueRange: { min: 20, max: 80 },
        setTo: 0,
        instructionType: 'ADDIU'
    },
    {
        id: 3,
        name: 'Region 0x21e00-0x22200 (1KB)',
        region: { start: 0x21e00, end: 0x22200 },
        valueRange: { min: 15, max: 60 },
        setTo: 0,
        instructionType: 'ADDIU'
    },
    {
        id: 4,
        name: 'Region 0x22000-0x22080 first 128B',
        region: { start: 0x22000, end: 0x22080 },
        valueRange: { min: 10, max: 50 },
        setTo: 0,
        instructionType: 'ADDIU'
    },
    {
        id: 5,
        name: 'Region 0x21f80-0x22080 around center',
        region: { start: 0x21f80, end: 0x22080 },
        valueRange: { min: 12, max: 70 },
        setTo: 0,
        instructionType: 'ADDIU'
    },
    
    // Experiments 6-10: Region 0x40000-0x50000 (worked in earlier iterations)
    {
        id: 6,
        name: 'Region 0x40000-0x41000 (4KB safe)',
        region: { start: 0x40000, end: 0x41000 },
        valueRange: { min: 10, max: 100 },
        setTo: 0,
        instructionType: 'ADDIU'
    },
    {
        id: 7,
        name: 'Region 0x48000-0x49000 (mid safe)',
        region: { start: 0x48000, end: 0x49000 },
        valueRange: { min: 15, max: 80 },
        setTo: 0,
        instructionType: 'ADDIU'
    },
    {
        id: 8,
        name: 'Region 0x4f000-0x50000 (high safe)',
        region: { start: 0x4f000, end: 0x50000 },
        valueRange: { min: 20, max: 90 },
        setTo: 0,
        instructionType: 'ADDIU'
    },
    {
        id: 9,
        name: 'Region 0x45000-0x46000 (safe mid-low)',
        region: { start: 0x45000, end: 0x46000 },
        valueRange: { min: 10, max: 60 },
        setTo: 0,
        instructionType: 'ADDIU'
    },
    {
        id: 10,
        name: 'Region 0x4a000-0x4b000 (safe mid-high)',
        region: { start: 0x4a000, end: 0x4b000 },
        valueRange: { min: 25, max: 95 },
        setTo: 0,
        instructionType: 'ADDIU'
    },
    
    // Experiments 11-15: Hybrid regions
    {
        id: 11,
        name: 'Region 0x21000-0x23000 (broad 0x22000)',
        region: { start: 0x21000, end: 0x23000 },
        valueRange: { min: 10, max: 100 },
        setTo: 0,
        instructionType: 'ADDIU'
    },
    {
        id: 12,
        name: 'Region 0x21800-0x22800 (1KB each side)',
        region: { start: 0x21800, end: 0x22800 },
        valueRange: { min: 15, max: 75 },
        setTo: 0,
        instructionType: 'ADDIU'
    },
    {
        id: 13,
        name: 'Region 0x40000-0x42000 + 0x22000',
        region: { start: 0x40000, end: 0x42000 },
        valueRange: { min: 20, max: 80 },
        setTo: 0,
        instructionType: 'ADDIU'
    },
    {
        id: 14,
        name: 'Region 0x21600-0x22400',
        region: { start: 0x21600, end: 0x22400 },
        valueRange: { min: 12, max: 65 },
        setTo: 0,
        instructionType: 'ADDIU'
    },
    {
        id: 15,
        name: 'Region 0x48000-0x4a000',
        region: { start: 0x48000, end: 0x4a000 },
        valueRange: { min: 30, max: 90 },
        setTo: 0,
        instructionType: 'ADDIU'
    },
    
    // Experiments 16-20: Alternative narrow regions
    {
        id: 16,
        name: 'Region 0x22040-0x22140 (256B offset)',
        region: { start: 0x22040, end: 0x22140 },
        valueRange: { min: 10, max: 50 },
        setTo: 0,
        instructionType: 'ADDIU'
    },
    {
        id: 17,
        name: 'Region 0x21fc0-0x220c0 (256B)',
        region: { start: 0x21fc0, end: 0x220c0 },
        valueRange: { min: 15, max: 55 },
        setTo: 0,
        instructionType: 'ADDIU'
    },
    {
        id: 18,
        name: 'Region 0x45800-0x46800',
        region: { start: 0x45800, end: 0x46800 },
        valueRange: { min: 20, max: 70 },
        setTo: 0,
        instructionType: 'ADDIU'
    },
    {
        id: 19,
        name: 'Region 0x22000 exact (0 patches - Exp 19 baseline)',
        region: { start: 0x22000, end: 0x22000 },
        valueRange: { min: 10, max: 100 },
        setTo: 0,
        instructionType: 'ADDIU'
    },
    {
        id: 20,
        name: 'Region 0x49000-0x49800',
        region: { start: 0x49000, end: 0x49800 },
        valueRange: { min: 25, max: 85 },
        setTo: 0,
        instructionType: 'ADDIU'
    }
];

const generationLog = [];

console.log('Generating 20 zero-magic experiments...\n');

experiments.forEach(exp => {
    const exeData = Buffer.from(originalExe);
    let patchCount = 0;
    const patches = [];
    
    // ADDIU instruction opcode: 0x24 (001001 in binary)
    const ADDIU_OPCODE = 0x24;
    
    // Scan region for ADDIU instructions
    for (let offset = exp.region.start; offset < exp.region.end && offset < exeData.length - 3; offset += 4) {
        // Read as big-endian (MIPS is big-endian)
        const byte0 = exeData[offset];
        const byte1 = exeData[offset + 1];
        const byte2 = exeData[offset + 2];
        const byte3 = exeData[offset + 3];
        const instruction = (byte0 << 24) | (byte1 << 16) | (byte2 << 8) | byte3;
        
        const opcode = (instruction >>> 26) & 0x3F;
        
        if (opcode === ADDIU_OPCODE) {
            // Get immediate value (lower 16 bits, sign-extended)
            const immediate = instruction & 0xFFFF;
            const signedImmediate = immediate > 0x7FFF ? immediate - 0x10000 : immediate;
            
            // Check if in value range
            if (signedImmediate >= exp.valueRange.min && signedImmediate <= exp.valueRange.max) {
                // SET to 0 (not divide by 4)
                const newInstruction = (instruction & 0xFFFF0000) | (exp.setTo & 0xFFFF);
                
                // Write back as big-endian
                exeData[offset] = (newInstruction >>> 24) & 0xFF;
                exeData[offset + 1] = (newInstruction >>> 16) & 0xFF;
                exeData[offset + 2] = (newInstruction >>> 8) & 0xFF;
                exeData[offset + 3] = newInstruction & 0xFF;
                
                patches.push({
                    offset: '0x' + offset.toString(16),
                    old: '0x' + instruction.toString(16),
                    new: '0x' + newInstruction.toString(16),
                    oldValue: signedImmediate,
                    newValue: exp.setTo
                });
                patchCount++;
            }
        }
    }
    
    const outputPath = path.join(outputDir, `ST-experiment-${exp.id.toString().padStart(2, '0')}.EXE`);
    fs.writeFileSync(outputPath, exeData);
    
    const logEntry = {
        experiment: exp.id,
        name: exp.name,
        region: `0x${exp.region.start.toString(16)}-0x${exp.region.end.toString(16)}`,
        valueRange: `${exp.valueRange.min}-${exp.valueRange.max}`,
        modification: `SET to ${exp.setTo}`,
        patchCount: patchCount,
        outputFile: `ST-experiment-${exp.id.toString().padStart(2, '0')}.EXE`
    };
    
    generationLog.push(logEntry);
    
    console.log(`Experiment ${exp.id.toString().padStart(2, ' ')}: ${patchCount.toString().padStart(3, ' ')} patches - ${exp.name}`);
});

// Write generation log
fs.writeFileSync(
    path.join(outputDir, 'generation_log.json'),
    JSON.stringify(generationLog, null, 2)
);

console.log('\n✅ Generated 20 experiments');
console.log(`📁 Output: ${outputDir}/`);
console.log('📊 Total patches:', generationLog.reduce((sum, exp) => sum + exp.patchCount, 0));
console.log('\n🎯 Testing priority:');
console.log('   1. Exp 01-05 (Region 0x22000 - where Exp 19 showed effect)');
console.log('   2. Exp 06-10 (Safe region 0x40000-0x50000)');
console.log('   3. Exp 11-20 (Broader coverage)');
console.log('\n💡 All experiments SET magic damage to 0 (not divide by 4)');
console.log('   Test: Take magic damage → should be 0');
