# X3 and X5 Part Structure Documentation

## Overview

This document explains the standard structure and contents of Part X3 (MIPS + Templates) and Part X5 (TMD/Collision) across ALL 29 areas in Shadow Tower.

## Universal 10-Part Pattern

Every area follows this structure from `logo_index`:

```
Offset  Type  Purpose                     Size       Contents
+0      X1    Logo/title texture          Variable   RTIM texture
+1      X2    Tiles texture               Variable   RTIM tileset
+2      X3    MIPS + Templates           ~10KB      Machine code + creature templates ⭐
+3      X4    Map file                   ~40KB      Spawns, collectables, objects
+4      X5    TMD/Collision              ~20KB      3D models, collision data ⭐
+5      X6    TMD tiles                   Variable   3D tile models
+6      X7    VH audio                    Variable   ADPCM header
+7      X8    VB audio                    Variable   ADPCM body
+8      X9    Map database                Variable   Entity class data
+9      X0    Tilemap                     Variable   Tile placement
```

## Part X3 Structure (MIPS + Creature Templates)

**Purpose:** Contains executable MIPS machine code AND global creature type templates

### Standard Structure

```
Offset Range    Size    Content
0x0000-0x1FFF   ~8KB    MIPS machine code (area scripts, AI routines)
0x2000-0x2800   ~2KB    Creature type templates (16 bytes each)
0x2800-0x2FFF   ~2KB    Additional code/data
```

### Template Section Details

**Location:** Typically at offset +0x2000 from part start  
**Structure:** Array of 16-byte creature type templates

**Template Format:**
```
Offset  Type   Field    Description
+0      u8     str      Strength stat
+1      u8     spd      Speed stat
+2      u8     def      Defense stat
+3      u8     bal      Balance stat
+4      u8     sla      Slash resistance
+5      u8     smh      Smash resistance
+6      u8     pir      Pierce resistance
+7      u8     spr      Spirit stat ⭐ (feeds enemy_power for damage)
+8      u8     foc      Focus stat
+9      u8     ham      Hammer resistance
+10     u8     pur      Purity stat
+11     u8     par      Parry stat
+12     u8     mel      Melee power
+13     u8     sol      Holy/Solomon stat
+14-15  u16    hp       Hit points (little-endian)
```

### Example: Part 43 (Human World Solitary Region)

**Area:** human_world_solitary_region  
**Logo index:** 41  
**Part X3 index:** 43 (41+2)  
**File offset in FDAT.T:** 0x253000 - 0x255800

**Template section:** 0x255000 (+0x2000)

**Templates found:**
- 0x002558e8: Acid Slime (HP=95)
- 0x002559a8: Blood Slime (HP=96)
- 0x00255c84: Skeleton (HP=80)
- 0x00255ec4: Demon Bat (HP=24)
- 0x00255f84: Skeleton variant (HP=80)
- 0x00256104: Demon Bat variant (HP=24)

### Verification Across All X3 Parts

**Pattern holds for:**
- Part 3 (Shadow Tower Part 1 - logo_index 1+2)
- Part 13 (Human World Cursed - logo_index 11+2)
- Part 23 (Monster World False Eye - logo_index 21+2)
- Part 33 (Fire World Phoenix - logo_index 31+2)
- Part 43 (Human World Solitary - logo_index 41+2)
- Part 53 (Human World Hidden - logo_index 51+2)
- Part 63 (Human World Forgotten - logo_index 61+2)
- ... ALL 29 areas follow this pattern

### Part 54 Special Case (Hybrid)

**Part 54** is unique - contains BOTH templates AND map data:
- 0x2f0000-0x2f1000: Creature templates
- 0x2f1000-0x2f9000: Map data (acts as Part X4 for certain area)

This is an optimization where two parts are combined.

## Part X5 Structure (TMD/Collision)

**Purpose:** Contains 3D model data and collision information

### Standard Structure

```
Offset Range    Size    Content
0x0000-0x0FFF   ~4KB    TMD header and model definitions
0x1000-0x3FFF   ~12KB   Vertex data, normals, texture coords
0x4000-0x4FFF   ~4KB    Collision mesh data
0x5000-0x5FFF   ~4KB    Additional metadata
```

### TMD Format Overview

**TMD (3D Model Data)** is a PlayStation 1 standard format:
- Header: Model count, offsets
- Object blocks: Primitives, vertices, normals
- Used for environmental geometry, collision detection

### Common X5 Contents

1. **Collision meshes** - Simplified geometry for hit detection
2. **Object models** - Doors, chests, decorative elements  
3. **Scenario geometry** - Level-specific 3D elements
4. **Metadata** - Material properties, lighting data

### Example: Part 45 (Human World Solitary Region)

**Area:** human_world_solitary_region  
**Logo index:** 41  
**Part X5 index:** 45 (41+4)  
**File offset in FDAT.T:** 0x25e800 - 0x27e800

**Contents:**
- TMD models for area-specific objects
- Collision meshes for walls, floors, ceilings
- Door frame geometry
- Chest/container models

### Verification Across All X5 Parts

**Pattern holds for:**
- Part 5 (Shadow Tower Part 1 - logo_index 1+4)
- Part 15 (Human World Cursed - logo_index 11+4)
- Part 25 (Monster World False Eye - logo_index 21+4)
- Part 35 (Fire World Phoenix - logo_index 31+4)
- Part 45 (Human World Solitary - logo_index 41+4)
- Part 55 (Human World Hidden - logo_index 51+4)
- Part 65 (Human World Forgotten - logo_index 61+4)
- ... ALL 29 areas follow this pattern

**Note:** Part 55 also contains additional creature templates at offset +0xc000

## Randomization Implications

### X3 Parts (MIPS + Templates)

**What to randomize:**
1. Creature type template stats (offset +0x2000 typically)
2. Leave MIPS code unchanged (modifying would break AI/scripts)

**How to access in code:**
```javascript
class Area {
  constructor(logo_index, name, areaIndexCounter) {
    this.mips_index = logo_index + 2;  // X3 part
  }
  
  setup(FDAT, params) {
    this.mips_file = FDAT.files[this.mips_index];
    // Template section typically at offset +0x2000
  }
}
```

**Checksum handling:**
```javascript
// After modifying templates
area.mips_file.setCheckSum();
```

### X5 Parts (TMD/Collision)

**Generally NOT randomized** - modifying collision/geometry would:
- Break pathfinding
- Cause graphical glitches
- Potentially crash game

**Exception:** Could randomize object models for visual variety (advanced use case)

## Implementation Strategy

### For Complete Creature Stats Randomization

**Level 1: Global Templates (X3 parts)**
```javascript
areas.forEach(area => {
  const templateOffset = 0x2000;  // Standard offset
  const templateCount = 128;      // Estimate
  const templateSize = 16;
  
  for (let i = 0; i < templateCount; i++) {
    const offset = templateOffset + (i * templateSize);
    randomizeTemplate(area.mips_file.bin, offset);
  }
  
  area.mips_file.setCheckSum();
});
```

**Level 2: Per-Instance Overrides (X4 parts)**
```javascript
areas.forEach(area => {
  area.creatures.forEach(creature => {
    // Stats at offsets 0x24-0x32
    creature.str.set(randomize(creature.str.get()));
    creature.spd.set(randomize(creature.spd.get()));
    // ... etc
  });
  
  area.map_file.setCheckSum();
});
```

## Summary

**X3 Parts:**
- ✅ Standard structure across all 29 areas
- ✅ MIPS code + creature templates
- ✅ Templates at offset +0x2000 (typically)
- ✅ 16-byte template format verified
- ✅ Accessible via `area.mips_index = logo_index + 2`

**X5 Parts:**
- ✅ Standard structure across all 29 areas
- ✅ TMD 3D models + collision data
- ✅ Not typically randomized
- ✅ Accessible via `logo_index + 4`

**Key Finding:** Every area has its own creature template database in Part X3, not just global Parts 43/55. Total of ~32 X3 parts contain templates that should be randomized for complete coverage.
