// const axios = require("axios");

// const getCharById = (res, id) => {
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(response => {
//         const character = {
//             "id": response.data.id,
//             "name": response.data.name,
//             "gender": response.data.gender,
//             "species": response.data.species,
//             "origin": response.data.origin,
//             "image": response.data.image,
//             "status": response.data.status
//         }
//         res.writeHead(200, {'Content-Type': 'application/json'});
//         return res.end(JSON.stringify(character));
//     })
//     .catch(error => {
//         res.writeHead(500, {'Content-Type': 'text/plain'});
//         return res.end(error.message);
//     })
// }


// module.exports = {
//     getCharById
// }


// const getCharById = (req, res) => {
//     const {id} = req.params;
//     axios.get(URL+id)
//     .then(response => {
//         if(response.data){
//             const {id, status, name, species, origin, image, gender} = response.data;
//             return res.status(200).json({id, status, name, species, origin, image, gender})
//         }
//         return res.status(404).send(`Not found character with id ${id}`)
//     })
//     .catch(error => res.status(500).send(error.message))
// }

const axios = require("axios")
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
    const {id: idReq} = req.params;
    try {
        const {data} = await axios.get(URL+idReq)

        const {id, status, name, species, origin, image, gender} = data;
        res.status(200).json({id, status, name, species, origin, image, gender})
    } catch (error) {
        res.status(error.response.status).json({error: error.message})
    }
}

module.exports = getCharById