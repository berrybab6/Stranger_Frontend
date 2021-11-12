import { ApolloServer, gql } from 'apollo-server'

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      hello: String!
    }
    type UploadedFileResponse {
      filename: String!
      mimetype: String!
      encoding: String!
      url: String!
    }
    type Mutation {
      singleUpload(file: Upload!): UploadedFileResponse!
    }
  `,
  resolvers: {
    Query: {
      hello: () => "Hey!"
    },
    Mutation: {
      singleUpload: async (parent, { file }) => {
        const { stream, filename, mimetype, encoding } = await file;

        // Do work 💪

        return { filename, mimetype, encoding, url: '' }
      }
    }
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
