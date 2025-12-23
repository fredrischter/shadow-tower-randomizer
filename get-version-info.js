// Task #add-version-timestamp: Get version info from git
const child_process = require('child_process');

function getVersionInfo() {
  try {
    const commitDate = child_process.execSync('git log -1 --format="%ci"', { encoding: 'utf8' }).trim();
    const commitHash = child_process.execSync('git log -1 --format="%h"', { encoding: 'utf8' }).trim();
    return {
      timestamp: commitDate,
      shortHash: commitHash
    };
  } catch (error) {
    console.error('Error getting version info:', error);
    return {
      timestamp: 'Unknown',
      shortHash: 'Unknown'
    };
  }
}

module.exports = { getVersionInfo };
