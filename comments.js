// create web server

const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
    res.send('GET request to the comments page');
});


app.post('/comments', (req, res) => {
    res.send('POST request to the comments page');
});

app.put('/comments', (req, res) => {
    res.send('PUT request to the comments page');
});

app.delete('/comments', (req, res) => {
    res.send('DELETE request to the comments page');
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});