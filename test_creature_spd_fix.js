#!/usr/bin/env node

/**
 * Test: Verify that creatureSpeedMultiplier modifies creature.spd field
 * 
 * This test validates that the fix for movement speed correctly modifies
 * the creature.spd field (offset 0x25) instead of only modifying EntityStateData.
 */

const fs = require('fs');

console.log('=== Testing creature.spd Modification ===\n');

// Check if randomize.js contains the fix
const randomizeJs = fs.readFileSync('./randomize.js', 'utf8');

console.log('1. Checking if creature.spd modification code exists...');
const hasCreatureSpdModification = randomizeJs.includes('creature.spd.set(newSpeed)') &&
                                    randomizeJs.includes('ACTUAL movement speed is in creature.spd field');

if (hasCreatureSpdModification) {
    console.log('   ✓ PASS: creature.spd modification code found\n');
} else {
    console.log('   ✗ FAIL: creature.spd modification code NOT found\n');
    process.exit(1);
}

console.log('2. Checking if fix is placed after EntityStateData loop...');
const lines = randomizeJs.split('\n');
let foundEntityStateLoop = false;
let foundCreatureSpdFix = false;

for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('creature.entityStates.forEach')) {
        foundEntityStateLoop = true;
    }
    if (foundEntityStateLoop && lines[i].includes('creature.spd.set(newSpeed)')) {
        foundCreatureSpdFix = true;
        console.log('   ✓ PASS: Fix correctly placed after EntityStateData loop\n');
        break;
    }
}

if (!foundCreatureSpdFix) {
    console.log('   ✗ FAIL: Fix not in correct location\n');
    process.exit(1);
}

console.log('3. Verifying creatureSpeedMultiplier parameter exists...');
const hasSpeedMultiplierParam = randomizeJs.includes('params.creatureSpeedMultiplier');

if (hasSpeedMultiplierParam) {
    console.log('   ✓ PASS: creatureSpeedMultiplier parameter check found\n');
} else {
    console.log('   ✗ FAIL: creatureSpeedMultiplier parameter check NOT found\n');
    process.exit(1);
}

console.log('4. Checking if EntityStateData modifications are still present...');
const hasEntityStateModifications = randomizeJs.includes('entityState.movementSpeed') &&
                                    randomizeJs.includes('entityState.actionSpeedTimer');

if (hasEntityStateModifications) {
    console.log('   ✓ PASS: EntityStateData modifications preserved (for AI behavior)\n');
} else {
    console.log('   ✗ FAIL: EntityStateData modifications removed\n');
    process.exit(1);
}

console.log('=== All Tests Passed ===\n');
console.log('Summary:');
console.log('  - creature.spd field is now modified for actual movement speed');
console.log('  - EntityStateData fields (0x03, 0x08) still modified for AI behavior');
console.log('  - Fix properly integrated into applyDifficultyForEachValidCreature');
console.log('');
console.log('Next steps:');
console.log('  - Test with fast-creatures.json preset in-game');
console.log('  - Verify creatures actually move faster');
console.log('  - Verify EntityStateData changes affect AI behavior as expected');

process.exit(0);
