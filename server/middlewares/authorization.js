const { Recipe } = require('../models')

const authorization = (req, res, next) => {
    try {
        const { id } = req.params
        const userId = req.userData.id
        Recipe
            .findByPk(+id)
            .then(data => {
                !data ? next({name: 'notFound'}) :
                userId !== data.UserId ? next({name: 'notAuthorize'}) : //Forbidden Error
                next()
            })
            .catch(err => next(err))
    } catch (err) {
        next(err)
    }
}

module.exports = authorization