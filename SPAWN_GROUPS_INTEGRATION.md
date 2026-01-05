# Spawn Group Utilities - Integration Guide

This guide shows how to integrate spawn group validation and utilities into the randomization process.

## Quick Start

```javascript
// At the top of randomize.js
const spawnUtils = require('./spawn_group_utils.js');

// When processing each area
function processArea(area) {
  // 1. Validate existing spawn groups and collect warnings
  const warnings = [];
  area.spawns.forEach(spawn => {
    if (!spawn.chance.isNull()) {
      spawnUtils.validateSpawnGroup(spawn, area, warnings);
    }
  });
  
  // 2. Fix known problematic values
  const fixCount = spawnUtils.fixProblematicSpawnGroups(area, true);
  if (fixCount > 0) {
    console.log(`Fixed ${fixCount} spawn groups in ${area.name}`);
  }
  
  // 3. Adjust for memory pressure
  const memoryUsage = area.usedItemMemory();
  if (memoryUsage > 12) {
    spawnUtils.adjustSpawnGroupsForMemory(area, true);
  }
  
  // 4. Log area statistics
  const stats = spawnUtils.getAreaSpawnGroupStats(area);
  if (stats.unknownGroups.length > 0 || stats.unsafeGroups.length > 0) {
    console.log(`Area ${area.name}: ${stats.activeSpawns} spawns, ${stats.unknownGroups.length} unknown, ${stats.unsafeGroups.length} unsafe`);
  }
}
```

## Integration Points

### 1. After Loading Areas (Early Validation)

```javascript
// In randomize.js, after areas are loaded from game data
const allWarnings = [];

areas.forEach(area => {
  area.spawns.forEach(spawn => {
    if (!spawn.chance.isNull()) {
      spawnUtils.validateSpawnGroup(spawn, area, allWarnings);
    }
  });
});

if (allWarnings.length > 0) {
  console.log(`\nFound ${allWarnings.length} spawn group warnings:`);
  allWarnings.slice(0, 10).forEach(w => {
    console.log(`  ${w.severity}: ${w.message}`);
  });
}
```

### 2. During Creature Randomization

```javascript
// When copying/swapping creatures
function randomizeCreature(sourceSpawn, destSpawn, area) {
  // Copy creature data
  destSpawn.set(sourceSpawn);
  
  // Preserve spawn group with validation
  spawnUtils.preserveSpawnGroup(sourceSpawn, destSpawn);
  
  // Or use optimal spawn group based on memory
  const memoryUsage = area.usedItemMemory();
  const optimalGroup = spawnUtils.getOptimalSpawnGroup(sourceSpawn, area, memoryUsage);
  destSpawn.mutexGroup.set(optimalGroup);
}
```

### 3. Before Writing Changeset (Final Cleanup)

```javascript
// Apply fixes to all areas before generating changeset
let totalFixes = 0;

areas.forEach(area => {
  // Fix problematic values
  totalFixes += spawnUtils.fixProblematicSpawnGroups(area, false);
  
  // Adjust for memory
  if (area.usedItemMemory() > 12) {
    totalFixes += spawnUtils.adjustSpawnGroupsForMemory(area, false);
  }
});

console.log(`Applied ${totalFixes} spawn group fixes/adjustments`);
```

### 4. In Spoiler Generation

```javascript
// Add spawn group statistics to readable.txt
function generateAreaSpoilers(area) {
  const stats = spawnUtils.getAreaSpawnGroupStats(area);
  
  let summary = `\nAREA: ${area.name}\n`;
  summary += `  Spawns: ${stats.activeSpawns}/${stats.totalSpawns}\n`;
  summary += `  Memory: ${area.usedItemMemory()}/16\n`;
  summary += `  Spawn Groups: ${stats.groups.size} unique\n`;
  
  if (stats.groups.size > 0) {
    summary += `  Distribution:\n`;
    Array.from(stats.groups.entries()).forEach(([group, count]) => {
      const desc = spawnUtils.getSpawnGroupDescription(group);
      summary += `    0x${group.toString(16)}: ${count} spawns (${desc})\n`;
    });
  }
  
  if (stats.unknownGroups.length > 0) {
    summary += `  ⚠ Unknown groups: ${stats.unknownGroups.length}\n`;
  }
  
  if (stats.unsafeGroups.length > 0) {
    summary += `  ⚠ Unsafe groups: ${stats.unsafeGroups.length}\n`;
  }
  
  return summary;
}
```

## Example: Enhanced King Hopper Fix

Replace the current King Hopper fix with:

```javascript
function presetKingHopperFixforEachCreatureSpawn(spawn, area, index) {
  if (spawn.name().includes("king_hopper")) {
    console.log("Setting spawn change to 100% and fixing mutex group, creature " + spawn.name());
    spawn.chance.set(100);
    
    // Use utility instead of hardcoded value
    const fixedGroup = 0x14; // Or: spawnUtils.getOptimalSpawnGroup(spawn, area, 0)
    spawn.mutexGroup.set(fixedGroup);
    
    // Validate the fix
    if (!spawnUtils.isSafeSpawnGroup(fixedGroup)) {
      console.log("WARNING: King Hopper fix applied unsafe spawn group!");
    }
  }
}
```

## Example: Memory-Aware Randomization

```javascript
function distributeItemDrops(area) {
  const memoryUsage = area.usedItemMemory();
  
  area.spawns.forEach(spawn => {
    if (spawn.chance.isNull()) return;
    
    // Check if we can add more drops
    if (memoryUsage >= 15) {
      console.log(`Skipping drops for ${spawn.name()} - memory near limit`);
      
      // Also restrict spawn group to reduce memory pressure
      const currentGroup = spawn.mutexGroup.get();
      if (currentGroup === 0x0e || currentGroup === 0x14) {
        spawn.mutexGroup.set(0x1c); // Reduce from 6 to 3 spawns
      }
      return;
    }
    
    // Assign drops normally
    // ... existing drop assignment logic ...
  });
}
```

## Testing Integration

Create a test configuration that validates spawn groups:

```javascript
// Add to test suite
function testSpawnGroups() {
  console.log("Testing spawn group validation...");
  
  const testCases = [
    { area: "test_area", creature: "test1", group: 0x0e, shouldPass: true },
    { area: "test_area", creature: "test2", group: 0x5a, shouldPass: false },
    { area: "test_area", creature: "king_hopper", group: 0x5a, shouldPass: true },
    { area: "test_area", creature: "test3", group: 0x99, shouldPass: false }
  ];
  
  testCases.forEach(test => {
    const mockSpawn = {
      mutexGroup: { get: () => test.group },
      name: () => test.creature
    };
    const mockArea = { name: test.area };
    const warnings = [];
    
    const result = spawnUtils.validateSpawnGroup(mockSpawn, mockArea, warnings);
    const passed = result === test.shouldPass;
    
    console.log(`  ${passed ? '✓' : '✗'} ${test.creature} with 0x${test.group.toString(16)}`);
  });
}
```

## Benefits of Integration

1. **Safety**: Automatically detects and fixes problematic spawn groups
2. **Memory awareness**: Adjusts spawn limits based on item memory pressure  
3. **Validation**: Catches issues before they cause in-game problems
4. **Documentation**: Generates detailed spawn group reports in spoilers
5. **Maintainability**: Centralized spawn group logic, easier to update

## Next Steps

1. Integrate validation into main randomization loop
2. Add spawn group statistics to spoiler files
3. Test with various presets to identify edge cases
4. Update documentation with findings
5. Consider adding spawn group parameter to presets
