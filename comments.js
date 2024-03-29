// Create web server
// http://localhost:8080/comments
// http://localhost:8080/comments/1
// http://localhost:8080/comments/2

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/comments', (req, res) => {
    res.send('List of comments');
});

app.get('/comments/:id', (req, res) => {
    res.send('Comment ' + req.params.id);
});

app.listen(8080, () => {
    console.log('Server started at http://localhost:8080');
});

// Path: comments.js
// Create web server
// http://localhost:8080/comments
// http://localhost:8080/comments/1
// http://localhost:8080/comments/2
// http://localhost:8080/comments/3

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/comments', (req, res) => {
    res.send('List of comments');
});

app.get('/comments/:id', (req, res) => {
    res.send('Comment ' + req.params.id);
});

app.listen(8080, () => {
    console.log('Server started at http://localhost:8080');
});

// Path: comments.js
// Create web server
// http://localhost:8080/comments
// http://localhost:8080/comments/1
// http://localhost:8080/comments/2
// http://localhost:8080/comments/3
// http://localhost:8080/comments/4

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/comments', (req, res) => {
    res.send('List of comments');
});

app.get('/comments/:id', (req, res) => {
    res.send('Comment ' + req.params.id);
});

app.listen(8080, () => {
    console.log('Server started at http://localhost:8080');
});

// Path: comments.js
// Create web server
// http://localhost:8080/comments
// http://localhost:8080/comments/1
// http://localhost:8080/comments/2
// http://localhost:808