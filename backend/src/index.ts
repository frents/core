import './bootstrap'
import { ApolloServer } from 'apollo-server'
import { schemaDefinition } from './graphql/schema'
import { resolvers } from './graphql/resolvers'
import { apolloContext } from './graphql/apollo/context'

const server = new ApolloServer({
  typeDefs: schemaDefinition,
  resolvers,
  context: apolloContext,
})

server.listen().then(({ url }) => {
  console.log(`🚀 Apollo server is ready at: ${url}`)
})