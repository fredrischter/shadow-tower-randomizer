#!/usr/bin/env node
/**
 * Simple script to extract creature enemyPower and baseDamage values
 * Uses minimal dependencies to read binary data directly
 */

const fs = require('fs');
const path = require('path');

// Find all creature data files in extracted directory
const extractedPath = './generated/no-change/extracted/ST/COM/FDAT.T_PARTS';

function getUInt8(buffer, offset) {
    return buffer[offset];
}

function getUInt16(buffer, offset) {
    return buffer[offset] | (buffer[offset + 1] << 8);
}

// Read creature data from binary files
// Creatures are typically stored in specific T_PARTS files
const creatureFiles = fs.readdirSync(extractedPath).filter(f => f.endsWith('.T'));

console.log(`Scanning ${creatureFiles.length} files for creature data...`);

const results = [];

// Known creature data offsets (from data_model.js)
const CREATURE_OFFSETS = {
    attack1: 0x07,
    attack2: 0x08,
    magic1: 0x09,
    height: 0x0b,
    weight: 0x0d,
    enemyPower: 0x0f,  // UInt16
    baseDamage: 0x11,  // UInt16
    hp: 0x32  // UInt16
};

// Scan files that might contain creature data
creatureFiles.forEach(filename => {
    const filepath = path.join(extractedPath, filename);
    const buffer = fs.readFileSync(filepath);
    
    // Look for patterns that indicate creature data
    // Creatures usually have non-zero HP values
    for (let offset = 0; offset < buffer.length - 0x100; offset += 4) {
        const hp = getUInt16(buffer, offset + CREATURE_OFFSETS.hp);
        
        // Filter: reasonable HP range for creatures
        if (hp > 0 && hp < 70000) {
            const attack1 = getUInt8(buffer, offset + CREATURE_OFFSETS.attack1);
            const enemyPower = getUInt16(buffer, offset + CREATURE_OFFSETS.enemyPower);
            const baseDamage = getUInt16(buffer, offset + CREATURE_OFFSETS.baseDamage);
            
            // Only record if enemyPower or baseDamage are non-zero
            if (enemyPower > 0 || baseDamage > 0) {
                results.push({
                    file: filename,
                    offset: '0x' + offset.toString(16),
                    hp,
                    attack1,
                    enemyPower,
                    baseDamage
                });
            }
        }
    }
});

console.log(`Found ${results.length} potential creature entries with non-zero enemyPower/baseDamage`);

// Write results to CSV
const outputDir = './decompilation/analysis-output';
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const csvHeaders = 'File,Offset,HP,Attack1,Enemy Power (0x0f),Base Damage (0x11)';
const csvRows = results.map(r => `${r.file},${r.offset},${r.hp},${r.attack1},${r.enemyPower},${r.baseDamage}`);
const csv = [csvHeaders, ...csvRows].join('\n');

const outputPath = path.join(outputDir, 'creature_binary_scan.csv');
fs.writeFileSync(outputPath, csv);

console.log(`\nResults written to: ${outputPath}`);

// Print statistics
if (results.length > 0) {
    const enemyPowers = results.map(r => r.enemyPower).filter(v => v > 0);
    const baseDamages = results.map(r => r.baseDamage).filter(v => v > 0);
    
    console.log('\n=== Enemy Power (0x0f) Statistics ===');
    console.log(`Non-zero values: ${enemyPowers.length}`);
    if (enemyPowers.length > 0) {
        console.log(`Range: ${Math.min(...enemyPowers)} - ${Math.max(...enemyPowers)}`);
        console.log(`Average: ${Math.round(enemyPowers.reduce((a, b) => a + b, 0) / enemyPowers.length)}`);
    }
    
    console.log('\n=== Base Damage (0x11) Statistics ===');
    console.log(`Non-zero values: ${baseDamages.length}`);
    if (baseDamages.length > 0) {
        console.log(`Range: ${Math.min(...baseDamages)} - ${Math.max(...baseDamages)}`);
        console.log(`Average: ${Math.round(baseDamages.reduce((a, b) => a + b, 0) / baseDamages.length)}`);
    }
    
    console.log('\n=== Sample Entries (first 30) ===');
    console.log('HP      | Atk1 | Enemy Power | Base Damage | File');
    console.log('-'.repeat(80));
    results.slice(0, 30).forEach(r => {
        console.log(`${String(r.hp).padStart(7)} | ${String(r.attack1).padStart(4)} | ${String(r.enemyPower).padStart(11)} | ${String(r.baseDamage).padStart(11)} | ${r.file}`);
    });
}
