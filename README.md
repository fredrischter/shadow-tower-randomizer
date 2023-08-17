# Setup and run

- Install npm (NodeJS).

- Go to repo folder via cmd and run:
npm install

- Download, extract and add bin to env path https://github.com/Lameguy64/mkpsxiso/releases/latest
You'll end up with programs available mkpsxiso and dumpsxiso.

# Functionality

Refer to ./site/index.html for features listing.

# Contact

fredrischter at gmail dot com

FromSoft Modding Committee (discord https://discord.gg/jUzZwWWUXd)

# Run manually

Replace st.bin by your image file.

npm run mod ".\generated\st.bin" ".\params\easy.json"

npm run mod ".\generated\st.bin" ".\params\even-harder.json"

npm run mod ".\generated\st.bin" ".\params\hard.json"

npm run mod ".\generated\st.bin" ".\params\only-fix-king-hopper.json"

npm run mod ".\generated\st.bin" ".\params\only-apply-directives.json"

npm run mod ".\generated\st.bin" ".\params\no-change.json"

npm run mod ".\generated\st.bin" ".\params\very-hard.json"

You can also put a image named as st.bin in generated\ folder, run all those commands to verify if produced output is different than one in the repo - that is reference generated files. Any output change indicates there was a code bahavior change, so it works like test.
