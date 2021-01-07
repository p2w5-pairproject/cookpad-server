const router = require('express').Router()
const APIController = require('../controllers/api_controller')

router.get('/search', APIController.searchRecipe)

module.exports = router