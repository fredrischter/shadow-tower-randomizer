# Shadow Tower Randomizer - Task List

## Task Management

**Status Values:**
- `TODO` - Not started
- `IN_PROGRESS` - Currently being worked on
- `DONE` - Completed
- `BLOCKED` - Waiting on dependency or decision

---

## Task 1: Enable keepOnlyBosses via Website

**Status:** TODO

**Title:** Enable keepOnlyBosses to be used via website

**Description:**
Currently some options are available on website (these that are translated into params file for randomization) but some are not available to switch and use. `keepOnlyBosses` is one of them. Enable its use by linking its website use to the params file. Take the opportunity to create more tasks for enabling the other possible options.

**Files to Modify:**
- `site/index.html` - Add checkbox/toggle for keepOnlyBosses
- `server.js` - Pass parameter from request to params.json
- `randomize.js` - Ensure parameter is read and applied

---

## Task 2: Prevent Little Green Guy Randomization

**Status:** TODO

**Title:** Leave the little green guy creature unchanged (game freeze fix)

**Description:**
Changing the little green guy causes game to freeze in lingering curse layer. Currently named as `05_unknown_g`, should be renamed as `panak`. Should be added to non-randomizable list to prevent game crashes.

**Files to Modify:**
- `constants.js` or creature data - Rename `05_unknown_g` to `panak`
- `randomize.js` - Add `panak` to `nonRemovable` or equivalent non-randomizable array

---

## Task 3: Tag Monsters as "farReaching"

**Status:** TODO

**Title:** Tag monsters as "farReaching"

**Description:**
These tags create groups for randomization. By creating this tag, only monsters that reach far will be switched with others that reach far. This tag shouldn't be applied for higher difficulties.

**Monsters to Tag:**
- bat
- Watch plant
- Elder
- Star serpent
- Imp
- Beak plant
- Wingsect

**Files to Modify:**
- Creature data structure - Add "farReaching" tag
- `randomize.js` - Implement farReaching group randomization (disabled for high difficulty)

---

## Task 4: Disable World-Based Monster Tags in Specific Modes

**Status:** TODO

**Title:** Do not tag monsters by world when in comedy, scary, or bonanza mode

**Description:**
World-based tagging makes other worlds' monsters switch to unmatching worlds, which makes it strange in certain game modes. In comedy, scary, or bonanza modes, disable world tagging so monsters can swap across all worlds. In other modes, keep world tagging so monsters only swap within each world.

**Files to Modify:**
- `randomize.js` - Add conditional logic to skip world tagging when `preset == PRESET_COMEDY || preset == PRESET_SCARY || preset == PRESET_BONANZA`

---

## Task 5: Bug - Durability More Than Max

**Status:** TODO

**Title:** Fix durability exceeding max durability

**Description:**
Durability should always be capped to less than or equal to max durability. Currently durability is eventually being set higher than max, showing wrong numbers like "20/10" where it should be capped like "10/10".

**Files to Modify:**
- `randomize.js` - Add durability capping logic: `item.durability.set(Math.min(item.durability.get(), item.maxDurability.get()))`
- Search for all places where durability is set/randomized

---

## Task 6: Tag Large Skulls as "largeAreaCreature"

**Status:** TODO

**Title:** Tag large skulls as "largeAreaCreature"

**Description:**
Large skulls should not get randomized/switched with small creatures but only switch with other large creatures.

**Creatures to Tag:**
- acid_skull
- blood_skull

**Files to Modify:**
- Creature data structure - Add "largeAreaCreature" tag to acid_skull and blood_skull
- `randomize.js` - Implement largeAreaCreature group randomization

---

## Task 7: Improve Map Visualization

**Status:** TODO

**Title:** Improve map for better readability

**Description:**
Instead of drawing mermaid map, try using https://github.com/eisman/neo4jd3 for drawing the map. This would provide better visualization of area connections.

**Files to Modify:**
- `randomize.js` - Replace/supplement map generation logic
- `site/maps.html` or create new visualization page
- Add neo4jd3 dependency

**Dependencies:**
- neo4jd3 library
- Neo4j data format conversion

---

## Task 8: Enable Website Seed Input

**Status:** TODO

**Title:** Enable website to have input seed

**Description:**
Right now the only way to use the randomizer via website is by having a random seed. Should have the option to give specific seed to get same randomized game for reproducibility and sharing.

**Files to Modify:**
- `site/index.html` - Add text input field for seed
- `server.js` - Accept seed parameter, use if provided, otherwise generate random
- Validate seed format (numeric)

---

## Task 9: Improve Website Appearance

**Status:** TODO

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

## Task 10: Enemy Shuffle and Fog Gate Parameters

**Status:** TODO

**Title:** Add enemy shuffle and fog gate parameters to website

**Description:**
Enemy shuffle and fog gate randomization should be parameters choosable from website, to configure and apply as parameters.

**Files to Modify:**
- `site/index.html` - Add controls for enemy shuffle and fog gate options
- `server.js` - Pass parameters to randomization
- Verify these parameters already exist in randomize.js or implement them

---

## Task 11: Creature Naming and Categories

**Status:** TODO

**Title:** Creature naming and categories improvements

**Description:**
Multiple creature data improvements for better categorization and naming.

**Changes Required:**

1. **Rename:** `04_blank` → `baby_demon`

2. **Create "gatekeeper" tag:**
   - sand_leech_b
   - elder
   - claw_head

3. **Add to non-randomizable list:**
   - hanging_dead
   - guardian_b

4. **Tag as "flyer":**
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

**Files to Modify:**
- Creature data constants
- `randomize.js` - Add gatekeeper and flyer tag support
- Update non-randomizable array

---

## Task 12: Walklib Safe Area Progression

**Status:** TODO

**Title:** Walklib should avoid dangerous areas early

**Description:**
Walklib shouldn't enter dangerous areas before having entered 5 other areas other than tower. This prevents players from being forced into difficult areas too early in progression.

**Dangerous Areas:**
- Water World Watery Labyrinth Area
- Water world (generally)
- Burning cavern

**Files to Modify:**
- `walklib.js` - Add safety check in `strongEnoughForArea()` function
- Count visited non-tower areas before allowing entry to dangerous zones
- Add dangerous area list constant

**Implementation:**
```javascript
function strongEnoughForArea(areaName, walkedAreasSet) {
  const dangerousAreas = [
    "water_world_watery_labyrinth_area",
    "water_world", // any water world area
    "fire_world_burning_cavern"
  ];
  
  if (dangerousAreas.some(danger => areaName.includes(danger))) {
    const nonTowerAreas = Array.from(walkedAreasSet)
      .filter(area => !area.includes("shadow_tower"));
    return nonTowerAreas.length >= 5;
  }
  
  // ... existing progression logic
}
```

---

## Future Tasks to Create

Based on Task 1 description, additional tasks should be created for other options not yet available on website. Review `randomize.js` and `params/` folder to identify all available options and create tasks for missing ones.

---

**Last Updated:** 2025-12-13
