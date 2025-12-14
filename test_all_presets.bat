@echo off
REM Task: Cache system - Windows batch script for testing presets
REM Uses no-change preset as cache base since it's the fastest to extract

setlocal enabledelayedexpansion

set ISO_FILE=.\generated\st.bin
set BASE_PRESET=params\no-change.json
set CACHE_DIR=generated\no-change\extracted

echo ==============================================
echo Shadow Tower Randomizer - Batch Test Script
echo ==============================================
echo.

REM Check if ISO exists
if not exist "%ISO_FILE%" (
    echo ERROR: ISO file not found at %ISO_FILE%
    echo Please place st.bin in the generated\ folder
    exit /b 1
)

REM Step 1: Create cache if it doesn't exist
if not exist "%CACHE_DIR%" (
    echo Step 1: Creating cache (this will take ~75 seconds^)...
    call npm run mod "%ISO_FILE%" "%BASE_PRESET%"
    echo Cache created at %CACHE_DIR%
) else (
    echo Step 1: Using existing cache at %CACHE_DIR%
)

echo.
echo Step 2: Testing all presets using cache...
echo.

REM Counter for results
set PASSED=0
set FAILED=0
set TOTAL=0

REM Task: Cache system - Skip presets with numbers in name to speed up batch testing
REM Test each preset in params\ folder (skip numbered variants)
for %%f in (params\*.json) do (
    set preset_name=%%~nf
    
    REM Skip presets with numbers in the name (variants like randomized-medium2, etc.)
    echo !preset_name! | findstr /r "[0-9]" >nul
    if not errorlevel 1 (
        echo Skipping numbered variant: !preset_name!
    ) else (
        set /a TOTAL+=1
        echo ----------------------------------------
        echo Testing preset: !preset_name!
        echo ----------------------------------------
        
        REM Run test - use node directly instead of npm run to avoid flag issues
        node --max-old-space-size=8192 test_randomizer.js "%%f" --use-cache "%CACHE_DIR%"
        
        if !errorlevel! equ 0 (
            set /a PASSED+=1
            echo ✓ !preset_name! passed
        ) else (
            set /a FAILED+=1
            echo ✗ !preset_name! failed
        )
        
        echo.
    )
)

REM Print summary
echo ==============================================
echo Test Summary
echo ==============================================
echo Total presets tested: !TOTAL!
echo Passed: !PASSED!
echo Failed: !FAILED!
echo.

if !FAILED! equ 0 (
    echo ✓ All tests passed!
    exit /b 0
) else (
    echo ✗ Some tests failed
    exit /b 1
)
