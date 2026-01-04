# PSX Memory Debugging Guide for Shadow Tower Randomizer

## Overview

This guide helps you debug memory-related issues in Shadow Tower, particularly **texture corruption** caused by excessive memory usage during randomization.

**Problem:** Item textures become corrupted/glitched because the randomizer loads too many unique item models and textures in the same area, exceeding PlayStation 1 memory limits.

---

## Understanding PSX Memory Architecture

### PlayStation 1 Memory Layout

The PS1 has limited memory resources:

| Memory Type | Size | Purpose |
|------------|------|---------|
| **Main RAM** | 2 MB | Game code, data, variables |
| **VRAM** | 1 MB | Textures, framebuffer, display |
| **Sound RAM** | 512 KB | Audio samples |

**Key Constraint:** VRAM is shared between:
- Texture storage
- Display framebuffers (double-buffered)
- Sprite data
- Clut (Color Look-Up Tables) for textures

### Shadow Tower's Item Memory System

Shadow Tower implements a **per-area item memory budget**:

```javascript
// From data_model.js lines 1116-1151
hasFreeItemMemory() {
  return this.usedItemMemory() < 16;  // Maximum 16 unique item models per area
}

usedItemMemory() {
  let models = new Set();
  
  // Count unique models from creature drops
  for (var i in this.spawns) {
    if (!this.spawns[i].drop1.isNull()) {
      models.add(itemData[this.spawns[i].drop1.get()].model.get());
    }
  }
  
  // Count unique models from collectables
  for (var i in this.collectables) {
    if (!this.collectables[i].type.isNull()) {
      models.add(itemData[this.collectables[i].type.get()].model.get());
    }
  }
  
  return models.size;  // Number of unique item models in this area
}
```

**How it works:**
- Each area can have **maximum 16 unique item models**
- Item models include the 3D geometry AND texture data
- Multiple items can share the same model (e.g., different swords use same base mesh)
- The randomizer checks `hasFreeItemMemory()` before adding items
- If memory is full, it logs a warning and skips that item placement

**Current Limitation:**
- Only counts `drop1` (first creature drop slot)
- `drop2` and `drop3` are **not counted** (lines 1135-1140 are commented out)
- This can cause memory underestimation!

---

## Symptoms of Memory Issues

### Texture Corruption
- Items have wrong textures (showing random patterns, other items, or garbage)
- Textures appear scrambled, pixelated, or flickering
- Some items invisible or showing solid colors
- Texture degradation increases as you progress through randomized areas

### Performance Issues
- FPS drops when entering areas with many items
- Stuttering when items spawn or drop
- Crashes when picking up certain items

### VRAM Overflow
- Screen tearing or artifacts
- Display glitches in UI
- Missing textures replaced with black/white

---

## Debugging with DuckStation

**DuckStation** is the recommended emulator for debugging due to its excellent debugging tools.

### Step 1: Install and Setup

1. **Download DuckStation:**
   - https://github.com/stenzek/duckstation/releases
   - Get the latest stable release

2. **Load your randomized ISO:**
   ```
   File → Boot Fast → Select your .bin file
   ```

3. **Enable debugging features:**
   - Settings → Console Settings → Enable CPU Debugger: **ON**
   - Settings → Display → Show VRAM: **ON**

### Step 2: Monitor Memory Usage

#### Real-Time Memory View

1. **Open Memory Viewer:**
   ```
   Tools → Memory Scanner
   ```

2. **Useful memory addresses for Shadow Tower:**
   
   | Address Range | Purpose |
   |--------------|---------|
   | `0x80010000 - 0x801FFFFF` | Main RAM (game data) |
   | `0x80030000 - 0x80040000` | Code execution area |
   | `0x1F800000 - 0x1F8003FF` | Scratchpad (fast RAM) |

3. **Watch for item texture pointers:**
   ```
   Search Type: 4 Byte
   Value Type: Unsigned Integer
   Search for values in range 0x80000000 - 0x802FFFFF
   ```

#### Track VRAM Usage

1. **Open VRAM Viewer:**
   ```
   Tools → Show VRAM
   ```

2. **What to look for:**
   - **Top-left:** Texture pages (512x256 blocks)
   - **Corruption signs:** Random pixels, wrong colors, overlapping textures
   - **Overflow:** Textures bleeding into framebuffer area

3. **Take snapshots:**
   ```
   Right-click VRAM window → Save as PNG
   ```
   Save before/after entering problematic areas for comparison.

### Step 3: Set Breakpoints for Item Loading

1. **Open CPU Debugger:**
   ```
   Tools → CPU Debugger
   ```

2. **Find item loading code:**
   ```
   # Shadow Tower's item model loading function (approximate)
   Breakpoint Address: 0x80034000 - 0x80038000
   ```

3. **Set execution breakpoint:**
   ```
   Right-click in assembly view → Add Breakpoint
   Type: Execute
   ```

4. **Monitor when game loads items:**
   - Step through code (F10)
   - Watch registers for texture addresses
   - Check if loading multiple models in sequence

### Step 4: Inspect Item Textures in VRAM

#### Identify Texture Pages

Shadow Tower uses **TIM format** (PSX standard):
- Textures stored in 256-color palettes (8bpp)
- Each texture page is 256x256 pixels
- CLUT (palette) stored separately

#### Find Your Item's Texture

1. **Note the corrupted item's ID:**
   - Check `spoilers/readable.txt` for item names
   - Find corresponding model ID in `game_data.js`

2. **Search VRAM for that texture:**
   - VRAM Viewer shows all textures
   - Look for recognizable patterns (swords, armor, etc.)
   - Corrupted textures show wrong patterns

3. **Check texture coordinates:**
   ```
   Expected: Texture in proper page (0-15)
   Corrupted: Texture page = 0xFF or out of range
   ```

### Step 5: Log Memory Allocation

#### Enable DuckStation Logging

1. **Settings → Logging:**
   - Log Level: **Trace**
   - Log to File: **ON**
   - Log Filter: **GPU.*,SPU.*,CPU.Recompiler**

2. **Reproduce the issue:**
   - Load save near problematic area
   - Enter area and trigger item spawns
   - Collect corrupted items

3. **Analyze log:**
   ```
   Look for:
   - "GPU: Upload" (texture uploads)
   - "GPU: VRAM write" (VRAM writes)
   - "GPU: Out of memory" (allocation failures)
   ```

### Step 6: Use Cheat Engine (Advanced)

For detailed memory inspection:

1. **Attach Cheat Engine to DuckStation:**
   - Process: `duckstation-qt-x64-ReleaseLTCG.exe`

2. **Scan for item model pointers:**
   ```
   Value Type: 4 Bytes
   Scan Type: Unknown initial value
   
   # Pick up an item, then:
   Scan Type: Changed value
   
   # Drop the item:
   Scan Type: Changed value
   
   # Narrow down to find item pointer
   ```

3. **Monitor allocation patterns:**
   - Watch how many unique pointers are allocated per area
   - Compare to the 16-model limit

---

## Automated Memory Monitoring

### Create a DuckStation Lua Script

DuckStation supports **Lua scripting** for automated monitoring:

```lua
-- psx_memory_monitor.lua
-- Monitors Shadow Tower item memory usage

local item_models = {}
local max_models = 16
local current_area = 0

function on_frame()
  -- Read current area ID (example address)
  local area_id = memory.readbyte(0x8001ABCD)
  
  -- If area changed, reset tracking
  if area_id ~= current_area then
    current_area = area_id
    item_models = {}
    console.log("Area changed to: " .. area_id)
  end
  
  -- Scan for loaded item models (example range)
  for addr = 0x80100000, 0x80150000, 4 do
    local model_ptr = memory.readdword(addr)
    
    -- Check if valid model pointer
    if model_ptr >= 0x80000000 and model_ptr < 0x80200000 then
      if not item_models[model_ptr] then
        item_models[model_ptr] = true
        local count = 0
        for _ in pairs(item_models) do count = count + 1 end
        
        console.log(string.format("Model loaded: 0x%08X (total: %d/%d)", 
          model_ptr, count, max_models))
        
        -- Alert if approaching limit
        if count >= max_models then
          console.error("WARNING: Item memory limit reached!")
          emu.pause()  -- Pause emulation for inspection
        end
      end
    end
  end
end

emu.registerframe(on_frame)
```

**To use:**
1. Save as `psx_memory_monitor.lua`
2. Load in DuckStation: `Tools → Execute Lua Script`
3. Watch console for memory warnings

---

## Improving the Randomizer's Memory Tracking

### Current Issues

From `data_model.js` line 1135-1140:
```javascript
if (!this.spawns[i].drop2.isNull()) {
   //models.add(itemData[this.spawns[i].drop2.get()].model.get());
  //console.log("Item Memory count +1 by drop2 - " + this.spawns[i].name());
}
if (!this.spawns[i].drop3.isNull()) {
   //models.add(itemData[this.spawns[i].drop3.get()].model.get());
  //console.log("Item Memory count +1 by drop3 - " + this.spawns[i].name());
}
```

**Problem:** drop2 and drop3 are **not counted**, leading to underestimation!

### Recommended Fixes

#### Fix 1: Count All Drop Slots

```javascript
usedItemMemory() {
  let models = new Set();
  
  for (var i in this.spawns) {
    if (this.spawns[i].chance.isNull()) continue;
    
    // Count all three drop slots
    if (!this.spawns[i].drop1.isNull()) {
      models.add(itemData[this.spawns[i].drop1.get()].model.get());
    }
    if (!this.spawns[i].drop2.isNull()) {
      models.add(itemData[this.spawns[i].drop2.get()].model.get());
    }
    if (!this.spawns[i].drop3.isNull()) {
      models.add(itemData[this.spawns[i].drop3.get()].model.get());
    }
  }
  
  // Count collectables
  for (var i in this.collectables) {
    if (!this.collectables[i].type.isNull()) {
      models.add(itemData[this.collectables[i].type.get()].model.get());
    }
  }
  
  return models.size;
}
```

#### Fix 2: Add Detailed Logging

```javascript
usedItemMemory() {
  let models = new Set();
  let modelSources = {};  // Track where each model comes from
  
  for (var i in this.spawns) {
    if (this.spawns[i].chance.isNull()) continue;
    
    const addModel = (itemId, source) => {
      const modelId = itemData[itemId].model.get();
      models.add(modelId);
      if (!modelSources[modelId]) {
        modelSources[modelId] = [];
      }
      modelSources[modelId].push(source);
    };
    
    if (!this.spawns[i].drop1.isNull()) {
      addModel(this.spawns[i].drop1.get(), 
        `${this.name}/spawn[${i}]/drop1 - ${this.spawns[i].name()}`);
    }
    if (!this.spawns[i].drop2.isNull()) {
      addModel(this.spawns[i].drop2.get(),
        `${this.name}/spawn[${i}]/drop2 - ${this.spawns[i].name()}`);
    }
    if (!this.spawns[i].drop3.isNull()) {
      addModel(this.spawns[i].drop3.get(),
        `${this.name}/spawn[${i}]/drop3 - ${this.spawns[i].name()}`);
    }
  }
  
  for (var i in this.collectables) {
    if (!this.collectables[i].type.isNull()) {
      const itemId = this.collectables[i].type.get();
      const modelId = itemData[itemId].model.get();
      models.add(modelId);
      if (!modelSources[modelId]) {
        modelSources[modelId] = [];
      }
      modelSources[modelId].push(
        `${this.name}/collectable[${i}] - ${itemData[itemId].name}`);
    }
  }
  
  const memoryUsed = models.size;
  
  // Log warning if approaching limit
  if (memoryUsed >= 14) {
    console.warn(`WARNING: ${this.name} using ${memoryUsed}/16 item memory`);
    console.warn("Models loaded:", Array.from(models));
    console.warn("Sources:", modelSources);
  }
  
  return memoryUsed;
}
```

#### Fix 3: Add Memory-Aware Randomization Mode

In `randomize.js`, add a conservative mode:

```javascript
// New parameter
params.memoryConservative = params.memoryConservative || false;

if (params.memoryConservative) {
  // Stricter limit: 12 instead of 16 for safety margin
  Area.prototype.hasFreeItemMemory = function() {
    return this.usedItemMemory() < 12;
  };
  
  // Prefer sharing models between items
  function selectItemForDrop(area, existingModels) {
    // Filter items to those already loaded in area
    const loadedItems = allItems.filter(item =>
      existingModels.has(itemData[item].model.get())
    );
    
    if (loadedItems.length > 0) {
      // Reuse already-loaded model
      return loadedItems[Math.floor(Math.random() * loadedItems.length)];
    } else if (area.hasFreeItemMemory()) {
      // Load new model if space available
      return allItems[Math.floor(Math.random() * allItems.length)];
    } else {
      // No space, return null
      return null;
    }
  }
}
```

---

## Testing Procedure

### Before Making Changes

1. **Generate a randomized ISO:**
   ```bash
   npm run mod "./generated/st.bin" "./params/bonanza.json"
   ```

2. **Load in DuckStation with debugging enabled**

3. **Record memory usage per area:**
   - Use VRAM viewer screenshots
   - Note item memory counts from `spoilers/readable.txt`
   - Document which areas show corruption

### After Implementing Fixes

1. **Regenerate with same seed:**
   ```bash
   npm run mod "./generated/st.bin" "./params/bonanza.json"
   # Uses same seed for reproducibility
   ```

2. **Compare memory usage:**
   - Check `spoilers/readable.txt` for "Item Memory used" counts
   - Verify none exceed 16
   - Confirm drop2/drop3 are now tracked

3. **In-game verification:**
   - Load save at problematic area
   - Verify textures are correct
   - Collect all items to ensure no corruption

---

## Reference: Shadow Tower Memory Addresses

### Known Addresses (to be discovered via debugging)

| Address | Description | Notes |
|---------|-------------|-------|
| `0x801XXXXX` | Current Area ID | Changes when entering new area |
| `0x802XXXXX` | Item Model Table | Array of loaded item model pointers |
| `0x803XXXXX` | Texture Upload Queue | Textures pending VRAM upload |
| `TBD` | Item Memory Counter | Count of loaded models (to find) |
| `TBD` | VRAM Allocation Table | Where textures are in VRAM |

**How to find these:**
1. Use Cheat Engine to scan for known values
2. Watch memory changes when entering areas
3. Set breakpoints on item pickup code
4. Trace backwards to find allocation functions

---

## Common Issues and Solutions

### Issue: Random texture corruption in specific areas

**Diagnosis:**
- Check `spoilers/maps.html` for that area
- Look at "Item Memory used" value
- If = 16, memory is maxed out

**Solution:**
- Enable `memoryConservative` mode
- Reduce item variety in that area
- Merge similar items (use same model)

### Issue: Corruption only affects certain items

**Diagnosis:**
- Items loaded later in the area get corrupted
- First few items show correctly

**Solution:**
- Loading order issue - reorder item placement
- Prioritize important items to load first
- Use memory-aware placement algorithm

### Issue: Entire area has corrupted textures

**Diagnosis:**
- VRAM completely full
- Multiple overlapping texture loads

**Solution:**
- Reduce total number of areas with randomization
- Skip texture-heavy areas like boss rooms
- Use simpler item sets

---

## Additional Tools

### PSX Memory Viewer (PCSX-Redux)

Alternative to DuckStation, PCSX-Redux has advanced memory tools:

1. **Install:** https://github.com/grumpycoders/pcsx-redux
2. **Open memory editor:** Debug → Memory Editor
3. **Live tracking:** Can watch memory in real-time

### No$PSX Debugger

Classic PSX debugger with excellent assembly view:

1. **Download:** https://problemkaputt.de/psx.htm
2. **Load ISO** and enable debugger
3. **Track texture loads** via assembly breakpoints

### Ghidra PSX Decompilation

For deep code analysis:

1. **Install Ghidra:** https://ghidra-sre.org/
2. **Load Shadow Tower EXE**
3. **Find item loading functions**
4. **Reverse engineer memory allocation**

---

## Conclusion

Memory management on the PSX is constrained, and Shadow Tower's randomizer must respect these limits to avoid texture corruption. By:

1. **Accurately tracking** all item models (drop1, drop2, drop3, collectables)
2. **Monitoring** memory usage via emulator debugging tools
3. **Implementing** conservative allocation strategies
4. **Testing** thoroughly with real hardware constraints

You can create randomizations that work reliably without graphical corruption.

**Next Steps:**
1. Implement the fixes to count drop2/drop3
2. Add detailed memory logging
3. Create memory-conservative randomization mode
4. Test on problematic seeds
5. Document memory-safe parameters

---

## Contact and Community

For questions or to share findings:

- **GitHub Issues:** https://github.com/fredrischter/shadow-tower-randomizer/issues
- **Discord:** FromSoft Modding Committee - https://discord.gg/jUzZwWWUXd
- **Email:** fredrischter@gmail.com

Happy debugging! 🎮🔧
