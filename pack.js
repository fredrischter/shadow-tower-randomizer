'use strict';

const randomizer_common = require('./randomizer_common');

function pack(file) {

	if (!file || !file.endsWith(".T")) {
		console.log("ERROR - didn't provide T file as argument.");
		process.exit(1);
		return;
	}

	var tfile = new TFILEReader(file).readTFormat();
	var offset = tfile.beginningOfBin;

	for (var i=0; i<tfile.files.length; i++) {
		var length = tfile.files[i].reload(offset);
		offset += length;
	//console.log("Part to assemble "+tfile.files[i].fileName);
}

tfile.injectParts();
tfile.write();

}

if (process.argv[1].indexOf("pack.js") > -1){
	pack(process.argv[2]);
} else {
	module.exports = pack;
}
