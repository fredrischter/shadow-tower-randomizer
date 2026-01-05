# Spawn Groups (mutexGroup) - Technical Documentation

## Overview

The `mutexGroup` field (also called "spawn group") is a critical component of Shadow Tower's creature spawn system. It controls how many creatures from a spawn pool can exist simultaneously in memory, acting as both a spawn limiter and memory management mechanism.

## Binary Structure

**Location:** Offset `0x0a` in the spawn entry structure  
**Type:** `UInt8` (single byte, values 0x00-0xFF)  
**Size:** 1 byte

### Complete Spawn Entry Structure (24 bytes / 0x18)
```
Offset | Type   | Field         | Description
-------|--------|---------------|------------------------------------------
0x00   | UInt8  | chance        | Spawn rate percentage (0-100)
0x01   | UInt8  | type          | Creature type ID
0x02   | UInt16 | tileId        | Tile/location ID in area
0x04   | UInt16 | drop1         | First item drop ID
0x06   | UInt16 | drop2         | Second item drop ID
0x08   | UInt16 | drop3         | Third item drop ID
0x0a   | UInt8  | mutexGroup    | *** SPAWN GROUP/MUTEX VALUE ***
0x0b   | UInt8  | drop1Chance   | First drop percentage
0x0c   | UInt8  | drop2Chance   | Second drop percentage  
0x0d   | UInt8  | drop3Chance   | Third drop percentage
0x0e   | ...    | (additional)  | Position, rotation, etc.
```

## Known Values and Behaviors

From reverse engineering (`old_randomize_notes.js`):

| Value | Binary     | Decimal | Behavior                        | Notes                    |
|-------|------------|---------|--------------------------------|--------------------------|
| 0x0e  | 00001110   | 14      | 6 creatures at once            | Most permissive          |
| 0x1c  | 00011100   | 28      | 3 creatures at once            |                          |
| 0x1d  | 00011101   | 29      | 3 creatures at once            |                          |
| 0x28  | 00101000   | 40      | 3 creatures at once            |                          |
| 0x7f  | 01111110   | 127     | 1 creature at once             |                          |
| 0x5a  | 01011010   | 90      | 1 at once, limit 3 chainspawn  | King Hopper original bug |
| 0x14  | 00010100   | 20      | Fix value for King Hopper      | Applied by randomizer    |

## Purpose and Mechanics

### 1. Spawn Pooling
The mutexGroup acts as a pool identifier. Creatures with the same mutexGroup value:
- Share a spawn slot/instance pool
- Are limited to a certain number of simultaneous instances
- Prevent spawn flooding and memory exhaustion

### 2. Memory Management
Shadow Tower has strict memory limits per area:
- **16 unique item models** can be loaded per area (tracked by `usedItemMemory()`)
- Each creature spawn potentially carries 3 item drops
- mutexGroup helps prevent exceeding memory limits by controlling creature count

### 3. Gameplay Balance
- Prevents overwhelming the player with too many enemies at once
- Controls difficulty through spawn density
- Manages AI processing load

## Relationship to Memory System

### Item Memory Tracking
```javascript
// From data_model.js
usedItemMemory() {
  let models = new Set();
  for (var i in this.spawns) {
    if (!this.spawns[i].chance.isNull()) {
      if (!this.spawns[i].drop1.isNull()) {
        models.add(itemData[this.spawns[i].drop1.get()].model.get());
      }
      // ... drop2, drop3
    }
  }
  return models.size; // Max 16
}
```

### Memory Checks
```javascript
hasFreeItemMemory() {
  return this.usedItemMemory() < 16;
}

hasMemoryCrime() {
  return this.usedItemMemory() > 16;
}
```

When randomizing spawns, the code checks memory before adding drops:
```javascript
if (!area.hasFreeItemMemory()) {
  console.log("WARNING - No free memory, halting drop placement");
  return;
}
```

## The King Hopper Bug

### Original Problem
- King Hopper creatures had `mutexGroup = 0x5a` (90)
- This value caused "1 at once, limit 3 chainspawn" behavior
- Led to spawn failures and game freezes

### Fix Applied
```javascript
// From randomize.js line 432-437
function presetKingHopperFixforEachCreatureSpawn(spawn, area, index) {
  if (spawn.name().includes("king_hopper")) {
    console.log("Setting spawn change to 100% and fixing mutex group");
    spawn.chance.set(100);
    spawn.mutexGroup.set(14); // 0x0e - allows 6 at once
  }
}
```

## Bit Pattern Analysis

Looking at the binary patterns, there may be encoding schemes:

```
0x0e = 00001110 → 6 spawns  (3 bits set)
0x1c = 00011100 → 3 spawns  (3 bits set) 
0x1d = 00011101 → 3 spawns  (4 bits set)
0x28 = 00101000 → 3 spawns  (2 bits set)
0x7f = 01111110 → 1 spawn   (6 bits set)
0x5a = 01011010 → 1+limit3  (4 bits set)
```

**Hypothesis:** The actual spawn limit may not directly correlate to bit count or value magnitude. More investigation needed into game engine code.

## Unknowns and Open Questions

### Critical Questions
1. **Exact encoding:** How does the byte value map to spawn limits?
2. **Group sharing:** Do spawns with same mutexGroup share memory pools?
3. **Valid range:** What values between 0x00-0xFF are valid?
4. **Dynamic behavior:** Does spawn behavior change based on area or game state?
5. **Randomization safety:** Should we preserve mutexGroup when swapping creatures?

### Memory Interaction
1. How does mutexGroup limit interact with the 16-item-model limit?
2. Can we calculate optimal mutexGroup based on creature drops?
3. Should randomization adjust mutexGroup based on new drop assignments?

### Performance Impact
1. Does mutexGroup affect frame rate or AI update frequency?
2. Are there performance cliffs at certain spawn counts?

## Recommendations for Randomization

### Current Practice
The randomizer currently:
1. Preserves mutexGroup when copying spawn data (`spawn.set(source)`)
2. Only modifies mutexGroup for King Hopper fix
3. Does NOT validate mutexGroup when randomizing creatures

### Proposed Improvements

#### 1. Add Validation
```javascript
function validateSpawnGroup(spawn, area) {
  const group = spawn.mutexGroup.get();
  
  // Warn about unknown values
  const knownGroups = [0x0e, 0x1c, 0x1d, 0x28, 0x7f, 0x5a, 0x14];
  if (!knownGroups.includes(group) && !spawn.mutexGroup.isNull()) {
    console.log(`WARNING: Unknown mutexGroup 0x${group.toString(16)} for ${spawn.name()} in ${area.name}`);
  }
  
  // Prevent problematic value
  if (group === 0x5a && !spawn.name().includes("king_hopper")) {
    console.log(`WARNING: Spawn ${spawn.name()} has king_hopper bug value 0x5a`);
  }
}
```

#### 2. Smart Group Assignment
When randomizing creatures, consider:
```javascript
function assignOptimalSpawnGroup(spawn, sourceCreature) {
  // Preserve group from source creature
  spawn.mutexGroup.set(sourceCreature.mutexGroup.get());
  
  // Apply known fixes
  if (spawn.mutexGroup.get() === 0x5a) {
    spawn.mutexGroup.set(0x14); // Use King Hopper fix value
  }
}
```

#### 3. Memory-Aware Group Selection
```javascript
function adjustGroupForMemory(area) {
  if (area.usedItemMemory() > 14) {
    // Area is near memory limit, use restrictive spawn groups
    area.spawns.forEach(spawn => {
      if (!spawn.mutexGroup.isNull() && spawn.mutexGroup.get() === 0x0e) {
        spawn.mutexGroup.set(0x1c); // 6→3 spawns to reduce memory pressure
      }
    });
  }
}
```

## Code Locations

### Definition
- **File:** `data_model.js`
- **Line:** 2588
- **Code:** `this.mutexGroup = new UInt8(this.tfile.bin, this.offset_in_file + 0x0a);`

### Display
- **File:** `data_model.js`
- **Lines:** 2685 (readable), 2758 (JSON)
- Shows in output as `0x{value}` or `"group": {value}`

### Modification
- **File:** `randomize.js`
- **Line:** 436
- **Function:** `presetKingHopperFixforEachCreatureSpawn()`

### Preservation
- **File:** `data_model.js`
- **Line:** 2767
- **Function:** `spawn.set(source)` - copies entire spawn structure including mutexGroup

## Testing and Analysis

### Extract Spawn Groups from Game Data
```javascript
// Analysis script to map all spawn group values
const areas = Object.values(global).filter(a => a.spawns);
const groupStats = {};

areas.forEach(area => {
  area.spawns.forEach(spawn => {
    if (!spawn.chance.isNull()) {
      const group = spawn.mutexGroup.get();
      if (!groupStats[group]) {
        groupStats[group] = { count: 0, creatures: new Set() };
      }
      groupStats[group].count++;
      groupStats[group].creatures.add(spawn.name());
    }
  });
});

console.log('Spawn Group Distribution:', groupStats);
```

### Verify Memory Impact
```javascript
// Check correlation between mutexGroup and memory usage
areas.forEach(area => {
  const memory = area.usedItemMemory();
  const groups = area.spawns.map(s => s.mutexGroup.get());
  const uniqueGroups = [...new Set(groups)].filter(g => g !== 0xff);
  
  console.log(`${area.name}: ${memory}/16 memory, ${uniqueGroups.length} unique groups`);
});
```

## Conclusion

The `mutexGroup` field is a crucial but poorly understood component of Shadow Tower's spawn system. While we know it controls simultaneous spawn limits and relates to memory management, the exact mechanics remain unclear.

**Priority research needs:**
1. Decompile game engine spawn logic to understand exact behavior
2. Test different mutexGroup values in-game to map limits empirically  
3. Document all original mutexGroup values from unmodified game data
4. Develop safe randomization strategies that respect spawn constraints

**Current status:**
- ✅ Field identified and documented
- ✅ Known values cataloged
- ✅ King Hopper fix implemented
- ⚠️ Exact behavior unknown
- ❌ No validation during randomization
- ❌ No optimization for memory/spawn interaction

This documentation should be updated as new information is discovered through testing and reverse engineering.
