const router = require('express').Router();
const schema = require('../schema');

const { graphqlHTTP } = require('express-graphql');

router.get(
  '/',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

router.post(
  '/',
  graphqlHTTP((req, res) => ({
    schema,
    graphiql: true,
  })),
);
module.exports = router;
