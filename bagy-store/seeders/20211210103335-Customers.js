'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Customers',
      [
        {
          storeCustomerName: 'John',
          storeCustomerLastName: 'Jhones roules',
          storeCustomerEmail: 'johndoe@example.com',
          storeCustomerDocumentNumber: '025.824.277-55',
          storeCustomerBirthDate: '17/08/1984',
          // usamos a função CURRENT_TIMESTAMP do SQL para salvar a data e hora atual nos campos `createdAt` e `updatedAt`
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          storeCustomerName: 'Cristian',
          storeCustomerLastName: 'Brum Oliveira',
          storeCustomerEmail: 'cristian.brum2@yahoo.com.br',
          storeCustomerDocumentNumber: '028.955.442-05',
          storeCustomerBirthDate: '27/04/1992',
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
      ],
      {},
    ),

  down: async (queryInterface) =>
    queryInterface.bulkDelete('Customers', null, {}),
};
