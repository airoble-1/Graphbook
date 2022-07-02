import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Post {
    id: Int
    text: String
  }
  type RootQuery {
    posts: [Post]
  }
  schema {
    query: RootQuery
  }
`;
export default [typeDefs];
