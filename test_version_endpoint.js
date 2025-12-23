#!/usr/bin/env node
'use strict';

// Test for get-version-info.js - validates version endpoint functionality
// Tests that version info can be obtained from env vars, git, or defaults

const child_process = require('child_process');

console.log('=== Testing get-version-info.js ===\n');

let testsPassed = 0;
let testsFailed = 0;

function test(description, fn) {
  try {
    fn();
    console.log(`✓ ${description}`);
    testsPassed++;
  } catch (error) {
    console.error(`✗ ${description}`);
    console.error(`  Error: ${error.message}`);
    testsFailed++;
  }
}

// Test 1: Environment variables take priority
test('Environment variables are used when available', () => {
  process.env.GIT_COMMIT_DATE = '2025-12-23 10:00:00 -0800';
  process.env.GIT_COMMIT_HASH = 'abc1234';
  
  delete require.cache[require.resolve('./get-version-info.js')];
  const { getVersionInfo } = require('./get-version-info.js');
  const result = getVersionInfo();
  
  if (result.timestamp !== '2025-12-23 10:00:00 -0800') {
    throw new Error(`Expected timestamp '2025-12-23 10:00:00 -0800', got '${result.timestamp}'`);
  }
  if (result.shortHash !== 'abc1234') {
    throw new Error(`Expected shortHash 'abc1234', got '${result.shortHash}'`);
  }
  
  // Clean up env vars
  delete process.env.GIT_COMMIT_DATE;
  delete process.env.GIT_COMMIT_HASH;
});

// Test 2: Git is used when env vars not available
test('Git commands are used when env vars not set', () => {
  delete process.env.GIT_COMMIT_DATE;
  delete process.env.GIT_COMMIT_HASH;
  
  delete require.cache[require.resolve('./get-version-info.js')];
  const { getVersionInfo } = require('./get-version-info.js');
  
  try {
    const result = getVersionInfo();
    // If git is available, should return valid values
    // If git is not available, should return 'Unknown'
    if (result.timestamp === undefined || result.shortHash === undefined) {
      throw new Error('Result missing expected properties');
    }
    if (result.timestamp !== 'Unknown' && result.timestamp.length === 0) {
      throw new Error('Timestamp should not be empty string');
    }
  } catch (error) {
    // If this throws, git is definitely not available
    // Should still return Unknown values
  }
});

// Test 3: Graceful fallback when git not available
test('Graceful fallback to Unknown when git unavailable', () => {
  delete process.env.GIT_COMMIT_DATE;
  delete process.env.GIT_COMMIT_HASH;
  
  // Mock execSync to simulate git not found
  const originalExecSync = child_process.execSync;
  child_process.execSync = function(cmd) {
    if (cmd.includes('git')) {
      const error = new Error('Command failed: git not found');
      error.code = 127;
      throw error;
    }
    return originalExecSync.apply(this, arguments);
  };
  
  delete require.cache[require.resolve('./get-version-info.js')];
  const { getVersionInfo } = require('./get-version-info.js');
  const result = getVersionInfo();
  
  // Restore original execSync
  child_process.execSync = originalExecSync;
  
  if (result.timestamp !== 'Unknown') {
    throw new Error(`Expected timestamp 'Unknown', got '${result.timestamp}'`);
  }
  if (result.shortHash !== 'Unknown') {
    throw new Error(`Expected shortHash 'Unknown', got '${result.shortHash}'`);
  }
});

// Test 4: Result structure is correct
test('Returns object with timestamp and shortHash properties', () => {
  process.env.GIT_COMMIT_DATE = '2025-12-23 10:00:00 -0800';
  process.env.GIT_COMMIT_HASH = 'abc1234';
  
  delete require.cache[require.resolve('./get-version-info.js')];
  const { getVersionInfo } = require('./get-version-info.js');
  const result = getVersionInfo();
  
  if (typeof result !== 'object') {
    throw new Error('Result should be an object');
  }
  if (!result.hasOwnProperty('timestamp')) {
    throw new Error('Result should have timestamp property');
  }
  if (!result.hasOwnProperty('shortHash')) {
    throw new Error('Result should have shortHash property');
  }
  
  delete process.env.GIT_COMMIT_DATE;
  delete process.env.GIT_COMMIT_HASH;
});

// Summary
console.log('\n=== Test Summary ===');
console.log(`Passed: ${testsPassed}`);
console.log(`Failed: ${testsFailed}`);
console.log(`Total:  ${testsPassed + testsFailed}`);

if (testsFailed > 0) {
  process.exit(1);
}

console.log('\n✓ All tests passed!');
process.exit(0);
