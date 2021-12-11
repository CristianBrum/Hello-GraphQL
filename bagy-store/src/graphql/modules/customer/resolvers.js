const { UserInputError } = require('apollo-server');
const Joi = require('@hapi/joi');
const { Customer } = require('../../../models');
const schema = require('./validation');

const resolvers = {
  Query: {
    customer: (_, { id }) =>
      Customer.findByPk(id, (error, customer) => {
        if (error) console.log('error', error);
        return customer;
      }),
    allCustomer: () =>
      Customer.findAll({}, (error, allCustomer) => {
        if (error) console.log('error', error);
        return allCustomer;
      }),
  },
  Mutation: {
    async createCustomer(_, { data }) {
      const { _value, error } = schema.validate(data, { abortEarly: false });
      if (error) {
        throw new UserInputError('Preencha todos os campos corretamente', {
          validationErrors: error.details,
        });
      }
      return Customer.create(data);
    },
  },
  Customer: {
    async address(customer) {
      return customer.getAdress();
    },
  },
};

module.exports = resolvers;
