const { User } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

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
}

module.exports = { UserController }