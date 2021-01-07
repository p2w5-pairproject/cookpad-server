'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Recipe.belongsTo(models.User)
        Recipe.belongsToMany(models.Ingredient,{
        through: models.RecipeIngredient,
        foreignKey: "RecipeId"
      })
      // define association here
    }
  };
  Recipe.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    step: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};