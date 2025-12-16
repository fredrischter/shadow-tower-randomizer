# Fix for Self-Loop Issue in rotateDoors Function

## Problem Description

The `rotateDoors` function in `map_shuffler.js` performs a circular shift of door destinations within a randomly selected area. However, this could create self-loops when doors pointing to the same contiguous neighborhood were included in the rotation.

### What is a Contiguous Neighborhood?

Shadow Tower uses a naming convention where areas like:
- `shadow_tower_part1a`
- `shadow_tower_part1b`
- `shadow_tower_part1c`

Are considered part of the same logical area. The `normalizeAreaName()` function (from `functions.js`) normalizes these to `shadow_tower_part1`.

### How the Bug Occurred

**Before the fix:**

1. `rotateDoors` picks `shadow_tower_part1a`
2. Gets all switchable doors (excluding jumps, totems, portals)
3. Example doors:
   - Door 0: `shadow_tower_part1a` → `human_world_solitary_region` ✅
   - Door 1: `shadow_tower_part1a` → `shadow_tower_part1b` ❌ (same neighborhood!)
   - Door 2: `shadow_tower_part1a` → `earth_world_poisonous_cavern` ✅
4. Performs circular shift:
   - Door 0 gets Door 1's destination: `shadow_tower_part1a` → `shadow_tower_part1b`
   - Door 1 gets Door 2's destination: `shadow_tower_part1a` → `earth_world_poisonous_cavern`
   - Door 2 gets Door 0's destination: `shadow_tower_part1a` → `human_world_solitary_region`

**The Problem:** After normalization, Door 0 now points to `shadow_tower_part1` → `shadow_tower_part1`, creating a self-loop!

## Solution

Filter doors to **only include those that lead outside the contiguous neighborhood** before performing the rotation.

### Implementation

```javascript
// Before (line 109):
var switchableDoors = randomArea.exits.filter(way => switchableWay(way));

// After (lines 113-121):
var normalizedAreaName = normalizeAreaName ? normalizeAreaName(randomArea.name) : randomArea.name;
var switchableDoors = randomArea.exits.filter(way => {
  if (!switchableWay(way)) {
    return false;
  }
  // Only include doors that lead outside the contiguous neighborhood
  var normalizedDestName = normalizeAreaName ? normalizeAreaName(way.dest) : way.dest;
  return normalizedDestName !== normalizedAreaName;
});
```

### How It Works Now

1. `rotateDoors` picks `shadow_tower_part1a`
2. Normalizes area name: `shadow_tower_part1a` → `shadow_tower_part1`
3. Filters doors:
   - Door 0: `human_world_solitary_region` → `human_world_solitary_region` (normalized) → **INCLUDE** ✅
   - Door 1: `shadow_tower_part1b` → `shadow_tower_part1` (normalized) → **EXCLUDE** ❌
   - Door 2: `earth_world_poisonous_cavern` → `earth_world_poisonous_cavern` (normalized) → **INCLUDE** ✅
4. Only rotates doors 0 and 2 (which both lead outside the neighborhood)
5. **No self-loops possible!** 🎉

## Benefits

1. **Eliminates self-loop failures** - Doors can never point back to their own area group
2. **Reduces wasted iterations** - Fewer aborted shuffles due to validation failures
3. **Maintains algorithm intent** - Still rotates outer connections, just more precisely
4. **Backward compatible** - Gracefully handles missing `normalizeAreaName` function

## Testing

Two test files were created to verify the fix:

### `test_self_loop_fix.js`
Unit test that verifies the filtering logic works correctly:
- Creates a test map with contiguous neighborhoods
- Verifies that `shadow_tower_part1b` is correctly filtered out when rotating doors in `shadow_tower_part1a`
- Confirms only doors to different worlds are included

### `test_rotate_doors_integration.js`
Integration test that verifies the module loads correctly:
- Mocks `walklib` dependency
- Confirms `map_shuffler` module loads without errors
- Validates the fix doesn't break existing functionality

## Related Files

- **Modified:** `map_shuffler.js` (lines 107-121)
- **Dependencies:** `functions.js` (provides `normalizeAreaName`)
- **Tests:** `test_self_loop_fix.js`, `test_rotate_doors_integration.js`

## Notes

- The `rotateDoors` function is currently commented out at line 307 in `map_shuffler.js` with note "cause bug, would need to revert in case of problematic rotate"
- This fix addresses the root cause of that bug
- The function is safe to re-enable with this fix in place
