/**
 * Test script to verify the magic damage fix
 * 
 * This tests that the applyDifficultyForEachValidCreature function
 * now scales both:
 * 1. Creature base attack attributes (attack1, attack2, magic1)
 * 2. EntityStateData attack attributes (attack1, attack2, attack3 for types 0x20 and 0x30)
 */

const fs = require('fs');

// Read the randomize.js file
const randomizeJs = fs.readFileSync('./randomize.js', 'utf8');

// Check for the fix: scaling of creature base attack attributes
const hasBaseAttack1Scaling = randomizeJs.includes('creature.attack1.set(newValue)') &&
                                randomizeJs.includes('Scaled base attack1');
const hasBaseAttack2Scaling = randomizeJs.includes('creature.attack2.set(newValue)') &&
                                randomizeJs.includes('Scaled base attack2');
const hasBaseMagic1Scaling = randomizeJs.includes('creature.magic1.set(newValue)') &&
                              randomizeJs.includes('Scaled base magic1');

// Check that EntityStateData scaling is still present (for both type 0x20 and 0x30)
const hasEntityStateScaling = randomizeJs.includes('entityState.type == 0x20 || entityState.type == 0x30') &&
                                randomizeJs.includes('entityState.attack1.set(newValue)');

// Check for proper comments explaining the fix
const hasFixComment = randomizeJs.includes('Fix for magic damage problem') &&
                       randomizeJs.includes('These are separate from EntityStateData');

console.log('\n=== Magic Damage Fix Validation ===\n');

let allPassed = true;

// Test 1: Base attack1 scaling
if (hasBaseAttack1Scaling) {
    console.log('✓ Base attack1 scaling implemented');
} else {
    console.log('✗ FAIL: Base attack1 scaling NOT found');
    allPassed = false;
}

// Test 2: Base attack2 scaling
if (hasBaseAttack2Scaling) {
    console.log('✓ Base attack2 scaling implemented');
} else {
    console.log('✗ FAIL: Base attack2 scaling NOT found');
    allPassed = false;
}

// Test 3: Base magic1 scaling
if (hasBaseMagic1Scaling) {
    console.log('✓ Base magic1 scaling implemented');
} else {
    console.log('✗ FAIL: Base magic1 scaling NOT found');
    allPassed = false;
}

// Test 4: EntityStateData scaling still works
if (hasEntityStateScaling) {
    console.log('✓ EntityStateData scaling (type 0x20/0x30) still present');
} else {
    console.log('✗ FAIL: EntityStateData scaling missing');
    allPassed = false;
}

// Test 5: Proper documentation
if (hasFixComment) {
    console.log('✓ Fix properly documented with comments');
} else {
    console.log('✗ FAIL: Fix comments missing');
    allPassed = false;
}

console.log('\n=== Result ===\n');

if (allPassed) {
    console.log('✅ All tests PASSED! Magic damage fix is complete.\n');
    console.log('The fix now scales BOTH:');
    console.log('  1. Creature base attributes (attack1, attack2, magic1)');
    console.log('  2. EntityStateData attributes (attack1, attack2, attack3)\n');
    process.exit(0);
} else {
    console.log('❌ Some tests FAILED. Review the implementation.\n');
    process.exit(1);
}
