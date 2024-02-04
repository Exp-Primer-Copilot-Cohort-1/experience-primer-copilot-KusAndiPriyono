// Create Web Server
// Create a web server that's going to send a response of "Hello World" for every request it receives. The server should listen on port 3000.


const http = require('http');
const server = http.createServer((req, res) => {
  res.write('Hello World');
  res.end();
});