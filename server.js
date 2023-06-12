const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Determine the file path based on the URL
    let filePath = path.join(__dirname, req.url);

    // If the URL is a directory, serve the 'index.html' file by default
    if (fs.statSync(filePath).isDirectory()) {
        filePath = path.join(filePath, 'index.html');
    }

    // Read the file
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // File not found
                res.writeHead(404);
                res.end('404 - File Not Found');
            } else {
                // Other error
                res.writeHead(500);
                res.end('500 - Internal Server Error');
            }
        } else {
            // File found, send the content
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        }
    });
});

const port = 3000; // Change the port number if needed
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
