'use strict';

const randomizer_common = require('./randomizer_common');
const data_model = require('./data_model');
const fs = require('fs');
const path = require('path');

var paramsFile = process.argv[2];
if (!paramsFile || !paramsFile.endsWith(".json")) {
  console.log("ERROR - didn't provide .json file part as argument.");
  process.exit(1);
  return;
}

var stDir = process.argv[3];
if (!stDir || !stDir.endsWith("st")) {
  console.log("ERROR - didn't provide path to shadow tower extracted iso - name of this folder should be st.");
  process.exit(1);
  return;
}

let params = JSON.parse(fs.readFileSync(paramsFile));
let changeSetPath = paramsFile.substring(0, paramsFile.lastIndexOf(path.sep));
let changeSetFile = changeSetPath + path.sep + "changeset.json"
console.log(params);

let tFilePath = stDir + path.sep + "ST" + path.sep + "COM" + path.sep + "FDAT.T";
var tfileOriginal = new TFILEReader(tFilePath).readTFormat();
var tfile = new TFILEReader(tFilePath).readTFormat();
data_model.setup(tfile);

function arrayCopy(origin, dest, offset, length) {
	for (var i = 0; i < length; i++) {
		dest[i] = origin[i];
	}
}

var goodItems = [
item_109_endless_amulet,
item_58_fortune_great_helm,
item_45_fiery_bow_gun,
item_e4_ring_of_dead_spirit,
item_f9_king_bracelet,
item_fa_moon_bracelet,
item_c_shadow_blade,
item_17_dragon_sword,

item_76_god_plate,
item_78_knight_plate_mail,
item_31_blood_sword,

item_77_plate_mail_of_rage,
item_25_magical_bastard_sword,
item_3e_living_axe,

item_bf_master_gothic_shield,
item_b3_tower_shield_of_honor,
item_c1_gothic_shield_of_rage,
item_c2_shinning_gothic_shield,
item_c3_holy_gothic_shield,

item_44_bow_gun,
item_43_warrior_bow,
item_42_bow,
item_d_shadow_wolf,
item_e_shadow_tiger,
item_c0_gothic_shield_of_power,
item_1a_lethal_bastard_sword,
item_1b_swift_bastard_sword,
item_1c_keenest_bastard_sword,
item_1d_crushing_bastard_sword,
item_1e_fiery_bastard_sword,
item_20_shining_bastard_sword,
item_23_guardian_bastard_sword,
item_24_dark_sword,
item_26_righteous_sword,
item_2a_swift_great_sword,
item_2c_deadly_great_sword,
item_2d_keenest_great_sword,
item_2e_crushing_great_sword,
item_2f_mighty_great_sword,
item_30_guardian_great_sword,

item_4b_wizard_crown,
item_4c_devil_crown,
item_52_full_helm_of_curing,
item_57_harden_great_helm,
item_59_mystic_great_helm,
item_5a_holy_great_helm,

item_6d_shining_plate_mail,
item_6e_dark_plate_mail,
item_6f_plate_mail_of_protect,
item_70_eternal_plate_mail,
item_71_devil_plate_mail,
item_72_holy_plate_mail,
item_73_full_plate,
item_87_swift_gauntlet,
item_88_deadly_gauntlet,
item_89_arm_guard,
item_8a_arm_guard_of_composure,
item_8b_deadly_arm_guard,
item_8c_master_arm_guard,
item_95_caustic_steel_boots,
item_96_swift_steel_boots,
item_9e_leg_guard_of_protect,
item_9f_caustic_leg_guard,
item_a0_holy_leg_guard,
item_ae_shining_great_shield,
item_af_dark_great_shield,
item_b0_deadly_great_shield,
item_b4_harden_tower_shield,
item_b5_tower_shield_of_protect,
item_b6_caustic_tower_shield,
item_b9_gothic_shield,
item_ba_harden_gothic_shield,
item_bb_gothic_shield,
item_bc_gothic_shield_of_resist,
item_bd_gothic_shield_of_honor,
item_be_gothic_shield_of_balance,
item_c9_summoner_ring_of_frost,
item_ca_summoner_ring_of_frost,
item_cb_balance_ring_of_frost,
item_cc_priest_ring_of_frost,
item_cd_sorcerer_ring_of_frost,
item_ce_soul_ring,
item_cf_soul_ring,
item_d0_holy_ring_of_resist,
item_d1_holy_ring_of_priest,
item_d2_holy_ring,
item_d3_dark_ring,
item_d4_dark_ring,
item_d5_dark_priest_ring,
item_d6_dark_sorcerer_ring,
item_da_sorcerer_ring_of_poison,
item_db_caustic_ring,
item_dc_caustic_ring,
item_dd_caustic_priest_ring,
item_de_caustic_sorcerer_ring,
item_df_ring_of_desire,
item_e0_ring_of_ice,
item_e1_ring_of_dark_souls,
item_e2_black_ring,
item_e3_ring_of_seal,
item_e5_ring_of_rage,
item_e6_ring_of_drain,
item_eb_bracelet_of_curing,
item_ec_bracelet_of_recovery,
item_ed_mind_bracelet,
item_ee_mighty_ring,
item_ef_deadly_bracelet,
item_f0_guardian_bracelet,
item_f1_sorcerer_bracelet,
item_f2_priest_bracelet,
item_f8_holy_bracelet,
item_fb_magical_amulet,
item_10a_cune,
item_110_fiery_key,
item_111_kings_key,
item_112_key_of_knowledge,
item_113_beast_key,
item_114_floodgate_key,
item_115_mermaid_key,
item_116_key_of_delusion,
item_117_brass_key,
item_118_iron_key,
item_11c_healing_potion,
item_11d_magic_potion,
item_11e_anti_venom,
item_11f_anti_paralytic,
item_120_divine_symbol,
item_122_evil_eye,
item_123_fire_world_stone,
item_124_poison_vaccine,
item_125_dust_of_rage,
item_126_bottle_of_light,
item_127_acid_vaccine,
item_128_spirit_book,
item_129_sealed_sword_stone,
item_12a_young_dragon_gem,
item_12c_pitcher_of_nadya_hp,
item_12d_pitcher_of_nadya_mp,
item_12e_dorados_ashes,
item_12f_spirit_key,
item_130_blue_crystal,
item_131_flaming_key,
item_136_soul_pod_5_sp,
item_137_soul_pod_53_sp,
item_138_soul_pod_29_sp,
item_139_soul_pod_14_sp];

function forEachCreatureSpawn(spawn, area, index) {
	// Blank all creature spawns
	//	if (area.name == "human_world_cursed_region") {return;
	//	area.spawns[i].blank();

	// Spawning ring
	//spawn.chance.set(100);
	//spawn.drop1Chance.set(100);
	//spawn.drop1.set(item_c4_summoner_ring_of_fire);

	// Set good items to spawn early in the game
	//	spawn.chance.set(100);
	//	if (goodItems.length) {
	//		if (area.name != "human_world_solitary_region") return;
	//		spawn.drop1Chance.set(100);
	//		spawn.drop2Chance.set(0);
	//		spawn.drop3Chance.set(0);
	//		spawn.drop1.set(items.shift());
	//		spawn.drop2.set(item_139_soul_pod_14_sp);
	//		spawn.drop3.set(item_139_soul_pod_14_sp);
	//	}
}

function forEachValidCreature(creature, area, index) {
	//creature.hp.set(1);
}


//for (var i = 0; i < SPAWN_ENTRIES_COUNT; i++) {
//	var spawn = human_world_cursed_region.spawns[i];
//	if (!spawn.chance.isNull() && !spawn.isBlank && !spawn.name.endsWith("door")) {
//		spawn.type.set(0x04); //04_fat_mole_a
//	}
//}

	//.set(human_world_solitary_region.spawns[0]);
	//human_world_solitary_region.spawns[i].mutexGroup.set(i+20);

// copy magical sword into short sword
/*binCopy(tfile.files[ITEM_DATA_PART_FILE_INDEX].bin, 
	ITEM_DATA_START_IN_FILE+ITEM_DATA_ENTRY_SIZE*item_25_magical_bastard_sword, 
	tfile.files[ITEM_DATA_PART_FILE_INDEX].bin,
	ITEM_DATA_START_IN_FILE+ITEM_DATA_ENTRY_SIZE*item_0_short_sword,
	ITEM_DATA_ENTRY_SIZE);

// copy dead spirit ring into ring of fire
binCopy(tfile.files[ITEM_DATA_PART_FILE_INDEX].bin, 
	ITEM_DATA_START_IN_FILE+ITEM_DATA_ENTRY_SIZE*item_e4_ring_of_dead_spirit, 
	tfile.files[ITEM_DATA_PART_FILE_INDEX].bin,
	ITEM_DATA_START_IN_FILE+ITEM_DATA_ENTRY_SIZE*item_c4_summoner_ring_of_fire,
	ITEM_DATA_ENTRY_SIZE);*/

/*global.items[item_58_fortune_great_helm].price.set(1);
global.items[item_c6_ring_of_fire_resist].price.set(3);
global.items[item_c7_priest_ring_of_fire].price.set(4);
*/

//global.items[item_0_short_sword].max_dura.set(60);
//global.items[item_0_short_sword].dura.set(50);
//global.items[item_0_short_sword].type.set(TWO_HANDED);
//global.items[item_0_short_sword].model.set(global.items[item_25_magical_bastard_sword].model.get());
//global.items[item_0_short_sword].image.set(global.items[item_c7_priest_ring_of_fire].image.get());
//global.items[item_0_short_sword].weight.set(0x2ff);

/* set some attributes for equips
global.items[item_c4_summoner_ring_of_fire].attribute1.set(attribute(0xf,ATTR_HP_RECOVERY));
global.items[item_c4_summoner_ring_of_fire].attribute2.set(attribute(ATTR_CRITICAL_20pc,ATTR_CRITICAL));
global.items[item_c4_summoner_ring_of_fire].elementalType.set(ELEMENT_HOLY);
global.items[item_c4_summoner_ring_of_fire].elementalPower.set(130);
global.items[item_0_short_sword].attribute1.set(attribute(ATTR_CRITICAL_20pc,ATTR_CRITICAL));
*/

/*global.items[item_0_short_sword].str.set(0xff);
global.items[item_0_short_sword].spd.set(0xff);
global.items[item_0_short_sword].def.set(0xff);
global.items[item_0_short_sword].bal.set(0xff);
global.items[item_0_short_sword].sla.set(0xff);
global.items[item_0_short_sword].smh.set(0xff);
global.items[item_0_short_sword].pir.set(0xff);
global.items[item_0_short_sword].spr.set(0xff);
global.items[item_0_short_sword].foc.set(0xff);
global.items[item_0_short_sword].ham.set(0xff);
global.items[item_0_short_sword].pur.set(0xff);
global.items[item_0_short_sword].par.set(0xff);
global.items[item_0_short_sword].mel.set(0xff);
global.items[item_0_short_sword].sol.set(0xff);*/

//arrayCopy(human_world_solitary_region.acid_slime1.bin, human_world_solitary_region.blood_slime1.bin, 0, 0xc0);
//arrayCopy(human_world_solitary_region.acid_slime1.bin, human_world_solitary_region.dark_spider1.bin, 0, 0xc0);
//arrayCopy(human_world_solitary_region.acid_slime1.bin, human_world_solitary_region.demon_bat1.bin, 0, 0xc0);
//arrayCopy(human_world_solitary_region.01_acid_slime.bin, human_world_solitary_region.skeleton1.bin, 0, 0xc0);//93);

//human_world_solitary_region["01_acid_slime"].hp.set(0x0001);
//human_world_solitary_region["0e_acid_slime"].hp.set(0x0001);

//human_world_solitary_region["00_dark_spider"].blank();
//human_world_solitary_region["02_blood_slime"].blank();
//human_world_solitary_region["06_skeleton"].blank();
//human_world_solitary_region["08_dark_spider"].blank();
//human_world_solitary_region["09_demon_bat"].blank();
//human_world_solitary_region["0a_skeleton"].blank();
//human_world_solitary_region["0c_demon_bat"].blank();
//human_world_solitary_region["0d_dark_spider"].blank();

//trying to swap door
//human_world_solitary_region["07_door"].swap(human_world_solitary_region["0b_door"]);

//swapping doors for no result
//human_world_solitary_region.spawns[0x38].swap(human_world_solitary_region.spawns[0x3b]);
//human_world_solitary_region.spawns[0x39].swap(human_world_solitary_region.spawns[0x3a]);

//human_world_solitary_region["01_acid_slime"].set(human_world_forgotten_region["01_blood_skull"]);
//human_world_solitary_region["0e_acid_slime"].set(human_world_forgotten_region["01_blood_skull"]);

/*human_world_solitary_region.spawns[0].drop1.set(0x10a);
human_world_solitary_region.spawns[0].drop2.set(0xffff);
human_world_solitary_region.spawns[0].drop3.set(0xffff);
human_world_solitary_region.spawns[0].drop1Chance.set(0x64);
*/

//for (var a in areas) {
//	var area = areas[a];
//	//	if (area.name == "human_world_cursed_region") {continue;|
//	if (!area.spawns) {
//		continue;
//	}
//	for (var i=0; i<SPAWN_ENTRIES_COUNT; i++) {
//		if (!area.spawns[i].chance.isNull() &&
//			!area.spawns[i].name.endsWith("door")) {
//			area.spawns[i].blank();
//		}
//	}
//}

//Set potion to be over the quilted armor
//var coll = human_world_solitary_region.collectables[0];
//var coll2 = human_world_solitary_region.collectables[1];
//coll.setTile(coll2.getTile());
//coll.y.set(0x80fc);

//coll.type.set(item_76_god_plate);
//coll.bin[coll.offset_in_file + 0x07] = coll.bin[coll.offset_in_file + 0x07] - 6;
//coll.bin[coll.offset_in_file + 0x08] = coll.bin[coll.offset_in_file + 0x08] - 6;

//coll.bin[coll.offset_in_file + 0x09] = coll.bin[coll.offset_in_file + 0x09] - 6; //x
//coll.bin[coll.offset_in_file + 0x0b] = coll.bin[coll.offset_in_file + 0x0b] - 6; // z
//coll.bin[coll.offset_in_file + 0x0d] = coll.bin[coll.offset_in_file + 0x0d] + 6; // y
//coll.bin[coll.offset_in_file + 0x0f] = coll.bin[coll.offset_in_file + 0x0f] + 6; // rotation y
/*for (var i=0; i<10; i++) {
	var j = i + 0xa;
	human_world_solitary_region.collectables[j].set(coll);
	human_world_solitary_region.collectables[j].y.set(coll.y.get()+i*20);
}*/

//binSwap(coll.bin, coll.offset_in_file + 2 +10, coll2.bin, coll2.offset_in_file + 2 +10, 22 -10);

//human_world_solitary_region.spawns[0x37].set(human_world_solitary_region.spawns[0x38]);
//human_world_solitary_region.spawns[0x38].set(human_world_solitary_region.spawns[0x39]);
//human_world_solitary_region.spawns[0x39].set(human_world_solitary_region.spawns[0x3a]);
//human_world_solitary_region.spawns[0x3a].set(human_world_solitary_region.spawns[0x3b]);
//human_world_solitary_region.spawns[0x3b].set(human_world_solitary_region.spawns[0x37]);
///human_world_solitary_region.spawns[0x37].blank();

//for (var i=0x38; i<0x3a; i++) {
//	human_world_solitary_region.spawns[i].blank();
//}

/*
human_world_solitary_region.spawns[0].drop1.set(0x116); // slime 1
human_world_solitary_region.spawns[1].drop1.set(0x116); // slime 2
human_world_solitary_region.spawns[8].drop1.set(0x116); // slime 3
human_world_solitary_region.spawns[2].drop1.set(0x116); // blood slime 4

human_world_solitary_region.spawns[0].drop2.set(0xffff); // slime 1
human_world_solitary_region.spawns[1].drop2.set(0xffff); // slime 2
human_world_solitary_region.spawns[8].drop2.set(0xffff); // slime 3
human_world_solitary_region.spawns[2].drop2.set(0xffff); // blood slime 4
human_world_solitary_region.spawns[0].drop3.set(0xffff); // slime 1
human_world_solitary_region.spawns[1].drop3.set(0xffff); // slime 2
human_world_solitary_region.spawns[8].drop3.set(0xffff); // slime 3
human_world_solitary_region.spawns[2].drop3.set(0xffff); // blood slime 4

human_world_solitary_region.spawns[0].drop1Chance.set(0x32); // slime 1
human_world_solitary_region.spawns[1].drop1Chance.set(0x32); // slime 2
human_world_solitary_region.spawns[8].drop1Chance.set(0x32); // slime 3
human_world_solitary_region.spawns[2].drop1Chance.set(0x32); // blood slime 4

human_world_solitary_region.spawns[8].chance.set(0x64); // slime 3
human_world_solitary_region.spawns[2].chance.set(0x64); // blood slime 4
*/

function forEachSpawn(spawn, area, index) {
	if (!spawn.chance.isNull() &&
		!spawn.name.endsWith("door")) {
		forEachCreatureSpawn(spawn, area, index);
	}
}

function forEachCreature(creature, area, index) {
	if (!creature.isBlank) {
		forEachValidCreature(creature, area, index);
	}
}

for (var a in areas) {
	var area = areas[a];
	if (!area.spawns) {
		continue;
	}
	for (var i=0; i<SPAWN_ENTRIES_COUNT; i++) {
		forEachSpawn(area.spawns[i], area, i);
	}
	for (var i=0; i<CREATURE_COUNT; i++) {
		forEachCreature(area.creatures[i], area, i);
	}

}


let changeSet = {};
//let changes44 = {};
//let file44Path = stDir + path.sep + "ST" + path.sep + "COM" + path.sep + "FDAT.T_PARTS" + path.sep 
//	+ "44 255800-25e800.T";
//changeSet[file44Path] = changes44;
//var part44 = new TFILEReader(file44Path).readTFormatPart();
//part44.verifyCheckSum();

for (var i in tfileOriginal.files) {
	var originalPart = tfileOriginal.files[i];
	var changedPart = tfile.files[i];
	let changes = {};
	let filePath = originalPart.fileName;
	var anyChange = false;
	for (var k=0; k<originalPart.bin.length ; k++) {
		var originalValue = originalPart.originalBin[k];
		if (changedPart.bin[k] != originalValue) {
			//console.log("Change " + k.toString(16) + " " + originalValue.toString(16) + " to " + changedPart.bin[k].toString(16));
			changes[k.toString(16)] = changedPart.bin[k].toString(16);
			anyChange = true;
		}
	}
	if (anyChange) {
		changeSet[filePath] = changes;
	}
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

fs.writeFileSync(changeSetFile, JSON.stringify(changeSet));
