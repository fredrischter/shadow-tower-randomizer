# Fix for Issue #39: /version Endpoint Git Dependency

## Problem
The `/version` endpoint was failing in production with the error:
```
/bin/sh: 1: git: not found
Error getting version info: Error: Command failed: git log -1 --format="%ci"
```

This occurred because:
1. The `get-version-info.js` module executed `git log` commands at runtime
2. The Docker container did not include git (intentionally, to reduce image size)
3. When the `/version` endpoint was hit, it tried to run git and failed

## Solution

### 1. Modified `get-version-info.js`
The module now follows a priority chain:

1. **First**: Check for environment variables (`GIT_COMMIT_DATE`, `GIT_COMMIT_HASH`)
   - These are set during Docker build
   - Allows version info without git at runtime

2. **Second**: Try to execute git commands
   - Works in development environments
   - Gracefully handles git not being available

3. **Third**: Return "Unknown" as fallback
   - Prevents crashes when neither env vars nor git available

### 2. Updated Dockerfile
The build process now:

1. **Installs git temporarily** during the build stage
2. **Copies .git directory** to container
3. **Captures version info** by running git commands during build:
   ```bash
   GIT_COMMIT_DATE=$(git log -1 --format="%ci")
   GIT_COMMIT_HASH=$(git log -1 --format="%h")
   ```
4. **Writes version.sh** with captured environment variables
5. **Removes git and .git** to keep image size small
6. **Sources version.sh** at startup to set environment variables

### 3. Added Tests
Created `test_version_endpoint.js` with comprehensive tests:
- Environment variable priority
- Git fallback behavior
- Graceful error handling
- Correct return value structure

Run with: `npm run test-version`

## Verification

### Local Testing
```bash
# Run the test suite
npm run test-version

# Test with environment variables
GIT_COMMIT_DATE="2025-12-23" GIT_COMMIT_HASH="abc123" node -e "console.log(require('./get-version-info').getVersionInfo())"

# Test without git (should fallback gracefully)
# Output should be { timestamp: 'Unknown', shortHash: 'Unknown' } or valid git values
```

### Production Deployment
After deploying the new Docker image:

1. **Test the endpoint**:
   ```bash
   curl https://shadow-tower-randomizer-1023048112324.us-central1.run.app/version
   ```

2. **Expected Response**:
   ```json
   {
     "timestamp": "2025-12-23 18:41:12 +0000",
     "shortHash": "7a097b7"
   }
   ```

3. **Verify no errors** in Cloud Run logs

## Benefits

1. **No runtime git dependency** - Works in production without git installed
2. **Consistent version info** - Captured at build time, reflects actual deployed code
3. **Development friendly** - Still works in dev environments with git
4. **Graceful degradation** - Returns "Unknown" rather than crashing
5. **Smaller image size** - Git removed after version capture

## Files Changed

- `get-version-info.js` - Environment variable priority and fallback logic
- `Dockerfile` - Git installation, version capture, and cleanup
- `test_version_endpoint.js` - Comprehensive test suite
- `package.json` - Added test-version script

## How It Works in Production

```
Docker Build Time:
1. Install git → 2. Copy .git → 3. Run git log → 4. Save to version.sh → 5. Remove git

Docker Runtime:
1. Source version.sh → 2. Export env vars → 3. Start node server → 4. /version reads env vars
```

This ensures version information is captured when the image is built and available at runtime without needing git.
