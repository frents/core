import { getUser } from '../../api/user'
import { auth } from '../../api/auth'

export const resolvers = {
  Query: {
    getUser: () => getUser(),
  },
  Mutation: {
    auth: async (parent, { input }) => await auth(input),
  },
}