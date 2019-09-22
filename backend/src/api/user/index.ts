import { SocialProvider, User } from '../../graphql/generated/graphql'

export function getUser(): User {
  return {
    id: 'This endpoint is not ready yet',
    email: 'diego@aimusic.co.uk',
    name: 'diego',
    picture: 'myPicture',
    provider: SocialProvider.Facebook,
    providerId: '123',
    createdAt: '',
  }
}
