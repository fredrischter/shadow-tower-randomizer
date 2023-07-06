
const fs = require('fs');
const walklib = require('./walklib');
const originalMap = JSON.parse(fs.readFileSync("./map.json"));

var areasMap = {};

// Map areas include world and type(bi, exit or entrance)
// Input difficulty, consistentDoors, swapOnlyDirections (highest respect for gamedesign, only swap bidirectional doors in same area so it has no walk difference)
var difficulty=115;

var areas = JSON.parse(JSON.stringify(originalMap));
areas.forEach(area => {
	areasMap[area.name] = area;
	area.exits.forEach(exit => {
		areasMap[area.name][exit.id] = exit;
		exit.origin = area.name;
	});
});

var swapRounds = 0;
var lastValidMap = JSON.parse(fs.readFileSync("walk.json"));

//how will separate map walker callable and usable via js

function switchableWay(way) {
	if (way.type == "jump") {
		return false;
	}
	if (way.type == "totem") {
		return false;
	}
	if (way.type == "portal") {
		return false;
	}
	return true;
}

function assignWay(to, from, area) {
  //console.log("  area "+area+" changing way, from " + JSON.stringify(to) + " to " + JSON.stringify(from));
  to.dest = from.dest;
  to.world = from.world;
  to.wayBackId = from.wayBackId;
}

function rotateDoors(map) {
  var randomArea = map[Math.floor(Math.random()*map.length)];
  var switchableDoors = randomArea.exits.filter(way => switchableWay(way));
  if (switchableDoors.length<2) {
  	return;
  }
  var firstWayCopy = JSON.parse(JSON.stringify(switchableDoors[0]));
  for (var i=1; i<switchableDoors.length; i++) {
  	assignWay(switchableDoors[i-1], switchableDoors[i],randomArea.name);
  }
  assignWay(switchableDoors[switchableDoors.length-1], firstWayCopy, randomArea.name);
  //choose map with 2 ends or more
  //shuffle all doors, replace the door and its pair
  //consider consistentDoors, swapOnlyDirections (highest respect for gamedesign, only swap bidirectional doors in same area so it has no walk difference)
}

function randomPickSwap(map) {
  var allDoors = map.map(area => area.exits.filter(way => way.type == "door")).flat(1);
  var allTotems = map.map(area => area.exits.filter(way => way.type == "totem")).flat(1);
  var allPortals = map.map(area => area.exits.filter(way => way.type == "portal")).flat(1);

  allWays = Math.random()>0.90 ? allPortals : (Math.random()>0.85 ? allTotems : (allDoors));

  var way1 = allWays[Math.floor(Math.random()*allWays.length)];
  var way2 = allWays[Math.floor(Math.random()*allWays.length)];

  if (way2 == way1) {
  	way2 = allWays[Math.floor(Math.random()*allWays.length)];
  }
  if (way2 == way1) {
  	return;
  }

  var firstWayCopy = JSON.parse(JSON.stringify(way1));
  if (way1.dest == way1.origin || way2.dest == way2.origin) {
  	//console.log(" skipping to swap because direction conflicts "+JSON.stringify(way1)+" - "+JSON.stringify(way2));
  	return;
  }
//console.log("antes  "+JSON.stringify(map));
  assignWay(way1, way2, way1.origin);
  assignWay(way2, firstWayCopy, way2.origin);
//console.log("depois "+JSON.stringify(map));

//  assignWay(switchableDoors1, switchableDoors2);
//  assignWay(switchableDoors2, switchableDoors3);
//  assignWay(switchableDoors3, firstWayCopy);

  //choose 3 random maps, one door of each
  //rotate these three
  //consider consistentDoors, swapOnlyDirections (highest respect for gamedesign, only swap bidirectional doors in same area so it has no walk difference)
}

function goodForDificulty(mapWalkOutput, difficulty) {
	return Math.abs(mapWalkOutput.pathDifficulty - difficulty) < 10;
}

function chooseBetterForDifficulty(mapWalkOutput1, mapWalkOutput2, difficulty) {
	//if score is same, take map1;
	if (mapWalkOutput1.pathDifficulty == mapWalkOutput2.pathDifficulty) {
		return mapWalkOutput1;
	}
	//return map1 OR map2;
	if (mapWalkOutput1.pathDifficulty < mapWalkOutput2.pathDifficulty &&
		difficulty < mapWalkOutput2.pathDifficulty) {
		return mapWalkOutput1;
	} else {
		return mapWalkOutput2;
	}
}

const LIMIT_ATTEMPTS = 10;
const LIMIT_SWAP_ROUNDS = 300;

var result;

do {
	var attempts = 0;
	do {
		
		console.log("Attempt started");
		console.log(" Randomizing");

		// each random round, do both rotateDoors(map); map);
		var generated=JSON.parse(JSON.stringify(lastValidMap.map));
		rotateDoors(generated);
		for (var i=0;i<20;i++) {
			randomPickSwap(generated);			
		}

		console.log(" Walking");

		var stringWalkResult=walklib.walk(generated, true);
		var walkResult=JSON.parse(stringWalkResult);
		/*output {
			"map": areas,
			"walk": walkPath,
			"knowPaths": knownPaths,
			"isComplete":true,
			"pathDifficulty":123
		}*/

		console.log(" complete:" + walkResult.isComplete);
//		if (walkResult.isComplete && walkResult.pathDifficulty < 50 || walkResult.pathDifficulty > 200) {
//			console.log(" map:" + JSON.stringify(walkResult.map));
//		}
		console.log(" difficulty:" + walkResult.pathDifficulty);

	} while(!walkResult.isComplete && ++attempts<LIMIT_ATTEMPTS);

	if (walkResult.isComplete) {
		if (swapRounds<20) {
			// First 50 swaps are free, always taking new map if it is just valid;
			console.log("taking new generated map, difficukty "+walkResult.pathDifficulty+" but still doing more swaps, already did "+swapRounds);
			lastValidMap = walkResult;
		} else {
			console.log("trying to get a reasonable map, with difficulty around "+difficulty+". lastValidMap difficulty "+lastValidMap.pathDifficulty+", new one "+walkResult.pathDifficulty+".");

			// Next rounds get new map only if it is better for difficulty, to narrow it towards better map
			lastValidMap = chooseBetterForDifficulty(walkResult, lastValidMap, difficulty);
			console.log(" taken lastValidMap as one with difficulty "+lastValidMap.pathDifficulty);

			// After 50 rounds, try to get as soon as get one suitable for the difficulty
			if (goodForDificulty(walkResult, difficulty)) {
				result = walkResult;
				console.log(" resolved as map with difficulty "+walkResult.pathDifficulty);
			}
		}

	} else {
		console.log("didn't take the map since it was not completable.");
	}

	var gaveUp=!result && (++swapRounds>=LIMIT_SWAP_ROUNDS || attempts>=LIMIT_ATTEMPTS);

} while(!gaveUp && !result);

console.log("\"gaveUp\":"+gaveUp+",");
console.log("\"swapRounds\":"+swapRounds+",");

console.log("walkResult");
console.log(JSON.stringify(walkResult, null, 2));

//Generates incrementally shuffled maps while resolvable till it gets expected difficulty and having more than 50 switches, try 10 times each step or done more than 200 switches (returns gaveUp:true).

//Output:
//{
//	Output from walker,
//	areasSortedByDepth:
//	gaveUp:
//}
