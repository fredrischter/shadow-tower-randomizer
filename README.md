# Setup and run

- Install npm (NodeJS).

- Go to repo folder via cmd and run:
npm install

- Install 7zip, make sure you have 7z command in path.

# Functionality

Refer to ./site/index.html for features listing.

Current version works with ISO files. So if you have BIN/CUE files instead, you need to convert to ISO using tool such as WinISO.

# Contact

fredrischter at gmail dot com

# Run manually

cd iso-folder

7z x -y -oShadowTowerExtractedFolder "ShadowTower.iso"

npm run mod "ShadowTowerExtractedFolder"

7z a -tiso "ShadowTowerModified.iso" "ShadowTowerExtractedFolder\*"

# Example

7z x -y -o"C:\Users\fred\Downloads\ShadowTowerExtractedFolder" "C:\Users\fred\Downloads\ShadowTower.iso"

npm run mod "C:\Users\fred\Downloads\ShadowTowerExtractedFolder"

7z a -tiso "C:\Users\fred\Downloads\ShadowTowerModified.iso" "C:\Users\fred\Downloads\ShadowTowerExtractedFolder\*"
