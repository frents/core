import { SchemaDefinition } from './src/schema'
import { ApolloServer } from 'apollo-server'
import { resolvers } from './src/resolvers'

const server = new ApolloServer({ typeDefs: SchemaDefinition, resolvers })

server.listen().then(({ url }) => {
  console.log(`🚀 Apollo server is ready at: ${url}`)
})