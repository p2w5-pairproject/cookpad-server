const router = require('express').Router()
const recipe = require('./recipe-router')

router.get('/', (req, res) => {
    res.send('Welcome to Cookpad!')
})
router('/recipes', recipe)

module.exports = router