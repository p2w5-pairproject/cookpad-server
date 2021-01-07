const { Recipe } = require('../models')

class RecipeController {
      static getRecipe(req, res, next) {
            Recipe.findAll() 
                  .then(data => {
                        res.status(200).json(data)
                  })
                  .catch(err => {
                        next(err)
                  })
      }

      static getOneRecipe(req, res, next) {
            let id = +req.params.id
            Recipe.findByPk(id)
                  .then(data => {
                        data ? res.status(200).json(data) :
                        next({ name: "notFound" })
                  })
                  .catch(err => {
                        next(err)
                  })
      }
      
      static createRecipe(req, res, next) {
            let newRecipe = {
                  name: req.body.name,
                  description: req.body.description,
                  step: req.body.step,
                  ingredient: req.body.ingredient,
                  UserId: req.userData.id
            }
            
            Recipe.create(newRecipe) 
                  .then(data => {
                        res.status(201).json(data)
                  })
                  .catch(err => {
                        next(err)
                  })
      }

      static updateRecipe(req, res, next) {
            let updatedRecipe = {
                  name: req.body.name,
                  description: req.body.description,
                  step: req.body.step,
                  ingredient: req.body.ingredient
            }

            Recipe.update(updatedRecipe, {
                        where: {id: +req.params.id},
                        returning: true,
                        plain:true
                  })
                  .then(data => {
                        const { id, name, description, step, ingredient } = data[1].dataValues
                        res.status(200).json({ id, name, description, step, ingredient })
                  })
                  .catch(err => {
                        next(err)
                  })
      }

      static deleteRecipe(req, res, next) {
            let id = req.params.id
            Recipe.destroy({
                        where : { id },
                        returning: true,
                  })
                  .then(data => {
                        data ? res.status(200).json({
                              message: 'recipe delete successfully'
                        }) :
                        next({name: 'notFound'})
                        res.status(200).json({message: "recipe delete successfully"})
                  })
                  .catch(err => {
                        next(err)
                  })
      }

}

module.exports = RecipeController