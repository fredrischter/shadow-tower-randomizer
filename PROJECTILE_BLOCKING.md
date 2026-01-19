# Projectile Creature Blocking Implementation

## Overview
This implementation blocks certain creatures that shoot projectiles from spawning in specific areas. This addresses gameplay balance issues where projectile-shooting enemies can make certain areas too difficult or frustrating.

## Implementation Details

### Files Modified
1. **data_model.js** - Added creature lists and flagging
2. **randomize.js** - Added blocking logic after creature randomization

### Creatures Identified as Projectile Shooters (26 total)

These creatures were identified by analyzing `spell_damage_data_with_creatures.md` to find creatures with magic effects that deal only bare damage values (no status effects):

- demon_bat
- imp
- star_serpent
- hollow_mage  
- beak_plant
- damned_angel
- magi_magus
- dragon_turtle
- winged_worm
- claw_head
- hell_hunter
- stack_eyes
- old_face
- dark_fairy
- maristella
- dark_bishop
- deha
- gargaral
- death_mage
- fester
- tongue_imp
- watcher_plant
- elder
- ray_plant
- black_imp
- dark_imp

### Blocked Areas

Currently only one area is blocked:
- **human_world_cursed_region** - The Cursed Region in the Human World

More areas can be easily added to the list in `data_model.js`.

### How It Works

1. **Creature Flagging** (data_model.js, lines ~2148-2155)
   - During creature initialization, each creature is checked against the `projectileShootingCreatures` list
   - If matched, the creature's `projectileShooter` flag is set to `true`

2. **Blocking Logic** (randomize.js, lines ~1908-1937)
   - Runs AFTER regular creature randomization completes
   - Iterates through all valid creatures in all areas
   - For each creature in a blocked area:
     - Checks if it's a projectile shooter
     - If yes, finds a non-projectile creature from the same randomization group
     - Swaps them to remove the projectile creature from the blocked area
   - Logs all replacements for verification

3. **Randomization Groups**
   - The replacement creature is chosen from the same randomization group to maintain balance
   - If no non-projectile creatures exist in the group, a warning is logged

### Adding New Blocked Areas

To block projectile creatures from additional areas:

1. Open `data_model.js`
2. Find the `global.areasBlockedForProjectileCreatures` array (around line 1483)
3. Add the area name(s) to the array:
```javascript
global.areasBlockedForProjectileCreatures = [
  "human_world_cursed_region",
  "your_new_area_name_here",
  "another_area_to_block"
];
```

Area names can be found in `map.json`.

### Testing

To verify the implementation:

1. Run randomization with creature randomization enabled
2. Check the randomization log for lines like:
   ```
   === Blocking projectile creatures from restricted areas ===
   Removing projectile creature [name] from [area]
   Replacing with [replacement_name]
   === Projectile blocking complete ===
   ```
3. In-game, visit the Cursed Region and verify no projectile-shooting enemies spawn

### Performance Impact

Minimal - the blocking logic runs once after creature randomization and only affects creatures in blocked areas (typically a small subset of all creatures).

## Future Enhancements

Potential improvements:
- Add more areas to the blocked list based on player feedback
- Create difficulty-based blocking (e.g., only block on easier difficulties)
- Add parameters to enable/disable projectile blocking
- Create separate lists for different projectile types (magic vs physical)
