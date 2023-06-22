
const originalMap = [
	{name:"solitary", exits: [
		{id:"1", dest:"hidden"},
		{id:"2", dest:"hidden"}
	]},
	{name:"hidden", exits: [
		{id:"1", dest:"solitary"},
		{id:"2", dest:"solitary"},
		{id:"3", dest:"forgotten"},
		{id:"4", dest:"cursed"}
	]},
	{name:"forgotten", exits: [
		{id:"3", dest:"hidden"},
		{id:"5", dest:"cursed"}
	]},
	{name:"cursed", exits: [
		{id:"4", dest:"hidden"},
		{id:"5", dest:"forgotten"}
	]},
];

Map areas include world and type(bi, exit or entrance)
Input difficulty, consistentDoors, swapOnlyDirections (highest respect for gamedesign, only swap bidirectional doors in same area so it has no walk difference)

var swapRounds = 0;
var lastValidMap = originalMap;

function switchSomePart(map) {
	consider consistentDoors, swapOnlyDirections (highest respect for gamedesign, only swap bidirectional doors in same area so it has no walk difference)
	return modifiedMap;
}

function goodForDificulty(map, difficulty) {
	return truefalse;
}

function chooseBetterForDifficulty(map1, map2, difficulty) {
	if score is same, take map1;
	return map1 OR map2;
}

const LIMIT_ATTEMPTS = 10;
const LIMIT_SWAP_ROUNDS = 200;

do {
	var attempts = 0;
	do {
		var generated=switchSomePart(lastValidMap);

		var walkResult=;
		output {
			"map": areas,
			"walk": walkPath,
			"knowPaths": knownPaths,
			"complete": true
		}

	} while(!walkResult.complete && ++attempts<LIMIT_ATTEMPTS);

	if (walkResult.complete) {
		if (swapRounds<50) {
			// First 50 swaps are free, always taking new map if it is just valid;
			lastValidMap = generated;
		} else {
			// Next rounds get new map only if it is better for difficulty, to narrow it towards better map
			lastValidMap = chooseBetterForDifficulty(generated, lastValidMap, difficulty);
		}

		// After 100 rounds, try to get as soon as get one suitable for the difficulty
		if (swapRounds>100 && goodForDificulty(generated)) {
			result = generated;
		}
	}

	var gaveUp=!result && (++swapRounds>=LIMIT_SWAP_ROUNDS || attempts>=LIMIT_ATTEMPTS);

} while(gaveUp || result);

//Generates incrementally shuffled maps while resolvable till it gets expected difficulty and having more than 50 switches, try 10 times each step or done more than 200 switches (returns gaveUp:true).

Output:
{
	Output from walker,
	areasSortedByDepth:
	gaveUp:
}
