'use strict';

console.error("Mapwalker");

const fs = require('fs');

var paramsFile = process.argv[2];
if (!paramsFile || !paramsFile.endsWith(".json")) {
  console.error("ERROR - didn't provide .json file part as argument.");
  process.exit(1);
  return;
}

var areas = JSON.parse(fs.readFileSync(paramsFile));

var currentArea = "solitary";
var enteredFromId;

console.error("map " + JSON.stringify(areas));
console.error("starting from " + currentArea);
console.error();

var walkPath = [];
var knownPaths = {};//["origin"-"destination": [{"dest":"hidden", "id":"2"}]]

var mapsWithKnownUndiscoveredWays = []; // {name:"forgotten", exits: [{id:"1", dest:"hidden"},{id:"2", dest:"cursed"}]
var desiredDestination = null;

function getKnownUndiscoveredWaysByName(name) {
	for (var i in mapsWithKnownUndiscoveredWays) {
		if (mapsWithKnownUndiscoveredWays[i].name == name) {
			console.error("  from " + name + " - unknown ways to go: " +JSON.stringify(mapsWithKnownUndiscoveredWays[i]));
			return mapsWithKnownUndiscoveredWays[i];
		}
	}
}

function getAreaByName(name) {
	for (var i in areas) {
		var area=areas[i];
		if (area.name == name) {
			return area;
		}
	}
}

function addToKnownUndiscoveredUndiscoveredWays(exceptId) {
	var area = Object.assign({}, getAreaByName(currentArea));
	area.exits = area.exits.filter(exit => exit.id != exceptId);
	console.error("  newly known area with exits "+JSON.stringify(area)+ " adding to " +JSON.stringify(mapsWithKnownUndiscoveredWays));
	mapsWithKnownUndiscoveredWays.push(area);
}

function getShorterPathToKnownUndiscoveredWays(from) {
	var found;
	console.error("    finding shorter known path to area with undiscovered ways from  " + from);
	for (var i in mapsWithKnownUndiscoveredWays) {
		if (mapsWithKnownUndiscoveredWays[i].exits.length==0) {
			continue;
		}
		var key=from+"-"+mapsWithKnownUndiscoveredWays[i].name;
		var path = knownPaths[key];
		if (path) {
			if (!found || found.length>path.length) {
				console.error("    setting path "+key+ " from "+ JSON.stringify(found) +" to " + JSON.stringify(path));
				found = path;
			}
		}
	}

	if (path) {
		console.error("    nearest path to area with known undiscovered ways from " + from + " " +JSON.stringify(path));
	} else {
		console.error("    don't know any area with known undiscovered ways - don't have anywhere to go anymore.");
	}
	
	return path;
}

//When enter a door addKnownPath: 
function addKnownPath(previousArea, way) {
	var addedNew = false;

	//1.add direct know Path with only one step from-to for current movement
	var key=previousArea+"-"+way.dest;
	console.error("addKnownPath direct " + key + " " + JSON.stringify([way]));
	if (!knownPaths[key] || knownPaths[key].length>1) {
		addedNew = true;
	}
	knownPaths[key] = [way];

	//2.make list of proposals (for all knownPaths, 
	//   if your destination is in origin, will propose adding a extended new known path adding to beginning,
	//   if your origin is in end of known path, propose a new extended added to end)
	var proposals = [];
	for (var i in knownPaths) {
		if (!knownPaths[i].slice) {
			console.error("ERROR - no function "+JSON.stringify(knownPaths));
		}
		var pathCopy = knownPaths[i].slice();
		if (i.startsWith(way.dest + "-")) {
			pathCopy.unshift(way);
			var b = i.split("-")[1];
			var key=""+previousArea+"-"+b;
			if (b != previousArea) {
				var proposal = {key: key, path: pathCopy};
				proposals.push(proposal);
			}
		}
		if (i.endsWith("-" + previousArea)) {
			pathCopy.push(way);
			var a = i.split("-")[0];
			var key=a+"-"+way.dest;
			if (a != way.dest) {
				var proposal = {key: key, path: pathCopy};
				proposals.push(proposal);
			}
		}
	}
	//["origin"-"destination": [{"dest":"hidden", "id":"2"}]]
	//3.for each proposal, get using key, from knowPaths, if there is null or your is shorter, set it.
	for (var i in proposals) {
		var key = proposals[i].key;
		var path = proposals[i].path;
		if (!knownPaths[key] || knownPaths[key].length > path.length) {
			console.error("addKnownPath by better proposal " + key + " " + JSON.stringify(path));
			console.error(" known one was " + JSON.stringify(knownPaths[key]));
			knownPaths[key] = path;
			addedNew = true;
		}
	}

	if (addedNew) {
		console.error("  should try to add more known paths, since it was just added a new one.");
	} else {
		console.error("  should stop trying to add more known paths, since nothing was found now.");
	}
	return addedNew;
}

var steps = 0;

while(steps ++ < 100) {

	console.error("Location " + currentArea);

	//1-If map where you are isn't here mapsWithKnownUndiscoveredWays, add it with all it's ways.
	//If (map where you are is desiredDestination) desiredDestination=null;
	if (!getKnownUndiscoveredWaysByName(currentArea)) {
		addToKnownUndiscoveredUndiscoveredWays(enteredFromId);
	}
	if (currentArea == desiredDestination) {
		desiredDestination=null;
	}

	var chooseDestination = false;
	var choosenWay;
	//2-if (!desiredDestination) and there is some way in mapsWithKnownUndiscoveredWays for this map, choosenWay=first unknown door In the list, prefer bidirectional or go exitOnly. If there is no way chooseDestination=true;
	if (!desiredDestination) {
		var knownUndiscoveredWays = getKnownUndiscoveredWaysByName(currentArea);
		if (knownUndiscoveredWays) {
			choosenWay = knownUndiscoveredWays.exits[0];
		}

		if (!choosenWay) {
			chooseDestination=true;
		}
	//prefer bidirectional or go exitOnly;
	}

	//3-if (chooseDestination) choosenWay=entry from mapsWithKnownUndiscoveredWays with smaller item knownPaths from your point. If there is no entry to choose. The walk is finished.
	if (chooseDestination && currentArea) {
		var path = getShorterPathToKnownUndiscoveredWays(currentArea);
		if (path) {
			console.error("Got to go by " + JSON.stringify(path));
			choosenWay = path[0];
			desiredDestination = choosenWay.dest;
		} else {
			console.error("  left to explore " + JSON.stringify(mapsWithKnownUndiscoveredWays));
			console.error("  knownPaths " + JSON.stringify(knownPaths));

			for (var i in area) {
				area.depth = length of path from first area to this area;	
			}
			var isComplete = walk contains all areas;

/*
for (var i in area) {
	area.depth = length of path from first area to this area;	
}
isComplete = walk contains all areas;

output {
"walk": walkPath,
"map": areas,
"knowPaths": knownPaths,
"complete": isComplete
} 
*/
			const output = {};

			console.log("{\n\n\"walk\":" + JSON.stringify(walkPath) + ",\n");
			console.log("\"map\":" + JSON.stringify(areas) + ",\n");
			console.log("\"knownPaths\":" + JSON.stringify(knownPaths) + ",\n");
			console.log("\"isComplete\":" + isComplete + ",\n");
			console.log("}")

			break;
		}
	}

	//5-console.log the move
	console.error(" moving to " + choosenWay.dest + " by " + choosenWay.id);
	walkPath.push(choosenWay);

	//4-Remove the way you've chosen mapsWithKnownUndiscoveredWays from here in the map where you are. If the map gets empty, remove it from mapsWithKnownUndiscoveredWays
	var knownUndiscoveredWays = getKnownUndiscoveredWaysByName(currentArea);
	if (knownUndiscoveredWays) {
		knownUndiscoveredWays.exits = knownUndiscoveredWays.exits.filter(function isDestination(thisExit) {
			return thisExit.dest != choosenWay.dest && thisExit.id != choosenWay.id;
		});
		console.error("   removing " +JSON.stringify(choosenWay) +" -> " + JSON.stringify(knownUndiscoveredWays));
		getKnownUndiscoveredWaysByName(currentArea)
	}

	//6-Move to next map
	var previousArea = currentArea;
	currentArea = choosenWay.dest;
	enteredFromId = choosenWay.id;

	//7-addKnownPath
	var addingNew = 200;
	while (addingNew-->0 && addKnownPath(previousArea, choosenWay)) {};

	if (addingNew == 0) {
		console.error("ERROR - was in loop searching for new know paths seems to be always adding new indefinitely - the script believes it should keep trying to find more.");
	}

}
