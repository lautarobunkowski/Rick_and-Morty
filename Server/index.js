const server = require("./src/app.js");
const { conn } = require("./src//DB_connection.js");
require('dotenv').config();
const PORT = process.env.PORT;

// conn.sync({force: true})
// .then(() => {
//     server.listen(PORT, () => {
//         console.log("Server raised in port: " + PORT)
//     })
// })

server.listen(PORT, () => {
    console.log("Server raised in port: " + PORT)
})