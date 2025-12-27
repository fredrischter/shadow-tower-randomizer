'use strict';

/**
 * Creature Stats Randomization System
 * 
 * Randomizes creature stats that are embedded in each area's map file.
 * Each Creature object (defined in data_model.js) has stats at offsets 0x24-0x32:
 * - str, spd, def, bal, sla, smh, pir, spr, foc, ham, pur, par, mel, sol, hp
 * 
 * These stats feed into EntityStateData and are used in damage calculations.
 * Spirit (spr) stat is particularly important as it feeds EntityStateData.enemy_power.
 * 
 * Architecture:
 * - Each area has 10 FDAT.T parts starting from logo_index
 * - Map file is at logo_index + 3
 * - Creature stats are in the map file's entity data (sizedMixStarts[0])
 * - Creatures are already loaded as area.creatures[] by data_model.js
 */

const fs = require('fs');
const path = require('path');

// Difficulty scaling factors (from randomize.js)
const DIFFICULTY_FACTORS = {
  'extreme-easy': 0.1,
  'easy': 0.5,
  'medium': 1.0,
  'hard': 1.3,
  'very-hard': 1.6,
  'even-harder': 2.0
};

class CreatureStatsRandomizer {
  constructor(areas, params, changeSetPath) {
    this.areas = areas;
    this.params = params;
    this.changeSetPath = changeSetPath;
    this.difficulty = params.difficulty || 'medium';
    this.difficultyFactor = DIFFICULTY_FACTORS[this.difficulty] || 1.0;
    this.report = [];
  }

  randomize() {
    this.report.push(`# Creature Stats Randomization Report\n`);
    this.report.push(`**Difficulty:** ${this.difficulty} (${this.difficultyFactor}x factor)\n`);
    this.report.push(`**Preset Mode:** ${this.params.creatureTemplatePreset || 'normal'}\n\n`);

    const preset = this.params.creatureTemplatePreset;
    
    this.areas.forEach(area => {
      if (!area.creatures || area.creatures.length === 0) {
        return;
      }

      this.report.push(`\n## Area: ${area.name}\n\n`);
      this.report.push(`| Creature | Original Stats | New Stats |\n`);
      this.report.push(`|----------|----------------|------------|\n`);

      area.creatures.forEach(creature => {
        if (creature.isBlank || creature.isDoor) {
          return;
        }

        const originalStats = this.getCreatureStats(creature);
        
        if (preset === 'test-slime-high-stats') {
          this.applyTestSlimeHighStats(creature, area);
        } else {
          this.randomizeCreatureStats(creature);
        }

        const newStats = this.getCreatureStats(creature);
        this.report.push(`| ${creature.name} | ${originalStats} | ${newStats} |\n`);
      });

      // Mark map file as modified - checksum will be updated during pack
      if (area.map_file) {
        area.map_file.modified = true;
      }
    });

    this.writeReport();
  }

  getCreatureStats(creature) {
    return `Str=${creature.str.get()}, Spd=${creature.spd.get()}, Def=${creature.def.get()}, ` +
           `Spr=${creature.spr.get()}, HP=${creature.hp.get()}`;
  }

  randomizeCreatureStats(creature) {
    // Randomize with ±30% variance, scaled by difficulty
    const variance = 0.3;
    
    // Stats are 0-255 (UInt8)
    const stats = ['str', 'spd', 'def', 'bal', 'sla', 'smh', 'pir', 'spr', 
                   'foc', 'ham', 'pur', 'par', 'mel', 'sol'];
    
    stats.forEach(statName => {
      const stat = creature[statName];
      const original = stat.get();
      if (original === 0) return; // Don't modify zero stats
      
      const factor = 1 + (Math.random() * 2 - 1) * variance; // 0.7 to 1.3
      const scaled = original * factor * this.difficultyFactor;
      const clamped = Math.max(0, Math.min(255, Math.round(scaled)));
      stat.set(clamped);
    });

    // HP is UInt16 (0-65535)
    const originalHP = creature.hp.get();
    if (originalHP > 0) {
      const factor = 1 + (Math.random() * 2 - 1) * variance;
      const scaled = originalHP * factor * this.difficultyFactor;
      const clamped = Math.max(1, Math.min(65535, Math.round(scaled)));
      creature.hp.set(clamped);
    }
  }

  applyTestSlimeHighStats(creature, area) {
    // Test preset: set slimes to very high stats
    const isAcidSlime = creature.name.includes('acid_slime');
    const isBloodSlime = creature.name.includes('blood_slime');

    if (isAcidSlime) {
      // Acid slime: Spr=250, HP=5000, all stats 150-250
      creature.str.set(200);
      creature.spd.set(180);
      creature.def.set(160);
      creature.bal.set(150);
      creature.sla.set(170);
      creature.smh.set(175);
      creature.pir.set(165);
      creature.spr.set(250);  // High Spirit for damage
      creature.foc.set(155);
      creature.ham.set(160);
      creature.pur.set(150);
      creature.par.set(150);
      creature.mel.set(180);
      creature.sol.set(150);
      creature.hp.set(5000);
      
      this.report.push(`\n**TEST: Set acid slime to extreme stats (Spr=250, HP=5000)**\n`);
    } else if (isBloodSlime) {
      // Blood slime: Spr=255 (max), HP=6000, all stats 160-255
      creature.str.set(220);
      creature.spd.set(200);
      creature.def.set(180);
      creature.bal.set(160);
      creature.sla.set(190);
      creature.smh.set(195);
      creature.pir.set(185);
      creature.spr.set(255);  // MAX Spirit for damage
      creature.foc.set(170);
      creature.ham.set(175);
      creature.pur.set(165);
      creature.par.set(160);
      creature.mel.set(200);
      creature.sol.set(170);
      creature.hp.set(6000);
      
      this.report.push(`\n**TEST: Set blood slime to extreme stats (Spr=255 MAX, HP=6000)**\n`);
    }
  }

  writeReport() {
    const reportPath = path.join(this.changeSetPath, 'creature_stats_report.md');
    fs.writeFileSync(reportPath, this.report.join(''));
    console.log(`\nCreature stats report written to: ${reportPath}`);
  }
}

function randomizeCreatureStats(areas, params, changeSetPath) {
  const randomizer = new CreatureStatsRandomizer(areas, params, changeSetPath);
  randomizer.randomize();
}

module.exports = {
  randomizeCreatureStats
};
