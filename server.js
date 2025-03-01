const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');  // Import the CORS middleware
const { Storage } = require('@google-cloud/storage');

const app = express();
const PORT = process.env.PORT || 8080;

// Initialize Google Cloud Storage client
const storage = new Storage();
const BUCKET_NAME = 'shadow-tower-randomizer';

// Enable CORS for all routes
app.use(cors());  // This will allow all origins. You can configure it for specific origins if needed.

const corsOptions = {
  origin: '*',  // Allow all origins (use specific origin if needed)
  methods: ['GET', 'POST', 'OPTIONS'],  // Allow GET, POST, and OPTIONS methods
  allowedHeaders: ['Content-Type', 'Authorization'],  // Allowed headers
};

// Middleware to parse the body for multipart data (before handling the form data)
app.use(express.urlencoded({ extended: true }));  // For parsing application/x-www-form-urlencoded
app.use(express.json());  // For parsing JSON bodies (if needed)

// Route to generate a presigned URL for file upload
app.get('/generate-presigned-url', async (req, res) => {
  const filename = req.query.filename;
  const contentType = req.query.contentType;
  const expiresIn = 5 * 60;  // URL expiry time in seconds (5 minutes)

  const file = storage.bucket(BUCKET_NAME).file(`uploads/${Date.now()}-${filename}`);

  // Generate a signed URL for uploading the file
  try {
    const [url] = await file.getSignedUrl({
      action: 'write', // Allow write access (for uploading)
      expires: Date.now() + expiresIn * 1000,
      contentType: contentType,  // Enforce content type validation
    });

    res.json({ url });
  } catch (error) {
    console.error('Error generating presigned URL:', error);
    res.status(500).json({ message: 'Error generating presigned URL', error: error.message });
  }
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

// Handle OPTIONS preflight requests (for CORS)
app.options('*', cors(corsOptions));  // Enable CORS preflight for all routes

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
