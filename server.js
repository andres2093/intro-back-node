const express = require('express');
const path = require('path');

var app = express();
var port = 4444;

app.get('/sum', function (req, res) {
    res.end("Este tipo de peticio no esta disponible");
})

app.get('/profile', function (req, res) {
    const name = req.query.name;
    const city = req.query.city;

    res.end("Hola " + name + " de " + city);
});

app.post('/sum', function (req, res) {
    const first = parseInt(req.query.first);
    const second = parseInt(req.query.second);

    const sum = first + second;

    res.end("El resultado es: " + sum);
})

app.listen(port);
console.log("http://localhost:" + port);


//////////////////////////////////////////

app.use(express.static(__dirname + '/public/img'));
app.use(express.static(__dirname + '/public/view'));

app.get('/', function (req, res) {
    res.sendFile('/public/view/index.html')
})

app.get('/home', function(req, res){
    res.sendFile(path.join(__dirname + '/public/view/home.html'));
})

app.get('/about', function(req, res){
    res.sendFile(path.join(__dirname + '/public/view/about.html'));
})