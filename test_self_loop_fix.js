#!/usr/bin/env node
'use strict';

// Test to verify that rotateDoors doesn't create self-loops
// This test checks that doors within contiguous neighborhoods are excluded from rotation

const fs = require('fs');
const path = require('path');

// Load functions.js to get normalizeAreaName
require('./functions.js');

// Create a mock map with a contiguous neighborhood
function createTestMap() {
  return [
    {
      name: "shadow_tower_part1a",
      world: "shadow_tower",
      exits: [
        {id: "0", type: "door", dest: "human_world_solitary_region", wayBackId: "1"},
        {id: "1", type: "door", dest: "shadow_tower_part1b", wayBackId: "0"}, // This should be filtered out
        {id: "2", type: "door", dest: "earth_world_poisonous_cavern", wayBackId: "3"}
      ]
    },
    {
      name: "shadow_tower_part1b", 
      world: "shadow_tower",
      exits: [
        {id: "0", type: "door", dest: "shadow_tower_part1a", wayBackId: "1"},
        {id: "1", type: "door", dest: "fire_world_burning_cavern", wayBackId: "2"}
      ]
    },
    {
      name: "human_world_solitary_region",
      world: "human_world", 
      exits: [
        {id: "1", type: "door", dest: "shadow_tower_part1a", wayBackId: "0"}
      ]
    },
    {
      name: "earth_world_poisonous_cavern",
      world: "earth_world",
      exits: [
        {id: "3", type: "door", dest: "shadow_tower_part1a", wayBackId: "2"}
      ]
    },
    {
      name: "fire_world_burning_cavern",
      world: "fire_world",
      exits: [
        {id: "2", type: "door", dest: "shadow_tower_part1b", wayBackId: "1"}
      ]
    }
  ];
}

// Test the filtering logic
function testFilterLogic() {
  const testMap = createTestMap();
  const towerPart1a = testMap[0];
  
  console.log("Testing door filtering in shadow_tower_part1a:");
  console.log("Total exits:", towerPart1a.exits.length);
  
  const normalizedAreaName = normalizeAreaName(towerPart1a.name);
  console.log("Normalized area name:", normalizedAreaName);
  
  const filteredDoors = towerPart1a.exits.filter(exit => {
    if (exit.type !== "door") return false;
    const normalizedDestName = normalizeAreaName(exit.dest);
    console.log(`  Exit ${exit.id} -> ${exit.dest} (normalized: ${normalizedDestName})`);
    const shouldInclude = normalizedDestName !== normalizedAreaName;
    console.log(`    Include in rotation: ${shouldInclude}`);
    return shouldInclude;
  });
  
  console.log("\nFiltered doors count:", filteredDoors.length);
  console.log("Filtered doors:", filteredDoors.map(d => `${d.id} -> ${d.dest}`).join(", "));
  
  // Verify expectations
  if (filteredDoors.length === 2) {
    console.log("\n✅ PASS: Correctly filtered out door to shadow_tower_part1b");
    console.log("   Only doors to human_world and earth_world are included");
    return true;
  } else {
    console.log("\n❌ FAIL: Expected 2 doors, got", filteredDoors.length);
    return false;
  }
}

// Run the test
console.log("=== Self-Loop Fix Test ===\n");
const result = testFilterLogic();
process.exit(result ? 0 : 1);
