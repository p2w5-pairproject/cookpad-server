const router = require('express').Router()
const { UserController } = require('../controllers/user_controller')

router.post('/login', UserController.login)
router.post('/register', UserController.register)

module.exports = router