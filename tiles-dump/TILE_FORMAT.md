# Shadow Tower Tile Format Documentation

## Overview
This document describes the binary format of tiles in Shadow Tower.

## Tile Structure

Each tile is **12 bytes (0x0C)** in size.

### Binary Layout

```
Offset | Size | Type   | Field       | Description
-------|------|--------|-------------|--------------------------------------------
0x00   | 2    | UInt16 | x           | X position in world space
0x02   | 2    | UInt16 | y           | Y position in world space  
0x04   | 2    | UInt16 | z           | Z position in world space
0x06   | 2    | UInt16 | rotation_z  | Z-axis rotation
0x08   | 1    | UInt8  | tileX       | Tile grid X coordinate (0xFF = blank)
0x09   | 1    | UInt8  | tileY       | Tile grid Y coordinate
0x0A   | 1    | UInt8  | tileZ       | Tile grid Z coordinate
0x0B   | 1    | UInt8  | unknown     | Unknown field
```

## Blank Detection

A tile is considered "blank" (unused) when:
- Byte at offset 0x08 (tileX) equals 0xFF

## Tile Counts

- **Tiles per area**: 512 (0x200)
- **Total tiles in game**: 15872
- **Non-blank tiles**: 9680
- **Blank tiles**: 6192

## Coordinate Systems

### World Space (x, y, z)
- Absolute 3D position in the game world
- 16-bit unsigned integers
- Range: 0 to 65535

### Tile Grid (tileX, tileY, tileZ)
- Relative position within tile grid system
- 8-bit unsigned integers
- Range: 0 to 255
- tileX = 0xFF indicates blank tile

## Notes

- All integers are little-endian (LSB first)
- Rotation values are in engine-specific units
- Tile grid coordinates may reference tile texture/model IDs

## Files Generated

### Binary Dumps
- `binary/<area_name>.bin` - All 512 tiles concatenated (6144 bytes = 512 * 12)
- `binary/<area_name>/tile_XXXX.bin` - Individual tile binaries (12 bytes each)

### Text Dumps
- `text/<area_name>.txt` - Human-readable tile data per area
- `all_tiles.txt` - All non-blank tiles from all areas

### JSON Data
- `json/<area_name>.json` - Structured tile data per area
- `summary.json` - Statistics and summary for all areas

## Usage for Modding

### Reading Tiles
```javascript
// Read area binary dump (512 tiles)
const tileData = fs.readFileSync('tiles-dump/binary/human_world_solitary_region.bin');
const tileIndex = 42;
const tileOffset = tileIndex * 12;
const tileBinary = tileData.slice(tileOffset, tileOffset + 12);

// Parse fields
const x = tileBinary.readUInt16LE(0);
const y = tileBinary.readUInt16LE(2);
const z = tileBinary.readUInt16LE(4);
const rotation_z = tileBinary.readUInt16LE(6);
const tileX = tileBinary.readUInt8(8);
const tileY = tileBinary.readUInt8(9);
const tileZ = tileBinary.readUInt8(10);
const unknown = tileBinary.readUInt8(11);
const isBlank = (tileX === 0xFF);
```

### Writing Tiles
```javascript
// Create new tile
const newTile = Buffer.alloc(12);
newTile.writeUInt16LE(1000, 0);  // x
newTile.writeUInt16LE(2000, 2);  // y
newTile.writeUInt16LE(3000, 4);  // z
newTile.writeUInt16LE(0, 6);     // rotation_z
newTile.writeUInt8(5, 8);        // tileX
newTile.writeUInt8(10, 9);       // tileY
newTile.writeUInt8(15, 10);      // tileZ
newTile.writeUInt8(0, 11);       // unknown

// Blank a tile
const blankTile = Buffer.alloc(12, 0x00);
blankTile.writeUInt8(0xFF, 8);  // tileX = 0xFF marks as blank
```

## Generated: 2025-12-17T10:05:16.252Z
