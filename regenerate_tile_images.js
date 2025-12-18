#!/usr/bin/env node
'use strict';

// Regenerate tile images from existing JSON data with fine-grained positioning
// This script reads the JSON files created by dump_tiles.js and regenerates
// the images with improved positioning and object numbering

const fs = require('fs');
const path = require('path');

console.log('=== Shadow Tower Tile Image Regenerator ===\n');

const jsonDir = path.join('tiles-dump', 'json');
const imagesDir = path.join('tiles-dump', 'images');

if (!fs.existsSync(jsonDir)) {
    console.error('ERROR: tiles-dump/json directory not found');
    console.error('Please run dump_tiles.js first to generate tile data');
    process.exit(1);
}

// Ensure images directory exists
if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
}

// Get all JSON files
const jsonFiles = fs.readdirSync(jsonDir).filter(f => f.endsWith('.json') && f !== 'summary.json');

console.log(`Found ${jsonFiles.length} area JSON files to process\n`);

// Process each area
let processedCount = 0;
let skippedCount = 0;

jsonFiles.forEach((jsonFile, index) => {
    const areaJsonPath = path.join(jsonDir, jsonFile);
    const areaName = jsonFile.replace('.json', '');
    
    console.log(`Processing ${index + 1}/${jsonFiles.length}: ${areaName}`);
    
    try {
        const areaStats = JSON.parse(fs.readFileSync(areaJsonPath, 'utf8'));
        
        // Find tile grid bounds (major positioning)
        let minTileX = Infinity, maxTileX = -Infinity;
        let minTileZ = Infinity, maxTileZ = -Infinity;
        let minPosY = Infinity, maxPosY = -Infinity;
        
        const nonBlankTiles = areaStats.tiles.filter(tile => !tile.isBlank);
        
        // Calculate grid boundaries and world coordinate ranges per tile
        const tileWorldRanges = {};
        nonBlankTiles.forEach(tile => {
            if (tile.tileX < minTileX) minTileX = tile.tileX;
            if (tile.tileX > maxTileX) maxTileX = tile.tileX;
            if (tile.tileZ < minTileZ) minTileZ = tile.tileZ;
            if (tile.tileZ > maxTileZ) maxTileZ = tile.tileZ;
            if (tile.posY < minPosY) minPosY = tile.posY;
            if (tile.posY > maxPosY) maxPosY = tile.posY;
            
            // Track world coordinate range for each grid tile
            const key = `${tile.tileX}_${tile.tileZ}`;
            if (!tileWorldRanges[key]) {
                tileWorldRanges[key] = {
                    minPosX: tile.posX, maxPosX: tile.posX,
                    minPosZ: tile.posZ, maxPosZ: tile.posZ
                };
            } else {
                if (tile.posX < tileWorldRanges[key].minPosX) tileWorldRanges[key].minPosX = tile.posX;
                if (tile.posX > tileWorldRanges[key].maxPosX) tileWorldRanges[key].maxPosX = tile.posX;
                if (tile.posZ < tileWorldRanges[key].minPosZ) tileWorldRanges[key].minPosZ = tile.posZ;
                if (tile.posZ > tileWorldRanges[key].maxPosZ) tileWorldRanges[key].maxPosZ = tile.posZ;
            }
        });
        
        if (nonBlankTiles.length > 0 && minTileX !== Infinity) {
            const { createCanvas } = require('@napi-rs/canvas');
            
            // Calculate grid dimensions
            const gridWidth = maxTileX - minTileX + 1;
            const gridHeight = maxTileZ - minTileZ + 1;
            const heightRange = maxPosY - minPosY;
            
            // Tile size: large enough to show fine offsets and numbering clearly
            const baseTileSize = 60; // pixels per grid tile
            const margin = 80;
            
            const canvasWidth = gridWidth * baseTileSize + 2 * margin;
            const canvasHeight = gridHeight * baseTileSize + 2 * margin + 120;
            
            const canvas = createCanvas(canvasWidth, canvasHeight);
            const ctx = canvas.getContext('2d');
            
            // Background
            ctx.fillStyle = '#0a0a0a';
            ctx.fillRect(0, 0, canvasWidth, canvasHeight);
            
            // Draw tile grid
            ctx.strokeStyle = '#2a2a2a';
            ctx.lineWidth = 1;
            for (let x = 0; x <= gridWidth; x++) {
                ctx.beginPath();
                ctx.moveTo(margin + x * baseTileSize, margin);
                ctx.lineTo(margin + x * baseTileSize, margin + gridHeight * baseTileSize);
                ctx.stroke();
            }
            for (let z = 0; z <= gridHeight; z++) {
                ctx.beginPath();
                ctx.moveTo(margin, margin + z * baseTileSize);
                ctx.lineTo(margin + gridWidth * baseTileSize, margin + z * baseTileSize);
                ctx.stroke();
            }
            
            // Draw grid labels
            ctx.fillStyle = '#555555';
            ctx.font = '10px Arial';
            ctx.textAlign = 'center';
            for (let x = 0; x <= gridWidth; x++) {
                const tileX = minTileX + x;
                ctx.fillText(tileX.toString(), margin + x * baseTileSize, margin - 5);
            }
            ctx.textAlign = 'right';
            ctx.textBaseline = 'middle';
            for (let z = 0; z <= gridHeight; z++) {
                const tileZ = minTileZ + z;
                ctx.fillText(tileZ.toString(), margin - 5, margin + z * baseTileSize);
            }
            
            // Draw tiles with fine positioning offsets
            nonBlankTiles.forEach(tile => {
                // Major position: tile grid coordinates
                const gridX = margin + (tile.tileX - minTileX) * baseTileSize + baseTileSize / 2;
                const gridZ = margin + (tile.tileZ - minTileZ) * baseTileSize + baseTileSize / 2;
                
                // Minor position: world coordinate offset within the tile
                // Calculate offset as percentage of tile's world coordinate range
                const key = `${tile.tileX}_${tile.tileZ}`;
                const range = tileWorldRanges[key];
                const worldRangeX = range.maxPosX - range.minPosX;
                const worldRangeZ = range.maxPosZ - range.minPosZ;
                
                // Offset within +/- 40% of tile size to show fine positioning
                const maxOffset = baseTileSize * 0.4;
                let offsetX = 0, offsetZ = 0;
                if (worldRangeX > 0) {
                    offsetX = ((tile.posX - range.minPosX) / worldRangeX - 0.5) * 2 * maxOffset;
                }
                if (worldRangeZ > 0) {
                    offsetZ = ((tile.posZ - range.minPosZ) / worldRangeZ - 0.5) * 2 * maxOffset;
                }
                
                const x = gridX + offsetX;
                const z = gridZ + offsetZ;
                
                // Object size (smaller than grid tile to fit multiple objects)
                const objSize = Math.min(24, baseTileSize * 0.35);
                
                // Color based on posY (height/elevation)
                const heightNorm = heightRange > 0 ? (tile.posY - minPosY) / heightRange : 0.5;
                const hue = 180 + heightNorm * 120; // Blue (low) to green (high)
                const saturation = 70;
                const lightness = 45 + heightNorm * 25;
                
                // Draw object circle
                ctx.fillStyle = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
                ctx.beginPath();
                ctx.arc(x, z, objSize / 2, 0, 2 * Math.PI);
                ctx.fill();
                
                // Draw border
                ctx.strokeStyle = '#ffffff';
                ctx.lineWidth = 2;
                ctx.stroke();
                
                // Draw rotation indicator (small line from center)
                if (tile.rotationZ > 0) {
                    const angle = (tile.rotationZ / 65536) * 2 * Math.PI;
                    const lineLength = objSize / 2;
                    ctx.strokeStyle = '#ffff00';
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    ctx.moveTo(x, z);
                    ctx.lineTo(x + Math.cos(angle) * lineLength, z + Math.sin(angle) * lineLength);
                    ctx.stroke();
                }
                
                // Draw object index number
                ctx.fillStyle = '#ffffff';
                ctx.strokeStyle = '#000000';
                ctx.lineWidth = 3;
                ctx.font = `bold ${Math.min(12, objSize * 0.5)}px Arial`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                
                const text = tile.index.toString();
                ctx.strokeText(text, x, z);
                ctx.fillText(text, x, z);
            });
            
            // Draw title and info
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 18px Arial';
            ctx.textAlign = 'left';
            ctx.fillText(areaName, 10, 25);
            
            ctx.font = '12px Arial';
            ctx.fillText(`Tiles: ${areaStats.nonBlankTiles} / ${areaStats.totalTiles}`, 10, 45);
            ctx.fillText(`Grid: ${gridWidth} x ${gridHeight} (tileX: ${minTileX}-${maxTileX}, tileZ: ${minTileZ}-${maxTileZ})`, 10, 62);
            
            // Draw legend at bottom
            const legendY = canvasHeight - 90;
            ctx.fillStyle = '#aaaaaa';
            ctx.font = '11px Arial';
            ctx.fillText(`Height (posY): ${minPosY} to ${maxPosY}`, 10, legendY);
            ctx.fillText(`Position: Tile grid (major) + World coords (fine offset)`, 10, legendY + 18);
            
            // Draw color legend
            ctx.font = 'bold 11px Arial';
            ctx.fillStyle = '#ffffff';
            ctx.fillText('Height:', 10, legendY + 45);
            
            const legendBarWidth = 150;
            const legendBarHeight = 16;
            const legendX = 70;
            
            // Draw gradient bar
            for (let i = 0; i < legendBarWidth; i++) {
                const h = i / legendBarWidth;
                const hue = 180 + h * 120;
                const lightness = 45 + h * 25;
                ctx.fillStyle = `hsl(${hue}, 70%, ${lightness}%)`;
                ctx.fillRect(legendX + i, legendY + 35, 1, legendBarHeight);
            }
            
            ctx.strokeStyle = '#ffffff';
            ctx.strokeRect(legendX, legendY + 35, legendBarWidth, legendBarHeight);
            
            ctx.fillStyle = '#aaaaaa';
            ctx.font = '9px Arial';
            ctx.textAlign = 'left';
            ctx.fillText(`Low (${minPosY})`, legendX, legendY + 67);
            ctx.textAlign = 'right';
            ctx.fillText(`High (${maxPosY})`, legendX + legendBarWidth, legendY + 67);
            
            // Save image
            const imageBuffer = canvas.toBuffer('image/png');
            const imagePath = path.join(imagesDir, areaName + '.png');
            fs.writeFileSync(imagePath, imageBuffer);
            
            console.log(`  ✓ Generated: ${canvasWidth}x${canvasHeight}px (grid: ${gridWidth}x${gridHeight})`);
            processedCount++;
        } else {
            console.log('  ⊘ Skipped: No non-blank tiles');
            skippedCount++;
        }
    } catch (error) {
        console.log(`  ✗ Error: ${error.message}`);
        skippedCount++;
    }
});

console.log('\n' + '='.repeat(80));
console.log('IMAGE REGENERATION COMPLETE');
console.log('='.repeat(80));
console.log(`Successfully generated: ${processedCount} images`);
console.log(`Skipped: ${skippedCount} areas`);
console.log(`Output directory: ${path.resolve(imagesDir)}`);
console.log('');
