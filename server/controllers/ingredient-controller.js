const { Ingredient } = require('../models')


class IngredientController {
      static getIngredient(req, res, next) {
            Ingredient.findAll() 
                  .then(data => {
                        res.status(200).json(data)
                  })
                  .catch(err => {
                        next("internalError")
                        // res.send(err)
                  })
      }
      

      static createIngredient(req, res, next) {
            let newIngredient = {
                  name: req.body.ingredientName
            }
            
            Ingredient.create(newIngredient) 
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

      static updateIngredient(req, res, next) {
            let updatedIngredient = {
                  name: req.body.name,
                  description: req.body.description,
                  steps: req.body.steps
            }

            Ingredient.update(updatedRecipe)
                  .then(data => {
                        res.status(200).json(data)
                  })
                  .catch(err => {
                        next("SequelizeValidationError")
                  })
      }

      static deleteIngredient(req, res, next) {
            let id = req.params.id
            Ingredient.destroy({where: {id}})
                  .then( data => {
                        res.status(200).json({message: "recipe delete successfully"})
                  })
                  .catch(err => {
                        next("notFound")
                  })
      }
}

module.exports = IngredientController