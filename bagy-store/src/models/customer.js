'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define(
    'Customer',
    {
      storeCustomerId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      storeCustomerName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      storeCustomerLastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      storeCustomerEmail: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      storeCustomerDocumentNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      storeCustomerBirthDate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {},
  );

  Customer.associate = (models) => {
    Customer.hasMany(models.Address, {
      foreignKey: 'storeCustomerAddressId',
      as: 'addresses',
    });
    Customer.hasMany(models.Order, {
      foreignKey: 'productOrderId',
      as: 'orders',
    });
  };

  return Customer;
};
