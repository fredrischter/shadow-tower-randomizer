'use strict';

const randomizer_common = require('./randomizer_common');

var file = process.argv[2];
if (!file || !file.endsWith(".T")) {
  console.log("ERROR - didn't provide T file as argument.");
  process.exit(1);
  return;
}

var TFILE = new TFILEReader(file).readTFormat();

var offset = TFILE.beginningOfBin;
for (var i=0; i<TFILE.files.length; i++) {
	var length = TFILE.files[i].reload(offset);
	offset += length;
	//console.log("Part to assemble "+TFILE.files[i].fileName);
}

TFILE.injectParts();
TFILE.write();
