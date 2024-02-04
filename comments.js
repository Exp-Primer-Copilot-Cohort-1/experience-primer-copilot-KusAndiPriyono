// Create Web Server
// 1. Load the http module
var http = require('http');
var fs = require('fs');
var url = require('url');
var comments = [];
// 2. Create a server
http.createServer(function(request, response) {
  // 3. Parse the request containing file name
  var pathname = url.parse(request.url).pathname;
  // 4. Read the requested file content from file system
  console.log("Request for " + pathname + " received.");
  if (pathname === "/") {
    fs.readFile("index.html", function(err, data) {
      if (err) {
        console.log(err);
        response.writeHead(404, {
          'Content-Type': 'text/html'
        });
      } else {
        response.writeHead(200, {
          'Content-Type': 'text/html'
        });
        response.write(data.toString());
      }
      response.end();
    });
  } else if (pathname === "/comments") {
    if (request.method === "POST") {
      var postData = "";
      request.setEncoding("utf8");
      request.addListener("data", function(postDataChunk) {
        postData += postDataChunk;
      });
      request.addListener("end", function() {
        var comment = JSON.parse(postData);
        comments.push(comment);
        response.writeHead(200, {
          'Content-Type': 'application/json'
        });
        response.end(JSON.stringify(comments));
      });
    } else if (request.method === "GET") {
      var commentString = JSON.stringify(comments);
      response.writeHead(200, {
        'Content-Type': 'application/json'
      });
      response.end(commentString);
    }
  } else {
    fs.readFile(pathname.substr(1), function(err, data) {
      if (err) {
        console.log(err);
        response.writeHead(404, {
          'Content-Type': 'text/html'
        });
      } else {
        response.writeHead(200, {
          'Content-Type': 'text/html'
        });
        response.write(data.toString());
      }
      response.end();
    });
  }
}).listen(8080);