'use strict';

const randomizer_common = require('./randomizer_common');
const data_model = require('./data_model');

// Task: Performance optimization - Parallelize T-file unpacking
function unpack(files) {

	if (!files) {
		console.log("ERROR - didn't provide T files argument.");
		process.exit(1);
		return;
	}

	var filesArray = files.split(";").filter(f => f.trim().length > 0);
	
	// Task: Performance optimization - Process files in parallel using Promise.all
	const startTime = Date.now();
	console.log(`Starting parallel unpacking of ${filesArray.length} T-files...`);
	
	const promises = filesArray.map((fileName, index) => {
		return new Promise((resolve, reject) => {
			try {
				const fileStartTime = Date.now();
				var tfile = new TFILEReader(fileName).readTFormat();
				tfile.writeParts();
				const fileEndTime = Date.now();
				console.log(`[${index + 1}/${filesArray.length}] Unpacked ${fileName} in ${fileEndTime - fileStartTime}ms`);
				resolve();
			} catch (error) {
				console.error(`Error unpacking ${fileName}:`, error);
				reject(error);
			}
		});
	});
	
	// Use Promise.all to process all files in parallel
	return Promise.all(promises).then(() => {
		const endTime = Date.now();
		console.log(`Parallel unpacking completed in ${endTime - startTime}ms (${filesArray.length} files)`);
	}).catch((error) => {
		console.error("Error during parallel unpacking:", error);
		process.exit(1);
	});

}

if (process.argv[1].indexOf("unpack.js") > -1){
	// Task: Performance optimization - Handle promise from parallel processing
	const result = unpack(process.argv[2]);
	if (result && result.then) {
		result.catch((error) => {
			console.error("Unpack failed:", error);
			process.exit(1);
		});
	}
} else {
	module.exports = unpack;
}

//for (var i=0; i<tfile.files.length; i++) {
//	tfile.files[i].verifyCheckSum();
//}
// expected to output many lines like this:
// ERROR - checksum 88ec3351 expected afd1d1c2 457 path\128c800-12c6800.T
// ERROR - checksum not possible since bin is <4 bytes path\458 12c6800-12c6800.T
