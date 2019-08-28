var express = require('express');
var app = express();
app.use(express.static('css'))
app.use(express.static('js'))
app.use(express.static('img'))
app.use(express.static('fonts'))
app.use(express.static('font-awesome-4.1.0'))
app.use(express.static('feedback'))
app.use(express.static('docs'))
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/home.html'));
});

app.listen(8080);