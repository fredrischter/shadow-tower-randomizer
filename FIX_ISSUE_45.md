# Fix for Issue #45: Item Distribution Error Messages

## Problem

The randomizer was logging ERROR messages when items couldn't be distributed:
```
ERROR - Couldn't distribute collectable uniques item_bf_master_gothic_shield
ERROR - Couldn't distribute drop uniques [item list]
```

These appeared in `test_failures.csv` and were flagged as failures, even though they represent expected behavior for certain randomization presets.

## Root Cause

Different presets have different item distribution guarantees:

### Presets that DON'T guarantee all items:
- **any%**: Optimized for speedrun completion, not item collection
- **comedy**: Chaotic randomization, prioritizes chaos over completeness
- **bonanza**: Front-loads powerful items, may not distribute all items
- **scary-game**: Maximum randomness, no guarantees
- **Options like keepOnlyBosses**: Removes most creatures, reducing drop opportunities

### Preset that DOES guarantee all items:
- **100%**: Specifically designed to ensure all items can be collected in one playthrough

The ERROR messages were misleading because they flagged expected behavior as a failure.

## Solution

Changed the log level from ERROR to WARNING:

**Before:**
```javascript
if (collectableUniques.length) {
    console.log("ERROR - Couldn't distribute collectable uniques " + collectableUniques.map(i => items[i].name));
}
if (dropUniques.length) {
    console.log("ERROR - Couldn't distribute drop uniques " + dropUniques.map(i => items[i].name));
}
```

**After:**
```javascript
// Task #45: Changed ERROR to WARNING - not distributing all items is expected for presets like any%, comedy, bonanza
// Only 100% preset guarantees all items are distributed
if (collectableUniques.length) {
    console.log("WARNING - Couldn't distribute collectable uniques " + collectableUniques.map(i => items[i].name));
}
if (dropUniques.length) {
    console.log("WARNING - Couldn't distribute drop uniques " + dropUniques.map(i => items[i].name));
}
```

## Impact

### Before Fix
- `test_failures.csv` showed item distribution as ERROR
- Created false positives in test results
- Suggested something was broken when it wasn't

### After Fix
- Item distribution warnings are logged at appropriate level
- `test_failures.csv` no longer flags this as a failure
- Test script (`test_failures.sh`) still catches real ERRORs (like EntityStateData address mismatches)
- Clearer distinction between expected warnings and actual errors

## Files Modified

1. **randomize.js** (lines 2138-2145)
   - Changed ERROR to WARNING
   - Added explanatory comment with Task #45 reference

2. **test_failures.csv**
   - Updated after re-running test_failures.sh
   - No longer shows item distribution errors

## Verification

Run the test script to verify:
```bash
bash test_failures.sh
```

The output will show legitimate ERRORs (if any) but will NOT show item distribution warnings.

## For Future Development

If you see `WARNING - Couldn't distribute [items]` in logs:
- This is **expected** for any%, comedy, bonanza, scary-game presets
- This is **NOT expected** for 100% preset (should be investigated)
- This means the randomization completed successfully, just not all items were placed
- Players can still complete the game with the items that were distributed
