const express = require('express');
const fs = require('fs');
const path = require('path');
const { Storage } = require('@google-cloud/storage');
const uuid = require('uuid');
const { promisify } = require('util');
const child_process = require('child_process');

function exec(cmd, callback, errCallback) {
	console.log("Running " + cmd);
	var child = child_process.exec(cmd);
	child.stdout.pipe(process.stdout);
	child.stderr.pipe(process.stderr);
	child.on('exit', function(err) {
		if (err) {
			console.log("Step finished with error " + err);
			if (errCallback) {
				errCallback();
			}
			return;
		}
		if (callback) {
			callback();
		}
	});
}

exec('dumpsxiso', function() {
	exec('mkpsxiso', function() {
	}, process.exit);
}, process.exit);

const app = express();
const PORT = process.env.PORT || 8080;

// Initialize Google Cloud Storage client
const storage = new Storage();
const BUCKET_NAME = 'shadow-tower-randomizer';
const UPLOADS_FOLDER = path.join(__dirname, 'uploads');
const PARAMS_FOLDER = path.join(__dirname, 'params');

// Create a simple in-memory store to track the status of uploads
let uploadStatus = {}; // stores sessionId -> { status: "processing"/"completed", presignedUrl: "..." }

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

async function uploadFolderToGCS(folderPath, destinationPath = '') {
  const files =  fs.readdirSync(folderPath, { withFileTypes: true });
  console.log(`Uploadeding folder ${folderPath}`);

  for (const file of files) {
    const localFilePath = path.join(folderPath, file.name);
    const relativePath = path.relative(folderPath, localFilePath);
    const destination = path.join(destinationPath, relativePath).replace(/\\/g, '/');

    if (file.isDirectory()) {
	  console.log(`Uploadeding file ${localFilePath}`);
      await uploadFolderToGCS(localFilePath, destination); // Recurse
    } else {
      await storage.bucket(BUCKET_NAME).upload(localFilePath, { destination });
      console.log(`Uploaded ${localFilePath} to gs://${BUCKET_NAME}/${destination}`);
    }
  }
  log(`Deleting local folder. ${folderPath}`);
  if (fs.existsSync(folderPath)) {
    fs.rmSync(folderPath, { recursive: true, force: true });
    log(`Deleted: ${folderPath}`);
  }
}


// Generate a presigned URL for file upload
app.get('/generate-presigned-url', async (req, res) => {
  const filename = req.query.filename;
  const contentType = req.query.contentType;
  const expiresIn = 5 * 60;  // URL expiry time in seconds (5 minutes)

  const file = storage.bucket(BUCKET_NAME).file(`uploads/${filename}/st.bin`);

  // Generate a signed URL for uploading the file
  const [url] = await file.getSignedUrl({
    action: 'write',
    expires: Date.now() + expiresIn * 1000,
    contentType: contentType,
  });

  res.json({ url });
});

// Endpoint for the client to notify the server after upload
app.post('/upload-complete', async (req, res) => {
  const { sessionId } = req.body;

  if (!sessionId) {
    return res.status(400).json({ message: 'Session ID and file URL are required' });
  }

  function log(s) {
	console.log(sessionId + ' ' + JSON.stringify(uploadStatus[sessionId]) + ' ' + s);
  }

  // Track upload status as "processing"
  uploadStatus[sessionId] = { status: 'starting' };
  
  res.json({ message: 'File processing started' });

  log('processing uploaded file');

  try {
    // Extract the file name from the URL
    const filename = sessionId;

    // Step 1: Download the file from Google Cloud Storage
    const filePath = path.join(UPLOADS_FOLDER, sessionId, 'st.bin');
    const file = storage.bucket(BUCKET_NAME).file(`uploads/${filename}/st.bin`);
	fs.mkdirSync(path.join(UPLOADS_FOLDER, sessionId), { recursive: true });

    log('Downloading to ' + filePath + ' from ' + JSON.stringify(file));
    uploadStatus[sessionId] = { status: 'downloading' };

    // Download the file to local disk
    await file.download({ destination: filePath });

    log('Downloaded to ' + filePath + '.');
    uploadStatus[sessionId] = { status: 'preparing' };

    const template = path.join(PARAMS_FOLDER, 'bonanza.json');
    const paramsFileName = path.join(UPLOADS_FOLDER, sessionId, 'params.json');
    fs.copyFileSync(template, paramsFileName);
    
    const paramsObject = JSON.parse(fs.readFileSync(paramsFileName));
    paramsObject.label = sessionId;
    fs.writeFileSync(paramsFileName, JSON.stringify(paramsObject, null, 2), 'utf8');

    const outputPath = path.join(UPLOADS_FOLDER, sessionId, sessionId);

    log('Processing. Output ' + outputPath + ' Params ' + paramsFileName);
    log('Params ' + JSON.stringify(paramsObject));
    uploadStatus[sessionId] = { status: 'processing' };

    // Step 3: Wait for 2 minutes before continuing
	exec('npm run mod "' + filePath + '" "' + paramsFileName + '"', function() {

	    log('Finished processing. Generated ' + outputPath);
	    uploadStatus[sessionId] = { status: 'processed' };

	    fs.rmSync(path.join(UPLOADS_FOLDER, 'extracted'), { recursive: true, force: true });

	    // Step 5: Upload the copied folder to the bucket
	    uploadFolderToGCS(outputPath, `outputs/${sessionId}`);

	    uploadStatus[sessionId] = { status: 'uploaded'};
	    log('Uploaded to ' + `outputs/${sessionId}`);

	    // Step 6: Generate a new presigned URL for the copied file
	    //const [newPresignedUrl] = await storage.bucket(BUCKET_NAME).file(`uploads/${sessionId}/st.bin`);.getSignedUrl({
	    //  action: 'read',
	    //  expires: Date.now() + 3600 * 1000,  // 1 hour expiration
	    //});

	    //log('Generated presigned url ' + newPresignedUrl);

	    // Update upload status
	    //uploadStatus[sessionId] = { status: 'completed', presignedUrl: newPresignedUrl };

	    log('Cleaning ' + outputPath);
	    uploadStatus[sessionId] = { status: 'cleaning'};

    	// Step 2: Delete the file from the bucket
        log('Deleting file from bucket');
	    file.delete();

	    log('Completed');
	    uploadStatus[sessionId] = { status: 'completed'};
	});


  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error processing file' });
  }
});

// Endpoint to get the status of the file processing
app.get('/status', (req, res) => {
  const sessionId = req.query.sessionId;

  if (!sessionId || !uploadStatus[sessionId]) {
    return res.status(404).json({ message: 'Session ID not found' });
  }

  setTimeout(function() {
  	res.json(uploadStatus[sessionId]);
  }, 10000);
});

// Serve static files from the 'site' folder (if needed)
const staticPath = path.join(__dirname, 'site');
app.use(express.static(staticPath));

// Timeout configuration (5 minutes timeout for requests)
app.use((req, res, next) => {
  res.setTimeout(300000, () => {  // Timeout after 5 minutes
    console.log('Request timed out');
    res.sendStatus(408);  // Send HTTP 408 Request Timeout
  });
  next();  // Move to the next middleware
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
