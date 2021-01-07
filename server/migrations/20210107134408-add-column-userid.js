'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.addColumn("Recipes", "UserId", {
        type: Sequelize.INTEGER,
        reeferences: {
          model: { tableName: "Users"},
          key: "id",
        },
        onDeleted: "CASCADE",
        onUpdated: "CASCADE"
      })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Recipes", "UserId", {})
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
