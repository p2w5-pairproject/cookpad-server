const express = require('express')
const router = express.Router()
const IngredientController = require('../controllers/ingredient-controller')

router.get('/', IngredientController.getIngredient)
router.post('/', IngredientController.createIngredient)
router.put('/:id', IngredientController.updateIngredient)
router.delete('/:id', IngredientController.deleteIngredient )

module.exports = router