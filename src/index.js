// Require calls
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express')
const fs = require ('fs')

// Api details
const port = 4000;
const path = '/graphql'

// Express init just init
const app = express();

const typeDefs = gql(fs.readFileSync('./src/schema.graphql', {encoding: 'utf8'}))
const resolvers = require('./resolvers')

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.applyMiddleware({ app, path })

app.listen(port, () => console.info(`Server started on: http://localhost:${port}${path}`));