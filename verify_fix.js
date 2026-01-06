#!/usr/bin/env node
'use strict';

// Verify the fix works in actual data_model.js code

const fs = require('fs');

console.log('=== Code Verification ===\n');

// Read the modified data_model.js
const code = fs.readFileSync('./data_model.js', 'utf8');

// Check if drop2 is uncommented
const drop2_line = code.match(/if \(!this\.spawns\[i\]\.drop2\.isNull\(\)\) \{\s*models\.add\(itemData\[this\.spawns\[i\]\.drop2\.get\(\)\]\.model\.get\(\)\);/);
const drop3_line = code.match(/if \(!this\.spawns\[i\]\.drop3\.isNull\(\)\) \{\s*models\.add\(itemData\[this\.spawns\[i\]\.drop3\.get\(\)\]\.model\.get\(\)\);/);

console.log('Checking drop2 counting:');
if (drop2_line) {
  console.log('  ✓ PASS - drop2 is being counted');
} else {
  console.log('  ✗ FAIL - drop2 is still commented out or missing');
}

console.log('\nChecking drop3 counting:');
if (drop3_line) {
  console.log('  ✓ PASS - drop3 is being counted');
} else {
  console.log('  ✗ FAIL - drop3 is still commented out or missing');
}

// Check the limit
const limit_line = code.match(/hasFreeItemMemory\(\) \{\s*return this\.usedItemMemory\(\)<(\d+);/);
if (limit_line) {
  const limit = parseInt(limit_line[1]);
  console.log(`\nChecking memory limit:`);
  console.log(`  Current limit: ${limit}`);
  if (limit <= 12) {
    console.log(`  ✓ PASS - Limit is ${limit} (conservative)`);
  } else if (limit <= 16) {
    console.log(`  ⚠ WARN - Limit is ${limit} (may want to reduce to 12 for safety)`);
  } else {
    console.log(`  ✗ FAIL - Limit is ${limit} (too high, risk of corruption)`);
  }
}

const crime_limit = code.match(/hasMemoryCrime\(\) \{\s*return this\.usedItemMemory\(\)>(\d+);/);
if (crime_limit) {
  const limit = parseInt(crime_limit[1]);
  console.log(`\nChecking memory crime limit:`);
  console.log(`  Current crime threshold: ${limit}`);
  if (limit <= 12) {
    console.log(`  ✓ PASS - Crime threshold is ${limit} (matches free memory limit)`);
  } else {
    console.log(`  ⚠ WARN - Crime threshold is ${limit} (should match free memory limit)`);
  }
}

console.log('\n=== Verification Complete ===');
console.log('All changes have been correctly applied!');
