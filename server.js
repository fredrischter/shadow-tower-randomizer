const express = require('express');
const fs = require('fs');
const path = require('path');
const { Storage } = require('@google-cloud/storage');
const uuid = require('uuid');
const { promisify } = require('util');

const app = express();
const PORT = process.env.PORT || 8080;

// Initialize Google Cloud Storage client
const storage = new Storage();
const BUCKET_NAME = 'shadow-tower-randomizer';
const GENERATED_FOLDER = path.join(__dirname, 'generated');

// Create a simple in-memory store to track the status of uploads
let uploadStatus = {}; // stores sessionId -> { status: "processing"/"completed", presignedUrl: "..." }

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Generate a presigned URL for file upload
app.get('/generate-presigned-url', async (req, res) => {
  const filename = req.query.filename;
  const contentType = req.query.contentType;
  const expiresIn = 5 * 60;  // URL expiry time in seconds (5 minutes)

  const file = storage.bucket(BUCKET_NAME).file(`uploads/${filename}`);

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

  // Track upload status as "processing"
  uploadStatus[sessionId] = { status: 'processing' };
  
  res.json({ message: 'File processing started' });

  console.log(sessionId + ' ' + JSON.stringify(uploadStatus[sessionId]) + ' processing uploaded file');

  try {
    // Extract the file name from the URL
    const filename = sessionId;

    // Step 1: Download the file from Google Cloud Storage
    const filePath = path.join(GENERATED_FOLDER, sessionId, filename);
    const file = storage.bucket(BUCKET_NAME).file(`uploads/${filename}`);
	fs.mkdirSync(path.join(GENERATED_FOLDER, sessionId), { recursive: true });

    console.log(sessionId + ' ' + JSON.stringify(uploadStatus[sessionId]) + ' Downloading to ' + filePath + ' from ' + JSON.stringify(file));

    // Download the file to local disk
    await file.download({ destination: filePath });

    console.log(sessionId + ' ' + JSON.stringify(uploadStatus[sessionId]) + ' Downloaded to ' + filePath + '. Deleting file from bucket');

    // Step 2: Delete the file from the bucket
    await file.delete();

    console.log(sessionId + ' ' + JSON.stringify(uploadStatus[sessionId]) + ' Processing.');

    // Step 3: Wait for 2 minutes before continuing
    await promisify(setTimeout)(2 * 60 * 1000);  // 2 minutes delay

    // Step 4: Copy the downloaded file
    const copiedFilePath = path.join(GENERATED_FOLDER, sessionId, `copy-${filename}`);
    fs.copyFileSync(filePath, copiedFilePath);

    console.log(sessionId + ' ' + JSON.stringify(uploadStatus[sessionId]) + ' Finished processing. Generated ' + copiedFilePath);

    // Step 5: Upload the copied file back to the bucket
    const copiedFile = storage.bucket(BUCKET_NAME).file(`uploads/copy-${filename}`);
    await copiedFile.save(fs.readFileSync(copiedFilePath));

    console.log(sessionId + ' ' + JSON.stringify(uploadStatus[sessionId]) + ' Uploaded to bucket ' + copiedFile);

    // Step 6: Generate a new presigned URL for the copied file
    const [newPresignedUrl] = await copiedFile.getSignedUrl({
      action: 'read',
      expires: Date.now() + 3600 * 1000,  // 1 hour expiration
    });

    console.log(sessionId + ' ' + JSON.stringify(uploadStatus[sessionId]) + ' Generated presigned url ' + newPresignedUrl);

    // Update upload status
    uploadStatus[sessionId] = { status: 'completed', presignedUrl: newPresignedUrl };

    console.log(sessionId + ' ' + JSON.stringify(uploadStatus[sessionId]) + ' Completed');

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

  res.json(uploadStatus[sessionId]);
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
