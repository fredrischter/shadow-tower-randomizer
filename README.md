

memory positions

199098 tile
1991a0 movement
1b58e0 movement
1ba190 movement

//cd C:\Users\fred\Desktop\shadow-tower-randomizer

node map_walker.js map.json > walk.json

unpack
npm run randomize .\params.json "C:\Users\fred\Downloads\ReverseEngineering\mkpsxiso-2.03-win64\bin\st"
npm run change changeset.json
pack

unpack>unpack.txt && npm run randomize .\params.json "C:\Users\fred\Downloads\ReverseEngineering\mkpsxiso-2.03-win64\bin\st">randomize.txt && npm run change changeset.json && pack>pack.txt

E:
cd E:\Download\mednafen-1.29.0-win64
mednafen.exe C:\Users\fred\Desktop\shadow-tower-randomizer\mkpsxiso.cue
