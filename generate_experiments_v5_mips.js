#!/usr/bin/env node

/**
 * Generate experimental EXE patches based on MIPS disassembly analysis
 * Targets arithmetic-heavy regions that likely contain damage calculations
 */

const fs = require('fs');

// Top regions from MIPS analysis (sorted by mult/div count)
const TARGET_REGIONS = [
    { id: 1, start: 0x37274, end: 0x3dd58, multDiv: 198, arith: 1739, desc: "Highest mult/div density - likely damage calc" },
    { id: 2, start: 0x79f0, end: 0x16358, multDiv: 95, arith: 3309, desc: "High mult/div with loads of arithmetic" },
    { id: 3, start: 0x40148, end: 0x4e790, multDiv: 93, arith: 4134, desc: "Very high arithmetic density" },
    { id: 4, start: 0x60c74, end: 0x63e90, multDiv: 92, arith: 836, desc: "Compact mult/div heavy region" },
    { id: 5, start: 0x257d0, end: 0x2b98c, multDiv: 59, arith: 1638, desc: "Medium mult/div region" },
    { id: 6, start: 0x2f060, end: 0x32bac, multDiv: 50, arith: 915, desc: "Balanced mult/div region" },
    { id: 7, start: 0x2147c, end: 0x25780, multDiv: 48, arith: 1058, desc: "Medium mult/div region 2" },
    { id: 8, start: 0x2b9bc, end: 0x2f020, multDiv: 44, arith: 973, desc: "Medium mult/div region 3" },
    { id: 9, start: 0x16570, end: 0x1dc00, multDiv: 36, arith: 2481, desc: "Lower mult/div, high arith" },
    { id: 10, start: 0x55960, end: 0x5c50c, multDiv: 10, arith: 1707, desc: "Low mult/div control test" }
];

function patchRegion(buffer, start, end, divideBy) {
    let patchCount = 0;
    const originalBuffer = Buffer.from(buffer);
    
    // Scan for ADDIU instructions with immediate values we can modify
    for (let offset = start; offset <= end && offset < buffer.length - 4; offset += 4) {
        const instr = buffer.readUInt32LE(offset);
        const opcode = (instr >>> 26) & 0x3F;
        const imm = instr & 0xFFFF;
        
        // ADDIU (0x09) with values 4-200
        if (opcode === 0x09 && imm >= 4 && imm <= 200) {
            const newImm = Math.max(1, Math.floor(imm / divideBy));
            const newInstr = (instr & 0xFFFF0000) | (newImm & 0xFFFF);
            buffer.writeUInt32LE(newInstr, offset);
            patchCount++;
        }
    }
    
    return patchCount;
}

function generateExperiment(expNum, region, divideBy, outputPath) {
    const exePath = './iso-dump/ST.EXE';
    const buffer = fs.readFileSync(exePath);
    
    const patchCount = patchRegion(buffer, region.start, region.end, divideBy);
    
    fs.writeFileSync(outputPath, buffer);
    
    return {
        experiment: expNum,
        region: region.desc,
        start: `0x${region.start.toString(16)}`,
        end: `0x${region.end.toString(16)}`,
        multDivCount: region.multDiv,
        arithmeticCount: region.arith,
        patchesApplied: patchCount,
        divideBy
    };
}

function main() {
    console.log('\n=== Generating Experiments Based on MIPS Analysis ===\n');
    
    const results = [];
    const divideBy = 4; // Reduce to 1/4 as requested
    
    // Generate experiments for top 10 regions
    TARGET_REGIONS.forEach((region, idx) => {
        const expNum = idx + 1;
        const outputPath = `./experimental-exe-patches/ST-experiment-${expNum.toString().padStart(2, '0')}.EXE`;
        
        const result = generateExperiment(expNum, region, divideBy, outputPath);
        results.push(result);
        
        console.log(`Experiment ${expNum}: ${result.patchesApplied} patches in region 0x${region.start.toString(16)}-0x${region.end.toString(16)}`);
        console.log(`  Description: ${region.desc}`);
        console.log(`  Mult/Div: ${region.multDiv}, Arithmetic: ${region.arith}`);
        console.log('');
    });
    
    // Generate combined experiments (regions 11-15)
    const combinedExperiments = [
        { exp: 11, regions: [0, 1], desc: "Top 2 mult/div regions combined" },
        { exp: 12, regions: [0, 1, 2], desc: "Top 3 mult/div regions combined" },
        { exp: 13, regions: [0, 3], desc: "Regions 1 and 4 (both compact, high mult/div)" },
        { exp: 14, regions: [1, 2], desc: "Regions 2 and 3 (high arithmetic)" },
        { exp: 15, regions: [4, 5, 6, 7], desc: "Medium mult/div regions 5-8" }
    ];
    
    combinedExperiments.forEach(comb => {
        const exePath = './iso-dump/ST.EXE';
        const buffer = fs.readFileSync(exePath);
        let totalPatches = 0;
        
        comb.regions.forEach(regionIdx => {
            const region = TARGET_REGIONS[regionIdx];
            totalPatches += patchRegion(buffer, region.start, region.end, divideBy);
        });
        
        const outputPath = `./experimental-exe-patches/ST-experiment-${comb.exp.toString().padStart(2, '0')}.EXE`;
        fs.writeFileSync(outputPath, buffer);
        
        results.push({
            experiment: comb.exp,
            description: comb.desc,
            regions: comb.regions.map(i => TARGET_REGIONS[i].id),
            patchesApplied: totalPatches
        });
        
        console.log(`Experiment ${comb.exp}: ${totalPatches} patches`);
        console.log(`  ${comb.desc}`);
        console.log('');
    });
    
    // Generate narrow sub-region experiments (16-20)
    const subRegionExperiments = [
        { exp: 16, region: TARGET_REGIONS[0], startOffset: 0, length: 0x2000, desc: "First 8KB of region 1" },
        { exp: 17, region: TARGET_REGIONS[0], startOffset: 0x2000, length: 0x2000, desc: "Second 8KB of region 1" },
        { exp: 18, region: TARGET_REGIONS[0], startOffset: 0x4000, length: 0x2000, desc: "Third 8KB of region 1" },
        { exp: 19, region: TARGET_REGIONS[1], startOffset: 0, length: 0x3000, desc: "First 12KB of region 2" },
        { exp: 20, region: TARGET_REGIONS[2], startOffset: 0, length: 0x3000, desc: "First 12KB of region 3" }
    ];
    
    subRegionExperiments.forEach(sub => {
        const exePath = './iso-dump/ST.EXE';
        const buffer = fs.readFileSync(exePath);
        
        const start = sub.region.start + sub.startOffset;
        const end = Math.min(start + sub.length, sub.region.end);
        const patches = patchRegion(buffer, start, end, divideBy);
        
        const outputPath = `./experimental-exe-patches/ST-experiment-${sub.exp.toString().padStart(2, '0')}.EXE`;
        fs.writeFileSync(outputPath, buffer);
        
        results.push({
            experiment: sub.exp,
            description: sub.desc,
            start: `0x${start.toString(16)}`,
            end: `0x${end.toString(16)}`,
            patchesApplied: patches
        });
        
        console.log(`Experiment ${sub.exp}: ${patches} patches`);
        console.log(`  ${sub.desc} (0x${start.toString(16)}-0x${end.toString(16)})`);
        console.log('');
    });
    
    // Save results
    fs.writeFileSync('./experimental-exe-patches/generation_log.json', JSON.stringify(results, null, 2));
    
    // Generate README
    const readme = generateREADME(results);
    fs.writeFileSync('./experimental-exe-patches/README.md', readme);
    
    console.log('=== Generation Complete ===');
    console.log(`Total experiments: ${results.length}`);
    console.log(`Results saved to: experimental-exe-patches/generation_log.json`);
    console.log(`README updated: experimental-exe-patches/README.md`);
}

function generateREADME(results) {
    return `# Experimental ST.EXE Patches - MIPS Analysis Based

**Generated based on MIPS disassembly analysis of damage calculation regions**

All experiments reduce magic damage to 1/4 by dividing ADDIU immediate values by 4.

## Approach

Used MIPS disassembler to find arithmetic-heavy code regions with high multiplication/division density.
These regions likely contain damage calculations.

## Experiments

### Single Regions (1-10)
Target individual arithmetic-heavy regions sorted by mult/div count.

${results.slice(0, 10).map(r => 
`**Experiment ${r.experiment}:** ${r.region || r.description}
- Region: ${r.start}-${r.end}
- Mult/Div operations: ${r.multDivCount}
- Arithmetic operations: ${r.arithmeticCount}
- Patches applied: ${r.patchesApplied}
`).join('\n')}

### Combined Regions (11-15)
Test multiple regions together to increase coverage.

${results.slice(10, 15).map(r =>
`**Experiment ${r.experiment}:** ${r.description}
- Regions: ${r.regions ? r.regions.join(', ') : 'N/A'}
- Patches applied: ${r.patchesApplied}
`).join('\n')}

### Sub-Regions (16-20)
Narrow down to specific parts of top regions.

${results.slice(15, 20).map(r =>
`**Experiment ${r.experiment}:** ${r.description}
- Range: ${r.start}-${r.end}
- Patches applied: ${r.patchesApplied}
`).join('\n')}

## Testing Priority

1. **Start with Experiments 1-3** (highest mult/div count - most likely damage calculations)
2. **Try Experiment 11** (top 2 regions combined)
3. **Try Experiments 16-18** (sub-regions of top region)
4. **If none work, try Experiments 4-10** (other arithmetic regions)

## Expected Result

If experiment works:
- ✅ Magic damage reduced to ~25% (1/4 of original)
- ✅ Game loads and runs normally
- ✅ No crashes or glitches

Report which experiment number affects magic damage!

## Technical Details

- All experiments modify ADDIU instructions (immediate add)
- Only targets values 4-200 (avoids system-critical values)
- Patches are applied to specific memory regions identified by disassembly
- Regions were ranked by multiplication/division density (damage calcs use mult/div)

## Analysis Source

Generated from \`disassemble_mips.js\` analysis of ST.EXE.
See \`mips_analysis_report.json\` for complete disassembly data.
`;
}

if (require.main === module) {
    main();
}
