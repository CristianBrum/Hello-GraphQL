const { UserInputError } = require('apollo-server');
const Joi = require('@hapi/joi');
const { Product } = require('../../../models');

const resolvers = {
  Query: {
    product: (_, { id }) =>
      Product.findByPk(id, (error, product) => {
        if (error) console.log('error', error);
        return product;
      }),
    allProduct: () =>
      Product.findAll({}, (error, allProduct) => {
        if (error) console.log('error', error);
        return allProduct;
      }),
  },
  Mutation: {
    async createProduct(_, { data }) {
      return Product.create(data);
    },
  },
};

module.exports = resolvers;
