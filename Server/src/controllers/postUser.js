const User = require("../DB_connection.js")

const postUser = async(req,res) => {
    try {
        const {email, password} = req.body;
        if(email.length === 0 || password.length === 0){
            return res.status(400).json('la contraseña y/o el email no puedne estar vacio')
        }
        if(!email || !password){
            return res.status(400).json('Debe de contener una contraseña y/o email')
        }
        const {user, created} = await User.findOrCreate({
            where:{
                email:email,
                password:password
            }
        })
        return res.send(user)

    } catch (error) {
        res.status(500).json(error.message)
    }

}

module.exports = postUser;

