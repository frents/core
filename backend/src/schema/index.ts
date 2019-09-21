import { gql } from 'apollo-server'

export const SchemaDefinition = gql`
    type Book {
        title: String
        author: String
    }
    type Query {
        books: [Book]
    }
`