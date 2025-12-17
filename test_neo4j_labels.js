#!/usr/bin/env node
'use strict';

// Test script to verify neo4j exit label generation

// Load constants to get exitsNames
require('./constants.js');
const functions = require('./functions.js');

// Test data
const testCases = [
    {
        name: "Tower Top to Church",
        area: { name: "shadow_tower_part1a" },
        exit: {
            id: "0",
            dest: "human_world_solitary_region",
            wayBackId: "38",
            type: "door"
        },
        expected: "Tower Top - Church"
    },
    {
        name: "Edge to Guardian side",
        area: { name: "shadow_tower_part1b" },
        exit: {
            id: "4",
            dest: "human_world_cursed_region",
            wayBackId: "31",
            type: "door"
        },
        expected: "Edge - Guardian side"
    },
    {
        name: "Jump (no wayback)",
        area: { name: "shadow_tower_part1b" },
        exit: {
            id: "jump",
            dest: "shadow_tower_part1c",
            type: "jump"
        },
        expected: "JUMP"
    },
    {
        name: "Exit with no entrance name",
        area: { name: "test_area" },
        exit: {
            id: "99",
            dest: "test_dest",
            wayBackId: "99",
            type: "door"
        },
        expected: "99 - 99"  // Both fall back to ID when not in exitsNames
    }
];

console.log("Testing neo4j exit label generation...\n");

let passed = 0;
let failed = 0;

testCases.forEach(testCase => {
    // Apply the logic from randomize.js
    var exitName = normalizeAreaName(testCase.area.name) + "/" + testCase.exit.id;
    var exitLabel = exitsNames[exitName] || testCase.exit.id;
    var entranceLabel = "";
    if (testCase.exit.wayBackId) {
        var entranceName = normalizeAreaName(testCase.exit.dest) + "/" + testCase.exit.wayBackId;
        entranceLabel = exitsNames[entranceName] || testCase.exit.wayBackId;
    }
    var relationshipType = testCase.exit.type === "jump" ? "JUMP" : (entranceLabel ? exitLabel + " - " + entranceLabel : exitLabel);
    
    const success = relationshipType === testCase.expected;
    
    if (success) {
        console.log("✓ PASS:", testCase.name);
        console.log("  Result:", relationshipType);
        passed++;
    } else {
        console.log("✗ FAIL:", testCase.name);
        console.log("  Expected:", testCase.expected);
        console.log("  Got:     ", relationshipType);
        failed++;
    }
    console.log();
});

console.log("===================");
console.log(`Total: ${testCases.length} tests`);
console.log(`Passed: ${passed}`);
console.log(`Failed: ${failed}`);

process.exit(failed > 0 ? 1 : 0);
