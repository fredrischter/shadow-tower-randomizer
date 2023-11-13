'use strict';

const path = require('path');
const fs = require('fs');
const child_process = require('child_process')

var file = process.argv[2];
if (!file) {
	console.log("ERROR - didn't provide file as argument.");
	process.exit(1);
	return;
}

var originalParamsFile = process.argv[3];
if (!originalParamsFile) {
	console.log("Didn't provide params file as argument. Generating all");

	const params = '.' + path.sep + 'params' + path.sep;


	fs.readdir(params, (err, files) => {
	  var paramsList = [];

	  function runOne() {
		var paramsFile = paramsList.shift();
		if (paramsFile) {
			var command = 'npm run mod "' + file + '" "' + params + paramsFile + '"';
			console.log("Running " + command);
			exec(command, function() {
				runOne();
			});
		} else {
			console.log("Finished running mod for all params");
		}
	  }

	  files.forEach(paramsFile => {
	  	paramsList.push(paramsFile);
	  });
	  runOne();
	});

	return;
}

for (var i = 2; i < process.argv.length; i++) {
	if (process.argv[i] == "toNotGenerateImages") {
		global.toNotGenerateImages = true;
		console.log("toNotGenerateImages parameter");
	}
}

const params = JSON.parse(fs.readFileSync(originalParamsFile));

const onlyPath = path.dirname(file);
const onlyFileName = path.basename(file);

const productPath = onlyPath + path.sep + params.label;
const outputImage = productPath + path.sep + 'modified-' + params.label + '-' + onlyFileName;
//const outputCue = productPath + path.sep + 'modified-' + params.label + '-' + onlyFileName.split(".")[0] + '.cue';
const extractedPath = productPath + path.sep + 'extracted';
const spoilersPath = productPath + path.sep + 'spoilers';
const xmlDescriptor = onlyPath + path.sep + 'st.xml';
const paramsFile = spoilersPath + path.sep + "params.json";

if (fs.existsSync(productPath)) {
	fs.rmdirSync(productPath, { recursive: true });
}
fs.mkdirSync(productPath);
fs.mkdirSync(spoilersPath);

fs.copyFileSync(originalParamsFile, paramsFile);

function exec(cmd, callback) {
	console.log("Running " + cmd);
	var child = child_process.exec(cmd);
	child.stdout.pipe(process.stdout);
	child.stderr.pipe(process.stderr);
	child.on('exit', function(err) {
		if (err) {
			console.log("Step finished with error " + err);
			return;
		}
		callback();
	});
}

var filesToExtract = ['COM' + path.sep + 'FDAT.T', 'CHR0' + path.sep + 'M00.T', 'CHR0' + path.sep + 'M01.T', 'CHR0' + path.sep + 'M02.T', 'CHR0' + path.sep + 'M03.T', 'CHR0' + path.sep + 'M04.T', 'CHR0' + path.sep + 'M05.T', 'CHR0' + path.sep + 'M06.T', 'CHR0' + path.sep + 'M08.T', 'CHR0' + path.sep + 'M09.T', 'CHR1' + path.sep + 'M10.T', 'CHR1' + path.sep + 'M11.T', 'CHR1' + path.sep + 'M12.T', 'CHR1' + path.sep + 'M13.T', 'CHR1' + path.sep + 'M14.T', 'CHR1' + path.sep + 'M15.T', 'CHR1' + path.sep + 'M17.T', 'CHR1' + path.sep + 'M18.T', 'CHR2' + path.sep + 'M20.T', 'CHR2' + path.sep + 'M21.T', 'CHR2' + path.sep + 'M23.T', 'CHR2' + path.sep + 'M24.T', 'CHR2' + path.sep + 'M25.T', 'CHR2' + path.sep + 'M26.T', 'CHR2' + path.sep + 'M27.T', 'CHR2' + path.sep + 'M28.T', 'CHR3' + path.sep + 'M30.T', 'CHR3' + path.sep + 'M32.T', 'CHR3' + path.sep + 'M33.T', 'CHR3' + path.sep + 'M37.T', 'CHR3' + path.sep + 'M38.T', 'CHR4' + path.sep + 'M40.T', 'CHR4' + path.sep + 'M41.T'];
var filesFullPath = '';
filesToExtract.forEach((relativePath) => filesFullPath += extractedPath + path.sep + "ST" + path.sep + relativePath + ';');

exec('dumpsxiso "' + file + '" -x "' + extractedPath + '" -s "' + xmlDescriptor + '"', function() {

	exec('npm run unpack "' + filesFullPath + '"', function() {

		exec('npm run randomize "' + paramsFile + '" "' + extractedPath + '"' + (global.toNotGenerateImages?' toNotGenerateImages':''), function() {

			exec('npm run change "' + spoilersPath + path.sep + "changeset.json" + '"', function() {

				exec('npm run pack "' + filesFullPath + '"', function() {

					exec('mkpsxiso "' + xmlDescriptor + '" -y -o "' + outputImage + '"'/* + '" -c "' + outputCue + '"'*/, function() {
						console.log("Finished, output " + outputImage);
						console.log("Extraced modified files " + extractedPath);
						console.log("Spoilers " + spoilersPath);
					});
				
				});

			});

		});

	});

});





/*
\ST\COM\FDAT.T \ST\CHR0\M00.T \ST\CHR0\M01.T \ST\CHR0\M02.T \ST\CHR0\M03.T \ST\CHR0\M04.T \ST\CHR0\M05.T \ST\CHR0\M06.T \ST\CHR0\M08.T \ST\CHR0\M09.T \ST\CHR1\M10.T \ST\CHR1\M11.T \ST\CHR1\M12.T \ST\CHR1\M13.T \ST\CHR1\M14.T \ST\CHR1\M15.T \ST\CHR1\M17.T \ST\CHR1\M18.T \ST\CHR2\M20.T \ST\CHR2\M21.T \ST\CHR2\M23.T \ST\CHR2\M24.T \ST\CHR2\M25.T \ST\CHR2\M26.T \ST\CHR2\M27.T \ST\CHR2\M28.T \ST\CHR3\M30.T \ST\CHR3\M32.T \ST\CHR3\M33.T \ST\CHR3\M37.T \ST\CHR3\M38.T \ST\CHR4\M40.T \ST\CHR4\M41.T

\ST\COM\TALKMSG.T
\ST\COM\CRT.T
\ST\COM\EQUIP.T
\ST\COM\MO.T
\ST\COM\STAT.T
\ST\COM\ITEM.T

\ST\CHR0\M07.T

\ST\CHR1\M16.T
\ST\CHR1\M19.T

\ST\CHR2\M22.T
\ST\CHR2\M29.T

\ST\CHR3\M31.T
\ST\CHR3\M34.T
\ST\CHR3\M35.T
\ST\CHR3\M36.T
\ST\CHR3\M39.T
*/
