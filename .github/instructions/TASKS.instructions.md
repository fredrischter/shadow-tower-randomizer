# Shadow Tower Randomizer - Task List

## Task Management

**Status Values:**
- `TODO` - Not started
- `IN_PROGRESS` - Currently being worked on
- `DONE` - Completed
- `BLOCKED` - Waiting on dependency or decision

**Last Updated:** 2025-12-15

**Note:** Active tasks in progress. Completed tasks moved to TASKS_ARCHIVE.instructions.md.

---

## Task 23: Implement Scenario Object Removal Parameter

**Status:** DONE

**Title:** Add removeScenarioPercent parameter to remove percentage of scenario tiles

**Description:**
Add a new parameter `removeScenarioPercent` that removes a percentage of scenario/decoration objects from the game. This creates a more minimalist aesthetic and can improve performance.

**Implementation Details:**

**Parameter Specification:**
- `removeScenarioPercent` - Number between 0-100
- When > 0, removes scenario objects based on percentage
- Algorithm: For every 10 tiles, remove between 0-10 tiles proportionally

**Algorithm:**
```javascript
if (params.removeScenarioPercent && params.removeScenarioPercent > 0) {
    areas.forEach(area => {
        area.scenarioObjects.forEach((obj, index) => {
            // For every 10 objects, decide how many to remove based on percentage
            const groupIndex = Math.floor(index / 10);
            const positionInGroup = index % 10;
            const toRemoveInGroup = Math.floor(10 * params.removeScenarioPercent / 100);
            
            if (positionInGroup < toRemoveInGroup) {
                obj.remove(); // or set to null/invisible
            }
        });
    });
}
```

**What are Scenario Objects?**
- Decorative tiles, props, background elements
- NOT gameplay-critical objects (enemies, items, exits)
- Examples: torches, pillars, rocks, furniture, wall decorations

**New Params Files:**

1. **params/removed10prc-scenario.json:**
```json
{
  "label": "removed10prc-scenario",
  "preset": "no-change",
  "difficulty": "medium",
  "randomizeMap": false,
  "randomizeCreatures": false,
  "randomizeCollectablesAndDrops": false,
  "removeScenarioPercent": 10,
  "seed": "1"
}
```

2. **params/removed50prc-scenario.json:**
```json
{
  "label": "removed50prc-scenario",
  "preset": "no-change",
  "difficulty": "medium",
  "randomizeMap": false,
  "randomizeCreatures": false,
  "randomizeCollectablesAndDrops": false,
  "removeScenarioPercent": 50,
  "seed": "1"
}
```

**Files to Modify:**
- `randomize.js` - Add scenario object removal logic (after line 240)
- `data_model.js` - Identify and categorize scenario objects
- `params/removed10prc-scenario.json` - Create 10% removal preset
- `params/removed50prc-scenario.json` - Create 50% removal preset

**Research Needed:**
- Identify which object types are scenario/decoration vs gameplay-critical
- Determine binary structure for scenario objects
- Test that removal doesn't break game state

**Success Criteria:**
- 10% preset removes ~10% of decorative objects evenly distributed
- 50% preset removes ~50% of decorative objects evenly distributed
- No crashes or gameplay issues
- Exits, items, and enemies remain untouched
- Visual confirmation of fewer decorative elements in-game

**Priority:** MEDIUM - Nice-to-have feature for customization

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
