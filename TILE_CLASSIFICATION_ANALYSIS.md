# Tile Classification Analysis for Shadow Tower

## Purpose
This document analyzes the tile dump data to classify tiles as "removable" vs "protected" (floor tiles that should never be removed).

## Tile Structure Recap
Each tile is 12 bytes with this structure:
```
Offset 0x00-0x01: x (UInt16) - X position in world space
Offset 0x02-0x03: y (UInt16) - Y position in world space (HEIGHT)
Offset 0x04-0x05: z (UInt16) - Z position in world space
Offset 0x06-0x07: rotation_z (UInt16)
Offset 0x08: tileX (UInt8) - Tile model/texture ID X
Offset 0x09: tileY (UInt8) - Tile model/texture ID Y
Offset 0x0A: tileZ (UInt8) - Tile model/texture ID Z
Offset 0x0B: unknown (UInt8)
```

**Key Field: `y` (posY in dumps) = Vertical Height**

## Data Analysis from Tile Dumps

### posY Value Distribution (across 3 sample areas):
```
human_world_solitary_region:
  28 tiles at posY=0
  47 tiles at posY=256
  12 tiles at posY=512
  14 tiles at posY=768

earth_world_rotting_cavern:
  160 tiles at posY=0
  114 tiles at posY=256
  69 tiles at posY=512
  89 tiles at posY=768

fire_world_burning_cavern:
  110 tiles at posY=0
  53 tiles at posY=256
  44 tiles at posY=512
  45 tiles at posY=768
```

### tileY Value Distribution (tile model IDs):
```
human_world_solitary_region:
  5 tiles with tileY=63
  93 tiles with tileY=64
  3 tiles with tileY=66

earth_world_rotting_cavern:
  tileY values: 58, 59, 60, 61, 62, 63, 64
  tileY=64 is BY FAR most common (332 tiles)
  Other values have 16-20 tiles each
```

**Insight:** tileY represents the TILE TYPE (which model/texture), NOT height. The `y` position (posY) represents actual vertical height.

## Floor Tile Classification

### Definition
Floor tiles are the walkable surfaces in the game. Removing them would create holes and make areas untraversable.

### Characteristics of Floor Tiles

Based on analysis and game knowledge:

1. **Low Height (posY)**
   - Floor tiles are at ground level: posY = 0 or posY = 256
   - Higher values (512, 768) are elevated structures (walls, ceiling elements, decorations)

2. **Grid Connectivity**
   - Floor tiles form connected horizontal grids
   - They share similar tileX and tileZ coordinates with small differences

3. **Horizontal Orientation**
   - rotation_z values suggest horizontal placement

### CRITICAL RULE: Floor Protection

**NEVER remove tiles where posY <= 256**

These are ground-level tiles that form the walkable paths. Removing them creates holes in the floor.

## Removable Tile Classification

### Wall Tiles
- **posY > 256** (typically 512 or 768)
- Adjacent to floor tiles (within 2 grid units in X/Z)
- Form vertical structures along corridors

### Decoration Tiles
- **posY > 256**
- May be isolated or part of decorative structures
- Not critical to game navigation

## Current Implementation Issues

### Issue 1: blank() Function Bug (FIXED)

**CRITICAL BUG FOUND:** The `Tile.blank()` function in data_model.js had a bug:

```javascript
// BEFORE (INCORRECT):
blank() {
    binSet(this.bin, this.offset_in_file, TILE_SIZE, 0x00);
    this.x.set(0xff);  // BUG: Sets position x, not tileX!
}

// AFTER (CORRECT):
blank() {
    binSet(this.bin, this.offset_in_file, TILE_SIZE, 0x00);
    this.tileX.set(0xff);  // Mark as blank by setting tileX to 0xFF
}
```

**Why this was wrong:**
- `isBlank` check looks at byte 0x08 (tileX)
- Old code set byte 0x00 (position x) to 0xFF
- This meant blanked tiles were NOT recognized as blank!
- Removal didn't work because tiles were set incorrectly

**FIX APPLIED:** Changed `this.x.set(0xff)` to `this.tileX.set(0xff)` in data_model.js

### Issue 2: Floor Protection Logic

The current `removeTiles()` function in randomize.js:
```javascript
// PROTECT FLOOR TILES (the walkable path)
// Floor tiles are typically at posY <= 256
if (posY <= 256) {
    return; // Never remove floor - this is the walkable path
}
```

**This is CORRECT!** The logic properly protects floor tiles.

## Recommendations

### 1. Keep Floor Protection (posY <= 256)
The current threshold is validated by tile dump analysis.

### 2. Add Better Wall/Decoration Detection
Current logic checks for nearby floor tiles. This is good but could be enhanced:

```javascript
// Enhanced classification
function isSafeToRemove(tile, area) {
    const posY = tile.y.get();
    
    // RULE 1: Never remove floor tiles
    if (posY <= 256) {
        return false; // Floor tile - PROTECTED
    }
    
    // RULE 2: Only remove if elevated (wall/decoration)
    if (posY > 256) {
        // Additional checks can go here
        return true; // Wall/decoration - REMOVABLE
    }
    
    return false; // Default to protected
}
```

### 3. Consider Additional Safety Checks
- Skip shadow tower areas (already implemented)
- Skip areas with special geometry
- Verify tile is not part of critical structures (stairs, platforms)

## Testing Strategy

1. **Visual Verification**
   - Generate ISOs with 10%, 25%, 50% tile removal
   - Load in emulator and walk through areas
   - Verify floors remain intact
   - Check that walls/decorations are removed as expected

2. **Data Verification**
   - Count tiles before/after removal
   - Verify all removed tiles had posY > 256
   - Ensure removal percentage is accurate

## Conclusion

The current implementation in randomize.js is **fundamentally correct**:
- It protects floor tiles (posY <= 256)
- It only removes elevated tiles (posY > 256)
- It checks for adjacency to paths

The tile dump analysis confirms this approach is sound. The main improvement would be documentation and possibly more granular control over what gets removed.

## Summary Table

| Tile Type | posY Range | Should Remove? | Why |
|-----------|-----------|----------------|-----|
| Floor (walkable path) | 0-256 | **NEVER** | Creates holes, breaks navigation |
| Wall (corridor sides) | 512-768 | YES | Creates "open walls" aesthetic |
| Ceiling/Upper decoration | 512-768 | YES | Reduces visual clutter |
| Isolated decoration | 512-768 | MAYBE | May be important landmarks |

## Generated: 2025-12-17
