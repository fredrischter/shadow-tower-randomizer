// Task #add-version-timestamp: Get version info from git
// Fix for issue #39: Support environments without git (Docker production)
const child_process = require('child_process');

function getVersionInfo() {
  // First, try to read from environment variables (set during Docker build)
  if (process.env.GIT_COMMIT_DATE && process.env.GIT_COMMIT_HASH) {
    return {
      timestamp: process.env.GIT_COMMIT_DATE,
      shortHash: process.env.GIT_COMMIT_HASH
    };
  }

  // Second, try to get from git (works in development or if git is installed)
  try {
    const commitDate = child_process.execSync('git log -1 --format="%ci"', { encoding: 'utf8' }).trim();
    const commitHash = child_process.execSync('git log -1 --format="%h"', { encoding: 'utf8' }).trim();
    return {
      timestamp: commitDate,
      shortHash: commitHash
    };
  } catch (error) {
    console.error('Error getting version info:', error);
    // Fall back to Unknown if neither env vars nor git are available
    return {
      timestamp: 'Unknown',
      shortHash: 'Unknown'
    };
  }
}

module.exports = { getVersionInfo };
