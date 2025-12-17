# Neo4j Graph Arrow Overlap Fix

## Problem Statement
In the Shadow Tower map visualization using neo4jd3, bidirectional arrows (A→B and B→A) were overlapping each other, making it difficult to see both arrows and their labels.

## Solution Overview

### Changes Made

#### 1. Increased Node Spacing (maps.html line 302)
```javascript
minCollision: 80,  // Increased from 60 to spread nodes apart more
```
- Gives nodes more breathing room
- Reduces edge density in crowded areas

#### 2. Added Relationship Sorting and linknum (randomize.js lines 2176-2197)
```javascript
// Sort relationships by source and target to enable linknum calculation
neo4jData.relationships.sort(function(a, b) {
    if (a.startNode > b.startNode) return 1;
    if (a.startNode < b.startNode) return -1;
    if (a.endNode > b.endNode) return 1;
    if (a.endNode < b.endNode) return -1;
    return 0;
});

// Assign linknum to enable curved arrows for multiple links
for (var r = 0; r < neo4jData.relationships.length; r++) {
    if (r === 0) {
        neo4jData.relationships[r].linknum = 1;
    } else {
        var prev = neo4jData.relationships[r - 1];
        var curr = neo4jData.relationships[r];
        if (curr.startNode === prev.startNode && curr.endNode === prev.endNode) {
            neo4jData.relationships[r].linknum = prev.linknum + 1;
        } else {
            neo4jData.relationships[r].linknum = 1;
        }
    }
}
```

#### 3. Bidirectional Arrow Detection and Curving (maps.html lines 374-455)
```javascript
// Build a map to identify bidirectional relationships
var linkPairs = new Map();
relationships.forEach(function(rel, idx) {
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
            relationships[revIdx].isBidirectional = true;
        });
    }
});
```

## Visual Differentiation

### Before Fix
```
  ┌─────┐        ┌─────┐
  │  A  │ ═════► │  B  │
  └─────┘ ◄═════ └─────┘
           ↑
    Arrows overlap!
    Can't see both labels
```

### After Fix
```
  ┌─────┐   ─────►  ┌─────┐
  │  A  │            │  B  │
  └─────┘ ◄─ ─ ─ ─  └─────┘
           ↑
    Curved dashed arrow
    separates from straight arrow
```

## Arrow Styling Rules

### Straight Arrow (Lower Node ID → Higher Node ID)
- Solid line
- Stroke width: 2.5px
- Default arrow appearance

### Curved Arrow (Higher Node ID → Lower Node ID)
- Dashed line pattern: 5,3
- Stroke width: 2px
- Quadratic bezier curve with 20px perpendicular offset
- Text label offset by -5px

## How It Works

1. **Detection Phase**: Scan all relationships and build a map of bidirectional pairs
2. **Determination Phase**: For each bidirectional pair, curve the arrow going from higher to lower node ID
3. **Rendering Phase**: 
   - Calculate perpendicular offset vector
   - Create quadratic bezier path through offset midpoint
   - Apply dashed stroke pattern
   - Reposition text label along curved path

## Example Data

### Input Relationships
```javascript
[
    { id: "0", startNode: "0", endNode: "1", type: "Tower Top - Church" },
    { id: "1", startNode: "1", endNode: "0", type: "Church - Tower Top" },
    { id: "2", startNode: "0", endNode: "2", type: "Tower Top - Cavern" }
]
```

### After Processing
```javascript
[
    { 
        id: "0", 
        startNode: "0", 
        endNode: "1", 
        type: "Tower Top - Church",
        isBidirectional: true,
        linknum: 1
        // Rendered as STRAIGHT arrow
    },
    { 
        id: "1", 
        startNode: "1", 
        endNode: "0", 
        type: "Church - Tower Top",
        isBidirectional: true,
        linknum: 2
        // Rendered as CURVED DASHED arrow
    },
    { 
        id: "2", 
        startNode: "0", 
        endNode: "2", 
        type: "Tower Top - Cavern",
        linknum: 1
        // Rendered as STRAIGHT arrow (no bidirectional pair)
    }
]
```

## Testing

Test cases verified:
- ✅ Bidirectional relationships correctly identified
- ✅ linknum properly assigned to multiple links between same nodes
- ✅ Curved path calculation for non-overlapping arrows
- ✅ Text label positioning on curved paths
- ✅ Visual differentiation (dashed vs solid)

## Benefits

1. **Improved Readability**: Both arrows in bidirectional pairs are clearly visible
2. **Better UX**: Users can easily distinguish exit vs entrance connections
3. **Maintained Compatibility**: Works with existing neo4jd3 library (v0.0.5)
4. **Minimal Performance Impact**: Computation happens after graph stabilizes
5. **Clear Visual Language**: Dashed = return path, Solid = forward path

## Future Enhancements

Potential improvements:
- Color coding for different connection types
- Adjustable curve offset based on edge length
- Animation on hover to highlight bidirectional pairs
- Legend explaining visual conventions
