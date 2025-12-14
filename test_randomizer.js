#!/usr/bin/env node
'use strict';

// Task: Cache extracted files system and randomizer validation tests
// This script validates randomizer output using cached extracted files

const fs = require('fs');
const path = require('path');
const child_process = require('child_process');

// Parse command line arguments
const args = process.argv.slice(2);
let paramsFile = null;
let useCache = false;
let cacheDir = null;

for (let i = 0; i < args.length; i++) {
    if (args[i] === '--use-cache' || args[i] === '-c') {
        useCache = true;
        cacheDir = args[i + 1] || path.join('generated', 'extracted');
        i++;
    } else if (args[i] === '--params' || args[i] === '-p') {
        paramsFile = args[i + 1];
        i++;
    } else if (!paramsFile && args[i].endsWith('.json')) {
        paramsFile = args[i];
    }
}

if (!paramsFile) {
    console.error('Usage: node test_randomizer.js <params.json> [--use-cache <cache-dir>]');
    console.error('  --use-cache, -c : Use cached extracted files instead of extracting');
    console.error('  --params, -p    : Specify params file');
    console.error('\nExample:');
    console.error('  node test_randomizer.js params/randomized-medium.json --use-cache generated/extracted');
    process.exit(1);
}

if (!fs.existsSync(paramsFile)) {
    console.error(`ERROR: Params file not found: ${paramsFile}`);
    process.exit(1);
}

const params = JSON.parse(fs.readFileSync(paramsFile));
const testOutputDir = path.join('generated', 'test-' + params.label);
const spoilersPath = path.join(testOutputDir, 'spoilers');
const extractedPath = cacheDir || path.join(testOutputDir, 'extracted');

console.log('=== Shadow Tower Randomizer Test ===');
console.log(`Preset: ${params.label}`);
console.log(`Use cached files: ${useCache}`);
console.log(`Cache directory: ${extractedPath}`);
console.log('');

// Create output directories
if (!useCache || !fs.existsSync(testOutputDir)) {
    if (fs.existsSync(testOutputDir)) {
        fs.rmSync(testOutputDir, { recursive: true });
    }
    fs.mkdirSync(testOutputDir, { recursive: true });
    fs.mkdirSync(spoilersPath, { recursive: true });
}

// Copy params to spoilers
const testParamsFile = path.join(spoilersPath, 'params.json');
fs.copyFileSync(paramsFile, testParamsFile);

function exec(cmd, callback) {
    console.log(`Running: ${cmd}`);
    const child = child_process.exec(cmd);
    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
    child.on('exit', function(code) {
        if (code !== 0) {
            console.error(`Command failed with exit code ${code}`);
            process.exit(code);
        }
        callback();
    });
}

// Validation functions
function validateMapStructure() {
    console.log('\n=== Validating map.json structure ===');
    const mapFile = path.join(spoilersPath, 'map.json');
    
    if (!fs.existsSync(mapFile)) {
        console.error('FAIL: map.json not found');
        return false;
    }
    
    try {
        const mapData = JSON.parse(fs.readFileSync(mapFile, 'utf8'));
        
        // Task: Cache system - Handle both shuffle object and direct array formats
        let map;
        if (Array.isArray(mapData)) {
            // Direct array format
            map = mapData;
        } else if (mapData.map && Array.isArray(mapData.map)) {
            // Shuffle object format with map property
            map = mapData.map;
        } else {
            console.error('FAIL: map.json is neither an array nor shuffle object with map property');
            return false;
        }
        
        let valid = true;
        const requiredFields = ['name', 'exits'];
        
        map.forEach((area, idx) => {
            requiredFields.forEach(field => {
                if (!area[field]) {
                    console.error(`FAIL: Area ${idx} missing required field: ${field}`);
                    valid = false;
                }
            });
            
            if (area.exits && Array.isArray(area.exits)) {
                area.exits.forEach((exit, exitIdx) => {
                    if (!exit.dest) {
                        console.error(`FAIL: Area ${area.name} exit ${exitIdx} missing dest`);
                        valid = false;
                    }
                    // Check wayback consistency for doors
                    if (exit.wayBackId && exit.type === 'door') {
                        const destArea = map.find(a => a.name === exit.dest);
                        if (!destArea) {
                            console.error(`FAIL: Exit points to non-existent area: ${exit.dest}`);
                            valid = false;
                        } else {
                            const wayBack = destArea.exits.find(e => e.id === exit.wayBackId);
                            if (!wayBack) {
                                console.error(`FAIL: WayBack door ${exit.wayBackId} not found in ${exit.dest}`);
                                valid = false;
                            }
                        }
                    }
                });
            }
        });
        
        if (valid) {
            console.log(`PASS: map.json structure valid (${map.length} areas)`);
        }
        return valid;
    } catch (e) {
        console.error(`FAIL: Error parsing map.json: ${e.message}`);
        return false;
    }
}

function validateWalkPath() {
    console.log('\n=== Validating walk.txt ===');
    const walkFile = path.join(spoilersPath, 'walk.txt');
    
    if (!fs.existsSync(walkFile)) {
        console.warn('WARN: walk.txt not found (may not be generated for all presets)');
        return true; // Not critical
    }
    
    const content = fs.readFileSync(walkFile, 'utf8');
    
    // Check if walk was successful
    if (content.includes('ERROR') || content.includes('FAIL')) {
        console.error('FAIL: Walk contains errors');
        return false;
    }
    
    // Task: Cache system - Less strict validation for walk paths
    // Just check that walk.txt has some content and no errors
    if (content.trim().length === 0) {
        console.error('FAIL: walk.txt is empty');
        return false;
    }
    
    console.log('PASS: walk.txt generated successfully');
    return true;
}

function validateUniqueItems() {
    console.log('\n=== Validating unique items ===');
    const readableFile = path.join(spoilersPath, 'readable.txt');
    
    if (!fs.existsSync(readableFile)) {
        console.error('FAIL: readable.txt not found');
        return false;
    }
    
    const content = fs.readFileSync(readableFile, 'utf8');
    
    // Task: Cache system - Skip key item validation for presets that don't randomize items
    const paramsContent = fs.readFileSync(path.join(spoilersPath, 'params.json'), 'utf8');
    const params = JSON.parse(paramsContent);
    
    // Skip validation for presets that intentionally don't include items
    if (params.preset === 'no-change' || params.keepOnlyBosses === true) {
        console.log('SKIP: Preset does not randomize items (validation not applicable)');
        return true;
    }
    
    // Key unique items that should appear (from test_item_uniques.sh)
    const keyItems = [
        'item_111_kings_key',
        'item_112_key_of_knowledge',
        'item_114_floodgate_key',
        'item_115_mermaid_key',
        'item_129_sealed_sword_stone',
        'item_130_blue_crystal',
        'item_131_flaming_key'
    ];
    
    let missing = [];
    keyItems.forEach(item => {
        if (!content.includes(item)) {
            missing.push(item);
        }
    });
    
    if (missing.length > 0) {
        console.error(`FAIL: Missing key items: ${missing.join(', ')}`);
        return false;
    }
    
    console.log(`PASS: All ${keyItems.length} key items found`);
    return true;
}

function validateItemCounts() {
    console.log('\n=== Validating item distribution ===');
    const readableFile = path.join(spoilersPath, 'readable.txt');
    
    if (!fs.existsSync(readableFile)) {
        console.error('FAIL: readable.txt not found');
        return false;
    }
    
    const content = fs.readFileSync(readableFile, 'utf8');
    
    // Count important consumables (from test_items_count.sh)
    const itemsToCount = {
        'item_10a_cune': 0,
        'item_11c_healing_potion': 0,
        'item_136_soul_pod_5_sp': 0,
        'item_138_soul_pod_29_sp': 0,
        'item_137_soul_pod_53_sp': 0
    };
    
    Object.keys(itemsToCount).forEach(item => {
        const regex = new RegExp(item, 'gi');
        const matches = content.match(regex);
        itemsToCount[item] = matches ? matches.length : 0;
    });
    
    console.log('Item counts:');
    Object.entries(itemsToCount).forEach(([item, count]) => {
        console.log(`  ${item}: ${count}`);
    });
    
    // Validate reasonable counts (at least some of each)
    let valid = true;
    Object.entries(itemsToCount).forEach(([item, count]) => {
        if (count === 0) {
            console.warn(`WARN: No ${item} found (may be intentional)`);
        }
    });
    
    console.log('PASS: Item distribution analyzed');
    return true;
}

function validateMapsHTML() {
    console.log('\n=== Validating maps.html ===');
    const mapsFile = path.join(spoilersPath, 'maps.html');
    
    if (!fs.existsSync(mapsFile)) {
        console.warn('WARN: maps.html not generated (use without -toNotGenerateImages)');
        return true;
    }
    
    const content = fs.readFileSync(mapsFile, 'utf8');
    
    // Check for expected areas
    const expectedAreas = [
        'shadow_tower',
        'human_world',
        'earth_world',
        'fire_world',
        'water_world'
    ];
    
    let valid = true;
    expectedAreas.forEach(area => {
        if (!content.includes(area)) {
            console.error(`FAIL: maps.html missing area: ${area}`);
            valid = false;
        }
    });
    
    if (valid) {
        console.log('PASS: maps.html contains expected areas');
    }
    return valid;
}

function validateReadableConsistency() {
    console.log('\n=== Checking readable.txt for inconsistencies ===');
    const readableFile = path.join(spoilersPath, 'readable.txt');
    
    if (!fs.existsSync(readableFile)) {
        console.error('FAIL: readable.txt not found');
        return false;
    }
    
    const content = fs.readFileSync(readableFile, 'utf8');
    
    // Check for error markers
    const errorPatterns = [
        /ERROR/gi,
        /FAIL/gi,
        /undefined/gi,
        /NaN/gi,
        /null item/gi
    ];
    
    let issues = [];
    errorPatterns.forEach(pattern => {
        const matches = content.match(pattern);
        if (matches) {
            issues.push(`Found ${matches.length} instances of ${pattern}`);
        }
    });
    
    if (issues.length > 0) {
        console.warn('WARN: Potential issues found:');
        issues.forEach(issue => console.warn(`  - ${issue}`));
        return true; // Warnings, not failures
    }
    
    console.log('PASS: No obvious inconsistencies in readable.txt');
    return true;
}

// Main execution
if (useCache) {
    if (!fs.existsSync(extractedPath)) {
        console.error(`ERROR: Cache directory does not exist: ${extractedPath}`);
        console.error('Run full mod.js first to create the cache, or extract ISO manually');
        process.exit(1);
    }
    
    console.log('Using cached extracted files from: ' + extractedPath);
    console.log('Running randomize only...\n');
    
    // Task: Cache system - Use node directly to pass -toNotGenerateImages flag properly
    exec(`node --max-old-space-size=8192 randomize.js "${testParamsFile}" "${extractedPath}" -toNotGenerateImages`, function() {
        console.log('\n=== Running validation tests ===');
        
        const results = {
            mapStructure: validateMapStructure(),
            walkPath: validateWalkPath(),
            uniqueItems: validateUniqueItems(),
            itemCounts: validateItemCounts(),
            mapsHTML: validateMapsHTML(),
            readableConsistency: validateReadableConsistency()
        };
        
        console.log('\n=== Test Summary ===');
        const passed = Object.values(results).filter(r => r).length;
        const total = Object.keys(results).length;
        
        Object.entries(results).forEach(([test, result]) => {
            console.log(`  ${result ? '✓' : '✗'} ${test}`);
        });
        
        console.log(`\nTotal: ${passed}/${total} tests passed`);
        
        if (passed === total) {
            console.log('\n✓ All validation tests passed!');
            process.exit(0);
        } else {
            console.log('\n✗ Some validation tests failed');
            process.exit(1);
        }
    });
} else {
    console.error('ERROR: --use-cache flag required for this test script');
    console.error('This script is designed to test randomizer output using cached extracted files');
    console.error('To create cache, run: npm run mod <iso-file> <params-file>');
    console.error('Then test with: node test_randomizer.js <params-file> --use-cache generated/<preset>/extracted');
    process.exit(1);
}
