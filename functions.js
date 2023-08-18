
const seedrandom = require('seedrandom');
const { uuid } = require('uuidv4');

global.getUInt8 = function(bin, offset) {
  return bin[offset];
};

global.setUInt8 = function(bin, offset, value) {
    bin[offset] = value
}

global.getUInt16 = function(bin, offset) {
  return bin[offset] + bin[offset+1] * 0x100;
};

global.setUInt16 = function(bin, offset, value) {
    bin[offset] = value % 0x100;
    value -= bin[offset];
    value /= 0x100;
    bin[offset+1] = value
}

global.getUInt32 = function(bin, offset) {
  return bin[offset] + bin[offset+1] * 0x100 + bin[offset+2] * 0x100 * 0x100 + bin[offset+3] * 0x100 * 0x100 * 0x100;
};

global.setUInt32 = function(bin, offset, value) {
    bin[offset] = value % 0x100;
    value -= bin[offset];
    value /= 0x100;
    bin[offset+1] = value % 0x100;
    value -= bin[offset+1];
    value /= 0x100;
    bin[offset+2] = value % 0x100;
    value -= bin[offset+2];
    value /= 0x100;
    bin[offset+3] = value;
}

global.getUInt32HexString = function(bin, offset) {
  return bin[offset].toString(16) + " " + bin[offset+1].toString(16) + " " + bin[offset+2].toString(16) + " " + bin[offset+3].toString(16);
};

global.binCopy = function(source_bin, source_offset_in_file, dest_bin, dest_offset_in_file, length) {
  for (var i = 0; i < length; i++) {
    dest_bin[dest_offset_in_file + i] = source_bin[source_offset_in_file + i];
  }
}

global.binSwap = function(source_bin, source_offset_in_file, dest_bin, dest_offset_in_file, length) {
  for (var i = 0; i < length; i++) {
    var aux = dest_bin[dest_offset_in_file + i];
    dest_bin[dest_offset_in_file + i] = source_bin[source_offset_in_file + i];
    source_bin[source_offset_in_file + i] = aux;
  }
}

global.binSet = function(dest_bin, dest_offset_in_file, length, value) {
  for (var i = 0; i < length; i++) {
    dest_bin[dest_offset_in_file + i] = value;
  }
}

global.binToStr = function(bin, padding) {
  var str = "";
  if (bin) {
    for (var i in bin) {
      str += (Number.isInteger(bin[i])?bin[i].toString(16):"--").padStart(padding || 3);
    }
  }
  return str;
}

global.seedRandom = function(seed) {
  seedrandom(seed, { global: true });
}

global.useRandomSeed = function() {
  var seed = uuid();
  seedRandom(seed);
  return seed;
}

global.randomIntFromInterval = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

global.randomInt = function(max) {
  return Math.floor(Math.random() * (max + 1))
}

global.randomElement = function(array) {
  return array[randomInt(array.length-1)];
}

exports={};
