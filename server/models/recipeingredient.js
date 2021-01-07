'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RecipeIngredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  RecipeIngredient.init({
    RecipeId: DataTypes.STRING,
    IngredientId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'RecipeIngredient',
  });
  return RecipeIngredient;
};