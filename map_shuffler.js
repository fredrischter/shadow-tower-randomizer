
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

// Task #25: Archetype-based area randomization system
// Classifies area based on exit archetype fields set in map.json
function classifyAreaArchetype(area) {
	const doorExits = area.exits.filter(exit => exit.type === "door");
	
	if (doorExits.length === 0) {
		return null; // No door exits - don't randomize
	}
	
	// Collect all archetype values from the door exits
	const archetypes = doorExits.map(exit => exit.archetype).filter(a => a);
	
	// If no archetypes set, return null (not classified)
	if (archetypes.length === 0) {
		return null;
	}
	
	// Determine area archetype based on exit archetypes
	if (archetypes.includes("funnel-input") && archetypes.includes("funnel-output")) {
		return "funnel";
	} else if (archetypes.includes("pipe-end")) {
		return "pipe";
	} else if (archetypes.includes("dead-end")) {
		return "dead-end";
	} else if (archetypes.includes("3-way-pipe-joint-end")) {
		return "3-way-pipe-joint";
	}
	
	return null; // Unknown or unclassified
}

// Task #25: Build allow-lists for area swapping based on archetypes
function buildArchetypeAllowLists(map) {
	const allowLists = {
		"pipe": [],
		"funnel": [],
		"dead-end": [],
		"3-way-pipe-joint": []
	};
	
	map.forEach(area => {
		const archetype = classifyAreaArchetype(area);
		if (archetype && allowLists[archetype]) {
			allowLists[archetype].push(area.name);
		}
	});
	
	return allowLists;
}

// Task #25: Total area replacement - swap positions of two areas in the map graph
// All incoming connections to area1 now point to area2, and vice versa
// For pipes: can optionally invert direction (reverse which end is which)
// For 3-way-pipe-joints: can shuffle ends in any order
function swapAreasByArchetype(map, area1Name, area2Name, invertPipe = false) {
	const area1 = map.find(a => a.name === area1Name);
	const area2 = map.find(a => a.name === area2Name);
	
	if (!area1 || !area2) {
		console.error("ERROR - Cannot find areas for swap: " + area1Name + ", " + area2Name);
		return false;
	}
	
	const archetype1 = classifyAreaArchetype(area1);
	const archetype2 = classifyAreaArchetype(area2);
	
	if (archetype1 !== archetype2) {
		console.error("ERROR - Cannot swap areas with different archetypes: " + archetype1 + " vs " + archetype2);
		return false;
	}
	
	// Get door exits for both areas (only those with archetype field set)
	const doors1 = area1.exits.filter(exit => exit.type === "door" && exit.archetype);
	const doors2 = area2.exits.filter(exit => exit.type === "door" && exit.archetype);
	
	if (doors1.length !== doors2.length) {
		console.error("ERROR - Areas have different number of archetype doors: " + doors1.length + " vs " + doors2.length);
		return false;
	}
	
	// Step 1: Find all incoming connections to both areas from OTHER areas
	const incomingToArea1 = [];
	const incomingToArea2 = [];
	
	map.forEach(area => {
		if (area.name !== area1Name && area.name !== area2Name) {
			area.exits.forEach(exit => {
				if (exit.dest === area1Name) {
					incomingToArea1.push({ area: area, exit: exit });
				} else if (exit.dest === area2Name) {
					incomingToArea2.push({ area: area, exit: exit });
				}
			});
		}
	});
	
	// Step 2: Determine mapping between doors based on archetype
	let doorMapping1to2 = []; // Maps area1's door index to area2's door index
	let doorMapping2to1 = []; // Maps area2's door index to area1's door index
	
	if (archetype1 === "pipe" && invertPipe) {
		// Inverted pipe: reverse the order
		doorMapping1to2 = [1, 0];
		doorMapping2to1 = [1, 0];
	} else if (archetype1 === "funnel") {
		// Funnel: input stays input, output stays output
		const input1Idx = doors1.findIndex(d => d.archetype === "funnel-input");
		const output1Idx = doors1.findIndex(d => d.archetype === "funnel-output");
		const input2Idx = doors2.findIndex(d => d.archetype === "funnel-input");
		const output2Idx = doors2.findIndex(d => d.archetype === "funnel-output");
		
		if (input1Idx === -1 || output1Idx === -1 || input2Idx === -1 || output2Idx === -1) {
			console.error("ERROR - Funnel areas missing input or output");
			return false;
		}
		
		doorMapping1to2[input1Idx] = input2Idx;
		doorMapping1to2[output1Idx] = output2Idx;
		doorMapping2to1[input2Idx] = input1Idx;
		doorMapping2to1[output2Idx] = output1Idx;
		
	} else if (archetype1 === "3-way-pipe-joint") {
		// Random permutation for 3-way joint
		doorMapping1to2 = [0, 1, 2];
		for (let i = doorMapping1to2.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[doorMapping1to2[i], doorMapping1to2[j]] = [doorMapping1to2[j], doorMapping1to2[i]];
		}
		// Create inverse mapping
		doorMapping2to1 = new Array(3);
		for (let i = 0; i < 3; i++) {
			doorMapping2to1[doorMapping1to2[i]] = i;
		}
	} else {
		// Regular swap: 1-to-1 mapping (dead-end, pipe without inversion)
		for (let i = 0; i < doors1.length; i++) {
			doorMapping1to2[i] = i;
			doorMapping2to1[i] = i;
		}
	}
	
	// Task #25: PRE-CHECK for self-loops before making any changes
	// Check if area1 would point to itself
	const originalDoors2 = JSON.parse(JSON.stringify(doors2));
	for (let i = 0; i < doors1.length; i++) {
		const mappedIdx = doorMapping1to2[i];
		const newDest = originalDoors2[mappedIdx].dest;
		if (newDest === area1Name) {
			console.error("ERROR - Would create self-loop: " + area1Name + " -> " + area1Name + " (skipping swap)");
			return false;
		}
	}
	
	// Check if area2 would point to itself
	const originalDoors1 = JSON.parse(JSON.stringify(doors1));
	for (let i = 0; i < doors2.length; i++) {
		const mappedIdx = doorMapping2to1[i];
		const newDest = originalDoors1[mappedIdx].dest;
		if (newDest === area2Name) {
			console.error("ERROR - Would create self-loop: " + area2Name + " -> " + area2Name + " (skipping swap)");
			return false;
		}
	}
	
	// Step 3: Redirect all incoming connections to area1 -> now point to area2 (with door mapping)
	incomingToArea1.forEach(incoming => {
		const oldWayBackId = incoming.exit.wayBackId;
		const oldDoorIdx = doors1.findIndex(d => d.id === oldWayBackId);
		
		if (oldDoorIdx !== -1) {
			const newDoorIdx = doorMapping1to2[oldDoorIdx];
			const newWayBackId = doors2[newDoorIdx].id;
			
			incoming.exit.dest = area2Name;
			incoming.exit.world = area2.world;
			incoming.exit.wayBackId = newWayBackId;
		}
	});
	
	// Step 4: Redirect all incoming connections to area2 -> now point to area1 (with door mapping)
	incomingToArea2.forEach(incoming => {
		const oldWayBackId = incoming.exit.wayBackId;
		const oldDoorIdx = doors2.findIndex(d => d.id === oldWayBackId);
		
		if (oldDoorIdx !== -1) {
			const newDoorIdx = doorMapping2to1[oldDoorIdx];
			const newWayBackId = doors1[newDoorIdx].id;
			
			incoming.exit.dest = area1Name;
			incoming.exit.world = area1.world;
			incoming.exit.wayBackId = newWayBackId;
		}
	});
	
	// Step 5: Update area1's outgoing exits to point to what area2 was pointing to (with mapping)
	for (let i = 0; i < doors1.length; i++) {
		const mappedIdx = doorMapping1to2[i];
		doors1[i].dest = originalDoors2[mappedIdx].dest;
		doors1[i].world = originalDoors2[mappedIdx].world;
		doors1[i].wayBackId = originalDoors2[mappedIdx].wayBackId;
	}
	
	// Step 6: Update area2's outgoing exits to point to what area1 was pointing to (with mapping)
	for (let i = 0; i < doors2.length; i++) {
		const mappedIdx = doorMapping2to1[i];
		doors2[i].dest = originalDoors1[mappedIdx].dest;
		doors2[i].world = originalDoors1[mappedIdx].world;
		doors2[i].wayBackId = originalDoors1[mappedIdx].wayBackId;
	}
	
	verifyConsistency(map);
	return true;
}

// Task #25: Perform one iteration of archetype-based randomization
function performArchetypeRandomization(map, allowLists) {
	// Pick a random archetype that has multiple areas
	const validArchetypes = Object.keys(allowLists).filter(arch => 
		allowLists[arch].length >= 2
	);
	
	if (validArchetypes.length === 0) {
		console.error(" - No valid archetypes with 2+ areas for swapping");
		return false;
	}
	
	const randomArchetype = validArchetypes[Math.floor(Math.random() * validArchetypes.length)];
	const areaList = allowLists[randomArchetype];
	
	// Pick two random areas from this archetype
	const area1Name = areaList[Math.floor(Math.random() * areaList.length)];
	let area2Name = areaList[Math.floor(Math.random() * areaList.length)];
	
	// Ensure different areas
	let retries = 0;
	while (area1Name === area2Name && retries < 10) {
		area2Name = areaList[Math.floor(Math.random() * areaList.length)];
		retries++;
	}
	
	if (area1Name === area2Name) {
		return false;
	}
	
	// For pipes, randomly decide to invert or not
	const invertPipe = (randomArchetype === "pipe" && Math.random() < 0.5);
	
	console.error(" - Swapping " + randomArchetype + " areas: " + area1Name + " <-> " + area2Name + 
	              (invertPipe ? " (inverted)" : ""));
	
	return swapAreasByArchetype(map, area1Name, area2Name, invertPipe);
}

// Task #NEW: Pipe/Funnel Segment Extraction and Insertion
// This replaces the swap-based algorithm with an extract-then-insert approach

/**
 * Extracts a pipe or funnel segment from the map graph
 * @param {Array} map - The area map
 * @param {string} segmentAreaName - Name of the area to extract
 * @returns {Object} Extracted segment info with {area, inputExit, outputExit, archetype}
 */
function extractSegment(map, segmentAreaName) {
	const area = map.find(a => a.name === segmentAreaName);
	if (!area) {
		console.error("ERROR - Cannot find area for extraction: " + segmentAreaName);
		return null;
	}
	
	const archetype = classifyAreaArchetype(area);
	if (archetype !== "pipe" && archetype !== "funnel") {
		console.error("ERROR - Cannot extract non-pipe/funnel area: " + archetype);
		return null;
	}
	
	const doorExits = area.exits.filter(exit => exit.type === "door" && exit.archetype);
	if (doorExits.length !== 2) {
		console.error("ERROR - Segment must have exactly 2 door exits");
		return null;
	}
	
	// Determine which is input and which is output
	let inputExit, outputExit;
	if (archetype === "funnel") {
		inputExit = doorExits.find(e => e.archetype === "funnel-input");
		outputExit = doorExits.find(e => e.archetype === "funnel-output");
	} else {
		// For pipes, we can choose either direction
		inputExit = doorExits[0];
		outputExit = doorExits[1];
	}
	
	if (!inputExit || !outputExit) {
		console.error("ERROR - Cannot identify input/output exits");
		return null;
	}
	
	// Find all connections TO this segment (incoming edges)
	const incomingToInput = [];
	const incomingToOutput = [];
	
	map.forEach(otherArea => {
		if (otherArea.name !== segmentAreaName) {
			otherArea.exits.forEach(exit => {
				if (exit.dest === segmentAreaName) {
					if (exit.wayBackId === inputExit.id) {
						incomingToInput.push({ area: otherArea, exit: exit });
					} else if (exit.wayBackId === outputExit.id) {
						incomingToOutput.push({ area: otherArea, exit: exit });
					}
				}
			});
		}
	});
	
	// Step 1: Connect input sources directly to output destination
	// All exits pointing to this segment's input should now point to output's destination
	// IMPORTANT: The wayBackId must point to the wayback in the DESTINATION area, not the segment
	incomingToInput.forEach(incoming => {
		// The output exit of the segment points to a destination area
		// We need to find the wayback ID in that destination area
		const destArea = map.find(a => a.name === outputExit.dest);
		if (destArea) {
			const waybackInDest = destArea.exits.find(e => e.id === outputExit.wayBackId);
			if (waybackInDest) {
				// Update this wayback to point to the incoming area instead of the segment
				waybackInDest.dest = incoming.area.name;
				waybackInDest.world = incoming.area.world || waybackInDest.world;
				waybackInDest.wayBackId = incoming.exit.id;
			}
		}
		
		// Update the incoming exit to bypass the segment
		incoming.exit.dest = outputExit.dest;
		incoming.exit.world = outputExit.world;
		incoming.exit.wayBackId = outputExit.wayBackId;
	});
	
	// Step 2: Connect output sources directly to input destination  
	// All exits pointing to this segment's output should now point to input's destination
	incomingToOutput.forEach(incoming => {
		// The input exit of the segment points to a destination area
		// We need to find the wayback ID in that destination area
		const destArea = map.find(a => a.name === inputExit.dest);
		if (destArea) {
			const waybackInDest = destArea.exits.find(e => e.id === inputExit.wayBackId);
			if (waybackInDest) {
				// Update this wayback to point to the incoming area instead of the segment
				waybackInDest.dest = incoming.area.name;
				waybackInDest.world = incoming.area.world || waybackInDest.world;
				waybackInDest.wayBackId = incoming.exit.id;
			}
		}
		
		// Update the incoming exit to bypass the segment
		incoming.exit.dest = inputExit.dest;
		incoming.exit.world = inputExit.world;
		incoming.exit.wayBackId = inputExit.wayBackId;
	});
	
	// Return segment info for later insertion
	return {
		area: area,
		areaName: segmentAreaName,
		inputExit: JSON.parse(JSON.stringify(inputExit)),
		outputExit: JSON.parse(JSON.stringify(outputExit)),
		archetype: archetype
	};
}

/**
 * Inserts a segment at a random location in the map
 * @param {Array} map - The area map
 * @param {Object} segment - Segment to insert (from extractSegment)
 * @param {Object} referenceWalk - Optional walk path from no-change for directionality
 * @returns {boolean} Success
 */
function insertSegment(map, segment, referenceWalk) {
	// Find all potential insertion points (any door exit in the map)
	const allDoors = [];
	map.forEach(area => {
		if (area.name !== segment.areaName) {
			area.exits.forEach(exit => {
				if (exit.type === "door" && exit.wayBackId) {
					allDoors.push({ area: area, exit: exit });
				}
			});
		}
	});
	
	if (allDoors.length === 0) {
		console.error("ERROR - No valid insertion points found");
		return false;
	}
	
	// Pick random insertion point
	const insertionPoint = allDoors[Math.floor(Math.random() * allDoors.length)];
	const insertArea = insertionPoint.area;
	const insertExit = insertionPoint.exit;
	
	// For funnels, check walk path indices to ensure forward progression
	if (segment.archetype === "funnel" && referenceWalk) {
		// TODO: Implement walk index checking
		// For now, we'll skip this check and insert anyway
	}
	
	// Determine if we should invert the segment (pipes only)
	const invertSegment = (segment.archetype === "pipe" && Math.random() < 0.5);
	
	// Save original destination before modifying
	const originalDest = insertExit.dest;
	const originalWorld = insertExit.world;
	const originalWayBackId = insertExit.wayBackId;
	
	// Step 1: Connect insertion point to segment input
	let segmentInputExit, segmentOutputExit;
	if (invertSegment) {
		segmentInputExit = segment.outputExit;
		segmentOutputExit = segment.inputExit;
	} else {
		segmentInputExit = segment.inputExit;
		segmentOutputExit = segment.outputExit;
	}
	
	insertExit.dest = segment.areaName;
	insertExit.world = segment.area.world;
	insertExit.wayBackId = segmentInputExit.id;
	
	// Step 2: Update segment's input to come from insertion point
	const segmentArea = map.find(a => a.name === segment.areaName);
	const actualInputExit = segmentArea.exits.find(e => e.id === segmentInputExit.id);
	actualInputExit.dest = insertArea.name;
	actualInputExit.world = insertArea.world;
	actualInputExit.wayBackId = insertExit.id;
	
	// Step 3: Update segment's output to go to original destination
	const actualOutputExit = segmentArea.exits.find(e => e.id === segmentOutputExit.id);
	actualOutputExit.dest = originalDest;
	actualOutputExit.world = originalWorld;
	actualOutputExit.wayBackId = originalWayBackId;
	
	// Step 4: Update the wayback in the original destination to point to the segment's output
	const originalDestArea = map.find(a => a.name === originalDest);
	if (originalDestArea) {
		const waybackInOriginalDest = originalDestArea.exits.find(e => e.id === originalWayBackId);
		if (waybackInOriginalDest) {
			waybackInOriginalDest.dest = segment.areaName;
			waybackInOriginalDest.world = segmentArea.world || waybackInOriginalDest.world;
			waybackInOriginalDest.wayBackId = segmentOutputExit.id;
		}
	}
	
	console.error(" - Inserted " + segment.archetype + " segment '" + segment.areaName + 
	              "' at " + insertArea.name + "." + insertExit.id + 
	              (invertSegment ? " (inverted)" : ""));
	
	verifyConsistency(map);
	return true;
}

/**
 * Performs extraction-insertion randomization for all pipe/funnel segments
 * @param {Array} map - The area map
 * @param {Object} referenceWalk - Optional walk path from no-change
 */
function performSegmentExtractionInsertion(map, referenceWalk) {
	console.error(new Date().toISOString() + "  Starting segment extraction-insertion");
	
	const allowLists = buildArchetypeAllowLists(map);
	const pipeAreas = allowLists["pipe"] || [];
	const funnelAreas = allowLists["funnel"] || [];
	
	console.error(" - Pipe areas: " + pipeAreas.length);
	console.error(" - Funnel areas: " + funnelAreas.length);
	
	// Extract all segments first
	const extractedSegments = [];
	
	[...pipeAreas, ...funnelAreas].forEach(areaName => {
		console.error(" - Extracting segment: " + areaName);
		const segment = extractSegment(map, areaName);
		if (segment) {
			extractedSegments.push(segment);
		}
	});
	
	console.error(" - Extracted " + extractedSegments.length + " segments");
	
	// Shuffle the segments array for random re-insertion
	for (let i = extractedSegments.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[extractedSegments[i], extractedSegments[j]] = [extractedSegments[j], extractedSegments[i]];
	}
	
	// Insert segments at random locations
	extractedSegments.forEach(segment => {
		insertSegment(map, segment, referenceWalk);
	});
	
	console.error(" - Completed segment extraction-insertion");
}

function shuffle(params) {
	params = params || { randomizeMap: true };

	const LIMIT_ATTEMPTS = 20;
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

				// Task #NEW: Pipe/Funnel segment extraction and insertion
				// This replaces the swap-based archetype randomization
				console.error(new Date().toISOString() + "  Starting segment extraction-insertion randomization");
				
				performSegmentExtractionInsertion(generated, lastValidMap.walk);
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

			console.error(" complete:" + walkResult.isComplete);
	//		if (walkResult.isComplete && walkResult.pathDifficulty < 50 || walkResult.pathDifficulty > 200) {
	//			console.log(" map:" + JSON.stringify(walkResult.map));
	//		}
			console.error(" difficulty:" + walkResult.pathDifficulty);

		} while((!walkResult || !walkResult.isComplete) && ++attempts<LIMIT_ATTEMPTS);

		if (walkResult && walkResult.isComplete) {
			if (!params.randomizeMap) {
				result = walkResult;
			} else {
				console.error(new Date().toISOString() + " Accepting valid map with difficulty " + walkResult.pathDifficulty);
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
