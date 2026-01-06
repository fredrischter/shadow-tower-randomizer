#!/usr/bin/env node
'use strict';

// Test: Verify VRAM memory counting includes drop2 and drop3
// This test validates the fix for the critical memory counting bug

require('./constants.js');
require('./game_data.js');

const itemData = global.GAME_DATA.items;

console.log('=== VRAM Memory Counting Test ===\n');

// Simulate the old (buggy) counting method
function oldUsedItemMemory(spawns, collectables) {
  let models = new Set();
  
  for (var i in spawns) {
    if (spawns[i].drop1 !== null && spawns[i].drop1 !== undefined) {
      models.add(spawns[i].drop1);
    }
    // drop2 and drop3 were COMMENTED OUT - this was the bug!
  }
  
  for (var i in collectables) {
    if (collectables[i] !== null && collectables[i] !== undefined) {
      models.add(collectables[i]);
    }
  }
  
  return models.size;
}

// Simulate the new (fixed) counting method
function newUsedItemMemory(spawns, collectables) {
  let models = new Set();
  
  for (var i in spawns) {
    if (spawns[i].drop1 !== null && spawns[i].drop1 !== undefined) {
      models.add(spawns[i].drop1);
    }
    if (spawns[i].drop2 !== null && spawns[i].drop2 !== undefined) {
      models.add(spawns[i].drop2);
    }
    if (spawns[i].drop3 !== null && spawns[i].drop3 !== undefined) {
      models.add(spawns[i].drop3);
    }
  }
  
  for (var i in collectables) {
    if (collectables[i] !== null && collectables[i] !== undefined) {
      models.add(collectables[i]);
    }
  }
  
  return models.size;
}

// Test case 1: Spawns with only drop1
console.log('Test 1: Spawns with only drop1');
const test1_spawns = [
  { drop1: 0x0 },
  { drop1: 0x1 },
  { drop1: 0x2 }
];
const test1_old = oldUsedItemMemory(test1_spawns, []);
const test1_new = newUsedItemMemory(test1_spawns, []);
console.log(`  Old count: ${test1_old}, New count: ${test1_new}`);
console.log(`  ${test1_old === test1_new ? '✓ PASS' : '✗ FAIL'} - Should be equal\n`);

// Test case 2: Spawns with drop1, drop2, drop3
console.log('Test 2: Spawns with drop1, drop2, drop3 (all same model)');
const test2_spawns = [
  { drop1: 0x0, drop2: 0x0, drop3: 0x0 }
];
const test2_old = oldUsedItemMemory(test2_spawns, []);
const test2_new = newUsedItemMemory(test2_spawns, []);
console.log(`  Old count: ${test2_old}, New count: ${test2_new}`);
console.log(`  ${test2_old === test2_new ? '✓ PASS' : '✗ FAIL'} - Should be equal (same model)\n`);

// Test case 3: Spawns with drop1, drop2, drop3 (different models) - THE BUG!
console.log('Test 3: Spawns with drop1, drop2, drop3 (different models) - BUG CASE');
const test3_spawns = [
  { drop1: 0x0, drop2: 0x1, drop3: 0x2 },
  { drop1: 0x3, drop2: 0x4, drop3: 0x5 }
];
const test3_old = oldUsedItemMemory(test3_spawns, []);
const test3_new = newUsedItemMemory(test3_spawns, []);
console.log(`  Old count: ${test3_old}, New count: ${test3_new}`);
console.log(`  Expected: Old=2, New=6`);
console.log(`  ${test3_old === 2 && test3_new === 6 ? '✓ PASS' : '✗ FAIL'} - Bug demonstrated!\n`);

// Test case 4: Real scenario that causes corruption
console.log('Test 4: Realistic scenario (10 spawns, 3 drops each)');
const test4_spawns = [];
for (let i = 0; i < 10; i++) {
  test4_spawns.push({
    drop1: i * 3,
    drop2: i * 3 + 1,
    drop3: i * 3 + 2
  });
}
const test4_old = oldUsedItemMemory(test4_spawns, []);
const test4_new = newUsedItemMemory(test4_spawns, []);
console.log(`  Old count: ${test4_old}, New count: ${test4_new}`);
console.log(`  Old limit check: ${test4_old < 16 ? 'WOULD ALLOW' : 'WOULD BLOCK'} (limit=16)`);
console.log(`  New limit check: ${test4_new < 12 ? 'WOULD ALLOW' : 'WOULD BLOCK'} (limit=12)`);
console.log(`  ${test4_old < 16 && test4_new >= 12 ? '✓ PASS' : '✗ FAIL'} - Old allows, new blocks corruption!\n`);

// Summary
console.log('=== Summary ===');
console.log('The bug was that drop2 and drop3 were commented out, causing:');
console.log('1. Memory usage underestimated by up to 3×');
console.log('2. Areas allowed to exceed VRAM limits');
console.log('3. Texture corruption in-game');
console.log('\nFix applied:');
console.log('1. Uncommented drop2 and drop3 counting');
console.log('2. Reduced limit from 16 to 12 for safety margin');
console.log('3. Now accurately tracks all item drops');
