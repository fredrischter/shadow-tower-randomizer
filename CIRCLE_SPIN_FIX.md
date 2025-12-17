# Circle Spin Map Randomization - Wayback ID Inconsistency Fix

## Problem Summary

The recently implemented circle spin map randomization algorithm was failing with wayback ID inconsistency errors:

```
ERROR - inconsistent wayBackId X of expected area Y doesnt match Z exit N:
ERROR detail - A!=B
```

## Root Causes

### Cause 1: Wayback Update Conflicts During Circular Shift

**What was happening:**
- The `spinOuterCircleDoors` function performs a circular shift: door[0] → door[1], door[1] → door[2], ..., door[n-1] → door[0]
- Each call to `assignWay()` updated BOTH:
  1. The source door's destination
  2. The wayback door in the destination area
- When rotating multiple doors, wayback doors that were part of the rotation were being modified mid-shift
- This created inconsistent bidirectional references

**Example:**
```
Before:
- Door A (area X, exit 1) → Dest P (wayback 5 points to A)
- Door B (area Y, exit 2) → Dest Q (wayback 6 points to B)

During circular shift:
- Step 1: Door A gets Dest Q
  - assignWay updates wayback 6 to point to area X
- Step 2: Door B tries to use wayback 6
  - But wayback 6 was already changed in Step 1!
  - Inconsistency created
```

### Cause 2: Including Internal Contiguous Doors

**What was happening:**
- `findOuterCircleDoors` was selecting all doors that didn't lead to the central area
- This included doors between areas within the contiguous neighborhood
- Multiple internal doors could point to the same external area
- When rotated, these doors tried to update the same wayback door
- Created conflicts and inconsistencies

**Example:**
```
Contiguous neighborhood: {A, B, C}
Door in A → External area X
Door in B → External area X  (both point to same external area!)

When rotated, both try to update X's wayback → conflict
```

## Solutions

### Fix 1: Two-Pass Wayback Updates

Modified `spinOuterCircleDoors` to use a two-pass approach:

**Pass 1 - Update Forward Pointers:**
```javascript
for (let i = 0; i < outerDoors.length; i++) {
    const currentDoor = outerDoors[i];
    const nextIndex = (i + 1) % outerDoors.length;
    const nextDestination = originalDestinations[nextIndex];
    
    // Update only forward pointers
    currentDoor.exit.dest = nextDestination.dest;
    currentDoor.exit.world = nextDestination.world;
    currentDoor.exit.wayBackId = nextDestination.wayBackId;
}
```

**Pass 2 - Update Wayback Pointers:**
```javascript
for (let i = 0; i < outerDoors.length; i++) {
    const currentDoor = outerDoors[i];
    
    // Now update waybacks based on new forward state
    if (currentDoor.exit.wayBackId) {
        const wayBackArea = map.find(area => area.name == currentDoor.exit.dest);
        const wayBackWay = wayBackArea.exits.find(exit => exit.id == currentDoor.exit.wayBackId);
        
        wayBackWay.dest = currentDoor.area.name;
        wayBackWay.world = currentDoor.area.world;
        wayBackWay.wayBackId = currentDoor.exit.id;
    }
}
```

### Fix 2: Exclude Internal Contiguous Doors

Modified `findOuterCircleDoors` to only select doors leading OUTSIDE the contiguous neighborhood:

**Before:**
```javascript
if (switchableWay(exit) && exit.dest !== centralAreaName) {
    outerDoors.push({area, exit});
}
```

**After:**
```javascript
if (switchableWay(exit) && !contiguousAreaNames.has(exit.dest)) {
    outerDoors.push({area, exit});
}
```

## Testing

Created `test_map_shuffle.js` to validate the fixes:

**Results:**
- **Before fixes:** Random failures with wayback inconsistency errors
- **After Fix 1 only:** ~50% success rate (still had internal door issues)
- **After both fixes:** 8/8 successful runs, no wayback errors

**Test command:**
```bash
node test_map_shuffle.js
```

## Files Modified

1. **map_shuffler.js:**
   - `spinOuterCircleDoors()` - Two-pass wayback updates (lines 389-422)
   - `findOuterCircleDoors()` - Exclude internal doors (lines 317-339)

2. **test_map_shuffle.js:** (new file)
   - Test script to validate map shuffling without errors

## Verification

To verify the fix is working:
```bash
# Run test multiple times
for i in {1..5}; do
    echo "Test $i:"
    timeout 45 node test_map_shuffle.js 2>&1 | grep "Test passed"
done
```

All tests should show: `✓ Test passed - No wayback ID errors!`

## Impact

- ✅ Circle spin algorithm now works reliably
- ✅ No more wayback inconsistency errors
- ✅ Map randomization can complete successfully
- ✅ Bidirectional door consistency maintained

## Date

2025-12-17
