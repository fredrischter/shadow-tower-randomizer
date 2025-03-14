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

	var comment = null;
	var startArea = "shadow_tower_part1a";
	var currentArea = startArea;
	var enteredFromId;

	explain("starting from " + currentArea);

	var walkPath = [];
	var knownPaths = {};//["origin"-"destination": [{"dest":"hidden", "id":"2"}]]
	var walkedAreasSet = new Set();

	var mapsWithKnownUndiscoveredWays = []; // {name:"forgotten", exits: [{id:"1", dest:"hidden"},{id:"2", dest:"cursed"}]
	var desiredDestination = null;

	function strongEnoughForArea(areaName) {
		//console.error("getWalkedAreas - " + walkedAreasSet + " " + areaName);
		//process.exit(1);
		if (areaName.includes("earth_world_poisonous_cavern")) {
			return walkedAreasSet.size>3;
		}
		if (areaName.includes("earth_world_stone_cavern")) {
			return walkedAreasSet.size>5;
		}
		if (areaName.includes("water_world")) {
			return walkedAreasSet.size>10;
		}
		if (areaName.includes("illusion_world_worship_domain")) {
			return walkedAreasSet.size>15;
		}
		return true;
	}


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
		//console.error(text);
		walkDecisionDetail.push(text);
	}

	function getAreaExits(area) {
		// Removing exits that are entrance
		var exits = area.exits.filter(exit => !exit.direction || !exit.direction.startsWith("entrance"));
		// Removing exits whose destination there is an exit
		explain(" >> All area " + area.name + " exits not being entrance: " + JSON.stringify(exits));
		exits = exits.filter(exit => {

			//if (!areasMap[exit.dest][exit.wayBackId]) {
			//	console.error(" >> Verifying " + exit.dest + " " + exit.wayBackId + " " + JSON.stringify(areasMap[exit.dest]));
			//}
			var isOk = !exit.wayBackId
			 	|| !areasMap[exit.dest][exit.wayBackId].direction;

			if (isOk) {
				return true;
			}
			
			var isntExit = !areasMap[exit.dest][exit.wayBackId].direction.startsWith("exit");

			if (!isntExit) {
				explain(" >> Removed exit whose destination is a exit. Way back to id at " + areasMap[exit.dest] + " it is a exit: " + JSON.stringify(areasMap[exit.dest][exit.wayBackId]));
				return false;
			}

			if (!strongEnoughForArea(exit.dest)) {
				explain(" >> Removed exit since player isn't strong enough to go now: " + exit.dest);
				return false;
			}

			return true;
		});

		return exits;
	}

	function addToKnownUndiscoveredUndiscoveredWays(exceptId) {
		var area = Object.assign({}, getAreaByName(currentArea));

		// Removing exits that are entrance
		area.exits = area.exits.filter(exit => !exit.direction || !exit.direction.startsWith("entrance"));
		// Removingv exits whose destination there is an exit
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
		//explain("trying to combine from "+from+" to "+to);
		var didSomething = false;
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

		//explain(" beginnings "+JSON.stringify(beginnings));
		//explain(" ends "+JSON.stringify(ends));
		for (var b in beginnings) {
			var middle=beginnings[b];
			for (var i in knownPaths) {
				var dest = i.replace(middle + "-", "");
				if (dest != to) {
					continue;
				}
				//explain("   trying to tie "+from+" - " +middle+ " - "+dest);
				if (i.startsWith(middle + "-")) {
					//explain("     got "+i);
					var key = from + "-" + dest;
					if (!knownPaths[key]) {
						explain("   combining paths for "+key+":");
						explain("    start "+JSON.stringify(knownPaths[from+"-"+middle]));
						explain("    end "+JSON.stringify(knownPaths[middle+"-"+dest]));

						var combined = knownPaths[from+"-"+middle].concat(knownPaths[middle+"-"+dest]);
						explain("    result "+JSON.stringify(combined));
						knownPaths[key] = combined;
						didSomething = true;
					}
				}
			}
		}

		return didSomething;
	}

	function getShorterPathToKnownUndiscoveredWays(from) {
		var found;
		//explain("    Recombining all before trying to get the shorter path to undiscovered ways from " + from + ".");
		//while (recombineAll(from)) {};
		explain("    finding shorter known path to area with undiscovered ways from " + from + ". recombining before doing it.");

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

	function recombineAll(targetArea) {
		var pairsToAdd = [];
		var didSomething = false;
		for (var i1 in knownPaths) {
			var link1 = i1.split("-")[1];
			var a = i1.split("-")[0];
			for (var i2 in knownPaths) {
				var link2 = i2.split("-")[0];
				if (i1 == i2 || link1 != link2) {
					continue;
				}
				var b = i2.split("-")[1];

				if (link1 != targetArea && link2 != targetArea && 
					a != targetArea && b != targetArea) {
					continue;
				}
				var keyToAdd=a+"-"+b;
				if (a != b && !knownPaths[keyToAdd]) {
					pairsToAdd.push({k1: i1, k2: i2, keyToAdd: keyToAdd});
				}
			}
		}
		pairsToAdd.forEach(pair => {
			var p1 = knownPaths[pair.k1];
			var p2 = knownPaths[pair.k2];
			if (!p1 || !p2) {
				explain(" ERROR - didnt get p1 p2 for " + JSON.stringify(pair));
				return;
			}
			didSomething = true;
			knownPaths[pair.keyToAdd] = p1.concat(p2);
			explain(" recombineAll, recombining " + JSON.stringify(pair) + " " + JSON.stringify(knownPaths[pair.keyToAdd]));
		});
		return didSomething;
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
		if (!currentArea.includes("tower")) {
			walkedAreasSet.add(currentArea);
		}
		//console.error(new Date().toISOString() + "   Step " + steps + " - Location " + currentArea);

		if (currentArea == "earth_world_poisonous_cavern" && steps < 5) {
			explain("  earth_world_poisonous_cavern too early");
			comment="earth_world_poisonous_cavern too early";
			break;
		};
		if (currentArea == "water_world_watery_labyrinth_area" && steps < 5) {
			explain("  water_world_watery_labyrinth_area too early");
			comment="water_world_watery_labyrinth_area too early";
			break;
		};
		if (currentArea == "water_world_sunken_river_area" && steps < 5) {
			explain("  water_world_sunken_river_area too early");
			comment="water_world_sunken_river_area too early";
			break;
		};


		//console.error(new Date().toISOString() + "    1");
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

		//console.error(new Date().toISOString() + "    2");
		//2-if (!desiredDestination) and there is some way in mapsWithKnownUndiscoveredWays for this map, choosenWay=first unknown door In the list, prefer bidirectional or go exitOnly. If there is no way chooseDestination=true;
		if (!desiredDestination) {
			var currentAreaExits = getAreaExits(getAreaByName(currentArea));

			if (currentAreaExits.length == 1) {

				explain(" >> To pick only exit from this area: " + JSON.stringify(currentAreaExits[0]));
				choosenWay = currentAreaExits[0];

			} else {

				var knownUndiscoveredWays = getKnownUndiscoveredWaysByName(currentArea);
				if (knownUndiscoveredWays) {
	
					explain(" >> All exits to choose from. Trying to the first possible: " + JSON.stringify(knownUndiscoveredWays.exits));
					//knownUndiscoveredWays.exits = knownUndiscoveredWays.exits.filter(exit => currentAreaExits.find(available => available.dest = exit.dest));
					explain(" >>                     All exits to choose from, filtered: " + JSON.stringify(knownUndiscoveredWays.exits));
					choosenWay = knownUndiscoveredWays.exits[0];
					if (choosenWay && choosenWay.dest == "water_world_sunken_river_area") {
						explain(" >> Choosen to go to water_world_sunken_river_area. " + JSON.stringify(choosenWay));
					}
				}

			}


			if (!choosenWay) {
				chooseDestination=true;
			}
		//prefer bidirectional or go exitOnly;
		}

		//console.error(new Date().toISOString() + "    3");
		//3-if (chooseDestination) choosenWay=entry from mapsWithKnownUndiscoveredWays with smaller item knownPaths from your point. If there is no entry to choose. The walk is finished.
		if (chooseDestination && currentArea) {
			var path = getShorterPathToKnownUndiscoveredWays(currentArea);
			if (!path) {
				//console.error(new Date().toISOString() + "    3 - recombineAll start");
	
				var recombiningCount = 40;
				while (recombiningCount-->0 && recombineAll(currentArea)) {};

				//console.error(new Date().toISOString() + "    3 - recombineAll end");
			}
			path = getShorterPathToKnownUndiscoveredWays(currentArea);
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

		//console.error(new Date().toISOString() + "    5");
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

		//console.error(new Date().toISOString() + "    6");
		//6-Move to next map
		var previousArea = currentArea;
		currentArea = choosenWay.dest;
		enteredFromId = choosenWay.id;

		//console.error(new Date().toISOString() + "    7");
		//7-addKnownPath
		var addingNew = 3;
		while (addingNew-->0 && addKnownPath(previousArea, choosenWay)) {};

		if (addingNew == 0) {
			console.error("ERROR - was in loop searching for new know paths seems to be always adding new indefinitely - the script believes it should keep trying to find more.");
		}

		//console.error(new Date().toISOString() + "    8");
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

		//console.error(new Date().toISOString() + "    9");
		//9-make the way back also known
		if (wayBack && currentArea &&
				getAreaExits(getAreaByName(wayBack.dest))
					.find(exit => exit.dest && exit.dest==currentArea)
				&& (!wayBack.direction || !wayBack.direction.startsWith("entrance"))
				&& (!choosenWay.direction || !choosenWay.direction.startsWith("exit"))) {
			explain(" adding wayback to known paths from " + currentArea + " returing by " + JSON.stringify(wayBack));
			var addingNew = 3;
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

	if (comment) {
		isComplete = false;
	}

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
      
      "\n," + "\"explanation\":" + JSON.stringify(walkDecisionDetail) + 
      
      "\n," + "\"comment\":" + JSON.stringify(comment) + 
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
