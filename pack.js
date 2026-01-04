'use strict';

const randomizer_common = require('./randomizer_common');

// Task: Performance optimization - Parallelize T-file packing
function pack(files) {

	if (!files) {
		console.log("ERROR - didn't provide T files argument.");
		process.exit(1);
		return;
	}

	var filesArray = files.split(";").filter(f => f.trim().length > 0);
	
	// Task: Performance optimization - Process files in parallel using Promise.all
	const startTime = Date.now();
	console.log(`Starting parallel packing of ${filesArray.length} T-files...`);
	
	const promises = filesArray.map((fileName, index) => {
		return new Promise((resolve, reject) => {
			try {
				const fileStartTime = Date.now();
				var tfile = new TFILEReader(fileName).readTFormat();
				var offset = tfile.beginningOfBin;

				for (var i=0; i<tfile.files.length; i++) {
					var length = tfile.files[i].reload(offset);
					offset += length;
				}

				tfile.injectParts();
				tfile.write();
				const fileEndTime = Date.now();
				console.log(`[${index + 1}/${filesArray.length}] Packed ${fileName} in ${fileEndTime - fileStartTime}ms`);
				resolve();
			} catch (error) {
				console.error(`Error packing ${fileName}:`, error);
				reject(error);
			}
		});
	});
	
	// Use Promise.all to process all files in parallel
	return Promise.all(promises).then(() => {
		const endTime = Date.now();
		console.log(`Parallel packing completed in ${endTime - startTime}ms (${filesArray.length} files)`);
	}).catch((error) => {
		console.error("Error during parallel packing:", error);
		process.exit(1);
	});

}

if (process.argv[1].indexOf("pack.js") > -1){
	// Task: Performance optimization - Handle promise from parallel processing
	const result = pack(process.argv[2]);
	if (result && result.then) {
		result.catch((error) => {
			console.error("Pack failed:", error);
			process.exit(1);
		});
	}
} else {
	module.exports = pack;
}
