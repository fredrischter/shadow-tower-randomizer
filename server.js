const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const uuid = require('uuid');

const app = express();
const PORT = process.env.PORT || 8080;

// Storage configuration for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log('Request Body (inside destination):', req.body);  // Log the request body inside multer's destination function

    const sessionId = req.body.sessionId; // Retrieve sessionId from the request body
    if (!sessionId) {
      return cb(new Error('Session ID is required'), null);  // Return an error if sessionId is missing
    }

    // Create the directory to store uploaded files, if it doesn't exist
    const uploadDir = path.join(__dirname, 'generated', sessionId);
    fs.mkdirSync(uploadDir, { recursive: true });  // Create directory recursively
    cb(null, uploadDir);  // Specify the directory to store the uploaded file
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);  // Use the original file name
  }
});

// Multer instance to handle file uploads
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 700 * 1024 * 1024  // Set a file size limit of 700MB
  }
});

// Middleware to parse the body for multipart data (before multer processes the form data)
app.use(express.urlencoded({ extended: true }));  // For parsing application/x-www-form-urlencoded
app.use(express.json());  // For parsing JSON bodies (if needed)

// Handle file upload request
app.post('/upload', upload.single('file'), (req, res) => {
  console.log('Uploaded File:', req.file);  // Log the uploaded file details
  console.log('Session ID:', req.body.sessionId);  // Log sessionId

  // Return an error if no file or sessionId is present
  if (!req.file || !req.body.sessionId) {
    return res.status(400).json({ message: 'No file uploaded or missing session ID' });
  }

  res.json({
    message: 'File uploaded successfully',
    file: req.file,
    sessionId: req.body.sessionId
  });
});

// Serve static files from the 'site' folder
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
