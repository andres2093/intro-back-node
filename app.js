//Imprimir en consola
// console.log("Hola mundo!");
////////////////////////////////////////////

//Crear un archivo txt con un texto
// const fs = require('fs');

// fs.writeFile('hola.txt', "Hola mundo!", (err) => {
//     if (err) {
//         return console.log(err);
//     }

//     console.log("El archivo fur creado correctamente");
// })

// fs.readFile('./hola.txt', 'utf8', function (err, data) {
//     if (err) {
//         return console.log(err);
//     }

//     console.log(data);
// })
////////////////////////////////////////////

//Crear un archivo txt con un texto
// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 4444;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text-plain');
//     res.end('Hola mundo!');
// });

// server.listen(port, hostname, () => {
//     console.log(`http://${hostname}:${port}`)
// });
////////////////////////////////////////////

//Generar numero aleatorio
// const http = require('http');
// const url = require('url');

// const hostname = '127.0.0.1';
// const port = 4444;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text-plain');

//     var params = url.parse(req.url, true).query;
//     var number = params.number;

//     var numInput = new Number(number);
//     var numRandom = new Number(Math.random() * numInput).toFixed(0);

//     res.end("El numero es: " + numRandom);
// });

// server.listen(port, hostname, () => {
//     console.log(`http://${hostname}:${port}`)
// });
////////////////////////////////////////////

// Debug
// console.time("llave");

// var c = "";

// for(var i = 0; i < 1000000; i++){
//     c += i;
// }

// console.timeEnd('llave');
////////////////////////////////////////////