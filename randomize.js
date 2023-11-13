'use strict';

const randomizer_common = require('./randomizer_common');
const data_model = require('./data_model');
const fs = require('fs');
const path = require('path');
const util = require('util');

function randomize(paramsFile, stDir) {

    for (var i = 2; i < process.argv.length; i++) {
        if (process.argv[i] == "toNotGenerateImages") {
            global.toNotGenerateImages = true;
        }
    }

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
    const PRESET_FIX_KING_HOPPER = "fix-king-hopper";
    const PRESET_APPLY_DIRECTIVES = "apply-directives";
    const PRESET_ANY_PRC = "any%";
    const PRESET_100_PRC = "100%";
    const PRESET_COMEDY = "comedy";
    const PRESET_BONANZA = "bonanza";
    const PRESET_SCARY_GAME = "scary-game";

    const DIFFICULTY_EASY = "easy";
    const DIFFICULTY_EXTREME_EASY = "extreme-easy";
    const DIFFICULTY_MEDIUM = "medium";
    const DIFFICULTY_HARD = "hard";
    const DIFFICULTY_VERY_HARD = "very-hard";
    const DIFFICULTY_EVEN_HARDER = "even-harder";

    var PROGRESSIVENESS_FLAT = "flat";
    var PROGRESSIVENESS_MEDIUM = "medium";
    var PROGRESSIVENESS_INCREASED = "increased";
    var PROGRESSIVENESS_CRAZY = "crazy";

    var factorByDificultyParam = {
        "extreme-easy": 0.1,
        "easy": 0.5,
        "medium": 1,
        "hard": 1.3,
        "very-hard": 1.6,
        "even-harder": 2
    };

    const mapFolder = changeSetPath;
    fs.mkdirSync(mapFolder + path.sep + 'maps');
    fs.copyFileSync('maps.html', changeSetPath + path.sep + 'maps.html');

    var difficultyFactor = factorByDificultyParam[params.difficulty];
    var smoothDifficultyFactor = (1 + difficultyFactor)/3;

    let tFilePath = stDir + path.sep + "ST" + path.sep + "COM" + path.sep + "FDAT.T";
    var tfileOriginal = new TFILEReader(tFilePath).readTFormat();
    var tfile = new TFILEReader(tFilePath).readTFormat();
    data_model.setup(tfile);

    const logFile2 = fs.createWriteStream(changeSetPath + path.sep + 'readable.txt', {
        flags: 'w+'
    });
    console.log = function() {
        logFile2.write(util.format.apply(null, arguments) + '\n');
    }

    if (params.seed) {
        seedRandom(params.seed);
        console.log("Randomization - Using given seed " + params.seed);
    } else {
        var seed = useRandomSeed();
        console.log("Randomization - Using generated seed " + seed);
    }
    console.log("Parameters - " + JSON.stringify(params));

	// model files
	let modelFileNames = [
		stDir + path.sep + "ST" + path.sep + "CHR0" + path.sep + "M00.T", stDir + path.sep + "ST" + path.sep + "CHR0" + path.sep + "M01.T", stDir + path.sep + "ST" + path.sep + "CHR0" + path.sep + "M02.T", stDir + path.sep + "ST" + path.sep + "CHR0" + path.sep + "M03.T", stDir + path.sep + "ST" + path.sep + "CHR0" + path.sep + "M04.T", stDir + path.sep + "ST" + path.sep + "CHR0" + path.sep + "M05.T", stDir + path.sep + "ST" + path.sep + "CHR0" + path.sep + "M06.T",/*stDir + path.sep + "ST" + path.sep + "CHR0" + path.sep + "M07.T",*/ stDir + path.sep + "ST" + path.sep + "CHR0" + path.sep + "M08.T", stDir + path.sep + "ST" + path.sep + "CHR0" + path.sep + "M09.T",
		stDir + path.sep + "ST" + path.sep + "CHR1" + path.sep + "M10.T", stDir + path.sep + "ST" + path.sep + "CHR1" + path.sep + "M11.T", stDir + path.sep + "ST" + path.sep + "CHR1" + path.sep + "M12.T", stDir + path.sep + "ST" + path.sep + "CHR1" + path.sep + "M13.T", stDir + path.sep + "ST" + path.sep + "CHR1" + path.sep + "M14.T", stDir + path.sep + "ST" + path.sep + "CHR1" + path.sep + "M15.T",/*stDir + path.sep + "ST" + path.sep + "CHR1" + path.sep + "M16.T",*/ stDir + path.sep + "ST" + path.sep + "CHR1" + path.sep + "M17.T", stDir + path.sep + "ST" + path.sep + "CHR1" + path.sep + "M18.T",/*stDir + path.sep + "ST" + path.sep + "CHR1" + path.sep + "M19.T",*/
		stDir + path.sep + "ST" + path.sep + "CHR2" + path.sep + "M20.T", stDir + path.sep + "ST" + path.sep + "CHR2" + path.sep + "M21.T",/*stDir + path.sep + "ST" + path.sep + "CHR2" + path.sep + "M22.T",*/stDir + path.sep + "ST" + path.sep + "CHR2" + path.sep + "M23.T", stDir + path.sep + "ST" + path.sep + "CHR2" + path.sep + "M24.T", stDir + path.sep + "ST" + path.sep + "CHR2" + path.sep + "M25.T", stDir + path.sep + "ST" + path.sep + "CHR2" + path.sep + "M26.T", stDir + path.sep + "ST" + path.sep + "CHR2" + path.sep + "M27.T", stDir + path.sep + "ST" + path.sep + "CHR2" + path.sep + "M28.T",/*stDir + path.sep + "ST" + path.sep + "CHR2" + path.sep + "M29.T",*/
		stDir + path.sep + "ST" + path.sep + "CHR3" + path.sep + "M30.T",/*stDir + path.sep + "ST" + path.sep + "CHR3" + path.sep + "M31.T",*/stDir + path.sep + "ST" + path.sep + "CHR3" + path.sep + "M32.T", stDir + path.sep + "ST" + path.sep + "CHR3" + path.sep + "M33.T",/*stDir + path.sep + "ST" + path.sep + "CHR3" + path.sep + "M34.T", stDir + path.sep + "ST" + path.sep + "CHR3" + path.sep + "M35.T", stDir + path.sep + "ST" + path.sep + "CHR3" + path.sep + "M36.T",*/stDir + path.sep + "ST" + path.sep + "CHR3" + path.sep + "M37.T", stDir + path.sep + "ST" + path.sep + "CHR3" + path.sep + "M38.T",/*stDir + path.sep + "ST" + path.sep + "CHR3" + path.sep + "M39.T",*/
		stDir + path.sep + "ST" + path.sep + "CHR4" + path.sep + "M40.T", stDir + path.sep + "ST" + path.sep + "CHR4" + path.sep + "M41.T"
	];
	for (var i in modelFileNames) {
		let modelFile = new TFILEReader(modelFileNames[i]).readTFormat();
		data_model.areas[i].modelFile = modelFile;
		for (var c in data_model.areas[i].creatures) {
			if (c>14) {
				continue;
			}
			let creature = data_model.areas[i].creatures[c];
			creature.modelFiles = [
				modelFile.files[c*5+1].fileName,
				modelFile.files[c*5+2].fileName,
				modelFile.files[c*5+3].fileName,
				modelFile.files[c*5+4].fileName,
				modelFile.files[c*5+5].fileName,
			]
		}
	}
	
    function swapCreatures(creature1, creature2, changeSet) {
        if (creature1 == creature2) {
            return;
        }

        console.log("Swapping creatures " + creature1.name + " ("+creature1.area.name + ") and " + creature2.name + " (" + creature2.area.name + ")");

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

        //creature1.attack1.swap(creature2.attack1);
        //creature1.attack2.swap(creature2.attack2);
        //creature1.magic1.swap(creature2.magic1);
        //creature1.something1.swap(creature2.something1);
        //creature1.something2.swap(creature2.something2);
        //creature1.something3.swap(creature2.something3);
        //creature1.something4.swap(creature2.something4);

        creature1.str.swap(creature2.str);
        creature1.spd.swap(creature2.spd);
        creature1.def.swap(creature2.def);
        creature1.bal.swap(creature2.bal);
        creature1.sla.swap(creature2.sla);
        creature1.smh.swap(creature2.smh);
        creature1.pir.swap(creature2.pir);
        creature1.spr.swap(creature2.spr);
        creature1.foc.swap(creature2.foc);
        creature1.ham.swap(creature2.ham);
        creature1.pur.swap(creature2.pur);
        creature1.par.swap(creature2.par);
        creature1.mel.swap(creature2.mel);
        creature1.sol.swap(creature2.sol);
        creature1.hp.swap(creature2.hp);

    }

    let changeSet = [];

    var forEachCreatureSpawn = [];
    var forEachValidCreature = [];
    var forEachItem = [];
    var forEachCollectable = [];
    var forEachObject = [];

    // Directives

    function presetKingHopperFixforEachCreatureSpawn(spawn, area, index) {
        if (spawn.name().includes("king_hopper")) {
            console.log("Setting spawn change to 100% and fixing mutex group, creature " + spawn.name());
            spawn.chance.set(100);
            spawn.mutexGroup.set(14);
        }
    }

    function presetDirectivesforEachCreatureSpawn(spawn, area, index) {
        console.log("Setting spawn change to 100% , creature " + spawn.name());
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
        if (difficultyFactor >= 1) {
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
    }

    // Difficulty

    var equipsAttributeFactor = 1 / difficultyFactor;
    var creatureAttributeFactor = difficultyFactor;

    function applyDifficultyForEachValidCreature(creature, area, index) {
        // This is actually attributes increase to be earned once creature is killed.
        // May be used to tweak progression.
        //creature.str.set(Math.min(255, Math.ceil(creature.str.get() * creatureAttributeFactor)));
        //creature.spd.set(Math.min(255, Math.ceil(creature.spd.get() * creatureAttributeFactor)));
        //creature.def.set(Math.min(255, Math.ceil(creature.def.get() * creatureAttributeFactor)));
        //creature.bal.set(Math.min(255, Math.ceil(creature.bal.get() * creatureAttributeFactor)));
        //creature.sla.set(Math.min(255, Math.ceil(creature.sla.get() * creatureAttributeFactor)));
        //creature.smh.set(Math.min(255, Math.ceil(creature.smh.get() * creatureAttributeFactor)));
        //creature.pir.set(Math.min(255, Math.ceil(creature.pir.get() * creatureAttributeFactor)));
        //creature.spr.set(Math.min(255, Math.ceil(creature.spr.get() * creatureAttributeFactor)));
        //creature.foc.set(Math.min(255, Math.ceil(creature.foc.get() * creatureAttributeFactor)));
        //creature.ham.set(Math.min(255, Math.ceil(creature.ham.get() * creatureAttributeFactor)));
        //creature.pur.set(Math.min(255, Math.ceil(creature.pur.get() * creatureAttributeFactor)));
        //creature.par.set(Math.min(255, Math.ceil(creature.par.get() * creatureAttributeFactor)));
        //creature.mel.set(Math.min(255, Math.ceil(creature.mel.get() * creatureAttributeFactor)));
        //creature.sol.set(Math.min(255, Math.ceil(creature.sol.get() * creatureAttributeFactor)));

        console.log("DEBUG - Creature " + creature.name);
        //creature.weight.set(0x1);
        if (creature.minWeaponDefense) {
            console.log("DEBUG - Changing denfese. " + creature.minWeaponDefense.get() + " to " + Math.min(255, creature.minWeaponDefense.get() * creatureAttributeFactor));
            creature.minWeaponDefense.set(Math.min(255, creature.minWeaponDefense.get() * creatureAttributeFactor));
            creature.maxWeaponDefense.set(Math.min(255, creature.maxWeaponDefense.get() * creatureAttributeFactor));
            creature.minMagicDefense.set(Math.min(255, creature.minMagicDefense.get() * creatureAttributeFactor));
            creature.maxMagicDefense.set(Math.min(255, creature.maxMagicDefense.get() * creatureAttributeFactor));
        }
        creature.entityStates.forEach((entityState) => {
            if (entityState.type == 0x20) {
                console.log("DEBUG - Changing attack. " + entityState.weaponAttack1.get() + " to " + Math.min(255, entityState.weaponAttack1.get() * creatureAttributeFactor));
                entityState.weaponAttack1.set(Math.min(255, entityState.weaponAttack1.get() * creatureAttributeFactor));
                entityState.weaponAttack2.set(Math.min(255, entityState.weaponAttack2.get() * creatureAttributeFactor));
                entityState.weaponAttack3.set(Math.min(255, entityState.weaponAttack3.get() * creatureAttributeFactor));
            }
        });

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
        item.weight.set(Math.min(200, Math.ceil(item.weight.get() / equipsAttributeFactor)));
        item.max_dura.set(Math.min(100, Math.ceil(item.max_dura.get() * equipsAttributeFactor)));
        item.dura.set(Math.min(100, Math.ceil(item.dura.get() * equipsAttributeFactor)));

        console.log("Applying factor " + equipsAttributeFactor + " to item " + item.name + ". Attributes " + "str " + item.str.get() + " spd " + item.spd.get() + " def " + item.def.get() + " bal " + item.bal.get() + " sla " + item.sla.get() + " smh " + item.smh.get() + " pir " + item.pir.get() + " spr " + item.spr.get() + " foc " + item.foc.get() + " ham " + item.ham.get() + " pur " + item.pur.get() + " par " + item.par.get() + " mel " + item.mel.get() + " sol " + item.sol.get() + " hp " + item.hp.get() + " weight " + item.weight.get() + " max_dura " + item.max_dura.get() +
            " dura " + item.dura.get());
    }

    var dropRemovalLoop=0;
    function applyDifficultyForEachSpawnByRemovingDrop(spawn, area, index) {
        if (spawn.drop1.isNull()) {
            return;
        }
/*
        var thisItem = itemData[spawn.drop1.get()];

        if (thisItem.type.get() == KEY ||
            thisItem.name.includes("vaccine")) {
            return;
        }

        dropRemovalLoop++;
        if (dropRemovalLoop > difficultyFactor) {
            dropRemovalLoop = 0;
            return;
        }

        console.log("Applying difficulty by removing drop " + thisItem.name + " of spawn " + spawn.name());

        spawn.drop1.null();
        spawn.drop1Chance.set(0);
        spawn.drop2.null();
        spawn.drop2Chance.set(0);
        spawn.drop2.null();
        spawn.drop2Chance.set(0);*/
    }

    var collectableRemovalLoop=0;
    function applyDifficultyForEachCollectableByRemoving(collectable, area) {
        /*if (collectable.isBlank()) {
            return;
        }

        collectableRemovalLoop++;
        if (collectableRemovalLoop > difficultyFactor) {
            collectableRemovalLoop = 0;
            return;
        }

        console.log("Applying difficulty by removing collectable " + itemData[collectable.type.get()].name + " of area " + area.name);

        collectable.blank();*/
    }

    // Collectables and Drops randomization

    var allUniqueItems = [
        item_47_cap, item_32_mace, item_35_morning_star, item_a1_buckler, item_1_short_sword, item_2_deadly_short_sword, item_4_long_sword, item_3_long_sword, item_a3_small_shield, item_5c_quilted_armor, item_5d_leather_armor, item_5b_quilted_armor, item_10a_cune, item_10a_cune, item_99_leg_guard, item_10a_cune, item_f_broad_sword, item_9_rapier, item_5_long_sword, item_10a_cune, item_60_scale_mail, item_5e_leather_armor, item_61_scale_mail, item_7e_metal_glove, item_10a_cune, item_a6_large_shield, item_92_steel_boots_of_resist, item_82_caustic_hand_guard, item_81_fiery_gauntlet, item_49_crown_of_resist, item_48_crown, item_10a_cune, item_8e_leather_boots, item_4a_crown_of_composure, item_a4_small_shield, item_90_steel_boots, item_b_lethal_rapier, item_23_guardian_bastard_sword, item_ac_great_shield, item_10a_cune, item_10a_cune, item_10a_cune, item_a2_buckler, item_8d_leather_boots, item_8f_hard_boots, item_79_leather_glove, item_7c_wooden_glove, item_5f_magical_leather_armor, item_36_swift_morning_star,
        item_34_shining_mace, item_4d_helm, item_7a_leather_glove, item_10a_cune, item_39_axe, item_91_steel_boots, item_7b_leather_glove, item_10a_cune, item_10a_cune, item_a7_large_shield, item_63_plate_mail, item_62_scale_mail_of_curing, item_11_broad_sword, item_10a_cune, item_33_crushing_mace, item_10a_cune, item_10a_cune, item_ec_bracelet_of_recovery, item_10a_cune, item_42_bow, item_ce_soul_ring, item_14_crushing_broad_sword, item_fb_magical_amulet, item_a5_shield_of_resist, item_10a_cune, item_c4_summoner_ring_of_fire, item_7_fiery_long_sword, item_3a_giant_axe, item_af_dark_great_shield, item_18_bastard_sword, item_e9_bracelet_of_movement, item_9b_harden_leg_guard, item_10a_cune, item_10a_cune, item_10a_cune, item_10a_cune, item_83_gauntlet,
        item_10_broad_sword, item_95_caustic_steel_boots, item_10a_cune, item_7d_wooden_glove, item_a9_large_shield_of_balance, item_10a_cune, item_10a_cune, item_10a_cune, item_a8_harden_large_shield, item_10a_cune, item_10a_cune, item_51_full_helm, item_64_plate_mail, item_4b_wizard_crown, item_fe_deadly_amulet, item_ea_bracelet_of_composure, item_10a_cune, item_b1_tower_shield, item_b3_tower_shield_of_honor, item_10a_cune, item_10a_cune, item_4f_magical_helm, item_8_silent_sword, item_2c_deadly_great_sword, item_27_great_sword, item_9a_leg_guard, item_67_plate_mail_of_curing, item_6_keenest_long_sword, item_93_steel_boots_of_curing, item_94_steel_boots_of_resist, item_c5_summoner_ring_of_fire, item_19_bastard_sword, item_50_full_helm, item_73_full_plate, item_68_plate_mail, item_3c_crushing_axe, item_b2_tower_shield, item_fc_amulet_of_movement, item_6a_fiery_plate_mail, item_ed_mind_bracelet, item_ff_amulet_of_composure, item_3d_deadly_axe, item_84_gauntlet, item_db_caustic_ring,
        item_cf_soul_ring, item_ae_shining_great_shield, item_9c_fiery_leg_guard, item_98_steel_boots_of_resist, item_a_rapier, item_c_shadow_blade, item_101_amulet_of_resist, item_16_guardian_broad_sword, item_aa_fiery_large_shield, item_fd_amulet_of_guardian, item_54_fiery_full_helm, item_10a_cune, item_10a_cune, item_10a_cune, item_10a_cune, item_10a_cune, item_10a_cune, item_10a_cune, item_10a_cune, item_96_swift_steel_boots, item_10a_cune, item_10a_cune, item_44_bow_gun, item_d8_ring_of_poison, item_6f_plate_mail_of_protect, item_b4_harden_tower_shield, item_1e_fiery_bastard_sword, item_c7_priest_ring_of_fire, item_10a_cune, item_10a_cune, item_10a_cune, item_80_metal_glove, item_37_frosty_morning_star, item_6c_caustic_plate_mail, item_9d_frosty_leg_guard, item_cb_balance_ring_of_frost, item_1f_frosty_bastard_sword, item_10a_cune, item_10a_cune, item_6b_frosty_plate_mail, item_9f_caustic_leg_guard, item_da_sorcerer_ring_of_poison, item_ca_summoner_ring_of_frost, item_10a_cune, item_cd_sorcerer_ring_of_frost, item_d7_ring_of_poison, item_b6_caustic_tower_shield, item_d9_ring_of_protect, item_c9_summoner_ring_of_frost, item_e8_bracelet_of_balance, item_e7_bracelet_of_resist, item_d3_dark_ring,
        item_ef_deadly_bracelet, item_10a_cune, item_3b_giant_axe, item_100_amulet_of_curing, item_bc_gothic_shield_of_resist, item_d_shadow_wolf, item_24_dark_sword, item_ee_mighty_ring, item_55_great_helm, item_de_caustic_sorcerer_ring, item_38_axe, item_43_warrior_bow, item_53_harden_full_helm, item_52_full_helm_of_curing, item_69_magical_plate_mail, item_10a_cune, item_4e_helm, item_10a_cune, item_10a_cune, item_dc_caustic_ring, item_10a_cune, item_10a_cune, item_dd_caustic_priest_ring, item_3f_battle_axe, item_74_plate_mail_of_honor, item_10a_cune, item_10a_cune, item_ab_great_shield, item_10a_cune, item_10a_cune, item_10a_cune, item_10a_cune, item_10a_cune, item_10a_cune, item_10a_cune, item_10a_cune, item_10a_cune, item_10a_cune, item_10a_cune, item_10a_cune, item_40_deadly_battle_axe, item_28_great_sword, item_2f_mighty_great_sword, item_3e_living_axe, item_d4_dark_ring, item_e1_ring_of_dark_souls, item_87_swift_gauntlet, item_89_arm_guard, item_b7_tower_shield_of_balance, item_df_ring_of_desire, item_c1_gothic_shield_of_rage, item_b9_gothic_shield, item_4c_devil_crown,
        item_29_great_sword, item_ba_harden_gothic_shield, item_e_shadow_tiger, item_f8_holy_bracelet, item_f9_king_bracelet, item_eb_bracelet_of_curing, item_10a_cune, item_10a_cune, item_41_keenest_battle_axe, item_1d_crushing_bastard_sword, item_c2_shinning_gothic_shield, item_ad_great_shield_of_balance, item_bd_gothic_shield_of_honor, item_9e_leg_guard_of_protect, item_8a_arm_guard_of_composure, item_70_eternal_plate_mail, item_77_plate_mail_of_rage, item_e4_ring_of_dead_spirit, item_10a_cune, item_10a_cune, item_10a_cune, item_c6_ring_of_fire_resist, item_d5_dark_priest_ring, item_d0_holy_ring_of_resist, item_d1_holy_ring_of_priest, item_e6_ring_of_drain, item_10a_cune, item_10a_cune, item_bb_gothic_shield, item_b5_tower_shield_of_protect, item_10a_cune, item_103_sorcerer_amulet, item_86_gauntlet_of_resist, item_f4_bracelet_of_composure, item_f5_deadly_bracelet, item_56_great_helm, item_30_guardian_great_sword, item_106_amulet_of_recovery, item_10a_cune, item_107_star_amulet, item_10a_cune, item_10a_cune, item_17_dragon_sword, item_f1_sorcerer_bracelet, item_f2_priest_bracelet, item_15_keenest_broad_sword, item_6d_shining_plate_mail, item_6e_dark_plate_mail, item_26_righteous_sword, item_10a_cune,
        item_10a_cune, item_10a_cune, item_10a_cune, item_10a_cune, item_10a_cune, item_10a_cune, item_10a_cune, item_10a_cune, item_10a_cune, item_10a_cune, item_10a_cune, item_21_deadly_bastard_sword, item_66_plate_mail_of_resist, item_1a_lethal_bastard_sword, item_20_shining_bastard_sword, item_1b_swift_bastard_sword, item_22_mighty_bastard_sword, item_65_harden_plate_mail, item_cc_priest_ring_of_frost, item_102_mind_amulet, item_105_amulet_of_balance, item_104_priest_amulet, item_e0_ring_of_ice, item_f7_priest_bracelet, item_88_deadly_gauntlet, item_f0_guardian_bracelet, item_57_harden_great_helm, item_45_fiery_bow_gun, item_108_amulet_of_winter, item_59_mystic_great_helm, item_10a_cune, item_10a_cune, item_b8_tower_shield_of_resist, item_8b_deadly_arm_guard, item_75_harden_full_plate, item_97_steel_boots_of_balance, item_10a_cune, item_7f_metal_glove, item_2d_keenest_great_sword, item_2e_crushing_great_sword, item_f6_harden_bracelet, item_10a_cune, item_10a_cune, item_10a_cune, item_72_holy_plate_mail, item_b0_deadly_great_shield, item_c3_holy_gothic_shield, item_fa_moon_bracelet,
        item_13_broad_sword, item_31_blood_sword, item_2a_swift_great_sword, item_109_endless_amulet, item_be_gothic_shield_of_balance, item_e3_ring_of_seal, item_c8_sorcerer_ring_of_fire, item_78_knight_plate_mail, item_76_god_plate, item_5a_holy_great_helm, item_8c_master_arm_guard, item_e5_ring_of_rage, item_bf_master_gothic_shield, item_c0_gothic_shield_of_power, item_e2_black_ring, item_d6_dark_sorcerer_ring, item_a0_holy_leg_guard, item_71_devil_plate_mail, item_d2_holy_ring, item_10a_cune, item_10a_cune, item_10a_cune, item_10a_cune, item_25_magical_bastard_sword, item_2b_fiery_great_sword
    ];

    var storeItems = [
        item_12_deadly_broad_sword, item_1c_keenest_bastard_sword, item_58_fortune_great_helm, item_85_harden_gauntlet, item_f3_bracelet_of_movement
    ];

    // Taken from the game drops and collectable consumables list
    var consumablesForRandomization = [
        item_10c_torch, item_10c_torch, item_10c_torch, item_10c_torch, item_10c_torch, item_10c_torch, item_10c_torch, item_10c_torch, item_10c_torch, item_10c_torch, item_10d_lamp, item_10d_lamp, item_10d_lamp, item_10d_lamp, item_10d_lamp, item_10d_lamp, item_10d_lamp, item_10d_lamp, item_10d_lamp, item_10e_sacred_feather, item_10e_sacred_feather, item_10e_sacred_feather, item_10e_sacred_feather, item_10e_sacred_feather, item_10e_sacred_feather, item_10e_sacred_feather, item_10e_sacred_feather, item_10e_sacred_feather, item_10e_sacred_feather, item_10e_sacred_feather, item_10e_sacred_feather, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, 
        item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11d_magic_potion, item_11d_magic_potion, item_11d_magic_potion, item_11d_magic_potion, item_11d_magic_potion, item_11d_magic_potion, item_11d_magic_potion, item_11d_magic_potion, item_11d_magic_potion, item_11d_magic_potion, item_11d_magic_potion, item_11d_magic_potion, item_11d_magic_potion, item_11d_magic_potion, item_11d_magic_potion, item_11d_magic_potion, item_11d_magic_potion, item_11d_magic_potion, item_11e_anti_venom, item_11e_anti_venom, item_11e_anti_venom, item_11e_anti_venom, item_11e_anti_venom, item_11e_anti_venom, item_11e_anti_venom, item_11e_anti_venom, item_11e_anti_venom, item_11e_anti_venom, item_11e_anti_venom, item_11e_anti_venom, item_11e_anti_venom, item_11e_anti_venom, item_11e_anti_venom, item_11e_anti_venom, item_11e_anti_venom, item_11e_anti_venom, item_11e_anti_venom, item_11e_anti_venom, item_11e_anti_venom, item_11e_anti_venom, item_11e_anti_venom, item_11e_anti_venom, item_11f_anti_paralytic, item_11f_anti_paralytic, item_11f_anti_paralytic, item_11f_anti_paralytic, item_11f_anti_paralytic, item_11f_anti_paralytic, item_11f_anti_paralytic, item_11f_anti_paralytic,
        item_11f_anti_paralytic, item_11f_anti_paralytic, item_11f_anti_paralytic, item_11f_anti_paralytic, item_11f_anti_paralytic, item_11f_anti_paralytic, item_11f_anti_paralytic, item_11f_anti_paralytic, item_120_divine_symbol, item_120_divine_symbol, item_120_divine_symbol, item_120_divine_symbol, item_120_divine_symbol, item_120_divine_symbol, item_120_divine_symbol, item_120_divine_symbol, item_120_divine_symbol, item_120_divine_symbol, item_120_divine_symbol, item_120_divine_symbol, item_120_divine_symbol, item_120_divine_symbol, item_120_divine_symbol, item_120_divine_symbol, item_120_divine_symbol, item_120_divine_symbol, item_122_evil_eye, item_122_evil_eye, item_122_evil_eye, item_122_evil_eye, item_122_evil_eye, item_122_evil_eye, item_122_evil_eye, item_122_evil_eye, item_123_fire_world_stone, item_123_fire_world_stone, item_123_fire_world_stone, item_123_fire_world_stone, item_123_fire_world_stone, item_123_fire_world_stone, item_123_fire_world_stone, item_123_fire_world_stone, item_123_fire_world_stone, item_123_fire_world_stone, item_123_fire_world_stone, item_123_fire_world_stone, item_124_poison_vaccine, item_124_poison_vaccine, item_124_poison_vaccine, item_124_poison_vaccine, item_124_poison_vaccine, item_124_poison_vaccine, item_124_poison_vaccine, item_124_poison_vaccine, item_124_poison_vaccine, item_124_poison_vaccine, item_124_poison_vaccine, item_124_poison_vaccine, item_125_dust_of_rage, item_125_dust_of_rage, item_125_dust_of_rage, item_125_dust_of_rage, item_125_dust_of_rage, item_125_dust_of_rage, item_125_dust_of_rage, item_125_dust_of_rage, item_125_dust_of_rage, item_125_dust_of_rage, item_126_bottle_of_light, item_126_bottle_of_light, item_126_bottle_of_light, item_126_bottle_of_light, item_126_bottle_of_light, item_126_bottle_of_light, item_126_bottle_of_light,
        item_126_bottle_of_light, item_126_bottle_of_light, item_126_bottle_of_light, item_126_bottle_of_light, item_126_bottle_of_light, item_126_bottle_of_light, item_126_bottle_of_light, item_126_bottle_of_light, item_126_bottle_of_light, item_126_bottle_of_light, item_127_acid_vaccine, item_127_acid_vaccine, item_127_acid_vaccine, item_127_acid_vaccine, item_127_acid_vaccine, item_127_acid_vaccine, item_127_acid_vaccine, item_127_acid_vaccine, item_127_acid_vaccine, item_127_acid_vaccine, item_127_acid_vaccine, item_127_acid_vaccine, item_127_acid_vaccine, item_127_acid_vaccine, item_127_acid_vaccine, item_127_acid_vaccine, item_128_spirit_book, item_128_spirit_book, item_128_spirit_book, item_128_spirit_book, item_128_spirit_book, item_128_spirit_book, item_128_spirit_book, item_128_spirit_book, item_128_spirit_book, item_128_spirit_book, item_12e_dorados_ashes, item_12e_dorados_ashes, item_12e_dorados_ashes, item_12e_dorados_ashes, item_12e_dorados_ashes, item_12e_dorados_ashes, item_12e_dorados_ashes, item_12e_dorados_ashes, item_12e_dorados_ashes, item_12e_dorados_ashes, item_12e_dorados_ashes, item_12e_dorados_ashes, item_12e_dorados_ashes, item_12e_dorados_ashes, item_12e_dorados_ashes, item_12e_dorados_ashes, item_12e_dorados_ashes, item_12e_dorados_ashes, item_12e_dorados_ashes, item_12e_dorados_ashes, item_12e_dorados_ashes, item_12e_dorados_ashes, item_12e_dorados_ashes, item_12e_dorados_ashes, item_12e_dorados_ashes, item_12e_dorados_ashes, item_136_soul_pod_5_sp, item_136_soul_pod_5_sp, item_136_soul_pod_5_sp, item_136_soul_pod_5_sp, item_136_soul_pod_5_sp, item_136_soul_pod_5_sp, item_136_soul_pod_5_sp, item_136_soul_pod_5_sp, item_136_soul_pod_5_sp, item_136_soul_pod_5_sp, item_136_soul_pod_5_sp, item_136_soul_pod_5_sp, item_136_soul_pod_5_sp, item_136_soul_pod_5_sp, 
        item_136_soul_pod_5_sp, item_136_soul_pod_5_sp, item_137_soul_pod_53_sp, item_137_soul_pod_53_sp, item_138_soul_pod_29_sp, item_138_soul_pod_29_sp, item_138_soul_pod_29_sp, item_138_soul_pod_29_sp, item_138_soul_pod_29_sp, item_139_soul_pod_14_sp, item_139_soul_pod_14_sp, item_139_soul_pod_14_sp, item_139_soul_pod_14_sp, item_139_soul_pod_14_sp, item_139_soul_pod_14_sp, item_139_soul_pod_14_sp, item_139_soul_pod_14_sp, item_139_soul_pod_14_sp
    ];

    var keyItems = [
        item_110_fiery_key, item_111_kings_key, item_112_key_of_knowledge, item_113_beast_key, item_114_floodgate_key, item_115_mermaid_key, item_116_key_of_delusion, item_117_brass_key, item_118_iron_key, item_12a_young_dragon_gem, item_12b_pitcher_of_nadya, item_12c_pitcher_of_nadya_hp, item_12d_pitcher_of_nadya_mp, item_12f_spirit_key, item_130_blue_crystal, item_131_flaming_key, item_129_sealed_sword_stone
    ];

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

    var collectableUniques = [];
    var dropUniques = [];

    var COLLECTABLE_UNIQUES_PROPORTION=0.3; // 30% will be collectable
    var CHANCE_OF_UNIQUE_DROP=0.5; // 50% each creature has chance of dropping a unique
    var CHANCE_OF_CONSUMABLE_DROP=0.5; // 50% each creature has chance of dropping consumable
    var UNIQUES_SEQUENCE_RANDOMIZATION_SPAN=0.2; // at first drop, chance of getting any of 20% first uniques, so on
    var PROPORTION_OF_COLLECTABLE_BEING_EQUIP=0.3; // 20% of collectables will be uniques, the rest will be consumables

    // Collectable proportion affected by difficulty
    COLLECTABLE_UNIQUES_PROPORTION=COLLECTABLE_UNIQUES_PROPORTION / smoothDifficultyFactor;

    if (params.preset == PRESET_BONANZA) {
        allUniqueItems = allUniqueItems.filter(item => goodItems.indexOf(item) == -1);
        goodItems.forEach(item => allUniqueItems.unshift(item));
    }

    // Removing from list of unique items the ones that are in the store
    allUniqueItems = allUniqueItems.filter(item => storeItems.indexOf(item) == -1);

    if (params.progressiveness == PROGRESSIVENESS_FLAT) {
        UNIQUES_SEQUENCE_RANDOMIZATION_SPAN = 1;
    } else if (params.progressiveness == PROGRESSIVENESS_INCREASED) {
        UNIQUES_SEQUENCE_RANDOMIZATION_SPAN = 0.6;
    } else if (params.progressiveness == PROGRESSIVENESS_CRAZY) {
        UNIQUES_SEQUENCE_RANDOMIZATION_SPAN = 1;
    }

    if (params.randomizeCollectablesAndDrops) {
        allUniqueItems.forEach((unique) => {
            if (Math.random() < COLLECTABLE_UNIQUES_PROPORTION) {
                collectableUniques.push(unique);
            } else {
                dropUniques.push(unique);
            }
        });
        console.log("DEBUG - Equips randomization - Deciding " + COLLECTABLE_UNIQUES_PROPORTION + " of unique items will be collectable, others will be drops.");
        console.log("");
        console.log("DEBUG - Equips randomization - Collectable uniques " + collectableUniques.map(i => items[i].name));
        console.log("");
        console.log("DEBUG - Equips randomization - Drop uniques " + dropUniques.map(i => items[i].name));
        console.log("");
    }
    var COLLECTABLE_UNIQUES_SEQUENCE_RANDOMIZATION_SPAN_SIZE=collectableUniques.length * UNIQUES_SEQUENCE_RANDOMIZATION_SPAN;

    function distributeCollectablesRandomly(collectable, area) {
        var previous = collectable.type.get();
        collectable.blank();

        if (Math.random()<PROPORTION_OF_COLLECTABLE_BEING_EQUIP && collectableUniques.length > 1) {
            var randomRange = Math.min(COLLECTABLE_UNIQUES_SEQUENCE_RANDOMIZATION_SPAN_SIZE, collectableUniques.length);
            var chosenIndex = Math.floor(Math.random()*randomRange);
            var chosenItem = collectableUniques[chosenIndex];
            collectableUniques = collectableUniques.filter(item => item !== chosenItem);
            collectable.type.set(chosenItem);
            console.log("DEBUG - Collectable randomization - Placing collectable unique " + items[collectable.type.get()].name + " at " + area.name + " where it was a " + items[previous].name + ". There are more " + collectableUniques.length + " to distribute.");
        } else {
            var chosen = consumablesForRandomization[Math.floor((Math.random()*consumablesForRandomization.length))];
            collectable.type.set(chosen);
            console.log("DEBUG - Collectable randomization - Placing collectable consumable " + items[collectable.type.get()].name + " at " + area.name + " where it was a " + items[previous].name);
        }
    }

    function distributeCollectablesDumpInLateWorlds(collectable, area) {
        if (area.name.startsWith("monster") || area.name.startsWith("death") || area.name.startsWith("illusion")) {
            if (collectableUniques.length > 0) {
                if (items[collectable.type.get()].type.get()==ITEM &&
                    items[collectable.type.get()].name!="item_10a_cune") {
                    collectable.type.set(collectableUniques.shift());
                    console.log("DEBUG - Collectable randomization - Adding collectable to late worlds: " + items[collectable.type.get()].name + " at " + area.name);
                }
            }
        }
    }

    var DROP_UNIQUES_SEQUENCE_RANDOMIZATION_SPAN_SIZE=dropUniques.length * UNIQUES_SEQUENCE_RANDOMIZATION_SPAN;

    function distributeDropsRandomly(spawn, area, index) {
        var dropsNames = "blank";
        if (area.name == "void") {
            return;
        }

        spawn.drop2.null();
        spawn.drop2Chance.set(0);
        spawn.drop2.null();
        spawn.drop2Chance.set(0);

        if (!spawn.drop1.isNull()) {
            dropsNames = items[spawn.drop1.get()].name + " ";
            if (items[spawn.drop1.get()].type.get()==KEY) {
                console.log("DEBUG - Drop randomization - To leave this one alone since it is key " + items[spawn.drop1.get()].name + " at " + area.name + "/" + spawn.name());
                return;
            }
        }
        if (!spawn.drop2.isNull()) {
            dropsNames += items[spawn.drop2.get()].name + " ";
        }
        if (!spawn.drop3.isNull()) {
            dropsNames += items[spawn.drop3.get()].name + " ";
        }

        if (Math.random()<CHANCE_OF_UNIQUE_DROP && dropUniques.length > 1) {
            var randomRange = Math.min(DROP_UNIQUES_SEQUENCE_RANDOMIZATION_SPAN_SIZE, dropUniques.length);
            var chosenIndex = Math.floor(Math.random()*randomRange);
            var chosenItem = dropUniques[chosenIndex];
            dropUniques = dropUniques.filter(item => item !== chosenItem);
            spawn.drop1.set(chosenItem);
            spawn.drop1Chance.set(100);

            var newDropName = items[spawn.drop1.get()].name;
            console.log("DEBUG - Drop randomization - Updating drop to unique " + newDropName + " at " + area.name + "/" + spawn.name() + " where it was " + dropsNames + ". There are more " + dropUniques.length + " to distribute.");
        } else if (Math.random()<CHANCE_OF_CONSUMABLE_DROP) {
            var chosen = consumablesForRandomization[Math.floor((Math.random()*consumablesForRandomization.length))];
            spawn.drop1.set(chosen);
            spawn.drop1Chance.set(100);
            var newDropName = items[spawn.drop1.get()].name;
            console.log("DEBUG - Drop randomization - Updating drop to consumable " + newDropName + " at " + area.name + "/" + spawn.name() + " where it was " + dropsNames);
        } else {
            spawn.drop1.null();
            spawn.drop1Chance.set(0);
            console.log("DEBUG - Drop randomization - Updating drop to blank at " + area.name + "/" + spawn.name() + " where it was " + dropsNames);
        }
    }

    function distributeDropsDumpInLateWorlds(spawn, area, index) {
        if (area.name.startsWith("monster") || area.name.startsWith("death") || area.name.startsWith("illusion")) {
            if (dropUniques.length > 0) {
                var dropsNames = "blank";
                if (!spawn.drop1.isNull()) {
                    dropsNames = items[spawn.drop1.get()].name + " ";
                    if (items[spawn.drop1.get()].type.get()==KEY) {
                        console.log("DEBUG - Drop randomization adding remaining to late worlds - To leave this one alone since it is key " + items[spawn.drop1.get()].name + " at " + area.name + "/" + spawn.name());
                        return;
                    }
                }
                if (spawn.drop1.isNull() || 
                        (items[spawn.drop1.get()].type.get()==ITEM &&
                        items[spawn.drop1.get()].name!="item_10a_cune")) {
                    spawn.drop1.set(dropUniques.shift());
                    spawn.drop1Chance.set(100);
                    console.log("DEBUG - Drop randomization adding remaining to late worlds - Adding drop: " + items[spawn.drop1.get()].name + " at " + area.name + "/" + spawn.name() + " where it was " + dropsNames);
                }
            }
        }
    }

    function removeSceneryObjects(object, area) {
        if (area.name.includes("tower") || area.name.includes("void") || area.exits && area.exits[""+object.index]) {
            console.log("Remove scenery - to not mess with exits - " + area.name + " object " + object.index);
            return;
        }
        console.log("Remove scenery - removing - " + area.name + " object " + object.index);
        object.blank();
    }

    function messWithSceneryObjects(object, area) { // To do also exclusion of totems
/*
        if (area.name.includes("tower") || area.name.includes("void") || area.exits && area.exits[""+object.index]) {
            console.log("Mess with scenery - to not mess with exits - " + area.name + " object " + object.index);
            return;
        }
        if (Math.random()<0.3) {
            console.log("Mess with scenery - removing - " + area.name + " object " + object.index);
            object.blank();
        } else if (Math.random()<0.1) {
            console.log("Mess with scenery - moving X+1 - " + area.name + " object " + object.index);
            object.tileX.set(object.tileX.get()+1);
        } else if (Math.random()<0.1) {
            console.log("Mess with scenery - moving Y+1 - " + area.name + " object " + object.index);
            object.tileY.set(object.tileY.get()+1);
        } else if (Math.random()<0.1) {
            console.log("Mess with scenery - moving Z+1 - " + area.name + " object " + object.index);
            object.tileZ.set(object.tileZ.get()+1);
        } else if (Math.random()<0.1) {
            console.log("Mess with scenery - moving X-1 - " + area.name + " object " + object.index);
            object.tileX.set(object.tileX.get()-1);
        } else if (Math.random()<0.1) {
            console.log("Mess with scenery - moving Y-1 - " + area.name + " object " + object.index);
            object.tileY.set(object.tileY.get()-1);
        } else if (Math.random()<0.1) {
            console.log("Mess with scenery - moving Z-1 - " + area.name + " object " + object.index);
            object.tileZ.set(object.tileZ.get()-1);
        }*/
    }

    // Running the thing

    function operate() {

        // ------- PRESET No Change

        if (params.preset == PRESET_NO_CHANGE) {
        }

        // ------- PRESET King hopper

        if (params.preset == PRESET_FIX_KING_HOPPER) {
            forEachCreatureSpawn.push(presetKingHopperFixforEachCreatureSpawn);
        }

        // ------- PRESET Directives

        if (params.preset == PRESET_APPLY_DIRECTIVES) {
            forEachCreatureSpawn.push(presetKingHopperFixforEachCreatureSpawn);
            forEachCreatureSpawn.push(presetDirectivesforEachCreatureSpawn);
            forEachItem.push(presetDirectivesforEachItem);
        }

        // ------- Any%

        if (params.preset == PRESET_ANY_PRC ||
            params.preset == PRESET_COMEDY ||
            params.preset == PRESET_SCARY_GAME ||
            params.preset == PRESET_BONANZA) {
            forEachCreatureSpawn.push(presetKingHopperFixforEachCreatureSpawn);
            forEachCreatureSpawn.push(presetDirectivesforEachCreatureSpawn);
            forEachItem.push(presetDirectivesforEachItem);
            if (params.randomizeCollectablesAndDrops) {
                forEachCollectable.push(distributeCollectablesRandomly);
                forEachCreatureSpawn.push(distributeDropsRandomly);
            }
        }

        // ------- 100%

        if (params.preset == PRESET_100_PRC) {
            forEachCreatureSpawn.push(presetKingHopperFixforEachCreatureSpawn);
            forEachCreatureSpawn.push(presetDirectivesforEachCreatureSpawn);
            forEachItem.push(presetDirectivesforEachItem);
            if (params.randomizeCollectablesAndDrops) {
                forEachCollectable.push(distributeCollectablesRandomly);
                forEachCollectable.push(distributeCollectablesDumpInLateWorlds);
                forEachCreatureSpawn.push(distributeDropsRandomly);
                forEachCreatureSpawn.push(distributeDropsDumpInLateWorlds);
            }
        }

        // Randomize creatures

        /*if (params.randomizeCreatures) {
            for (var i =0; i<100; i++) {
                swapCreatures(randomElement(randomizableCreatures),randomElement(randomizableCreatures), changeSet);
            }
            for (var i =0; i<5; i++) {
                swapCreatures(randomElement(randomizableFlyingCreatures),randomElement(randomizableFlyingCreatures), changeSet);
            }
        }*/

        // ------- Adjust creature and equip levels for proper progression

        // ------- ApplyDifficulty

        console.log("Difficulty " + params.difficulty + ", factor " + factorByDificultyParam[params.difficulty]);

        if (params.difficulty && params.difficulty != DIFFICULTY_MEDIUM) {
            forEachValidCreature.push(applyDifficultyForEachValidCreature);
            forEachItem.push(applyDifficultyForEachItem);
            if (params.preset != PRESET_100_PRC) {
                forEachCreatureSpawn.push(applyDifficultyForEachSpawnByRemovingDrop);
                forEachCollectable.push(applyDifficultyForEachCollectableByRemoving);
            }
        }

        if (params.messWithScenery) {
            forEachObject.push(messWithSceneryObjects);
        }

        if (params.removeScenery) {
            forEachObject.push(removeSceneryObjects);
        }

    }

    operate();

    for (var i in items) {
        forEachItem.forEach((func) => func(items[i]));
    }

    var allChangeableCollectablesInDefaultGame = [];
    var allSpawnsInDefaultGame = [];

    for (var a in areas) {
        var area = areas[a];
        if (!area.spawns) {
            continue;
        }
        for (var index = 0; index < SPAWN_ENTRIES_COUNT; index++) {
            var spawn = area.spawns[index];
            if (!spawn.chance.isNull() &&
                !spawn.name().endsWith("door") &&
                area.name!="void") {
                allSpawnsInDefaultGame.push({
                    spawn: spawn,
                    area: area,
                    index: index
                });
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
            if (!collectable.isBlank() && itemData[collectable.type.get()].type.get() != KEY) {
                // Collecting only valid collectables
                allChangeableCollectablesInDefaultGame.push({
                    area: area,
                    collectable: collectable
                });
            }
        }

        area.objects.forEach(object => {
            forEachObject.forEach((func) => func(object, area));
        });
    }

    console.log("DEBUG - The game has " + forEachCreatureSpawn.length + " spawns.");

    forEachCreatureSpawn.forEach((func) => {
        allSpawnsInDefaultGame.forEach((spawn) => {
            func(spawn.spawn, spawn.area, spawn.index);
        });
    });

    console.log("DEBUG - The game has " + allChangeableCollectablesInDefaultGame.length + " collectables: " + allChangeableCollectablesInDefaultGame.map(c => itemData[c.collectable.type.get()].name + " at " + c.area.name));

    forEachCollectable.forEach((func) => {
        allChangeableCollectablesInDefaultGame.forEach((collectable) => {
            func(collectable.collectable, collectable.area);
        });
    });

    console.log = function() {
        logFileRandomize.write(util.format.apply(null, arguments) + '\n');
    }

    var htmlFile = mapFolder + path.sep + "maps.html";
    var mapsHTML = ""+fs.readFileSync(htmlFile);
    if (!global.toNotGenerateImages) {
        var { createCanvas } = require("canvas");
    }

    for (var a in areas) {
        var area = areas[a];
        area.writeMapImage(createCanvas, mapFolder);
        var summary = "";
        for (var i in area.mapSummary) { summary += area.mapSummary[i] + "<br>"; }
        mapsHTML = mapsHTML.replace("<!--" + area.name + "-->", summary);

        area.reinjectEntityDataFromCreaturesToFile();
    }
    fs.writeFile(htmlFile, mapsHTML, function() {});

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