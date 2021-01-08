const router = require('express').Router()
const APIController = require('../../controllers/API/zomato_controller')

router.get('/resto/search', APIController.getResto)

module.exports = router