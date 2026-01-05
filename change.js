'use strict';

const randomizer_common = require('./randomizer_common');
const data_model = require('./data_model');
const fs = require('fs');

// Task: Performance optimization - Parallelize changeset application
function change(changeFile) {

	if (!changeFile || !changeFile.endsWith(".json")) {
		console.log("ERROR - didn't provide .json file part as argument.");
		process.exit(1);
		return;
	}

	function copyArea(origin, dest, size) {
		for (var i=0; i<size; i++) {
			part.bin[dest + i] = part.bin[origin + i];
		}
	}

	const startTime = Date.now();
	let changeset = JSON.parse(fs.readFileSync(changeFile));
	console.log(`Applying ${changeset.length} changes from changeset...`);

	var textureFiles={};
	
	// Task: Performance optimization - Group changes by type for parallel processing
	const fileSwaps = [];
	const fileCopies = [];
	const textToTextures = [];
	const fileChanges = [];
	
	// Categorize changes
	for (var i in changeset) {
		var change = changeset[i];
		if (change.fileSwap) {
			fileSwaps.push(change);
		} else if (change.fileCopy) {
			fileCopies.push(change);
		} else if (change.textToTexture) {
			textToTextures.push(change);
		} else if (change.file) {
			fileChanges.push(change);
		}
	}
	
	console.log(`Changes breakdown: ${fileSwaps.length} swaps, ${fileCopies.length} copies, ${textToTextures.length} texture changes, ${fileChanges.length} file modifications`);
	
	// Process file swaps (must be sequential due to file system constraints)
	fileSwaps.forEach(change => {
		fs.renameSync(change.fileSwap.file1, change.fileSwap.file1 + ".tmp");
		fs.renameSync(change.fileSwap.file2, change.fileSwap.file1);
		fs.renameSync(change.fileSwap.file1 + ".tmp", change.fileSwap.file2);
	});
	
	// Process file copies (can be done in parallel)
	const copyPromises = fileCopies.map(change => {
		return new Promise((resolve) => {
			fs.copyFileSync(change.fileCopy.from, change.fileCopy.to);
			resolve();
		});
	});
	
	// Process texture changes (sequential due to shared texture files)
	textToTextures.forEach(change => {
		if (!textureFiles[change.textToTexture.file]) {
			textureFiles[change.textToTexture.file] = new TFILEReader(change.textToTexture.file).readTFormat();
		}
		for (var j=0; j<50; j++) {
			textureFiles[change.textToTexture.file].files[change.textToTexture.part].bin[0x5600+j]=Math.floor(Math.random()*256);
		}
		textureFiles[change.textToTexture.file].files[change.textToTexture.part].setCheckSum();
	});
	
	// Task: Performance optimization - Process file changes in parallel batches
	// Group changes by file to avoid race conditions
	const changesByFile = {};
	fileChanges.forEach(change => {
		if (!changesByFile[change.file]) {
			changesByFile[change.file] = [];
		}
		changesByFile[change.file].push(change);
	});
	
	// Process each file in parallel
	const fileChangePromises = Object.keys(changesByFile).map((fileName) => {
		return new Promise((resolve, reject) => {
			try {
				var part = new TFILEReader(fileName).readTFormatPart();
				
				// Apply all changes for this file
				changesByFile[fileName].forEach(change => {
					for (var index in change.bytes) {
						part.bin[parseInt(index, 16)] = parseInt(change.bytes[index], 16);
					}
				});
				
				part.setCheckSum();
				part.verifyCheckSum();
				part.write();
				resolve();
			} catch (error) {
				console.error(`Error processing changes for ${fileName}:`, error);
				reject(error);
			}
		});
	});
	
	// Wait for all parallel operations to complete
	return Promise.all([...copyPromises, ...fileChangePromises]).then(() => {
		const endTime = Date.now();
		console.log(`Changeset application completed in ${endTime - startTime}ms (${changeset.length} changes)`);
	}).catch((error) => {
		console.error("Error during changeset application:", error);
		process.exit(1);
	});

/*for (var i in textureFiles) {
	textureFiles[i].injectParts();
	textureFiles[i].write();
}*/
}

if (process.argv[1].indexOf("change.js") > -1){
	// Task: Performance optimization - Handle promise from parallel processing
	const result = change(process.argv[2]);
	if (result && result.then) {
		result.catch((error) => {
			console.error("Change failed:", error);
			process.exit(1);
		});
	}
} else {
	module.exports = change;
}
