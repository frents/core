import * as faker from 'faker'

export function authInputFaker() {
  return `
  mutation{
        auth(input:{
          email: "${faker.internet.email()}",
          name: "${faker.name.firstName()} ${faker.name.lastName()}",
          picture: "${faker.image.avatar()}",
          provider: FACEBOOK,
          providerId: "106057177462260",
          token: "${process.env.INTEGRATION_DEFAULT_USER_TOKEN}"
        })
        {
          user{
            id
          }
          token
        }
  }
`
}
