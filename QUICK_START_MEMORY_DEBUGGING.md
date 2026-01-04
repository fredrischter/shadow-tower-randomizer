# Quick Start: Debugging PSX Memory Issues

## New Requirement: Debugging with DuckStation

You asked for guidance on using DuckStation or other tools to debug Shadow Tower's memory system. Here's your step-by-step guide.

---

## 🚀 Quick Setup (5 minutes)

### 1. Get DuckStation

**Download:** https://github.com/stenzek/duckstation/releases

**Why DuckStation?**
- Best PSX debugging tools
- VRAM viewer for texture inspection
- Memory scanner
- Lua scripting support
- Save state support for testing

### 2. Enable Debugging Features

In DuckStation:
```
Settings → Console Settings → Enable CPU Debugger: ON
Settings → Display → Show VRAM: ON
Settings → Logging → Log Level: Trace
```

### 3. Load Your Randomized ISO

```
File → Boot Fast → Select your modified .bin file
```

---

## 🔍 Finding Memory Issues (Step-by-Step)

### Method 1: Use the Automated Inspector (Easiest)

After generating a randomization:

```bash
node psx-memory-inspector.js ./generated/bonanza/spoilers
```

**What it shows:**
```
=== PSX Memory Inspector ===

Memory Usage Statistics:
========================
Total areas analyzed: 42
Average memory: 11.3/16 models
Maximum memory: 18/16 models  ← PROBLEM!

Distribution:
-------------
0-4       ████████ 8 areas (19.0%)
5-8       ████████████ 12 areas (28.6%)
9-12      ██████████ 10 areas (23.8%)
13-15     ████ 4 areas (9.5%)
16        ██ 2 areas (4.8%)
OVERFLOW  ██████ 6 areas (14.3%)  ← PROBLEM!

!!! CRITICAL: MEMORY OVERFLOW DETECTED !!!
```

**Interpretation:**
- ✅ Green bars (0-12) = Safe
- ⚠️ Yellow bars (13-15) = Warning  
- 🚨 Red (16+) = Texture corruption likely!

### Method 2: Visual Inspection in DuckStation

1. **Load a save near the problematic area**
   - Create save states at area entrances
   - Label them with area names

2. **Open VRAM Viewer**
   ```
   Tools → Show VRAM
   ```

3. **Enter the area and look for:**

   **Normal textures:**
   ```
   ┌─────────────────┐
   │ Sword textures  │  ← Clean, organized
   │ correctly loaded│
   └─────────────────┘
   ```

   **Corrupted textures:**
   ```
   ┌─────────────────┐
   │ Random pixels!! │  ← Scrambled, wrong colors
   │ ████▓▓▒▒░░      │  ← Garbage data
   └─────────────────┘
   ```

4. **Take screenshots for comparison:**
   ```
   Right-click VRAM window → Save as PNG
   ```

   Save as: `area-name-vram.png`

### Method 3: Live Monitoring with Lua Script

1. **Load the monitoring script**
   ```
   Tools → Execute Lua Script
   → Select duckstation-memory-monitor.lua
   ```

2. **Play through the area**

3. **Watch the on-screen display:**
   ```
   ┌─────────────────────────────┐
   │ Shadow Tower Memory Monitor │
   │ Area: Fire World Ashen Cave │
   │ Memory: 14/16 models        │
   │ [██████████████░░] WARNING  │
   └─────────────────────────────┘
   ```

4. **Check console for alerts:**
   ```
   [Memory Monitor] Model loaded: 0x80123456 (count: 14/16)
   [Memory Monitor] ⚠ Approaching limit: 14/16
   [Memory Monitor] 🚨 OVERFLOW: 17/16  ← STOP!
   ```

---

## 🔬 Deep Debugging (Finding Root Cause)

### Step 1: Identify Which Area is Broken

From `spoilers/readable.txt`:

```
=== fire_world_ashen_cavern ===
Item Memory used 18      ← OVERFLOW!
Creatures score 245
```

Or use the inspector:
```bash
node psx-memory-inspector.js ./generated/bonanza/spoilers | grep OVERFLOW
```

### Step 2: See What Items Are There

In `spoilers/maps.html`:
1. Open in browser
2. Find the problematic area
3. Look at the item list

Or in `readable.txt` search for the area:
```
Collectable 0 - type=item_12_deadly_broad_sword
Collectable 1 - type=item_45_fiery_bow_gun
Spawn 0 - drop1=item_33_crushing_mace
Spawn 0 - drop2=item_78_shield  ← drop2 not counted!
Spawn 1 - drop3=item_91_potion  ← drop3 not counted!
```

### Step 3: Understand Why It Happened

The randomizer's `usedItemMemory()` function (data_model.js line 1124):

```javascript
usedItemMemory() {
  let models = new Set();
  
  // Counts drop1 ✅
  if (!this.spawns[i].drop1.isNull()) {
    models.add(itemData[this.spawns[i].drop1.get()].model.get());
  }
  
  // DOESN'T count drop2! ❌
  if (!this.spawns[i].drop2.isNull()) {
    // models.add(...);  ← COMMENTED OUT!
  }
  
  // DOESN'T count drop3! ❌
  if (!this.spawns[i].drop3.isNull()) {
    // models.add(...);  ← COMMENTED OUT!
  }
  
  return models.size;  // Underestimated by ~30-50%!
}
```

**Result:**
- Randomizer thinks: "Only 12 models, safe to add more"
- Reality: Actually 18 models loaded
- Game: 🔥 VRAM overflow → texture corruption

---

## 🛠️ How to Fix (Your Options)

### Option A: Avoid Problematic Seeds (Quick Fix)

1. Generate with different seed:
   ```json
   {
     "seed": "12345"  ← Try different numbers
   }
   ```

2. Run inspector until you find safe one:
   ```bash
   node psx-memory-inspector.js ./generated/test/spoilers
   # Look for: "✓ Memory usage looks healthy!"
   ```

3. Use that seed!

### Option B: Use Conservative Settings

Create a safer preset:

```json
{
  "label": "safe-randomization",
  "preset": "any%",
  "difficulty": "medium",
  "randomizeMap": true,
  "randomizeCreatures": true,
  "randomizeCollectablesAndDrops": true,
  
  // These would reduce memory pressure:
  "progressiveness": "increased",  // More spread out
  "memoryConservative": true       // (needs implementation)
}
```

### Option C: Fix the Code (Best Solution)

See `MEMORY_TRACKING_IMPROVEMENTS.md` for complete implementation plan.

**Quick fix** (uncommenting drop2/drop3):

In `data_model.js` line 1135-1140:

```javascript
// Remove the comments:
if (!this.spawns[i].drop2.isNull()) {
  models.add(itemData[this.spawns[i].drop2.get()].model.get());
}
if (!this.spawns[i].drop3.isNull()) {
  models.add(itemData[this.spawns[i].drop3.get()].model.get());
}
```

Regenerate and test!

---

## 📊 Understanding the Memory System

### What is "Item Memory"?

Each area can load **maximum 16 unique item models** into VRAM.

**Item Model = 3D geometry + texture data**

Example:
```
short_sword_model_1
├── Geometry: vertices, polygons
└── Texture: blade.tim, handle.tim

long_sword_model_2
├── Geometry: different mesh
└── Texture: different patterns
```

### Why the 16 Limit?

**PlayStation 1 VRAM: 1 MB total**

Shared between:
- 🖼️ Framebuffers (2 x ~300 KB) = 600 KB
- 🎨 Item textures (16 x 10-20 KB) = ~250 KB
- 🏞️ Environment textures = ~100 KB
- 👾 Creature models = ~50 KB

**Total:** ~1000 KB ≈ 1 MB → FULL!

Loading 17th item → **No space → Corruption**

### What Happens When You Exceed?

1. **Best case:** Item uses wrong texture (shows different item)
2. **Common case:** Texture is scrambled/pixelated
3. **Worst case:** Crash or infinite loading

### How Items Share Models

Some items use the **same model** (saves memory):

```
item_0_short_sword  ──┐
item_1_short_sword  ──┼── All use model #5
item_2_deadly_sword ──┘    (counts as 1!)

item_10_broad_sword ──┐
item_11_broad_sword ──┼── All use model #8
item_12_deadly_broad──┘    (counts as 1!)
```

This is why you can have 50+ items in an area but only use 12 models!

---

## 🎯 Testing Procedure

### Before Playing

1. **Generate randomization:**
   ```bash
   npm run mod "./generated/st.bin" "./params/test.json"
   ```

2. **Run inspector:**
   ```bash
   node psx-memory-inspector.js ./generated/test/spoilers
   ```

3. **Check for overflow:**
   - None? ✅ Safe to play
   - Some? ⚠️ Note which areas
   - Many? 🚨 Re-roll seed

### During Play

1. **Load DuckStation Lua script**
2. **Create save states at area entrances**
3. **Enter each area and check:**
   - Lua script shows memory count
   - Items have correct textures
   - No visual glitches

4. **If corruption occurs:**
   - Note the area name
   - Save state
   - Check VRAM viewer
   - Screenshot for evidence
   - Report with seed/area info

---

## 📁 File Reference

**Generated files to check:**

```
generated/
└── your-preset/
    └── spoilers/
        ├── changeset.json      - What was modified
        ├── readable.txt        - Human-readable changes
        │   └── Search for: "Item Memory used"
        ├── maps.html           - Visual map browser
        │   └── Color-coded memory warnings
        └── memory-report.txt   - Auto-generated by inspector
```

**Tools:**

```
shadow-tower-randomizer/
├── PSX_MEMORY_DEBUGGING_GUIDE.md  - Full 500+ line guide
├── MEMORY_TRACKING_IMPROVEMENTS.md - Implementation plan
├── psx-memory-inspector.js         - CLI analysis tool
└── duckstation-memory-monitor.lua  - Real-time monitoring
```

---

## 🆘 Troubleshooting

### "Inspector shows overflow but game seems fine"

**Possible reasons:**
1. Those items aren't collected yet
2. Area hasn't been visited
3. Different game version/region
4. Lucky - items share models

**Still risky** - corruption may happen later!

### "VRAM shows corruption but inspector says safe"

**Possible reasons:**
1. drop2/drop3 not being counted (known bug)
2. Creature models also using VRAM
3. Area-specific texture loading
4. Memory fragmentation

**Solution:** Use conservative mode or re-roll

### "Script crashes/errors"

**Common issues:**
- Wrong spoilers path
- Files not generated yet
- Missing node.js
- Corrupted changeset.json

**Fix:**
```bash
# Verify files exist:
ls generated/preset/spoilers/changeset.json
ls generated/preset/spoilers/readable.txt

# Re-run mod if needed:
npm run mod "./generated/st.bin" "./params/preset.json"
```

### "DuckStation Lua script doesn't work"

**Try:**
1. Update to latest DuckStation
2. Check console for error messages
3. Verify Lua scripting is enabled
4. Memory addresses may need adjustment for your ROM version

**Manual alternative:**
Use VRAM viewer + memory scanner instead

---

## 🎓 Learning Resources

**Recommended reading order:**

1. **This file** (QUICK_START.md) - Overview
2. **PSX_MEMORY_DEBUGGING_GUIDE.md** - Deep dive
3. **MEMORY_TRACKING_IMPROVEMENTS.md** - Code fixes

**External resources:**

- PSX Dev Wiki: http://psx.rules.org/
- DuckStation GitHub: https://github.com/stenzek/duckstation
- No$PSX Documentation: https://problemkaputt.de/psx-spx.htm

---

## 💡 Pro Tips

1. **Always run inspector before playing** - Save time, avoid frustration

2. **Create save states at area entrances** - Quick testing

3. **Keep a spreadsheet of seeds** - Track which ones are safe

4. **Test problematic areas first** - Fire World, Water World, Boss Rooms

5. **Use VRAM screenshots** - Visual evidence for bug reports

6. **Monitor in real-time** - Lua script catches issues immediately

7. **Check readable.txt regularly** - Learn what causes issues

8. **Join the Discord** - Share findings, get help from community

---

## 🚀 Next Steps

After understanding the debugging tools:

1. **Read the full guide** (PSX_MEMORY_DEBUGGING_GUIDE.md)
2. **Test with your randomizations**
3. **Report findings** (areas with consistent issues)
4. **Help improve** (contribute address discoveries)
5. **Consider implementing fixes** (see MEMORY_TRACKING_IMPROVEMENTS.md)

---

## 📧 Questions?

- **GitHub Issues:** https://github.com/fredrischter/shadow-tower-randomizer/issues
- **Discord:** FromSoft Modding Committee - https://discord.gg/jUzZwWWUXd
- **Email:** fredrischter@gmail.com

---

**Remember:** Memory issues are **predictable** and **preventable**. With these tools, you can:
- ✅ Detect problems before playing
- ✅ Understand why they happen
- ✅ Fix them systematically
- ✅ Create safer randomizations

Happy debugging! 🎮🔧
