# Shadow Tower Randomizer - Task List

## Task Management

**Status Values:**
- `TODO` - Not started
- `IN_PROGRESS` - Currently being worked on
- `DONE` - Completed
- `BLOCKED` - Waiting on dependency or decision

**Last Updated:** 2025-12-14

**Note:** Tasks 13-20 created based on comprehensive website-to-backend parameter gap analysis. These tasks cover all missing UI controls and backend implementations needed for full feature parity.

---

## Task 21: Fix Door/Entrance ID Mapping Issues in map.json

**Status:** IN_PROGRESS

**Title:** Fix incorrect door IDs in Bewilderment Domain and Hostile Rock Cavern map data

**Problem:**
The original map.json has incorrect door IDs for some areas:
- **Bewilderment Domain** - Door IDs are switched/wrong, causing connections to wrong areas
- **Hostile Rock Cavern** - At least one door has wrong ID or missing wayback, making it non-functional

These are **data errors in map.json**, not code bugs. The IDs in map.json must match the actual game object IDs in the binary data.

**Implementation Completed (2025-12-14):**

Created a **testing tool** for custom door assignments to help identify which specific doors are broken:
- File: `params/custom-path-swap.json` - Test preset with custom door configurations
- Code: `randomize.js` lines 139-204 - Custom door assignment logic
- Docs: `DOOR_BUG_ANALYSIS.md` - Technical explanation of how door connections work

**How the Testing Tool Works:**
- Allows forcing specific door connections to test if they work
- Searches for exits that lead to destination and copies coordinates
- Bypasses the broken map.json data to verify game mechanics work correctly

**Next Steps:**
1. Use the custom door testing tool to verify which specific doors in Bewilderment Domain are broken
2. Use the custom door testing tool to verify which specific doors in Hostile Rock Cavern are broken  
3. Test each door ID in-game to find the correct IDs
4. Update map.json with corrected door IDs
5. Verify the fixes work in normal randomization (not just custom assignments)

**Files to Fix:**
- `map.json` - Correct the door IDs for Bewilderment Domain and Hostile Rock Cavern

**Files Created (Testing Tools):**
- `randomize.js` - Lines 139-204: Custom door assignment implementation
- `params/custom-path-swap.json` - Test configuration
- `.github/instructions/DOOR_BUG_ANALYSIS.md` - Technical documentation

---

### What was implemented:

1. ✅ **Created custom-path-swap.json preset** in `params/` folder
   - Uses `"preset": "no-change"` (fixed from incorrect "any%" that broke game start)
   - Disables map randomization (randomizeMap: false)
   - Disables creature randomization  
   - Disables item randomization
   - Defines 3 specific door swaps for testing

2. ✅ **Implemented custom door swap logic in randomize.js** (lines 139-213)
   - Added Task #21 comment for traceability
   - Reads `customDoorSwaps` parameter array
   - Finds source and destination areas in data_model
   - Finds exit and entrance objects by ID
   - Updates map structure to reflect new connections
   - Calls `setExit()` to apply binary changes
   - **Re-writes map.json after swaps** to show updated connections
   - Includes comprehensive error handling and logging

3. ✅ **Successfully built and tested the preset**
   - Ran: `npm run mod ".\generated\st.bin" ".\params\custom-path-swap.json"`
   - Build completed successfully
   - Generated ISO: `generated\custom-path-swap\modified-custom-path-swap-st.bin`
   - Verified in logs that all 3 swaps were applied
   - **Verified map.json shows the custom swaps**

### Test Configuration:

The custom-path-swap preset creates this test path:

```
Shadow Tower Part 1A (start)
  ↓ (exit 0 → normally goes to Solitary Region)
Bewilderment Domain (entrance 18)
  ↓ (exit 20 → normally goes to Worship Domain)
Shadow Tower Part 1B (entrance 4)
  ↓ (exit 4 → normally goes to Cursed Region)
Hostile Rock Cavern (entrance 1)
```

### Verification from map.json:

From `generated\custom-path-swap\spoilers\map.json`:

**Shadow Tower Part 1A (line 885-903):**
```json
"name": "shadow_tower_part1a",
"exits": [
  {
    "id": "0",
    "dest": "illusion_world_bewilderment_domain",  ← CUSTOM SWAP APPLIED
    "wayBackId": "18"
  },
  {
    "id": "4",
    "dest": "earth_world_hostile_rock_cavern",  ← CUSTOM SWAP APPLIED
    "wayBackId": "1"
  }
]
```

**Bewilderment Domain (line 1759-1780):**
```json
"name": "illusion_world_bewilderment_domain",
"exits": [
  {
    "id": "20",
    "dest": "shadow_tower_part1b",  ← CUSTOM SWAP APPLIED
    "wayBackId": "4"
  },
  {
    "id": "18",
    "dest": "illusion_world_gloomy_domain",
    "wayBackId": "3"
  }
]
```

✅ All 3 custom door swaps are correctly reflected in map.json

---

## NEXT STEP: Manual Testing (USER INTERVENTION REQUIRED)

**Test ISO Location:** `generated\custom-path-swap\modified-custom-path-swap-st.bin`

**⚠️ This step requires human gameplay testing and discussion**

**Testing procedure:**

1. Load `generated\custom-path-swap\modified-custom-path-swap-st.bin` in a PSX emulator
2. Start a new game at Shadow Tower
3. Go through the first door (exit 0 - "Tower Top") → **Should arrive at Bewilderment Domain**
4. **CRITICAL:** Explore Bewilderment Domain thoroughly:
   - Test EACH door/exit in the area
   - Note which doors work correctly
   - Note which doors lead to wrong destinations
   - Document: Expected destination vs Actual destination
5. Find and exit through door 20 ("Exit") → **Should arrive at Shadow Tower Part 1B**
6. From Tower Part 1B, go through door 4 ("Edge") → **Should arrive at Hostile Rock Cavern**
7. **CRITICAL:** Explore Hostile Rock Cavern thoroughly:
   - Test EACH door/exit in the area
   - Note which doors work correctly
   - Note which doors lead to wrong destinations
   - Document: Expected destination vs Actual destination

**Files to examine during investigation:**
- `map.json` - Look at exits/entrances for problematic areas
- `generated\custom-path-swap\spoilers\readable.txt` - See what doors were modified
- `generated\custom-path-swap\spoilers\map.json` - See the shuffled map structure
  
**What to check:**
1. Do the door IDs in map.json match actual game object IDs?
2. Do the wayBackId values correctly reference the return door?
3. Are there duplicate IDs or missing IDs in the problematic areas?
4. Do doors lead to completely wrong areas, or correct areas but wrong spawn points?
5. Is the player rotation correct when entering/exiting?

**Discussion points after testing:**
- What specific doors are broken and how?
- Is it a map.json data issue (wrong IDs) or a binary reading issue (wrong offsets)?
- Are IDs sequential or do they have gaps?
- Do IDs need to be adjusted or is the object parsing wrong?
- Should we add diagnostic logging to identify the root cause?

**Next steps will be determined based on testing results and discussion.**

---

### Implementation Details (For Reference)

**Files Modified:**
- ✅ `params/custom-path-swap.json` - Created test preset with 3 door swaps
- ✅ `randomize.js` - Lines 139-211: Added customDoorSwaps parameter handling with Task #21 comment

**Code Location:**
- Custom door swap logic in `randomize.js` after line 137 (`map.applyMap(data_model)`)
- Executes before item/creature randomization
- Logs output to `generated\custom-path-swap\spoilers\readable.txt`

**Success Criteria:**
- ✅ Custom door swap preset builds successfully
- ✅ Logs confirm all 3 swaps were applied
- ⏳ Manual testing confirms doors work correctly in-game
- ⏳ All exits in problematic areas lead to correct destinations
- ⏳ Full randomization includes these areas without issues

**Priority:** HIGH - Affects game completability

---

## Task 7: Improve Map Visualization

**Status:** IN_PROGRESS

**Title:** Improve map for better readability

**Description:**
Instead of drawing mermaid map, try using https://github.com/eisman/neo4jd3 for drawing the map. This would provide bett
er visualization of area connections.

**Implementation:**
- ✅ Installed neo4jd3 library via npm
- ✅ Added function in `randomize.js` (lines 1574-1645) to generate neo4jd3-compatible graph data
- ✅ Enhanced `maps.html` with:
  - Tab-based interface to switch between neo4jd3, mermaid, and area details
  - Interactive neo4jd3 graph visualization with drag-and-drop nodes
  - Color-coded nodes by world (Human, Earth, Fire, Water, Monster, Illusion, Death, Shadow)
  - Node sizing based on progression difficulty/score
  - Professional dark theme matching Shadow Tower aesthetic
- ✅ Kept original mermaid chart as alternative visualization
- ✅ Both visualizations now available for users to choose their preference

**Benefits:**
- Interactive exploration of area connections
- Better visual understanding of map structure
- Color-coding helps identify worlds at a glance
- Drag-and-drop for custom layout arrangement
- Backward compatible - old mermaid chart still available

**Bug Fixes (2025-12-13):**
- Fixed newline characters in area names breaking Mermaid syntax
  - Added `.replace(/\n/g, ' ')` to sanitize labels in randomize.js lines 1562-1564
  - Both Mermaid and neo4jd3 now properly handle multi-line area names from readableName constants
- Fixed mkdir error when maps folder already exists
  - Added existence check before creating maps directory in randomize.js line 101-103

**Completion Date:** 2025-12-13

---

## Task 11: Creature Naming and Categories

**Status:** DONE

**Title:** Creature naming and categories improvements

**Description:**
Multiple creature data improvements for better categorization and naming.

**Changes Required:**

1. **Rename:** `04_blank` → `baby_demon` ✅

2. **Create "gatekeeper" tag:** ✅
   - sand_leech_b
   - elder
   - claw_head

3. **Add to non-randomizable list:** ✅
   - hanging_dead
   - guardian_b

4. **Tag as "flyer":** ✅
   - maristella
   - ring_demon
   - dark_fairy
   - dark_spirits
   - gargaral
   - gordoral
   - gorgoral
   - rotting_face
   - warpoor
   - cross_breed
   - descrypha
   - demons_eye

**Files Modified:**
- `game_data.js` - Renamed all instances of "04_blank" to "baby_demon" (6 occurrences)
- `data_model.js` - Lines 1018-1028: Added "baby_demon" to nonRandomizableCreatureNames
- `data_model.js` - Lines 1030-1036: Added gorgoral to flyingRandomizableCreatures
- `data_model.js` - Line 1037-1039: Fixed typo "geteKeeperRandomizableCreatures" → "gateKeeperRandomizableCreatures"
- `data_model.js` - Line 1649: Updated variable reference to use corrected name

**Completion Date:** 2025-12-14

---

## Task 12: Walklib Safe Area Progression

**Status:** DONE

**Title:** Walklib should avoid dangerous areas early

**Description:**
Walklib shouldn't enter dangerous areas before having entered 5 other areas other than tower. This prevents players from being forced into difficult areas too early in progression.

**Dangerous Areas:**
- Water World Watery Labyrinth Area ✅
- Water world (generally - already gated at 10+ areas)
- Burning cavern ✅

**Files Modified:**
- `walklib.js` - Lines 55-70: Enhanced `strongEnoughForArea()` function
  - Added non-tower area counting
  - Added gate for water_world_watery_labyrinth_area (requires 5+ non-tower areas)
  - Added gate for fire_world_burning_cavern (requires 5+ non-tower areas)
  - Preserved existing progression gates

**Implementation:**
```javascript
function strongEnoughForArea(areaName) {
  const nonTowerAreas = Array.from(walkedAreasSet)
    .filter(area => !area.includes("shadow_tower"));
  
  if (areaName.includes("water_world_watery_labyrinth_area")) {
    return nonTowerAreas.length >= 5;
  }
  if (areaName.includes("fire_world_burning_cavern")) {
    return nonTowerAreas.length >= 5;
  }
  
  // ... existing progression logic
}
```

**Completion Date:** 2025-12-14

---


## Task 2: Prevent Little Green Guy Randomization

**Status:** DONE

**Title:** Leave the little green guy creature unchanged (game freeze fix)

**Description:**
Changing the little green guy causes game to freeze in lingering curse layer. Currently named as `05_unknown_g`, should
be renamed as `panak`. Should be added to non-randomizable list to prevent game crashes.

**Implementation:**
- Changed creature name mapping from "unknown_g" to "panak" in `creatureNameByAbsoluteOffset` (0x7623c4)
- `panak` was already in the `nonRemovable` array, so it is now protected from randomization

**Files Modified:**
- `data_model.js` - Line 1016, changed `0x7623c4:"unknown_g"` to `0x7623c4:"panak"`

**Completion Date:** December 13, 2025

---

## Task 1: Enable keepOnlyBosses via Website

**Status:** DONE

**Title:** Enable keepOnlyBosses to be used via website

**Description:**
Currently some options are available on website (these that are translated into params file for randomization) but some
are not available to switch and use. `keepOnlyBosses` is one of them. Enable its use by linking its website use to the p
arams file. Take the opportunity to create more tasks for enabling the other possible options.

**Implementation:**
- ✅ Checkbox exists in `site/index.html` at line 641: `<input type="checkbox" id="keep-only-bosses-checkbox" name="keepOnlyBosses">`
- ✅ Value is read in `site/index.js` at line 216: `"keepOnlyBosses": $('#keep-only-bosses-checkbox').is(':checked')`
- ✅ Parameter is used in `randomize.js` at lines 1339-1340: `if (params.keepOnlyBosses) { forEachValidCreature(keepOnlyBosses); }`

**Completion Date:** 2025-12-13 (verified existing implementation)

---

## Task 3: Tag Monsters as "farReaching"

**Status:** DONE

**Title:** Tag monsters as "farReaching"

**Description:**
These tags create groups for randomization. By creating this tag, only monsters that reach far will be switched with others that reach far. This tag shouldn't be applied for higher difficulties.

**Implementation:**
- ✅ Created `farReachingRandomizableCreatures` array in `data_model.js` with: demon_bat, tongue_imp, watcher_plant, elder, star_serpent, imp, beak_plant, wingsect, dark_imp, black_imp
- ✅ Added `farReachingRandomizable` flag to creature initialization
- ✅ Modified `randomizationGroup()` to include '-farReaching' tag when NOT in high difficulty modes
- Tag is automatically disabled for hard, very-hard, and even-harder difficulties

**Completion Date:** 2025-12-13 (verified existing implementation)

---

## Task 4: Disable World-Based Monster Tags in Specific Modes

**Status:** DONE

**Title:** Do not tag monsters by world when in comedy, scary, or bonanza mode

**Description:**
World-based tagging makes other worlds' monsters switch to unmatching worlds, which makes it strange in certain game mod
es. In comedy, scary, or bonanza modes, disable world tagging so monsters can swap across all worlds. In other modes, ke
ep world tagging so monsters only swap within each world.

**Files to Modify:**
- `randomize.js` - Add conditional logic to skip world tagging when `preset == PRESET_COMEDY || preset == PRESET_SCARY |
| preset == PRESET_BONANZA`

---

## Task 5: Bug - Durability More Than Max

**Status:** DONE

**Title:** Fix durability exceeding max durability

**Description:**
Durability should always be capped to less than or equal to max durability. Currently durability is eventually being set
 higher than max, showing wrong numbers like "20/10" where it should be capped like "10/10".

**Implementation:**
- ✅ Line 480 in `randomize.js`: `item.dura.set(Math.min(item.max_dura.get(), Math.ceil(item.dura.get() * equipsAttributeFactor)));`
- ✅ Line 820 in `randomize.js`: `item.dura.set(Math.min(item.max_dura.get(), Math.ceil(item.dura.get() * Math.pow(Math.random() + 0.5, 3))));`
- ✅ Line 1361 in `randomize.js`: Both dura and max_dura set to 0xff (matching values)
- All durability assignments properly cap to max_dura

**Completion Date:** 2025-12-13 (verified existing implementation)

---

## Task 6: Tag Large Skulls as "largeAreaCreature"

**Status:** DONE

**Title:** Tag large skulls as "largeAreaCreature"

**Description:**
Large skulls should not get randomized/switched with small creatures but only switch with other large creatures.

**Implementation:**
- ✅ Created `largeAreaRandomizableCreatures` array in `data_model.js` with: acid_skull, blood_skull
- ✅ Added `largeAreaRandomizable` flag to creature initialization  
- ✅ Modified `randomizationGroup()` to include '-largeArea' tag for these large creatures
- Large skulls now only swap with each other, preventing placement issues

**Completion Date:** 2025-12-13 (verified existing implementation)

---

## Task 8: Enable Website Seed Input

**Status:** DONE

**Title:** Enable website to have input seed

**Description:**
Right now the only way to use the randomizer via website is by having a random seed. Should have the option to give spec
ific seed to get same randomized game for reproducibility and sharing.

**Implementation:**
- ✅ Seed input field in `site/index.html` at lines 298-300: `<input type="text" id="seedInput" name="seed" placeholder="Leave empty for random seed">`
- ✅ Value read in `site/index.js` at lines 191-192: `const seedValue = $('#seedInput').val().trim(); const seed = seedValue !== "" ? seedValue : ""+ Math.floor(Math.random() * 100000);`
- ✅ Seed passed to randomization at line 217: `"seed": seed`
- User can input specific seed or leave empty for random generation

**Completion Date:** 2025-12-13 (verified existing implementation)

---

## Task 10: Enemy Shuffle and Fog Gate Parameters

**Status:** DONE

**Title:** Add enemy shuffle and fog gate parameters to website

**Description:**
Enemy shuffle and fog gate randomization should be parameters choosable from website, to configure and apply as parameters.

**Implementation:**
- ✅ Enemy shuffle checkbox in `site/index.html` at line 628: `<input type="checkbox" id="randomize-creatures-checkbox" name="randomizeCreatures" checked="checked">`
- ✅ Fog gate radio buttons already exist in HTML (map-radioset)
- ✅ Enemy shuffle read in `site/index.js` at line 206: `const randomizeCreatures = $('#randomize-creatures-checkbox').is(':checked');`
- ✅ Map randomization read in `site/index.js` at lines 194-203
- ✅ Both parameters passed at lines 211-212: `"randomizeMap": randomizeMap, "randomizeCreatures": randomizeCreatures`

**Completion Date:** 2025-12-13 (verified existing implementation)

---

## Task 9: Improve Website Appearance

**Status:** DONE

**Title:** Website looks bad

**Description:**
Website was done by backend developer and looks very bad. Improve it with Shadow Tower themed background, better styling, professional UI/UX design.

**Improvements Needed:**
- Add Shadow Tower themed background image
- Improve CSS styling (colors, fonts, layout)
- Better form organization and grouping
- Responsive design
- Add game logo/branding
- Improve button styling

**Files to Modify:**
- `site/index.html` - HTML structure improvements
- `site/style.css` (create if needed) - Professional styling
- Add background images to `site/` folder

---

## Task 13: Add Progressiveness Parameter to Website

**Status:** TODO

**Title:** Enable progressiveness selection on website

**Description:**
The progressiveness parameter controls how item/enemy difficulty scales across areas. Currently hardcoded to "increased" in website but should be user-selectable.

**Current State:**
- Website HTML shows progressiveness radio buttons (lines 539-553 in index.html)
- Options: Flat, Medium, Increased (checked), Crazy
- NOT read or passed to backend in index.js

**Changes Required:**
1. Add progressiveness reading in `site/index.js` after line 217:
   ```javascript
   const progressivenessOption = $('#progressivenes-radioset input:checked').attr('id');
   let progressiveness = "increased"; // default
   if (progressivenessOption === 'progressivenes-radio1') progressiveness = "flat";
   else if (progressivenessOption === 'progressivenes-radio2') progressiveness = "medium";
   else if (progressivenessOption === 'progressivenes-radio3') progressiveness = "increased";
   else if (progressivenessOption === 'progressivenes-radio4') progressiveness = "crazy";
   ```

2. Add to params object (after line 217):
   ```javascript
   "progressiveness": progressiveness
   ```

**Files to Modify:**
- `site/index.js` - Add progressiveness reading and parameter passing

---

## Task 14: Add Fiery/Flaming Key Drop Option to Website

**Status:** TODO

**Title:** Enable fiery/flaming key drop location selection on website

**Description:**
The fiery key location parameter determines progression gating. Currently hardcoded to "fiery-key-in-fire-world" but should be user-selectable.

**Current State:**
- Website HTML shows fiery key radio buttons (lines 563-577 in index.html)
- Options: Keep on Cerberus, Fiery key in Fire World (checked), Fiery key anywhere before Ashen Cavern, Flaming key in first area
- NOT read or passed to backend in index.js
- Hardcoded on line 214: `"fieryKeyFlamingKeyDrop": "fiery-key-in-fire-world"`

**Changes Required:**
1. Add fiery key reading in `site/index.js` after line 217:
   ```javascript
   const fieryKeyOption = $('#fiery-key-radioset input:checked').attr('id');
   let fieryKeyFlamingKeyDrop = "fiery-key-in-fire-world"; // default
   if (fieryKeyOption === 'fiery-key-radio1') fieryKeyFlamingKeyDrop = "keep-on-cerberus";
   else if (fieryKeyOption === 'fiery-key-radio2') fieryKeyFlamingKeyDrop = "fiery-key-in-fire-world";
   else if (fieryKeyOption === 'fiery-key-radio3') fieryKeyFlamingKeyDrop = "fiery-key-anywhere-before-ashen-cavern";
   else if (fieryKeyOption === 'fiery-key-radio4') fieryKeyFlamingKeyDrop = "flaming-key-in-the-first-area";
   ```

2. Replace hardcoded value on line 214 with: `"fieryKeyFlamingKeyDrop": fieryKeyFlamingKeyDrop`

**Files to Modify:**
- `site/index.js` - Add fiery key reading and replace hardcoded value

---

## Task 15: Add Non-Essential Keys Randomization Option to Website

**Status:** TODO

**Title:** Enable non-essential keys randomization toggle on website

**Description:**
Non-essential keys randomization currently hardcoded to true but should be user-togglable.

**Current State:**
- Website HTML shows non-essential keys radio buttons (lines 586-594 in index.html)
- Options: Yes (checked), No
- NOT read or passed to backend in index.js
- Hardcoded on line 215: `"randomizeNonEssentialKeys": true`

**Changes Required:**
1. Add non-essential keys reading in `site/index.js` after line 217:
   ```javascript
   const nonEssentialKeysOption = $('#non-essential-keys-radioset input:checked').attr('id');
   const randomizeNonEssentialKeys = (nonEssentialKeysOption === 'non-essential-keys-radio1');
   ```

2. Replace hardcoded value on line 215 with: `"randomizeNonEssentialKeys": randomizeNonEssentialKeys`

**Files to Modify:**
- `site/index.js` - Add non-essential keys reading and replace hardcoded value

---

## Task 16: Add Directives Options to Website

**Status:** TODO

**Title:** Enable directive toggles on website

**Description:**
Several directives are controlled via params but not exposed on website. Currently website only allows toggling some directives.

**Current State:**
- Website shows directive checkboxes/radios for:
  - Remove randomness (lines 652-664) - NOT read in index.js
  - All equips (lines 669-682) - NOT read in index.js  
  - No HP/MP recovery (lines 686-698) - NOT read in index.js
- None are passed to backend

**Directives in randomize.js:**
- `removeDirectiveRemovalOfRandomness` - Makes all spawns/drops 100% (deterministic)
- `removeDirectiveRemovalOfHPMPRecovery` - Allows HP/MP auto-recovery (default removes it)
- All equips directive - Ensures all items obtainable (100% mode)

**Changes Required:**
1. Add directive reading in `site/index.js` after line 217:
   ```javascript
   const removeRandomnessOption = $('#remove-randomness-radioset input:checked').attr('id');
   const removeDirectiveRemovalOfRandomness = (removeRandomnessOption === 'remove-randomness-radio2');
   
   const allEquipsOption = $('#all-equips-radioset input:checked').attr('id');
   const allEquips = (allEquipsOption === 'all-equips-radio1');
   
   const noHpMpRecoveryOption = $('#no-hp-mp-recovery-radioset input:checked').attr('id');
   const removeDirectiveRemovalOfHPMPRecovery = (noHpMpRecoveryOption === 'no-hp-mp-recovery-radio2');
   ```

2. Add to params object:
   ```javascript
   "removeDirectiveRemovalOfRandomness": removeDirectiveRemovalOfRandomness,
   "removeDirectiveRemovalOfHPMPRecovery": removeDirectiveRemovalOfHPMPRecovery
   ```

3. Handle "All equips" - requires backend implementation (see Task 17)

**Files to Modify:**
- `site/index.js` - Add directive reading and parameter passing

---

## Task 17: Implement "All Equips" Directive in Randomizer

**Status:** TODO

**Title:** Add support for "all equips" parameter in randomizer

**Description:**
Website shows "All equips" directive option but randomizer doesn't have a dedicated parameter for it. The 100% preset handles this implicitly.

**Current Behavior:**
- 100% preset automatically ensures all items obtainable
- No standalone `allEquips` parameter exists

**Required Implementation:**
1. Add `allEquips` parameter handling in `randomize.js`
2. If `params.allEquips == true`, apply 100% item distribution logic regardless of preset
3. Ensure compatibility with other presets (any%, comedy, etc.)

**Files to Modify:**
- `randomize.js` - Add allEquips parameter check and apply 100% item logic

---

## Task 18: Add Illusionists Location Option to Website

**Status:** TODO

**Title:** Enable illusionists location selection on website

**Description:**
Illusionists (Gorthaur, Fester, Wildowess) location is shown on website but not implemented in backend.

**Current State:**
- Website HTML shows illusionists radio buttons (lines 602-617 in index.html)
- Options: No change, Worship domain (checked), Illusion World (also checked - HTML error), Anywhere in the game
- NOT read or passed to backend in index.js
- NOT implemented in randomize.js

**Required Implementation:**
1. Fix HTML - only one option should be checked by default
2. Add reading in `site/index.js`
3. Add parameter to backend
4. Implement illusionist spawn logic in `randomize.js`:
   - `worship-domain` - Keep in original location
   - `illusion-world` - Spawn anywhere in Illusion World
   - `anywhere` - Spawn in any area

**Files to Modify:**
- `site/index.html` - Fix double-checked radio buttons
- `site/index.js` - Add illusionists reading and parameter passing
- `randomize.js` - Implement illusionist location logic

---

## Task 19: Implement Randomization Intensity Parameters

**Status:** TODO

**Title:** Add support for equipment stats, creature stats, spawn rate, and spawn amplitude options

**Description:**
Website shows extensive randomization options that are NOT implemented in backend.

**Missing Parameters:**
1. **Random equip stats** (lines 417-441)
   - Options: Soft, Medium, Increased, Crazy, Only swap
   - Not read in index.js, not in randomize.js

2. **Random creature stats** (lines 445-469)
   - Options: Soft, Medium, Increased, Crazy, Only swap
   - Not read in index.js, not in randomize.js

3. **Spawn rate** (lines 472-496)
   - Options: Predictable, Medium, Rare, Crazy like King Hopper, Only swap
   - Not read in index.js, not in randomize.js

4. **Random spawn amplitude** (lines 499-513)
   - Options: No change, Anywhere within area, Anywhere within world, Absolute anywhere
   - Not read in index.js, not in randomize.js

5. **Random spawn style** (lines 517-533)
   - Options: Swap positions, Known Safe Tiles, Crazy
   - Not read in index.js, not in randomize.js

**Required Implementation:**
1. Add reading for all 5 parameters in `site/index.js`
2. Pass parameters to backend
3. Implement logic in `randomize.js` for each parameter
4. Define intensity multipliers for Soft/Medium/Increased/Crazy levels

**Files to Modify:**
- `site/index.js` - Add reading for all 5 parameters
- `randomize.js` - Implement randomization intensity logic

---

## Task 20: Add Color Randomization Options to Website

**Status:** TODO

**Title:** Enable color randomization parameters on website

**Description:**
Color randomization parameters exist in backend (bonanza.json shows them) but not exposed on website.

**Existing Parameters in Backend:**
- `colorRandomizationGeneral` - 0-2 (none, subtle, extreme)
- `colorRandomizationBossRooms` - 0-2
- `colorRandomizationCreatures` - 0-2
- `colorValueFactor` - Brightness multiplier

**Current State:**
- NOT shown on website
- Used in bonanza preset

**Required Implementation:**
1. Add color randomization section to website
2. Add radio buttons for each type (General, Boss Rooms, Creatures)
3. Add slider for value factor
4. Add reading in `site/index.js`
5. Pass to backend

**Files to Modify:**
- `site/index.html` - Add color randomization UI section
- `site/index.js` - Add color randomization reading and parameter passing

---

**Last Updated:** 2025-12-14
randomize.js` and `params/` folder to identify all available options and create tasks for missing ones.

---

**Last Updated:** 2025-12-13
