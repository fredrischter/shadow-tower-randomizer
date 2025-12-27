# Creature Templates Architecture Correction

## Critical Discovery

**Previous Understanding (INCORRECT):**
- Creature templates stored in global FDAT.T Parts 43, 54, 55
- Templates shared across all areas

**Correct Understanding:**
- Creature templates are stored **PER AREA** within each area's map file
- Each area has 10 FDAT.T parts starting from its logo_index
- Map file is at logo_index + 3
- Templates are part of the map file's sizedMix structure

## Area Structure (from constants.js and data_model.js)

Each area has 10 FDAT.T parts:

```
logo_index + 0:  Logo/title screen
logo_index + 1:  Tiles (RTIM texture map)
logo_index + 2:  MIPS machine code (map script)
logo_index + 3:  Map database ⭐ CONTAINS CREATURE TEMPLATES
logo_index + 4:  Customized TMD (collisions)
logo_index + 5:  Customized TMD (tiles)
logo_index + 6:  Texture (VH file ADPCM audio)
logo_index + 7:  VB file (ADPCM audio)  
logo_index + 8:  Map database entity class
logo_index + 9:  Tilemap
```

## Example: Human World Solitary Region

- Logo index: 41 (from constants.js)
- Tiles index: 42 (logo_index + 1)
- MIPS index: 43 (logo_index + 2)
- **Map index: 44** (logo_index + 3) ⭐
- Texture index: 47 (logo_index + 6)

## Map File SizedMix Structure

The map file (logo_index + 3) contains multiple sizedMix sections:

```javascript
// From data_model.js Area.setup()
sizedMixStarts[0]: Entity and entity data
sizedMixStarts[1]: Spawns
sizedMixStarts[2]: Mystery (300 entries, 0x18 bytes each)
sizedMixStarts[3]: Objects
sizedMixStarts[4]: Collectables
sizedMixStarts[5]: 0x80 entries, size 0x10, all empty
sizedMixStarts[6]: 4 bytes entries
sizedMixStarts[7]: ??? LIKELY CREATURE TEMPLATES
```

## Template Location Verification

Acid slime template found at file offset 0x002558e8 in FDAT.T Part 44:

- FDAT.T Part 44: `255800-25e800.T` (starts at 0x255800)
- Template offset within part: 0x002558e8 - 0x255800 = 0x0e8
- This is very early in the file (232 bytes in)
- Part 44 = map file for logo_index 41 (human_world_solitary_region)

## Implications for Implementation

**INCORRECT approach:**
- Load Parts 43, 54, 55 globally
- Modify templates across all parts
- ❌ This won't work because templates are per-area

**CORRECT approach:**
- Iterate through all areas
- For each area, access area.map_file (which is FDAT.files[area.map_index])
- Find creature templates within the map file's data structure
- Likely in sizedMixStarts[7] or a dedicated section
- Randomize templates per area
- Call setCheckSum() on each area's map_file

## Next Steps

1. Examine map file structure to locate exact template section
2. Determine if templates are in sizedMixStarts[7] or elsewhere
3. Rewrite creature_templates.js to work with Area objects
4. Integrate with data_model.js Area.setup()
5. Test with human_world_solitary_region (acid/blood slime)

## Data Flow Correction

**Corrected flow:**
1. Area map file contains creature templates (base stats)
2. When creature spawns, game loads template stats
3. Template stats populate EntityStateData structure
4. EntityStateData.enemy_power (from template Spirit stat) used in damage calculation
5. Damage formula: `damage = (base_damage * player_stat * enemy_power) / 10`

**This means:**
- Each area's creatures have their own stat templates
- Randomizing an area's templates affects only that area's creatures
- Global Parts 43/54/55 hypothesis was WRONG
- Must modify map files per area, not global parts
