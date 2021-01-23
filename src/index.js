// Apollo-server library requirement
const { ApolloServer} = require('apollo-server');

// TypeDefs and Resolvers requirement
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

// Apollo server initialization 
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});