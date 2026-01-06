#!/usr/bin/env node
'use strict';

// Analyze dump.mem VRAM binary file from root directory
// PSX VRAM is 1024×512 pixels @ 16-bit = 2,097,152 bytes

const fs = require('fs');
const path = require('path');

const VRAM_FILE = 'dump.mem';
const VRAM_WIDTH = 1024;
const VRAM_HEIGHT = 512;
const VRAM_SIZE = VRAM_WIDTH * VRAM_HEIGHT * 2; // 16-bit per pixel

console.log('=== PSX VRAM Dump Analysis ===\n');

// Check if file exists
if (!fs.existsSync(VRAM_FILE)) {
  console.error(`ERROR: ${VRAM_FILE} not found in root directory`);
  process.exit(1);
}

const stats = fs.statSync(VRAM_FILE);
console.log(`File: ${VRAM_FILE}`);
console.log(`Size: ${stats.size.toLocaleString()} bytes`);
console.log(`Expected: ${VRAM_SIZE.toLocaleString()} bytes (PSX VRAM)`);

if (stats.size !== VRAM_SIZE) {
  console.log(`⚠ WARNING: File size doesn't match PSX VRAM size`);
  console.log(`  Difference: ${(stats.size - VRAM_SIZE).toLocaleString()} bytes`);
} else {
  console.log(`✓ File size matches PSX VRAM exactly`);
}

// Read the VRAM dump
const vram = fs.readFileSync(VRAM_FILE);

console.log('\n=== Memory Usage Analysis ===\n');

// Analyze memory usage patterns
let nonZeroBlocks = 0;
let totalNonZeroBytes = 0;
const blockSize = 1024; // 1KB blocks
const totalBlocks = Math.floor(vram.length / blockSize);

for (let i = 0; i < totalBlocks; i++) {
  let hasData = false;
  for (let j = 0; j < blockSize; j++) {
    const byte = vram[i * blockSize + j];
    if (byte !== 0) {
      hasData = true;
      totalNonZeroBytes++;
    }
  }
  if (hasData) {
    nonZeroBlocks++;
  }
}

const usagePercent = (totalNonZeroBytes / vram.length * 100).toFixed(2);
const blockUsagePercent = (nonZeroBlocks / totalBlocks * 100).toFixed(2);

console.log(`Non-zero bytes: ${totalNonZeroBytes.toLocaleString()} / ${vram.length.toLocaleString()} (${usagePercent}%)`);
console.log(`Non-empty 1KB blocks: ${nonZeroBlocks} / ${totalBlocks} (${blockUsagePercent}%)`);

// Analyze texture page usage (256×256 = 128KB each)
const texturePageSize = 256 * 256 * 2; // 128KB
const totalPages = Math.floor(vram.length / texturePageSize);

console.log('\n=== Texture Page Analysis ===\n');
console.log(`Texture page size: ${(texturePageSize / 1024).toFixed(0)}KB`);
console.log(`Total texture pages: ${totalPages}`);

let usedPages = 0;
for (let i = 0; i < totalPages; i++) {
  let hasData = false;
  const pageStart = i * texturePageSize;
  const pageEnd = pageStart + texturePageSize;
  
  // Sample every 256th byte to check if page has data
  for (let j = pageStart; j < pageEnd && !hasData; j += 256) {
    if (vram[j] !== 0) {
      hasData = true;
    }
  }
  
  if (hasData) {
    usedPages++;
    console.log(`  Page ${i}: Used`);
  } else {
    console.log(`  Page ${i}: Empty`);
  }
}

console.log(`\nUsed texture pages: ${usedPages} / ${totalPages}`);
console.log(`Estimated texture memory: ${(usedPages * texturePageSize / 1024).toFixed(0)}KB`);

// Calculate framebuffer estimate (typical PSX framebuffer positions)
console.log('\n=== Estimated Memory Layout ===\n');

const framebuffer1Size = 320 * 240 * 2; // Typical PSX resolution
const framebuffer2Size = 320 * 240 * 2;
const estimatedFramebuffers = framebuffer1Size + framebuffer2Size;

console.log(`Framebuffers (estimated): ${(estimatedFramebuffers / 1024).toFixed(0)}KB (2× 320×240)`);
console.log(`Texture pages used: ${(usedPages * texturePageSize / 1024).toFixed(0)}KB`);
console.log(`Other data: ${((totalNonZeroBytes - usedPages * texturePageSize) / 1024).toFixed(0)}KB`);
console.log(`Free VRAM: ${((vram.length - totalNonZeroBytes) / 1024).toFixed(0)}KB`);

// Analyze potential item texture usage
console.log('\n=== Item Texture Estimation ===\n');

// If we assume average 15KB per item model
const avgItemModelSize = 15 * 1024; // 15KB
const estimatedItemModels = Math.floor((usedPages * texturePageSize) / avgItemModelSize);

console.log(`If average item model = 15KB:`);
console.log(`  Current capacity: ${estimatedItemModels} models`);
console.log(`  Safe limit (75%): ${Math.floor(estimatedItemModels * 0.75)} models`);
console.log(`  Current limit in code: 12 models`);

if (estimatedItemModels >= 12) {
  console.log(`  ✓ Current limit (12) is SAFE`);
} else {
  console.log(`  ⚠ Current limit (12) might be too high!`);
}

// Look for repeating patterns (potential texture data)
console.log('\n=== Pattern Analysis ===\n');

let patternCount = 0;
const patternSize = 16;
const patterns = new Map();

for (let i = 0; i < vram.length - patternSize; i += patternSize) {
  const pattern = vram.slice(i, i + patternSize).toString('hex');
  if (pattern !== '00000000000000000000000000000000') {
    patterns.set(pattern, (patterns.get(pattern) || 0) + 1);
  }
}

const repeatedPatterns = Array.from(patterns.entries())
  .filter(([p, count]) => count > 1)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 5);

console.log(`Unique non-zero 16-byte patterns: ${patterns.size}`);
console.log(`Most common patterns (potential textures):`);
repeatedPatterns.forEach(([pattern, count], idx) => {
  console.log(`  ${idx + 1}. ${pattern.substring(0, 32)}... (${count} occurrences)`);
});

console.log('\n=== Recommendations ===\n');
console.log(`Based on this VRAM dump analysis:`);
console.log(`1. Actual VRAM usage: ${usagePercent}%`);
console.log(`2. Texture pages in use: ${usedPages} / ${totalPages}`);
console.log(`3. Current limit of 12 models appears ${estimatedItemModels >= 12 ? 'SAFE' : 'RISKY'}`);
console.log(`4. Recommended safe limit: ${Math.floor(estimatedItemModels * 0.75)} models (75% capacity)`);
console.log(`5. Maximum theoretical: ${estimatedItemModels} models (100% of texture memory)`);

console.log('\n=== Analysis Complete ===');
