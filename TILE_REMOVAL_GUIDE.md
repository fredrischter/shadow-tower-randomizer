# Tile Removal Feature - How It Works

## Overview

The tile removal feature allows you to remove wall and decoration tiles from Shadow Tower, creating a more open aesthetic while keeping floors intact for gameplay.

## What Gets Removed

### Safe to Remove (posY > 256)
- **Wall tiles** - Vertical surfaces along corridors
- **Ceiling elements** - Upper decorative structures  
- **Elevated decorations** - Pillars, torches at height

### Protected (posY <= 256)
- **Floor tiles** - Walkable ground surfaces
- **Ground-level paths** - Player navigation areas

## Usage

### Parameters

```json
{
  "removeTilesPercent": 30,  // 0-100, percentage of wall tiles to remove
  ...
}
```

### Example Presets

```bash
# Remove 10% of walls (subtle effect)
npm run mod "./path/to/st.bin" "./params/removed10prc-tiles.json"

# Remove 50% of walls (dramatic open effect)
npm run mod "./path/to/st.bin" "./params/removed50prc-tiles.json"
```

## How It Works (Technical)

### 1. Tile Classification

Each tile is classified based on its **posY** (vertical position):

```javascript
// Floor tiles (protected)
if (posY <= 256) {
    return;  // Never remove - this is walkable floor
}

// Wall/decoration tiles (removable)
if (posY > 256) {
    // Can be safely removed
}
```

### 2. Adjacency Check

Only removes wall tiles that are:
- Near walkable paths (within 2 grid units)
- Not isolated structures
- Adjacent to floor tiles

This creates a "crumbling walls along corridors" effect rather than random holes.

### 3. Percentage-Based Removal

```javascript
var removalChance = params.removeTilesPercent / 100;
if (Math.random() < removalChance) {
    tile.blank();  // Remove this tile
}
```

## The Bug That Was Fixed

### Problem

The original `tile.blank()` function had a critical bug:

```javascript
// WRONG (before fix):
blank() {
    binSet(this.bin, this.offset_in_file, TILE_SIZE, 0x00);
    this.x.set(0xff);  // Sets POSITION x to 0xFF
}
```

### Why It Didn't Work

The `isBlank` check looks for tileX == 0xFF (byte at offset 0x08):
```javascript
this.isBlank = this.bin[this.offset_in_file + 0x08]==0xff;
```

But `blank()` was setting position x (byte at offset 0x00) instead!

Result: Tiles were "blanked" in code but the game still rendered them because they weren't truly marked as blank.

### Fix

```javascript
// CORRECT (after fix):
blank() {
    binSet(this.bin, this.offset_in_file, TILE_SIZE, 0x00);
    this.tileX.set(0xff);  // Correctly sets tileX to 0xFF
}
```

Now the isBlank check works properly and removed tiles actually disappear in-game!

## Tile Binary Structure

For reference, here's what each tile contains (12 bytes):

```
Offset | Size | Field       | Description
-------|------|-------------|----------------------------
0x00   | 2    | x           | X position in world space
0x02   | 2    | y           | Y position (HEIGHT - key for classification!)
0x04   | 2    | z           | Z position in world space
0x06   | 2    | rotation_z  | Z-axis rotation
0x08   | 1    | tileX       | Tile model ID X (0xFF = blank)
0x09   | 1    | tileY       | Tile model ID Y
0x0A   | 1    | tileZ       | Tile model ID Z
0x0B   | 1    | unknown     | Unknown field
```

## Visual Effect Examples

### 10% Removal
- Subtle "weathered" look
- Some walls missing here and there
- Still feels enclosed
- Good for slight atmospheric change

### 50% Removal  
- Dramatic "ruined" aesthetic
- Many walls gone
- Open, exposed feeling
- Great for visibility

### 100% Removal
- Almost no walls
- Maximum visibility
- Very different gameplay feel
- May expose unfinished areas

## Safety Features

### Protected Areas
- Shadow Tower areas (player hub) - never modified
- Void areas - skip these
- Floor tiles - always protected

### Edge Case Handling
- Isolated decorations preserved (not adjacent to paths)
- Distance checks prevent removing important structures
- Bidirectional adjacency ensures consistent removal

## Testing

Run the verification test:

```bash
node test_tile_blank.js
```

Expected output:
```
OLD (BUGGY) behavior:
  ❌ BUG: isBlank check FAILS - tile not recognized as blank!

NEW (CORRECT) behavior:
  ✅ CORRECT: isBlank check PASSES - tile recognized as blank!
```

## Troubleshooting

### Tiles Not Being Removed
- Verify fix is applied (check data_model.js line 1568)
- Check console output for removal messages
- Ensure removeTilesPercent > 0 in params

### Game Crashes
- Floor tiles should never be removed (posY <= 256 protected)
- Check for mod conflicts
- Verify ISO integrity

### Floors Have Holes
- **This should not happen** - floor protection is built-in
- If it does, report as bug with:
  - Params file used
  - Area where holes appear
  - Console logs from randomization

## Performance

Tile removal is O(n²) for adjacency checks but fast in practice:
- Typical area: 100-500 tiles
- Processing time: <1 second per area
- No impact on game performance

## Related Files

- **data_model.js** - Tile class and blank() function
- **randomize.js** - Removal logic (lines 1223-1320)
- **TILE_CLASSIFICATION_ANALYSIS.md** - Detailed analysis
- **TILE_REMOVAL_FIX_SUMMARY.md** - Bug fix documentation
- **test_tile_blank.js** - Verification test

## Credits

- Bug discovered through tile dump analysis
- Fix verified via test_tile_blank.js
- Classification validated against tiles-dump/ data

---

**Last Updated:** 2025-12-17
**Status:** Working as of bug fix commit
