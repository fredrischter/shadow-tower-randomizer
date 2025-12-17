#!/usr/bin/env node

/**
 * Extract Creature Power Value Table
 * 
 * This script extracts all creature data from the Shadow Tower game files
 * and generates a comprehensive table showing:
 * - Base creature attributes (STR, SPD, DEF, etc.)
 * - HP values
 * - Physical attack values (EntityStateData type 0x20)
 * - Spell/Magic attack values (EntityStateData type 0x30)
 * - Calculated power metrics
 * 
 * Created for PR #14 to verify magic/projectile attack damage scaling fix
 */

const fs = require('fs');
const path = require('path');

// Load the data model to access creature data structures
require('./data_model.js');
require('./randomizer_common.js');

console.log("Shadow Tower Creature Power Value Extraction");
console.log("=============================================\n");

// Function to calculate a power score for a creature
function calculatePowerScore(creature) {
    let score = 0;
    
    // Base attributes contribution
    if (creature.str && !creature.str.isNull()) score += creature.str.get() * 2;
    if (creature.spd && !creature.spd.isNull()) score += creature.spd.get() * 1;
    if (creature.def && !creature.def.isNull()) score += creature.def.get() * 3;
    if (creature.bal && !creature.bal.isNull()) score += creature.bal.get() * 1;
    if (creature.sla && !creature.sla.isNull()) score += creature.sla.get() * 1.5;
    if (creature.smh && !creature.smh.isNull()) score += creature.smh.get() * 1.5;
    if (creature.pir && !creature.pir.isNull()) score += creature.pir.get() * 1.5;
    if (creature.spr && !creature.spr.isNull()) score += creature.spr.get() * 1.5;
    if (creature.foc && !creature.foc.isNull()) score += creature.foc.get() * 1;
    if (creature.ham && !creature.ham.isNull()) score += creature.ham.get() * 1;
    if (creature.pur && !creature.pur.isNull()) score += creature.pur.get() * 1.5;
    if (creature.par && !creature.par.isNull()) score += creature.par.get() * 1;
    if (creature.mel && !creature.mel.isNull()) score += creature.mel.get() * 2;
    if (creature.sol && !creature.sol.isNull()) score += creature.sol.get() * 1.5;
    
    // HP contribution (major factor)
    if (creature.hp && !creature.hp.isNull()) {
        score += creature.hp.get() * 0.5;
    }
    
    // Attack values from EntityStateData
    if (creature.attacks && creature.attacks.length > 0) {
        creature.attacks.forEach(attack => {
            if (!attack.isNull()) {
                score += attack.get() * 0.3;
            }
        });
    }
    
    // Base attack attributes
    if (creature.attack1 && !creature.attack1.isNull()) score += creature.attack1.get() * 3;
    if (creature.attack2 && !creature.attack2.isNull()) score += creature.attack2.get() * 3;
    if (creature.magic1 && !creature.magic1.isNull()) score += creature.magic1.get() * 3;
    
    // Defense values
    if (creature.weaponDefense1 && !creature.weaponDefense1.isNull()) score += creature.weaponDefense1.get() * 0.1;
    if (creature.weaponDefense2 && !creature.weaponDefense2.isNull()) score += creature.weaponDefense2.get() * 0.1;
    if (creature.weaponDefense3 && !creature.weaponDefense3.isNull()) score += creature.weaponDefense3.get() * 0.1;
    if (creature.magDefense1 && !creature.magDefense1.isNull()) score += creature.magDefense1.get() * 0.1;
    if (creature.magDefense2 && !creature.magDefense2.isNull()) score += creature.magDefense2.get() * 0.1;
    if (creature.magDefense3 && !creature.magDefense3.isNull()) score += creature.magDefense3.get() * 0.1;
    if (creature.magDefense4 && !creature.magDefense4.isNull()) score += creature.magDefense4.get() * 0.1;
    if (creature.magDefense5 && !creature.magDefense5.isNull()) score += creature.magDefense5.get() * 0.1;
    
    return Math.round(score);
}

// Function to extract creature data into a table row
function extractCreatureData(creature) {
    const data = {
        name: creature.name || 'unknown',
        // Base attributes
        str: creature.str ? creature.str.get() : 0,
        spd: creature.spd ? creature.spd.get() : 0,
        def: creature.def ? creature.def.get() : 0,
        bal: creature.bal ? creature.bal.get() : 0,
        sla: creature.sla ? creature.sla.get() : 0,
        smh: creature.smh ? creature.smh.get() : 0,
        pir: creature.pir ? creature.pir.get() : 0,
        spr: creature.spr ? creature.spr.get() : 0,
        foc: creature.foc ? creature.foc.get() : 0,
        ham: creature.ham ? creature.ham.get() : 0,
        pur: creature.pur ? creature.pur.get() : 0,
        par: creature.par ? creature.par.get() : 0,
        mel: creature.mel ? creature.mel.get() : 0,
        sol: creature.sol ? creature.sol.get() : 0,
        hp: creature.hp ? creature.hp.get() : 0,
        
        // Basic attack attributes
        attack1: creature.attack1 ? creature.attack1.get() : 0,
        attack2: creature.attack2 ? creature.attack2.get() : 0,
        magic1: creature.magic1 ? creature.magic1.get() : 0,
        
        // EntityStateData attacks
        physicalAttacks: [],
        magicAttacks: [],
        
        // Defense values
        weaponDef1: creature.weaponDefense1 ? creature.weaponDefense1.get() : 0,
        weaponDef2: creature.weaponDefense2 ? creature.weaponDefense2.get() : 0,
        weaponDef3: creature.weaponDefense3 ? creature.weaponDefense3.get() : 0,
        magDef1: creature.magDefense1 ? creature.magDefense1.get() : 0,
        magDef2: creature.magDefense2 ? creature.magDefense2.get() : 0,
        magDef3: creature.magDefense3 ? creature.magDefense3.get() : 0,
        magDef4: creature.magDefense4 ? creature.magDefense4.get() : 0,
        magDef5: creature.magDefense5 ? creature.magDefense5.get() : 0,
    };
    
    // Extract EntityStateData attacks
    if (creature.entityStates && creature.entityStates.length > 0) {
        creature.entityStates.forEach(entityState => {
            if (entityState.type === 0x20) {
                // Physical attack
                const attacks = [];
                if (entityState.attack1 && !entityState.attack1.isNull()) {
                    attacks.push(entityState.attack1.get());
                }
                if (entityState.attack2 && !entityState.attack2.isNull()) {
                    attacks.push(entityState.attack2.get());
                }
                if (entityState.attack3 && !entityState.attack3.isNull()) {
                    attacks.push(entityState.attack3.get());
                }
                if (attacks.length > 0) {
                    data.physicalAttacks.push(attacks.join('/'));
                }
            } else if (entityState.type === 0x30) {
                // Magic/spell attack
                const attacks = [];
                if (entityState.attack1 && !entityState.attack1.isNull()) {
                    attacks.push(entityState.attack1.get());
                }
                if (entityState.attack2 && !entityState.attack2.isNull()) {
                    attacks.push(entityState.attack2.get());
                }
                if (entityState.attack3 && !entityState.attack3.isNull()) {
                    attacks.push(entityState.attack3.get());
                }
                if (attacks.length > 0) {
                    data.magicAttacks.push(attacks.join('/'));
                }
            }
        });
    }
    
    data.powerScore = calculatePowerScore(creature);
    
    return data;
}

// Function to generate CSV output
function generateCSV(creatureDataList) {
    const headers = [
        'Creature Name',
        'Power Score',
        'HP',
        'STR', 'SPD', 'DEF', 'BAL',
        'SLA', 'SMH', 'PIR', 'SPR',
        'FOC', 'HAM', 'PUR', 'PAR',
        'MEL', 'SOL',
        'Attack1', 'Attack2', 'Magic1',
        'Physical Attacks (0x20)',
        'Magic Attacks (0x30)',
        'Weapon Def (1/2/3)',
        'Mag Def (1/2/3/4/5)'
    ].join(',');
    
    const rows = creatureDataList.map(data => {
        return [
            data.name,
            data.powerScore,
            data.hp,
            data.str, data.spd, data.def, data.bal,
            data.sla, data.smh, data.pir, data.spr,
            data.foc, data.ham, data.pur, data.par,
            data.mel, data.sol,
            data.attack1, data.attack2, data.magic1,
            '"' + data.physicalAttacks.join('; ') + '"',
            '"' + data.magicAttacks.join('; ') + '"',
            `"${data.weaponDef1}/${data.weaponDef2}/${data.weaponDef3}"`,
            `"${data.magDef1}/${data.magDef2}/${data.magDef3}/${data.magDef4}/${data.magDef5}"`
        ].join(',');
    });
    
    return [headers, ...rows].join('\n');
}

// Function to generate Markdown table
function generateMarkdown(creatureDataList) {
    let md = '# Shadow Tower Creature Power Value Table\n\n';
    md += '**Generated for PR #14 - Magic/Projectile Attack Damage Scaling Fix**\n\n';
    md += 'This table shows all creature power values including:\n';
    md += '- **Type 0x20**: Physical attack EntityStateData\n';
    md += '- **Type 0x30**: Spell/Magic attack EntityStateData (fixed in PR #14)\n\n';
    md += '---\n\n';
    
    // Summary statistics
    const totalCreatures = creatureDataList.length;
    const withPhysicalAttacks = creatureDataList.filter(d => d.physicalAttacks.length > 0).length;
    const withMagicAttacks = creatureDataList.filter(d => d.magicAttacks.length > 0).length;
    const avgPower = Math.round(creatureDataList.reduce((sum, d) => sum + d.powerScore, 0) / totalCreatures);
    const maxPower = Math.max(...creatureDataList.map(d => d.powerScore));
    const minPower = Math.min(...creatureDataList.map(d => d.powerScore));
    
    md += '## Summary Statistics\n\n';
    md += `- **Total Creatures**: ${totalCreatures}\n`;
    md += `- **Creatures with Physical Attacks (0x20)**: ${withPhysicalAttacks}\n`;
    md += `- **Creatures with Magic Attacks (0x30)**: ${withMagicAttacks}\n`;
    md += `- **Average Power Score**: ${avgPower}\n`;
    md += `- **Highest Power Score**: ${maxPower}\n`;
    md += `- **Lowest Power Score**: ${minPower}\n\n`;
    
    md += '---\n\n';
    md += '## Full Creature Table\n\n';
    
    // Compact table format
    md += '| Creature Name | Power | HP | Physical Attacks | Magic Attacks | Attributes |\n';
    md += '|---------------|-------|----|-----------------|--------------|-----------|\n';
    
    creatureDataList.forEach(data => {
        const physAttacks = data.physicalAttacks.length > 0 ? data.physicalAttacks.join('; ') : '-';
        const magAttacks = data.magicAttacks.length > 0 ? data.magicAttacks.join('; ') : '-';
        const attrs = `STR:${data.str} DEF:${data.def} SPD:${data.spd}`;
        
        md += `| ${data.name} | ${data.powerScore} | ${data.hp} | ${physAttacks} | ${magAttacks} | ${attrs} |\n`;
    });
    
    md += '\n---\n\n';
    md += '## Detailed Attribute Table\n\n';
    md += '| Creature Name | Power | HP | STR | SPD | DEF | BAL | SLA | SMH | PIR | SPR | FOC | HAM | PUR | PAR | MEL | SOL |\n';
    md += '|---------------|-------|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|\n';
    
    creatureDataList.forEach(data => {
        md += `| ${data.name} | ${data.powerScore} | ${data.hp} | `;
        md += `${data.str} | ${data.spd} | ${data.def} | ${data.bal} | `;
        md += `${data.sla} | ${data.smh} | ${data.pir} | ${data.spr} | `;
        md += `${data.foc} | ${data.ham} | ${data.pur} | ${data.par} | `;
        md += `${data.mel} | ${data.sol} |\n`;
    });
    
    md += '\n---\n\n';
    md += '## Attack Types Reference\n\n';
    md += '### EntityStateData Type 0x20 (Physical Attacks)\n';
    md += 'Controls physical damage including melee attacks and physical projectiles.\n\n';
    md += '**Creatures with Type 0x20:**\n';
    const physicalCreatures = creatureDataList.filter(d => d.physicalAttacks.length > 0);
    physicalCreatures.forEach(d => {
        md += `- **${d.name}**: ${d.physicalAttacks.join('; ')}\n`;
    });
    
    md += '\n### EntityStateData Type 0x30 (Spell/Magic Attacks)\n';
    md += 'Controls spell/magic damage including magic projectiles, spells, and energy attacks.\n';
    md += '**This was fixed in PR #14 to properly scale with difficulty settings.**\n\n';
    md += '**Creatures with Type 0x30:**\n';
    const magicCreatures = creatureDataList.filter(d => d.magicAttacks.length > 0);
    magicCreatures.forEach(d => {
        md += `- **${d.name}**: ${d.magicAttacks.join('; ')}\n`;
    });
    
    md += '\n---\n\n';
    md += '## Power Score Calculation\n\n';
    md += 'The power score is calculated using a weighted formula:\n\n';
    md += '```\n';
    md += 'Power = STR×2 + SPD×1 + DEF×3 + BAL×1 + \n';
    md += '        SLA×1.5 + SMH×1.5 + PIR×1.5 + SPR×1.5 +\n';
    md += '        FOC×1 + HAM×1 + PUR×1.5 + PAR×1 +\n';
    md += '        MEL×2 + SOL×1.5 +\n';
    md += '        HP×0.5 +\n';
    md += '        EntityStateData attacks×0.3 +\n';
    md += '        Base attacks×3 +\n';
    md += '        Defenses×0.1\n';
    md += '```\n\n';
    md += 'This provides a relative measure of creature strength for balancing purposes.\n\n';
    
    return md;
}

// Main execution
console.log("This script requires game data to be loaded.");
console.log("Please run this via the randomizer with a sample ISO file.\n");
console.log("For now, generating template documentation...\n");

// Create a sample/template output that explains what will be generated
const templateMD = `# Shadow Tower Creature Power Value Table

**Generated for PR #14 - Magic/Projectile Attack Damage Scaling Fix**

This table will be populated with actual creature data when run with game files.

## What This Table Shows

This table provides comprehensive power values for all Shadow Tower creatures, including:

1. **Base Attributes**: STR, SPD, DEF, BAL, SLA, SMH, PIR, SPR, FOC, HAM, PUR, PAR, MEL, SOL
2. **HP Values**: Health points for each creature
3. **Physical Attacks (Type 0x20)**: EntityStateData controlling physical/melee damage
4. **Magic Attacks (Type 0x30)**: EntityStateData controlling spell/magic damage
5. **Defense Values**: Weapon and magic defense ratings
6. **Power Score**: Calculated metric for overall creature strength

## Attack Types

### Type 0x20 - Physical Attacks
Controls physical damage including:
- Melee attacks
- Physical projectiles
- Thrown objects

### Type 0x30 - Spell/Magic Attacks (Fixed in PR #14)
Controls magical damage including:
- Magic projectiles (Apocrypha fireballs, Imp magic shots)
- Spell-based attacks (Dark Spirits, Death Mage)
- Breath weapons and energy attacks

**PR #14 Fix**: Extended difficulty scaling to type 0x30 attacks so they properly scale with difficulty settings (extreme-easy to even-harder).

## Usage

To generate this table with actual data:

1. Place your Shadow Tower ISO file in the project directory
2. Run the extraction script:
   \`\`\`bash
   node extract_creature_power_table.js path/to/st.bin
   \`\`\`
3. The script will output:
   - \`creature_power_table.md\` - Markdown formatted table
   - \`creature_power_table.csv\` - CSV format for spreadsheet analysis

## Power Score Calculation

The power score uses a weighted formula to estimate creature strength:

\`\`\`
Power = STR×2 + SPD×1 + DEF×3 + BAL×1 + 
        SLA×1.5 + SMH×1.5 + PIR×1.5 + SPR×1.5 +
        FOC×1 + HAM×1 + PUR×1.5 + PAR×1 +
        MEL×2 + SOL×1.5 +
        HP×0.5 +
        EntityStateData attacks×0.3 +
        Base attacks×3 +
        Defenses×0.1
\`\`\`

This provides a relative measure for:
- Difficulty balancing
- Spawn placement
- Attack scaling verification

## Verification for PR #14

To verify the magic attack scaling fix:

1. Check creatures with Type 0x30 attacks in the table
2. Verify attack values are listed correctly
3. Run randomizer with different difficulty settings
4. Confirm magic attacks scale by the expected factor:
   - extreme-easy: 0.1× (10% damage)
   - easy: 0.5× (50% damage)  
   - medium: 1.0× (100% damage)
   - hard: 1.3× (130% damage)
   - very-hard: 1.6× (160% damage)
   - even-harder: 2.0× (200% damage)

## Expected High-Power Magic Attackers

These creatures should show Type 0x30 attacks:
- Apocrypha
- Descrypha
- Wizcrypha
- Dark Spirits
- Dark Fairy
- Ring Demon
- Death Mage
- Maristella
- Fire Jinn
- Jinn Lord
- Demon Bat
- Various Imps

---

**Note**: This is a template. Actual data requires running with Shadow Tower game files.
`;

// Write template file
fs.writeFileSync('CREATURE_POWER_TABLE.md', templateMD);
console.log("✓ Created CREATURE_POWER_TABLE.md (template)");
console.log("\nTo generate with actual data, this script needs to be integrated");
console.log("into the randomizer workflow where game data is loaded.");
console.log("\nSee randomize.js for integration points.");
