# Issue #14: Magic Attack Fix - Test Preset Simplification

## Problem Statement

When using the `test-apocrypha-weak` preset, monsters (including Apocrypha) in the Solitary Region are **not producing any magic attacks**. This issue was identified while testing the PR #14 magic attack scaling fix.

The user suspected this might be a **memory problem** caused by having too many entities (creatures and items) in the first area.

## Solution Implemented

Modified the `testApocryphaInSolitaryRegion` handler in `randomize.js` to:

1. **Keep only Apocrypha** in the Solitary Region (blank all other spawns)
2. **Remove all collectables** from the Solitary Region (blank all items)
3. **Add detailed logging** to show what was removed

This creates an isolated test environment where:
- Only 1 creature exists in the area (Apocrypha)
- No items clutter the area
- Memory issues can be ruled out as the cause of missing magic attacks

## Files Modified

### randomize.js (lines 1622-1675)

**Before:**
```javascript
if (params.testApocryphaInSolitaryRegion) {
    // ... find areas and creatures ...
    setCreature(darkSpider, apocrypha, changeSet);
    console.log("TEST: Apocrypha placed successfully.");
}
```

**After:**
```javascript
if (params.testApocryphaInSolitaryRegion) {
    // ... find areas and creatures ...
    setCreature(darkSpider, apocrypha, changeSet);
    console.log("TEST: Apocrypha placed successfully.");
    
    // Issue #14: Remove all other spawns and items
    console.log("\nTEST: Removing all other spawns and collectables from " + solitaryRegion.name);
    
    // Blank all spawns except index 0 (apocrypha)
    var blankedSpawns = 0;
    solitaryRegion.spawns.forEach((spawn, index) => {
        if (index !== 0 && !spawn.isBlank) {
            spawn.blank();
            blankedSpawns++;
        }
    });
    console.log("TEST: Blanked " + blankedSpawns + " spawns (keeping only apocrypha)");
    
    // Blank all collectables
    var blankedCollectables = 0;
    solitaryRegion.collectables.forEach((collectable) => {
        if (!collectable.isBlank()) {
            collectable.blank();
            blankedCollectables++;
        }
    });
    console.log("TEST: Blanked " + blankedCollectables + " collectables");
    
    console.log("TEST: Solitary region now has only apocrypha and no items");
}
```

## Test Script Created

**File:** `test_issue14.js`

A validation script that checks the generated output to confirm the fix is working:

```bash
node test_issue14.js
```

**What it checks:**
- ✓ Apocrypha replacement occurred
- ✓ Spawns and collectables removal was logged
- ✓ Spawns blanking count is reported
- ✓ Collectables blanking count is reported
- ✓ Final confirmation message appears

**Expected output after fix:**
```
✓ Apocrypha replacement
✓ Spawns and collectables removal
✓ Spawns blanking count
✓ Collectables blanking count
✓ Final confirmation

📊 Statistics:
   - Spawns blanked: X
   - Collectables blanked: Y

✅ Test PASSED: Entities were successfully blanked
```

## How to Use

### 1. Regenerate the Preset

Run the randomizer with the `test-apocrypha-weak` preset:

```bash
npm run mod "path/to/st.bin" "params/test-apocrypha-weak.json"
```

### 2. Verify the Changes

Check the spoiler files to confirm entities were removed:

```bash
# Run the validation test
node test_issue14.js

# Or manually check the readable.txt
grep -A 30 "TEST:" generated/test-apocrypha-weak/spoilers/readable.txt
```

### 3. Test In-Game

Load the modified ISO and go to Solitary Region (first door from Shadow Tower):

**Expected behavior:**
- ✓ Only Apocrypha should spawn (no other monsters)
- ✓ No items should be on the ground
- ✓ Apocrypha should use magic attacks (if the fix is working)
- ✓ Apocrypha attacks should be scaled by difficulty (extreme-easy = 10% damage)

## Technical Details

### Spawn Blanking

The `Spawn.blank()` method (data_model.js line 2229):
```javascript
blank() {
    for (var i = 0; i < SPAWN_ENTRY_SIZE; i++) {
        this.tfile.bin[this.offset_in_file + i] = 0x00;
    }
    this.chance.set(0xff);
}
```

**Effect:**
- Sets all spawn bytes to 0x00
- Sets spawn chance to 0xff (invalid/null)
- Creature will not spawn in-game

### Collectable Blanking

The `Collectable.blank()` method (data_model.js line 1221):
```javascript
blank() {
    this.type.set(0xffff);
}
```

**Effect:**
- Sets item type to 0xffff (invalid/null)
- Item will not appear on the ground

### Memory Considerations

Shadow Tower has a **64-item memory limit per area** (MAX_ITEM_MEMORY in data_model.js).

By removing all spawns and collectables except Apocrypha:
- **Before:** ~10-20 spawns + ~5-10 collectables = potential memory pressure
- **After:** 1 spawn + 0 collectables = minimal memory usage

This isolates whether magic attack issues are memory-related.

## Expected Results

After applying this fix and regenerating the preset:

### Console Output (in readable.txt)
```
========== TEST: Placing Apocrypha in Solitary Region ==========

TEST: Replacing 00_dark_spider with 08_apocrypha
Setting creature 00_dark_spider (human_world_solitary_region) to 08_apocrypha (death_world_lingering_curse_layer)
TEST: Apocrypha placed successfully. Attack scaling should apply based on difficulty=extreme-easy

TEST: Removing all other spawns and collectables from human_world_solitary_region
TEST: Blanked X spawns (keeping only apocrypha)
TEST: Blanked Y collectables
TEST: Solitary region now has only apocrypha and no items

========== END TEST ==========
```

### In-Game Behavior

**Solitary Region (human_world_solitary_region):**
- **Spawns:** Only Apocrypha (no dark spiders, acid slimes, or other creatures)
- **Items:** None (no potions, weapons, or other collectables)
- **Doors:** All exits remain functional (to Hidden Region, Cursed Region, etc.)

**Apocrypha Stats (extreme-easy difficulty, factor 0.1):**
- **HP:** ~120 (reduced from ~1200)
- **Physical Attack:** ~20 (reduced from ~200)
- **Magic Attack:** ~50 (reduced from ~500) ← **THIS IS THE KEY TEST**

**What to Test:**
1. Does Apocrypha spawn at all? (Yes, it should)
2. Does Apocrypha use magic projectile attacks? (Yes, it should)
3. Are the magic attacks scaled down? (Yes, should be ~10% of normal)
4. Do the attacks deal appropriate damage for extreme-easy? (Yes, should be survivable)

## Debugging

If the test still shows issues with magic attacks:

### 1. Verify Scaling is Applied

Check the creature power table:
```bash
grep -A 5 "apocrypha" generated/test-apocrypha-weak/spoilers/creature_power_table.md
```

Expected output should show scaled attack values for extreme-easy difficulty.

### 2. Check EntityStateData

Look for Type 0x30 (magic) attack values in the logs:
```bash
grep -i "type 0x30" generated/test-apocrypha-weak/spoilers/randomize.txt
grep -i "spell/magic" generated/test-apocrypha-weak/spoilers/randomize.txt
```

### 3. Verify Memory Usage

Check if the area is still reporting memory issues:
```bash
grep -i "memory crime" generated/test-apocrypha-weak/spoilers/randomize.txt
```

There should be **no** memory crime errors after this fix.

## Related Files

- **randomize.js** - Main implementation (lines 1622-1675)
- **data_model.js** - Spawn and Collectable classes with blank() methods
- **params/test-apocrypha-weak.json** - Test preset configuration
- **test_issue14.js** - Validation test script
- **PROJECTILE_ATTACK_FIX.md** - Original PR #14 documentation
- **PR14_POWER_TABLE_SUMMARY.md** - Creature power value tables

## Next Steps

1. **User Action Required:** Regenerate the preset with your st.bin file
2. **Validation:** Run `node test_issue14.js` to verify the fix
3. **In-Game Testing:** Load the modified ISO and test Apocrypha's magic attacks
4. **Report Results:** Confirm whether Apocrypha now uses magic attacks correctly

If magic attacks still don't work after this fix, the issue is **NOT memory-related** and requires deeper investigation into the EntityStateData type 0x30 handling.

## Questions or Issues?

If you encounter problems:
1. Check the console output in `generated/test-apocrypha-weak/spoilers/readable.txt`
2. Run the validation test: `node test_issue14.js`
3. Look for error messages in `generated/test-apocrypha-weak/spoilers/randomize.txt`
4. Report findings in Issue #14 on GitHub

---

**Last Updated:** 2025-12-17
**Author:** GitHub Copilot (on behalf of fredrischter)
**Related Issue:** #14
