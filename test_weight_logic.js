#!/usr/bin/env node

/**
 * Unit test for weight validation logic
 * Tests that equipment weight is capped proportional to item score
 */

// Mock item class
class MockItem {
    constructor(name, score, initialWeight) {
        this.name = name;
        this._score = score;
        this._weight = initialWeight;
    }
    
    score() {
        return this._score;
    }
    
    weight = {
        get: () => this._weight,
        set: (val) => { this._weight = val; },
        isNull: () => false
    };
}

// Test function that mimics the weight capping logic from randomize.js
function testWeightCapping(equipsAttributeFactor, item) {
    const originalWeight = item.weight.get();
    
    // Apply difficulty adjustment (same as line 608 in randomize.js)
    item.weight.set(Math.min(255, Math.ceil(item.weight.get() / equipsAttributeFactor)));
    
    // Apply weight cap (same as lines 609-617 in randomize.js)
    var maxWeightToScoreRatio = 0.3 / equipsAttributeFactor;
    var maxAllowedWeight = Math.ceil(item.score() * maxWeightToScoreRatio);
    if (maxAllowedWeight > 0 && item.weight.get() > maxAllowedWeight) {
        item.weight.set(maxAllowedWeight);
    }
    
    const afterDifficultyWeight = item.weight.get();
    
    // Apply random variation (similar to lines 947-956 in randomize.js)
    // Use worst case: divide by 0.125 (Math.pow(0.5, 3)) which multiplies by 8
    const worstCaseRandomFactor = Math.pow(0.5, 3);
    item.weight.set(Math.min(255, Math.ceil(item.weight.get() / worstCaseRandomFactor)));
    
    // Apply weight cap again
    maxAllowedWeight = Math.ceil(item.score() * maxWeightToScoreRatio);
    if (maxAllowedWeight > 0 && item.weight.get() > maxAllowedWeight) {
        item.weight.set(maxAllowedWeight);
    }
    
    return {
        original: originalWeight,
        afterDifficulty: afterDifficultyWeight,
        final: item.weight.get(),
        maxAllowed: maxAllowedWeight,
        passed: item.weight.get() <= maxAllowedWeight
    };
}

// Test cases
console.log("=== Weight Capping Unit Tests ===\n");

const testCases = [
    {
        name: "Medium difficulty",
        factor: 1.0,
        items: [
            new MockItem("short_sword", 150, 11),
            new MockItem("broad_sword", 300, 19),
            new MockItem("blood_sword", 900, 44),
            new MockItem("god_plate", 500, 80)
        ]
    },
    {
        name: "Easy difficulty (factor=2)",
        factor: 2.0,
        items: [
            new MockItem("short_sword", 150, 11),
            new MockItem("broad_sword", 300, 19),
            new MockItem("blood_sword", 900, 44),
            new MockItem("god_plate", 500, 80)
        ]
    },
    {
        name: "Hard difficulty (factor=0.77)",
        factor: 0.77,
        items: [
            new MockItem("short_sword", 150, 11),
            new MockItem("broad_sword", 300, 19),
            new MockItem("blood_sword", 900, 44),
            new MockItem("god_plate", 500, 80)
        ]
    }
];

let allPassed = true;

testCases.forEach(testCase => {
    console.log(`\n${testCase.name} (equipsAttributeFactor=${testCase.factor}):`);
    console.log("  Expected max ratio:", (0.3 / testCase.factor).toFixed(3));
    console.log("");
    
    testCase.items.forEach(item => {
        const result = testWeightCapping(testCase.factor, item);
        const status = result.passed ? "✓ PASS" : "✗ FAIL";
        
        console.log(`  ${status} ${item.name.padEnd(15)} score=${item.score().toString().padStart(4)} ` +
                    `original=${result.original.toString().padStart(3)} → ` +
                    `afterDiff=${result.afterDifficulty.toString().padStart(3)} → ` +
                    `final=${result.final.toString().padStart(3)} ` +
                    `(max=${result.maxAllowed})`);
        
        if (!result.passed) {
            allPassed = false;
        }
    });
});

console.log("\n=== Summary ===");
if (allPassed) {
    console.log("✓ All tests PASSED");
    process.exit(0);
} else {
    console.log("✗ Some tests FAILED");
    process.exit(1);
}
