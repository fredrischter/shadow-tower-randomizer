'use strict';

//const sevenBin = require('7zip-bin');
//const extractFull = require('node-7z').extractFull;
const path = require('path');

var file = process.argv[2];
if (!file) {
  console.log("ERROR - didn't provide file as argument.");
  process.exit(1);
  return;
}

var onlyPath = file;//path.dirname(file);

//const pathTo7zip = sevenBin.path7za
//const seven = extractFull(file, onlyPath, {
//  $bin: pathTo7zip
//});
//
//console.log("Working file " + file);
//console.log("Working path " + onlyPath);

var tFile=onlyPath + path.sep + "ST" + path.sep + "COM" + path.sep + "FDAT.T";
const unpack = require('./unpack');
unpack(tFile);

var paramsFile="." + path.sep + "params.json";
const randomize = require('./randomize');
randomize(paramsFile, onlyPath);

const change = require('./change');
change("." + path.sep + "changeset.json");

const pack = require('./pack');
pack(tFile);
