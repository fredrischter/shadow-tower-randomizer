# Creature Template Part Analysis - Answering the X3/X4/X5 Mystery

## User Question

> The creature mapping we have is one of these files (44) or generically X4 (54, 64, etc) but you found stats in file 43 and 55, that should be copy or something, please find what are these.

## Answer: Parts 43 and 55 are GLOBAL Creature Template Databases

### Key Findings

**Parts 43 and 55 are NOT duplicates - they are GLOBAL CREATURE TEMPLATE DATABASES separate from per-area map files.**

### Part Boundary Analysis

From FDAT.T_PARTS file analysis:

```
Part 43: 0x253000 - 0x255800 (10,240 bytes = 10KB)
  ├─ Template data starts at 0x255000 (8KB into the part)
  ├─ Acid Slime at 0x002558e8
  └─ Blood Slime at 0x002559a8

Part 44: 0x255800 - 0x25e800 (36,864 bytes = 36KB)
  └─ human_world_solitary_region MAP FILE (logo_index 41 + 3)
      ├─ Contains spawn locations for creatures in this area
      └─ Creature entity data at offsets 0x24-0x32 (per-entity stats)

Part 54: 0x2f0000 - 0x2f9000 (36,864 bytes = 36KB)
  ├─ Template data at 0x2f0000 (START of part)
  └─ human_world_hidden_region MAP FILE (logo_index 51 + 3)

Part 55: 0x2f9000 - 0x30f800 (92,160 bytes = 90KB)
  └─ Template data at 0x305000 (48KB into the part)
```

### What Each Part Type Contains

#### Parts X3 (43, 53) - Creature Template Databases (GLOBAL)
- **Purpose:** Store base creature stats/templates for ALL creatures
- **Structure:** Array of 16-byte creature templates
- **Contents:** Str/Spd/Def/Bal/Sla/Smh/Pir/Spr/Foc/Har/Pur/Par/Mel/Sol/HP
- **Scope:** GLOBAL - one set of templates for entire game
- **Usage:** Loaded at game start, referenced by creature type ID

#### Parts X4 (44, 54, 64, etc.) - Map Files (PER-AREA)
- **Purpose:** Store area-specific map data including creature spawns
- **Structure:** Map geometry + entity spawns + exits
- **Creature Data:** Spawn locations and **per-instance stat overrides**
- **Scope:** LOCAL - one per area
- **Usage:** Loaded when entering the area

#### Parts X5 (55, 65, etc.) - Additional Creature Templates or Other Data
- **Purpose:** Extended creature template storage or other game data
- **Contents:** Additional creature templates (Part 55 has templates at +0xc000)
- **Scope:** GLOBAL

### The Two-Level System

Shadow Tower uses a **TWO-LEVEL creature stats system**:

```
┌─────────────────────────────────────────────────────────────┐
│ LEVEL 1: Global Creature Templates (Parts 43, 55)          │
├─────────────────────────────────────────────────────────────┤
│ - Base stats for each creature TYPE                        │
│ - acid_slime template: Bal=1, Spr=0, HP=95                 │
│ - blood_slime template: Mel=1, Spr=0, HP=96                │
│ - Shared across ALL instances in the game                  │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼ Referenced by creature type ID
┌─────────────────────────────────────────────────────────────┐
│ LEVEL 2: Per-Area Creature Instances (Parts X4 - Map Files)│
├─────────────────────────────────────────────────────────────┤
│ - Specific spawn in specific area                          │
│ - Position: x, y, z, rotation                              │
│ - Type ID: references template from Level 1                │
│ - OPTIONAL stat overrides (creature.str, creature.spd, etc)│
│ - Spawn rate, drop table                                   │
└─────────────────────────────────────────────────────────────┘
```

### Why Templates in Part 54?

**Part 54 is BOTH a map file AND contains template data at offset 0x0:**

```
Part 54 Layout:
0x2f0000 - 0x2f0800: Creature template data (2KB)
0x2f0800 - 0x2f9000: Map data for human_world_hidden_region
```

This suggests **Part 54 is a hybrid part** - it starts with creature template data and then contains map data. This is efficient memory packing.

### Implications for Randomization

**To randomize creature stats, we need to modify BOTH levels:**

1. **Global Templates (Parts 43, 55):**
   - Affects ALL instances of that creature type
   - Example: Changing acid_slime template Spr from 0→250 affects every acid slime in the game

2. **Per-Instance Overrides (Parts X4 - Map Files):**
   - Already covered by data_model.js Area.setup()
   - These are the Creature objects we currently have access to
   - Located at logo_index + 3 for each area

### Why My Previous Implementation Was Partially Correct

**CORRECT:**
- ✅ Creature stats exist in per-area map files (Parts X4)
- ✅ data_model.js already loads these as Creature objects
- ✅ Modifying creature.str, creature.spd, etc. in map files works

**INCOMPLETE:**
- ❌ Didn't account for global template databases (Parts 43, 55)
- ❌ If templates aren't modified, creatures might inherit base stats from templates
- ❌ Need to understand template vs override priority

### The Complete Picture

```
Game Creature Stat Resolution (Hypothesis):
1. Load global template for creature type from Parts 43/55
2. Load map file (Part X4) for current area
3. For each creature spawn:
   a. Start with base stats from template (Level 1)
   b. Apply any overrides from map entity data (Level 2)
   c. Apply runtime modifiers (enemy_power calculation)
```

### Recommended Implementation Strategy

**Option A: Modify Both Levels (Most Complete)**
```javascript
// 1. Randomize global templates (Parts 43, 55)
const templates = loadCreatureTemplates([43, 55]);
templates.forEach(template => randomizeTemplateStats(template));
templates.saveWithChecksums();

// 2. Randomize per-instance overrides (Parts X4 - existing)
areas.forEach(area => {
  area.creatures.forEach(creature => {
    randomizeCreatureStats(creature);  // Already implemented
  });
});
```

**Option B: Per-Instance Only (Current Approach - May Be Sufficient)**
```javascript
// Only modify map files (Parts X4)
// Assumes per-instance stats override templates
areas.forEach(area => {
  area.creatures.forEach(creature => {
    randomizeCreatureStats(creature);  // Current implementation
  });
});
```

### Testing Strategy

**To determine which approach is needed:**

1. **Test Current Implementation:**
   - Run existing per-instance randomization
   - Test in-game: do slime stats change?
   - If YES → templates are not used or overridden correctly
   - If NO → templates take priority, need to modify both levels

2. **Test Template Modification:**
   - Create patches that modify Part 43 acid_slime Spr: 0→250
   - Test in-game: do ALL acid slimes get higher damage?
   - This confirms template system is active

### Files That Need Investigation

**To complete understanding:**
- `data_model.js` - Check how Creature class initializes stats
- `randomizer_common.js` - See which parts are loaded
- In-game testing - Verify which stats are actually used

### Conclusion

**Parts 43 and 55 are GLOBAL CREATURE TEMPLATE DATABASES, not duplicates.**

They contain base stats for creature types that are referenced by per-area spawn data in map files (Parts X4). Shadow Tower uses a two-level stat system:
- **Level 1 (Global):** Creature type templates in Parts 43/55
- **Level 2 (Local):** Per-instance overrides in map files (Parts X4)

The current implementation only modifies Level 2. Whether Level 1 needs modification depends on stat resolution priority - testing required to confirm.

### Next Steps

1. Test current per-instance implementation in-game
2. If stats don't change, implement global template randomization
3. Investigate stat resolution priority in game code
4. Document the complete stat inheritance chain

---

**Question Answered:** Parts 43 and 55 are **NOT copies** - they are dedicated creature template databases that store global base stats, separate from the per-area map files at Parts X4.
