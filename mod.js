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

var originalParamsFile = process.argv[3];
if (!originalParamsFile) {
  console.log("ERROR - didn't provide params file as argument.");
  process.exit(1);
  return;
}

const onlyPath = path.dirname(file);
const onlyFileName = path.basename(file);
const outputImage = onlyPath + path.sep + 'modified' + onlyFileName;

const extractedPath = onlyPath + path.sep + 'extracted';
const spoilersPath = onlyPath + path.sep + 'spoilers';
const xmlDescriptor = onlyPath + path.sep + 'st.xml';
const paramsFile = spoilersPath + path.sep + "params.json";

fs.rmdirSync(extractedPath, { recursive: true });
fs.rmdirSync(spoilersPath, { recursive: true });
fs.mkdirSync(spoilersPath);

fs.copyFileSync(originalParamsFile, paramsFile);

const dumpiso = 'dumpsxiso.exe "' + file + '" -x "' + extractedPath + '" -s "' + xmlDescriptor + '"';
console.log("Running "+dumpiso);
var child = child_process.exec(dumpiso);
child.stdout.pipe(process.stdout);
child.on('exit', function() {

	var tFile=extractedPath + path.sep + "ST" + path.sep + "COM" + path.sep + "FDAT.T";
	const unpack = require('./unpack');
	unpack(tFile);

	const randomize = require('./randomize');
	randomize(paramsFile, extractedPath);

	const change = require('./change');
	change(spoilersPath + path.sep + "changeset.json");

	const pack = require('./pack');
	pack(tFile);

	const mkiso = 'mkpsxiso.exe "' + xmlDescriptor + '" -y -o "' + outputImage + '"';
	console.log("Running " + mkiso);
	var child = child_process.exec(mkiso);
	child.stdout.pipe(process.stdout);
	child.on('exit', function() {
		console.log("Finished, output " + outputImage);
		console.log("Extraced modified files " + extractedPath);
		console.log("Spoilers " + spoilersPath);
	});

});
