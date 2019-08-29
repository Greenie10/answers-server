const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
require("./config");
const { Gardener } = require("./models");

const typeDefs = gql`
  type Gardener {
    id: ID!
    name: String
  }

  type Query {
    getGardeners: [Gardener]
  }

  type Mutation {
    addGardener(name: String!): Gardener
  }
`;

const resolvers = {
  Query: {
    getGardeners: async () => await Gardener.find({}).exec()
  },
  Mutation: {
    addGardener: async (_, args) => {
      try {
        let response = await Gardener.create(args);
        return response;
      } catch (e) {
        return e.message;
      }
    }
  }
};

const server = new ApolloServer({
  cors: { origin: "*", credentials: true },
  typeDefs,
  resolvers
});
const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
