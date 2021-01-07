const express = require('express')
const router = express.Router()
const RecipeController = require('../controllers/recipe_controller')


router.get('/', RecipeController.getRecipe)
router.get('/:id', RecipeController.getOneRecipe) //lihat recipe user lain atau recipe senidiri
router.post('/', RecipeController.createRecipe)
router.put('/:id', RecipeController.updateRecipe)
router.delete('/:id', RecipeController.deleteRecipe )


module.exports = router