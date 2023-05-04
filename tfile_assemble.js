'use strict';

const randomizer_common = require('./randomizer_common');

var file = process.argv[2];
if (!file || !file.endsWith(".T")) {
  console.log("ERROR - didn't provide T file as argument.");
  process.exit(1);
  return;
}

var FDAT = new TFILEReader(file).readTFormat();

for (var i=0; i<FDAT.files.length; i++) {
	FDAT.files[i].reload();
	//console.log("Part to assemble "+FDAT.files[i].fileName);
}

FDAT.injectParts();
FDAT.write();
