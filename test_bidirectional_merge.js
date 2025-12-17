#!/usr/bin/env node

/**
 * Test script for bidirectional relationship merging
 * Verifies that A→B and B→A are merged into a single bidirectional arrow
 */

console.log('Testing Bidirectional Relationship Merging...\n');

// Test 1: Basic bidirectional merging
console.log('Test 1: Basic Bidirectional Merging');
console.log('='.repeat(60));

var testRelationships = [
    { id: "0", startNode: "0", endNode: "1", type: "EXIT A->B" },
    { id: "1", startNode: "1", endNode: "0", type: "EXIT B->A" },  // Bidirectional pair
    { id: "2", startNode: "0", endNode: "2", type: "EXIT A->C" },
    { id: "3", startNode: "2", endNode: "1", type: "EXIT C->B" }   // Not bidirectional
];

// Implement the merging logic from randomize.js
var mergedRelationships = [];
var processedPairs = new Set();

testRelationships.forEach(function(rel) {
    var key = rel.startNode + '-' + rel.endNode;
    var reverseKey = rel.endNode + '-' + rel.startNode;
    
    // Check if we've already processed this as part of a bidirectional pair
    if (processedPairs.has(key)) {
        return; // Skip, already handled
    }
    
    // Look for the reverse relationship
    var reverseRel = testRelationships.find(function(r) {
        return r.startNode === rel.endNode && r.endNode === rel.startNode;
    });
    
    if (reverseRel) {
        // Bidirectional relationship found - merge into one with both directions
        // Use the relationship with lower startNode for consistency
        var primaryRel = rel.startNode < rel.endNode ? rel : reverseRel;
        var secondaryRel = rel.startNode < rel.endNode ? reverseRel : rel;
        
        // Mark as bidirectional and store both relationship types
        mergedRelationships.push({
            id: primaryRel.id,
            type: primaryRel.type,
            reverseType: secondaryRel.type,
            startNode: primaryRel.startNode,
            endNode: primaryRel.endNode,
            properties: primaryRel.properties,
            isBidirectional: true,
            linknum: 1
        });
        
        // Mark both directions as processed
        processedPairs.add(key);
        processedPairs.add(reverseKey);
    } else {
        // Unidirectional relationship - keep as is
        mergedRelationships.push({
            id: rel.id,
            type: rel.type,
            startNode: rel.startNode,
            endNode: rel.endNode,
            properties: rel.properties,
            isBidirectional: false,
            linknum: 1
        });
        processedPairs.add(key);
    }
});

console.log('Original relationships: ' + testRelationships.length);
console.log('Merged relationships: ' + mergedRelationships.length);
console.log('');

var test1Passed = true;

// Expected: 3 relationships (one bidirectional 0-1, and two unidirectional 0-2 and 2-1)
if (mergedRelationships.length !== 3) {
    console.log('✗ FAILED: Expected 3 merged relationships, got ' + mergedRelationships.length);
    test1Passed = false;
} else {
    console.log('✓ PASSED: Correct number of merged relationships (3)');
}

mergedRelationships.forEach(function(rel, idx) {
    var symbol = rel.isBidirectional ? '↔' : '→';
    var label = rel.isBidirectional 
        ? rel.type + ' ↔ ' + rel.reverseType
        : rel.type;
    
    console.log('  Rel ' + idx + ': Node ' + rel.startNode + ' ' + symbol + ' Node ' + rel.endNode);
    console.log('         Label: ' + label);
    console.log('         Bidirectional: ' + (rel.isBidirectional ? 'YES' : 'NO'));
    
    // Verify the bidirectional pair
    if (idx === 0) {
        if (!rel.isBidirectional || rel.startNode !== '0' || rel.endNode !== '1') {
            console.log('         ✗ FAILED: Should be bidirectional 0↔1');
            test1Passed = false;
        } else {
            console.log('         ✓ Correct');
        }
    }
});

console.log('\nTest 1: ' + (test1Passed ? 'PASSED ✓' : 'FAILED ✗'));

// Test 2: Multiple bidirectional pairs
console.log('\n\nTest 2: Multiple Bidirectional Pairs');
console.log('='.repeat(60));

var testRelationships2 = [
    { id: "0", startNode: "0", endNode: "1", type: "A→B" },
    { id: "1", startNode: "1", endNode: "0", type: "B→A" },  // Pair 1
    { id: "2", startNode: "2", endNode: "3", type: "C→D" },
    { id: "3", startNode: "3", endNode: "2", type: "D→C" },  // Pair 2
    { id: "4", startNode: "4", endNode: "5", type: "E→F" }   // Unidirectional
];

var mergedRelationships2 = [];
var processedPairs2 = new Set();

testRelationships2.forEach(function(rel) {
    var key = rel.startNode + '-' + rel.endNode;
    var reverseKey = rel.endNode + '-' + rel.startNode;
    
    if (processedPairs2.has(key)) return;
    
    var reverseRel = testRelationships2.find(function(r) {
        return r.startNode === rel.endNode && r.endNode === rel.startNode;
    });
    
    if (reverseRel) {
        var primaryRel = rel.startNode < rel.endNode ? rel : reverseRel;
        var secondaryRel = rel.startNode < rel.endNode ? reverseRel : rel;
        
        mergedRelationships2.push({
            id: primaryRel.id,
            type: primaryRel.type,
            reverseType: secondaryRel.type,
            startNode: primaryRel.startNode,
            endNode: primaryRel.endNode,
            isBidirectional: true,
            linknum: 1
        });
        
        processedPairs2.add(key);
        processedPairs2.add(reverseKey);
    } else {
        mergedRelationships2.push({
            id: rel.id,
            type: rel.type,
            startNode: rel.startNode,
            endNode: rel.endNode,
            isBidirectional: false,
            linknum: 1
        });
        processedPairs2.add(key);
    }
});

var test2Passed = true;

console.log('Original relationships: ' + testRelationships2.length);
console.log('Merged relationships: ' + mergedRelationships2.length);
console.log('');

// Expected: 3 relationships (two bidirectional + one unidirectional)
if (mergedRelationships2.length !== 3) {
    console.log('✗ FAILED: Expected 3 merged relationships, got ' + mergedRelationships2.length);
    test2Passed = false;
} else {
    console.log('✓ PASSED: Correct number of merged relationships (3)');
}

var bidirectionalCount = mergedRelationships2.filter(r => r.isBidirectional).length;
if (bidirectionalCount !== 2) {
    console.log('✗ FAILED: Expected 2 bidirectional relationships, got ' + bidirectionalCount);
    test2Passed = false;
} else {
    console.log('✓ PASSED: Correct number of bidirectional relationships (2)');
}

mergedRelationships2.forEach(function(rel, idx) {
    var symbol = rel.isBidirectional ? '↔' : '→';
    console.log('  Rel ' + idx + ': Node ' + rel.startNode + ' ' + symbol + ' Node ' + rel.endNode +
                ' (' + (rel.isBidirectional ? 'bidirectional' : 'unidirectional') + ')');
});

console.log('\nTest 2: ' + (test2Passed ? 'PASSED ✓' : 'FAILED ✗'));

// Summary
console.log('\n' + '='.repeat(60));
console.log('SUMMARY');
console.log('='.repeat(60));
var allPassed = test1Passed && test2Passed;
console.log('All tests: ' + (allPassed ? 'PASSED ✓✓✓' : 'FAILED'));
console.log('');

if (allPassed) {
    console.log('✅ Bidirectional merging logic is working correctly!');
    console.log('   - Bidirectional pairs are merged into single arrows');
    console.log('   - Unidirectional relationships remain unchanged');
    console.log('   - Both direction labels are preserved');
} else {
    console.log('❌ Some tests failed. Please review the implementation.');
}

process.exit(allPassed ? 0 : 1);
