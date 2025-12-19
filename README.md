# Testable online version

https://shadow-tower-randomizer-1023048112324.us-central1.run.app/

# Contact

fredrischter at gmail dot com

FromSoft Modding Committee (discord https://discord.gg/jUzZwWWUXd)

# Local setup (for developers)

## Setup Debian

sudo apt-get upgrade -y
sudo apt-get update -y
sudo apt-get install git-all npm -y

wget "https://github.com/Lameguy64/mkpsxiso/releases/download/v2.03/mkpsxiso-2.03-Linux.deb"
sudo dpkg -i mkpsxiso-2.03-Linux.deb

git clone https://github.com/fredrischter/shadow-tower-randomizer.git
cd shadow-tower-randomizer
npm install
export NODE_OPTIONS=--max_old_space_size=4096

## Setup Windows

- Download and install NodeJS

- Clone/download this repository

- In your terminal in the cloned repo folder run:
npm install

- Download, extract and add bin to path LameGuy64's MKPSXISO https://github.com/Lameguy64/mkpsxiso/releases/latest
You'll end up with programs available mkpsxiso and dumpsxiso.

## Functionality

Refer to ./site/index.html for features listing.

## Run manually

Replace st.bin by your image file.

```
npm run mod ".\generated\st.bin" -toNotGenerateImages
```

Or each preset individually:

```
npm run mod ".\generated\st.bin" ".\params\bonanza.json"
npm run mod ".\generated\st.bin" ".\params\comedy.json"
npm run mod ".\generated\st.bin" ".\params\scary-game.json"

#npm run mod ".\generated\st.bin" ".\params\any-prc-easy.json"
#npm run mod ".\generated\st.bin" ".\params\any-prc-even-harder.json"
#npm run mod ".\generated\st.bin" ".\params\any-prc-hard.json"
#npm run mod ".\generated\st.bin" ".\params\any-prc-very-hard.json"
#npm run mod ".\generated\st.bin" ".\params\any-prc-extreme-easy.json"

npm run mod ".\generated\st.bin" ".\params\randomized-easy.json"
npm run mod ".\generated\st.bin" ".\params\randomized-hard.json"
npm run mod ".\generated\st.bin" ".\params\randomized-medium.json"
npm run mod ".\generated\st.bin" ".\params\randomized-medium2.json"
npm run mod ".\generated\st.bin" ".\params\randomized-medium3.json"
npm run mod ".\generated\st.bin" ".\params\randomized-medium4.json"
npm run mod ".\generated\st.bin" ".\params\randomized-medium5.json"

npm run mod ".\generated\st.bin" ".\params\100-prc-easy.json"
npm run mod ".\generated\st.bin" ".\params\100-prc-even-harder.json"
npm run mod ".\generated\st.bin" ".\params\100-prc-hard.json"
npm run mod ".\generated\st.bin" ".\params\100-prc-very-hard.json"
npm run mod ".\generated\st.bin" ".\params\100-prc-medium.json"
npm run mod ".\generated\st.bin" ".\params\100-prc-extreme-easy.json"

npm run mod ".\generated\st.bin" ".\params\easy.json"
npm run mod ".\generated\st.bin" ".\params\even-harder.json"
npm run mod ".\generated\st.bin" ".\params\hard.json"
npm run mod ".\generated\st.bin" ".\params\no-change.json"
npm run mod ".\generated\st.bin" ".\params\very-hard.json"

npm run mod ".\generated\st.bin" ".\params\only-fix-king-hopper.json"
npm run mod ".\generated\st.bin" ".\params\only-apply-directives.json"
npm run mod ".\generated\st.bin" ".\params\only-bosses.json"
```

You can also put a image named as st.bin in generated\ folder, run all those commands to verify if produced output is different than one in the repo - that is reference generated files. Any output change indicates there was a code bahavior change, so it works like test.

## Cache System

To speed up testing, you can cache extracted ISO files and reuse them:

```bash
# First, create the cache (required before running tests)
npm run mod ".\generated\st.bin" ".\params\no-change.json"

# Then reuse extracted files for other presets (~50 seconds, 33% faster)
# ISO file can be dummy placeholder when using cache
npm run mod "dummy.bin" ".\params\randomized-hard.json" --use-cache ".\generated\no-change\extracted"

# Or test randomizer output only (~22 seconds, 70% faster)
npm run test-randomizer ".\params\randomized-hard.json" --use-cache ".\generated\no-change\extracted"
```

**Note:** When using `--use-cache`, the ISO file argument can be a dummy placeholder since extraction is skipped.

## Tests


```bash
# Test single preset (cache must be created first)
npm run test-randomizer ".\params\randomized-medium.json" -c ".\generated\no-change\extracted"

# Test all presets (Windows) - creates cache if needed
test_all_presets.bat

# Test all presets (Linux/Mac)
./test_all_presets.sh
```

## Options

toNotGenerateImages Doesn't generate map images, that makes it much quicker to run.

## How to convert a map part 7th file to TIM file

npm run map_texture_extract ".\generated\randomized-medium\extracted\ST\COM\FDAT.T_PARTS\47 281000-2c0800.T"

## Package and deploy

- Install docker
- Install gcould cli https://cloud.google.com/sdk/docs/install
- gcloud auth configure-docker
- gcloud auth login
- gcloud config set project shadow-tower-randomizer
- gsutil mb gs://shadow-tower-randomizer

- Run
docker build -t shadow-tower-randomizer .
docker stop shadow-tower-randomizer-container
docker remove shadow-tower-randomizer-container
docker run -d -p 8080:8080 --name shadow-tower-randomizer-container shadow-tower-randomizer

or one-liner
docker stop shadow-tower-randomizer-container && docker remove shadow-tower-randomizer-container && docker build -t shadow-tower-randomizer . && docker run -it -p 8080:8080 --name shadow-tower-randomizer-container shadow-tower-randomizer

docker exec shadow-tower-randomizer-container ls /app/generated

gsutil cors set cors-config.json gs://shadow-tower-randomizer
gcloud storage buckets describe gs://shadow-tower-randomizer
gsutil cors get gs://shadow-tower-randomizer

- Deploy
docker tag shadow-tower-randomizer:latest gcr.io/shadow-tower-randomizer/shadow-tower-randomizer:latest && docker push gcr.io/shadow-tower-randomizer/shadow-tower-randomizer:latest && gcloud run deploy shadow-tower-randomizer --image gcr.io/shadow-tower-randomizer/shadow-tower-randomizer:latest --platform managed --region us-central1 --allow-unauthenticated

gcloud run services update shadow-tower-randomizer --memory 8Gi --cpu 8 --platform managed --region us-central1

## ST.EXE Analysis Tool

For developers interested in understanding Shadow Tower's damage calculation code, we provide a MIPS disassembly tool:

```bash
# Show statistics about attack value loads and multiply operations
python3 analyze_st_exe.py --stats

# Search for loads from a specific offset (e.g., magic1 at offset 0x09)
python3 analyze_st_exe.py --search 09

# Search for stores to a memory address (e.g., HP at 0x198F2A)
python3 analyze_st_exe.py --search-stores 198F2A

# Disassemble a specific memory region
python3 analyze_st_exe.py --region 8001C6E8

# Show key damage calculation regions (default)
python3 analyze_st_exe.py
```

This tool helps verify that our data structure modifications in `data_model.js` target the correct offsets that the game's runtime code actually uses. The `--search-stores` option is particularly useful for finding where player HP (at 0x198F2A) is modified during damage application. See `RUNTIME_DAMAGE_DEBUGGING.md` for a complete analysis of Shadow Tower's damage calculation system.
