const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
var controllers = require('./server/controllers');

// API file for interacting with MongoDB
const api = require('./server/routes/api');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
//app.use(express.json());

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

//app.use(express.static(path.join(__dirname, 'public')));


// API location
app.use('/api', api);




// Send all other requests to the Angular app
/*
app.get('*', (req, res) => {
//    res.sendFile(path.join(__dirname, 'dist/index.html'));
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});


app.post('/newuser', (req, res) => {
    //    res.sendFile(path.join(__dirname, 'dist/index.html'));
        res.sendFile(path.join(__dirname, 'dist/index.html'));
    });
*/   


// Init the routes for all controllers
controllers.init(app);
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.get('/itemlist', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});


app.get("/addresslist", function (req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.get("/addresses", function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.get("/indextables", function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.get("/indexoverlays", function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.get("/indexemitters", function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.get("/indexpassengers", function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});



app.get("/*.svg", function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));
