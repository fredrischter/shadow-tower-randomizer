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

let changeset = JSON.parse(fs.readFileSync(changeFile));
//console.log(changeset);

for (var i in changeset) {
	var change = changeset[i];

	if (change.file) {
		var part = new TFILEReader(change.file).readTFormatPart();
		part.verifyCheckSum();

		for (var index in change.bytes) {
			part.bin[parseInt(index, 16)] = parseInt(change.bytes[index], 16);
		}

		part.setCheckSum()
		part.verifyCheckSum();
		part.write();
	}
}

