const { Recipe, Ingredient, RecipeIngredient } = require('../models')

class RecipeController {
      static getRecipe(req, res) {
            Recipe.findAll({include: [RecipeIngredient]}) 
                  .then(data => {
                        res.status(200).json(data)
                  })
                  .catch(err => {
                        res.status(500).json(err)
                  })
      }

      static getOneRecipe(req, res) {
            let id = req.params.id

            Recipe.findOne({
            where: {id},
            include: [RecipeIngredient]
            }) 
            .then(data => {
                  res.status(200).json(data)
            })
            .catch(err => {
                  res.status(500).json(err)
            })
      }
      

      static createRecipe(req, res) {
            let newRecipe = {
                  req.body.
            }

      }

      static updateRecipe() {

      }

      static deleteRecipe() {

      }
}

module.exports = RecipeController