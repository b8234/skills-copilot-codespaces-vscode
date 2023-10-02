// Create web server
// Run: node comments.js
// Note: This example requires the express module: npm install express

var express = require('express');
var app = express();

// Serve static files from the directory public
app.use(express.static('public'));

// Parse JSON-encoded bodies
app.use(express.json());

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Create a new comment
app.post('/comments', function(request, response) {
  // Print the content of the request body
  console.dir(request.body);
  response.send('Your comment was received');
});

// Start the server
app.listen(8080);
console.log('Server is listening on port 8080');