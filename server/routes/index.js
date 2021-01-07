const router = require('express').Router()
const recipe = require('./recipe-router')
const api = require('./api')
const user = require('./user')
const authentication = require('../middlewares/authentication')

router.get('/', (req, res) => {
    res.send('Welcome to Cookpad!')
})

router.use(user)
router.use(authentication)
router.use('/', api)
router.use('/recipes', recipe)

module.exports = router