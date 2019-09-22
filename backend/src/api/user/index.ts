import { User } from '../../graphql/generated/graphql'
import { IApolloContext } from '../../graphql/apollo/context'
import locator, { AVAILABLE_SERVICES, ElasticSearchService } from '../../services/locator'
import { UserRepository } from './repository'
import { AuthenticationError } from 'apollo-server'

const es = locator.get<ElasticSearchService>(AVAILABLE_SERVICES.ELASTICSEARCH)
const ur = es.getRepository<UserRepository>(UserRepository)

export async function getUser(context: IApolloContext): Promise<User> {
  if (!context.user || !context.user.id) {
    throw new AuthenticationError('Invalid context, this endpoint required a logged user')
  }
  const user = await ur.getById<User>(context.user.id)
  if (!user) {
    throw new AuthenticationError(`No user found with id: ${context.user.id}`)
  }
  return user
}
