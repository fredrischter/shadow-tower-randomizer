# Setup and run

- Install npm (NodeJS).

- Go to repo folder via cmd and run:
npm install

- Download, extract and add bin to env path https://github.com/Lameguy64/mkpsxiso/releases/latest
You'll end up with programs available mkpsxiso and dumpsxiso.

# Functionality

Refer to ./site/index.html for features listing.

Current version works with ISO files. So if you have BIN/CUE files instead, you need to convert to ISO using tool such as WinISO.

# Contact

fredrischter at gmail dot com

# Run manually

npm run mod "C:\path\imagefile.bin" ".\params\easy.json"

npm run mod "C:\path\imagefile.bin" ".\params\hard.json"

npm run mod "C:\path\imagefile.bin" ".\params\very-hard.json"

npm run mod "C:\path\imagefile.bin" ".\params\even-harder.json"

npm run mod "C:\path\imagefile.bin" ".\params\only-apply-directives.json"

npm run mod "C:\path\imagefile.bin" ".\params\only-fix-king-hopper.json"

