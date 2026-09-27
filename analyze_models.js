#!/usr/bin/env node
// Analyze item model IDs and memory usage

require('./constants.js');
require('./game_data.js');

const itemData = global.GAME_DATA.items;
const models = new Map();

itemData.forEach((item, idx) => {
  const binParts = item.bin.trim().split(/\s+/);
  const modelByte = binParts[4];
  if (!models.has(modelByte)) {
    models.set(modelByte, []);
  }
  models.get(modelByte).push(item.name);
});

console.log('=== Shadow Tower Item Model Analysis ===\n');
console.log('Total items:', itemData.length);
console.log('Total unique model IDs:', models.size);
console.log('\nModel ID sharing (items per model):');

const sortedModels = Array.from(models.entries()).sort((a,b) => parseInt(a[0], 16) - parseInt(b[0], 16));

sortedModels.forEach(([model, items]) => {
  console.log(`Model 0x${model}: ${items.length} items`);
  if (items.length > 1) {
    console.log('  Items:', items.slice(0, 3).join(', '), items.length > 3 ? '...' : '');
  }
});

console.log('\n=== Memory Implications ===');
console.log('If each unique model uses ~15KB of VRAM:');
console.log('  - ' + models.size + ' unique models = ' + (models.size * 15) + 'KB total');
console.log('  - With 250KB available for items, max models: ~16');
console.log('\nCurrent limit in code: 16 unique models per area');
console.log('This seems reasonable IF:');
console.log('  1. All models are same size (~15KB)');
console.log('  2. No texture page sharing optimization');
console.log('  3. Conservative estimate of available VRAM');
