const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files from '../site'
const staticPath = path.join(__dirname, 'site');
app.use(express.static(staticPath));

// Redirect all other routes to index.html (optional, useful for SPAs)
app.get('*', (req, res) => {
  res.sendFile(path.join(staticPath, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
