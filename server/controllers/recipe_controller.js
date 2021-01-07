const { Recipe, Ingredient, RecipeIngredient } = require('../models')
const axios = require('axios')

class RecipeController {
      static getRecipe(req, res, next) {
            Recipe.findAll() 
                  .then(data => {
                        res.status(200).json(data)
                  })
                  .catch(err => {
                        next("internalError")
                        // res.send(err)
                  })
      }

      static getOneRecipe(req, res, next) {
            let id = req.params.id

            Recipe.findOne({
            where: {id},
            include: [RecipeIngredient]
            }) 
            .then(data => {
                  res.status(200).json(data)
            })
            .catch(err => {
                  next("internalError")
            })
      }
      

      static createRecipe(req, res, next) {
            let newRecipe = {
                  name: req.body.name,
                  description: req.body.description,
                  step: req.body.step
            }

            let newIngredient = {
                  name: req.body.ingredientName
            }
            
            Recipe.create(newRecipe) 
                  .then(data => {
                        res.status(201).json(data)
                        // res.send(data)
                        // console.log(data);
                         return Ingredient.create(newIngredient)
                  })
                  .then(data => {

                        
                  })
                  .catch(err => {
                        next("SequelizeValidationError")
                        // res.send(err)
                  })

      }

      static updateRecipe(req, res, next) {
            let updatedRecipe = {
                  name: req.body.name,
                  description: req.body.description,
                  steps: req.body.steps
            }

            Recipe.update(updatedRecipe)
                  .then(data => {
                        res.status(200).json(data)
                  })
                  .catch(err => {
                        next("SequelizeValidationError")
                  })
      }

      static deleteRecipe(req, res, next) {
            let id = req.params.id
            Recipe.destroy({where: {id}})
                  .then( data => {
                        res.status(200).json({message: "recipe delete successfully"})
                  })
                  .catch(err => {
                        next("notFound")
                  })
      }

      static searchRecipe(req, res, next) {
            let meal = req.query.s
            
            let foodRecipe = `https://api.edamam.com/search?q=chicken&app_id=23daa481&app_key=2d7e52cf491550c383b2b56ae595fd54&from=0&to=3&calories=591-722&health=alcohol-free`

            axios.get(foodRecipe)
                  .then(response => {
                        res.send(response)
                  })
                  .catch(err => {
                        res.send(err)
                  })
      }
}

module.exports = RecipeController