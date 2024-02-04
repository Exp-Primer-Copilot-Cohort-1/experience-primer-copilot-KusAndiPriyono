// create web erver for comment
// 3. create server
// 4. listen to port
// 5. create routes

// 3. create server
const express = require('express');
const app = express();

// 5. create routes
// 5.1 create get route
app.get('/comments', (req, res) => {
    res.send('GET request to the comments page');
});

// 5.2 create post route
app.post('/comments', (req, res) => {
    res.send('POST request to the comments page');
});

// 5.3 create put route
app.put('/comments', (req, res) => {
    res.send('PUT request to the comments page');
});

// 5.4 create delete route
app.delete('/comments', (req, res) => {
    res.send('DELETE request to the comments page');
});

// 4. listen to port
app.listen(3000, () => {
    console.log('Server started on port 3000');
});