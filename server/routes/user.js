const router = require('express').Router()
const { UserController } = require('../controllers/user_controller')

router.post('/google_login', UserController.google_login)

router.post('/login', UserController.login)
router.post('/register', UserController.register)

module.exports = router