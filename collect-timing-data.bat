@echo off
REM Script to collect detailed timing data from randomizer runs (Windows version)
REM Usage: collect-timing-data.bat [preset-name]
REM If no preset specified, uses no-change

setlocal enabledelayedexpansion

set PRESET=%1
if "%PRESET%"=="" set PRESET=no-change

set ISO_PATH=.\generated\st.bin
set PARAMS_FILE=.\params\%PRESET%.json
set TIMESTAMP=%date:~-4,4%%date:~-10,2%%date:~-7,2%-%time:~0,2%%time:~3,2%%time:~6,2%
set TIMESTAMP=%TIMESTAMP: =0%
set OUTPUT_FILE=performance-data-%PRESET%-%TIMESTAMP%.txt

echo === Shadow Tower Randomizer Timing Data Collection === > "%OUTPUT_FILE%"
echo. >> "%OUTPUT_FILE%"
echo Preset: %PRESET% >> "%OUTPUT_FILE%"
echo Date: %date% %time% >> "%OUTPUT_FILE%"
node --version >> "%OUTPUT_FILE%" 2>&1
echo. >> "%OUTPUT_FILE%"

if not exist "%ISO_PATH%" (
    echo ERROR: ISO file not found at %ISO_PATH% >> "%OUTPUT_FILE%"
    type "%OUTPUT_FILE%"
    exit /b 1
)

if not exist "%PARAMS_FILE%" (
    echo ERROR: Params file not found at %PARAMS_FILE% >> "%OUTPUT_FILE%"
    type "%OUTPUT_FILE%"
    exit /b 1
)

echo Running randomizer with %PARAMS_FILE%... >> "%OUTPUT_FILE%"
echo ================================================ >> "%OUTPUT_FILE%"
echo. >> "%OUTPUT_FILE%"

REM Run the randomizer and capture both stdout and stderr
npm run mod "%ISO_PATH%" "%PARAMS_FILE%" 2>&1 | tee -a "%OUTPUT_FILE%"

echo. >> "%OUTPUT_FILE%"
echo ================================================ >> "%OUTPUT_FILE%"
echo Timing data saved to: %OUTPUT_FILE% >> "%OUTPUT_FILE%"
echo. >> "%OUTPUT_FILE%"
echo Next steps: >> "%OUTPUT_FILE%"
echo 1. Review the timing breakdown above >> "%OUTPUT_FILE%"
echo 2. Update PERFORMANCE_ANALYSIS.md with findings >> "%OUTPUT_FILE%"
echo 3. Prioritize optimizations based on bottlenecks >> "%OUTPUT_FILE%"

type "%OUTPUT_FILE%"
