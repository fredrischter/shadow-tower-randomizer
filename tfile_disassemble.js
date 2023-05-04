'use strict';

const randomizer_common = require('./randomizer_common');
const data_model = require('./data_model');

var file = process.argv[2];
if (!file || !file.endsWith(".T")) {
  console.log("ERROR - didn't provide T file as argument.");
  process.exit(1);
  return;
}

var tfile = new TFILEReader(file).readTFormat();
tfile.writeParts();

if (file.endsWith("FDAT.T")) {
	data_model.setup(tfile);
}

//for (var i=0; i<tfile.files.length; i++) {
//	tfile.files[i].verifyCheckSum();
//}
// expected to output many lines like this:
// ERROR - checksum 88ec3351 expected afd1d1c2 457 path\128c800-12c6800.T
// ERROR - checksum not possible since bin is <4 bytes path\458 12c6800-12c6800.T
