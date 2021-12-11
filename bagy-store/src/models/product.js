'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'Product',
    {
      productId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      productName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      firstPictureUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      variationDescription: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      productWeight: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      unitPrice: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {},
  );

  return Product;
};
