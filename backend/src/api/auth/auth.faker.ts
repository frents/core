import * as faker from 'faker'

export function authValidPayload() {
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

export function authInvalidToken() {
  return `
  mutation{
        auth(input:{
          email: "${faker.internet.email()}",
          name: "${faker.name.firstName()} ${faker.name.lastName()}",
          picture: "${faker.image.avatar()}",
          provider: FACEBOOK,
          providerId: "106057177462260",
          token: "hello"
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

export function authInvalidTokenSignature() {
  return `
  mutation{
        auth(input:{
          email: "${faker.internet.email()}",
          name: "${faker.name.firstName()} ${faker.name.lastName()}",
          picture: "${faker.image.avatar()}",
          provider: FACEBOOK,
          providerId: "106057177462260",
          token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
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
