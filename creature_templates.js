'use strict';

/**
 * Creature Templates System
 * 
 * Manages randomization of creature stat templates stored in FDAT.T Parts 43, 54, 55.
 * These templates define base stats for all creatures which are loaded into EntityStateData
 * and used in damage calculations.
 * 
 * Template Structure (16 bytes):
 * Offset +0:  Str (Strength)
 * Offset +1:  Spd (Speed)
 * Offset +2:  Def (Defense)
 * Offset +3:  Bal (Balance)
 * Offset +4:  Sla (Slash)
 * Offset +5:  Smh (Smash)
 * Offset +6:  Pir (Pierce)
 * Offset +7:  Spr (Spirit) - feeds EntityStateData.enemy_power
 * Offset +8:  Foc (Focus)
 * Offset +9:  Har (Hammer) - likely "Hardness" or similar
 * Offset +10: Pur (Purity)
 * Offset +11: Par (Parry)
 * Offset +12: Mel (Melee)
 * Offset +13: Sol (Solomon/Holy)
 * Offset +14-15: HP (little-endian UInt16)
 */

const randomizer_common = require('./randomizer_common');
const TFILEReader = randomizer_common.TFILEReader;
const fs = require('fs');
const path = require('path');

// Creature template part indices in FDAT.T
const CREATURE_TEMPLATE_PARTS = [43, 54, 55];

// Template structure constants
const TEMPLATE_SIZE = 16;
const STAT_COUNT = 14;

// Stat offsets within template
const STAT_OFFSETS = {
  STR: 0,
  SPD: 1,
  DEF: 2,
  BAL: 3,
  SLA: 4,
  SMH: 5,
  PIR: 6,
  SPR: 7,  // Spirit - most important for magic damage
  FOC: 8,
  HAR: 9,
  PUR: 10,
  PAR: 11,
  MEL: 12,
  SOL: 13,
  HP: 14   // 2 bytes, little-endian
};

// Known creature template locations for testing/verification
const KNOWN_TEMPLATES = {
  acid_slime: {
    part: 43,
    offset: 0x2558e8 - 0x253000,  // Relative to part start
    hp: 95,
    stats: { bal: 1, spr: 0 }
  },
  blood_slime: {
    part: 43,
    offset: 0x2559a8 - 0x253000,  // Relative to part start
    hp: 96,
    stats: { mel: 1, spr: 0 }
  }
};

class CreatureTemplate {
  constructor(bin, offset) {
    this.bin = bin;
    this.offset = offset;
  }

  // Stat getters/setters
  getStat(statName) {
    const offset = STAT_OFFSETS[statName.toUpperCase()];
    if (offset === undefined) {
      throw new Error(`Unknown stat: ${statName}`);
    }
    if (statName.toUpperCase() === 'HP') {
      return this.bin[this.offset + 14] | (this.bin[this.offset + 15] << 8);
    }
    return this.bin[this.offset + offset];
  }

  setStat(statName, value) {
    const offset = STAT_OFFSETS[statName.toUpperCase()];
    if (offset === undefined) {
      throw new Error(`Unknown stat: ${statName}`);
    }
    if (statName.toUpperCase() === 'HP') {
      this.bin[this.offset + 14] = value & 0xFF;
      this.bin[this.offset + 15] = (value >> 8) & 0xFF;
    } else {
      this.bin[this.offset + offset] = Math.min(255, Math.max(0, value));
    }
  }

  // Get all stats as object
  getAllStats() {
    return {
      str: this.getStat('STR'),
      spd: this.getStat('SPD'),
      def: this.getStat('DEF'),
      bal: this.getStat('BAL'),
      sla: this.getStat('SLA'),
      smh: this.getStat('SMH'),
      pir: this.getStat('PIR'),
      spr: this.getStat('SPR'),
      foc: this.getStat('FOC'),
      har: this.getStat('HAR'),
      pur: this.getStat('PUR'),
      par: this.getStat('PAR'),
      mel: this.getStat('MEL'),
      sol: this.getStat('SOL'),
      hp: this.getStat('HP')
    };
  }

  // Set all stats from object
  setAllStats(stats) {
    for (const [statName, value] of Object.entries(stats)) {
      this.setStat(statName, value);
    }
  }

  // Check if template is blank (all zeros)
  isBlank() {
    for (let i = 0; i < TEMPLATE_SIZE; i++) {
      if (this.bin[this.offset + i] !== 0) {
        return false;
      }
    }
    return true;
  }

  // Calculate power score for template (used in difficulty scaling)
  getPowerScore() {
    const stats = this.getAllStats();
    return (
      stats.str * 0.15 +
      stats.spd * 0.05 +
      stats.def * 0.15 +
      stats.bal * 0.05 +
      stats.sla * 0.10 +
      stats.smh * 0.10 +
      stats.pir * 0.10 +
      stats.spr * 0.20 +  // Spirit most important for magic damage
      stats.foc * 0.05 +
      stats.har * 0.05 +
      stats.pur * 0.10 +
      stats.par * 0.05 +
      stats.mel * 0.10 +
      stats.sol * 0.10 +
      stats.hp * 0.5
    );
  }
}

class CreatureTemplates {
  constructor(fdatPath) {
    this.fdatPath = fdatPath;
    this.parts = {};
    this.templates = [];
    this.templatesByName = {};
  }

  /**
   * Load creature template parts from FDAT.T
   */
  loadParts() {
    console.log("\n** Loading Creature Template Parts");
    
    const fdatFile = new TFILEReader(this.fdatPath).readTFormat();
    
    for (const partIndex of CREATURE_TEMPLATE_PARTS) {
      if (partIndex >= fdatFile.files.length) {
        console.error(`ERROR: Part ${partIndex} does not exist in FDAT.T`);
        continue;
      }
      
      const part = fdatFile.files[partIndex];
      this.parts[partIndex] = part;
      
      console.log(`Loaded Part ${partIndex}: ${part.fileName} (${part.bin.length} bytes)`);
      
      // Parse templates in this part
      this.parseTemplatesInPart(partIndex, part);
    }
    
    console.log(`Total templates found: ${this.templates.length}`);
  }

  /**
   * Parse templates within a part
   */
  parseTemplatesInPart(partIndex, part) {
    const templateCount = Math.floor(part.bin.length / TEMPLATE_SIZE);
    
    for (let i = 0; i < templateCount; i++) {
      const offset = i * TEMPLATE_SIZE;
      const template = new CreatureTemplate(part.bin, offset);
      
      // Skip completely blank templates
      if (!template.isBlank()) {
        template.partIndex = partIndex;
        template.indexInPart = i;
        template.globalIndex = this.templates.length;
        this.templates.push(template);
      }
    }
  }

  /**
   * Find template by HP value (for identification)
   */
  findTemplateByHP(hp) {
    return this.templates.filter(t => t.getStat('HP') === hp);
  }

  /**
   * Randomize all templates with difficulty scaling
   * @param {Object} params - Randomization parameters
   */
  randomizeTemplates(params) {
    if (!params.randomizeCreatureTemplates) {
      console.log("Creature template randomization disabled");
      return;
    }

    console.log("\n** Randomizing Creature Templates");
    
    const difficultyFactors = {
      'extreme-easy': 0.1,
      'easy': 0.5,
      'medium': 1.0,
      'hard': 1.3,
      'very-hard': 1.6,
      'even-harder': 2.0
    };
    
    const difficultyFactor = difficultyFactors[params.difficulty] || 1.0;
    const creatureStatFactor = difficultyFactor;
    const creatureHPFactor = difficultyFactor;
    
    console.log(`Difficulty: ${params.difficulty}, Stat Factor: ${creatureStatFactor.toFixed(2)}, HP Factor: ${creatureHPFactor.toFixed(2)}`);
    
    for (const template of this.templates) {
      this.randomizeTemplate(template, creatureStatFactor, creatureHPFactor, params);
    }
    
    console.log(`Randomized ${this.templates.length} creature templates`);
  }

  /**
   * Randomize individual template
   */
  randomizeTemplate(template, statFactor, hpFactor, params) {
    const stats = template.getAllStats();
    
    // Randomize each stat with variance
    const variance = 0.3; // ±30% variance
    
    for (const statName of ['str', 'spd', 'def', 'bal', 'sla', 'smh', 'pir', 'spr', 'foc', 'har', 'pur', 'par', 'mel', 'sol']) {
      if (stats[statName] > 0) {
        const randomMultiplier = 1 + (Math.random() * 2 - 1) * variance;
        const newValue = Math.ceil(stats[statName] * statFactor * randomMultiplier);
        template.setStat(statName, Math.min(255, newValue));
      }
    }
    
    // Randomize HP with different scaling
    if (stats.hp > 0) {
      const randomMultiplier = 1 + (Math.random() * 2 - 1) * variance;
      const newHP = Math.ceil(stats.hp * hpFactor * randomMultiplier);
      template.setStat('hp', Math.min(65535, newHP));
    }
  }

  /**
   * Set specific template to high stats (for testing)
   */
  setTemplateHighStats(templateInfo, stats) {
    const templates = this.templates.filter(t => 
      t.partIndex === templateInfo.part && 
      t.getStat('HP') === templateInfo.hp
    );
    
    if (templates.length === 0) {
      console.log(`WARNING: Template not found (HP=${templateInfo.hp}, Part=${templateInfo.part})`);
      return;
    }
    
    for (const template of templates) {
      template.setAllStats(stats);
      console.log(`Set template at Part ${template.partIndex}, Index ${template.indexInPart} to high stats`);
    }
  }

  /**
   * Write modified parts back to FDAT.T
   */
  writeParts() {
    console.log("\n** Writing Modified Creature Template Parts");
    
    for (const partIndex of CREATURE_TEMPLATE_PARTS) {
      const part = this.parts[partIndex];
      if (!part) continue;
      
      // Update checksum (CRITICAL!)
      part.setCheckSum();
      part.verifyCheckSum();
      
      // Write part to disk
      part.write();
      
      console.log(`Wrote Part ${partIndex}: ${part.fileName}`);
    }
  }

  /**
   * Generate readable report
   */
  generateReport(outputPath) {
    let report = "# Creature Template Randomization Report\n\n";
    report += `Total Templates: ${this.templates.length}\n\n`;
    
    report += "## Template Summary\n\n";
    report += "| Index | Part | HP | Str | Spd | Def | Bal | Sla | Smh | Pir | Spr | Foc | Har | Pur | Par | Mel | Sol | Score |\n";
    report += "|-------|------|----|----|----|----|----|----|----|----|----|----|----|----|----|----|-----|-------|\n";
    
    for (const template of this.templates.slice(0, 50)) {  // First 50 for brevity
      const stats = template.getAllStats();
      report += `| ${template.globalIndex} | ${template.partIndex} | ${stats.hp} | ${stats.str} | ${stats.spd} | ${stats.def} | ${stats.bal} | ${stats.sla} | ${stats.smh} | ${stats.pir} | ${stats.spr} | ${stats.foc} | ${stats.har} | ${stats.pur} | ${stats.par} | ${stats.mel} | ${stats.sol} | ${template.getPowerScore().toFixed(1)} |\n`;
    }
    
    if (this.templates.length > 50) {
      report += `\n... and ${this.templates.length - 50} more templates\n`;
    }
    
    fs.writeFileSync(outputPath, report);
    console.log(`Creature template report written to: ${outputPath}`);
  }
}

module.exports = {
  CreatureTemplates,
  CreatureTemplate,
  CREATURE_TEMPLATE_PARTS,
  KNOWN_TEMPLATES,
  STAT_OFFSETS
};
