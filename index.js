const { ApolloServer, gql } = require("apollo-server");
require("./config");

const { Question } = require("./models");

const typeDefs = gql`
  type Question {
    _id: ID!
    Question: String
    Location: String
    Zone: String
    Date: String
    Answers: [Answer]
  }

  type Query {
    getQuestions: [Question]
    getZones(zone: String): [Question]
    getQuestion(id: String): [Question]
  }

  input InputAnswer {
    Gardener: String
    AnAnswer: String
  }

  type Answer {
    Gardener: String
    AnAnswer: String
  }

  type Mutation {
    addQuestion(
      Question: String!
      Location: String!
      Zone: String!
      Date: String!
      Answers: [InputAnswer]
    ): Question
  }
`;

const resolvers = {
  Query: {
    getQuestions: async () => await Question.find({}).exec(),
    getZones: async (_, { zone }) => await Question.find({ Zone: zone }).exec(),
    getQuestion: async (_, { id }) => await Question.find({ _id: id }).exec()
  },
  Mutation: {
    addQuestion: async (_, args) => {
      try {
        let response = await Question.create(args);
        return response;
      } catch (e) {
        return e.message;
      }
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
