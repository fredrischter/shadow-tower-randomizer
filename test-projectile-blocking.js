#!/usr/bin/env node
/**
 * Test script to verify projectile creature blocking logic
 * This tests that the lists are properly defined and accessible
 */

'use strict';

console.log("=== Testing Projectile Creature Blocking Implementation ===\n");

// Load data_model to get the creature lists
const data_model = require('./data_model');

// Check that projectileShootingCreatures list exists
console.log("1. Checking projectileShootingCreatures list...");
if (typeof projectileShootingCreatures !== 'undefined') {
    console.log("   ✓ List defined with " + projectileShootingCreatures.length + " creatures");
    console.log("   Creatures: " + projectileShootingCreatures.join(", "));
} else {
    console.log("   ✗ ERROR: projectileShootingCreatures not defined");
    process.exit(1);
}

// Check that areasBlockedForProjectileCreatures exists as global
console.log("\n2. Checking areasBlockedForProjectileCreatures list...");
if (typeof global.areasBlockedForProjectileCreatures !== 'undefined') {
    console.log("   ✓ List defined with " + global.areasBlockedForProjectileCreatures.length + " areas");
    console.log("   Areas: " + global.areasBlockedForProjectileCreatures.join(", "));
} else {
    console.log("   ✗ ERROR: areasBlockedForProjectileCreatures not defined");
    process.exit(1);
}

// Verify expected creatures are in the list
console.log("\n3. Verifying key projectile creatures are in the list...");
const expectedCreatures = ["demon_bat", "imp", "watcher_plant", "tongue_imp", "elder"];
let allFound = true;
expectedCreatures.forEach(function(creature) {
    if (projectileShootingCreatures.indexOf(creature) !== -1) {
        console.log("   ✓ Found: " + creature);
    } else {
        console.log("   ✗ Missing: " + creature);
        allFound = false;
    }
});

if (allFound) {
    console.log("\n✓ All tests passed! Implementation is ready.");
    process.exit(0);
} else {
    console.log("\n✗ Some tests failed.");
    process.exit(1);
}
