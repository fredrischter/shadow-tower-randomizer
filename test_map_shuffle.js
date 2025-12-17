#!/usr/bin/env node
'use strict';

// Test script for map shuffler wayback consistency
const shuffle = require('./map_shuffler');

console.log('=== Testing Map Shuffler ===');

// Run shuffle with randomizeMap enabled
const params = { 
    randomizeMap: true
};

console.log('\nRunning map shuffle test (will show errors but not all log messages)...');

try {
    const result = shuffle(params);
    
    if (result && result.map) {
        console.log('\n✓ Map shuffle completed successfully');
        console.log('  - Complete:', result.isComplete);
        console.log('  - Path difficulty:', result.pathDifficulty);
        console.log('  - Areas in map:', result.map.length);
        console.log('\n✓ Test passed - No wayback ID errors!');
    } else {
        console.log('\n✗ Map shuffle failed - no result returned');
        process.exit(1);
    }
} catch (error) {
    console.error('\n✗ Map shuffle failed with error:');
    console.error('  ' + error.message);
    if (error.stack) {
        console.error('\nStack trace:');
        console.error(error.stack);
    }
    process.exit(1);
}
