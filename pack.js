'use strict';

const randomizer_common = require('./randomizer_common');

function pack(files) {

	if (!files) {
		console.log("ERROR - didn't provide T files argument.");
		process.exit(1);
		return;
	}

	var filesArray = files.split(";");

	filesArray.forEach((fileName) => {
		if (!fileName.trim().length) {
			return;
		}
		var tfile = new TFILEReader(fileName).readTFormat();
		var offset = tfile.beginningOfBin;

		for (var i=0; i<tfile.files.length; i++) {
			var length = tfile.files[i].reload(offset);
			offset += length;
		}

		tfile.injectParts();
		tfile.write();
	});
	//console.log("Part to assemble "+tfile.files[i].fileName);

}

if (process.argv[1].indexOf("pack.js") > -1){
	pack(process.argv[2]);
} else {
	module.exports = pack;
}
