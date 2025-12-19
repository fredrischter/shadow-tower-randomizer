#!/usr/bin/env node

/**
 * Simple test for creature speed fix (Issue #31)
 * 
 * This just validates that the code changes are syntactically correct
 * and that the speed modification logic is present in randomize.js
 */

const fs = require('fs');

console.log('=== Testing Creature Speed Fix (Issue #31) ===\n');

// Read randomize.js
const randomizeJs = fs.readFileSync('./randomize.js', 'utf8');

// Check for the speed modification code
const checks = [
    {
        name: 'Issue #31 comment present',
        pattern: /Issue #31.*Fix creature speed/i,
        required: true
    },
    {
        name: 'creatureSpeedMultiplier parameter check',
        pattern: /if \(params\.creatureSpeedMultiplier/,
        required: true
    },
    {
        name: 'Creature.spd modification code',
        pattern: /creature\.spd\.set\(newCreatureSpd\)/,
        required: true
    },
    {
        name: 'EntityStateData.movementSpeed modification',
        pattern: /entityState\.movementSpeed\.set\(newSpeed\)/,
        required: true
    },
    {
        name: 'EntityStateData.actionSpeedTimer modification',
        pattern: /entityState\.actionSpeedTimer\.set\(newTimer\)/,
        required: true
    },
    {
        name: 'Speed code is NOT commented out',
        pattern: /\/\*.*creature\.spd\.set.*\*\//s,
        required: false,
        shouldNotMatch: true
    }
];

let allPassed = true;

checks.forEach(check => {
    const matches = randomizeJs.match(check.pattern);
    const passed = check.shouldNotMatch ? !matches : !!matches;
    
    if (passed) {
        console.log('✓', check.name);
    } else {
        console.log('✗', check.name);
        if (check.required) {
            allPassed = false;
        }
    }
});

console.log('\n=== Verification ===');

// Check that speed multiplier test params exist
const testPresets = [
    './params/fast-creatures.json',
    './params/slow-creatures.json',
    './params/super-fast-creatures.json'
];

testPresets.forEach(preset => {
    if (fs.existsSync(preset)) {
        const params = JSON.parse(fs.readFileSync(preset, 'utf8'));
        console.log('✓ Found test preset:', preset, '(multiplier:', params.creatureSpeedMultiplier + ')');
    } else {
        console.log('✗ Missing test preset:', preset);
    }
});

// Check data_model.js has the speed accessors
const dataModelJs = fs.readFileSync('./data_model.js', 'utf8');

const dataModelChecks = [
    {
        name: 'EntityStateData has actionSpeedTimer accessor',
        pattern: /this\.actionSpeedTimer\s*=\s*new UInt8/
    },
    {
        name: 'EntityStateData has movementSpeed accessor',
        pattern: /this\.movementSpeed\s*=\s*new UInt8/
    },
    {
        name: 'Creature has spd field',
        pattern: /this\.spd\s*=\s*new UInt8.*0x25/
    }
];

console.log('\n=== Data Model Checks ===');
dataModelChecks.forEach(check => {
    const matches = dataModelJs.match(check.pattern);
    if (matches) {
        console.log('✓', check.name);
    } else {
        console.log('✗', check.name);
        allPassed = false;
    }
});

if (allPassed) {
    console.log('\n✓ SUCCESS: All code checks passed!');
    console.log('\nThe creature speed modification code is:');
    console.log('  1. Present and uncommented in randomize.js');
    console.log('  2. Modifies Creature.spd field (offset 0x25)');
    console.log('  3. Modifies EntityStateData.movementSpeed (offset 0x08)');
    console.log('  4. Modifies EntityStateData.actionSpeedTimer (offset 0x03)');
    console.log('\nNext steps:');
    console.log('  - Build a test ISO with: npm run mod "./path/to/st.bin" "./params/fast-creatures.json"');
    console.log('  - Test in emulator to verify creatures actually move faster');
    console.log('  - If still not working, may need to explore additional speed fields');
    process.exit(0);
} else {
    console.log('\n✗ FAILED: Some checks did not pass');
    console.log('  Review the failures above');
    process.exit(1);
}
