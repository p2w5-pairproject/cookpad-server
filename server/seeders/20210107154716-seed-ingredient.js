'use strict';

const fs = require('fs')

const ingredients = JSON.parse(fs.readFileSync('./ingredient.json'))

module.exports = {
  up: (queryInterface, Sequelize) => {
    ingredients.forEach(element => {
      element.createdAt = new Date()
      element.updatedAt = new Date()
    });
      return queryInterface.bulkInsert("Ingredients", ingredients, {} )
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete("Ingredients", null, {} )
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
