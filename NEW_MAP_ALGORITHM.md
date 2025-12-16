# New Map Randomization Algorithm - Circle Spin

## Overview

This document describes the new "circle spin" map randomization algorithm implemented in `map_shuffler.js`. This algorithm replaces the previous approach of performing 100 random door swaps.

## Algorithm Description

### 1. Select Central Area
Pick a random area from the map to serve as the "center" of the operation.

### 2. Find Contiguous Areas
Starting from the central area, find all areas that are reachable through **switchable** doors only. A door is switchable if:
- It's not a `jump` type (one-way fall)
- It's not a `totem` type (teleport)
- It's not a `portal` type (magical warp)
- It doesn't have `nonSwitchable: true` property

This creates a "neighborhood" of connected areas around the central area.

### 3. Identify Outer Circle Doors
From all the contiguous areas (including the central area), collect all switchable doors that do NOT lead back to the central area. These form the "outer circle" of connections.

### 4. Shuffle and Spin
- Randomly shuffle the order of outer circle doors
- Perform a circular shift of their destinations:
  - Door 0 gets the destination of Door 1
  - Door 1 gets the destination of Door 2
  - ...
  - Door N-1 gets the destination of Door 0

### 5. Validation
Before applying the shift, validate that:
- No door would create a self-loop (source area = destination area)
- All assignments pass the `goodToAssignWay()` check
- Bidirectional consistency would be maintained

If validation fails, abort this iteration and try again.

### 6. Apply Changes
If validation passes, apply all shifts simultaneously using `assignWay()`, which:
- Updates the door's destination
- Updates the wayback door at the destination to point back correctly
- Maintains bidirectional consistency

## Key Features

### NonSwitchable Doors
Approximately 30% of doors are marked as `nonSwitchable: true` in `map.json`. These doors are never randomized, preserving critical path connections.

### Surgical Approach
Unlike the previous method that swapped random doors across the entire map, this algorithm:
- Works on local neighborhoods
- Preserves more of the original structure  
- Creates less dramatic changes
- Is more predictable

### Iteration Count
The algorithm performs **2 iterations** per attempt (vs 100 random swaps in the old method). This creates moderate variety while maintaining walkability.

## Implementation Details

### Functions

1. **`findContiguousAreas(map, centralArea)`**
   - Breadth-first search through switchable doors
   - Returns a Set of area names
   
2. **`findOuterCircleDoors(map, centralAreaName, contiguousAreaNames)`**
   - Filters switchable doors from contiguous areas
   - Excludes doors leading to central area
   - Returns array of {area, exit} objects

3. **`spinOuterCircleDoors(map, outerDoors)`**
   - Shuffles the array to randomize pairings
   - Validates all shifts before applying any
   - Applies circular shift if valid
   - Calls `verifyConsistency()` after changes

4. **`performCircleSpinIteration(map)`**
   - Orchestrates one full iteration
   - Logs progress to stderr

### Integration

The algorithm integrates with the existing shuffle loop in `shuffle()`:
- Replaces the old `randomPickSwap()` loop
- Still retries up to 10 attempts if maps are invalid
- Still uses `walklib.walk()` to validate walkability
- Still maintains bidirectional door consistency

## Example Output

```
2025-12-16T20:52:44.559Z  Starting new circle spin randomization
 Iteration 1/2:
 - Selected central area: death_world_dark_castle_layer
 - Found 4 contiguous areas
 - Found 4 outer circle doors
 - Spinning 4 outer circle doors
 - Spin would create self-loop for death_world_undead_layer, aborting this spin
 Iteration 2/2:
 - Selected central area: water_world_watery_labyrinth_area
 - Found 3 contiguous areas
 - Found 2 outer circle doors
 - Spinning 2 outer circle doors
 - Successfully performed 2 door shifts
```

## Benefits

1. **More Predictable**: Fewer, more controlled changes
2. **Better Preservation**: Maintains local area structures
3. **Easier Debugging**: Clear logging of what changed
4. **Safer**: Less likely to create impossible-to-complete maps
5. **Configurable**: Easy to adjust iteration count or mark doors as non-switchable

## Future Enhancements

Possible improvements:
- Adjust the percentage of nonSwitchable doors
- Increase iteration count for more variety
- Add world-specific constraints (e.g., don't swap fire/water doors)
- Add difficulty-based iteration scaling

## Code Location

- Main algorithm: `map_shuffler.js` lines 275-380
- Integration point: `map_shuffler.js` lines 420-427
- NonSwitchable check: `map_shuffler.js` lines 27-41
