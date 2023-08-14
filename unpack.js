'use strict';

const randomizer_common = require('./randomizer_common');
const data_model = require('./data_model');

function unpack(file, callback) {

if (!file || !file.endsWith(".T")) {
  console.log("ERROR - didn't provide T file as argument.");
  process.exit(1);
  return;
}

for (var c = 2; c < process.argv.length; c++) {
	var tfile = new TFILEReader(file).readTFormat();
	tfile.writeParts((err) => {
		if (callback && file.endsWith("FDAT.T")) {
			callback(tfile);
		}
	});
}

}

if (process.argv[1].indexOf("unpack.js") > -1){
    unpack(process.argv[2], function(tfile) {
		data_model.setup(tfile);
    });
} else {
    module.exports = unpack;
}

//for (var i=0; i<tfile.files.length; i++) {
//	tfile.files[i].verifyCheckSum();
//}
// expected to output many lines like this:
// ERROR - checksum 88ec3351 expected afd1d1c2 457 path\128c800-12c6800.T
// ERROR - checksum not possible since bin is <4 bytes path\458 12c6800-12c6800.T
