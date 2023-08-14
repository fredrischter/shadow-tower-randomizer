'use strict';

//node map_walker.js map.json > walk.json 2> walk_log.txt
//node map_shuffler.js > shuffle.json 2> nul

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
