'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Addresses',
      [
        {
          customerId: 1,
          storeCustomerStreet: 'rua assis brail',
          storeCustomerNeighborhood: 'vargas',
          storeCustomerCity: 'sapucaia do sul',
          storeCustomerState: 'RS',
          storeCustomerCountry: 'Brasil',
          storeCustomerPostalCode: '93222360',
          storeCustomerNumber: '281',
          // usamos a função CURRENT_TIMESTAMP do SQL para salvar a data e hora atual nos campos `createdAt` e `updatedAt`
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          customerId: 2,
          storeCustomerStreet: 'Salty and Peppery',
          storeCustomerNeighborhood: 'Salt, Pepper',
          storeCustomerCity: 'Add salt, Add pepper',
          storeCustomerState: 'Add salt, Add pepper',
          storeCustomerCountry: 'Add salt, Add pepper',
          storeCustomerPostalCode: 'Add salt, Add pepper',
          storeCustomerNumber: 'Add salt, Add pepper',
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
      ],
      {},
    ),

  down: async (queryInterface) =>
    queryInterface.bulkDelete('Addresses', null, {}),
};
