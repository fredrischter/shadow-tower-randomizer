# Creature Template Randomization Implementation

## Overview

This implementation adds full support for randomizing creature stat templates stored in FDAT.T. Previously, only creature **spawn locations** and **drop tables** could be randomized. Now, creature **base stats** (Strength, Speed, Defense, Spirit, HP, etc.) can also be randomized with proper difficulty scaling.

## Architecture

### Files Created/Modified

**New Files:**
1. `creature_templates.js` - Core template randomization system
2. `params/test-slime-high-stats.json` - Test preset with maximum slime stats
3. `params/randomized-with-template-stats.json` - Full randomization with template stats
4. `CREATURE_TEMPLATE_IMPLEMENTATION.md` - This documentation

**Modified Files:**
1. `randomize.js` - Integrated creature template system

### Class Structure

```
CreatureTemplate (single template)
  ├── getStat(statName) → value
  ├── setStat(statName, value)
  ├── getAllStats() → { str, spd, def, ... }
  ├── setAllStats(stats)
  ├── isBlank() → boolean
  └── getPowerScore() → number (difficulty metric)

CreatureTemplates (manager class)
  ├── loadParts() - Load Parts 43, 54, 55 from FDAT.T
  ├── parseTemplatesInPart(partIndex, part)
  ├── findTemplateByHP(hp) - Identify templates
  ├── randomizeTemplates(params) - Apply randomization
  ├── setTemplateHighStats(templateInfo, stats) - For testing
  ├── writeParts() - Write back with checksums
  └── generateReport(outputPath) - Create markdown report
```

## Template Structure

Each creature template is **16 bytes**:

```
Offset | Stat   | Description
-------|--------|----------------------------------
+0     | Str    | Strength (physical attack)
+1     | Spd    | Speed (affects animations)
+2     | Def    | Defense (damage reduction)
+3     | Bal    | Balance (stagger resistance)
+4     | Sla    | Slash resistance
+5     | Smh    | Smash resistance
+6     | Pir    | Pierce resistance
+7     | Spr    | Spirit (CRITICAL for magic damage)
+8     | Foc    | Focus
+9     | Har    | Hammer/Hardness
+10    | Pur    | Purity
+11    | Par    | Parry
+12    | Mel    | Melee power
+13    | Sol    | Solomon/Holy
+14-15 | HP     | Hit Points (little-endian UInt16)
```

### Spirit Stat Importance

The **Spirit (Spr)** stat at offset +7 is the most critical stat because it feeds directly into `EntityStateData.enemy_power`, which is used in the magic damage formula:

```c
damage = (base_damage * player_stat * enemy_power) / 10
```

Higher Spirit = Higher `enemy_power` = More damage dealt to player.

## Data Flow

```
FDAT.T Parts 43, 54, 55 (binary)
  └─> CreatureTemplates.loadParts()
        └─> CreatureTemplate instances created
              └─> randomizeTemplates() OR setTemplateHighStats()
                    └─> Template stats modified
                          └─> part.setCheckSum() (CRITICAL!)
                                └─> part.write()
                                      └─> Modified FDAT.T
                                            └─> Game loads at runtime
                                                  └─> EntityStateData.enemy_power updated
                                                        └─> Damage calculation uses new values
```

## Randomization Algorithm

### Normal Randomization (params.randomizeCreatureTemplates = true)

```javascript
for each template:
  for each stat:
    if (stat > 0):
      randomMultiplier = 1 + (Math.random() * 2 - 1) * 0.3  // ±30% variance
      newValue = stat * difficultyFactor * randomMultiplier
      setStat(statName, min(255, newValue))
  
  // HP has different scaling
  newHP = hp * hpFactor * randomMultiplier
  setStat('hp', min(65535, newHP))
```

### Difficulty Scaling Factors

```
Difficulty      | Stat Factor | HP Factor
----------------|-------------|----------
extreme-easy    | 0.1         | 0.1
easy            | 0.5         | 0.5
medium          | 1.0         | 1.0
hard            | 1.3         | 1.3
very-hard       | 1.6         | 1.6
even-harder     | 2.0         | 2.0
```

### High Slime Stats Preset (test-slime-high-stats.json)

Special testing mode that sets **acid slime** and **blood slime** to extreme values:

**Acid Slime:**
- Str: 200, Spd: 150, Def: 180, Bal: 150
- Sla: 200, Smh: 200, Pir: 200, **Spr: 250**
- Foc: 180, Har: 180, Pur: 200, Par: 180
- Mel: 200, Sol: 200, **HP: 5000**

**Blood Slime:**
- Str: 220, Spd: 160, Def: 200, Bal: 160
- Sla: 220, Smh: 220, Pir: 220, **Spr: 255** (max)
- Foc: 200, Har: 200, Pur: 220, Par: 200
- Mel: 250, Sol: 220, **HP: 6000**

## Usage

### Test High Slime Stats

```bash
npm run mod "./generated/st.bin" "./params/test-slime-high-stats.json"
```

**Expected Results:**
- Acid slime deals **MASSIVE** magic damage (~1000+ HP per hit)
- Blood slime deals **MAXIMUM** damage (Spirit=255)
- Both slimes have 5000-6000 HP (extremely tanky)

### Normal Randomization with Template Stats

```bash
npm run mod "./generated/st.bin" "./params/randomized-with-template-stats.json"
```

**Expected Results:**
- All creature stats randomized with ±30% variance
- Hard difficulty = 1.3x stat scaling
- Creature HP scales with difficulty
- Map, creature spawns, and items also randomized

### Disable Template Randomization

Omit `randomizeCreatureTemplates` parameter or set to `false`:

```json
{
  "randomizeCreatureTemplates": false
}
```

## Checksum System (CRITICAL)

**Why checksums matter:**
- Every TFormatPart has a 4-byte checksum at the end
- Game validates checksums on load
- Invalid checksum = corruption detection = crash/freeze

**How it's handled:**
```javascript
// After modifying template stats:
part.setCheckSum();      // Recalculate checksum
part.verifyCheckSum();   // Verify it's correct
part.write();            // Write to disk
```

**Algorithm:**
```javascript
checkSum = 0x12345678
for each 4-byte word in binary (except last 4 bytes):
  checkSum += word
  checkSum %= 0x100000000  // 32-bit wraparound
```

## Output Files

### creature_templates_report.md

Generated in spoilers directory with randomization results:

```markdown
# Creature Template Randomization Report

Total Templates: 156

## Template Summary

| Index | Part | HP | Str | Spd | Def | ... | Score |
|-------|------|----|----|----|----|-----|-------|
| 0     | 43   | 123| 45 | 67 | 89 | ... | 234.5 |
...
```

Shows first 50 templates with all stats and power scores.

## Known Template Locations

Templates identified by HP values:

```javascript
const KNOWN_TEMPLATES = {
  acid_slime: {
    part: 43,
    offset: 0x2558e8 - 0x253000,  // Relative offset
    hp: 95,
    stats: { bal: 1, spr: 0 }
  },
  blood_slime: {
    part: 43,
    offset: 0x2559a8 - 0x253000,
    hp: 96,
    stats: { mel: 1, spr: 0 }
  }
};
```

## Power Score Calculation

Used to assess template difficulty:

```javascript
score = 
  str * 0.15 +
  spd * 0.05 +
  def * 0.15 +
  bal * 0.05 +
  sla * 0.10 +
  smh * 0.10 +
  pir * 0.10 +
  spr * 0.20 +  // Spirit weighted highest
  foc * 0.05 +
  har * 0.05 +
  pur * 0.10 +
  par * 0.05 +
  mel * 0.10 +
  sol * 0.10 +
  hp * 0.5
```

Higher score = more dangerous creature.

## Integration with Existing Systems

### Creature Spawn Randomization

**Before:** Only creature **types** were swapped (acid slime ↔ demon bat)

**Now:** Creature types swapped **AND** base stats randomized:
- Spawn location randomization (existing)
- Template stat randomization (new)
- Drop table randomization (existing)
- Difficulty scaling (enhanced)

### Data Flow Example

```
Player encounters acid slime
  ↓
Game loads creature spawn data (from area map file)
  ↓
Spawn data references creature type ID
  ↓
Game loads template from Part 43 (randomized stats!)
  ↓
EntityStateData populated with template stats
  ↓
enemy_power calculated from Spirit stat
  ↓
Damage formula uses enemy_power
  ↓
Player takes massive damage (if Spirit is high)
```

## Testing Strategy

### Phase 1: High Slime Stats Test (test-slime-high-stats.json)

**Purpose:** Verify template system works and stats affect gameplay

**Steps:**
1. Generate ISO with high slime stats preset
2. Load in emulator
3. Find acid slime or blood slime
4. Get attacked
5. **Expected:** Massive damage (1000+ HP per hit)
6. Attack slime
7. **Expected:** Extremely high HP (5000-6000)

### Phase 2: Normal Randomization (randomized-with-template-stats.json)

**Purpose:** Verify difficulty scaling and random variance

**Steps:**
1. Generate ISO with hard difficulty
2. Check creature_templates_report.md
3. Verify stats are ~1.3x base values with ±30% variance
4. Play through game
5. **Expected:** Noticeably harder creatures

### Phase 3: Difficulty Comparison

Generate 3 ISOs:
- extreme-easy
- medium
- even-harder

Compare damage taken and creature HP across difficulties.

## Limitations

### What CAN be randomized:
✅ Creature base stats (Str, Spd, Def, Spr, etc.)
✅ Creature HP
✅ Per-creature variance (±30%)
✅ Difficulty scaling

### What CANNOT be randomized (yet):
❌ Boss-specific mechanics
❌ Attack patterns/AI
❌ Movement speed (likely hardcoded)
❌ Attack cooldowns
❌ Damage types (physical vs magic)

## Future Enhancements

**Possible additions:**
1. Boss-specific stat templates
2. Enemy-type-based scaling (flying creatures get more speed)
3. Per-world stat modifiers (fire world creatures get fire resistance)
4. Exponential scaling for late-game areas
5. Random "elite" creatures with 2x stats
6. Template swapping (slime gets demon stats)

## Technical Details

### Part Index Mapping

```
FDAT.T Part Structure:
  Part 0-42: Other game data
  Part 43: Creature templates (primary) ← 0x253000-0x255800
  Part 44-53: Other game data
  Part 54: Creature templates (secondary) ← 0x2f0000+
  Part 55: Creature templates (tertiary) ← 0x305000+
  Part 56+: Other game data
```

### Template Count Estimation

```
Part 43: 0x2800 bytes / 16 = 640 templates (many blank)
Part 54: ~1000 bytes / 16 = ~60 templates
Part 55: ~800 bytes / 16 = ~50 templates

Total: ~750 template slots, ~150 non-blank
```

### Memory Safety

All stat values clamped:
- Single-byte stats: 0-255
- HP (UInt16): 0-65535

Prevents overflow/underflow bugs.

## Troubleshooting

### Checksum Errors

**Symptom:** Game freezes on load or shows corruption message

**Cause:** Checksum not updated after modification

**Fix:** Ensure `part.setCheckSum()` called before `part.write()`

### No Effect on Difficulty

**Symptom:** Creatures seem same difficulty despite randomization

**Possible causes:**
1. `randomizeCreatureTemplates` not set in params
2. Difficulty factor = 1.0 (medium)
3. Random variance canceled out stat changes
4. Wrong creature encountered (not randomized type)

**Debug:** Check `creature_templates_report.md` for actual stat values

### Extreme Difficulty Spike

**Symptom:** Game impossibly hard in early areas

**Cause:** Spirit stat too high on common creatures

**Fix:** Reduce difficulty or implement progressive scaling

## Conclusion

This implementation provides **full creature template randomization** with:
- ✅ Proper difficulty scaling
- ✅ Checksum handling (prevents corruption)
- ✅ Test presets for verification
- ✅ Comprehensive reporting
- ✅ Integration with existing randomization systems

The creature combat system is now **fully randomizable**, enabling completely new gameplay experiences where even basic slimes can be deadly threats or trivial encounters depending on the randomization seed and difficulty settings.

**Next steps:** Test thoroughly, gather user feedback, implement progressive difficulty scaling, add boss-specific templates.
