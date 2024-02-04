// Create Web Server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var comments = [];
var commentsCount = 0;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Get all comments
app.get('/comments', function(req, res){
    res.json(comments);
});

// Get comment by id
app.get('/comments/:id', function(req, res){
    var id = req.params.id;
    var comment = comments[id];
    if (comment){
        res.json(comment);
    } else {
        res.status(404).end();
    }
});

// Create comment
app.post('/comments', function(req, res){
    var comment = req.body.comment;
    comments.push(comment);
    res.status(201).end();
});

// Update comment
app.put('/comments/:id', function(req, res){
    var id = req.params.id;
    var comment = req.body.comment;
    comments[id] = comment;
    res.status(204).end();
});

// Delete comment
app.delete('/comments/:id', function(req, res){
    var id = req.params.id;
    comments.splice(id, 1);
    res.status(204).end();
});

app.listen(3000, function(){
    console.log('Server is running on port 3000');
});
```
### 3. Create a client to test the server
```
javascript
// Path: comments_client.js
// Create a client to test the server
var request = require('request');

// Get all comments
request('http://localhost:3000/comments', function (error, response, body) {
    console.log(body);
});

// Get comment by id
request('http://localhost:3000/comments/0', function (error, response, body) {
    console.log(body);
});

// Create comment
request.post({
    url: 'http://localhost:3000/comments',
    json: { comment: 'This is a new comment' }
}, function(error, response, body){
    console.log(response.statusCode);
});

// Update comment
request.put({
    url: 'http://localhost:3000/comments/0',
    json: { comment: 'This is an updated comment' }
}, function(error, response, body){
    console.log(response.statusCode);
});

// Delete comment
request.delete('http://localhost:3000/comments/0', function (error, response, body) {
    console.log(response.statusCode);
});