# Setup Debian

sudo apt-get upgrade -y
sudo apt-get update -y
sudo apt-get install git-all npm -y

wget "https://github.com/Lameguy64/mkpsxiso/releases/download/v2.03/mkpsxiso-2.03-Linux.deb"
sudo dpkg -i mkpsxiso-2.03-Linux.deb

git clone https://github.com/fredrischter/shadow-tower-randomizer.git
cd shadow-tower-randomizer
npm install
export NODE_OPTIONS=--max_old_space_size=4096

# Setup Windows

- Download and install NodeJS

- Clone/download this repository

- In your terminal in the cloned repo folder run:
npm install

- Download, extract and add bin to path LameGuy64's MKPSXISO https://github.com/Lameguy64/mkpsxiso/releases/latest
You'll end up with programs available mkpsxiso and dumpsxiso.

# Functionality

Refer to ./site/index.html for features listing.

# Contact

fredrischter at gmail dot com

FromSoft Modding Committee (discord https://discord.gg/jUzZwWWUXd)

# Run manually

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

# Tests

Run, verify updated csv files.

./test_item_uniques.sh & ./test_items_count.sh & ./test_assertions.sh & ./test_failures.sh &

# Options

toNotGenerateImages Doesn't generate map images, that makes it much quicker to run.

# How to convert a map part 7th file to TIM file

npm run map_texture_extract ".\generated\randomized-medium\extracted\ST\COM\FDAT.T_PARTS\47 281000-2c0800.T"

# Package and deploy

- Install docker
- Install gcould cli https://cloud.google.com/sdk/docs/install
- gcloud auth configure-docker

- Run
docker build -t shadow-tower-randomizer .
docker stop shadow-tower-randomizer-container
docker remove shadow-tower-randomizer-container
docker run -d -p 8080:8080 --name shadow-tower-randomizer-container shadow-tower-randomizer

or one-liner docker build -t shadow-tower-randomizer . && docker stop shadow-tower-randomizer-container && docker remove shadow-tower-randomizer-container && docker run -d -p 8080:8080 --name shadow-tower-randomizer-container shadow-tower-randomizer

- Deploy
docker tag shadow-tower-randomizer:latest gcr.io/shadow-tower-randomizer/shadow-tower-randomizer:latest
docker push gcr.io/shadow-tower-randomizer/shadow-tower-randomizer:latest
gcloud compute instances list

gcloud run deploy shadow-tower-randomizer --image gcr.io/shadow-tower-randomizer/shadow-tower-randomizer:latest --platform managed --region us-central1 --allow-unauthenticated
