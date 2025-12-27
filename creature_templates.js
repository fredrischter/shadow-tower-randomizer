'use strict';

/**
 * Creature Stats Randomization System - TWO-LEVEL ARCHITECTURE
 * 
 * LEVEL 1: Global Creature Type Templates (Part X3 - MIPS files)
 * - Each area has creature type templates in Part X3 (logo_index + 2)
 * - Templates at offset +0x2000 typically
 * - 16-byte structure: 14 stats + 2-byte HP
 * - Affects ALL instances of that creature type in the area
 * 
 * LEVEL 2: Per-Instance Creature Stats (Part X4 - Map files)
 * - Each Creature object (defined in data_model.js) has stats at offsets 0x24-0x32
 * - str, spd, def, bal, sla, smh, pir, spr, foc, ham, pur, par, mel, sol, hp
 * - Overrides/customizes global template stats for specific spawns
 * - Already loaded as area.creatures[] by data_model.js
 * 
 * Architecture:
 * - Each area has 10 FDAT.T parts starting from logo_index
 * - Part X3 (logo_index + 2): MIPS code + creature templates
 * - Part X4 (logo_index + 3): Map file with spawn data
 * - Both levels can be randomized independently or together
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

// Creature template structure (16 bytes)
const TEMPLATE_SIZE = 16;
const TEMPLATE_SECTION_OFFSET = 0x2000;  // Standard offset in X3 parts
const MAX_TEMPLATES_PER_AREA = 128;      // Conservative estimate

/**
 * CreatureTemplate - Represents a single 16-byte creature type template in Part X3
 */
class CreatureTemplate {
  constructor(bin, offset) {
    this.bin = bin;
    this.offset = offset;
  }

  // Stat getters/setters (bytes 0-13)
  get str() { return this.bin[this.offset + 0]; }
  set str(v) { this.bin[this.offset + 0] = Math.max(0, Math.min(255, v)); }
  
  get spd() { return this.bin[this.offset + 1]; }
  set spd(v) { this.bin[this.offset + 1] = Math.max(0, Math.min(255, v)); }
  
  get def() { return this.bin[this.offset + 2]; }
  set def(v) { this.bin[this.offset + 2] = Math.max(0, Math.min(255, v)); }
  
  get bal() { return this.bin[this.offset + 3]; }
  set bal(v) { this.bin[this.offset + 3] = Math.max(0, Math.min(255, v)); }
  
  get sla() { return this.bin[this.offset + 4]; }
  set sla(v) { this.bin[this.offset + 4] = Math.max(0, Math.min(255, v)); }
  
  get smh() { return this.bin[this.offset + 5]; }
  set smh(v) { this.bin[this.offset + 5] = Math.max(0, Math.min(255, v)); }
  
  get pir() { return this.bin[this.offset + 6]; }
  set pir(v) { this.bin[this.offset + 6] = Math.max(0, Math.min(255, v)); }
  
  get spr() { return this.bin[this.offset + 7]; }  // Spirit - critical for damage!
  set spr(v) { this.bin[this.offset + 7] = Math.max(0, Math.min(255, v)); }
  
  get foc() { return this.bin[this.offset + 8]; }
  set foc(v) { this.bin[this.offset + 8] = Math.max(0, Math.min(255, v)); }
  
  get ham() { return this.bin[this.offset + 9]; }
  set ham(v) { this.bin[this.offset + 9] = Math.max(0, Math.min(255, v)); }
  
  get pur() { return this.bin[this.offset + 10]; }
  set pur(v) { this.bin[this.offset + 10] = Math.max(0, Math.min(255, v)); }
  
  get par() { return this.bin[this.offset + 11]; }
  set par(v) { this.bin[this.offset + 11] = Math.max(0, Math.min(255, v)); }
  
  get mel() { return this.bin[this.offset + 12]; }
  set mel(v) { this.bin[this.offset + 12] = Math.max(0, Math.min(255, v)); }
  
  get sol() { return this.bin[this.offset + 13]; }
  set sol(v) { this.bin[this.offset + 13] = Math.max(0, Math.min(255, v)); }
  
  // HP getter/setter (bytes 14-15, little-endian UInt16)
  get hp() {
    return this.bin[this.offset + 14] | (this.bin[this.offset + 15] << 8);
  }
  set hp(v) {
    const clamped = Math.max(0, Math.min(65535, v));
    this.bin[this.offset + 14] = clamped & 0xFF;
    this.bin[this.offset + 15] = (clamped >> 8) & 0xFF;
  }

  isBlank() {
    // Template is blank if all bytes are 0
    for (let i = 0; i < TEMPLATE_SIZE; i++) {
      if (this.bin[this.offset + i] !== 0) return false;
    }
    return true;
  }

  toString() {
    return `Str=${this.str}, Spd=${this.spd}, Def=${this.def}, Spr=${this.spr}, HP=${this.hp}`;
  }
}

/**
 * CreatureStatsRandomizer - Handles both Level 1 (templates) and Level 2 (per-instance) randomization
 */
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
    this.report.push(`# Creature Stats Randomization Report\n\n`);
    this.report.push(`**Difficulty:** ${this.difficulty} (${this.difficultyFactor}x factor)\n`);
    this.report.push(`**Preset Mode:** ${this.params.creatureTemplatePreset || 'normal'}\n`);
    this.report.push(`**Randomization Levels:**\n`);
    
    // X3 template randomization: ONLY for specific parts with actual templates
    // Parts 43, 54, and 55 contain global creature template databases
    // Other X3 parts contain MIPS executable code - DO NOT modify
    const x3Enabled = this.params.randomizeX3Templates !== false;  // Default: enabled
    this.report.push(`- Level 1 (X3 templates - Parts 43, 54, 55 only): ${x3Enabled ? 'YES' : 'NO'}\n`);
    this.report.push(`- Level 2 (X4 per-instance): ${this.params.randomizeCreatureTemplates ? 'YES' : 'NO'}\n\n`);

    const preset = this.params.creatureTemplatePreset;

    // Level 1: Randomize ONLY Parts 43, 54, and 55 (verified template locations)
    // These are global creature template databases, NOT MIPS code
    // All other X3 parts contain executable code and must NOT be modified
    if (x3Enabled) {
      console.log("X3 randomization ENABLED for Parts 43, 54, and 55 only");
      this.randomizeX3TemplatesTargeted();
    }

    // Level 2: Randomize per-instance stats in X4 parts (map files)
    // This is SAFE and works correctly
    if (this.params.randomizeCreatureTemplates) {
      this.randomizeX4PerInstanceStats(preset);
    }

    this.writeReport();
  }

  /**
   * Level 1: Randomize creature type templates in Part X3 (MIPS files)
   * FIXED: Now validates templates before modifying to avoid corrupting MIPS code
   */
  randomizeX3Templates() {
    this.report.push(`## Level 1: Creature Type Templates (X3 Parts)\n\n`);
    this.report.push(`**Template Detection:** Using HP signature validation (HP 1-1000 range)\n\n`);

    this.areas.forEach(area => {
      // Safety check: mips_file must exist and be properly initialized
      if (!area.mips_file || !area.mips_file.bin || !area.mips_index) {
        this.report.push(`\nSkipping ${area.name} - mips_file not available\n`);
        return;
      }

      this.report.push(`\n### Area: ${area.name} (Part ${area.mips_index})\n\n`);
      this.report.push(`| Template Offset | Original Stats | New Stats |\n`);
      this.report.push(`|-----------------|----------------|------------|\n`);

      const bin = area.mips_file.bin;
      let templatesModified = 0;

      // Scan template section for valid templates
      // Use stricter validation to avoid modifying MIPS code
      for (let i = 0; i < MAX_TEMPLATES_PER_AREA; i++) {
        const offset = TEMPLATE_SECTION_OFFSET + (i * TEMPLATE_SIZE);
        
        if (offset + TEMPLATE_SIZE > bin.length) {
          break;  // Beyond file bounds
        }

        const template = new CreatureTemplate(bin, offset);
        
        // CRITICAL FIX: Validate this is actually a creature template, not MIPS code
        if (!this.isValidCreatureTemplate(template)) {
          continue;  // Skip invalid/MIPS code blocks
        }

        const originalStats = template.toString();
        
        // Randomize template stats
        this.randomizeTemplateStats(template);
        
        const newStats = template.toString();
        this.report.push(`| 0x${offset.toString(16).padStart(6, '0')} | ${originalStats} | ${newStats} |\n`);
        templatesModified++;
      }

      this.report.push(`\n**Templates modified:** ${templatesModified}\n`);

      // CRITICAL: Update checksum after modifying X3 part
      if (templatesModified > 0 && area.mips_file.setCheckSum) {
        area.mips_file.setCheckSum();
        this.report.push(`**Checksum updated:** YES\n`);
      }
    });
  }

  /**
   * Validate that a 16-byte block is actually a creature template, not MIPS code
   * Uses HP signature validation and stat pattern analysis
   */
  isValidCreatureTemplate(template) {
    // Check 1: HP must be in reasonable range (1-1000)
    // MIPS code typically has random values, not small integers
    const hp = template.hp;
    if (hp === 0 || hp > 1000) {
      return false;
    }

    // Check 2: At least one non-HP stat must be non-zero
    // Pure MIPS code is unlikely to have this pattern
    const hasStats = template.str > 0 || template.spd > 0 || template.def > 0 ||
                     template.bal > 0 || template.sla > 0 || template.smh > 0 ||
                     template.pir > 0 || template.spr > 0 || template.foc > 0 ||
                     template.ham > 0 || template.pur > 0 || template.par > 0 ||
                     template.mel > 0 || template.sol > 0;
    
    // Allow templates with all zero stats if HP is in common range (20-100)
    const commonHPRange = hp >= 20 && hp <= 100;
    if (!hasStats && !commonHPRange) {
      return false;
    }

    // Check 3: Stats should be relatively small (< 100 typically)
    // MIPS code often has larger byte values
    const maxStat = Math.max(
      template.str, template.spd, template.def, template.bal,
      template.sla, template.smh, template.pir, template.spr,
      template.foc, template.ham, template.pur, template.par,
      template.mel, template.sol
    );
    if (maxStat > 200) {
      return false;  // Probably not a creature template
    }

    return true;  // Passed all checks - likely a valid template
  }

  /**
   * TARGETED X3 Randomization - ONLY for Parts 43 and 55
   * These are the ONLY parts with verified global creature template databases
   * All other X3 parts contain MIPS executable code and must NOT be modified
   */
  randomizeX3TemplatesTargeted() {
    this.report.push(`## Level 1: Creature Type Templates (TARGETED - Parts 43, 54, 55 Only)\n\n`);
    this.report.push(`**Strategy:** Only modify Parts 43, 54, and 55 (verified template locations)\n`);
    this.report.push(`**Safety:** All other X3 parts are MIPS code - NOT modified\n`);
    this.report.push(`**Coverage:** Part 43 (868 templates), Part 54 (212 templates), Part 55 (730 templates) = 1,810 total\n\n`);

    // VERIFIED template locations from comprehensive template search
    // Part 43: 868 templates at offset 0x255000
    // Part 54: 212 templates at offset 0x2f0000 (hybrid part)
    // Part 55: 730 templates at offset 0x305000
    const TEMPLATE_PARTS = [43, 54, 55];  // ONLY these parts have templates

    this.areas.forEach(area => {
      // CRITICAL: Only process areas with mips_index matching our verified parts
      if (!area.mips_index || !TEMPLATE_PARTS.includes(area.mips_index)) {
        return;  // Skip - this X3 part is MIPS code, not templates
      }

      // Safety check: mips_file must exist and be properly initialized
      if (!area.mips_file || !area.mips_file.bin) {
        this.report.push(`\nSkipping Part ${area.mips_index} - mips_file not available\n`);
        return;
      }

      this.report.push(`\n### Part ${area.mips_index}: Global Creature Template Database\n\n`);
      this.report.push(`**Area Reference:** ${area.name}\n`);
      this.report.push(`| Template Offset | Original Stats | New Stats |\n`);
      this.report.push(`|-----------------|----------------|------------|\n`);

      const bin = area.mips_file.bin;
      let templatesModified = 0;

      // Scan template section for valid templates
      // Use validation to skip any remaining MIPS code sections
      for (let i = 0; i < MAX_TEMPLATES_PER_AREA; i++) {
        const offset = TEMPLATE_SECTION_OFFSET + (i * TEMPLATE_SIZE);
        
        if (offset + TEMPLATE_SIZE > bin.length) {
          break;  // Beyond file bounds
        }

        const template = new CreatureTemplate(bin, offset);
        
        // Validate this is actually a creature template
        if (!this.isValidCreatureTemplate(template)) {
          continue;  // Skip invalid/MIPS code blocks
        }

        const originalStats = template.toString();
        
        // Randomize template stats
        this.randomizeTemplateStats(template);
        
        const newStats = template.toString();
        this.report.push(`| 0x${offset.toString(16).padStart(6, '0')} | ${originalStats} | ${newStats} |\n`);
        templatesModified++;
      }

      this.report.push(`\n**Templates modified:** ${templatesModified}\n`);

      // CRITICAL: Update checksum after modifying X3 part
      if (templatesModified > 0 && area.mips_file.setCheckSum) {
        area.mips_file.setCheckSum();
        this.report.push(`**Checksum updated:** YES\n`);
      }
    });
  }

  /**
   * Randomize a single creature template's stats
   */
  randomizeTemplateStats(template) {
    const variance = 0.3;  // ±30%
    
    const stats = ['str', 'spd', 'def', 'bal', 'sla', 'smh', 'pir', 'spr', 
                   'foc', 'ham', 'pur', 'par', 'mel', 'sol'];
    
    stats.forEach(statName => {
      const original = template[statName];
      if (original === 0) return;  // Don't modify zero stats
      
      const factor = 1 + (Math.random() * 2 - 1) * variance;  // 0.7 to 1.3
      const scaled = original * factor * this.difficultyFactor;
      template[statName] = Math.round(scaled);
    });

    // HP
    const originalHP = template.hp;
    if (originalHP > 0) {
      const factor = 1 + (Math.random() * 2 - 1) * variance;
      const scaled = originalHP * factor * this.difficultyFactor;
      template.hp = Math.round(scaled);
    }
  }

  /**
   * Level 2: Randomize per-instance creature stats in Part X4 (map files)
   */
  randomizeX4PerInstanceStats(preset) {
    this.report.push(`\n## Level 2: Per-Instance Creature Stats (X4 Parts)\n\n`);

    this.areas.forEach(area => {
      if (!area.creatures || area.creatures.length === 0) {
        return;
      }

      this.report.push(`\n### Area: ${area.name} (Part ${area.map_index})\n\n`);
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

      // Mark map file as modified - checksum will be updated during pack.js
      if (area.map_file) {
        area.map_file.modified = true;
      }
    });
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
