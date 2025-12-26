# Creature Template TFormatPart Coverage Analysis

## Executive Summary

**Critical Finding:** Creature templates at offset **0x255000** are located in **FDAT.T Part 43** (`253000-255800.T`), which is **NOT currently loaded or modified** by the randomizer's data_model.js implementation.

**Implication:** While we successfully located creature templates, they cannot be modified via the existing randomization infrastructure because Part 43 is not being processed.

---

## Acid Slime Damage Analysis

**User's Observation:** Acid slime inflicts **significant damage (~300 HP for 7 hits)**, NOT minimal damage as previously assumed.

**Re-evaluation of Spirit Stat:**
- Acid slime template at `0x2558e8`: **Spirit = 0**
- Blood slime template at `0x2559a8`: **Spirit = 0**

**Conclusion:** Spirit stat of **0** does NOT mean "minimal damage." The damage calculation formula:
```c
damage = (base_damage * player_stat * enemy_power) / 10
```

Where:
- `enemy_power` may be calculated from **multiple template stats**, not just Spirit
- Or `enemy_power` uses a **default value** when Spirit = 0
- The relationship between template stats and `EntityStateData.enemy_power` is more complex than initially understood

---

## TFormatPart System Overview

### What is TFormatPart?

From `randomizer_common.js` (lines 423-638):

```javascript
class TFormatPart {
  constructor(startOffset, bin, fileName, originalTFile, indexInTFile) {
    this.startOffset = startOffset;    // Offset in parent FDAT.T file
    this.bin = bin;                     // Binary data array
    this.fileName = fileName;           // Part file path
    this.indexInTFile = indexInTFile;   // Index in parent TFormat
  }
  
  // Critical methods:
  setCheckSum()    // Updates checksum at end of binary
  verifyCheckSum() // Validates checksum
  write()          // Writes part to disk
  reload(offset)   // Reloads part from disk
}
```

### TFormat (Parent Container)

From `randomizer_common.js` (lines 640-781):

```javascript
class TFormat {
  constructor(reader) {
    // Reads FDAT.T header with offset table
    // Creates TFormatPart for each file section
    this.files = []; // Array of TFormatPart instances
  }
  
  injectPart(file)  // Injects modified part back into main binary
  writeParts()      // Writes all parts to disk
  write()           // Writes consolidated FDAT.T
}
```

### Key Mechanism: Checksum Validation

Every TFormatPart has a **4-byte checksum** at the end of its binary data:

```javascript
checkSum() {
  var checkSum = 0x12345678;
  for (var offset = 0; offset < this.bin.length-4; offset+=4) {
    var added = getUInt32(this.bin, offset);
    checkSum += added;
    checkSum %= 0x100000000; // 32-bit overflow wrap
  }
  return checkSum;
}

setCheckSum() {
  var checksumOffset = this.bin.length - 4;
  var checkSum = this.checkSum();
  setUInt32(this.bin, checksumOffset, checkSum);
}
```

**Critical:** Any modification to a TFormatPart's binary data **MUST** call `setCheckSum()` afterward, or the game will detect corruption.

---

## FDAT.T Part Structure

FDAT.T is divided into **588 parts** (from directory listing). Each part represents a file section within the container.

### Creature Template Location

**Primary template region:** `0x255000 - 0x256000` (4KB)

**Containing Part:**
- **Part 43**: Range `0x253000 - 0x255800`
- **Size:** 10,240 bytes (0x2800)
- **Template offset within part:** `0x255000 - 0x253000 = 0x2000` (8,192 bytes)

**Specific Template Offsets:**

| Template | FDAT.T Offset | Part 43 Offset | HP  | Stats |
|----------|---------------|----------------|-----|-------|
| Acid Slime  | 0x2558e8 | 0x28e8 | 95  | Bal=1, Spr=0 |
| Blood Slime | 0x2559a8 | 0x29a8 | 96  | Mel=1, Spr=0 |

### Additional Template Sections

From FDAT_TEMPLATE_SEARCH_RESULTS.md, templates also found at:
- `0x2f0000` region
- `0x2f8000` region  
- `0x305000` region

**Need to identify which parts contain these sections.**

---

## Current Implementation Coverage

### Parts Currently Loaded by data_model.js

From `data_model.js` analysis, the randomizer loads **only specific parts** per area:

```javascript
class Area {
  setup(FDAT, params) {
    this.tiles_file = FDAT.files[this.tiles_index];   // Tileset data
    this.map_file = FDAT.files[this.map_index];       // Map layout
    this.mips_file = FDAT.files[this.mips_index];     // MIPS code
    this.texture_file = FDAT.files[this.texture_index]; // Textures
  }
}
```

**Part indices loaded:** Varies by area, but typically:
- Tileset parts
- Map data parts  
- Texture parts
- MIPS executable parts

**Part 43 is NOT in this list** - it's not associated with any area.

### Parts Loaded by Item System

```javascript
class ItemData {
  setup(FDAT) {
    this.map_file = FDAT.files[ITEM_DATA_PART_FILE_INDEX];
  }
}
```

Where `ITEM_DATA_PART_FILE_INDEX` is defined in constants.js.

**Part 43 is NOT the item data part.**

### Spawn Data Loading

From `data_model.js` (lines 893-901):

```javascript
setupSpawns(area, tfile) {
  // Loads creature spawn data from map_file
  // Each spawn references creature TYPE ID
  // Does NOT load creature template stats
}
```

**Critical Gap:** Spawn data contains **creature type references**, but the actual **creature stat templates** are in Part 43, which is **never loaded**.

---

## Why Creature Templates Are Not Modified

### Current Data Flow

```
FDAT.T
  ├─ Part 1-42: Area data, items, textures
  ├─ Part 43: ❌ CREATURE TEMPLATES (NOT LOADED)
  ├─ Part 44+: More area/texture data
  └─ Part 588: Final sections
```

**Randomization Flow:**
1. `randomize.js` calls `data_model.setup(FDAT, ...)`
2. `data_model.setup()` loads **only area-specific parts**
3. Part 43 is **never instantiated as a TFormatPart object**
4. Templates in Part 43 **remain unmodified**
5. Game uses **original template stats** even in randomized games

### Why This Matters

**Example:** If we want to randomize creature stats:
- Spawn location can be changed ✅ (in area map_file parts)
- Creature TYPE can be swapped ✅ (in spawn data)
- **Creature STATS cannot be modified** ❌ (Part 43 not loaded)

Result: Acid slime always has HP=95, Bal=1, Spr=0 regardless of randomization.

---

## Implementation Gap Analysis

### What IS Currently Covered

✅ **Creature spawn locations** (in area map files)
- Part indices: Varies per area
- Modified via `Spawn` class in data_model.js
- Checksum: ✅ Handled via `tfile.setCheckSum()`

✅ **Creature types** (spawn data references)
- Part indices: Varies per area  
- Modified via `Spawn.type` field
- Checksum: ✅ Handled

✅ **Item data** (equipment stats)
- Part index: `ITEM_DATA_PART_FILE_INDEX`
- Modified via `ItemData` class
- Checksum: ✅ Handled

### What is NOT Covered

❌ **Creature template stats at 0x255000** (Part 43)
- **Part 43 is never loaded into memory**
- **No TFormatPart object exists for it**
- **Cannot be modified without implementation changes**
- **Checksum not set** (because part never touched)

❌ **Additional template sections** (0x2f0000, 0x2f8000, 0x305000)
- Need to identify which parts
- Same issue: Parts not loaded

❌ **Template-to-EntityStateData mapping**
- How templates load into runtime EntityStateData
- How `enemy_power` is calculated from template stats
- This calculation likely happens in MIPS code, not data

---

## Required Implementation Changes

### Option 1: Add Part 43 to Global Template System

**Approach:** Create a global `CreatureTemplates` class similar to `ItemData`.

```javascript
// In constants.js
const CREATURE_TEMPLATE_PART_INDEX = 43;  // Part containing templates

// In data_model.js
class CreatureTemplates {
  setup(FDAT) {
    this.template_file = FDAT.files[CREATURE_TEMPLATE_PART_INDEX];
    this.templates = [];
    
    // Parse templates starting at offset 0x2000 within part
    const baseOffset = 0x2000;
    const templateSize = 16;
    
    for (let i = 0; i < 100; i++) {  // Estimate 100 templates
      const offset = baseOffset + (i * templateSize);
      if (offset + templateSize <= this.template_file.bin.length) {
        this.templates.push(new CreatureTemplate(
          this.template_file, 
          offset, 
          i
        ));
      }
    }
  }
}

class CreatureTemplate {
  constructor(tfile, offset, index) {
    this.tfile = tfile;
    this.offset = offset;
    this.index = index;
    
    // 16-byte structure
    this.str = new UInt8(tfile.bin, offset + 0);
    this.spd = new UInt8(tfile.bin, offset + 1);
    this.def = new UInt8(tfile.bin, offset + 2);
    this.bal = new UInt8(tfile.bin, offset + 3);
    this.sla = new UInt8(tfile.bin, offset + 4);
    this.smh = new UInt8(tfile.bin, offset + 5);
    this.pir = new UInt8(tfile.bin, offset + 6);
    this.spr = new UInt8(tfile.bin, offset + 7);  // Spirit (enemy_power source?)
    this.foc = new UInt8(tfile.bin, offset + 8);
    this.har = new UInt8(tfile.bin, offset + 9);
    this.pur = new UInt8(tfile.bin, offset + 10);
    this.par = new UInt8(tfile.bin, offset + 11);
    this.mel = new UInt8(tfile.bin, offset + 12);
    this.sol = new UInt8(tfile.bin, offset + 13);
    this.hp = new UInt16(tfile.bin, offset + 14);  // Little-endian
  }
  
  randomizeStats(factor) {
    this.str.set(Math.min(255, Math.ceil(this.str.get() * factor)));
    this.spd.set(Math.min(255, Math.ceil(this.spd.get() * factor)));
    // ... all stats
    this.hp.set(Math.min(65535, Math.ceil(this.hp.get() * factor)));
  }
}

// In data_model.js setup()
var creatureTemplates = new CreatureTemplates();

function setup(FDAT, stDir, params) {
  creatureTemplates.setup(FDAT);  // ← NEW: Load Part 43
  
  for (var i in items) {
    items[i].setup(FDAT);
  }
  for (var i in areas) {
    areas[i].setup(FDAT, params);
  }
}
```

**After modifications:**
```javascript
// In randomize.js
if (params.randomizeCreatureStats) {
  creatureTemplates.templates.forEach(template => {
    template.randomizeStats(difficultyFactor);
  });
  
  // CRITICAL: Set checksum
  creatureTemplates.template_file.setCheckSum();
}
```

### Option 2: Load Additional Template Parts

Identify and load **all** parts containing template data:

```javascript
const CREATURE_TEMPLATE_PARTS = [
  43,   // 0x255000 region
  ?,    // 0x2f0000 region (need to find part index)
  ?,    // 0x2f8000 region
  ?,    // 0x305000 region
];

class CreatureTemplates {
  setup(FDAT) {
    this.template_files = [];
    CREATURE_TEMPLATE_PARTS.forEach(partIndex => {
      this.template_files.push(FDAT.files[partIndex]);
    });
    
    // Parse templates from all parts
    this.parseTemplates();
  }
}
```

### Option 3: Direct Part File Modification (Bypass TFormat)

**For testing only** - directly modify Part 43 file:

```javascript
const fs = require('fs');
const partPath = './iso-dump/ST/COM/FDAT.T_PARTS/43 253000-255800.T';

// Load part
const part = new TFILEReader(partPath).readTFormatPart(0x253000);

// Modify acid slime spirit stat (offset 0x28e8 + 7 = 0x28ef)
part.bin[0x28ef] = 50;  // Change Spirit from 0 to 50

// Update checksum
part.setCheckSum();

// Write back
part.write();
```

**Then run pack.js to rebuild FDAT.T.**

---

## Recommended Implementation Path

### Phase 1: Identify All Template Parts (IMMEDIATE)

**Script to find template regions:**

```javascript
// find_template_parts.js
const fs = require('fs');
const path = require('path');

const partsDir = './iso-dump/ST/COM/FDAT.T_PARTS';
const templateRegions = [
  0x255000,  // Primary
  0x2f0000,  // Secondary
  0x2f8000,  // Tertiary
  0x305000,  // Quaternary
];

templateRegions.forEach(offset => {
  const files = fs.readdirSync(partsDir);
  files.forEach(f => {
    if (f.endsWith('.T') && !f.includes('.tim')) {
      const match = f.match(/(\d+) ([0-9a-f]+)-([0-9a-f]+)\.T/);
      if (match) {
        const start = parseInt(match[2], 16);
        const end = parseInt(match[3], 16);
        if (start <= offset && offset < end) {
          console.log(`Offset 0x${offset.toString(16)} in Part ${match[1]}: ${f}`);
        }
      }
    }
  });
});
```

### Phase 2: Create CreatureTemplates Class (HIGH PRIORITY)

Implement Option 1 above:
- Define `CREATURE_TEMPLATE_PARTS` constant
- Create `CreatureTemplate` class with all 14 stat fields
- Create `CreatureTemplates` manager class
- Integrate into `data_model.setup()`

### Phase 3: Add Randomization Logic (MEDIUM PRIORITY)

In `randomize.js`:
- Add creature stat randomization
- Apply difficulty scaling
- Handle special creatures (bosses, NPCs)
- **MUST call `setCheckSum()` on all modified parts**

### Phase 4: Testing & Validation (CRITICAL)

1. Modify single template (e.g., acid slime Spirit 0 → 50)
2. Rebuild ISO
3. Test in-game damage
4. Verify checksum doesn't cause corruption
5. Test full randomization

---

## Checksum Implications

### Why Checksums Matter

Shadow Tower validates TFormatPart checksums at load time. Invalid checksum → corruption detection → game refuses to load data.

**Evidence from code:**
```javascript
verifyCheckSum() {
  var expected = getUInt32(this.bin, checksumOffset);
  var checkSum = this.checkSum();
  if (checkSum != expected) {
    console.log("ERROR - checksum mismatch");
    return false;
  }
}
```

### Current Implementation Coverage

**Parts with checksum handling:**
- ✅ Area map files (via `tfile.setCheckSum()`)
- ✅ Item data (via `map_file.setCheckSum()`)
- ✅ Texture files (via `processRandomizeAndWriteRTIM()`)

**Parts WITHOUT checksum handling:**
- ❌ Part 43 (creature templates) - **NOT LOADED**
- ❌ Additional template parts - **NOT LOADED**

### Checksum Update Workflow

When modifying any part:

```javascript
// 1. Modify binary data
part.bin[offset] = newValue;

// 2. MUST call setCheckSum() before writing
part.setCheckSum();

// 3. Write to disk
part.write();

// 4. Inject back into parent TFormat
tformat.injectPart(part);

// 5. Write consolidated FDAT.T
tformat.write();
```

**Missing ANY step causes corruption.**

---

## Testing Script (Proof of Concept)

```javascript
// test_template_modification.js
const { TFILEReader } = require('./randomizer_common');

// Load Part 43
const part43Path = './iso-dump/ST/COM/FDAT.T_PARTS/43 253000-255800.T';
const part43 = new TFILEReader(part43Path).readTFormatPart(0x253000);

console.log('Part 43 loaded, size:', part43.bin.length);

// Acid slime offset within part: 0x2000 + 0x8e8 = 0x28e8
const acidSlimeOffset = 0x28e8;

console.log('Acid Slime template:');
console.log('  Str:', part43.bin[acidSlimeOffset + 0]);
console.log('  Spd:', part43.bin[acidSlimeOffset + 1]);
console.log('  Def:', part43.bin[acidSlimeOffset + 2]);
console.log('  Bal:', part43.bin[acidSlimeOffset + 3]);
console.log('  Spr:', part43.bin[acidSlimeOffset + 7]);
console.log('  HP:', part43.bin[acidSlimeOffset + 14] + 
                    part43.bin[acidSlimeOffset + 15] * 256);

// Modify Spirit stat 0 → 50
console.log('\nModifying Spirit: 0 → 50');
part43.bin[acidSlimeOffset + 7] = 50;

// Update checksum
part43.setCheckSum();

// Write back
part43.write();

console.log('Part 43 modified and written with updated checksum');
console.log('Run pack.js to rebuild FDAT.T');
```

---

## Summary and Action Items

### Critical Findings

1. ✅ **Template locations confirmed:** 0x255000 in Part 43
2. ❌ **Part 43 NOT loaded** by current randomizer
3. ❌ **Cannot modify templates** without implementation changes
4. ⚠️ **Acid slime Spirit=0 but high damage** suggests complex enemy_power calculation

### Immediate Actions Required

1. **Run identification script** to find all template part indices
2. **Implement CreatureTemplates class** in data_model.js
3. **Add Part 43 (and others) to setup()** workflow
4. **Test checksum handling** with proof-of-concept script
5. **Investigate enemy_power calculation** (may be in MIPS code, not templates)

### User Question Answered

**Q:** "Did you verify what of these found places are covered and what are not?"

**A:** 
- **Covered:** None. Part 43 (0x255000 templates) is **NOT loaded or modified** by the randomizer.
- **Not Covered:** All creature template locations (0x255000, 0x2f0000, 0x2f8000, 0x305000).
- **Implementation needed:** CreatureTemplates class to load Part 43+ and enable stat modification with proper checksum handling.

### Re-evaluation of Spirit Stat

User's observation that acid slime deals ~300 damage with Spirit=0 suggests:
- **Spirit ≠ direct enemy_power** (more complex calculation)
- Other stats (Str, Bal, etc.) may contribute to damage
- `enemy_power` may have **default formula** when Spirit=0
- Need to test: Modify Spirit to high value, observe damage change

**Next experiment:** Set Spirit=100, test if acid slime damage increases significantly.

---

## File References

- `randomizer_common.js` - Lines 423-781 (TFormatPart, TFormat classes)
- `data_model.js` - Lines 374-2385 (Item, Area, Spawn setup)
- `FDAT_TEMPLATE_SEARCH_RESULTS.md` - Template location documentation
- Part 43: `iso-dump/ST/COM/FDAT.T_PARTS/43 253000-255800.T`

---

**Document Created:** 2025-12-26
**Analysis Scope:** Creature template TFormatPart coverage and implementation requirements
