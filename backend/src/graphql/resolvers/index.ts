import { getUser } from '../../api/user'
import { auth } from '../../api/auth'

export const resolvers = {
  Query: {
    getUser: async (parent, args, context, info) => await getUser(context),
  },
  Mutation: {
    auth: async (parent, { input }) => await auth(input),
  },
}
