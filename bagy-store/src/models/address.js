'use strict';
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define(
    'Address',
    {
      storeCustomerAddressId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      storeCustomerStreet: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      storeCustomerNeighborhood: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      storeCustomerCity: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      storeCustomerState: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      storeCustomerCountry: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      storeCustomerPostalCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      storeCustomerNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      storeCustomerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {},
  );

  Address.associate = (models) => {
    Address.belongsTo(models.Customer, {
      foreignKey: 'storeCustomerId',
      as: 'customer',
    });
  };
  return Address;
};
