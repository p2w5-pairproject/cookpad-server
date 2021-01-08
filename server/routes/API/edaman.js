const router = require('express').Router()
const APIController = require('../../controllers/API/edaman_controller')

router.get('/search', APIController.searchRecipe)

module.exports = router