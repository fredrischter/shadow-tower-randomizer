#!/usr/bin/env node

/**
 * Test script for Neo4j arrow overlap fix
 * Verifies bidirectional arrow detection and linknum calculation
 */

console.log('Testing Neo4j Arrow Overlap Fix...\n');

// Test 1: Bidirectional relationship detection
console.log('Test 1: Bidirectional Relationship Detection');
console.log('='.repeat(50));

var testRelationships = [
    { id: "0", startNode: "0", endNode: "1", type: "EXIT" },
    { id: "1", startNode: "1", endNode: "0", type: "EXIT" },  // Bidirectional with 0
    { id: "2", startNode: "0", endNode: "2", type: "EXIT" },
    { id: "3", startNode: "2", endNode: "1", type: "EXIT" }   // Not bidirectional
];

// Build a map to identify bidirectional relationships
var linkPairs = new Map();
testRelationships.forEach(function(rel, idx) {
    var key = rel.startNode + '-' + rel.endNode;
    var reverseKey = rel.endNode + '-' + rel.startNode;
    
    if (!linkPairs.has(key)) {
        linkPairs.set(key, []);
    }
    linkPairs.get(key).push(idx);
    
    // Check if reverse exists
    if (linkPairs.has(reverseKey)) {
        // Mark both as bidirectional
        rel.isBidirectional = true;
        var reverseIndices = linkPairs.get(reverseKey);
        reverseIndices.forEach(function(revIdx) {
            testRelationships[revIdx].isBidirectional = true;
        });
    }
});

var test1Passed = true;
testRelationships.forEach(function(rel, idx) {
    var shouldCurve = rel.isBidirectional && rel.startNode > rel.endNode;
    var expected = idx === 0 || idx === 1; // First two should be bidirectional
    var isBiExpected = (rel.isBidirectional ? true : false) === expected;
    var status = isBiExpected ? '✓' : '✗';
    if (!isBiExpected) test1Passed = false;
    
    console.log(status + ' Rel ' + idx + ': ' + 
               rel.startNode + ' → ' + rel.endNode + 
               ' | Bidirectional: ' + (rel.isBidirectional ? 'YES' : 'NO') +
               ' (expected: ' + (expected ? 'YES' : 'NO') + ')' +
               ' | Should Curve: ' + (shouldCurve ? 'YES' : 'NO'));
});

console.log('\nTest 1: ' + (test1Passed ? 'PASSED ✓' : 'FAILED ✗'));

// Test 2: linknum calculation
console.log('\n\nTest 2: linknum Calculation');
console.log('='.repeat(50));

var testRelationships2 = [
    { id: "0", startNode: "0", endNode: "1", type: "EXIT" },
    { id: "1", startNode: "1", endNode: "0", type: "EXIT" },
    { id: "2", startNode: "0", endNode: "2", type: "EXIT" },
    { id: "3", startNode: "0", endNode: "1", type: "JUMP" },  // Duplicate link
    { id: "4", startNode: "2", endNode: "1", type: "EXIT" }
];

// Sort relationships by source and target
testRelationships2.sort(function(a, b) {
    if (a.startNode > b.startNode) return 1;
    if (a.startNode < b.startNode) return -1;
    if (a.endNode > b.endNode) return 1;
    if (a.endNode < b.endNode) return -1;
    return 0;
});

// Assign linknum
for (var r = 0; r < testRelationships2.length; r++) {
    if (r === 0) {
        testRelationships2[r].linknum = 1;
    } else {
        var prev = testRelationships2[r - 1];
        var curr = testRelationships2[r];
        if (curr.startNode === prev.startNode && curr.endNode === prev.endNode) {
            testRelationships2[r].linknum = prev.linknum + 1;
        } else {
            testRelationships2[r].linknum = 1;
        }
    }
}

var test2Passed = true;
var expectedLinknums = [1, 2, 1, 1, 1]; // After sorting
testRelationships2.forEach(function(rel, idx) {
    var status = (rel.linknum === expectedLinknums[idx]) ? '✓' : '✗';
    if (rel.linknum !== expectedLinknums[idx]) test2Passed = false;
    
    console.log(status + ' ' + rel.startNode + ' → ' + rel.endNode + 
               ' (' + rel.type + ') - linknum: ' + rel.linknum +
               ' (expected: ' + expectedLinknums[idx] + ')');
});

console.log('\nTest 2: ' + (test2Passed ? 'PASSED ✓' : 'FAILED ✗'));

// Test 3: Curved path calculation
console.log('\n\nTest 3: Curved Path Calculation');
console.log('='.repeat(50));

function calculateCurvedPath(sourcePos, targetPos, nodeRadius, arrowSize) {
    var dx = targetPos.x - sourcePos.x;
    var dy = targetPos.y - sourcePos.y;
    var dist = Math.sqrt(dx * dx + dy * dy);
    
    if (dist === 0) return null;
    
    // Perpendicular offset (20 pixels)
    var offsetDist = 20;
    var offsetX = -dy / dist * offsetDist;
    var offsetY = dx / dist * offsetDist;
    
    // Control point at midpoint with offset
    var midX = (sourcePos.x + targetPos.x) / 2 + offsetX;
    var midY = (sourcePos.y + targetPos.y) / 2 + offsetY;
    
    // Start at source node edge
    var angle = Math.atan2(dy, dx);
    var startX = sourcePos.x + Math.cos(angle) * nodeRadius;
    var startY = sourcePos.y + Math.sin(angle) * nodeRadius;
    
    // End at target node edge
    var endX = targetPos.x - Math.cos(angle) * (nodeRadius + arrowSize);
    var endY = targetPos.y - Math.sin(angle) * (nodeRadius + arrowSize);
    
    return {
        startX: startX,
        startY: startY,
        midX: midX,
        midY: midY,
        endX: endX,
        endY: endY,
        pathData: 'M ' + startX + ' ' + startY + 
                  ' Q ' + midX + ' ' + midY + 
                  ' ' + endX + ' ' + endY
    };
}

var testPos1 = { x: 100, y: 150 };
var testPos2 = { x: 350, y: 150 };
var result = calculateCurvedPath(testPos1, testPos2, 25, 4);

var test3Passed = result !== null && 
                  (result.midX !== (testPos1.x + testPos2.x) / 2 || 
                   result.midY !== (testPos1.y + testPos2.y) / 2) &&
                  result.pathData.indexOf('Q') > -1; // Has quadratic bezier and offset

if (result) {
    console.log('✓ Path calculated successfully');
    console.log('  Start: (' + Math.round(result.startX) + ', ' + Math.round(result.startY) + ')');
    console.log('  Control: (' + Math.round(result.midX) + ', ' + Math.round(result.midY) + ')');
    console.log('  End: (' + Math.round(result.endX) + ', ' + Math.round(result.endY) + ')');
    console.log('  Offset from straight line: ' + (result.midY !== testPos1.y ? 'YES' : 'NO'));
} else {
    console.log('✗ Path calculation failed');
}

console.log('\nTest 3: ' + (test3Passed ? 'PASSED ✓' : 'FAILED ✗'));

// Summary
console.log('\n' + '='.repeat(50));
console.log('SUMMARY');
console.log('='.repeat(50));
var allPassed = test1Passed && test2Passed && test3Passed;
console.log('All tests: ' + (allPassed ? 'PASSED ✓✓✓' : 'FAILED'));
console.log('');

process.exit(allPassed ? 0 : 1);
