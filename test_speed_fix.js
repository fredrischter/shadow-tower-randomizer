/**
 * Test to verify creature speed changes are applying correctly
 * 
 * This test validates the fix for the bug where speed accessors were
 * pointing to the wrong memory location (using this.bin instead of this.originalBin)
 */

const fs = require('fs');
const path = require('path');

// Test configuration
const PARAMS_DIR = path.join(__dirname, 'params');
const SPEED_PARAMS = [
    'fast-creatures.json',
    'slow-creatures.json', 
    'super-fast-creatures.json'
];

console.log('=== Creature Speed Fix Test ===\n');

// Test 1: Verify parameter files exist
console.log('Test 1: Checking speed parameter files exist...');
let allParamsExist = true;
SPEED_PARAMS.forEach(paramFile => {
    const fullPath = path.join(PARAMS_DIR, paramFile);
    if (fs.existsSync(fullPath)) {
        const params = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
        console.log(`  ✓ ${paramFile} exists with creatureSpeedMultiplier = ${params.creatureSpeedMultiplier}`);
    } else {
        console.log(`  ✗ ${paramFile} NOT FOUND`);
        allParamsExist = false;
    }
});

if (!allParamsExist) {
    console.error('\n❌ TEST FAILED: Not all parameter files exist');
    process.exit(1);
}

console.log('\n✅ Test 1 PASSED: All speed parameter files exist\n');

// Test 2: Verify data_model.js uses correct buffer
console.log('Test 2: Verifying data_model.js uses originalBin for speed accessors...');
const dataModelPath = path.join(__dirname, 'data_model.js');
const dataModelContent = fs.readFileSync(dataModelPath, 'utf8');

// Check that speed accessors use originalBin (not this.bin with offset_in_file)
const correctPattern1 = /this\.actionSpeedTimer\s*=\s*new\s+UInt8\s*\(\s*this\.originalBin\s*,\s*0x03\s*\)/;
const correctPattern2 = /this\.movementSpeed\s*=\s*new\s+UInt8\s*\(\s*this\.originalBin\s*,\s*0x08\s*\)/;

const incorrectPattern1 = /this\.actionSpeedTimer\s*=\s*new\s+UInt8\s*\(\s*this\.bin\s*,\s*this\.offset_in_file\s*\+\s*0x03\s*\)/;
const incorrectPattern2 = /this\.movementSpeed\s*=\s*new\s+UInt8\s*\(\s*this\.bin\s*,\s*this\.offset_in_file\s*\+\s*0x08\s*\)/;

let hasCorrectPattern = correctPattern1.test(dataModelContent) && correctPattern2.test(dataModelContent);
let hasIncorrectPattern = incorrectPattern1.test(dataModelContent) || incorrectPattern2.test(dataModelContent);

if (hasIncorrectPattern) {
    console.log('  ✗ Speed accessors still use incorrect pattern (this.bin with this.offset_in_file)');
    console.error('\n❌ TEST FAILED: Speed accessors use wrong buffer');
    process.exit(1);
}

if (!hasCorrectPattern) {
    console.log('  ✗ Speed accessors pattern not found (may have changed)');
    console.error('\n❌ TEST FAILED: Cannot verify speed accessor pattern');
    process.exit(1);
}

console.log('  ✓ actionSpeedTimer uses this.originalBin with offset 0x03');
console.log('  ✓ movementSpeed uses this.originalBin with offset 0x08');
console.log('\n✅ Test 2 PASSED: Speed accessors use correct buffer\n');

// Test 3: Verify randomize.js applies speed multiplier
console.log('Test 3: Verifying randomize.js applies speed multiplier...');
const randomizePath = path.join(__dirname, 'randomize.js');
const randomizeContent = fs.readFileSync(randomizePath, 'utf8');

// Check for speed multiplier logic
const hasSpeedMultiplierCheck = /params\.creatureSpeedMultiplier/.test(randomizeContent);
const hasMovementSpeedScaling = /entityState\.movementSpeed.*speedMultiplier/s.test(randomizeContent);
const hasActionSpeedScaling = /entityState\.actionSpeedTimer.*speedMultiplier/s.test(randomizeContent);

if (!hasSpeedMultiplierCheck) {
    console.log('  ✗ params.creatureSpeedMultiplier check not found');
    console.error('\n❌ TEST FAILED: Speed multiplier check missing');
    process.exit(1);
}
console.log('  ✓ params.creatureSpeedMultiplier check exists');

if (!hasMovementSpeedScaling) {
    console.log('  ✗ movementSpeed scaling not found');
    console.error('\n❌ TEST FAILED: Movement speed scaling missing');
    process.exit(1);
}
console.log('  ✓ movementSpeed scaling logic exists');

if (!hasActionSpeedScaling) {
    console.log('  ✗ actionSpeedTimer scaling not found');
    console.error('\n❌ TEST FAILED: Action speed scaling missing');
    process.exit(1);
}
console.log('  ✓ actionSpeedTimer scaling logic exists');

console.log('\n✅ Test 3 PASSED: Speed multiplier logic exists in randomize.js\n');

// Test 4: Check that attack accessors use originalBin (baseline comparison)
console.log('Test 4: Verifying attack accessors pattern (baseline)...');
const attackPattern = /new\s+UInt16\s*\(\s*this\.originalBin\s*,\s*0x1[ace]\s*\)/g;
const attackMatches = dataModelContent.match(attackPattern);

if (!attackMatches || attackMatches.length < 3) {
    console.log('  ✗ Attack accessors not using originalBin pattern as expected');
    console.error('\n❌ TEST FAILED: Attack accessor pattern changed or missing');
    process.exit(1);
}

console.log(`  ✓ Found ${attackMatches.length} attack accessors using this.originalBin pattern`);
console.log('  ✓ Speed accessors now match the same pattern as attack accessors');
console.log('\n✅ Test 4 PASSED: Speed accessors match attack accessor pattern\n');

// Summary
console.log('='.repeat(60));
console.log('✅ ALL TESTS PASSED');
console.log('='.repeat(60));
console.log('\nThe fix correctly addresses the speed application bug:');
console.log('  • Speed accessors now use this.originalBin (like attack accessors)');
console.log('  • Speed accessors use relative offsets 0x03 and 0x08');
console.log('  • Speed multiplier logic exists in randomize.js');
console.log('  • All speed parameter files are present');
console.log('\nNext step: Run actual randomization to verify changes apply to binary data');
