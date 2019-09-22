import { AuthenticationError } from 'apollo-server-errors'
import { User } from '../generated/graphql'
import locator, { AVAILABLE_SERVICES, ElasticSearchService, JwtService, RedisService } from '../../services/locator'
import { UserRepository } from '../../api/user/repository'

const jwtService = locator.get<JwtService>(AVAILABLE_SERVICES.JWT)
const redisService = locator.get<RedisService>(AVAILABLE_SERVICES.REDIS)
const es = locator.get<ElasticSearchService>(AVAILABLE_SERVICES.ELASTICSEARCH)
const ur = es.getRepository<UserRepository>(UserRepository)

export interface IApolloContext {
  user: User
}

export async function apolloContext({ req }) {
  const token = req.headers.authorization || null
  if (!token) {
    return
  }
  const decodedToken = jwtService.decodeToken(token)
  if (!decodedToken.userId || !decodedToken.sub) {
    throw new AuthenticationError('Invalid token structure')
  }
  const verifiedToken = jwtService.verifyToken(token, decodedToken.sub)
  const user = await redisService.get(verifiedToken.userId)
  if (user) {
    return { user }
  }
  const esUser = await ur.getById<User>(verifiedToken.userId)
  if (esUser && esUser.id) {
    redisService.set(esUser.id, esUser)
    return { user }
  }
}

