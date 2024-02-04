// Create Web Server
// // ##############################

// // Importing Module
// const express = require('express');
// const app = express();
// const path = require('path');
// const bodyParser = require('body-parser');
// const fs = require('fs');
// const { v4: uuidv4 } = require('uuid');
// const { json } = require('body-parser');

// // Handle Request
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // Set View Engine
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// // Set Static Folder
// app.use(express.static(path.join(__dirname, 'public')));

// // Get Data
// app.get('/comments', (req, res) => {
//     fs.readFile('comments.json', 'utf-8', (err, data) => {
//         if (err) throw err;
//         let comments = JSON.parse(data);
//         res.render('comments', { comments: comments });
//     });
// });

// // Post Data
// app.post('/comments', (req, res) => {
//     fs.readFile('comments.json', 'utf-8', (err, data) => {
//         if (err) throw err;
//         let comments = JSON.parse(data);
//         comments.push({ id: uuidv4(), name: req.body.name, comment: req.body.comment });
//         fs.writeFile('comments.json', JSON.stringify(comments), (err) => {
//             if (err) throw err;
//             res.redirect('/comments');
//         });
//     });
// });

// // Listen Port
// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });