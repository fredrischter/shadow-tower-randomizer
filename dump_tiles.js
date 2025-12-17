#!/usr/bin/env node
'use strict';

// Tile Dump Script - Extracts all tile data from Shadow Tower for analysis
// This script dumps complete tile data from all areas including:
// - Human-readable text format
// - Raw binary dumps
// - JSON structured data

const randomizer_common = require('./randomizer_common');
const data_model = require('./data_model');
const fs = require('fs');
const path = require('path');

// TFILEReader is exported as global by randomizer_common
const TFILEReader = global.TFILEReader;

console.log('=== Shadow Tower Tile Dump Utility ===\n');

// Check arguments
if (process.argv.length < 3) {
    console.error('Usage: node dump_tiles.js <path-to-extracted-ST-folder>');
    console.error('Example: node dump_tiles.js ".\\generated\\no-change\\extracted"');
    process.exit(1);
}

const stDir = process.argv[2];
const tFilePath = stDir + path.sep + "ST" + path.sep + "COM" + path.sep + "FDAT.T";

if (!fs.existsSync(tFilePath)) {
    console.error('ERROR: FDAT.T not found at: ' + tFilePath);
    console.error('Make sure you provide path to extracted ST folder');
    process.exit(1);
}

// Create output directories
const outputDir = 'tiles-dump';
const binaryDir = path.join(outputDir, 'binary');
const textDir = path.join(outputDir, 'text');
const jsonDir = path.join(outputDir, 'json');
const imagesDir = path.join(outputDir, 'images');

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);
if (!fs.existsSync(binaryDir)) fs.mkdirSync(binaryDir);
if (!fs.existsSync(textDir)) fs.mkdirSync(textDir);
if (!fs.existsSync(jsonDir)) fs.mkdirSync(jsonDir);
if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir);

console.log('Output directories:');
console.log('  - ' + outputDir + '/ (root)');
console.log('  - ' + binaryDir + '/ (raw binary data)');
console.log('  - ' + textDir + '/ (human-readable text)');
console.log('  - ' + jsonDir + '/ (structured JSON)');
console.log('  - ' + imagesDir + '/ (visual tile maps)\n');

// Load game data
console.log('Loading FDAT.T...');
var tfile = new TFILEReader(tFilePath).readTFormat();

console.log('Setting up data model...');
data_model.setup(tfile, stDir, {});

console.log('Data model setup complete.\n');

// Get all areas
const areas = data_model.areas;
console.log('Found ' + areas.length + ' areas to process.\n');

// Summary statistics
let totalStats = {
    totalAreas: 0,
    totalTiles: 0,
    totalBlankTiles: 0,
    totalNonBlankTiles: 0,
    areaStats: []
};

// Master text file with all tiles
const masterTextPath = path.join(outputDir, 'all_tiles.txt');
const masterTextStream = fs.createWriteStream(masterTextPath, {flags: 'w'});

masterTextStream.write('Shadow Tower - Complete Tile Dump\n');
masterTextStream.write('Generated: ' + new Date().toISOString() + '\n');
masterTextStream.write('Tile Size: ' + global.TILE_SIZE + ' bytes (0x' + global.TILE_SIZE.toString(16) + ')\n');
masterTextStream.write('Tiles per Area: ' + global.TILE_COUNT + ' (0x' + global.TILE_COUNT.toString(16) + ')\n');
masterTextStream.write('='.repeat(120) + '\n\n');

// Process each area
areas.forEach((area, areaIndex) => {
    console.log('Processing area ' + (areaIndex + 1) + '/' + areas.length + ': ' + area.name);
    
    let areaStats = {
        name: area.name,
        index: areaIndex,
        totalTiles: 0,
        blankTiles: 0,
        nonBlankTiles: 0,
        tiles: []
    };
    
    // Area-specific text file
    const areaTextPath = path.join(textDir, area.name + '.txt');
    const areaTextStream = fs.createWriteStream(areaTextPath, {flags: 'w'});
    
    areaTextStream.write('Area: ' + area.name + '\n');
    areaTextStream.write('Index: ' + areaIndex + '\n');
    areaTextStream.write('='.repeat(120) + '\n\n');
    areaTextStream.write('Tile Format (12 bytes = 0x0C):\n');
    areaTextStream.write('  Offset 0x00-0x01: x position (UInt16)\n');
    areaTextStream.write('  Offset 0x02-0x03: y position (UInt16)\n');
    areaTextStream.write('  Offset 0x04-0x05: z position (UInt16)\n');
    areaTextStream.write('  Offset 0x06-0x07: rotation_z (UInt16)\n');
    areaTextStream.write('  Offset 0x08: tileX (UInt8) - blank if 0xFF\n');
    areaTextStream.write('  Offset 0x09: tileY (UInt8)\n');
    areaTextStream.write('  Offset 0x0A: tileZ (UInt8)\n');
    areaTextStream.write('  Offset 0x0B: unknown (UInt8)\n');
    areaTextStream.write('='.repeat(120) + '\n\n');
    
    // Column headers
    const header = 'Index OffsetInFile AbsoluteOffset TileX TileY TileZ PosX  PosY  PosZ  RotZ  RawBytes (hex)';
    areaTextStream.write(header + '\n');
    areaTextStream.write('-'.repeat(120) + '\n');
    
    masterTextStream.write('\n' + '='.repeat(120) + '\n');
    masterTextStream.write('AREA: ' + area.name + ' (Index: ' + areaIndex + ')\n');
    masterTextStream.write('='.repeat(120) + '\n');
    masterTextStream.write(header + '\n');
    masterTextStream.write('-'.repeat(120) + '\n');
    
    // Area-specific binary dump (all tiles concatenated)
    const areaBinaryPath = path.join(binaryDir, area.name + '.bin');
    const areaBinaryData = [];
    
    // Process each tile
    for (let i = 0; i < global.TILE_COUNT; i++) {
        const tile = area.tiles[i];
        areaStats.totalTiles++;
        
        if (tile.isBlank) {
            areaStats.blankTiles++;
        } else {
            areaStats.nonBlankTiles++;
        }
        
        // Extract raw binary (12 bytes)
        const rawBinary = Buffer.from(tile.bin.slice(tile.offset_in_file, tile.offset_in_file + global.TILE_SIZE));
        areaBinaryData.push(rawBinary);
        
        // Create hex string of raw bytes
        let hexBytes = '';
        for (let b = 0; b < global.TILE_SIZE; b++) {
            hexBytes += rawBinary[b].toString(16).padStart(2, '0') + ' ';
        }
        
        // Format text line
        const line = 
            i.toString().padStart(5) + ' ' +
            tile.offset_in_file.toString(16).padStart(12, '0') + ' ' +
            tile.absoluteIndex.toString(16).padStart(14, '0') + ' ' +
            (tile.isBlank ? ' BLANK' : tile.tileX.get().toString(16).padStart(5, '0')) + ' ' +
            (tile.isBlank ? ' BLANK' : tile.tileY.get().toString(16).padStart(5, '0')) + ' ' +
            (tile.isBlank ? ' BLANK' : tile.tileZ.get().toString(16).padStart(5, '0')) + ' ' +
            tile.x.get().toString(16).padStart(5, '0') + ' ' +
            tile.y.get().toString(16).padStart(5, '0') + ' ' +
            tile.z.get().toString(16).padStart(5, '0') + ' ' +
            tile.rotation_z.get().toString(16).padStart(5, '0') + ' ' +
            hexBytes;
        
        areaTextStream.write(line + '\n');
        
        // Only write non-blank tiles to master file to save space
        if (!tile.isBlank) {
            masterTextStream.write(line + '\n');
        }
        
        // Store tile data for JSON
        areaStats.tiles.push({
            index: i,
            isBlank: tile.isBlank,
            offsetInFile: tile.offset_in_file,
            absoluteIndex: tile.absoluteIndex,
            tileX: tile.isBlank ? null : tile.tileX.get(),
            tileY: tile.isBlank ? null : tile.tileY.get(),
            tileZ: tile.isBlank ? null : tile.tileZ.get(),
            posX: tile.x.get(),
            posY: tile.y.get(),
            posZ: tile.z.get(),
            rotationZ: tile.rotation_z.get(),
            rawHex: hexBytes.trim()
        });
    }
    
    areaTextStream.write('\n' + '='.repeat(120) + '\n');
    areaTextStream.write('Summary for ' + area.name + ':\n');
    areaTextStream.write('  Total tiles: ' + areaStats.totalTiles + '\n');
    areaTextStream.write('  Non-blank tiles: ' + areaStats.nonBlankTiles + '\n');
    areaTextStream.write('  Blank tiles: ' + areaStats.blankTiles + '\n');
    areaTextStream.end();
    
    // Write binary dump (all tiles concatenated)
    fs.writeFileSync(areaBinaryPath, Buffer.concat(areaBinaryData));
    
    // Write individual tile binaries
    const areaTileBinaryDir = path.join(binaryDir, area.name);
    if (!fs.existsSync(areaTileBinaryDir)) fs.mkdirSync(areaTileBinaryDir);
    
    areaBinaryData.forEach((tileData, index) => {
        const tileBinaryPath = path.join(areaTileBinaryDir, 'tile_' + index.toString().padStart(4, '0') + '.bin');
        fs.writeFileSync(tileBinaryPath, tileData);
    });
    
    // Write JSON for this area
    const areaJsonPath = path.join(jsonDir, area.name + '.json');
    fs.writeFileSync(areaJsonPath, JSON.stringify(areaStats, null, 2));
    
    // Generate visual tile map image
    try {
        const { createCanvas } = require('@napi-rs/canvas');
        
        // Find bounds of tiles to determine canvas size
        let minX = Infinity, maxX = -Infinity;
        let minY = Infinity, maxY = -Infinity;
        
        areaStats.tiles.forEach(tile => {
            if (!tile.isBlank && tile.tileX !== null) {
                if (tile.tileX < minX) minX = tile.tileX;
                if (tile.tileX > maxX) maxX = tile.tileX;
                if (tile.tileZ < minY) minY = tile.tileZ;
                if (tile.tileZ > maxY) maxY = tile.tileZ;
            }
        });
        
        if (minX !== Infinity && maxX !== -Infinity) {
            const gridWidth = maxX - minX + 1;
            const gridHeight = maxY - minY + 1;
            const tileSize = 8; // pixels per tile
            const canvasWidth = gridWidth * tileSize + 100;
            const canvasHeight = gridHeight * tileSize + 100;
            
            const canvas = createCanvas(canvasWidth, canvasHeight);
            const ctx = canvas.getContext('2d');
            
            // Background
            ctx.fillStyle = '#1a1a1a';
            ctx.fillRect(0, 0, canvasWidth, canvasHeight);
            
            // Draw grid
            ctx.strokeStyle = '#333333';
            ctx.lineWidth = 1;
            for (let x = 0; x <= gridWidth; x++) {
                ctx.beginPath();
                ctx.moveTo(50 + x * tileSize, 50);
                ctx.lineTo(50 + x * tileSize, 50 + gridHeight * tileSize);
                ctx.stroke();
            }
            for (let y = 0; y <= gridHeight; y++) {
                ctx.beginPath();
                ctx.moveTo(50, 50 + y * tileSize);
                ctx.lineTo(50 + gridWidth * tileSize, 50 + y * tileSize);
                ctx.stroke();
            }
            
            // Draw tiles
            areaStats.tiles.forEach(tile => {
                if (!tile.isBlank && tile.tileX !== null) {
                    const x = 50 + (tile.tileX - minX) * tileSize;
                    const y = 50 + (tile.tileZ - minY) * tileSize;
                    
                    // Color based on tileY (height/elevation)
                    const hue = (tile.tileY * 30) % 360;
                    ctx.fillStyle = `hsl(${hue}, 70%, 50%)`;
                    ctx.fillRect(x, y, tileSize - 1, tileSize - 1);
                }
            });
            
            // Draw title
            ctx.fillStyle = '#ffffff';
            ctx.font = '14px Arial';
            ctx.fillText(area.name, 10, 30);
            ctx.font = '10px Arial';
            ctx.fillText(`Tiles: ${areaStats.nonBlankTiles} / ${areaStats.totalTiles}`, 10, 45);
            ctx.fillText(`Grid: ${gridWidth}x${gridHeight}`, 10, canvasHeight - 10);
            
            // Save image
            const imageBuffer = canvas.toBuffer('image/png');
            const imagePath = path.join(imagesDir, area.name + '.png');
            fs.writeFileSync(imagePath, imageBuffer);
        }
    } catch (error) {
        console.log('  (Image generation skipped - canvas not available)');
    }
    
    // Update totals
    totalStats.totalAreas++;
    totalStats.totalTiles += areaStats.totalTiles;
    totalStats.totalBlankTiles += areaStats.blankTiles;
    totalStats.totalNonBlankTiles += areaStats.nonBlankTiles;
    totalStats.areaStats.push({
        name: area.name,
        index: areaIndex,
        totalTiles: areaStats.totalTiles,
        blankTiles: areaStats.blankTiles,
        nonBlankTiles: areaStats.nonBlankTiles
    });
});

masterTextStream.write('\n' + '='.repeat(120) + '\n');
masterTextStream.write('GLOBAL SUMMARY\n');
masterTextStream.write('='.repeat(120) + '\n');
masterTextStream.write('Total areas: ' + totalStats.totalAreas + '\n');
masterTextStream.write('Total tiles: ' + totalStats.totalTiles + '\n');
masterTextStream.write('Total non-blank tiles: ' + totalStats.totalNonBlankTiles + '\n');
masterTextStream.write('Total blank tiles: ' + totalStats.totalBlankTiles + '\n');
masterTextStream.end();

// Write master JSON summary
const summaryJsonPath = path.join(outputDir, 'summary.json');
fs.writeFileSync(summaryJsonPath, JSON.stringify(totalStats, null, 2));

// Write tile format documentation
const formatDocPath = path.join(outputDir, 'TILE_FORMAT.md');
const formatDoc = `# Shadow Tower Tile Format Documentation

## Overview
This document describes the binary format of tiles in Shadow Tower.

## Tile Structure

Each tile is **12 bytes (0x0C)** in size.

### Binary Layout

\`\`\`
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
\`\`\`

## Blank Detection

A tile is considered "blank" (unused) when:
- Byte at offset 0x08 (tileX) equals 0xFF

## Tile Counts

- **Tiles per area**: 512 (0x200)
- **Total tiles in game**: ${totalStats.totalTiles}
- **Non-blank tiles**: ${totalStats.totalNonBlankTiles}
- **Blank tiles**: ${totalStats.totalBlankTiles}

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
- \`binary/<area_name>.bin\` - All 512 tiles concatenated (6144 bytes = 512 * 12)
- \`binary/<area_name>/tile_XXXX.bin\` - Individual tile binaries (12 bytes each)

### Text Dumps
- \`text/<area_name>.txt\` - Human-readable tile data per area
- \`all_tiles.txt\` - All non-blank tiles from all areas

### JSON Data
- \`json/<area_name>.json\` - Structured tile data per area
- \`summary.json\` - Statistics and summary for all areas

## Usage for Modding

### Reading Tiles
\`\`\`javascript
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
\`\`\`

### Writing Tiles
\`\`\`javascript
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
\`\`\`

## Generated: ${new Date().toISOString()}
`;

fs.writeFileSync(formatDocPath, formatDoc);

console.log('\n' + '='.repeat(80));
console.log('DUMP COMPLETE');
console.log('='.repeat(80));
console.log('');
console.log('Statistics:');
console.log('  Total areas processed: ' + totalStats.totalAreas);
console.log('  Total tiles: ' + totalStats.totalTiles);
console.log('  Non-blank tiles: ' + totalStats.totalNonBlankTiles + ' (' + ((totalStats.totalNonBlankTiles / totalStats.totalTiles) * 100).toFixed(2) + '%)');
console.log('  Blank tiles: ' + totalStats.totalBlankTiles + ' (' + ((totalStats.totalBlankTiles / totalStats.totalTiles) * 100).toFixed(2) + '%)');
console.log('');
console.log('Output files:');
console.log('  Master text: ' + masterTextPath);
console.log('  Summary JSON: ' + summaryJsonPath);
console.log('  Format docs: ' + formatDocPath);
console.log('  Per-area text: ' + textDir + '/<area_name>.txt');
console.log('  Per-area JSON: ' + jsonDir + '/<area_name>.json');
console.log('  Per-area binary: ' + binaryDir + '/<area_name>.bin');
console.log('  Individual tiles: ' + binaryDir + '/<area_name>/tile_XXXX.bin');
console.log('');
console.log('All data dumped to: ' + path.resolve(outputDir) + path.sep);
console.log('');
