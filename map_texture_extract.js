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

	var hsvRandomFactor = {
		v: 0.5 + Math.random()*1,
		h: Math.random()*360,
		s: 0.5 + Math.random()*3
	}

	files.forEach(rtim => {
		var colors = rtim.getRGBArray();
		colors.forEach(color=> {
		  var hsv = rgbToHsv(color);
	      hsv.v = Math.min(1, Math.max(0, hsv.v * hsvRandomFactor.v));
	      hsv.h = (hsv.h + hsvRandomFactor.h) % 360;
	      hsv.s = Math.min(1, Math.max(0, hsv.s * hsvRandomFactor.s));
	      var newColor = hsvToRgb(hsv);
          color.r=newColor.r;
          color.g=newColor.g;
          color.b=newColor.b;
		});
		rtim.setRGBArray(colors);
		rtim.writeAsTIM(fileName + "."+ (counter++) +".tim");
	});

}

if (process.argv[1].indexOf("map_texture_extract.js") > -1){
	map_texture_extract(process.argv[2]);
} else {
	module.exports = pack;
}
