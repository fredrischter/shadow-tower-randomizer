
const fs = require('fs');
const walklib = require('./walklib');
const originalMap = JSON.parse(fs.readFileSync("./map.json"));

var areasMap = {};

// Map areas include world and type(bi, exit or entrance)
// Input difficulty, consistentDoors, swapOnlyDirections (highest respect for gamedesign, only swap bidirectional doors in same area so it has no walk difference)
var difficulty=115;
var consistentDoors=true;

var areas = JSON.parse(JSON.stringify(originalMap));
areas.forEach(area => {
	areasMap[area.name] = area;
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

function assignWay(to, from, area, map) {
  //console.log(" area "+area.name+" changing way, from " + JSON.stringify(to) + " to " + JSON.stringify(from));
  //console.log("  map pre change "+JSON.stringify(map));

  if (consistentDoors) {
    if (from.wayBackId) {
    	var wayBackArea = map.find(area => area.name == from.dest);
    }
    //console.log("   wayback area found? "+JSON.stringify(wayBackArea));
    if (wayBackArea) {
    	var wayBackWay = wayBackArea.exits.find(exit => exit.id == from.wayBackId);

    	if (!wayBackWay) {
    		console.error("ERROR = wayBackArea didn't have wayBackWay with id " + from.wayBackId + " " + JSON.stringify(wayBackArea));
    		process.exit(1);
    	}

		/*console.log("  wayback changing"+
    	" dest set from " + wayBackWay.dest + " to " + area.name +
    	" world set from " + wayBackWay.world + " to " + area.world +
    	" wayBackId set from " + wayBackWay.wayBackId + " to " + to.id);
*/
    	wayBackWay.dest = area.name;
    	wayBackWay.world = area.world;
    	wayBackWay.wayBackId = to.id;
    }
  }

  to.dest = from.dest;
  to.world = from.world;
  to.wayBackId = from.wayBackId;

  //console.log("  map post change "+JSON.stringify(map));

}

function rotateDoors(map) {
  var randomArea = map[Math.floor(Math.random()*map.length)];
  var switchableDoors = randomArea.exits.filter(way => switchableWay(way));
  if (switchableDoors.length<2) {
  	return;
  }
  var firstWayCopy = JSON.parse(JSON.stringify(switchableDoors[0]));
  for (var i=1; i<switchableDoors.length; i++) {
  	assignWay(switchableDoors[i-1], switchableDoors[i], randomArea, map);
  }
  assignWay(switchableDoors[switchableDoors.length-1], firstWayCopy, randomArea, map);

  //choose map with 2 ends or more
  //shuffle all doors, replace the door and its pair
  //consider consistentDoors, swapOnlyDirections (highest respect for gamedesign, only swap bidirectional doors in same area so it has no walk difference)
}

function randomPickSwap(map) {
  var allDoors = map.map(area => area.exits.map(function(exit) { return {"area": area, "exit": exit}}).filter(way => way.exit.type == "door")).flat(1);
  var allTotems = map.map(area => area.exits.map(function(exit) { return {"area": area, "exit": exit}}).filter(way => way.exit.type == "totem")).flat(1);
  var allPortals = map.map(area => area.exits.map(function(exit) { return {"area": area, "exit": exit}}).filter(way => way.exit.type == "portal")).flat(1);

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
  if (way1.exit.dest == way2.area.name || way2.exit.dest == way1.area.name) {
  	//console.log(" skipping to swap because direction conflicts "+JSON.stringify(way1)+" - "+JSON.stringify(way2));
  	return;
  }
//console.log("before  "+JSON.stringify(map));
  assignWay(way1.exit, way2.exit, way1.area, map);
  assignWay(way2.exit, firstWayCopy.exit, way2.area, map);
//console.log("after "+JSON.stringify(map));

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

function shuffle() {
	const LIMIT_ATTEMPTS = 30;
	const LIMIT_SWAP_ROUNDS = 50;

	var result;

	do {
		var attempts = 0;
		do {
			
			//console.log("Attempt started");
			//console.log(" Randomizing");

			// each random round, do both rotateDoors(map); map);
			var generated=JSON.parse(JSON.stringify(lastValidMap.map));
			rotateDoors(generated);
			for (var i=0;i<20;i++) {
				randomPickSwap(generated);			
			}

			//console.log(" Walking");

			var stringWalkResult=walklib.walk(generated, !consistentDoors, true);
			if (!stringWalkResult) {
				console.error("Got a bad map, skipping it.");
				continue;
			}

			var walkResult=JSON.parse(stringWalkResult);
			/*output {
				"map": areas,
				"walk": walkPath,
				"knowPaths": knownPaths,
				"isComplete":true,
				"pathDifficulty":123
			}*/

			//console.log(" complete:" + walkResult.isComplete);
	//		if (walkResult.isComplete && walkResult.pathDifficulty < 50 || walkResult.pathDifficulty > 200) {
	//			console.log(" map:" + JSON.stringify(walkResult.map));
	//		}
			//console.log(" difficulty:" + walkResult.pathDifficulty);

		} while((!walkResult || !walkResult.isComplete) && ++attempts<LIMIT_ATTEMPTS);

		if (walkResult.isComplete) {
			if (swapRounds<10) {
				// First 50 swaps are free, always taking new map if it is just valid;
				console.error("" + swapRounds + " new generated map, difficulty "+walkResult.pathDifficulty+" but still doing more swaps");
				lastValidMap = walkResult;
			} else {
				console.error("" + swapRounds + " need to get a map, with difficulty around "+difficulty+". lastValidMap "+lastValidMap.pathDifficulty+", new one "+walkResult.pathDifficulty+".");

				// Next rounds get new map only if it is better for difficulty, to narrow it towards better map
				lastValidMap = chooseBetterForDifficulty(walkResult, lastValidMap, difficulty);
				//console.log(" taken lastValidMap as one with difficulty "+lastValidMap.pathDifficulty);

				// After 50 rounds, try to get as soon as get one suitable for the difficulty
				if (goodForDificulty(walkResult, difficulty)) {
					result = walkResult;
					//console.log(" resolved as map with difficulty "+walkResult.pathDifficulty);
				}
			}

		} else {
			//console.log("didn't take the map since it was not completable.");
		}

		var gaveUp=!result && (++swapRounds>=LIMIT_SWAP_ROUNDS || attempts>=LIMIT_ATTEMPTS);

	} while(!gaveUp && !result);

	if (gaveUp) {
		return null;
	}

	walkResult.walk.forEach(step => {
		step.dest = step.dest;
	});

	walkResult.map.sort((area1, area2) => area1.depth - area2.depth);

	const groupedMap = walkResult.map.reduce((acc, entry) => {
	  const key = entry.name;
	  acc[key] = acc[key] || { name: key, world: entry.world, exits: [], depth: entry.depth };
	  acc[key].exits = acc[key].exits.concat(entry.exits);
	  return acc;
	}, {});

	walkResult.map = Object.values(groupedMap);

	return walkResult;
}

//console.log("\"gaveUp\":"+gaveUp+",");
//console.log("\"swapRounds\":"+swapRounds+",");

//console.log("walkResult");

//Generates incrementally shuffled maps while resolvable till it gets expected difficulty and having more than 50 switches, try 10 times each step or done more than 200 switches (returns gaveUp:true).

//Output:
//{
//	Output from walker,
//	areasSortedByDepth:
//	gaveUp:
//}

if (process.argv[1].indexOf("map_shuffler.js") > -1){
	console.log(JSON.stringify(shuffle(), null, 2));
} else {
	module.exports = shuffle;
}
