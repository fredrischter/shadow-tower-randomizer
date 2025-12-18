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
            const { createCanvas } = require('@napi-rs/canvas');
            
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
            ctx.fillText(areaName, 10, 30);
            
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
            const imagePath = path.join(imagesDir, areaName + '.png');
            fs.writeFileSync(imagePath, imageBuffer);
            
            console.log(`  ✓ Generated: ${Math.ceil(worldWidth * scale)}x${Math.ceil(worldHeight * scale)}px (scale: ${scale.toFixed(4)})`);
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
