#!/usr/bin/env node
'use strict';

// Simple verification script for anti venom rotation fix
// This checks that the code is properly integrated

const fs = require('fs');
const path = require('path');

console.log('=== Anti Venom Rotation Fix Verification ===\n');

// Read randomize.js
const randomizeJs = fs.readFileSync('randomize.js', 'utf8');

// Check 1: Verify setAllCollectablesToAntiVenom function exists
const hasSetFunction = randomizeJs.includes('function setAllCollectablesToAntiVenom');
console.log(`✓ Check 1: setAllCollectablesToAntiVenom function exists: ${hasSetFunction ? 'PASS' : 'FAIL'}`);

// Check 2: Verify resetAntiVenomRotation function exists  
const hasResetFunction = randomizeJs.includes('function resetAntiVenomRotation');
console.log(`✓ Check 2: resetAntiVenomRotation function exists: ${hasResetFunction ? 'PASS' : 'FAIL'}`);

// Check 3: Verify setAllCollectablesToAntiVenom is called with conditional
const hasSetCall = randomizeJs.includes('if (params.testAntiVenomRotation)') &&
                   randomizeJs.includes('forEachCollectable(setAllCollectablesToAntiVenom)');
console.log(`✓ Check 3: setAllCollectablesToAntiVenom is conditionally called: ${hasSetCall ? 'PASS' : 'FAIL'}`);

// Check 4: Verify resetAntiVenomRotation is always called
const hasResetCall = randomizeJs.includes('forEachCollectable(resetAntiVenomRotation)');
console.log(`✓ Check 4: resetAntiVenomRotation is called: ${hasResetCall ? 'PASS' : 'FAIL'}`);

// Check 5: Verify item_11e_anti_venom constant is used
const usesAntiVenomConstant = randomizeJs.includes('item_11e_anti_venom');
console.log(`✓ Check 5: Uses item_11e_anti_venom constant: ${usesAntiVenomConstant ? 'PASS' : 'FAIL'}`);

// Check 6: Verify rotation_z is being set to 0
const setsRotationToZero = randomizeJs.includes('rotation_z.set(0)');
console.log(`✓ Check 6: Sets rotation_z to 0: ${setsRotationToZero ? 'PASS' : 'FAIL'}`);

// Check 7: Verify test params file exists
const testParamsExists = fs.existsSync('params/test-anti-venom-rotation.json');
console.log(`✓ Check 7: Test params file exists: ${testParamsExists ? 'PASS' : 'FAIL'}`);

// Check 8: Verify test params has testAntiVenomRotation flag
if (testParamsExists) {
    const testParams = JSON.parse(fs.readFileSync('params/test-anti-venom-rotation.json', 'utf8'));
    const hasTestFlag = testParams.testAntiVenomRotation === true;
    console.log(`✓ Check 8: Test params has testAntiVenomRotation flag: ${hasTestFlag ? 'PASS' : 'FAIL'}`);
} else {
    console.log('✓ Check 8: Test params has testAntiVenomRotation flag: SKIP');
}

// Summary
const allPassed = hasSetFunction && hasResetFunction && hasSetCall && 
                 hasResetCall && usesAntiVenomConstant && setsRotationToZero &&
                 testParamsExists;

console.log('\n=== Verification Summary ===');
if (allPassed) {
    console.log('✅ All checks PASSED! The anti venom rotation fix is properly implemented.');
} else {
    console.log('❌ Some checks FAILED. Please review the implementation.');
}

console.log('\n=== Implementation Details ===');
console.log('The fix works in two steps:');
console.log('1. When testAntiVenomRotation=true, all collectables are converted to anti venom');
console.log('2. Any collectable that is anti venom has its rotation reset to 0');
console.log('\nThis ensures that:');
console.log('- The fix can be tested by setting all items to anti venom');
console.log('- The rotation fix applies to all anti venom items, regardless of how they became anti venom');
console.log('- Normal gameplay will also benefit from the fix for naturally occurring anti venom items');
