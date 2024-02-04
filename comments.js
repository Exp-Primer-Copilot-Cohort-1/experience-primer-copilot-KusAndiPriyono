const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/comment') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });
    req.on('end', () => {
      // Process the comment data
      const comment = JSON.parse(body);
      // Save the comment to a database or perform any other necessary actions
      console.log('Received comment:', comment);
      // Send a response back to the client
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Comment received successfully');
    });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not found');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});