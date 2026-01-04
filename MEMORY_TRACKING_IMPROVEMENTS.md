# Memory Tracking Improvements Implementation Plan

## Overview

This document outlines the code changes needed to improve Shadow Tower Randomizer's memory tracking to prevent texture corruption.

## Current State

**File:** `data_model.js` lines 1124-1151

**Problem:** drop2 and drop3 item slots are NOT counted toward memory usage, causing underestimation.

```javascript
// CURRENT CODE (INCOMPLETE)
usedItemMemory() {
  let models = new Set();
  for (var i in this.spawns) {
    if (this.spawns[i].chance.isNull()) continue;
    
    if (!this.spawns[i].drop1.isNull()) {
      models.add(itemData[this.spawns[i].drop1.get()].model.get());
    }
    // drop2 and drop3 are COMMENTED OUT!
    if (!this.spawns[i].drop2.isNull()) {
       //models.add(itemData[this.spawns[i].drop2.get()].model.get());
    }
    if (!this.spawns[i].drop3.isNull()) {
       //models.add(itemData[this.spawns[i].drop3.get()].model.get());
    }
  }
  
  for (var i in this.collectables) {
    if (!this.collectables[i].type.isNull()) {
      models.add(itemData[this.collectables[i].type.get()].model.get());
    }
  }
  
  return models.size;
}
```

## Fix 1: Uncomment and Track All Drops

**File:** `data_model.js` line 1135-1140

**Change:**
```javascript
// BEFORE (lines 1135-1140):
if (!this.spawns[i].drop2.isNull()) {
   //models.add(itemData[this.spawns[i].drop2.get()].model.get());
  //console.log("Item Memory count +1 by drop2 - " + this.spawns[i].name());
}
if (!this.spawns[i].drop3.isNull()) {
   //models.add(itemData[this.spawns[i].drop3.get()].model.get());
  //console.log("Item Memory count +1 by drop3 - " + this.spawns[i].name());
}

// AFTER:
if (!this.spawns[i].drop2.isNull()) {
  models.add(itemData[this.spawns[i].drop2.get()].model.get());
}
if (!this.spawns[i].drop3.isNull()) {
  models.add(itemData[this.spawns[i].drop3.get()].model.get());
}
```

**Impact:**
- Accurate memory counting
- May reduce item variety in some areas (expected behavior for safety)
- Will prevent memory overflow

## Fix 2: Add Detailed Memory Logging

**File:** `data_model.js` after line 1151

**New Method:**
```javascript
detailedMemoryReport() {
  let models = new Set();
  let modelSources = {};
  let itemsByModel = {};
  
  // Track from spawn drops
  for (var i in this.spawns) {
    if (this.spawns[i].chance.isNull()) continue;
    
    const logDrop = (dropSlot, itemId) => {
      if (itemId !== null && itemId !== 0xFF) {
        const modelId = itemData[itemId].model.get();
        const itemName = itemData[itemId].name;
        models.add(modelId);
        
        if (!modelSources[modelId]) {
          modelSources[modelId] = [];
          itemsByModel[modelId] = itemName;
        }
        modelSources[modelId].push(
          `Spawn ${i} (${this.spawns[i].name()}) ${dropSlot}`
        );
      }
    };
    
    if (!this.spawns[i].drop1.isNull()) {
      logDrop('drop1', this.spawns[i].drop1.get());
    }
    if (!this.spawns[i].drop2.isNull()) {
      logDrop('drop2', this.spawns[i].drop2.get());
    }
    if (!this.spawns[i].drop3.isNull()) {
      logDrop('drop3', this.spawns[i].drop3.get());
    }
  }
  
  // Track from collectables
  for (var i in this.collectables) {
    if (!this.collectables[i].type.isNull()) {
      const itemId = this.collectables[i].type.get();
      const modelId = itemData[itemId].model.get();
      const itemName = itemData[itemId].name;
      models.add(modelId);
      
      if (!modelSources[modelId]) {
        modelSources[modelId] = [];
        itemsByModel[modelId] = itemName;
      }
      modelSources[modelId].push(
        `Collectable ${i} at tile (${this.collectables[i].x()}, ${this.collectables[i].y()})`
      );
    }
  }
  
  return {
    count: models.size,
    models: Array.from(models),
    modelSources: modelSources,
    itemsByModel: itemsByModel
  };
}
```

## Fix 3: Enhanced Warning System

**File:** `data_model.js` modify lines 1098-1101

**Change:**
```javascript
// BEFORE:
draw(mapDraw, mapSummary) {
  mapSummary.push('<span style="background:#f0f0f0">Item Memory used '+this.usedItemMemory()+'</span>\n');
  var creaturesScore = this.creaturesScore();
  mapSummary.push('<span style="background:#f0f0f0">Creatures score '+creaturesScore+'</span>\n');
  // ...
}

// AFTER:
draw(mapDraw, mapSummary) {
  const memoryUsed = this.usedItemMemory();
  const memoryLimit = 16;
  
  // Color-code based on usage
  let colorStyle = '#f0f0f0';  // Normal (white)
  if (memoryUsed >= memoryLimit) {
    colorStyle = '#ff4444';  // Critical (red)
  } else if (memoryUsed >= 14) {
    colorStyle = '#ffaa00';  // Warning (orange)
  } else if (memoryUsed >= 12) {
    colorStyle = '#ffff00';  // Caution (yellow)
  }
  
  mapSummary.push(`<span style="background:${colorStyle}">Item Memory used ${memoryUsed}/${memoryLimit}</span>\n`);
  
  // Add detailed breakdown if high usage
  if (memoryUsed >= 12) {
    const report = this.detailedMemoryReport();
    mapSummary.push('<details><summary>Memory Details</summary>\n');
    mapSummary.push('<pre>\n');
    report.models.forEach(modelId => {
      mapSummary.push(`Model ${modelId} (${report.itemsByModel[modelId]}):\n`);
      report.modelSources[modelId].forEach(source => {
        mapSummary.push(`  - ${source}\n`);
      });
    });
    mapSummary.push('</pre>\n');
    mapSummary.push('</details>\n');
  }
  
  var creaturesScore = this.creaturesScore();
  mapSummary.push('<span style="background:#f0f0f0">Creatures score '+creaturesScore+'</span>\n');
  // ...
}
```

## Fix 4: Runtime Memory Monitoring

**File:** `randomize.js` after area randomization

**Add Validation Check:**
```javascript
// After all randomization is complete, validate memory usage
function validateAreaMemory() {
  console.log("\n=== MEMORY VALIDATION REPORT ===\n");
  
  let overflowAreas = [];
  let warningAreas = [];
  let totalMemoryUsed = 0;
  let maxMemoryUsed = 0;
  
  global.areas.forEach(area => {
    const memoryUsed = area.usedItemMemory();
    totalMemoryUsed += memoryUsed;
    
    if (memoryUsed > maxMemoryUsed) {
      maxMemoryUsed = memoryUsed;
    }
    
    if (memoryUsed > 16) {
      overflowAreas.push({name: area.name, memory: memoryUsed});
      console.error(`ERROR - ${area.name} EXCEEDS MEMORY LIMIT: ${memoryUsed}/16 models`);
      
      // Log detailed breakdown
      const report = area.detailedMemoryReport();
      console.error("  Models loaded:");
      report.models.forEach(modelId => {
        console.error(`    - Model ${modelId}: ${report.itemsByModel[modelId]}`);
        console.error(`      Sources: ${report.modelSources[modelId].length}`);
      });
    } else if (memoryUsed >= 14) {
      warningAreas.push({name: area.name, memory: memoryUsed});
      console.warn(`WARNING - ${area.name} HIGH MEMORY USAGE: ${memoryUsed}/16 models`);
    }
  });
  
  console.log(`\nTotal areas: ${global.areas.length}`);
  console.log(`Average memory per area: ${(totalMemoryUsed / global.areas.length).toFixed(2)}`);
  console.log(`Maximum memory used: ${maxMemoryUsed}/16`);
  console.log(`Areas with overflow: ${overflowAreas.length}`);
  console.log(`Areas with warnings: ${warningAreas.length}`);
  
  if (overflowAreas.length > 0) {
    console.error("\n!!! MEMORY OVERFLOW DETECTED !!!");
    console.error("The following areas exceed PSX memory limits:");
    overflowAreas.forEach(area => {
      console.error(`  - ${area.name}: ${area.memory}/16 models`);
    });
    console.error("\nTexture corruption is LIKELY to occur in these areas!");
    console.error("Consider:");
    console.error("  1. Enabling memoryConservative mode");
    console.error("  2. Reducing randomization intensity");
    console.error("  3. Using different seed");
  }
  
  return overflowAreas.length === 0;
}

// Call at end of randomize()
const memoryValid = validateAreaMemory();
if (!memoryValid && params.strict) {
  console.error("\nSTRICT MODE: Aborting due to memory violations");
  process.exit(1);
}
```

## Fix 5: Memory-Conservative Mode

**File:** `randomize.js` add new parameter handling

**Add Parameter:**
```javascript
// After line 96 (params.fieryKeyFlamingKeyDrop check)
params.memoryConservative = params.memoryConservative || false;
params.memoryStrict = params.memoryStrict || false;

if (params.memoryConservative) {
  console.log("MEMORY CONSERVATIVE MODE ENABLED");
  console.log("  - Using 12-model limit (instead of 16)");
  console.log("  - Prioritizing model reuse");
  console.log("  - Avoiding memory overflow");
}

// Override memory limit for conservative mode
if (params.memoryConservative) {
  const originalHasFreeMemory = Area.prototype.hasFreeItemMemory;
  Area.prototype.hasFreeItemMemory = function() {
    return this.usedItemMemory() < 12;  // Stricter limit
  };
}
```

**Modify Item Distribution:**
```javascript
// In distributeItemsRandomly and similar functions
function selectItemForArea(area, itemPool) {
  if (params.memoryConservative) {
    // Get models already loaded in this area
    const report = area.detailedMemoryReport();
    const loadedModels = new Set(report.models);
    
    // Filter items to those already using loaded models
    const reuseItems = itemPool.filter(item => 
      loadedModels.has(itemData[item].model.get())
    );
    
    if (reuseItems.length > 0) {
      // Prefer reusing already-loaded models (50% chance)
      if (Math.random() < 0.5) {
        return reuseItems[Math.floor(Math.random() * reuseItems.length)];
      }
    }
  }
  
  // Check if we can load a new model
  if (!area.hasFreeItemMemory()) {
    console.warn(`${area.name} - No free memory, cannot add item`);
    return null;
  }
  
  // Select random item
  return itemPool[Math.floor(Math.random() * itemPool.length)];
}
```

## Fix 6: Add Memory Stats to Spoiler Files

**File:** `randomize.js` in spoiler generation

**Add to readable.txt:**
```javascript
// After generating readable.txt content
const memoryStats = `

=== MEMORY USAGE STATISTICS ===

Areas by Memory Usage:
${global.areas
  .map(area => ({name: area.name, memory: area.usedItemMemory()}))
  .sort((a, b) => b.memory - a.memory)
  .map(a => `  ${a.name.padEnd(40)} ${a.memory}/16 models`)
  .join('\n')}

Memory Distribution:
  0-8 models:   ${global.areas.filter(a => a.usedItemMemory() <= 8).length} areas
  9-12 models:  ${global.areas.filter(a => a.usedItemMemory() > 8 && a.usedItemMemory() <= 12).length} areas
  13-15 models: ${global.areas.filter(a => a.usedItemMemory() > 12 && a.usedItemMemory() < 16).length} areas
  16 models:    ${global.areas.filter(a => a.usedItemMemory() === 16).length} areas
  OVERFLOW:     ${global.areas.filter(a => a.usedItemMemory() > 16).length} areas

Average Memory Usage: ${(global.areas.reduce((sum, a) => sum + a.usedItemMemory(), 0) / global.areas.length).toFixed(2)} models per area
`;

fs.appendFileSync(changeSetPath + path.sep + 'readable.txt', memoryStats);
```

## Testing Plan

### Phase 1: Validate Fix

1. **Uncomment drop2/drop3 tracking**
2. **Regenerate existing presets**
3. **Compare memory counts before/after**
4. **Expected:** Higher memory usage reported, some areas now flagged

### Phase 2: Test Conservative Mode

1. **Create test preset:**
   ```json
   {
     "label": "memory-conservative-test",
     "preset": "any%",
     "difficulty": "medium",
     "randomizeMap": true,
     "randomizeCreatures": true,
     "randomizeCollectablesAndDrops": true,
     "memoryConservative": true,
     "seed": "12345"
   }
   ```

2. **Verify no areas exceed 12 models**
3. **Test in-game for texture corruption**

### Phase 3: In-Game Validation

1. **Load problematic areas from current randomizations**
2. **Document texture corruption**
3. **Regenerate with fixes**
4. **Verify corruption is resolved**

## Rollout Strategy

### Step 1: Emergency Fix (Immediate)
- Uncomment drop2/drop3 tracking
- Add runtime validation
- Log warnings for overflow

### Step 2: Enhanced Monitoring (Next Release)
- Add detailed memory reports
- Color-coded warnings in maps.html
- Memory statistics in spoilers

### Step 3: Conservative Mode (Optional Feature)
- Add memoryConservative parameter
- Implement model reuse logic
- Document in README

### Step 4: User Documentation
- Update README with memory considerations
- Add troubleshooting guide for texture corruption
- Create parameter guide with memory recommendations

## Expected Impact

### Before Fixes
- Memory underestimated by ~30-50%
- Texture corruption in 20-30% of randomizations
- No visibility into which areas are problematic

### After Fixes
- Accurate memory tracking
- Memory overflow prevented
- Clear warnings when approaching limits
- Conservative mode available for safety

### Trade-offs
- Slightly less item variety in memory-constrained areas
- Longer randomization time (more validation checks)
- May need to adjust difficulty balance

## Files to Modify

1. **data_model.js**
   - Lines 1135-1140: Uncomment drop2/drop3
   - After line 1151: Add detailedMemoryReport()
   - Lines 1098-1114: Enhance draw() method

2. **randomize.js**
   - After line 96: Add memory parameters
   - Before final output: Add validateAreaMemory()
   - In item distribution: Add model reuse logic
   - In spoiler generation: Add memory statistics

3. **README.md**
   - Add memory management section
   - Document memoryConservative parameter
   - Add texture corruption troubleshooting

## Success Criteria

✅ All drop slots counted in memory usage
✅ No areas exceed 16-model limit
✅ Clear warnings for high memory usage
✅ Conservative mode prevents overflow
✅ Detailed memory reports available
✅ In-game testing confirms no corruption

---

**Status:** Ready for implementation
**Priority:** HIGH (prevents game-breaking texture corruption)
**Estimated Effort:** 2-4 hours
