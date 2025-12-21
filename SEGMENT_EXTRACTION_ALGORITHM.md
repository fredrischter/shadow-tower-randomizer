# Pipe/Funnel Segment Extraction and Insertion Algorithm

## Overview

This document describes the algorithm for extracting pipe and funnel segments from the Shadow Tower map graph and re-inserting them at random locations.

## Problem Statement

Instead of swapping pipe/funnel segments in-place, we want to:
1. Remove ALL pipe and funnel segments from the graph
2. Connect their endpoints directly (bypassing the segment)
3. Re-insert segments at random new locations

## Key Concepts

### Pipe vs Funnel Areas

- **Pipe**: Bidirectional segments with 2 pipe-end exits. Can be inverted during insertion.
- **Funnel**: Unidirectional segments with funnel-input and funnel-output exits. Must maintain directionality.

### Bidirectional Wayback Connections

Every door in Shadow Tower has a wayback connection:
```
Area A, exit 5  → Area B, entrance 12
Area B, exit 12 → Area A, entrance 5
```

Both connections must be kept in sync.

## Algorithm

### Phase 1: Extraction

For each segment B in chain A→B→C:

1. **Save original state** (BEFORE any modifications):
   ```javascript
   const originalInputExit = JSON.parse(JSON.stringify(inputExit));
   const originalOutputExit = JSON.parse(JSON.stringify(outputExit));
   ```

2. **Find incoming connections**:
   - Find all exits pointing to B's input
   - Find all exits pointing to B's output

3. **Bypass segment** (connect A directly to C):
   - Update A's exit to point to C
   - Update C's wayback to point to A
   
4. **Clear segment's own exits**:
   ```javascript
   inputExit.dest = null;
   inputExit.wayBackId = null;
   outputExit.dest = null;
   outputExit.wayBackId = null;
   ```

5. **Return segment metadata** with original exit info for later insertion

### Phase 2: Insertion

For each extracted segment:

1. **Find insertion points**:
   - Any door exit in the map
   - Exclude segment's own area
   - Exclude original connection points (prevents re-inserting at same location)

2. **Insert segment between door X→Y**:
   ```
   Before: X → Y
   After:  X → Segment → Y
   ```

3. **Update four connections**:
   - X's exit → Segment input
   - Segment input → X  
   - Segment output → Y
   - Y's wayback → Segment output

4. **For pipes**: Randomly invert 50% of the time
5. **For funnels**: Maintain original directionality

## Critical Implementation Details

### Issue 1: Stale Exit References

**Problem**: After extraction, segment's exit objects still reference their old destinations.

**Solution**: Save original state BEFORE extraction, then clear exits after extraction:
```javascript
// Save BEFORE modifications
const originalInputExit = JSON.parse(JSON.stringify(inputExit));

// ... do extraction ...

// Clear AFTER extraction
inputExit.dest = null;
inputExit.wayBackId = null;
```

### Issue 2: Re-insertion at Original Location

**Problem**: Random insertion might select the same door that originally connected to the segment.

**Solution**: Filter out original connection points when building insertion candidate list:
```javascript
const originallyConnectedToSegment = (
    (exit.dest === segment.inputExit.dest && exit.wayBackId === segment.inputExit.wayBackId) ||
    (exit.dest === segment.outputExit.dest && exit.wayBackId === segment.outputExit.wayBackId)
);
if (!originallyConnectedToSegment) {
    allDoors.push({ area: area, exit: exit });
}
```

### Issue 3: Bidirectional Wayback Updates

**Problem**: When connecting A→C (bypassing B), must update both directions.

**Solution**: Update both the forward connection AND the wayback:
```javascript
// Update A's exit to go to C
incoming.exit.dest = outputExit.dest;
incoming.exit.wayBackId = outputExit.wayBackId;

// Update C's wayback to come from A  
const destArea = map.find(a => a.name === outputExit.dest);
const waybackInDest = destArea.exits.find(e => e.id === outputExit.wayBackId);
waybackInDest.dest = incoming.area.name;
waybackInDest.wayBackId = incoming.exit.id;
```

## Testing

All 7 segments (2 pipes + 5 funnels) successfully extract and insert:
- ✓ human_world_cursed_region (pipe)
- ✓ illusion_world_bewilderment_domain (pipe)
- ✓ earth_world_stone_cavern (funnel)
- ✓ fire_world_phoenix_cave (funnel)
- ✓ water_world_sunken_river_area (funnel)
- ✓ water_world_watery_labyrinth_area (funnel)
- ✓ death_world_undead_layer (funnel)

Walk validation confirms the resulting map is complete and walkable (isComplete: true).

## Future Enhancements

- Add walk path index tracking for funnel directionality enforcement
- Prevent funnels from being inserted backwards in progression
- Add constraints to ensure thematic consistency (e.g., water funnels in water-accessible areas)
