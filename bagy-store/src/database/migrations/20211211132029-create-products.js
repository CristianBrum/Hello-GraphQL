'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      productId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      productName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      firstPictureUrl: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      variationDescription: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      productWeight: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      unitPrice: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  },
};
