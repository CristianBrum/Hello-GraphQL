'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    'Order',
    {
      productOrderId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      installments: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      storeCustomerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {},
  );

  Order.associate = (models) => {
    Order.belongsTo(models.Customer, {
      foreignKey: 'storeCustomerId',
      as: 'customers',
    });
    Order.hasMany(models.Product, {
      foreignKey: 'productId',
      as: 'products',
    });
  };

  return Order;
};
