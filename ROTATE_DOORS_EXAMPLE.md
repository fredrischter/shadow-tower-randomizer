# Example: rotateDoors Spin with Self-Loop Fix

This document shows a concrete example of how the `rotateDoors` function performs a circular shift of door destinations, demonstrating the before and after states with the self-loop fix applied.

## Example Scenario

Let's say the `rotateDoors` function randomly selects **shadow_tower_part2a** to rotate its doors.

### Initial State (Before Rotation)

**Area: shadow_tower_part2a**

This area has 5 exits:

| Exit ID | Destination | Type | Notes |
|---------|-------------|------|-------|
| 0 | earth_world_poisonous_cavern | door | ✅ Outside neighborhood |
| 1 | shadow_tower_part2b | door | ❌ Same neighborhood (both normalize to shadow_tower_part2) |
| 2 | fire_world_burning_cavern | door | ✅ Outside neighborhood |
| 3 | water_world_sunken_river | door | ✅ Outside neighborhood |
| 4 | shadow_tower_part2c | door | ❌ Same neighborhood |

### Filtering Step (The Fix)

**WITH the fix:**
The function filters out exits 1 and 4 because they point to the same contiguous neighborhood:
- `normalizeAreaName("shadow_tower_part2a")` → `"shadow_tower_part2"`
- `normalizeAreaName("shadow_tower_part2b")` → `"shadow_tower_part2"` ❌ FILTERED
- `normalizeAreaName("shadow_tower_part2c")` → `"shadow_tower_part2"` ❌ FILTERED

**Filtered doors (only 3 remain):**
1. Exit 0 → earth_world_poisonous_cavern
2. Exit 2 → fire_world_burning_cavern
3. Exit 3 → water_world_sunken_river

### Circular Shift Operation

The function performs a circular shift of the **destinations** (rotating right):

```
Before:  [exit 0] → earth_world_poisonous_cavern
         [exit 2] → fire_world_burning_cavern
         [exit 3] → water_world_sunken_river

After:   [exit 0] → water_world_sunken_river      (gets last item's dest)
         [exit 2] → earth_world_poisonous_cavern  (gets first item's dest)
         [exit 3] → fire_world_burning_cavern     (gets middle item's dest)
```

### Final State (After Rotation)

**Area: shadow_tower_part2a** (after rotation)

| Exit ID | Destination | Type | Changed? |
|---------|-------------|------|----------|
| 0 | water_world_sunken_river | door | ✅ CHANGED (was earth_world_poisonous_cavern) |
| 1 | shadow_tower_part2b | door | ⚪ UNCHANGED (filtered out, not rotated) |
| 2 | earth_world_poisonous_cavern | door | ✅ CHANGED (was fire_world_burning_cavern) |
| 3 | fire_world_burning_cavern | door | ✅ CHANGED (was water_world_sunken_river) |
| 4 | shadow_tower_part2c | door | ⚪ UNCHANGED (filtered out, not rotated) |

### Bidirectional Updates

The `assignWay` function also updates the **wayback** connections in the destination areas:

**earth_world_poisonous_cavern:**
- Previously had exit pointing back to shadow_tower_part2a via exit 0
- Now has exit pointing back to shadow_tower_part2a via exit 2

**fire_world_burning_cavern:**
- Previously had exit pointing back to shadow_tower_part2a via exit 2
- Now has exit pointing back to shadow_tower_part2a via exit 3

**water_world_sunken_river:**
- Previously had exit pointing back to shadow_tower_part2a via exit 3
- Now has exit pointing back to shadow_tower_part2a via exit 0

## What Would Happen WITHOUT the Fix?

If we didn't filter out exits 1 and 4, all 5 doors would be rotated:

```
Before:  [exit 0] → earth_world_poisonous_cavern
         [exit 1] → shadow_tower_part2b
         [exit 2] → fire_world_burning_cavern
         [exit 3] → water_world_sunken_river
         [exit 4] → shadow_tower_part2c

After:   [exit 0] → shadow_tower_part2c           (normalized: shadow_tower_part2)
         [exit 1] → earth_world_poisonous_cavern
         [exit 2] → shadow_tower_part2b           (normalized: shadow_tower_part2)
         [exit 3] → fire_world_burning_cavern
         [exit 4] → water_world_sunken_river
```

**PROBLEM:** Exit 0 now points to shadow_tower_part2c, which normalizes to the same area!
- `normalizeAreaName("shadow_tower_part2a")` → `"shadow_tower_part2"`
- `normalizeAreaName("shadow_tower_part2c")` → `"shadow_tower_part2"`
- **This creates a SELF-LOOP!** ❌

## Summary

The fix ensures that only doors leading **outside** the contiguous neighborhood are included in the rotation, preventing the circular shift from creating self-loops where an exit points back to the same logical area group.
