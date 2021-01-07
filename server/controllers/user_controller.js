const { User } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')
const {OAuth2Client} = require('google-auth-library');

class UserController {
    static register(req, res, next) {
        const { email, password, name } = req.body
        User
            .create({ email, password, name })
            .then(newUser => {
                const { id, email, name } = newUser
                res.status(201).json({ id, email, name })
            })
            .catch(err => res.status(400).json(err))
    }

    static login(req, res, next) {
        const { email, password } = req.body
        User
            .findOne({
                where: { email }
            })
            .then(user => {
                if (comparePassword(password, user.password)) {
                    const { id, email, name } = user
                    const access_token = generateToken({ id, email, name })
                    res.status(200).json({ id, email, name, access_token })
                }else {
                    next({name: 'errorAuth'})
                }
            })
            .catch(err => next({name: 'errorAuth'}))
    }

    static async google_login(req, res, next) {
        try {
            const {id_token} = req.body

            const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
            const ticket = await client.verifyIdToken({
                idToken: id_token,
                audience: process.env.GOOGLE_CLIENT_ID,
            });

            const payload = ticket.getPayload();
            let email = payload.email
            let name = payload.name

            let user = await User.findOne({
                where: {
                    email
                }
            })

            if (!user) {
                user = await User.create({
                    email,
                    password: Math.random()*100+'randompassword',
                    name: name
                })
            }

            const _payload = {
                id: user.id,
                email: user.email,
                name: user.name
            }

            const access_token = generateToken(_payload)
            return res.status(200).json({
                id: user.id,
                email: user.email,
                name: user.name,
                access_token: access_token
            })

        } catch(error) {
            next(error)
        }
    }


}

module.exports = { UserController }