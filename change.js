'use strict';

const randomizer_common = require('./randomizer_common');
const data_model = require('./data_model');
const fs = require('fs');

var changeFile = process.argv[2];
if (!changeFile || !changeFile.endsWith(".json")) {
  console.log("ERROR - didn't provide .json file part as argument.");
  process.exit(1);
  return;
}

function copyArea(origin, dest, size) {
	for (var i=0; i<size; i++) {
		part.bin[dest + i] = part.bin[origin + i];
	}
}

let change = JSON.parse(fs.readFileSync(changeFile));
//console.log(change);

for (var file in change) {
	var part = new TFILEReader(file).readTFormatPart();
	part.verifyCheckSum();

	var changeMap = change[file];
	for (var index in changeMap) {
		part.bin[parseInt(index, 16)] = parseInt(changeMap[index], 16);
	}

	part.setCheckSum()
	part.verifyCheckSum();
	part.write();
}

