const express = require('express')
const router = express.Router()
const RecipeController = require('../controllers/recipe_controller')
const authorization = require('../middlewares/authorization')

router.post('/', RecipeController.createRecipe)
router.get('/', RecipeController.getRecipe)
router.get('/:id', authorization, RecipeController.getOneRecipe) //lihat recipe user lain atau recipe senidiri
router.put('/:id', authorization, RecipeController.updateRecipe)
router.delete('/:id', authorization, RecipeController.deleteRecipe )


module.exports = router