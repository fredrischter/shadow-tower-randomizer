'use strict';

const fs = require('fs');
const walklib = require('./walklib');

console.error("Mapwalker");

var paramsFile = process.argv[2];
if (!paramsFile || !paramsFile.endsWith(".json")) {
  console.error("ERROR - didn't provide .json file part as argument.");
  process.exit(1);
  return;
}

var areas = JSON.parse(fs.readFileSync(paramsFile));

var output = walklib.walk(areas);
console.log(output);
