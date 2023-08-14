'use strict';

const randomizer_common = require('./randomizer_common');

var file = process.argv[2];
if (!file || !file.endsWith(".T")) {
  console.log("ERROR - didn't provide T file as argument.");
  process.exit(1);
  return;
}

for (var c = 2; c < process.argv.length; c++) {
	var tfile = new TFILEReader(process.argv[c]).readTFormat();
	var offset = tfile.beginningOfBin;

	for (var i=0; i<tfile.files.length; i++) {
		var length = tfile.files[i].reload(offset);
		offset += length;
		//console.log("Part to assemble "+tfile.files[i].fileName);
	}

	tfile.injectParts();
	tfile.write();
}