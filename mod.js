'use strict';

const path = require('path');
const fs = require('fs');
const child_process = require('child_process')

var file = process.argv[2];
if (!file) {
  console.log("ERROR - didn't provide file as argument.");
  process.exit(1);
  return;
}

var onlyPath = path.dirname(file);
var onlyFileName = path.basename(file);
var outputImage = onlyPath + path.sep + 'modified' + onlyFileName;

var extractedPath = onlyPath + path.sep + 'extracted';
var xmlDescriptor = onlyPath + path.sep + 'st.xml';

fs.rmdirSync(extractedPath, { recursive: true });

const dumpiso = 'dumpsxiso.exe "' + file + '" -x "' + extractedPath + '" -s "' + xmlDescriptor + '"';
console.log("Running "+dumpiso);
var child = child_process.exec(dumpiso);
child.stdout.pipe(process.stdout);
child.on('exit', function() {

	var tFile=extractedPath + path.sep + "ST" + path.sep + "COM" + path.sep + "FDAT.T";
	const unpack = require('./unpack');
	unpack(tFile);

	var paramsFile="." + path.sep + "params.json";
	const randomize = require('./randomize');
	randomize(paramsFile, extractedPath);

	const change = require('./change');
	change("." + path.sep + "changeset.json");

	const pack = require('./pack');
	pack(tFile);

	const mkiso = 'mkpsxiso.exe "' + xmlDescriptor + '" -y -o "' + outputImage + '"';
	console.log("Running " + mkiso);
	var child = child_process.exec(mkiso);
	child.stdout.pipe(process.stdout);
	child.on('exit', function() {
		console.log("Finished, output " + outputImage);
	});

});
