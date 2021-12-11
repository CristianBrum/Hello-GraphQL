const { Address } = require('../../../models');

const resolvers = {
  Query: {
    allAddress: () =>
      Address.findAll({}, (error, allAddress) => {
        if (error) console.log('error', error);
        return allAddress;
      }),
    address: (_, { id }) =>
      Address.findByPk(id, (error, allAddress) => {
        if (error) console.log('error', error);
        return allAddress;
      }),
  },
  Mutation: {
    async createAddress(_, { data }, { models }) {
      return models.Address.create(data);
    },
  },
  Address: {
    async customer(address) {
      return address.getCustomer();
    },
  },
};

module.exports = resolvers;
