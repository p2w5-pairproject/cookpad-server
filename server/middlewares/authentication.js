const { cekToken } = require("../helpers/jwt")
const { User } = require('../models')

const authentication = (req, res, next) => {
    try {
        const { access_token } = req.headers
        if (access_token) {
            let decoded = cekToken(access_token)
            req.userData = decoded
            User
                .findByPk(req.userData.id)
                .then(data => {
                    !data && next({name: 'notFound'})
                    next()
                })
                .catch(err => next(err))
        }else {
            next({name: 'notAuthorize'})
        }
    } catch (err) {
        next(err)
    }
}

module.exports = authentication