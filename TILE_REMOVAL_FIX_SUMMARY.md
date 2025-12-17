# Tile Removal Fix Summary

## Problem Identified

The tile removal feature was not working because of a critical bug in the `Tile.blank()` function in `data_model.js`.

## Root Cause

**Bug in data_model.js, line 1568:**

```javascript
// BEFORE (INCORRECT):
blank() {
    binSet(this.bin, this.offset_in_file, TILE_SIZE, 0x00);
    this.x.set(0xff);  // BUG: Sets POSITION x, not tileX!
}
```

**The problem:**
- The `isBlank` check looks at byte 0x08 (tileX): `this.isBlank = this.bin[this.offset_in_file + 0x08]==0xff`
- But `blank()` was setting byte 0x00 (position x) to 0xFF instead
- This meant blanked tiles were NOT recognized as blank
- Result: Tiles appeared to be removed in code, but the game still rendered them

## Fix Applied

**data_model.js, line 1568 - FIXED:**

```javascript
// AFTER (CORRECT):
blank() {
    binSet(this.bin, this.offset_in_file, TILE_SIZE, 0x00);
    this.tileX.set(0xff);  // Correctly marks as blank by setting tileX
}
```

## Verification

Created and ran `test_tile_blank.js` which confirms:
- ❌ OLD code: isBlank check FAILS after blank() is called
- ✅ NEW code: isBlank check PASSES after blank() is called

## Tile Classification (Validated by Dump Analysis)

Based on analysis of tiles-dump folder:

### Floor Tiles (NEVER REMOVED)
- **Criteria:** `posY <= 256`
- Ground level walkable surfaces
- Removing these creates holes and breaks navigation
- Protected by removal logic

### Wall/Decoration Tiles (SAFE TO REMOVE)
- **Criteria:** `posY > 256` (typically 512 or 768)
- Elevated structures like walls, ceiling elements, decorations
- Adjacent to floor tiles (within 2 grid units)
- These are the tiles that get removed

## Implementation Details

The removal logic in `randomize.js` (lines 1240-1320) is **correct** and uses the right approach:

1. **Protect floors:** Never remove tiles with `posY <= 256`
2. **Find walls adjacent to paths:** Check for nearby floor tiles
3. **Remove based on percentage:** Apply random removal to eligible tiles

The logic was always correct - it was just the `blank()` function that had the bug preventing it from working.

## Files Modified

1. **data_model.js** - Fixed `Tile.blank()` bug (line 1568)
2. **randomize.js** - Enhanced documentation with bug fix explanation
3. **TILE_CLASSIFICATION_ANALYSIS.md** - NEW comprehensive analysis
4. **params/removed10prc-tiles.json** - Added explanatory comment
5. **params/removed50prc-tiles.json** - Added explanatory comment
6. **test_tile_blank.js** - NEW test to verify the fix

## Testing

To test the fix:

```bash
# The params files already exist and should now work correctly
npm run mod "path/to/st.bin" "./params/removed10prc-tiles.json"
npm run mod "path/to/st.bin" "./params/removed50prc-tiles.json"
```

Expected results:
- 10% preset: Removes ~10% of wall tiles, floors intact
- 50% preset: Removes ~50% of wall tiles, floors intact
- Game should be playable with "open walls" aesthetic
- No holes in floors, navigation still works

## Documentation Created

1. **TILE_CLASSIFICATION_ANALYSIS.md**
   - Detailed analysis of tile dump data
   - Explanation of posY values and what they mean
   - Classification rules for floor vs wall tiles
   - Documents the bug and fix

2. **test_tile_blank.js**
   - Demonstrates the bug in action
   - Verifies the fix works correctly
   - Can be run anytime to validate behavior

## Next Steps

1. **Testing in-game:** The fix should now work, but needs actual game testing
   - Load modified ISO in emulator
   - Verify walls are removed as expected
   - Confirm floors remain walkable
   - Check that areas don't break

2. **Possible enhancements:**
   - Add more granular control (remove only specific tile types)
   - Visual preview of which tiles will be removed
   - Per-area customization
   - Different removal strategies (random, checkerboard, etc.)

## Summary

✅ **Bug fixed:** `tile.blank()` now correctly marks tiles as blank
✅ **Documentation complete:** Comprehensive analysis of tile structure
✅ **Test created:** Verifies the fix works
✅ **Params annotated:** Clear explanation of what they do

The tile removal feature should now work as intended!

---

**Generated:** 2025-12-17
**Bug Fixed By:** GitHub Copilot
**Verified By:** test_tile_blank.js
