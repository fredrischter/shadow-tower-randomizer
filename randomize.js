'use strict';

const randomizer_common = require('./randomizer_common');
const data_model = require('./data_model');
const fs = require('fs');
const path = require('path');
const util = require('util');

function randomize(paramsFile, stDir) {
    let params = JSON.parse(fs.readFileSync(paramsFile));
    let changeSetPath = path.dirname(paramsFile);
    let changeSetFile = changeSetPath + path.sep + "changeset.json"
    console.log(params);

    const logFileRandomize = fs.createWriteStream(changeSetPath + path.sep + 'randomize.log', {
        flags: 'w+'
    });
    console.log = function() {
        logFileRandomize.write(util.format.apply(null, arguments) + '\n');
    }

    if (!paramsFile || !paramsFile.endsWith(".json")) {
        console.log("ERROR - didn't provide .json file part as argument.");
        process.exit(1);
        return;
    }

    if (!stDir) {
        console.log("ERROR - didn't provide path to shadow tower extracted iso.");
        process.exit(1);
        return;
    }

    const PRESET_NO_CHANGE = "no-change";
    const PRESET_ONLY_FIX_KING_HOPPER = "only-fix-king-hopper";
    const PRESET_ONLY_APPLY_DIRECTIVES = "only-apply-directives";
    const DIFFICULTY_EASY = "easy";
    const DIFFICULTY_MEDIUM = "medium";
    const DIFFICULTY_HARD = "hard";
    const DIFFICULTY_VERY_HARD = "very-hard";
    const DIFFICULTY_EVEN_HARDER = "even-harder";

    var factorByDificultyParam = {
        "easy": 0.5,
        "medium": 1,
        "hard": 2,
        "very-hard": 3,
        "even-harder": 4
    };

	const mapFolder = changeSetPath + path.sep + 'map';
	fs.mkdirSync(mapFolder);
	fs.copyFileSync('maps.html', changeSetPath + path.sep + 'maps.html');

    var difficultyFactor = factorByDificultyParam[params.difficulty];

    let tFilePath = stDir + path.sep + "ST" + path.sep + "COM" + path.sep + "FDAT.T";
    var tfileOriginal = new TFILEReader(tFilePath).readTFormat();
    var tfile = new TFILEReader(tFilePath).readTFormat();
    data_model.setup(tfile);

    const logFile2 = fs.createWriteStream(changeSetPath + path.sep + 'readable.log', {
        flags: 'w+'
    });
    console.log = function() {
        logFile2.write(util.format.apply(null, arguments) + '\n');
    }

    function swapCreatures(creature1, creature2, changeSet) {
        if (creature1 == creature2) {
            return;
        }

        // model
        for (var i in creature1.modelFiles) {
            changeSet.push({
                "fileSwap": {
                    "file1": creature1.modelFiles[i],
                    "file2": creature2.modelFiles[i]
                }
            });
        }

        // entity bin
        creature1.swap(creature2);

        // entity states list of objects - this swap requires area to rewrite that entity states section redefining the offsets
        var tmp = creature1.entityStates;
        creature1.entityStates = creature2.entityStates;
        creature2.entityStates = tmp;
    }

    var goodItems = [
        item_109_endless_amulet, item_58_fortune_great_helm, item_45_fiery_bow_gun, item_e4_ring_of_dead_spirit, item_f9_king_bracelet, item_fa_moon_bracelet, item_c_shadow_blade, item_17_dragon_sword, item_b3_tower_shield_of_honor,
        item_c9_summoner_ring_of_frost, item_ca_summoner_ring_of_frost, item_cb_balance_ring_of_frost, item_cc_priest_ring_of_frost, item_cd_sorcerer_ring_of_frost, item_ce_soul_ring,
        item_76_god_plate, item_78_knight_plate_mail, item_31_blood_sword,
        item_77_plate_mail_of_rage, item_25_magical_bastard_sword, item_3e_living_axe,
        item_137_soul_pod_53_sp, item_12c_pitcher_of_nadya_hp, item_12d_pitcher_of_nadya_mp, item_110_fiery_key, item_111_kings_key, item_112_key_of_knowledge, item_137_soul_pod_53_sp, item_113_beast_key, item_114_floodgate_key, item_115_mermaid_key, item_116_key_of_delusion, item_137_soul_pod_53_sp, item_117_brass_key, item_118_iron_key, item_129_sealed_sword_stone, item_12a_young_dragon_gem, item_137_soul_pod_53_sp, item_12e_dorados_ashes, item_12f_spirit_key, item_130_blue_crystal, item_131_flaming_key,
        item_bf_master_gothic_shield, item_c1_gothic_shield_of_rage, item_c2_shinning_gothic_shield, item_c3_holy_gothic_shield,
        item_44_bow_gun, item_43_warrior_bow, item_42_bow, item_d_shadow_wolf, item_e_shadow_tiger, item_c0_gothic_shield_of_power, item_1a_lethal_bastard_sword, item_1b_swift_bastard_sword, item_1c_keenest_bastard_sword, item_1d_crushing_bastard_sword, item_1e_fiery_bastard_sword, item_20_shining_bastard_sword, item_23_guardian_bastard_sword, item_24_dark_sword, item_26_righteous_sword, item_2a_swift_great_sword, item_2c_deadly_great_sword, item_2d_keenest_great_sword, item_2e_crushing_great_sword, item_2f_mighty_great_sword, item_30_guardian_great_sword,
        item_4b_wizard_crown, item_4c_devil_crown, item_52_full_helm_of_curing, item_57_harden_great_helm, item_59_mystic_great_helm, item_5a_holy_great_helm,
        item_cf_soul_ring, item_d0_holy_ring_of_resist, item_d1_holy_ring_of_priest, item_d2_holy_ring, item_d3_dark_ring, item_d4_dark_ring, item_d5_dark_priest_ring,
        item_d6_dark_sorcerer_ring, item_da_sorcerer_ring_of_poison, item_db_caustic_ring, item_dc_caustic_ring, item_dd_caustic_priest_ring,
        item_de_caustic_sorcerer_ring, item_df_ring_of_desire, item_e0_ring_of_ice, item_e1_ring_of_dark_souls, item_e2_black_ring, item_e3_ring_of_seal, item_e5_ring_of_rage, item_e6_ring_of_drain,
        item_6d_shining_plate_mail, item_6e_dark_plate_mail, item_6f_plate_mail_of_protect, item_70_eternal_plate_mail, item_71_devil_plate_mail, item_72_holy_plate_mail, item_73_full_plate, item_87_swift_gauntlet, item_88_deadly_gauntlet, item_8b_deadly_arm_guard, item_8c_master_arm_guard, item_96_swift_steel_boots, item_9e_leg_guard_of_protect, item_a0_holy_leg_guard, item_ae_shining_great_shield, item_af_dark_great_shield, item_b0_deadly_great_shield, item_b4_harden_tower_shield, item_b5_tower_shield_of_protect, item_b6_caustic_tower_shield, item_b9_gothic_shield, item_ba_harden_gothic_shield, item_bb_gothic_shield, item_bc_gothic_shield_of_resist, item_bd_gothic_shield_of_honor, item_be_gothic_shield_of_balance, item_eb_bracelet_of_curing, item_ec_bracelet_of_recovery, item_ed_mind_bracelet, item_ee_mighty_ring, item_ef_deadly_bracelet, item_f0_guardian_bracelet, item_f1_sorcerer_bracelet, item_f2_priest_bracelet, item_f8_holy_bracelet, item_fb_magical_amulet
    ];

    let changeSet = [];

    var forEachCreatureSpawn = [];
    var forEachValidCreature = [];
    var forEachItem = [];
    var forEachCollectable = [];

    function presetKingHopperFixforEachCreatureSpawn(spawn, area, index) {
        if (spawn.creature.name.includes("king_hopper")) {
            console.log("Setting spawn change to 100% and fixing mutex group, creature " + spawn.creature.name);
            spawn.chance.set(100);
            spawn.mutexGroup.set(14);
        }
    }

    function presetDirectivesforEachCreatureSpawn(spawn, area, index) {
        console.log("Setting spawn change to 100% , creature " + spawn.creature.name);
        spawn.chance.set(100);
        if (!spawn.drop1.isNull()) {
            spawn.drop1Chance.set(100);
        }
        if (!spawn.drop2.isNull()) {
            spawn.drop2Chance.set(100);
        }
        if (!spawn.drop3.isNull()) {
            spawn.drop3Chance.set(100);
        }
    }

    function presetDirectivesforEachItem(item) {
        if (item.attribute1.getAttributeType() == ATTR_HP_RECOVERY) {
            item.attribute1.setAttributeType(ATTR_NONE);
            console.log("Removing ATTR_HP_RECOVERY from equip " + item.name);
        }
        if (item.attribute2.getAttributeType() == ATTR_HP_RECOVERY) {
            item.attribute2.setAttributeType(ATTR_NONE);
            console.log("Removing ATTR_HP_RECOVERY from equip " + item.name);
        }
        if (item.attribute1.getAttributeType() == ATTR_MP_RECOVERY) {
            item.attribute1.setAttributeType(ATTR_NONE);
            console.log("Removing ATTR_MP_RECOVERY from equip " + item.name);
        }
        if (item.attribute2.getAttributeType() == ATTR_MP_RECOVERY) {
            item.attribute2.setAttributeType(ATTR_NONE);
            console.log("Removing ATTR_MP_RECOVERY from equip " + item.name);
        }
    }

    var equipsAttributeFactor = 1 / difficultyFactor;
    var creatureAttributeFactor = difficultyFactor;

    function applyDifficultyForEachValidCreature(creature, area, index) {
        creature.str.set(Math.min(256, Math.ceil(creature.str.get() * creatureAttributeFactor)));
        creature.spd.set(Math.min(256, Math.ceil(creature.spd.get() * creatureAttributeFactor)));
        creature.def.set(Math.min(256, Math.ceil(creature.def.get() * creatureAttributeFactor)));
        creature.bal.set(Math.min(256, Math.ceil(creature.bal.get() * creatureAttributeFactor)));
        creature.sla.set(Math.min(256, Math.ceil(creature.sla.get() * creatureAttributeFactor)));
        creature.smh.set(Math.min(256, Math.ceil(creature.smh.get() * creatureAttributeFactor)));
        creature.pir.set(Math.min(256, Math.ceil(creature.pir.get() * creatureAttributeFactor)));
        creature.spr.set(Math.min(256, Math.ceil(creature.spr.get() * creatureAttributeFactor)));
        creature.foc.set(Math.min(256, Math.ceil(creature.foc.get() * creatureAttributeFactor)));
        creature.ham.set(Math.min(256, Math.ceil(creature.ham.get() * creatureAttributeFactor)));
        creature.pur.set(Math.min(256, Math.ceil(creature.pur.get() * creatureAttributeFactor)));
        creature.par.set(Math.min(256, Math.ceil(creature.par.get() * creatureAttributeFactor)));
        creature.mel.set(Math.min(256, Math.ceil(creature.mel.get() * creatureAttributeFactor)));
        creature.sol.set(Math.min(256, Math.ceil(creature.sol.get() * creatureAttributeFactor)));

        console.log("Applying factor " + creatureAttributeFactor + " to creature " + creature.name + ". Attributes str " + creature.str.get() + " spd " + creature.spd.get() + " def " + creature.def.get() + " bal " + creature.bal.get() + " sla " + creature.sla.get() + " smh " + creature.smh.get() + " pir " + creature.pir.get() + " spr " + creature.spr.get() + " foc " + creature.foc.get() + " ham " + creature.ham.get() + " pur " + creature.pur.get() + " par " + creature.par.get() + " mel " + creature.mel.get() + " sol " + creature.sol.get());
        //It is too much, makes the game to take too long
        //creature.hp.set(Math.min(256,Math.floor( creature.hp.get() * creatureAttributeFactor)));

    }

    function applyDifficultyForEachItem(item) {
        item.str.set(Math.min(100, Math.ceil(item.str.get() * equipsAttributeFactor)));
        item.spd.set(Math.min(100, Math.ceil(item.spd.get() * equipsAttributeFactor)));
        item.def.set(Math.min(100, Math.ceil(item.def.get() * equipsAttributeFactor)));
        item.bal.set(Math.min(100, Math.ceil(item.bal.get() * equipsAttributeFactor)));
        item.sla.set(Math.min(100, Math.ceil(item.sla.get() * equipsAttributeFactor)));
        item.smh.set(Math.min(100, Math.ceil(item.smh.get() * equipsAttributeFactor)));
        item.pir.set(Math.min(100, Math.ceil(item.pir.get() * equipsAttributeFactor)));
        item.spr.set(Math.min(100, Math.ceil(item.spr.get() * equipsAttributeFactor)));
        item.foc.set(Math.min(100, Math.ceil(item.foc.get() * equipsAttributeFactor)));
        item.ham.set(Math.min(100, Math.ceil(item.ham.get() * equipsAttributeFactor)));
        item.pur.set(Math.min(100, Math.ceil(item.pur.get() * equipsAttributeFactor)));
        item.par.set(Math.min(100, Math.ceil(item.par.get() * equipsAttributeFactor)));
        item.mel.set(Math.min(100, Math.ceil(item.mel.get() * equipsAttributeFactor)));
        item.sol.set(Math.min(100, Math.ceil(item.sol.get() * equipsAttributeFactor)));
        item.hp.set(Math.min(100, Math.ceil(item.hp.get() * equipsAttributeFactor)));
        item.weight.set(Math.min(100, Math.ceil(item.weight.get() / equipsAttributeFactor)));
        item.max_dura.set(Math.min(100, Math.ceil(item.max_dura.get() * equipsAttributeFactor)));
        item.dura.set(Math.min(100, Math.ceil(item.dura.get() * equipsAttributeFactor)));

        console.log("Applying factor " + equipsAttributeFactor + " to item " + item.name + ". Attributes " + "str " + item.str.get() + " spd " + item.spd.get() + " def " + item.def.get() + " bal " + item.bal.get() + " sla " + item.sla.get() + " smh " + item.smh.get() + " pir " + item.pir.get() + " spr " + item.spr.get() + " foc " + item.foc.get() + " ham " + item.ham.get() + " pur " + item.pur.get() + " par " + item.par.get() + " mel " + item.mel.get() + " sol " + item.sol.get() + " hp " + item.hp.get() + " weight " + item.weight.get() + " max_dura " + item.max_dura.get() +
            " dura " + item.dura.get());
    }

    var dropRemovalLoop=0;
    function applyDifficultyForEachSpawn(spawn, area, index) {
        if (spawn.drop1.isNull()) {
            return;
        }

        dropRemovalLoop++;
        if (dropRemovalLoop > difficultyFactor) {
            dropRemovalLoop = 0;
            return;
        }

        console.log("Applying difficulty by removing drop " + items[spawn.drop1.get()] + " of creature " + spawn.creature.name);

        spawn.drop1.set(0);
        spawn.drop1Chance.set(0);
    }

    var collectableRemovalLoop=0;
    function applyDifficultyForEachCollectable(collectable, area) {
    	if (collectable.isBlank()) {
    		return;
    	}

        collectableRemovalLoop++;
        if (collectableRemovalLoop > difficultyFactor) {
            collectableRemovalLoop = 0;
            return;
        }

        console.log("Applying difficulty by removing collectable " + itemData[collectable.type.get()].name + " of area " + area.name);

        collectable.blank();
    }

    function operate() {

        // ------- PRESET No Change

        if (params.preset == PRESET_NO_CHANGE) {
            return;
        }

        // ------- PRESET King hopper

        if (params.preset == PRESET_ONLY_FIX_KING_HOPPER) {
            forEachCreatureSpawn.push(presetKingHopperFixforEachCreatureSpawn);
        }

        // ------- PRESET Directives

        if (params.preset == PRESET_ONLY_APPLY_DIRECTIVES) {
            forEachCreatureSpawn.push(presetKingHopperFixforEachCreatureSpawn);
            forEachCreatureSpawn.push(presetDirectivesforEachCreatureSpawn);
            forEachItem.push(presetDirectivesforEachItem);
        }

        // ------- ApplyDifficulty

        console.log("Difficulty " + params.difficulty + ", factor " + factorByDificultyParam[params.difficulty]);

        if (params.difficulty && params.difficulty != DIFFICULTY_MEDIUM) {
            forEachValidCreature.push(applyDifficultyForEachValidCreature);
            forEachItem.push(applyDifficultyForEachItem);
            forEachCreatureSpawn.push(applyDifficultyForEachSpawn);
            forEachCollectable.push(applyDifficultyForEachCollectable);
        }

    }

    operate();

    for (var i in items) {
        forEachItem.forEach((func) => func(items[i]));
    }

    for (var a in areas) {
        var area = areas[a];
        if (!area.spawns) {
            continue;
        }
        for (var index = 0; index < SPAWN_ENTRIES_COUNT; index++) {
            var spawn = area.spawns[index];
            if (!spawn.chance.isNull() &&
                !spawn.name.endsWith("door")) {
                forEachCreatureSpawn.forEach((func) => func(spawn, area, index));
            }
        }

        for (var index = 0; index < CREATURE_COUNT; index++) {
            var creature = area.creatures[index];
            if (!creature.isBlank) {
                forEachValidCreature.forEach((func) => func(creature, area, index));
            }
        }

        for (var index = 0; index < COLLECTABLE_COUNT; index++) {
            var collectable = area.collectables[index];
            forEachCollectable.forEach((func) => func(collectable, area));
        }
    }

    console.log = function() {
        logFileRandomize.write(util.format.apply(null, arguments) + '\n');
    }

    //data_model.writeMapImage(mapFolder);

    for (var a in areas) {
        var area = areas[a];
        area.reinjectEntityDataFromCreaturesToFile();
    }

    for (var i in tfileOriginal.files) {
        var originalPart = tfileOriginal.files[i];
        var changedPart = tfile.files[i];
        let changes = {};
        let filePath = originalPart.fileName;
        var anyChange = false;
        for (var k = 0; k < originalPart.bin.length; k++) {
            var originalValue = originalPart.originalBin[k];
            if (changedPart.bin[k] != originalValue) {
                //console.log("Change " + k.toString(16) + " " + originalValue.toString(16) + " to " + changedPart.bin[k].toString(16));
                changes[k.toString(16)] = changedPart.bin[k].toString(16);
                anyChange = true;
            }
        }
        if (anyChange) {
            changeSet.push({
                "file": filePath,
                "bytes": changes
            });
        }
    }

    fs.writeFileSync(changeSetFile, JSON.stringify(changeSet));
}

if (process.argv[1].indexOf("randomize.js") > -1) {
    randomize(process.argv[2], process.argv[3]);
} else {
    module.exports = randomize;
}