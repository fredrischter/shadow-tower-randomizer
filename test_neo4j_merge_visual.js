#!/usr/bin/env node

/**
 * Visual test for neo4j relationship merging
 * Shows before/after comparison of relationship counts
 */

console.log('Neo4j Bidirectional Relationship Merger - Visual Test');
console.log('='.repeat(70));
console.log('');

// Sample relationships from Shadow Tower map
var sampleRelationships = [
    { id: "0", startNode: "shadow_tower_1a", endNode: "solitary_region", type: "Tower Top" },
    { id: "1", startNode: "solitary_region", endNode: "shadow_tower_1a", type: "Church Entrance" },
    
    { id: "2", startNode: "shadow_tower_1a", endNode: "hidden_region", type: "Edge" },
    { id: "3", startNode: "hidden_region", endNode: "shadow_tower_1a", type: "Stairway" },
    
    { id: "4", startNode: "shadow_tower_1a", endNode: "cursed_region", type: "Passage" },
    { id: "5", startNode: "cursed_region", endNode: "shadow_tower_1a", type: "Return" },
    
    { id: "6", startNode: "solitary_region", endNode: "hidden_region", type: "Door" },
    // Note: No return door from hidden to solitary (unidirectional)
    
    { id: "7", startNode: "hidden_region", endNode: "forgotten_region", type: "Exit" },
    { id: "8", startNode: "forgotten_region", endNode: "hidden_region", type: "Entrance" },
];

console.log('BEFORE MERGING:');
console.log('-'.repeat(70));
console.log('Total relationships:', sampleRelationships.length);
console.log('');
console.log('Connections:');
sampleRelationships.forEach(function(rel, idx) {
    console.log('  ' + (idx + 1) + '. ' + rel.startNode.padEnd(25) + ' → ' + 
                rel.endNode.padEnd(25) + ' (' + rel.type + ')');
});

// Apply merging logic
var mergedRelationships = [];
var processedPairs = new Set();

sampleRelationships.forEach(function(rel) {
    var key = rel.startNode + '-' + rel.endNode;
    var reverseKey = rel.endNode + '-' + rel.startNode;
    
    if (processedPairs.has(key)) return;
    
    var reverseRel = sampleRelationships.find(function(r) {
        return r.startNode === rel.endNode && r.endNode === rel.startNode;
    });
    
    if (reverseRel) {
        var primaryRel = rel.startNode < rel.endNode ? rel : reverseRel;
        var secondaryRel = rel.startNode < rel.endNode ? reverseRel : rel;
        
        mergedRelationships.push({
            id: primaryRel.id,
            type: primaryRel.type,
            reverseType: secondaryRel.type,
            startNode: primaryRel.startNode,
            endNode: primaryRel.endNode,
            isBidirectional: true
        });
        
        processedPairs.add(key);
        processedPairs.add(reverseKey);
    } else {
        mergedRelationships.push({
            id: rel.id,
            type: rel.type,
            startNode: rel.startNode,
            endNode: rel.endNode,
            isBidirectional: false
        });
        processedPairs.add(key);
    }
});

console.log('');
console.log('AFTER MERGING:');
console.log('-'.repeat(70));
console.log('Total relationships:', mergedRelationships.length);
console.log('Reduction:', (sampleRelationships.length - mergedRelationships.length), 'relationships removed');
console.log('');
console.log('Connections:');
mergedRelationships.forEach(function(rel, idx) {
    var arrow = rel.isBidirectional ? ' ↔ ' : ' → ';
    var label = rel.isBidirectional 
        ? rel.type + ' ↔ ' + rel.reverseType
        : rel.type;
    
    console.log('  ' + (idx + 1) + '. ' + rel.startNode.padEnd(25) + arrow + 
                rel.endNode.padEnd(25));
    console.log('     Label: ' + label);
    console.log('     ' + (rel.isBidirectional ? '✓ Bidirectional (single arrow with heads on both ends)' : '  Unidirectional (single arrowhead)'));
});

console.log('');
console.log('='.repeat(70));
console.log('VISUALIZATION IMPROVEMENTS:');
console.log('='.repeat(70));
console.log('');
console.log('✓ Reduced relationship count: ' + sampleRelationships.length + ' → ' + mergedRelationships.length);
console.log('✓ No overlapping arrows for bidirectional connections');
console.log('✓ Clear visual distinction: ↔ vs →');
console.log('✓ Both direction labels preserved and visible');
console.log('✓ Simpler, cleaner graph layout');
console.log('');

var bidirCount = mergedRelationships.filter(r => r.isBidirectional).length;
var unidirCount = mergedRelationships.filter(r => !r.isBidirectional).length;

console.log('Summary:');
console.log('  Bidirectional connections: ' + bidirCount + ' (shown with ↔)');
console.log('  Unidirectional connections: ' + unidirCount + ' (shown with →)');
console.log('');
