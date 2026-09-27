#!/usr/bin/env node
/**
 * find_template_parts.js
 * 
 * Identifies which FDAT.T_PARTS contain creature template data
 * Based on template regions found in FDAT_TEMPLATE_SEARCH_RESULTS.md
 */

const fs = require('fs');
const path = require('path');

const partsDir = './iso-dump/ST/COM/FDAT.T_PARTS';

// Template regions discovered in search
const templateRegions = [
  { offset: 0x255000, name: 'Primary Template Region' },
  { offset: 0x2f0000, name: 'Secondary Template Region' },
  { offset: 0x2f8000, name: 'Tertiary Template Region' },
  { offset: 0x305000, name: 'Quaternary Template Region' },
];

console.log('='.repeat(80));
console.log('CREATURE TEMPLATE PART IDENTIFICATION');
console.log('='.repeat(80));
console.log();

if (!fs.existsSync(partsDir)) {
  console.error(`ERROR: Parts directory not found: ${partsDir}`);
  console.error('Run unpack.js first to extract FDAT.T parts.');
  process.exit(1);
}

const files = fs.readdirSync(partsDir).filter(f => 
  f.endsWith('.T') && !f.includes('.tim')
);

console.log(`Found ${files.length} part files in ${partsDir}`);
console.log();

const results = [];

templateRegions.forEach(region => {
  console.log(`Searching for: ${region.name} (0x${region.offset.toString(16)})`);
  console.log('-'.repeat(80));
  
  let found = false;
  
  files.forEach(f => {
    const match = f.match(/(\d+) ([0-9a-f]+)-([0-9a-f]+)\.T$/i);
    if (match) {
      const partIndex = parseInt(match[1]);
      const start = parseInt(match[2], 16);
      const end = parseInt(match[3], 16);
      
      if (start <= region.offset && region.offset < end) {
        const offsetInPart = region.offset - start;
        const partSize = end - start;
        
        console.log(`✓ FOUND in Part ${partIndex}`);
        console.log(`  File: ${f}`);
        console.log(`  Part range: 0x${start.toString(16)} - 0x${end.toString(16)}`);
        console.log(`  Part size: ${partSize} bytes (0x${partSize.toString(16)})`);
        console.log(`  Template offset within part: ${offsetInPart} (0x${offsetInPart.toString(16)})`);
        
        results.push({
          name: region.name,
          offset: region.offset,
          partIndex: partIndex,
          partFile: f,
          partStart: start,
          partEnd: end,
          offsetInPart: offsetInPart
        });
        
        found = true;
      }
    }
  });
  
  if (!found) {
    console.log(`✗ NOT FOUND - offset 0x${region.offset.toString(16)} not in any part`);
  }
  
  console.log();
});

console.log('='.repeat(80));
console.log('SUMMARY');
console.log('='.repeat(80));
console.log();

if (results.length === 0) {
  console.log('No template regions found in FDAT.T parts.');
} else {
  console.log(`Found ${results.length} template region(s):`);
  console.log();
  
  results.forEach(r => {
    console.log(`${r.name}:`);
    console.log(`  FDAT.T offset: 0x${r.offset.toString(16)}`);
    console.log(`  Part index: ${r.partIndex}`);
    console.log(`  Part file: ${r.partFile}`);
    console.log(`  Offset in part: 0x${r.offsetInPart.toString(16)}`);
    console.log();
  });
  
  console.log('Part indices for implementation:');
  const indices = results.map(r => r.partIndex).sort((a, b) => a - b);
  console.log(`const CREATURE_TEMPLATE_PARTS = [${indices.join(', ')}];`);
  console.log();
  
  console.log('Code snippet for data_model.js:');
  console.log('```javascript');
  console.log('// Creature template parts in FDAT.T');
  console.log(`const CREATURE_TEMPLATE_PARTS = [${indices.join(', ')}];`);
  console.log();
  console.log('class CreatureTemplates {');
  console.log('  setup(FDAT) {');
  console.log('    this.template_files = [];');
  console.log('    this.templates = [];');
  console.log('    ');
  console.log('    CREATURE_TEMPLATE_PARTS.forEach((partIndex, i) => {');
  console.log('      const file = FDAT.files[partIndex];');
  console.log('      this.template_files.push(file);');
  console.log('      ');
  console.log('      // Parse templates from this part');
  console.log('      // (offset and count vary per part)');
  console.log('      this.parseTemplatesFromPart(file, i);');
  console.log('    });');
  console.log('  }');
  console.log('  ');
  console.log('  parseTemplatesFromPart(file, partIndex) {');
  console.log('    // Implementation based on part-specific offsets');
  console.log('  }');
  console.log('}');
  console.log('```');
}

console.log();
console.log('Next steps:');
console.log('1. Verify template data exists at these offsets (hex dump)');
console.log('2. Implement CreatureTemplates class in data_model.js');
console.log('3. Add to data_model.setup() to load template parts');
console.log('4. Add randomization logic in randomize.js');
console.log('5. CRITICAL: Call setCheckSum() on modified parts');
console.log();

// Also check specific template offsets
console.log('='.repeat(80));
console.log('SPECIFIC TEMPLATE VERIFICATION');
console.log('='.repeat(80));
console.log();

const knownTemplates = [
  { name: 'Acid Slime', offset: 0x2558e8, hp: 95, bal: 1, spr: 0 },
  { name: 'Blood Slime', offset: 0x2559a8, hp: 96, mel: 1, spr: 0 },
];

knownTemplates.forEach(template => {
  const result = results.find(r => 
    r.partStart <= template.offset && template.offset < r.partEnd
  );
  
  if (result) {
    const offsetInPart = template.offset - result.partStart;
    console.log(`${template.name} (HP=${template.hp}):`);
    console.log(`  FDAT.T offset: 0x${template.offset.toString(16)}`);
    console.log(`  Part ${result.partIndex}: offset 0x${offsetInPart.toString(16)}`);
    console.log(`  File: ${result.partFile}`);
    console.log();
  }
});

console.log('Done.');
