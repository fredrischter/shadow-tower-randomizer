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

let changeSet = {};
//let changes44 = {};
//let file44Path = stDir + path.sep + "ST" + path.sep + "COM" + path.sep + "FDAT.T_PARTS" + path.sep 
//	+ "44 255800-25e800.T";
//changeSet[file44Path] = changes44;

//var part44 = new TFILEReader(file44Path).readTFormatPart();
//part44.verifyCheckSum();


let tFilePath = stDir + path.sep + "ST" + path.sep + "COM" + path.sep + "FDAT.T";
var tfile = new TFILEReader(tFilePath).readTFormat();
data_model.setup(tfile);

function arrayCopy(origin, dest, offset, length) {
	for (var i = 0; i < length; i++) {
		dest[i] = origin[i];
	}
}

//arrayCopy(human_world_solitary_region.acid_slime1.bin, human_world_solitary_region.blood_slime1.bin, 0, 0xc0);
//arrayCopy(human_world_solitary_region.acid_slime1.bin, human_world_solitary_region.dark_spider1.bin, 0, 0xc0);
//arrayCopy(human_world_solitary_region.acid_slime1.bin, human_world_solitary_region.demon_bat1.bin, 0, 0xc0);
//arrayCopy(human_world_solitary_region.01_acid_slime.bin, human_world_solitary_region.skeleton1.bin, 0, 0xc0);//93);

human_world_solitary_region["01_acid_slime"].hp.set(0x0001);
human_world_solitary_region["0e_acid_slime"].hp.set(0x0001);

//human_world_solitary_region["00_dark_spider"].blank();
//human_world_solitary_region["02_blood_slime"].blank();
//human_world_solitary_region["06_skeleton"].blank();
//human_world_solitary_region["08_dark_spider"].blank();
//human_world_solitary_region["09_demon_bat"].blank();
//human_world_solitary_region["0a_skeleton"].blank();
//human_world_solitary_region["0c_demon_bat"].blank();
//human_world_solitary_region["0d_dark_spider"].blank();

//human_world_solitary_region["01_acid_slime"].set(human_world_forgotten_region["01_blood_skull"]);
//human_world_solitary_region["0e_acid_slime"].set(human_world_forgotten_region["01_blood_skull"]);

human_world_solitary_region.spawns[0].drop1.set(0x10a);
human_world_solitary_region.spawns[0].drop2.set(0xffff);
human_world_solitary_region.spawns[0].drop3.set(0xffff);
human_world_solitary_region.spawns[0].drop1Chance.set(0x64);

// Blank all creature spawns
for (var a in areas) {
	var area = areas[a];
//	if (area.name == "human_world_cursed_region") {
//		continue;
//	}
	if (!area.spawns) {
		continue;
	}
	for (var i=0; i<SPAWN_ENTRIES_COUNT; i++) {
		if (!area.spawns[i].chance.isNull() &&
			!area.spawns[i].name.endsWith("door")) {
			area.spawns[i].blank();
		}
	}
}

//for (var i = 0; i < SPAWN_ENTRIES_COUNT; i++) {
//	var spawn = human_world_cursed_region.spawns[i];
//	if (!spawn.chance.isNull() && !spawn.isBlank && !spawn.name.endsWith("door")) {
//		spawn.type.set(0x04); //04_fat_mole_a
//	}
//}

	//.set(human_world_solitary_region.spawns[0]);
	//human_world_solitary_region.spawns[i].mutexGroup.set(i+20);

binSwap(tfile.files[ITEM_DATA_PART_FILE_INDEX].bin, item_0_short_sword, tfile.files[ITEM_DATA_PART_FILE_INDEX].bin, item_25_magical_bastard_sword, ITEM_DATA_ENTRY_SIZE);



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

for (var i in data_model.areas) {
	var area = data_model.areas[i];
	if (!area.name) {
		continue;
	}
	let changes = {};
	let filePath = area.map_file.fileName;
	changeSet[filePath] = changes;
	for (var k=0; k<area.map_file.bin.length ; k++) {
		var originalValue = area.map_file.originalBin[k];
		if (area.map_file.bin[k] != originalValue) {
			console.log("Change " + k.toString(16) + " " + originalValue.toString(16) + " to " + area.map_file.bin[k].toString(16));
			changes[k.toString(16)] = area.map_file.bin[k].toString(16);
		}
	}
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

fs.writeFileSync(changeSetFile, JSON.stringify(changeSet));
