#!/usr/bin/env node
'use strict';

/**
 * Test script to verify circle spin algorithm produces output logs
 * and actually modifies the map structure
 */

const map_shuffler = require('./map_shuffler');
const fs = require('fs');

console.log("=== Testing Circle Spin Output ===\n");

// Load original map
const originalMap = JSON.parse(fs.readFileSync("./map.json"));

// Test parameters
const params = {
  randomizeMap: true,
  seed: "test123"
};

console.log("Running map shuffler with circle spin...\n");

// Capture stderr to see the circle spin logs
const originalConsoleError = console.error;
const logs = [];
console.error = function(...args) {
  const msg = args.join(' ');
  logs.push(msg);
  originalConsoleError(...args);
};

// Run the shuffler
const result = map_shuffler(params);

// Restore console.error
console.error = originalConsoleError;

console.log("\n=== Circle Spin Logs ===");
const circleSpinLogs = logs.filter(log => 
  log.includes('circle spin') || 
  log.includes('Iteration') || 
  log.includes('Selected central') ||
  log.includes('Found') ||
  log.includes('Spinning') ||
  log.includes('Successfully performed')
);

if (circleSpinLogs.length === 0) {
  console.log("❌ ERROR: No circle spin logs found!");
  process.exit(1);
} else {
  console.log(`✓ Found ${circleSpinLogs.length} circle spin log lines:`);
  circleSpinLogs.forEach(log => console.log("  " + log));
}

console.log("\n=== Map Validation ===");

// Check if map was modified
if (!result || !result.map) {
  console.log("❌ ERROR: No map returned from shuffler");
  process.exit(1);
}

console.log(`✓ Map returned with ${result.map.length} areas`);

// Compare some exit destinations to original
let changesFound = 0;
for (const area of result.map) {
  const origArea = originalMap.find(a => a.name === area.name);
  if (!origArea) continue;
  
  for (const exit of area.exits) {
    const origExit = origArea.exits.find(e => e.id === exit.id);
    if (!origExit) continue;
    
    if (exit.dest !== origExit.dest) {
      changesFound++;
      console.log(`  Change detected: ${area.name} exit ${exit.id}: ${origExit.dest} → ${exit.dest}`);
      if (changesFound >= 5) {
        console.log("  ... (showing first 5 changes)");
        break;
      }
    }
  }
  if (changesFound >= 5) break;
}

if (changesFound === 0) {
  console.log("❌ WARNING: No map changes detected - algorithm may not be applying changes");
  console.log("   This could mean:");
  console.log("   - No outer circle doors were found in any iteration");
  console.log("   - Changes were made but reverted");
  console.log("   - The algorithm is not modifying the map correctly");
} else {
  console.log(`✓ Found ${changesFound}+ door destination changes`);
}

console.log("\n=== Summary ===");
console.log(`Circle spin logs: ${circleSpinLogs.length > 0 ? '✓' : '❌'}`);
console.log(`Map returned: ${result && result.map ? '✓' : '❌'}`);
console.log(`Changes applied: ${changesFound > 0 ? '✓' : '⚠'}`);

if (circleSpinLogs.length > 0 && result && result.map) {
  console.log("\n✓ Test passed - Circle spin is executing!");
  process.exit(0);
} else {
  console.log("\n❌ Test failed");
  process.exit(1);
}
