const User = require("../DB_connection")

const login = (req,res) => {
    try {
        const {email, password} = req.query;
        if(!email || !password){
            return res.status(400).send({message:"Faltan datos"})
        }
        
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = login;