const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // Read the PDF file
    fs.readFile('sample.pdf', (err, data) => {
        if (err) {
            // Handle the error if the file couldn't be read
            res.statusCode = 500;
            res.end('Error reading the file');
            return;
        }

        // Set the response headers
        res.setHeader('Content-Type', 'application/pdf');

        // Send the PDF file as the response
        res.statusCode = 200;
        res.end(data);
    });
});

const port = 3000; // Specify the port number you want to use
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});