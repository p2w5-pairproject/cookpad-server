const { User } = require('../models')

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

            let user = await User.findOne({
                where: {
                    email
                }
            })

            if (!user) {
                user = await User.create({
                    email,
                    password: Math.random()*100+'randompassword'
                })
            }

            const _payload = {
                id: user.id,
                email: user.email
            }

            const access_token = generateToken(_payload)
            return res.status(200).json({access_token})

        } catch(error) {
            next(error)
        }

    }
}

module.exports = { UserController }