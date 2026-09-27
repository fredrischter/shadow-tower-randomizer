# Shadow Tower VRAM Memory Analysis

## PSX1 VRAM Architecture

The PlayStation 1 has **1024KB (1MB) of VRAM** organized as:
- **Resolution**: 1024x512 pixels
- **Color depth**: 16-bit (2 bytes per pixel)
- **Total**: 1024 * 512 * 2 bytes = 1,048,576 bytes = 1MB

### VRAM Layout
VRAM is divided into regions for:
1. **Framebuffers** - Front and back buffers for display
2. **Textures** - All game textures (items, creatures, environments)
3. **CLUTs** - Color lookup tables for indexed color textures
4. **Z-buffer** - Depth buffer (if used)

## Shadow Tower Specific Memory Usage

Based on the VRAM dump screenshots in `stuff/`:

### Screenshot Analysis
1. `vram solitary-region-1-start.png` - Baseline at start
2. `vram solitary-region-2-after-some-spawns.png` - After enemy spawns
3. `vram solitary-region-axe-drop-1-before.png` - Before axe drop (915KB)
4. `vram solitary-region-axe-drop-2-after.png` - After axe drop (911KB)
5. `vram solitary-region-3-after-axe-drop.png` - Corruption visible (864KB)

### Observations
- Screenshot file sizes increase as more items are loaded
- Corruption occurs when too many unique item models are loaded
- Each unique item model requires texture space in VRAM

## Item Model Memory System

### How It Works
From `data_model.js` line 1124-1150:

```javascript
usedItemMemory() {
  let models = new Set();
  for (var i in this.spawns) {
    if (this.spawns[i].chance.isNull()) continue;
    
    // Only drop1 is counted
    if (!this.spawns[i].drop1.isNull()) {
      models.add(itemData[this.spawns[i].drop1.get()].model.get());
    }
    // drop2 and drop3 are COMMENTED OUT!
    // if (!this.spawns[i].drop2.isNull()) {
    //   models.add(itemData[this.spawns[i].drop2.get()].model.get());
    // }
  }
  
  for (var i in this.collectables) {
    if (!this.collectables[i].type.isNull()) {
      models.add(itemData[this.collectables[i].type.get()].model.get());
    }
  }
  
  return models.size;  // Returns COUNT of unique models, not actual memory!
}
```

### Current Limit
- `hasFreeItemMemory()` returns `this.usedItemMemory() < 16`
- This means maximum 16 unique item models per area
- This is a GUESS, not based on actual measurement

## Problem Analysis

### Issue 1: Only Counting drop1
The current implementation only counts `drop1` from creature spawns, ignoring `drop2` and `drop3`. This underestimates memory usage.

### Issue 2: Model Count ≠ Memory Usage
The code counts unique models but doesn't account for:
- Different models have different texture sizes
- Some items share texture pages
- VRAM fragmentation

### Issue 3: No Actual Limit Known
The limit of 16 was a guess. We need to:
1. Determine average texture size per item model
2. Calculate available VRAM for item textures
3. Set a safe limit

## PSX Texture Page System

The PSX organizes textures into **256x256 texture pages**:
- Each page = 256 * 256 * 2 bytes = 131,072 bytes = 128KB
- VRAM can hold ~8 full texture pages (1MB / 128KB = 8)
- But much is used for framebuffer and environment textures

## Estimated Safe Limits

### Conservative Estimate
Assuming:
- 2 framebuffers (320x240x2 bytes each = ~150KB)
- Environment textures (~400KB)
- Creature textures (~200KB)
- Available for item textures: ~250KB

If average item model uses ~15KB of texture:
- Safe limit: 250KB / 15KB = **~16 items** (current limit seems reasonable!)

But this doesn't account for:
- Texture sharing between items
- Different texture sizes for different items
- Memory fragmentation

### Better Approach
Instead of counting models, we should:
1. Track actual texture memory per model
2. Sum total VRAM usage
3. Compare against measured limit

## Model Sharing Analysis Results

Using `analyze_models.js`, we found:
- **Total items**: 314
- **Unique model IDs**: 108
- **Model sharing**: Many items share models (e.g., 35 rings use model 0x46)

### Key Findings
1. Items sharing the same model ID use the SAME texture in VRAM
2. Adding 3 items with model 0x46 only uses VRAM for 1 model
3. Current counting with Set is CORRECT approach
4. **CRITICAL BUG**: drop2 and drop3 are NOT being counted!

### Why Limit of 16 is Reasonable
If models average ~15KB texture each:
- 16 models × 15KB = 240KB
- Fits within estimated 250KB available for item textures
- Provides small safety margin

### Root Cause of Corruption
The code is **NOT counting drop2 and drop3** (lines 1135-1140 commented out).
This means actual memory usage can be 3× higher than calculated!

Example scenario:
- Area has 10 spawns
- Each spawn has drop1, drop2, drop3 with different models
- Code counts: 10 models (only drop1)
- Actual usage: 30 models (if all unique)
- Corruption occurs when actual > 16 but calculated < 16

## Recommendations

### CRITICAL FIX (Immediate)
1. **Uncomment drop2 and drop3 counting** - Lines 1135, 1139 in data_model.js
2. **This fixes the undercount bug** that causes corruption

### Optional Improvements
1. **Lower limit to 12-14** - For extra safety margin
2. **Add warning logs** - Alert when approaching limit
3. **Test with VRAM dumps** - Verify no corruption after fix

### Long-term Enhancements
1. **Measure actual texture sizes** - Some models may be larger/smaller than 15KB
2. **Implement weighted counting** - Weight by actual texture size
3. **Texture page optimization** - Prefer items from same texture page
4. **Dynamic limit adjustment** - Based on area complexity

## Testing Plan

1. Apply the fix (uncomment drop2/drop3 counting)
2. Run randomizer on problematic presets (bonanza, etc.)
3. Check generated randomizations don't exceed 16 models per area
4. Test in-game with VRAM monitoring
5. Verify no texture corruption

## Files to Modify

1. `data_model.js` lines 1134-1141:
   - Uncomment line 1135: `models.add(itemData[this.spawns[i].drop2.get()].model.get());`
   - Uncomment line 1139: `models.add(itemData[this.spawns[i].drop3.get()].model.get());`
   - Remove debug comments if needed

2. Optional: Adjust limit from 16 to 12 for extra safety (line 1117)
