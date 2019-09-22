import { AuthMutationResponse, InputAuth, SocialProvider, User } from '../../graphql/generated/graphql'
import locator, {
  AVAILABLE_SERVICES,
  ElasticSearchService,
  JwtService,
  SocialClientService,
} from '../../services/locator'
import { UserInputError } from 'apollo-server'
import { UserRepository } from '../user/repository'
import { USER_FIELDS } from '../user/types'

const sc = locator.get<SocialClientService>(AVAILABLE_SERVICES.SOCIAL_CLIENT)
const es = locator.get<ElasticSearchService>(AVAILABLE_SERVICES.ELASTICSEARCH)
const jwt = locator.get<JwtService>(AVAILABLE_SERVICES.JWT)
const ur = es.getRepository(UserRepository)

export async function auth(input: InputAuth): Promise<AuthMutationResponse> {
  if (input.provider === SocialProvider.Facebook) {
    await validateFacebookUser(input)
  }
  const { token, ...user } = input
  const isSignedUser = await ur.findOneByField<User>(USER_FIELDS.EMAIL, user.email)
  if (isSignedUser) {
    return { user: isSignedUser, token: releaseToken(isSignedUser.email, isSignedUser.id) }
  }
  const newUser = await ur.createModel(user).catch(error => {
    throw new UserInputError(error)
  })
  return { user: newUser, token: releaseToken(newUser.email, newUser.id) }
}

async function validateFacebookUser(input: InputAuth) {
  const appToken = await sc.getFacebookAppToken()
  const user = await sc.validateFacebookUserToken(appToken, input.token)
  if (input.providerId !== user.user_id || !user.is_valid || user.error) {
    throw new UserInputError(`Invalid user token provided - ${user.error ? user.error.message : 'invalid user id'} -`)
  }
}

function releaseToken(email: string, userId: string) {
  return jwt.signPayload({ userId }, email)
}