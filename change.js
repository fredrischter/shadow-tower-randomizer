'use strict';

const randomizer_common = require('./randomizer_common');
const data_model = require('./data_model');
const fs = require('fs');

function change(changeFile) {

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

	var textureFiles={};

	for (var i in changeset) {
		var change = changeset[i];

		if (change.fileSwap) {
			fs.renameSync(change.fileSwap.file1, change.fileSwap.file1 + ".tmp");
			fs.renameSync(change.fileSwap.file2, change.fileSwap.file1);
			fs.renameSync(change.fileSwap.file1 + ".tmp", change.fileSwap.file2);
		} else if (change.fileCopy) {
			fs.copyFileSync(change.fileCopy.from, change.fileCopy.to);
		} else if (change.textToTexture) {
			if (!textureFiles[change.textToTexture.file]) {
				textureFiles[change.textToTexture.file] = new TFILEReader(change.textToTexture.file).readTFormat();
			}
			for (var i=0; i<50; i++) {
				textureFiles[change.textToTexture.file].files[change.textToTexture.part].bin[0x5600+i]=Math.floor(Math.random()*256); //0xdd;
			}
			textureFiles[change.textToTexture.file].files[change.textToTexture.part].setCheckSum();
		} else if (change.file) {
			var part = new TFILEReader(change.file).readTFormatPart();
			//part.verifyCheckSum();

			for (var index in change.bytes) {
				part.bin[parseInt(index, 16)] = parseInt(change.bytes[index], 16);
			}

			part.setCheckSum();
			part.verifyCheckSum();
			part.write();
		}
	}

/*for (var i in textureFiles) {
	textureFiles[i].injectParts();
	textureFiles[i].write();
}*/
}

if (process.argv[1].indexOf("change.js") > -1){
	change(process.argv[2]);
} else {
	module.exports = change;
}
