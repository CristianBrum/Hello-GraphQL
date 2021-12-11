const { UserInputError } = require('apollo-server');
const Joi = require('@hapi/joi');

const schema = Joi.object({
  installments: Joi.string().required(),
  quantity: Joi.number().positive().required(),
  status: Joi.string().required(),
  storeCustomerId: Joi.number().required(),
  productId: Joi.number().required(),
});

module.exports = schema;
