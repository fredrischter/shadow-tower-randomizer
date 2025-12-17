#!/usr/bin/env node
'use strict';

// Test for Issue #14: Verify that testApocryphaInSolitaryRegion removes all spawns and collectables

const fs = require('fs');
const path = require('path');

console.log('=== Issue #14 Test: testApocryphaInSolitaryRegion ===\n');

// Check if the generated test output exists
const testOutputDir = path.join('generated', 'test-apocrypha-weak');
const readablePath = path.join(testOutputDir, 'spoilers', 'readable.txt');

if (!fs.existsSync(readablePath)) {
    console.log('❌ Test output not found. Please run the preset first.');
    console.log('   Expected: ' + readablePath);
    process.exit(1);
}

// Read the readable.txt file
const readable = fs.readFileSync(readablePath, 'utf8');

// Check for TEST messages
const testSection = readable.match(/========== TEST: Placing Apocrypha[\s\S]*?========== END TEST ==========/);

if (!testSection) {
    console.log('❌ TEST section not found in readable.txt');
    process.exit(1);
}

const testOutput = testSection[0];
console.log('Found TEST section:');
console.log(testOutput);
console.log('\n');

// Verify expected messages
const checks = [
    { pattern: /TEST: Replacing.*apocrypha/, message: 'Apocrypha replacement' },
    { pattern: /TEST: Removing all other spawns and collectables/, message: 'Spawns and collectables removal' },
    { pattern: /TEST: Blanked \d+ spawns/, message: 'Spawns blanking count' },
    { pattern: /TEST: Blanked \d+ collectables/, message: 'Collectables blanking count' },
    { pattern: /TEST: Solitary region now has only apocrypha/, message: 'Final confirmation' }
];

let allPassed = true;
checks.forEach(check => {
    if (check.pattern.test(testOutput)) {
        console.log('✓ ' + check.message);
    } else {
        console.log('✗ ' + check.message + ' - NOT FOUND');
        allPassed = false;
    }
});

// Extract numbers from the output
const spawnsMatch = testOutput.match(/TEST: Blanked (\d+) spawns/);
const collectablesMatch = testOutput.match(/TEST: Blanked (\d+) collectables/);

if (spawnsMatch && collectablesMatch) {
    console.log('\n📊 Statistics:');
    console.log('   - Spawns blanked: ' + spawnsMatch[1]);
    console.log('   - Collectables blanked: ' + collectablesMatch[1]);
    
    // Verify that at least some entities were blanked
    if (parseInt(spawnsMatch[1]) > 0 || parseInt(collectablesMatch[1]) > 0) {
        console.log('\n✅ Test PASSED: Entities were successfully blanked');
    } else {
        console.log('\n⚠️  WARNING: No entities were blanked (area might already be empty)');
    }
} else {
    console.log('\n❌ Could not extract blanking statistics');
    allPassed = false;
}

if (allPassed) {
    console.log('\n✅ All checks passed!');
    process.exit(0);
} else {
    console.log('\n❌ Some checks failed');
    process.exit(1);
}
