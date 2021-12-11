'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Addresses', {
      storeCustomerAddressId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      storeCustomerStreet: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      storeCustomerNeighborhood: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      storeCustomerCity: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      storeCustomerState: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      storeCustomerCountry: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      storeCustomerPostalCode: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      storeCustomerNumber: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      storeCustomerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Customers',
          key: 'storeCustomerId',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
    await queryInterface.dropTable('Addresses');
  },
};
