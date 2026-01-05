#!/usr/bin/env node
'use strict';

// Task: Performance optimization - Benchmark script to measure processing time
// This script helps measure the performance improvement from parallelization

const fs = require('fs');
const path = require('path');
const child_process = require('child_process');

console.log('=== Shadow Tower Randomizer Performance Benchmark ===\n');

// Check if st.bin exists
const stBinPath = path.join('generated', 'st.bin');
if (!fs.existsSync(stBinPath)) {
    console.error('ERROR: st.bin not found at', stBinPath);
    console.error('Please place your Shadow Tower ISO file at this location.');
    process.exit(1);
}

// Use a lightweight preset for benchmarking
const paramsFile = path.join('params', 'no-change.json');
if (!fs.existsSync(paramsFile)) {
    console.error('ERROR: no-change.json params file not found');
    process.exit(1);
}

console.log('Benchmark configuration:');
console.log('  ISO file:', stBinPath);
console.log('  Params:', paramsFile);
console.log('  Node.js version:', process.version);
console.log('  CPU cores:', require('os').cpus().length);
console.log('\nThis benchmark will run the randomizer and measure timing for each step.');
console.log('The timing summary will be displayed at the end.\n');
console.log('Starting benchmark...\n');

const startTime = Date.now();

const cmd = `npm run mod "${stBinPath}" "${paramsFile}"`;
console.log('Running:', cmd, '\n');

const child = child_process.spawn('npm', ['run', 'mod', stBinPath, paramsFile], {
    stdio: 'inherit',
    shell: true
});

child.on('exit', function(code) {
    const endTime = Date.now();
    const totalTime = endTime - startTime;
    
    console.log('\n=== Benchmark Complete ===');
    console.log(`Total wall-clock time: ${totalTime}ms (${(totalTime/1000).toFixed(2)}s)`);
    
    if (code === 0) {
        console.log('✓ Benchmark completed successfully');
        console.log('\nCheck the output above for the PERFORMANCE TIMING SUMMARY');
        console.log('which shows the breakdown of time spent in each step.');
    } else {
        console.log('✗ Benchmark failed with exit code:', code);
        process.exit(code);
    }
});

child.on('error', function(error) {
    console.error('Error running benchmark:', error);
    process.exit(1);
});
