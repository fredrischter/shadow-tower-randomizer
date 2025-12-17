# Neo4j Map Visualization: Exit Label Improvement

## Problem
Previously, all arrows (relationships) in the neo4j graph visualization showed generic labels like "EXIT" or "JUMP", which didn't provide useful information about which specific door or entrance was being used.

## Solution
Updated the arrow labels to show meaningful names in the format: **"exit name - entrance name"**

## Example Changes

### Before (Generic Labels)
```json
{
  "id": "0",
  "type": "EXIT",
  "startNode": "0",
  "endNode": "1",
  "properties": {
    "exitId": "0",
    "exitName": "Tower Top",
    "details": "r0 y0"
  }
}
```
**Visual:** Arrow just shows "EXIT"

### After (Descriptive Labels)
```json
{
  "id": "0",
  "type": "Tower Top - Church",
  "startNode": "0",
  "endNode": "1",
  "properties": {
    "exitId": "0",
    "exitName": "Tower Top",
    "details": "r0 y0"
  }
}
```
**Visual:** Arrow shows "Tower Top - Church"

## More Examples

| From Area | Exit ID | To Area | Wayback ID | Old Label | New Label |
|-----------|---------|---------|------------|-----------|-----------|
| shadow_tower_part1a | 0 | human_world_solitary_region | 38 | EXIT | **Tower Top - Church** |
| shadow_tower_part1b | 4 | human_world_cursed_region | 31 | EXIT | **Edge - Guardian side** |
| shadow_tower_part1b | 8 | human_world_forgotten_region | 34 | EXIT | **Middle - Exit** |
| shadow_tower_part1b | jump | shadow_tower_part1c | - | JUMP | **JUMP** *(unchanged)* |

## Benefits

1. **Better Navigation**: Players can see exactly which door they're looking at
2. **Easier Planning**: Can identify specific routes through the map
3. **More Context**: Understand the connection between areas at a glance
4. **Debugging Aid**: Developers can verify door connections are correct

## Implementation Details

**File Changed:** `randomize.js` (lines 1885-1894)

**Logic:**
1. Get exit name from `exitsNames[sourceArea/exitId]`
2. Get entrance name from `exitsNames[destArea/wayBackId]`
3. Format as "exitName - entranceName"
4. Fall back to ID if name not found in constants

**Test Coverage:**
- Created `test_neo4j_labels.js` with 4 test cases
- All tests passing ✓

## Code Changes

```javascript
// Before
neo4jData.relationships.push({
    id: neo4jData.relationships.length.toString(),
    type: exit.type === "jump" ? "JUMP" : "EXIT",
    startNode: nodeMap.get(area.name),
    endNode: nodeMap.get(exit.dest),
    properties: {
        exitId: exit.id,
        exitName: exitsNames[exitName] || exitName,
        details: exitObjText
    }
});

// After
// Get exit and entrance names for the relationship label
var exitLabel = exitsNames[exitName] || exit.id;
var entranceLabel = "";
if (exit.wayBackId) {
    var entranceName = normalizeAreaName(exit.dest) + "/" + exit.wayBackId;
    entranceLabel = exitsNames[entranceName] || exit.wayBackId;
}
// Format: "exitName - entranceName" for better visualization
var relationshipType = exit.type === "jump" ? "JUMP" : (entranceLabel ? exitLabel + " - " + entranceLabel : exitLabel);

neo4jData.relationships.push({
    id: neo4jData.relationships.length.toString(),
    type: relationshipType,
    startNode: nodeMap.get(area.name),
    endNode: nodeMap.get(exit.dest),
    properties: {
        exitId: exit.id,
        exitName: exitsNames[exitName] || exitName,
        details: exitObjText
    }
});
```

## Visual Impact

When viewing the interactive neo4jd3 graph visualization in `maps.html`, users will now see:
- ✅ Meaningful door names on each arrow
- ✅ Both the exit and entrance names clearly labeled
- ✅ Easier to understand the map structure
- ✅ Better user experience for planning routes

Previously, all arrows just showed "EXIT" making it difficult to distinguish between different paths.
