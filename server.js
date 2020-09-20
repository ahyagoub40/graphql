const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// construct a schema

const schema = buildSchema(`
  type Query {
    message: String
  }
`);


// root to provide resolver function 

const root = {
  message: () => {
    return 'Hello world!'
  },
};


const app = express();
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000, () => console.log('Running a GraphQl API server at http://localhost:4000/graphql'));
