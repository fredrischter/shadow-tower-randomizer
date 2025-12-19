#!/usr/bin/env node

/**
 * Generate 20 experiments targeting HP store regions
 * Based on analysis of 4 HP store instructions at 0x198f2a
 */

const fs = require('fs');

const exePath = process.argv[2] || './iso-dump/ST.EXE';
const outputDir = './experimental-exe-patches';

// HP store locations found
const hpStoreRegions = [
    { 
        name: "HP Store #1 (Actual Damage)", 
        center: 0x02c77c, 
        size: 2000,
        priority: "HIGH",
        description: "SH $s0, 0x8f2a($v0) - stores calculated damage to HP"
    },
    { 
        name: "HP Store #2 (Entity Init)", 
        center: 0x05e96c, 
        size: 2000,
        priority: "MEDIUM",
        description: "SH $zero, 0x8f2a($at) - entity initialization"
    },
    { 
        name: "HP Store #3 (State Reset)", 
        center: 0x05fe78, 
        size: 2000,
        priority: "MEDIUM",
        description: "SH $zero, 0x8f2a($at) - state reset"
    },
    { 
        name: "HP Store #4 (Full Init)", 
        center: 0x06154c, 
        size: 2000,
        priority: "LOW",
        description: "SH $zero, 0x8f2a($at) - full entity initialization"
    }
];

console.log('Generating 20 experiments targeting HP store regions...\n');

const exeData = fs.readFileSync(exePath);
const experiments = [];

// 5 experiments per HP store region
for (let regionIdx = 0; regionIdx < 4; regionIdx++) {
    const region = hpStoreRegions[regionIdx];
    const start = Math.max(0, region.center - region.size);
    const end = Math.min(exeData.length, region.center + region.size);
    
    for (let variantIdx = 0; variantIdx < 5; variantIdx++) {
        const expNum = (regionIdx * 5) + variantIdx + 1;
        
        // Different value ranges for each variant
        const valueRanges = [
            { min: 10, max: 100, name: "Broad (10-100)" },
            { min: 20, max: 60, name: "Mid (20-60)" },
            { min: 30, max: 80, name: "Upper-Mid (30-80)" },
            { min: 40, max: 100, name: "High (40-100)" },
            { min: 15, max: 50, name: "Lower-Mid (15-50)" }
        ];
        
        const valueRange = valueRanges[variantIdx];
        
        experiments.push({
            number: expNum,
            region: region.name,
            regionIndex: regionIdx + 1,
            variant: variantIdx + 1,
            start: start,
            end: end,
            center: region.center,
            valueRange: valueRange,
            priority: region.priority,
            description: `${region.name}, ${valueRange.name}`
        });
    }
}

// Generate each experiment
const generationLog = [];

experiments.forEach(exp => {
    const exeCopy = Buffer.from(exeData);
    let patchCount = 0;
    
    // Scan region for ADDIU instructions with values in range
    for (let offset = exp.start; offset < exp.end - 4; offset += 4) {
        const instr = exeCopy.readUInt32LE(offset);
        const opcode = (instr >> 26) & 0x3F;
        
        // ADDIU opcode is 0x09
        if (opcode === 0x09) {
            const immediate = instr & 0xFFFF;
            const value = immediate > 0x7FFF ? immediate - 0x10000 : immediate;
            
            // Check if value is in our target range
            if (value >= exp.valueRange.min && value <= exp.valueRange.max) {
                // Divide by 4 for 1/4 damage
                const newValue = Math.max(1, Math.floor(value / 4));
                const newImm = newValue & 0xFFFF;
                const newInstr = (instr & 0xFFFF0000) | newImm;
                
                exeCopy.writeUInt32LE(newInstr, offset);
                patchCount++;
            }
        }
    }
    
    // Write experimental EXE
    const outputPath = `${outputDir}/ST-experiment-${exp.number.toString().padStart(2, '0')}.EXE`;
    fs.writeFileSync(outputPath, exeCopy);
    
    generationLog.push({
        experiment: exp.number,
        region: exp.region,
        priority: exp.priority,
        description: exp.description,
        startOffset: `0x${exp.start.toString(16)}`,
        endOffset: `0x${exp.end.toString(16)}`,
        centerOffset: `0x${exp.center.toString(16)}`,
        valueRange: `${exp.valueRange.min}-${exp.valueRange.max}`,
        patchCount: patchCount
    });
    
    console.log(`✓ Experiment ${exp.number.toString().padStart(2, '0')}: ${patchCount} patches (${exp.description})`);
});

// Write generation log
fs.writeFileSync(
    `${outputDir}/generation_log.json`,
    JSON.stringify(generationLog, null, 2)
);

// Update README
const readme = `# Experimental ST.EXE Patches - HP Store Region Targeting

## Approach

Based on MIPS disassembly analysis, found 4 instructions that store to HP address 0x198f2a:

1. **0x02c77c:** \`SH $s0, 0x8f2a($v0)\` - **Actual HP value storage** (HIGH PRIORITY)
2. **0x05e96c:** \`SH $zero, 0x8f2a($at)\` - Entity initialization
3. **0x05fe78:** \`SH $zero, 0x8f2a($at)\` - State reset
4. **0x06154c:** \`SH $zero, 0x8f2a($at)\` - Full initialization

Previous experiments failed because they targeted arithmetic-heavy regions (damage calculation),
but HP stores are in separate regions. This approach targets code AROUND HP store instructions.

## Experiments

All 20 experiments modify ADDIU instructions in regions around HP stores to reduce values by 1/4.

### Experiments 1-5: HP Store #1 Region (0x02c77c) ⭐ HIGHEST PRIORITY

These target the region where actual damage values get stored to HP.

| Exp | Value Range | Patches | Description |
|-----|-------------|---------|-------------|
${experiments.slice(0, 5).map(e => 
    `| ${e.number.toString().padStart(2)} | ${e.valueRange.min}-${e.valueRange.max} | ${generationLog[e.number-1].patchCount} | ${e.valueRange.name} |`
).join('\n')}

### Experiments 6-10: HP Store #2 Region (0x05e96c)

Entity initialization code.

| Exp | Value Range | Patches | Description |
|-----|-------------|---------|-------------|
${experiments.slice(5, 10).map(e => 
    `| ${e.number.toString().padStart(2)} | ${e.valueRange.min}-${e.valueRange.max} | ${generationLog[e.number-1].patchCount} | ${e.valueRange.name} |`
).join('\n')}

### Experiments 11-15: HP Store #3 Region (0x05fe78)

State reset code.

| Exp | Value Range | Patches | Description |
|-----|-------------|---------|-------------|
${experiments.slice(10, 15).map(e => 
    `| ${e.number.toString().padStart(2)} | ${e.valueRange.min}-${e.valueRange.max} | ${generationLog[e.number-1].patchCount} | ${e.valueRange.name} |`
).join('\n')}

### Experiments 16-20: HP Store #4 Region (0x06154c)

Full entity initialization.

| Exp | Value Range | Patches | Description |
|-----|-------------|---------|-------------|
${experiments.slice(15, 20).map(e => 
    `| ${e.number.toString().padStart(2)} | ${e.valueRange.min}-${e.valueRange.max} | ${generationLog[e.number-1].patchCount} | ${e.valueRange.name} |`
).join('\n')}

## Testing Strategy

1. **Start with Experiments 1-5** (HP Store #1 - actual damage application)
2. If one works, test others in same region to narrow down value range
3. If none work, try Experiments 6-10 (initialization)
4. Experiments 11-20 are lower priority (reset/init code)

## Expected Results

If experiment works:
- ✅ Magic damage ~25% (1/4 of original)
- ✅ Physical damage may also be affected (modifies final HP store)
- ✅ Game loads and runs normally

## Why This Approach is Better

**Previous:** Targeted arithmetic regions (damage calculation) → wrong code path for magic  
**New:** Targets HP store regions (final damage application) → affects all damage types

See HP_STORE_ANALYSIS.md for complete technical details.
`;

fs.writeFileSync(`${outputDir}/README.md`, readme);

console.log(`\n✓ Generated ${experiments.length} experiments`);
console.log(`✓ Total patches: ${generationLog.reduce((sum, log) => sum + log.patchCount, 0)}`);
console.log(`✓ Generation log: ${outputDir}/generation_log.json`);
console.log(`✓ README: ${outputDir}/README.md`);
console.log('\nTest priority: Experiments 1-5 (HP Store #1 region)');
