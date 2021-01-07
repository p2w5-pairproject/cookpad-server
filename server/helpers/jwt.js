const jwt = require('jsonwebtoken');
const JWT_KEY = process.env.JWT_KEY

const generateToken = (payload) => { //access_token
    return jwt.sign(payload, JWT_KEY)
}

const cekToken = (token) => { //decoded
    return jwt.verify(token, JWT_KEY)
}

module.exports = { generateToken, cekToken }