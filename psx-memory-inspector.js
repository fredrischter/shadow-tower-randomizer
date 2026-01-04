#!/usr/bin/env node
'use strict';

/**
 * PSX Memory Inspector Tool
 * 
 * Analyzes Shadow Tower randomization output to identify memory issues
 * Usage: node psx-memory-inspector.js <path-to-spoilers-folder>
 */

const fs = require('fs');
const path = require('path');

function analyzeMemory(spoilersPath) {
  console.log("=== PSX Memory Inspector ===\n");
  
  // Read changeset to understand what was modified
  const changesetPath = path.join(spoilersPath, 'changeset.json');
  if (!fs.existsSync(changesetPath)) {
    console.error("ERROR: changeset.json not found in " + spoilersPath);
    process.exit(1);
  }
  
  const changeset = JSON.parse(fs.readFileSync(changesetPath, 'utf8'));
  
  // Read readable.txt for area analysis
  const readablePath = path.join(spoilersPath, 'readable.txt');
  if (!fs.existsSync(readablePath)) {
    console.error("ERROR: readable.txt not found in " + spoilersPath);
    process.exit(1);
  }
  
  const readableContent = fs.readFileSync(readablePath, 'utf8');
  
  // Parse memory usage from maps
  const memoryPattern = /Item Memory used (\d+)/g;
  let matches;
  const memoryUsages = [];
  
  while ((matches = memoryPattern.exec(readableContent)) !== null) {
    memoryUsages.push(parseInt(matches[1]));
  }
  
  // Analyze distribution
  const histogram = {
    '0-4': 0,
    '5-8': 0,
    '9-12': 0,
    '13-15': 0,
    '16': 0,
    'OVERFLOW': 0
  };
  
  memoryUsages.forEach(usage => {
    if (usage <= 4) histogram['0-4']++;
    else if (usage <= 8) histogram['5-8']++;
    else if (usage <= 12) histogram['9-12']++;
    else if (usage < 16) histogram['13-15']++;
    else if (usage === 16) histogram['16']++;
    else histogram['OVERFLOW']++;
  });
  
  // Statistics
  const total = memoryUsages.length;
  const average = memoryUsages.reduce((a, b) => a + b, 0) / total;
  const max = Math.max(...memoryUsages);
  const min = Math.min(...memoryUsages);
  
  // Display results
  console.log("Memory Usage Statistics:");
  console.log("========================");
  console.log(`Total areas analyzed: ${total}`);
  console.log(`Average memory: ${average.toFixed(2)}/16 models`);
  console.log(`Maximum memory: ${max}/16 models`);
  console.log(`Minimum memory: ${min}/16 models`);
  console.log();
  
  console.log("Distribution:");
  console.log("-------------");
  Object.entries(histogram).forEach(([range, count]) => {
    const percentage = (count / total * 100).toFixed(1);
    const bar = '█'.repeat(Math.floor(count / total * 50));
    const color = range === 'OVERFLOW' ? '\x1b[31m' : 
                  range === '16' ? '\x1b[33m' : 
                  range === '13-15' ? '\x1b[33m' : '\x1b[32m';
    const reset = '\x1b[0m';
    console.log(`${range.padEnd(8)} ${color}${bar}${reset} ${count} areas (${percentage}%)`);
  });
  console.log();
  
  // Risk assessment
  const criticalAreas = histogram['16'] + histogram['OVERFLOW'];
  const warningAreas = histogram['13-15'];
  
  if (histogram['OVERFLOW'] > 0) {
    console.error("\x1b[31m!!! CRITICAL: MEMORY OVERFLOW DETECTED !!!\x1b[0m");
    console.error(`${histogram['OVERFLOW']} area(s) EXCEED the 16-model limit`);
    console.error("Texture corruption is VERY LIKELY in these areas!\n");
  } else if (criticalAreas > 0) {
    console.warn("\x1b[33m⚠ WARNING: High memory usage detected\x1b[0m");
    console.warn(`${criticalAreas} area(s) at maximum capacity (16/16 models)`);
    console.warn("Corruption may occur if the game tries to load additional items\n");
  } else if (warningAreas > 0) {
    console.log("\x1b[33m⚠ Caution: Some areas approaching limit\x1b[0m");
    console.log(`${warningAreas} area(s) using 13-15 models`);
    console.log("Should be safe, but watch for issues\n");
  } else {
    console.log("\x1b[32m✓ Memory usage looks healthy!\x1b[0m");
    console.log("All areas well within limits\n");
  }
  
  // Find areas with specific issues
  console.log("Detailed Area Analysis:");
  console.log("=======================");
  
  // Extract area-specific info from readable.txt
  const areaPattern = /=== ([^=]+) ===([\s\S]*?)(?==== |$)/g;
  let areaMatch;
  const problemAreas = [];
  
  while ((areaMatch = areaPattern.exec(readableContent)) !== null) {
    const areaName = areaMatch[1].trim();
    const areaContent = areaMatch[2];
    
    // Extract memory usage for this specific area
    const memMatch = /Item Memory used (\d+)/.exec(areaContent);
    if (memMatch) {
      const memory = parseInt(memMatch[1]);
      
      if (memory >= 13) {
        // Extract item details
        const itemPattern = /Collectable.*?type=(\w+)/g;
        const spawnPattern = /drop1=(\w+)|drop2=(\w+)|drop3=(\w+)/g;
        
        let items = new Set();
        let itemMatch;
        while ((itemMatch = itemPattern.exec(areaContent)) !== null) {
          if (itemMatch[1] && itemMatch[1] !== 'null') items.add(itemMatch[1]);
        }
        while ((itemMatch = spawnPattern.exec(areaContent)) !== null) {
          for (let i = 1; i <= 3; i++) {
            if (itemMatch[i] && itemMatch[i] !== 'null') items.add(itemMatch[i]);
          }
        }
        
        problemAreas.push({
          name: areaName,
          memory: memory,
          itemCount: items.size
        });
      }
    }
  }
  
  if (problemAreas.length > 0) {
    problemAreas.sort((a, b) => b.memory - a.memory);
    
    console.log("\nHigh-Memory Areas (13+ models):");
    console.log("--------------------------------");
    problemAreas.forEach(area => {
      const status = area.memory > 16 ? '\x1b[31mOVERFLOW\x1b[0m' :
                     area.memory === 16 ? '\x1b[33mMAXIMUM\x1b[0m' :
                     '\x1b[33mWARNING\x1b[0m';
      console.log(`${status} ${area.name.padEnd(40)} ${area.memory}/16 models`);
    });
  } else {
    console.log("No high-memory areas found!");
  }
  
  console.log();
  
  // Recommendations
  console.log("Recommendations:");
  console.log("================");
  
  if (histogram['OVERFLOW'] > 0) {
    console.log("1. ❌ DO NOT USE this randomization - texture corruption likely");
    console.log("2. Re-run with memoryConservative: true parameter");
    console.log("3. Try different seed");
    console.log("4. Reduce item randomization intensity");
  } else if (criticalAreas > 0) {
    console.log("1. ⚠ USE WITH CAUTION - may have issues");
    console.log("2. Test affected areas in emulator first");
    console.log("3. Consider re-rolling with different seed");
    console.log("4. Monitor VRAM usage in DuckStation");
  } else if (warningAreas > 0) {
    console.log("1. ✓ Should be safe to use");
    console.log("2. Keep an eye on high-memory areas in-game");
    console.log("3. Report any texture issues with seed/area details");
  } else {
    console.log("1. ✓ This randomization looks great!");
    console.log("2. Memory usage is well-optimized");
    console.log("3. Minimal risk of texture corruption");
  }
  
  console.log();
  
  // Generate report file
  const reportPath = path.join(spoilersPath, 'memory-report.txt');
  const reportContent = `
PSX Memory Analysis Report
Generated: ${new Date().toISOString()}

=== STATISTICS ===
Total areas: ${total}
Average memory: ${average.toFixed(2)}/16 models
Maximum memory: ${max}/16 models
Minimum memory: ${min}/16 models

=== DISTRIBUTION ===
0-4 models:   ${histogram['0-4']} areas (${(histogram['0-4']/total*100).toFixed(1)}%)
5-8 models:   ${histogram['5-8']} areas (${(histogram['5-8']/total*100).toFixed(1)}%)
9-12 models:  ${histogram['9-12']} areas (${(histogram['9-12']/total*100).toFixed(1)}%)
13-15 models: ${histogram['13-15']} areas (${(histogram['13-15']/total*100).toFixed(1)}%)
16 models:    ${histogram['16']} areas (${(histogram['16']/total*100).toFixed(1)}%)
OVERFLOW:     ${histogram['OVERFLOW']} areas (${(histogram['OVERFLOW']/total*100).toFixed(1)}%)

=== HIGH-MEMORY AREAS ===
${problemAreas.map(a => `${a.name.padEnd(40)} ${a.memory}/16 models`).join('\n')}

=== RISK ASSESSMENT ===
${histogram['OVERFLOW'] > 0 ? 'CRITICAL: Memory overflow detected - DO NOT USE' :
  criticalAreas > 0 ? 'WARNING: Areas at maximum capacity - use with caution' :
  warningAreas > 0 ? 'CAUTION: Some areas near limit - should be safe' :
  'SAFE: All areas within limits'}
`;
  
  fs.writeFileSync(reportPath, reportContent);
  console.log(`Full report saved to: ${reportPath}`);
  console.log();
}

// Main execution
if (process.argv.length < 3) {
  console.log("Usage: node psx-memory-inspector.js <path-to-spoilers-folder>");
  console.log("Example: node psx-memory-inspector.js ./generated/bonanza/spoilers");
  process.exit(1);
}

const spoilersPath = process.argv[2];
if (!fs.existsSync(spoilersPath)) {
  console.error(`ERROR: Folder not found: ${spoilersPath}`);
  process.exit(1);
}

analyzeMemory(spoilersPath);
