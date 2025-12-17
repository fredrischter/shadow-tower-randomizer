
const fs = require('fs');
const path = require('path');
require('./functions.js');
const walklib = require('.' + path.sep + 'walklib');
const originalMap = JSON.parse(fs.readFileSync("." + path.sep + "map.json"));

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
var lastValidMap = null;

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
	// New map randomization logic: check nonSwitchable property
	if (way.nonSwitchable === true) {
		return false;
	}
	return true;
}

function goodToAssignWay(to, from, area, map) {
  if (normalizeAreaName(from.dest) == normalizeAreaName(area.name)) {
  	return false;
  }
  if (consistentDoors) {
    if (from.wayBackId) {
    	var wayBackArea = map.find(area => area.name == from.dest);
    } else {
    	return false;
    }
    //console.log("   wayback area found? "+JSON.stringify(wayBackArea));
    if (wayBackArea) {
    	var wayBackWay = wayBackArea.exits.find(exit => exit.id == from.wayBackId);

    	if (!wayBackWay.wayBackId) {
    		return false;
    	}
    }
  }
  return true;
}

function assignWay(to, from, area, map) {
  //console.error("  map pre change "+JSON.stringify(map));
  if (normalizeAreaName(from.dest) == normalizeAreaName(area.name)) {
  	return false;
  }

  if (consistentDoors) {
    if (from.wayBackId) {
    	var wayBackArea = map.find(area => area.name == from.dest);
    } else {
    	return false;
    }
    //console.log("   wayback area found? "+JSON.stringify(wayBackArea));
    if (wayBackArea) {
    	var wayBackWay = wayBackArea.exits.find(exit => exit.id == from.wayBackId);

    	if (!wayBackWay.wayBackId) {
    		return false;
    	}

    	if (!wayBackWay) {
    		console.error("ERROR = wayBackArea didn't have wayBackWay with id " + from.wayBackId + " " + JSON.stringify(wayBackArea));
    		process.exit(1);
    	}

		//console.error("  wayback changing"+
    	//" dest set from " + wayBackWay.dest + " to " + area.name +
    	//" world set from " + wayBackWay.world + " to " + area.world +
    	//" wayBackId set from " + wayBackWay.wayBackId + " to " + to.id);

    	wayBackWay.dest = area.name;
    	wayBackWay.world = area.world;
    	wayBackWay.wayBackId = to.id;
    }
  }

  //console.error(" area "+area.name+" changing way, from " + JSON.stringify(to) + " to " + JSON.stringify(from));
  to.dest = from.dest;
  to.world = from.world;
  to.wayBackId = from.wayBackId;

  //console.error("  map post change "+JSON.stringify(map));
  return true;
}

function rotateDoors(map) {
  var randomArea = map[Math.floor(Math.random()*map.length)];
  
  // Fix: Filter to only include doors that lead outside the contiguous neighborhood
  // This prevents self-loops when rotating door destinations within the same area group
  // (e.g., shadow_tower_part1a and shadow_tower_part1b normalize to shadow_tower_part1)
  var normalizedAreaName = normalizeAreaName ? normalizeAreaName(randomArea.name) : randomArea.name;
  var switchableDoors = randomArea.exits.filter(way => {
    if (!switchableWay(way)) {
      return false;
    }
    // Only include doors that lead outside the contiguous neighborhood
    var normalizedDestName = normalizeAreaName ? normalizeAreaName(way.dest) : way.dest;
    return normalizedDestName !== normalizedAreaName;
  });
  
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

function verifyConsistency(map) {
	var areasMap = {};

	map.forEach(area => {
		areasMap[area.name] = {};
		area.exits.forEach(exit => {
			areasMap[area.name][exit.id] = exit;
		});
	});

	map.forEach(area => {
		area.exits.forEach(exit => {
			if (exit.wayBackId) {
				if (!areasMap[exit.dest][exit.wayBackId]) {
					console.error("ERROR - inconsistent wayBackId "+exit.wayBackId+" doesnt exist in area "+exit.dest);
					console.error("ERROR detail area - "+JSON.stringify(areasMap[exit.dest]));
					failed = true;
					process.exit(1);
				} 

				if (areasMap[exit.dest][exit.wayBackId].dest != area.name) {
					console.error("ERROR - inconsistent wayBackId "+exit.wayBackId+" of expected area "+exit.dest+" doesnt match "+area.name+" exit "+exit.id+": ");
					console.error("ERROR detail - "+areasMap[exit.dest][exit.wayBackId].dest +"!="+ area.name);
					console.error("ERROR map - "+JSON.stringify(map));
					failed = true;
					process.exit(1);
				}
			}
		});
	});
}

function exitsSwap(map, areaName1, exitId1, areaName2, exitId2) {
  allWays = map.map(area => area.exits.map(function(exit) { return {"area": area, "exit": exit}})
  	).flat(1);

  //allWays.forEach(way => console.error(way.area.name+ " "+ way.exit.id));

  var way1 = allWays.find(way => way.area.name == areaName1 && way.exit.id == exitId1);
  var way2 = allWays.find(way => way.area.name == areaName2 && way.exit.id == exitId2);

  if (way1 == null || way2 == null) {
  	console.error("way not found " + way1 + " " + way2);
	failed = true;
	process.exit(1);
  }
  
  performSwap(map, way1, way2);
}


function randomPickSwap(map) {
  var typeToPick = Math.random()>0.90 ? 
  	"portal"
  	: (Math.random()>0.85 ? 
	"totem"
	:
	"door");

  allWays = map.map(area => area.exits.map(function(exit) { return {"area": area, "exit": exit}})
  	.filter(way => way.exit.type == typeToPick)).flat(1);

  var way1 = allWays[Math.floor(Math.random()*allWays.length)];
  var way2 = allWays[Math.floor(Math.random()*allWays.length)];
  
  performSwap(map, way1, way2);
}

function performSwap(map, way1, way2) {
  if (way2 == way1) {
  	way2 = allWays[Math.floor(Math.random()*allWays.length)];
  }
  if (way2 == way1) {
  	return;
  }

  var firstWayCopy = JSON.parse(JSON.stringify(way1));
  var secondWayCopy = JSON.parse(JSON.stringify(way2));
  if (way1.exit.dest == way2.area.name || way2.exit.dest == way1.area.name) {
  	//console.log(" skipping to swap because direction conflicts "+JSON.stringify(way1)+" - "+JSON.stringify(way2));
  	return;
  }

  //console.error("before  "+JSON.stringify(map));
  if (goodToAssignWay(way1.exit, way2.exit, way1.area, map) &&
  	goodToAssignWay(way2.exit, firstWayCopy.exit, way2.area, map)
  	) {
	assignWay(way1.exit, way2.exit, way1.area, map);
	assignWay(way2.exit, firstWayCopy.exit, way2.area, map);
  }

  //console.error("after "+JSON.stringify(map));
  verifyConsistency(map);

//  assignWay(switchableDoors1, switchableDoors2);
//  assignWay(switchableDoors2, switchableDoors3);
//  assignWay(switchableDoors3, firstWayCopy);

  //choose 3 random maps, one door of each
  //rotate these three
  //consider consistentDoors, swapOnlyDirections (highest respect for gamedesign, only swap bidirectional doors in same area so it has no walk difference)
}

function hasShadowTowerSamePartConnection(map) {
  return map.find(area => area.exits.find(function(exit) { return exit.type == 'door' && normalizeAreaName(area.name) == normalizeAreaName(exit.dest); }));
}

function goodForDificulty(mapWalkOutput, difficulty) {
	return Math.abs(mapWalkOutput.pathDifficulty - difficulty) < 50;
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
/*
function resolveRotation(map, areasByName, targetExit) {
	if (!areasByName) {
		areasByName={};
		map.forEach((area) => {
			areasByName[normalizeAreaName(area.name)] = area;
		});
	}
	if (!targetExit) {
		resolveRotation(map, areasByName, areasByName["shadow_tower_part1"].exits[0]);
	} else {
		var currentArea = areasByName[normalizeAreaName(targetExit.dest)];
		currentArea.rotation;

		map.forEach((area) => {
			area.exits.forEach((area) => {
			}
		});
	}
}*/

// New map randomization logic: Find areas connected to central area through switchable doors
// Task #24: Limited depth BFS to prevent finding all areas in connected map
function findContiguousAreas(map, centralArea, maxDepth = 2) {
	const contiguousAreas = new Set([centralArea.name]);
	const toCheck = [{area: centralArea, depth: 0}];
	const checked = new Set();
	
	while (toCheck.length > 0) {
		const current = toCheck.pop();
		const currentArea = current.area;
		const currentDepth = current.depth;
		
		if (checked.has(currentArea.name)) continue;
		checked.add(currentArea.name);
		
		// Stop expanding if we've reached max depth
		if (currentDepth >= maxDepth) continue;
		
		// Find all switchable doors from this area
		currentArea.exits.forEach(exit => {
			if (switchableWay(exit)) {
				// If this door leads to an area not yet in our contiguous set
				if (!contiguousAreas.has(exit.dest)) {
					contiguousAreas.add(exit.dest);
					// Find the destination area and add it to check
					const destArea = map.find(a => a.name === exit.dest);
					if (destArea) {
						toCheck.push({area: destArea, depth: currentDepth + 1});
					}
				}
			}
		});
	}
	
	return contiguousAreas;
}

// New map randomization logic: Find outer circle doors
// These are switchable doors from contiguous areas that lead OUTSIDE the contiguous neighborhood
function findOuterCircleDoors(map, centralAreaName, contiguousAreaNames) {
	const outerDoors = [];
	
	// For each contiguous area (including the central area)
	contiguousAreaNames.forEach(areaName => {
		const area = map.find(a => a.name === areaName);
		if (!area) return;
		
		// Find switchable doors that lead OUTSIDE the contiguous neighborhood
		// (i.e., not to the central area and not to any other contiguous area)
		area.exits.forEach(exit => {
			if (switchableWay(exit) && !contiguousAreaNames.has(exit.dest)) {
				outerDoors.push({
					area: area,
					exit: exit
				});
			}
		});
	});
	
	return outerDoors;
}

// New map randomization logic: Spin the outer circle doors
// Each door swaps with the one at its "left" (previous position in array)
function spinOuterCircleDoors(map, outerDoors) {
	if (outerDoors.length < 2) {
		console.error(" - Not enough outer doors to spin (need at least 2, have " + outerDoors.length + ")");
		return;
	}
	
	console.error(" - Spinning " + outerDoors.length + " outer circle doors");
	
	// Shuffle the outer doors array to randomize which doors get paired
	for (let i = outerDoors.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[outerDoors[i], outerDoors[j]] = [outerDoors[j], outerDoors[i]];
	}
	
	// Save all current door destinations before modifying
	const originalDestinations = outerDoors.map(door => ({
		dest: door.exit.dest,
		world: door.exit.world,
		wayBackId: door.exit.wayBackId
	}));
	
	// Apply a circular shift: door[i] gets destination of door[i+1]
	// door[0] -> gets dest of door[1]
	// door[1] -> gets dest of door[2]  
	// ...
	// door[n-1] -> gets dest of door[0]
	
	let swapsPerformed = 0;
	for (let i = 0; i < outerDoors.length; i++) {
		const currentDoor = outerDoors[i];
		const nextIndex = (i + 1) % outerDoors.length;
		const nextDestination = originalDestinations[nextIndex];
		
		// Check if this would create a self-loop
		if (nextDestination.dest == currentDoor.area.name) {
			console.error(" - Spin would create self-loop for " + currentDoor.area.name + ", aborting this spin");
			return;
		}
		
		// Check if assignment would be valid
		if (!goodToAssignWay(currentDoor.exit, nextDestination, currentDoor.area, map)) {
			console.error(" - Assignment for door " + i + " would be invalid, aborting this spin");
			return;
		}
	}
	
	// Fix: Two-pass approach to avoid wayback conflicts during circular shift
	// Pass 1: Update all forward door destinations without touching waybacks
	for (let i = 0; i < outerDoors.length; i++) {
		const currentDoor = outerDoors[i];
		const nextIndex = (i + 1) % outerDoors.length;
		const nextDestination = originalDestinations[nextIndex];
		
		// Update the door's destination, world, and wayBackId
		currentDoor.exit.dest = nextDestination.dest;
		currentDoor.exit.world = nextDestination.world;
		currentDoor.exit.wayBackId = nextDestination.wayBackId;
		swapsPerformed++;
	}
	
	// Pass 2: Update all wayback doors to point to the correct source areas
	if (consistentDoors) {
		for (let i = 0; i < outerDoors.length; i++) {
			const currentDoor = outerDoors[i];
			
			// Find the wayback door in the destination area
			if (currentDoor.exit.wayBackId) {
				const wayBackArea = map.find(area => area.name == currentDoor.exit.dest);
				if (wayBackArea) {
					const wayBackWay = wayBackArea.exits.find(exit => exit.id == currentDoor.exit.wayBackId);
					if (wayBackWay) {
						// Update wayback to point back to the current door's area
						wayBackWay.dest = currentDoor.area.name;
						wayBackWay.world = currentDoor.area.world;
						wayBackWay.wayBackId = currentDoor.exit.id;
					}
				}
			}
		}
	}
	
	console.error(" - Successfully performed " + swapsPerformed + " door shifts");
	verifyConsistency(map);
}

// New map randomization logic: Perform one iteration of the new algorithm
function performCircleSpinIteration(map) {
	// Pick a random area as the central area
	const centralArea = map[Math.floor(Math.random() * map.length)];
	console.error(" - Selected central area: " + centralArea.name);
	
	// Find all areas connected to the central area through switchable doors
	const contiguousAreaNames = findContiguousAreas(map, centralArea);
	console.error(" - Found " + contiguousAreaNames.size + " contiguous areas");
	
	// Find the outer circle doors
	const outerDoors = findOuterCircleDoors(map, centralArea.name, contiguousAreaNames);
	console.error(" - Found " + outerDoors.length + " outer circle doors");
	
	if (outerDoors.length >= 2) {
		// Spin the outer circle
		spinOuterCircleDoors(map, outerDoors);
	}
}

function shuffle(params) {
	params = params || { randomizeMap: true };

	const LIMIT_ATTEMPTS = 10;
	const LIMIT_SWAP_ROUNDS = 50;

	var result;

	lastValidMap=JSON.parse(walklib.walk(JSON.parse(JSON.stringify(originalMap)), !consistentDoors));

	do {
		var attempts = 0;
		do {
			walkResult = null;
			
			console.error(new Date().toISOString() + "  Attempt started " + attempts);
			//console.log(" Randomizing");

			// each random round, do both rotateDoors(map); map);
			var generated=JSON.parse(JSON.stringify(lastValidMap.map));

			if (params.randomizeMap) {
				
				//exitsSwap(generated, "shadow_tower_part1a", "0", "water_world_impure_pool_area", "9"); 

				// shadow_tower_part3a options 
				// exitsSwap(generated, "shadow_tower_part2b", "4", "water_world_impure_pool_area", "11");
				//2 exitsSwap(generated, "shadow_tower_part2b", "4", "water_world_sunken_river_area", "1");
				//3 exitsSwap(generated, "shadow_tower_part2b", "4", "illusion_world_gloomy_domain", "1");
				//4 exitsSwap(generated, "shadow_tower_part2b", "4", "monster_world_false_eye_area", "9");
				//5 exitsSwap(generated, "shadow_tower_part2b", "4", "monster_world_screeching_area", "0");
				//exitsSwap(generated, "shadow_tower_part2b", "4", "death_world_dark_castle_layer", "2");
				//exitsSwap(generated, "shadow_tower_part2b", "4", "death_world_lingering_curse_layer", "1");

				//exitsSwap(generated, "shadow_tower_part1a", "0", "water_world_sunken_river_area", "1");  // ok
				//exitsSwap(generated, "shadow_tower_part1a", "0", "water_world_impure_pool_area", "11"); // ok

				// New map randomization logic: perform circle spin algorithm 3 times
				// Task #24: Changed from 2 to 3 iterations as requested
				console.error(new Date().toISOString() + "  Starting new circle spin randomization");
				for (var i=0; i<3; i++) {
					console.error(" Iteration " + (i+1) + "/3:");
					performCircleSpinIteration(generated);
				}
			}

			var shadowTowerSamePartConnection = hasShadowTowerSamePartConnection(generated);
			if (shadowTowerSamePartConnection) {
				console.error(" - To Reject: Got shadow tower segment linked to same segment. " + JSON.stringify(shadowTowerSamePartConnection));
				continue;
			}
			console.error(new Date().toISOString() + "   Walking");

			var stringWalkResult=walklib.walk(generated, !consistentDoors);
			if (!stringWalkResult) {
				console.error(" - To Reject: Got a bad map, skipping it.");
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

		if (walkResult && walkResult.isComplete) {
			if (!params.randomizeMap) {
				result = walkResult;
			} else {
				// Task #24: Circle spin algorithm fix - accept first valid map
				// The circle spin algorithm performs 3 complete iterations of randomization.
				// Unlike the old incremental swap system, we should accept the first walkable result.
				console.error(new Date().toISOString() + " Accepting circle spin result with difficulty " + walkResult.pathDifficulty);
				result = walkResult;
			}

		} else {
			//console.log("didn't take the map since it was not completable.");
		}

		var gaveUp=!result && (++swapRounds>=LIMIT_SWAP_ROUNDS || attempts>=LIMIT_ATTEMPTS);

	} while(!gaveUp && !result);

	if (gaveUp) {
		console.error("Gave up after " + attempts + " attempts, " + swapRounds + " swapRounds.");
//		return null;
	}

	walkResult.walk.forEach(step => {
		step.dest = step.dest;
	});

	//resolveRotation(walkResult.map);

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
