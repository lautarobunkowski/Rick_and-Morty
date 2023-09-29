// const http = require("http");
// const controller = require('./controllers/getCharById.js')

// const PORT = 3001;

// // const searchCharacter = (id, array) => {
// //     return array.find(character => character.id === Number(id))
// // }

// http.createServer((req,res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     if (req.url.startsWith("/rickandmorty/character/")) {
//         const id = req.url.split('/').pop();
//         controller.getCharById(res, id)
//     }

//     // if(req.url.startsWith("/rickandmorty/character/")){
//     //             const id = req.url.split('/').pop();
//     //             const character = searchCharacter(id, data);
//     //             if (character) {
//     //                 res.writeHead(200, {'Content-Type': 'application/json'});
//     //                 return res.end(JSON.stringify(character));
//     //             } else {
//     //                 // res.writeHead(400, {'Content-Type': 'application/json'});
//     //                 return res.end(JSON.stringify({
//     //                     error: 'Character not found'
//     //                 }));
//     //             }
//     // } 
//     // res.writeHead(404, {'Content-Type': 'text/plain'});
//     // return res.end('Page not Found');

// }).listen(PORT, 'localhost')

const server = require("./app.js");
const { conn } = require("./DB_connection.js");
require('dotenv').config();
const PORT = process.env.PORT || 3001;

conn.sync({force: true})
.then(() => {
    server.listen(PORT, () => {
        console.log("Server raised in port: " + PORT)
    })
})

