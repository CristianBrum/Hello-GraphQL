const { UserInputError } = require('apollo-server');
const { Order, Product } = require('../../../models');
const schema = require('./validation');

const resolvers = {
  Query: {
    order: (_, { id }) =>
      Order.findByPk(id, (error, order) => {
        if (error) console.log('error', error);
        return order;
      }),
    allOrders: () =>
      Order.findAll({}, (error, allOrders) => {
        if (error) console.log('error', error);
        return allOrders;
      }),
  },
  Mutation: {
    async createOrder(_, { data }) {
      const { _value, error } = schema.validate(data, { abortEarly: false });
      if (error) {
        throw new UserInputError('Preencha todos os campos corretamente', {
          validationErrors: error.details,
        });
      }
      const { productId } = data;
      const { quantity } = await Product.findByPk(productId);
      if (data.quantity <= quantity) {
        await Product.update(
          { quantity: quantity - data.quantity },
          { where: { productId } },
        );
        return Order.create(data);
      }
      throw new UserInputError('Quantidade indisponivel');
    },
  },
};

module.exports = resolvers;
