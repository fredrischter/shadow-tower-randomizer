
//cd C:\Users\fred\Desktop\shadow-tower-randomizer
//npm run change slime.json

unpack
npm run randomize .\params.json "C:\Users\fred\Downloads\ReverseEngineering\mkpsxiso-2.03-win64\bin\st"
npm run change changeset.json
pack

unpack>unpack.txt && npm run randomize .\params.json "C:\Users\fred\Downloads\ReverseEngineering\mkpsxiso-2.03-win64\bin\st" && npm run change changeset.json && pack

E:
cd E:\Download\mednafen-1.29.0-win64
mednafen.exe C:\Users\fred\Desktop\shadow-tower-randomizer\mkpsxiso.cue

//changing short sword
//481 138b800-139c000.T"
//part.bin[0xBAA0] = 0x40;

//changing first entrance to not go to solitary region but to go to hidden region
//534 1448800-144b000.T
//part.bin[0x1bde] = 0x2d;
//part.bin[0x1bdf] = 0x50;
//part.bin[0x1be0] = 0x00;

//copyArea(0x620, 0xe0, 64*6);
//part.bin[0xea] = 0x20;
//part.bin[0xeb] = 0x20;
//part.bin[0xec] = 0x20;
//part.bin[0xf6] = 0x01;
//console.log(part.checkSum() + " [0xeb] =",part.bin[0xeb].toString(16) + " [0x8fff] =",part.bin[0x8fff].toString(16));

