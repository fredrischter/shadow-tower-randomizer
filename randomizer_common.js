
var fs = require('fs');
const path = require('path');
const constants = require('./constants');
const functions = require('./functions');

const SECTOR_SIZE = 2048;
var TFILE = [];

class TFILEReader {
  constructor(baseFileName) {
    this.baseFileName = baseFileName;
    this.data = fs.readFileSync(baseFileName);
    //console.log(' finished reading file ' + this.data.length + ' bytes');
    this.cursor = this.data.entries();
    this.offset = 0;
    this.indexInTFile = 0;
  }

  readTFormat() {
    return new TFormat(this);
  }

  readTFormatPart(startOffset) {
    //var startOffsetFromName = parseInt(this.baseFileName.split(" ")[1].split("-")[0], 16);
    var bin = new Array(this.data.length);
    while (!this.done()) {
      bin[this.offset] = this.next();
    }

    //console.log("Part offsets? " + this.baseFileName /*+ " " + startOffsetFromName.toString(16)*/ + " " + startOffset.toString(16));

    var originalTFile = this.baseFileName.split("_PARTS"+path.sep)[0];
    //console.log(" " + startOffsetFromName + " " + " " + this.baseFileName);
    //console.log(" " + originalTFile);
    return new TFormatPart(startOffset/* || startOffsetFromName*/, bin, this.baseFileName, originalTFile, this.indexInTFile++);
  }

  next() {
    var a = this.cursor.next();
    this.offset = a.value[0] + 1;
    return a.value[1];
  }

  getOffset() {
    return this.offset;
  }

  done() {
    return this.offset >= this.data.length;
  }

  getUint16() {
    return this.next() + this.next() * 0x100;
  }

  getUint8() {
    return this.next();
  }
}

class TIMTextureFile {
  constructor(bin) {
    this.bin = bin;
    if (this.bin) {
      var magic = getUInt32(this.bin, 0x0);
      if (magic != 0x10) {
        //console.log("Texture not a texture magic=" + magic);
        return;
      }
      var colorType = getUInt32(this.bin, 0x4);
      var imageOffset = getUInt32(this.bin, 0x8);
      var bitsPerPalleteEntry = colorType == 0x08? 4 : colorType == 0x09? 8 : 16; 
      var palleteOrgX = getUInt16(this.bin, 0xc);
      var palleteOrgY = getUInt16(this.bin, 0xe);
      var palette_colors = getUInt16(this.bin, 0x10);
      var nb_palettes = getUInt16(this.bin, 0x12);
      var palletesWords = nb_palettes * palette_colors * bitsPerPalleteEntry / 8;
      var imageWidthIn16BitWords = getUInt16(this.bin, imageOffset);
      var imageHeightInPixels = getUInt16(this.bin, imageOffset + 0x2);
      
      console.log("Texture magic=" + magic + " colorType=" + colorType + " imageOffset=" + imageOffset + " bitsPerPalleteEntry=" + bitsPerPalleteEntry + " palette_colors=" + palette_colors
        + " palleteOrgX=" + palleteOrgX + " palleteOrgY=" + palleteOrgY
        + " imageWidthIn16BitWords=" + imageWidthIn16BitWords + " imageHeightInPixels=" + imageHeightInPixels
        + " nb_palettes=" + nb_palettes + " palletesWords=" + palletesWords
        + " textureSize=" + this.bin.length);
      
      //0x3c
      //0x3e
    }
  }
}

class RTIM {
  constructor(paletteBin, imgW, imgH, imgBin) {
    this.paletteBin = paletteBin;
    this.imgW = imgW;
    this.imgH = imgH;
    this.imgBin = imgBin;
  }

  writeAsTIM(fileName) {
    var paletteHeaderOffset = 0x8;
    var clutOffset=paletteHeaderOffset + 0xc;
    var imageMetadataOffset = clutOffset + 0x200;
    var imageOffset = imageMetadataOffset + 0xc;
    var totalSize = imageOffset + this.imgBin.length;

    var buffer = Buffer.alloc(totalSize);

    // https://github.com/SaxxonPike/rhythm-game-formats/blob/master/generic/tim.md
    buffer[0x0] = 0x10; // magic
    buffer[0x4] = 0x09; // BitDepth 8bpp Palette? Yes PixelFormat 8 bits per pixel, from a palette of 256 colors

    buffer[paletteHeaderOffset+0x1] = 0x2; // 0x200 Length of all the CLUT data after the header
    buffer[paletteHeaderOffset+0x9] = 0x1; // 0x100 Colors per CLUT
    buffer[paletteHeaderOffset+0xa] = 0x1; // 0x1 Number of CLUTs

    for (var i = 0; i<0x200; i++) {
      buffer[clutOffset + i] = this.paletteBin[i];
    }

    buffer[imageMetadataOffset+0x0] = this.imgBin.length % 0x100; // Length of pixel data after the header in bytes
    buffer[imageMetadataOffset+0x1] = this.imgBin.length / 0x100; // Length of pixel data after the header in bytes
    buffer[imageMetadataOffset+0x8] = (this.imgW/2) % 0x100; // Image stride*
    buffer[imageMetadataOffset+0x9] = (this.imgW/2) / 0x100; // Image stride*
    buffer[imageMetadataOffset+0xa] = this.imgH % 0x100; // Image height
    buffer[imageMetadataOffset+0xb] = this.imgH / 0x100; // Image height
    for (var i = 0; i<this.imgBin.length; i++) {
      buffer[imageOffset + i] = this.imgBin[i];
    }

    console.log("Writing TIM file " + totalSize + " bytes to " + fileName);
    fs.writeFileSync(fileName, buffer);
  }
}

class TFormatPart {

  constructor(startOffset, bin, fileName, originalTFile, indexInTFile) {
    this.startOffset = startOffset;
    this.bin = bin;
    this.originalBin = bin.slice();
    this.fileName = fileName;
    this.originalTFile = originalTFile;
    this.indexInTFile = indexInTFile;
    //console.log("     offset   " + this.startOffset.toString(16));

    this.trySizedMix();
  }

  extractRTIM() {

    var product = [];

    var cursor = this.startOffset;

    do {
      var RTIMStart = cursor;
      var paletteHeaderOffset = cursor;

      var clutX1 = getUInt16(this.bin, cursor + 0x0);
      var clutY1 = getUInt16(this.bin, cursor + 0x2);
      var clutW1 = getUInt16(this.bin, cursor + 0x4);
      var clutH1 = getUInt16(this.bin, cursor + 0x6);
      var clutX2 = getUInt16(this.bin, cursor + 0x8);
      var clutY2 = getUInt16(this.bin, cursor + 0xa);
      var clutW2 = getUInt16(this.bin, cursor + 0xc);
      var clutH2 = getUInt16(this.bin, cursor + 0xe);
      cursor+=0x10;

      if (clutX1 == 0xffff && clutY1 == 0xffff && clutW1 == 0xffff && clutH1 == 0xffff) {
        console.log("Found the finisher 0xffff 0xffff 0xffff 0xffff.");
        break;
      }

      var valid = clutX1 == clutX2 && clutY1 == clutY2 && clutW1 == clutW2 && clutH1 == clutH2;
      if (!valid) {
        console.log("Didn't find valid palette header. Swallowing 0x10 bytes, trying next.");
        valid = true;
        continue;
      }

      var paletteStart = cursor;
      cursor+=0x200;
      var imageHeaderOffset = cursor;

      var textureX1 = getUInt16(this.bin, cursor + 0x0);
      var textureY1 = getUInt16(this.bin, cursor + 0x2);
      var textureW1 = getUInt16(this.bin, cursor + 0x4);
      var textureH1 = getUInt16(this.bin, cursor + 0x6);
      var textureX2 = getUInt16(this.bin, cursor + 0x8);
      var textureY2 = getUInt16(this.bin, cursor + 0xa);
      var textureW2 = getUInt16(this.bin, cursor + 0xc);
      var textureH2 = getUInt16(this.bin, cursor + 0xe);
      cursor+=0x10;

      var imageStart = cursor;
      var imageSize = 2 * textureW1 * textureH1;
      cursor+=imageSize;

      valid = clutX1 == clutX2 && clutY1 == clutY2 && clutW1 == clutW2 && clutH1 == clutH2 && textureX1 == textureX2 && textureY1 == textureY2 && textureW1 == textureW2 && textureH1 == textureH2;
      console.log("palette 0x" + paletteHeaderOffset.toString(16) + " image 0x" + imageHeaderOffset.toString(16) + 
        " Valid? " + valid.toString(16) + 
        " imageSize " + imageSize.toString(16) + 
        " clut " + clutX1.toString(16) + " " + clutY1.toString(16) + " " + clutW1.toString(16) + " " + clutH1.toString(16) + 
        " texture " + textureX1.toString(16) + " " + textureY1.toString(16) + " " + textureW1.toString(16) + " " + textureH1.toString(16));

      product.push(new RTIM(
        this.bin.slice(paletteStart, paletteStart + 0x200),
        textureW1, textureH1,
        this.bin.slice(imageStart, imageStart + imageSize)));

    } while(valid);

    return product;
  }

  trySizedMix() {
    if (this.bin.length > 4) {
      this.sizedMixParts = [];
      this.sizedMixStarts = [];
      var cursor = 0;
//      console.log("Trying bin " + this.bin.length + " " + this.fileName);
      do {
        var size = getUInt32(this.bin, cursor);
        cursor += 4;
        if (size == 0 && this.sizedMixParts.length > 0) {
//          console.log("Finished slicing " + this.sizedMixParts.length + " sized mix parts, file " + this.fileName);
          return;
        }
        if (size == 0 || cursor + size > this.bin.length) {
//console.log("It isn't sizedMix. cursor " + cursor.toString(16) + " size " + size.toString(16) + " to read til " + (cursor + size).toString(16) + " bin size " + this.bin.length.toString(16));
//          console.log("bin start " + getUInt32HexString(this.bin, 0));
          this.sizedMixParts = undefined;
          return;
        }
//        console.log("sized mix part " + size.toString(16));

        this.sizedMixStarts.push(cursor);
        var bin = this.bin.slice(cursor, cursor + size);
        //console.log("Cutting sized part cursor " + cursor.toString(16) + " new cursor " + (cursor + size).toString(16) + " bin length " + this.bin.length.toString(16) + " " + this.fileName);
        cursor += size;
        //console.log(" added bin size " + bin.length);
        this.sizedMixParts.push(bin);
      } while(cursor < this.bin.length)
      //console.log("Finished on " + cursor.toString(16) + " bin length " + this.bin.length.toString(16) + " sized mix parts " + this.sizedMixParts.length + " " + this.fileName);
    }
  }

  write(callback) {
    //console.log("DEBUG - Writing to file TFormatPart" + (callback?" with callback ":" without callback ") + this.fileName);

    if (callback) {
      fs.writeFileSync(this.fileName, Buffer.from(this.bin), callback);// ,{flag:'a+'}
    } else {
      fs.writeFileSync(this.fileName, Buffer.from(this.bin));// ,{flag:'a+'}
    }

    // write sized mix parts
    /*if (this.sizedMixParts) {
      var sizedPartsDir = this.fileName + "_SIZED_MIX_PARTS";
      fs.mkdirSync(sizedPartsDir);
      var cursor = 0x04;
      for (var i = 0 ; i < this.sizedMixParts.length ; i++) {
        var newCursor = cursor + this.sizedMixParts[i].length;
        var fileName = sizedPartsDir + path.sep + i + " " + cursor.toString(16) + "-" + newCursor.toString(16) + ".sizedMixPart";
        cursor = newCursor;
        fs.writeFileSync(fileName, Buffer.from(this.sizedMixParts[i]));
      }
    }*/
  }

  reload(offset) {
    var reloaded = new TFILEReader(this.fileName).readTFormatPart(offset);
    //if (this.bin.length != reloaded.bin.length) {
    //  console.log("Error - reloading part into part with wrong size.");
    //}
    this.bin = reloaded.bin;
    this.startOffset = reloaded.startOffset;

    return this.bin.length;
    //console.log("reloading into " + this.startOffset,toString(16) +" " +this.fileName+" " +this.originalTFile);
    //console.log("reloading from " + reloaded.startOffset,toString(16) +" " +reloaded.fileName+" " +reloaded.originalTFile);
  }

  checkSum() {
    var checkSum = 0x12345678;
    for (var offset = 0; offset < this.bin.length-4; offset+=4) {
      var added = getUInt32(this.bin, offset);
      checkSum += added;
      checkSum %= (0x100 * 0x100 * 0x100 * 0x100);
      //console.log(" checksum " + checkSum.toString(16) + " " + added.toString(16));
    }
    return checkSum;
  }

  verifyCheckSum() {
    if (this.bin.length <= 4) {
      console.log("skipping checksum, not possible since bin is <4 bytes " + this.fileName);
      return true;
    }
    var checksumOffset = this.bin.length-4;
    var expected = getUInt32(this.bin, checksumOffset);
    //console.log(" expected checksum offset " + checksumOffset.toString(16) +"-" + checksumOffset.toString(16) + " " + this.bin[checksumOffset].toString(16)+ " " + this.bin[checksumOffset+1].toString(16)+ " " + this.bin[checksumOffset+2].toString(16)+ " " + this.bin[checksumOffset+3].toString(16));

    var checkSum = this.checkSum();
    if (checkSum == expected) {
      return true;
    } else {
      console.log("ERROR - checksum " + checkSum.toString(16) + " expected " + expected.toString(16) + " " + this.fileName);
      return false;
    }
  }
  
  setCheckSum() {
    if (this.bin.length <= 4) {
      console.log("skipping setting checksum, not possible since bin is <4 bytes " + this.fileName);
      return;
    }
    var checksumOffset = this.bin.length-4;
    var checkSum = this.checkSum();

    setUInt32(this.bin, checksumOffset, checkSum);
  }

}

class TFormat {

  getTableBin() {
    let buffer = new ArrayBuffer((this.offsetCount+1)*2);
    let view = new Uint16Array(buffer);
    view[0] = this.offsetCount;
    for (var i = 0 ; i < this.offsetCount ; i++) {
      view[i+1] = this.offsetTable[i];
    }
    return new Uint8Array(buffer);
  }

  constructor(reader) {
    this.fileName = reader.baseFileName;
  	this.partsFolderName = reader.baseFileName+'_PARTS';
    this.offsetCount = reader.getUint16();
    this.offsetTable = new Array(this.offsetCount);
    for (var i = 0 ; i < this.offsetCount ; i++) {
      this.offsetTable[i] = reader.getUint16();
      //console.log("offset byte "+this.offsetTable[i]*SECTOR_SIZE);
    }
    this.endOfFileoffset = this.offsetTable[this.offsetTable.length-1];
    this.effectiveEndOfFileoffset = this.endOfFileoffset * SECTOR_SIZE;
    this.beginningOfBin = 0x800;
    if (this.offsetCount > 1023) {
      this.beginningOfBin = 0x1000;
    }
    while (reader.getOffset() < 0x800) {
      var padding = reader.getUint8();
      if (padding != 0) {
        console.log("ERROR - padding area expecetd to be zero isn't zero. Value " + padding.toString(16) + " offset " + (reader.getOffset() - 1).toString(16));
      }
    }
    //console.log(" files inside T file count " + this.offsetCount + " endOfFileoffset " + this.endOfFileoffset.toString(16) + " effectiveEndOfFileoffset " + this.effectiveEndOfFileoffset.toString(16) + " beginningOfBin " + this.beginningOfBin.toString(16));
    //if (!(this.effectiveEndOfFileoffset - this.beginningOfBin > 0)) {
    //  console.log("File not valid for reading, skipping. Last offset: " + this.effectiveEndOfFileoffset + " " + this.fileName);
    //  return;
    //}
    if (!(this.effectiveEndOfFileoffset - this.beginningOfBin>0)) {
      console.log("DEBUG - Skipping to load TFormat, invalid. " + this.fileName);
      return;
    }
    this.bin = new Array(this.effectiveEndOfFileoffset - this.beginningOfBin);
    for (var i = 0 ; i < this.bin.length ; i++) {
      this.bin[i] = reader.getUint8();
    }
    //console.log(" bin size " + this.bin.length.toString(16) + " next read offset " + reader.getOffset().toString(16));
    if (this.effectiveEndOfFileoffset != reader.getOffset()) {
      console.log("ERROR - finished reading file but reader offset isn't in the end of the file");
    }

    this.files = new Array(this.offsetCount);
    var previous = this.beginningOfBin;
    for (var i = 0 ; i < this.offsetCount ; i++) {
      var currentEnd = this.offsetTable[i] * SECTOR_SIZE;
      var name = '' + i + ' ' + (previous).toString(16) + '-' + (currentEnd).toString(16);
      var fileName = this.partsFolderName+path.sep+name+'.T'
      this.files[i] = new TFormatPart(previous, this.bin.slice(previous - this.beginningOfBin, currentEnd - this.beginningOfBin), fileName, reader.baseFileName, i == 0 ? 0 : i - 1);
      previous = currentEnd;
    }
    //console.log(" TFile with " + this.files.length + " parts loaded");
    
  }

  writeParts(callback) {

    if (callback) {
      var finishedCount = 0;
      fs.rm(this.partsFolderName, { recursive: true, force: true }, (err) => {
        fs.mkdir(this.partsFolderName, (err) => {
          for (var i = 0 ; i < this.files.length ; i++) {
            this.files[i].write((err) => {
              finishedCount++;
              if (finishedCount == this.files.length) {
                callback();
              }
            });
          }
        });
      });

    } else {
      //fs.rmdirSync(this.partsFolderName, { recursive: true, force: true });
      fs.mkdirSync(this.partsFolderName);
      for (var i = 0 ; i < this.files.length ; i++) {
        this.files[i].write();
      }
      console.log(" " + this.files.length + " parts unpacked into " + this.partsFolderName);
    }
  }

  injectParts() {
    for (var i = 0 ; i < this.files.length ; i++) {
      this.injectPart(this.files[i]);
    }
  }

  injectPart(file) {
    //console.log("DEBUG - Injecting from TFormatPart " + file.fileName + " into TFormat " + this.fileName);

    var indexFromTable = this.offsetTable[file.indexInTFile];
    var indexFromOffset = file.startOffset / 0x800;
    if (indexFromTable != indexFromOffset) {
      //console.log("injecting rewite by offset shift change " + file.indexInTFile + " " + (indexFromTable).toString(16) + " -> " + indexFromOffset.toString(16) + ", " + (indexFromTable*0x800).toString(16) + " -> " + (indexFromOffset*0x800).toString(16));
      this.offsetTable[file.indexInTFile] = indexFromOffset;
    }
    for (var i = 0 ; i < file.bin.length ; i++) {
      var newValue = file.bin[i];
      var binPos = file.startOffset - this.beginningOfBin;
      var current = this.bin[binPos+i];
      if (newValue!=current) {
        if (indexFromTable == indexFromOffset) {
          //console.log(" injecting change ["+ (binPos+this.beginningOfBin+i).toString(16) +"] = " + current.toString(16) + " -> " +newValue.toString(16));
        }
        this.bin[binPos+i] = newValue;
      }
    }
  }

  write(callback) {
    //console.log("DEBUG - Writing to file TFormat" + (callback?" with callback ":" without callback ") + this.fileName);
    var fd = fs.openSync(this.fileName, 'r+');

    if (callback) {
      fs.writeSync(fd, Buffer.from(this.bin), 0, this.bin.length, this.beginningOfBin, function(err, numberOfBytesWritten) {
        //console.log(" wrote bytes " + numberOfBytesWritten);
        const tableBin = this.getTableBin();
        fs.writeSync(fd, Buffer.from(tableBin), 0, tableBin.length, 0, function(err, numberOfBytesWritten) {
          //console.log(" wrote table bytes " + numberOfBytesWritten);
        });
      });
    } else {
      var numberOfBytesWritten = fs.writeSync(fd, Buffer.from(this.bin), 0, this.bin.length, this.beginningOfBin);
      //console.log(" wrote bytes " + numberOfBytesWritten);
      const tableBin = this.getTableBin();
      numberOfBytesWritten = fs.writeSync(fd, Buffer.from(tableBin), 0, tableBin.length, 0);
      //console.log(" wrote table bytes " + numberOfBytesWritten);
    }
  }
}

global.TIMTextureFile = TIMTextureFile;
global.TFILEReader = TFILEReader;
global.TFormat = TFormat;
global.TFormatPart = TFormatPart;
