import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Post {
    id: Int
    text: String
    user: User
  }
  type User {
    avatar: String
    username: String
  }
  input PostInput {
    text: String!
  }
  input UserInput {
    avatar: String!
    username: String!
  }
  type RootQuery {
    posts: [Post]
  }
  type RootMutation {
    addPost(post: PostInput!, user: UserInput!): Post
  }
  schema {
    query: RootQuery
    mutation: RootMutation
  }
`;
export default [typeDefs];
