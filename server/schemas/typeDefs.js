const typeDefs = `
 type User {
   _id: ID
   username: String
   email: String
   password: String
   builds: [Build]!
 }


 type Build {
   _id: ID
   buildName: String
   number: String
   pieces: String
   theme: String
   builderAge: String
   rating: Int
   buildAuthor: String
   comments: [Comment]!
 }


 type Comment {
   _id: ID
   commentText: String
   commentAuthor: String
   createdAt: String
 }


 type Auth {
   token: ID!
   user: User
 }


 type Query {
   users: [User]
   user(username: String!): User
   builds(username: String): [Build]
   build(buildId: ID!): Build
   me: User
 }


 type Mutation {
   addUser(username: String!, email: String!, password: String!): Auth
   login(email: String!, password: String!): Auth
   addBuild(thoughtText: String!): Build
   addComment(buildId: ID!, commentText: String!): Build
   removeBuild(buildId: ID!): Build
   removeComment(buildId: ID!, commentId: ID!): Build
 }
`;


module.exports = typeDefs;
