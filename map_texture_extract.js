'use strict';

const randomizer_common = require('./randomizer_common');

function map_texture_extract(fileName) {

	if (!fileName) {
		console.log("ERROR - didn't provide TFormatPart file argument.");
		process.exit(1);
		return;
	}

	if (!fileName.trim().length) {
		return;
	}
	var tfilePart = new TFILEReader(fileName).readTFormatPart(0);

	var files = tfilePart.extractRTIM();
	var counter = 0;
	files.forEach(rtim => {
		var colors = rtim.getRGBArray();
		//colors.forEach(color=> {
		//	color.g+=1;
		//});
		rtim.setRGBArray(colors);
		rtim.writeAsTIM(fileName + "."+ (counter++) +".tim");
	});

}

if (process.argv[1].indexOf("map_texture_extract.js") > -1){
	map_texture_extract(process.argv[2]);
} else {
	module.exports = pack;
}
