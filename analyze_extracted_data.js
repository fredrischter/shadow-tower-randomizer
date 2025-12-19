#!/usr/bin/env node
/**
 * Comprehensive analysis of extracted Shadow Tower data
 * Analyzes ST.EXE and M0X.T_PARTS folders for creature speed data
 */

const fs = require('fs');
const path = require('path');

// Analyze ST.EXE for speed-related patterns
function analyzeExecutable(exePath) {
  console.log('=== ST.EXE ANALYSIS ===\n');
  
  if (!fs.existsSync(exePath)) {
    console.log(`❌ ST.EXE not found at: ${exePath}\n`);
    return;
  }
  
  const data = fs.readFileSync(exePath);
  const size = data.length;
  
  console.log(`✓ File: ${exePath}`);
  console.log(`✓ Size: ${size} bytes (${(size/1024).toFixed(2)} KB)\n`);
  
  // PlayStation executable header check
  const magic = data.slice(0, 8).toString('ascii');
  console.log(`Header magic: "${magic}"`);
  
  if (!magic.includes('PS-X EXE')) {
    console.log('⚠️  Not a standard PS-X EXE file\n');
  } else {
    console.log('✓ Valid PlayStation executable\n');
  }
  
  // Search for potential speed constants
  console.log('=== Searching for Speed-Related Patterns ===\n');
  
  const potentialSpeeds = [];
  
  // Look for consecutive bytes that might be creature speed tables
  // Typical pattern: arrays of uint8 or uint16 values in range 1-255
  for (let i = 0; i < Math.min(data.length - 100, 400000); i++) {
    // Check for sequence of 5+ values in speed range
    let sequenceLength = 0;
    const values = [];
    
    for (let j = 0; j < 20; j++) {
      const val = data[i + j];
      if (val >= 5 && val <= 200) {
        sequenceLength++;
        values.push(val);
      } else if (val !== 0) {
        break;
      }
    }
    
    if (sequenceLength >= 5) {
      potentialSpeeds.push({
        offset: i,
        length: sequenceLength,
        values: values.slice(0, 10)
      });
      i += sequenceLength; // Skip past this sequence
    }
  }
  
  console.log(`Found ${potentialSpeeds.length} potential speed table sequences\n`);
  
  if (potentialSpeeds.length > 0) {
    console.log('Top 10 candidates (offset, length, first values):\n');
    potentialSpeeds.slice(0, 10).forEach(s => {
      console.log(`  0x${s.offset.toString(16).padStart(6,'0')}: ${s.length} bytes - [${s.values.join(', ')}...]`);
    });
  }
  
  console.log('\n');
}

// Analyze M0X.T_PARTS folders for animation/model data
function analyzeTPartsFolders(baseDir) {
  console.log('=== M0X.T_PARTS FOLDERS ANALYSIS ===\n');
  
  const chrFolders = ['CHR0', 'CHR1', 'CHR2', 'CHR3', 'CHR4'].map(c => path.join(baseDir, 'ST', c));
  const tPartsFolders = [];
  
  for (const chrDir of chrFolders) {
    if (!fs.existsSync(chrDir)) continue;
    
    const files = fs.readdirSync(chrDir);
    for (const file of files) {
      if (file.endsWith('_PARTS')) {
        tPartsFolders.push(path.join(chrDir, file));
      }
    }
  }
  
  console.log(`Found ${tPartsFolders.length} _PARTS folders\n`);
  
  for (const folder of tPartsFolders.slice(0, 5)) { // Analyze first 5
    console.log(`\n=== ${path.basename(folder)} ===`);
    analyzeTParts(folder);
  }
}

// Analyze individual T_PARTS folder
function analyzeTParts(partsDir) {
  if (!fs.existsSync(partsDir)) {
    console.log(`  ❌ Folder not found\n`);
    return;
  }
  
  const files = fs.readdirSync(partsDir).filter(f => {
    const stat = fs.statSync(path.join(partsDir, f));
    return stat.isFile() && stat.size > 0 && !f.endsWith('.tim');
  });
  
  console.log(`  Files (non-TIM, non-empty): ${files.length}`);
  
  // Categorize files
  const timFiles = [];
  const dataFiles = [];
  const otherFiles = [];
  
  for (const file of files.slice(0, 20)) { // First 20 files
    const filePath = path.join(partsDir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.size === 0) continue;
    
    const data = fs.readFileSync(filePath);
    
    // Check magic numbers
    const magic = data.readUInt32LE(0);
    
    if (magic === 0x10) { // TIM format
      timFiles.push({name: file, size: stat.size});
    } else {
      // Analyze first few bytes
      const preview = data.slice(0, Math.min(16, data.length));
      dataFiles.push({
        name: file,
        size: stat.size,
        magic: '0x' + magic.toString(16).padStart(8, '0'),
        preview: preview.toString('hex').match(/.{1,4}/g).join(' ')
      });
    }
  }
  
  console.log(`  TIM textures: ${timFiles.length}`);
  console.log(`  Data files: ${dataFiles.length}\n`);
  
  if (dataFiles.length > 0) {
    console.log(`  NON-TEXTURE DATA FILES:\n`);
    dataFiles.slice(0, 10).forEach(f => {
      console.log(`    ${f.name}`);
      console.log(`      Size: ${f.size} bytes`);
      console.log(`      Magic: ${f.magic}`);
      console.log(`      Preview: ${f.preview}`);
    });
  }
}

// Main execution
const exePath = process.argv[2] || 'iso-dump/ST.EXE';
const baseDir = process.argv[3] || 'iso-dump';

console.log('\n╔════════════════════════════════════════════════════════╗');
console.log('║  Shadow Tower Speed Data Investigation                ║');
console.log('║  Analyzing extracted ISO data                         ║');
console.log('╚════════════════════════════════════════════════════════╝\n');

analyzeExecutable(exePath);
analyzeTPartsFolders(baseDir);

console.log('\n=== INVESTIGATION SUMMARY ===\n');
console.log('Next steps:');
console.log('1. Review potential speed tables found in ST.EXE');
console.log('2. Examine non-texture data files in M0X.T_PARTS folders');
console.log('3. Look for repeating patterns that match creature counts');
console.log('4. Test modifications to identified candidates\n');
