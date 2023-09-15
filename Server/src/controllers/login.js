const users = require("../utils/users")

const login = (req, res) => {
    const {email, password} = req.query;

    const prueba = users.some(user => user.email === email && user.password === password)
    if(prueba) return res.status(200).json({access: true})
    return res.status(401).json({access: false})
}

module.exports = login
