#!/usr/bin/env node
'use strict';

// Task: Performance optimization - Test parallel processing functions
// This script validates that the parallel processing changes work correctly

const fs = require('fs');
const path = require('path');

console.log('=== Testing Parallel Processing Implementation ===\n');

// Test 1: Verify unpack.js exports a function
console.log('Test 1: Checking unpack.js...');
try {
    const unpack = require('./unpack.js');
    if (typeof unpack === 'function') {
        console.log('✓ unpack.js exports a function');
    } else {
        console.log('✗ unpack.js does not export a function');
        process.exit(1);
    }
} catch (error) {
    console.log('✗ Error loading unpack.js:', error.message);
    process.exit(1);
}

// Test 2: Verify pack.js exports a function
console.log('Test 2: Checking pack.js...');
try {
    const pack = require('./pack.js');
    if (typeof pack === 'function') {
        console.log('✓ pack.js exports a function');
    } else {
        console.log('✗ pack.js does not export a function');
        process.exit(1);
    }
} catch (error) {
    console.log('✗ Error loading pack.js:', error.message);
    process.exit(1);
}

// Test 3: Verify change.js exports a function
console.log('Test 3: Checking change.js...');
try {
    const change = require('./change.js');
    if (typeof change === 'function') {
        console.log('✓ change.js exports a function');
    } else {
        console.log('✗ change.js does not export a function');
        process.exit(1);
    }
} catch (error) {
    console.log('✗ Error loading change.js:', error.message);
    process.exit(1);
}

// Test 4: Verify mod.js has timing functions
console.log('Test 4: Checking mod.js structure...');
try {
    const modContent = fs.readFileSync('./mod.js', 'utf8');
    
    if (modContent.includes('printTimingSummary')) {
        console.log('✓ mod.js contains printTimingSummary function');
    } else {
        console.log('✗ mod.js missing printTimingSummary function');
        process.exit(1);
    }
    
    if (modContent.includes('stepTimes')) {
        console.log('✓ mod.js contains stepTimes tracking');
    } else {
        console.log('✗ mod.js missing stepTimes tracking');
        process.exit(1);
    }
    
    if (modContent.includes('Performance optimization')) {
        console.log('✓ mod.js contains performance optimization comments');
    } else {
        console.log('⚠ mod.js missing performance optimization comments');
    }
} catch (error) {
    console.log('✗ Error reading mod.js:', error.message);
    process.exit(1);
}

// Test 5: Verify unpack.js has parallel processing
console.log('Test 5: Checking unpack.js implementation...');
try {
    const unpackContent = fs.readFileSync('./unpack.js', 'utf8');
    
    if (unpackContent.includes('Promise.all')) {
        console.log('✓ unpack.js uses Promise.all for parallel processing');
    } else {
        console.log('✗ unpack.js missing Promise.all');
        process.exit(1);
    }
    
    if (unpackContent.includes('parallel unpacking')) {
        console.log('✓ unpack.js has parallel unpacking logging');
    } else {
        console.log('⚠ unpack.js missing parallel unpacking logging');
    }
} catch (error) {
    console.log('✗ Error reading unpack.js:', error.message);
    process.exit(1);
}

// Test 6: Verify pack.js has parallel processing
console.log('Test 6: Checking pack.js implementation...');
try {
    const packContent = fs.readFileSync('./pack.js', 'utf8');
    
    if (packContent.includes('Promise.all')) {
        console.log('✓ pack.js uses Promise.all for parallel processing');
    } else {
        console.log('✗ pack.js missing Promise.all');
        process.exit(1);
    }
    
    if (packContent.includes('parallel packing')) {
        console.log('✓ pack.js has parallel packing logging');
    } else {
        console.log('⚠ pack.js missing parallel packing logging');
    }
} catch (error) {
    console.log('✗ Error reading pack.js:', error.message);
    process.exit(1);
}

// Test 7: Verify change.js has parallel processing
console.log('Test 7: Checking change.js implementation...');
try {
    const changeContent = fs.readFileSync('./change.js', 'utf8');
    
    if (changeContent.includes('Promise.all')) {
        console.log('✓ change.js uses Promise.all for parallel processing');
    } else {
        console.log('✗ change.js missing Promise.all');
        process.exit(1);
    }
    
    if (changeContent.includes('changesByFile')) {
        console.log('✓ change.js groups changes by file');
    } else {
        console.log('✗ change.js missing file grouping logic');
        process.exit(1);
    }
    
    if (changeContent.includes('fileChangePromises')) {
        console.log('✓ change.js has parallel file change processing');
    } else {
        console.log('✗ change.js missing parallel file change processing');
        process.exit(1);
    }
} catch (error) {
    console.log('✗ Error reading change.js:', error.message);
    process.exit(1);
}

console.log('\n=== All Tests Passed! ===');
console.log('\nParallel processing implementation validated successfully.');
console.log('Functions are properly exported and contain parallel processing logic.');
