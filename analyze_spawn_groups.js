#!/usr/bin/env node

/**
 * Spawn Group Analysis Tool
 * 
 * Analyzes spawn group (mutexGroup) values across all areas in Shadow Tower.
 * Helps understand spawn patterns, memory usage, and identify potential issues.
 * 
 * Usage:
 *   node analyze_spawn_groups.js [path/to/generated/preset/spoilers]
 * 
 * If no path provided, analyzes FDAT.T_PARTS if available.
 */

const fs = require('fs');
const path = require('path');

// Known spawn group values from reverse engineering
const KNOWN_GROUPS = {
  0x0e: { spawns: 6, description: '6 at once' },
  0x14: { spawns: 6, description: '6 at once (King Hopper fix value)' },
  0x1c: { spawns: 3, description: '3 at once' },
  0x1d: { spawns: 3, description: '3 at once' },
  0x28: { spawns: 3, description: '3 at once' },
  0x7f: { spawns: 1, description: '1 at once' },
  0x5a: { spawns: 1, description: '1 at once, limit 3 (King Hopper bug value)' }
};

class SpawnGroupAnalyzer {
  constructor() {
    this.groupStats = new Map();
    this.areaStats = new Map();
    this.warnings = [];
  }

  analyzeValue(group, creatureName, areaName) {
    if (group === 0xff) return; // Null value

    // Track group statistics
    if (!this.groupStats.has(group)) {
      this.groupStats.set(group, {
        count: 0,
        creatures: new Set(),
        areas: new Set(),
        known: KNOWN_GROUPS[group] !== undefined
      });
    }
    
    const stats = this.groupStats.get(group);
    stats.count++;
    stats.creatures.add(creatureName);
    stats.areas.add(areaName);

    // Track per-area statistics
    if (!this.areaStats.has(areaName)) {
      this.areaStats.set(areaName, {
        groups: new Map(),
        totalSpawns: 0
      });
    }
    
    const areaData = this.areaStats.get(areaName);
    areaData.totalSpawns++;
    if (!areaData.groups.has(group)) {
      areaData.groups.set(group, 0);
    }
    areaData.groups.set(group, areaData.groups.get(group) + 1);

    // Check for issues
    if (group === 0x5a && !creatureName.includes('king_hopper')) {
      this.warnings.push({
        type: 'KING_HOPPER_BUG_VALUE',
        area: areaName,
        creature: creatureName,
        value: group,
        message: `Creature ${creatureName} has King Hopper bug value 0x5a`
      });
    }

    if (!KNOWN_GROUPS[group]) {
      this.warnings.push({
        type: 'UNKNOWN_GROUP',
        area: areaName,
        creature: creatureName,
        value: group,
        message: `Unknown spawn group value 0x${group.toString(16)}`
      });
    }
  }

  generateReport() {
    console.log('═══════════════════════════════════════════════════════════');
    console.log('          SPAWN GROUP (mutexGroup) ANALYSIS REPORT          ');
    console.log('═══════════════════════════════════════════════════════════\n');

    // Overall statistics
    console.log('SUMMARY');
    console.log('───────────────────────────────────────────────────────────');
    console.log(`Total unique spawn groups: ${this.groupStats.size}`);
    console.log(`Total areas analyzed: ${this.areaStats.size}`);
    console.log(`Warnings found: ${this.warnings.length}\n`);

    // Group breakdown
    console.log('SPAWN GROUP VALUES');
    console.log('───────────────────────────────────────────────────────────');
    console.log('Value | Known | Count | Unique Creatures | Description');
    console.log('------|-------|-------|------------------|------------------');
    
    const sortedGroups = Array.from(this.groupStats.entries())
      .sort((a, b) => b[1].count - a[1].count);
    
    sortedGroups.forEach(([group, stats]) => {
      const hex = '0x' + group.toString(16).padStart(2, '0');
      const known = stats.known ? ' ✓ ' : ' ? ';
      const count = stats.count.toString().padStart(5);
      const creatures = stats.creatures.size.toString().padStart(16);
      const desc = KNOWN_GROUPS[group]?.description || 'Unknown';
      
      console.log(`${hex}  | ${known} | ${count} | ${creatures} | ${desc}`);
    });

    // Top areas by spawn group diversity
    console.log('\n\nAREAS WITH MOST SPAWN GROUP DIVERSITY');
    console.log('───────────────────────────────────────────────────────────');
    
    const sortedAreas = Array.from(this.areaStats.entries())
      .sort((a, b) => b[1].groups.size - a[1].groups.size)
      .slice(0, 10);
    
    sortedAreas.forEach(([area, data]) => {
      console.log(`\n${area}`);
      console.log(`  Total spawns: ${data.totalSpawns}`);
      console.log(`  Unique groups: ${data.groups.size}`);
      console.log(`  Distribution:`);
      
      Array.from(data.groups.entries())
        .sort((a, b) => b[1] - a[1])
        .forEach(([group, count]) => {
          const hex = '0x' + group.toString(16).padStart(2, '0');
          const desc = KNOWN_GROUPS[group]?.description || 'Unknown';
          console.log(`    ${hex}: ${count.toString().padStart(3)} spawns (${desc})`);
        });
    });

    // Warnings
    if (this.warnings.length > 0) {
      console.log('\n\nWARNINGS');
      console.log('───────────────────────────────────────────────────────────');
      
      const byType = {};
      this.warnings.forEach(w => {
        if (!byType[w.type]) byType[w.type] = [];
        byType[w.type].push(w);
      });

      Object.entries(byType).forEach(([type, warnings]) => {
        console.log(`\n${type} (${warnings.length} occurrences):`);
        warnings.slice(0, 5).forEach(w => {
          console.log(`  ${w.area}/${w.creature}: ${w.message}`);
        });
        if (warnings.length > 5) {
          console.log(`  ... and ${warnings.length - 5} more`);
        }
      });
    }

    // Recommendations
    console.log('\n\nRECOMMENDATIONS');
    console.log('───────────────────────────────────────────────────────────');
    
    const unknownCount = Array.from(this.groupStats.values())
      .filter(s => !s.known).length;
    
    if (unknownCount > 0) {
      console.log(`⚠ ${unknownCount} unknown spawn group values detected`);
      console.log('  → Test these values in-game to understand behavior');
      console.log('  → Document findings in SPAWN_GROUPS_DOCUMENTATION.md');
    }

    const kingHopperBugs = this.warnings.filter(w => w.type === 'KING_HOPPER_BUG_VALUE');
    if (kingHopperBugs.length > 0) {
      console.log(`⚠ ${kingHopperBugs.length} spawns using King Hopper bug value 0x5a`);
      console.log('  → These may cause spawn failures');
      console.log('  → Consider applying fix (change to 0x14)');
    }

    console.log('\n═══════════════════════════════════════════════════════════\n');
  }

  saveToJSON(outputPath) {
    const report = {
      summary: {
        totalGroups: this.groupStats.size,
        totalAreas: this.areaStats.size,
        warningsCount: this.warnings.length
      },
      groups: Array.from(this.groupStats.entries()).map(([group, stats]) => ({
        value: group,
        hex: '0x' + group.toString(16).padStart(2, '0'),
        count: stats.count,
        uniqueCreatures: stats.creatures.size,
        creatures: Array.from(stats.creatures),
        areas: Array.from(stats.areas),
        known: stats.known,
        description: KNOWN_GROUPS[group]?.description
      })),
      areas: Array.from(this.areaStats.entries()).map(([area, data]) => ({
        name: area,
        totalSpawns: data.totalSpawns,
        uniqueGroups: data.groups.size,
        groupDistribution: Array.from(data.groups.entries()).map(([g, c]) => ({
          value: g,
          hex: '0x' + g.toString(16).padStart(2, '0'),
          count: c
        }))
      })),
      warnings: this.warnings
    };

    fs.writeFileSync(outputPath, JSON.stringify(report, null, 2));
    console.log(`Report saved to: ${outputPath}`);
  }
}

// Main execution
function main() {
  const analyzer = new SpawnGroupAnalyzer();

  // For now, just show the documentation since we need game data to analyze
  console.log('Spawn Group Analysis Tool');
  console.log('─────────────────────────────────────────────────────────\n');
  console.log('This tool analyzes mutexGroup values from Shadow Tower game data.\n');
  console.log('To use this tool, you need extracted game data or a generated preset.');
  console.log('The analysis will be integrated into the randomization process.\n');
  console.log('Known spawn group values:\n');
  
  Object.entries(KNOWN_GROUPS).forEach(([value, info]) => {
    const hex = '0x' + parseInt(value).toString(16).padStart(2, '0');
    console.log(`  ${hex}: ${info.description} (${info.spawns} spawns)`);
  });

  console.log('\nFor full documentation, see SPAWN_GROUPS_DOCUMENTATION.md');
}

if (require.main === module) {
  main();
}

module.exports = { SpawnGroupAnalyzer, KNOWN_GROUPS };
