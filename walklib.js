'use strict';

function walk(areas, skipWayBackVerification) {
	var walkDecisionDetail = [];
	var areasMap = {};

	areas.forEach(area => {
		areasMap[area.name] = {};
		area.exits.forEach(exit => {
			areasMap[area.name][exit.id] = exit;
		});
	});

	var failed = false;

	areas.forEach(area => {
		area.exits.forEach(exit => {
			if (exit.wayBackId) {
				if (!areasMap[exit.dest][exit.wayBackId]) {
					console.error("ERROR - inconsistent wayBackId "+exit.wayBackId+" doesnt exist in area "+exit.dest);
					console.error("ERROR detail area - "+JSON.stringify(areasMap[exit.dest]));
					failed = true;
					process.exit(1);
				} 

				if (!skipWayBackVerification && areasMap[exit.dest][exit.wayBackId].dest != area.name) {
					console.error("ERROR - inconsistent wayBackId "+exit.wayBackId+" of expected area "+exit.dest+" doesnt match "+area.name+" exit "+exit.id+": ");
					console.error("ERROR detail - "+areasMap[exit.dest][exit.wayBackId].dest +"!="+ area.name);
					//console.error("ERROR map - "+JSON.stringify(areas));
					failed = true;
					process.exit(1);
				}
			}
		});
	});

	if (failed) {
		return null;
	}

	var startArea = "shadow_tower_part1a";
	var currentArea = startArea;
	var enteredFromId;

	explain("map " + JSON.stringify(areas));
	explain("starting from " + currentArea);

	var walkPath = [];
	var knownPaths = {};//["origin"-"destination": [{"dest":"hidden", "id":"2"}]]

	var mapsWithKnownUndiscoveredWays = []; // {name:"forgotten", exits: [{id:"1", dest:"hidden"},{id:"2", dest:"cursed"}]
	var desiredDestination = null;

	function getKnownUndiscoveredWaysByName(name) {
		for (var i in mapsWithKnownUndiscoveredWays) {
			if (mapsWithKnownUndiscoveredWays[i].name == name) {
				explain("  from " + name + " - unknown ways to go: " +JSON.stringify(mapsWithKnownUndiscoveredWays[i]));
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

	function explain(text) {
		walkDecisionDetail.push(text);
	}

	function getAreaExits(area) {
		// Removing exits that are entrance
		var exits = area.exits.filter(exit => !exit.direction || !exit.direction.startsWith("entrance"));
		// Removnig exits whose destination there is an exit
		explain(" >> All area " + area.name + " exits not being entrance: " + JSON.stringify(exits));
		exits = exits.filter(exit => {
			var isOk = !exit.wayBackId
			 	|| !areasMap[exit.dest][exit.wayBackId].direction;

			if (isOk) {
				return true;
			}
			
			var isntExit = !areasMap[exit.dest][exit.wayBackId].direction.startsWith("exit");

			if (!isntExit) {
				explain(" >> Removed exit whose destination is a exit. Way back to id at " + areasMap[exit.dest] + " it is a exit: " + JSON.stringify(areasMap[exit.dest][exit.wayBackId]));
			}

			return isntExit;
		});

		return exits;
	}

	function addToKnownUndiscoveredUndiscoveredWays(exceptId) {
		var area = Object.assign({}, getAreaByName(currentArea));

		// Removing exits that are entrance
		area.exits = area.exits.filter(exit => !exit.direction || !exit.direction.startsWith("entrance"));
		// Removnig exits whose destination there is an exit
		area.exits = area.exits.filter(exit => {
			return !exit.wayBackId
			 	|| !areasMap[exit.dest][exit.wayBackId].direction
				|| !areasMap[exit.dest][exit.wayBackId].direction.startsWith("exit")
		});

		//area.exits = area.exits.filter(exit => exit.id != exceptId); // Not removing same id as id of the door in next area isn't same as in previous area
		explain("  newly known area with exits "+JSON.stringify(area)+ " adding to " +JSON.stringify(mapsWithKnownUndiscoveredWays));
		mapsWithKnownUndiscoveredWays.push(area);
	}

	function recombineKnownPathsFor(from, to) {
		explain("trying to combine from "+from+" to "+to);
		var beginnings=[];
		var ends=[];
		for (var key in knownPaths) {
			if (key.startsWith(from + "-")) {
				beginnings.push(key.replace(from + "-", ""));
			}
			if (key.endsWith("-" + to)) {
				ends.push(key.replace("-" + to, ""));
			}
		}

		explain(" beginnings "+JSON.stringify(beginnings));
		explain(" ends "+JSON.stringify(ends));
		for (var b in beginnings) {
			var middle=beginnings[b];
			for (var i in knownPaths) {
				var dest = i.replace(middle + "-", "");
				if (dest != to) {
					continue;
				}
				explain("   trying to tie "+from+" - " +middle+ " - "+dest);
				if (i.startsWith(middle + "-")) {
					explain("     got "+i);
					var key = from + "-" + dest;
					if (!knownPaths[key]) {
						explain("   combining paths for "+key+":");
						explain("    start "+JSON.stringify(knownPaths[from+"-"+middle]));
						explain("    end "+JSON.stringify(knownPaths[middle+"-"+dest]));

						var combined = knownPaths[from+"-"+middle].concat(knownPaths[middle+"-"+dest]);
						explain("    result "+JSON.stringify(combined));
						knownPaths[key] = combined;
					}
				}
			}
		}
	}

	function getShorterPathToKnownUndiscoveredWays(from) {
		var found;
		explain("    finding shorter known path to area with undiscovered ways from " + from);
		for (var i in mapsWithKnownUndiscoveredWays) {
			if (mapsWithKnownUndiscoveredWays[i].exits.length==0) {
				continue;
			}
			var key=from+"-"+mapsWithKnownUndiscoveredWays[i].name;
			var path = knownPaths[key];

			explain("      checking "+key+ ", got path? " + (!!path));
			if (!path) {
				recombineKnownPathsFor(from, mapsWithKnownUndiscoveredWays[i].name);
			}
			path = knownPaths[key];

			if (path) {
				if (!found || found.length>path.length) {
					explain("    setting path "+key+ " from "+ JSON.stringify(found) +" to " + JSON.stringify(path));
					found = path;
				}
			}
		}

		if (path) {
			explain("    nearest path to area with known undiscovered ways from " + from + " " +JSON.stringify(path));
		} else {
			explain("    don't know any area with known undiscovered ways - don't have anywhere to go anymore.");
		}
		
		return path;
	}

	//When enter a door addKnownPath: 
	function addKnownPath(previousArea, way) {
		var addedNew = false;

		//1.add direct know Path with only one step from-to for current movement
		var key=previousArea+"-"+way.dest;

		explain("addKnownPath direct " + key + " " + JSON.stringify([way]));
		if (!knownPaths[key] || knownPaths[key].length>1) {
			recombineKnownPathsFor(previousArea, way.dest);
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
				if (knownPaths[key]) {
					explain("addKnownPath by better proposal " + key + " " + JSON.stringify(path));
					explain(" known one was " + JSON.stringify(knownPaths[key]));				
				}
				knownPaths[key] = path;
				recombineKnownPathsFor(key.split("-")[0], key.split("-")[1]);
				addedNew = true;
			}
		}

		if (addedNew) {
			explain("  should try to add more known paths, since it was just added a new one.");
		} else {
			explain("  should stop trying to add more known paths, since nothing was found now.");
		}
		return addedNew;
	}

	var steps = 0;
	var output;

	while(steps ++ < 200) {

		explain("Location " + currentArea);

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

				explain(" >> All exits to choose from. Taking the first: " + JSON.stringify(knownUndiscoveredWays.exits));
				choosenWay = knownUndiscoveredWays.exits[0];
				if (choosenWay && choosenWay.dest == "water_world_sunken_river_area") {
					explain(" >> Choosen to go to water_world_sunken_river_area. " + JSON.stringify(choosenWay));
				}
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
				explain("Got to go by " + JSON.stringify(path));
				choosenWay = path[0];
				desiredDestination = choosenWay.dest;
				if (choosenWay && choosenWay.dest == "water_world_sunken_river_area") {
					explain(" >> Choosen to go to water_world_sunken_river_area. " + JSON.stringify(choosenWay) + ", to go path " + JSON.stringify(path));
				}
			} else {

				break;
			}
		}

		explain(" >> Desired destination: " + JSON.stringify(desiredDestination));

		//5-console.log the move
		explain(" moving to " + choosenWay.dest + " by " + choosenWay.id);
		walkPath.push(choosenWay);

		//4-Remove the way you've chosen mapsWithKnownUndiscoveredWays from here in the map where you are. If the map gets empty, remove it from mapsWithKnownUndiscoveredWays
		var knownUndiscoveredWays = getKnownUndiscoveredWaysByName(currentArea);
		if (knownUndiscoveredWays) {
			knownUndiscoveredWays.exits = knownUndiscoveredWays.exits.filter(function isDestination(thisExit) {
				return thisExit.dest != choosenWay.dest && thisExit.id != choosenWay.id;
			});
			explain("   removing " +JSON.stringify(choosenWay) +" -> " + JSON.stringify(knownUndiscoveredWays));
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

		//8-path enablement
		//cant go if
		//- way is an entrance*
		//- the destination reverse way is an exit*

		//after go
		//- the way if exit-bi becomes bi
		//- the new place way back is entrance-bi becomes bi
		if (choosenWay.direction && choosenWay.direction=="exit-bi") {
			explain("exit turned into bidirectional: "+previousArea+" -> "+JSON.stringify(choosenWay));
			choosenWay.direction="bi";
		}
		var wayBack = areasMap[currentArea][choosenWay.wayBackId];
		if (choosenWay.wayBackId && wayBack && wayBack.direction && wayBack.direction=="entrance-bi") {
			explain("entrance turned into bidirectional: "+currentArea+" -> "+JSON.stringify(wayBack));
			wayBack.direction="bi";
		}

		//9-make the way back also known
		if (wayBack && currentArea &&
				getAreaExits(getAreaByName(wayBack.dest))
					.find(exit => exit.dest && exit.dest==currentArea)
				/*&& (!wayBack.direction || wayBack.direction=="bi")
				&& (!choosenWay.direction || choosenWay.direction=="bi")*/) {
			var addingNew = 200;
			while (addingNew-->0 && addKnownPath(currentArea, wayBack)) {};
		}
	}

	explain("  mapsWithKnownUndiscoveredWays " + JSON.stringify(mapsWithKnownUndiscoveredWays));
	explain("  knownPaths " + JSON.stringify(knownPaths));

	var deadEnds = [];

	for (var i in areas) {
		let area = areas[i];
		if (i == 0) {
			area.depth = 0;
		} else {
			var path = knownPaths[areas[0].name+"-"+area.name];
			if (path != null) {
				area.depth = path.length;
			}
			var backPath = knownPaths[area.name+"-"+areas[0].name];
			if (backPath == null) {
				deadEnds.push(area.name);
			}
		}
	}

	var walkedAreas = walkPath.map(way => way.dest);
	var notWalkedAreas = areas.filter(area => area.name!=startArea && !walkedAreas.includes(area.name)).map(area => area.name);
	explain("  notWalkedAreas "+JSON.stringify(notWalkedAreas));
	var isComplete = notWalkedAreas.length == 0 && deadEnds.length == 0;

	if (areas.find(area => area.name.includes("earth_world_poisonous_cavern")).depth < 4) {
		explain("  earth_world_poisonous_cavern too early");
		isComplete = false;
	};
	if (areas.find(area => area.name.includes("water_world_watery_labyrinth_area")).depth < 4) {
		explain("  water_world_watery_labyrinth_area too early");
		isComplete = false;
	};
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

	var output = "{\n\"walk\":" + JSON.stringify(walkPath) +
	  "\n," + "\"map\":" + JSON.stringify(areas) +
//	  "\n," + "\"knownPaths\":" + JSON.stringify(knownPaths) +
	  "\n," + "\"isComplete\":" + isComplete +
	  "\n," + "\"pathDifficulty\":" + steps +
	  "\n," + "\"deadEnds\":" + JSON.stringify(deadEnds) +
      "\n," + "\"notWalkedAreas\":" + JSON.stringify(notWalkedAreas) + 
//      "\n," + "\"explanation\":" + JSON.stringify(walkDecisionDetail) + 
      "\n" +
      "}";

	if (!isComplete) {
		//console.error("ERROR - After " + steps +" steps, couldn't end.");
	}

	return output;

}

module.exports = {
	"walk": walk
};
