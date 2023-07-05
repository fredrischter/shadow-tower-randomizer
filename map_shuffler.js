
const fs = require('fs');
const walklib = require('./walklib');
const originalMap = JSON.parse(fs.readFileSync("./map.json"));

var areasMap = {};

// Map areas include world and type(bi, exit or entrance)
// Input difficulty, consistentDoors, swapOnlyDirections (highest respect for gamedesign, only swap bidirectional doors in same area so it has no walk difference)
var difficulty=115;

var areas = originalMap;
areas.forEach(area => {
	areasMap[area.name] = {};
	area.exits.forEach(exit => {
		areasMap[area.name][exit.id] = exit;
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
  console.log("  area "+area.name+" changing way, from " + JSON.stringify(to) + " to " + JSON.stringify(from));
  to.id = from.id;
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
  	assignWay(switchableDoors[i-1], switchableDoors[i], randomArea);
  }
  assignWay(switchableDoors[switchableDoors.length-1], firstWayCopy, randomArea);
  //choose map with 2 ends or more
  //shuffle all doors, replace the door and its pair
  //consider consistentDoors, swapOnlyDirections (highest respect for gamedesign, only swap bidirectional doors in same area so it has no walk difference)
}

function randomPickSwap(map) {
  var randomArea1 = map[Math.floor(Math.random()*map.length)];
  var switchableDoors1 = randomArea1.exits.filter(way => switchableWay(way));
  if (switchableDoors1.length<2) {
  	return;
  }

  var randomArea2 = map[Math.floor(Math.random()*map.length)];
  var switchableDoors2 = randomArea2.exits.filter(way => switchableWay(way));
  if (switchableDoors2.length<2) {
  	return;
  }

  var randomArea3 = map[Math.floor(Math.random()*map.length)];
  var switchableDoors3 = randomArea3.exits.filter(way => switchableWay(way));
  if (switchableDoors3.length<2) {
  	return;
  }

  var firstWayCopy = JSON.parse(JSON.stringify(switchableDoors1));
  assignWay(switchableDoors1, switchableDoors2, randomArea1);
  assignWay(switchableDoors2, switchableDoors3, randomArea2);
  assignWay(switchableDoors3, firstWayCopy, randomArea3);

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

		var stringWalkResult=walklib.walk(generated);
		var walkResult=JSON.parse(stringWalkResult);
		/*output {
			"map": areas,
			"walk": walkPath,
			"knowPaths": knownPaths,
			"isComplete":true,
			"pathDifficulty":123
		}*/

		console.log(" complete:" + walkResult.isComplete);
		console.log(" difficulty:" + walkResult.pathDifficulty);

	} while(!walkResult.isComplete && ++attempts<LIMIT_ATTEMPTS);

	if (walkResult.isComplete) {
		if (swapRounds<50) {
			// First 50 swaps are free, always taking new map if it is just valid;
			console.log("taking new generated map, but still doing 50 first swaps, did "+swapRounds);
			lastValidMap = walkResult;
		} else {
			console.log("trying to get a reasonable map, with difficulty around "+difficulty+". lastValidMap difficulty "+lastValidMap.pathDifficulty+", new one "+walkResult.pathDifficulty+".");

			// Next rounds get new map only if it is better for difficulty, to narrow it towards better map
			lastValidMap = chooseBetterForDifficulty(walkResult, lastValidMap, difficulty);
			console.log(" taken lastValidMap as one with difficulty "+lastValidMap.pathDifficulty);
		}

		// After 100 rounds, try to get as soon as get one suitable for the difficulty
		if (swapRounds>100 && goodForDificulty(walkResult)) {
			result = walkResult;
		}
	}
	console.log("didn't take the map since it was not completable.");

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
