const express = require('express')
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./typedefs');
const resolvers = require('./resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express()

app.listen(4000,()=>{
    console.log('Server listining on port 4000')
})

