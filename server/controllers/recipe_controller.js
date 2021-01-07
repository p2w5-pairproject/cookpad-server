const { Recipe } = require('../models')
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
            where: {id}
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
                  step: req.body.step,
                  ingredient: req.body.ingredient
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
                  steps: req.body.steps,
                  ingredient: req.body.ingredient
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
                  console.log(meal);
            let foodRecipe = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`

            axios.get(foodRecipe)
                  .then(response => {
                        // console.log(response.data);
                        let result = response.data

                        let arr = []
                              result.forEach(el => {
                                    result.push({
                                          name: el.label,
                                          description: el.label,
                                          ingredient: el.ingredientLines,

                                    })
                              })
                        res.send(response.data)
                  })
                  .catch(err => {
                        res.send(err)
                  })
      }
}

module.exports = RecipeController