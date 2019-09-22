import { gql } from 'apollo-server'

export const SchemaDefinition = gql`

    enum SocialProvider {
        FACEBOOK
        GOOGLE
    }

    type AuthMutationResponse{
        token: String!
        user: User!
    }

    type User {
        id: ID!
        name: String!
        picture: String!
        email: String!
        provider: SocialProvider!
        providerId: String!
        createdAt: String!
    }

    input InputAuth {
        token: String!
        name: String!
        picture: String!
        email: String!
        provider: SocialProvider!
        providerId: String!
    }

    type Query {
        getUser: User
    }

    type Mutation{
        auth(input:InputAuth):AuthMutationResponse
    }
`
