#!/usr/bin/env node
'use strict';

/**
 * Test to verify Stone Cavern creatures are non-randomizable
 * This prevents the game freeze issue caused by randomizing creatures
 * with hardcoded event scripts/conversations
 */

const fs = require('fs');

console.log("Testing Stone Cavern Freeze Fix...\n");

// The creatures that should NOT be randomizable due to Stone Cavern freeze issue
const stoneCavernCreatures = [
    "dybbuk",
    "hobble_worm",
    "barrel_snail", 
    "crying_root",
    "clay_servant"
];

// Read the data_model.js file and check if creatures are in nonRandomizableCreatureNames
const dataModelContent = fs.readFileSync('./data_model.js', 'utf8');

// Extract the nonRandomizableCreatureNames array
const nonRandomizableMatch = dataModelContent.match(/var nonRandomizableCreatureNames = \[([\s\S]*?)\];/);

if (!nonRandomizableMatch) {
    console.log("✗ ERROR: Could not find nonRandomizableCreatureNames in data_model.js");
    process.exit(1);
}

const nonRandomizableArray = nonRandomizableMatch[1];

let allTestsPassed = true;

console.log("Checking that Stone Cavern creatures are in nonRandomizableCreatureNames...\n");

stoneCavernCreatures.forEach(creatureName => {
    // Check if the creature name appears in the array content
    const found = nonRandomizableArray.includes(`"${creatureName}"`);
    
    if (found) {
        console.log(`✓ PASS: ${creatureName} is correctly marked as non-randomizable`);
    } else {
        console.log(`✗ FAIL: ${creatureName} is NOT in nonRandomizableCreatureNames - THIS WILL CAUSE FREEZE!`);
        allTestsPassed = false;
    }
});

console.log("\nChecking that demon_bat (also in Stone Cavern) is protected...\n");
const demonBatFound = nonRandomizableArray.includes(`"demon_bat"`);
if (demonBatFound) {
    console.log(`✓ INFO: demon_bat is also non-randomizable (protected for other reasons)`);
}

console.log("\n" + "=".repeat(70));
if (allTestsPassed) {
    console.log("✓ ALL TESTS PASSED - Stone Cavern freeze fix is working correctly!");
    process.exit(0);
} else {
    console.log("✗ TESTS FAILED - Stone Cavern creatures can still be randomized!");
    process.exit(1);
}
