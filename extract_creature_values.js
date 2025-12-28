#!/usr/bin/env node
/**
 * Extract enemyPower and baseDamage values directly from creature data
 * This reads the binary FDAT.T files and outputs a comprehensive table
 */

const fs = require('fs');
const path = require('path');
const data_model = require('./data_model.js');
const TFILEReader = require('./randomizer_common.js').TFILEReader;

// Path to extracted game data
const extractedPath = './generated/no-change/extracted';
const fdatPath = path.join(extractedPath, 'ST/COM/FDAT.T');

console.log('Reading creature data from:', fdatPath);

// Read the FDAT.T file
const tfile = new TFILEReader(fdatPath).readTFormat();
console.log(`Loaded ${tfile.files.length} files from FDAT.T`);

// Setup data model
data_model.setup(tfile, extractedPath, { difficulty: 'medium' });

// Collect all creatures
const allCreatures = [];
for (const area of data_model.areas) {
    if (area.creatures) {
        for (const creature of area.creatures) {
            if (!creature.isBlank && !creature.isDoor) {
                allCreatures.push({
                    creature: creature,
                    areaName: area.name
                });
            }
        }
    }
}

console.log(`Found ${allCreatures.length} creatures`);

// Extract data
const creatureData = allCreatures.map(({ creature, areaName }) => {
    return {
        name: creature.name || 'unknown',
        area: areaName,
        hp: creature.hp ? creature.hp.get() : 0,
        attack1: creature.attack1 ? creature.attack1.get() : 0,
        attack2: creature.attack2 ? creature.attack2.get() : 0,
        magic1: creature.magic1 ? creature.magic1.get() : 0,
        enemyPower: creature.enemyPower ? creature.enemyPower.get() : 0,
        baseDamage: creature.baseDamage ? creature.baseDamage.get() : 0,
        str: creature.str ? creature.str.get() : 0,
        spd: creature.spd ? creature.spd.get() : 0,
        def: creature.def ? creature.def.get() : 0,
        weaponDef1: creature.weaponDefense1 ? creature.weaponDefense1.get() : 0,
        weaponDef2: creature.weaponDefense2 ? creature.weaponDefense2.get() : 0,
        weaponDef3: creature.weaponDefense3 ? creature.weaponDefense3.get() : 0,
    };
});

// Remove duplicates by name
const uniqueCreatures = new Map();
creatureData.forEach(data => {
    if (!uniqueCreatures.has(data.name)) {
        uniqueCreatures.set(data.name, data);
    }
});

const sortedData = Array.from(uniqueCreatures.values()).sort((a, b) => a.name.localeCompare(b.name));

// Generate CSV
const csvHeaders = [
    'Creature Name', 'HP', 'Attack1', 'Attack2', 'Magic1',
    'Enemy Power (0x0f)', 'Base Damage (0x11)',
    'STR', 'SPD', 'DEF', 'Weapon Def1', 'Weapon Def2', 'Weapon Def3',
    'Area'
].join(',');

const csvRows = sortedData.map(data => {
    return [
        data.name, data.hp, data.attack1, data.attack2, data.magic1,
        data.enemyPower, data.baseDamage,
        data.str, data.spd, data.def, data.weaponDef1, data.weaponDef2, data.weaponDef3,
        '"' + data.area + '"'
    ].join(',');
});

const csv = [csvHeaders, ...csvRows].join('\n');

// Output to file
const outputPath = './decompilation/analysis-output/creature_values_table.csv';
fs.writeFileSync(outputPath, csv);
console.log(`\nCreature values table written to: ${outputPath}`);
console.log(`Total unique creatures: ${sortedData.length}`);

// Also print summary statistics
console.log('\n=== Enemy Power (0x0f) Statistics ===');
const enemyPowers = sortedData.map(d => d.enemyPower).filter(v => v > 0);
console.log(`Non-zero values: ${enemyPowers.length}/${sortedData.length}`);
console.log(`Min: ${Math.min(...enemyPowers)}`);
console.log(`Max: ${Math.max(...enemyPowers)}`);
console.log(`Average: ${Math.round(enemyPowers.reduce((a, b) => a + b, 0) / enemyPowers.length)}`);

console.log('\n=== Base Damage (0x11) Statistics ===');
const baseDamages = sortedData.map(d => d.baseDamage).filter(v => v > 0);
console.log(`Non-zero values: ${baseDamages.length}/${sortedData.length}`);
console.log(`Min: ${Math.min(...baseDamages)}`);
console.log(`Max: ${Math.max(...baseDamages)}`);
console.log(`Average: ${Math.round(baseDamages.reduce((a, b) => a + b, 0) / baseDamages.length)}`);

// Print sample of interesting creatures
console.log('\n=== Sample Creatures (first 20) ===');
console.log('Name | HP | Atk1 | Enemy Power | Base Damage');
console.log('-'.repeat(60));
sortedData.slice(0, 20).forEach(d => {
    console.log(`${d.name.padEnd(25)} | ${String(d.hp).padStart(5)} | ${String(d.attack1).padStart(4)} | ${String(d.enemyPower).padStart(11)} | ${String(d.baseDamage).padStart(11)}`);
});

console.log('\nDone!');
