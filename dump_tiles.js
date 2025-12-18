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
    
    // Generate visual tile map image with fine-grained positioning
    try {
        const { createCanvas } = require('@napi-rs/canvas');
        
        // Find bounds of tiles using world coordinates for fine positioning
        let minPosX = Infinity, maxPosX = -Infinity;
        let minPosY = Infinity, maxPosY = -Infinity;
        let minPosZ = Infinity, maxPosZ = -Infinity;
        
        const nonBlankTiles = areaStats.tiles.filter(tile => !tile.isBlank);
        
        nonBlankTiles.forEach(tile => {
            if (tile.posX < minPosX) minPosX = tile.posX;
            if (tile.posX > maxPosX) maxPosX = tile.posX;
            if (tile.posY < minPosY) minPosY = tile.posY;
            if (tile.posY > maxPosY) maxPosY = tile.posY;
            if (tile.posZ < minPosZ) minPosZ = tile.posZ;
            if (tile.posZ > maxPosZ) maxPosZ = tile.posZ;
        });
        
        if (nonBlankTiles.length > 0 && minPosX !== Infinity) {
            // Calculate world space dimensions
            const worldWidth = maxPosX - minPosX;
            const worldHeight = maxPosZ - minPosZ;
            const heightRange = maxPosY - minPosY;
            
            // Determine scale to fit canvas while maintaining detail
            // Target canvas size: 2000-3000 pixels for better resolution
            const maxCanvasSize = 2500;
            const margin = 100;
            
            let scale;
            if (worldWidth > worldHeight) {
                scale = (maxCanvasSize - 2 * margin) / worldWidth;
            } else {
                scale = (maxCanvasSize - 2 * margin) / worldHeight;
            }
            
            // Ensure tiles are at least 20 pixels wide for visibility and numbering
            const minTileSize = 20;
            const avgTileSpacing = worldWidth / Math.max(1, nonBlankTiles.length / 10);
            if (scale * avgTileSpacing < minTileSize) {
                scale = minTileSize / avgTileSpacing;
            }
            
            const canvasWidth = Math.ceil(worldWidth * scale) + 2 * margin;
            const canvasHeight = Math.ceil(worldHeight * scale) + 2 * margin + 150; // Extra space for legend
            
            const canvas = createCanvas(canvasWidth, canvasHeight);
            const ctx = canvas.getContext('2d');
            
            // Background
            ctx.fillStyle = '#0a0a0a';
            ctx.fillRect(0, 0, canvasWidth, canvasHeight);
            
            // Draw grid lines (every 1000 world units)
            ctx.strokeStyle = '#1a1a1a';
            ctx.lineWidth = 1;
            const gridStep = 1000;
            
            for (let wx = Math.floor(minPosX / gridStep) * gridStep; wx <= maxPosX; wx += gridStep) {
                const x = margin + (wx - minPosX) * scale;
                ctx.beginPath();
                ctx.moveTo(x, margin);
                ctx.lineTo(x, canvasHeight - margin - 150);
                ctx.stroke();
            }
            
            for (let wz = Math.floor(minPosZ / gridStep) * gridStep; wz <= maxPosZ; wz += gridStep) {
                const y = margin + (wz - minPosZ) * scale;
                ctx.beginPath();
                ctx.moveTo(margin, y);
                ctx.lineTo(canvasWidth - margin, y);
                ctx.stroke();
            }
            
            // Draw tiles with fine positioning
            nonBlankTiles.forEach(tile => {
                const x = margin + (tile.posX - minPosX) * scale;
                const y = margin + (tile.posZ - minPosZ) * scale;
                
                // Determine tile size based on scale
                const tileSize = Math.max(16, Math.min(40, scale * 10));
                
                // Color based on posY (height/elevation)
                const heightNorm = heightRange > 0 ? (tile.posY - minPosY) / heightRange : 0.5;
                const hue = 180 + heightNorm * 120; // Blue (low) to green (high)
                const saturation = 70;
                const lightness = 40 + heightNorm * 30;
                
                // Draw tile rectangle
                ctx.fillStyle = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
                ctx.fillRect(x - tileSize/2, y - tileSize/2, tileSize, tileSize);
                
                // Draw border
                ctx.strokeStyle = '#ffffff';
                ctx.lineWidth = 1;
                ctx.strokeRect(x - tileSize/2, y - tileSize/2, tileSize, tileSize);
                
                // Draw rotation indicator (small line from center)
                if (tile.rotationZ > 0) {
                    const angle = (tile.rotationZ / 65536) * 2 * Math.PI;
                    const lineLength = tileSize / 3;
                    ctx.strokeStyle = '#ffff00';
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    ctx.moveTo(x, y);
                    ctx.lineTo(x + Math.cos(angle) * lineLength, y + Math.sin(angle) * lineLength);
                    ctx.stroke();
                }
                
                // Draw object index number
                ctx.fillStyle = '#ffffff';
                ctx.strokeStyle = '#000000';
                ctx.lineWidth = 3;
                ctx.font = `bold ${Math.max(8, Math.min(14, tileSize/2))}px Arial`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                
                const text = tile.index.toString();
                ctx.strokeText(text, x, y);
                ctx.fillText(text, x, y);
            });
            
            // Draw title and info
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 20px Arial';
            ctx.textAlign = 'left';
            ctx.fillText(area.name, 10, 30);
            
            ctx.font = '14px Arial';
            ctx.fillText(`Non-blank Tiles: ${areaStats.nonBlankTiles} / ${areaStats.totalTiles}`, 10, 55);
            ctx.fillText(`World Dimensions: ${worldWidth} x ${worldHeight} units`, 10, 75);
            ctx.fillText(`Scale: ${scale.toFixed(4)} pixels/unit`, 10, 95);
            
            // Draw coordinate ranges at bottom
            const legendY = canvasHeight - 120;
            ctx.fillStyle = '#aaaaaa';
            ctx.font = '12px monospace';
            ctx.fillText(`PosX Range: ${minPosX} to ${maxPosX}`, 10, legendY);
            ctx.fillText(`PosY Range: ${minPosY} to ${maxPosY} (height)`, 10, legendY + 20);
            ctx.fillText(`PosZ Range: ${minPosZ} to ${maxPosZ}`, 10, legendY + 40);
            
            // Draw color legend
            ctx.font = 'bold 12px Arial';
            ctx.fillStyle = '#ffffff';
            ctx.fillText('Height Legend:', 10, legendY + 70);
            
            const legendBarWidth = 200;
            const legendBarHeight = 20;
            const legendX = 120;
            
            // Draw gradient bar
            for (let i = 0; i < legendBarWidth; i++) {
                const h = i / legendBarWidth;
                const hue = 180 + h * 120;
                const lightness = 40 + h * 30;
                ctx.fillStyle = `hsl(${hue}, 70%, ${lightness}%)`;
                ctx.fillRect(legendX + i, legendY + 60, 1, legendBarHeight);
            }
            
            ctx.strokeStyle = '#ffffff';
            ctx.strokeRect(legendX, legendY + 60, legendBarWidth, legendBarHeight);
            
            ctx.fillStyle = '#aaaaaa';
            ctx.font = '10px Arial';
            ctx.fillText(`Low (${minPosY})`, legendX, legendY + 95);
            ctx.fillText(`High (${maxPosY})`, legendX + legendBarWidth - 60, legendY + 95);
            
            // Save image
            const imageBuffer = canvas.toBuffer('image/png');
            const imagePath = path.join(imagesDir, area.name + '.png');
            fs.writeFileSync(imagePath, imageBuffer);
            
            console.log(`  Generated image: ${Math.ceil(worldWidth * scale)}x${Math.ceil(worldHeight * scale)} (scale: ${scale.toFixed(4)})`);
        }
    } catch (error) {
        console.log('  (Image generation skipped - canvas not available: ' + error.message + ')');
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
