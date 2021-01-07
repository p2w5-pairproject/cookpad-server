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
}

module.exports = { UserController }