const router = require('express').Router()
const recipe = require('./recipe-router')
const ingredient = require('./ingredient-router')
const userRouter = require('./user')

router.get('/', (req, res) => {
    res.send('Welcome to Cookpad!')
})
router.use('/recipes', recipe)
router.use('/ingredients', ingredient )

router.use(userRouter)

module.exports = router