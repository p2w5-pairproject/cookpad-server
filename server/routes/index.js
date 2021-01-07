const router = require('express').Router()
const userRouter = require('./user')

router.get('/', (req, res) => {
    res.send('Welcome to Cookpad!')
})

router.use(userRouter)

module.exports = router