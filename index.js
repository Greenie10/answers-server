const { ApolloServer, gql } = require("apollo-server");
require("./config");

const { QuestionModel } = require("./models");

const typeDefs = gql`
  input InputAnswer {
    Gardener: String
    AnAnswer: String
  }

  type Question {
    Question: String
    Location: String
    Zone: String
    Date: String
    Answers: [Answer]
  }

  type Answer {
    Gardener: String
    AnAnswer: String
  }

  type Query {
    getQuestions: [Question]
    getZones(zone: String): [Question]
    getQuestion(id: ID!): Question
  }

  type Mutation {
    addQuestion(
      Question: String!
      Location: String!
      Zone: String!
      Date: String!
      Answers: [InputAnswer]
    ): Question
    updateQuestion(
      id: ID!
      Question: String
      Location: String
      Zone: String
      Date: String
      Answers: [InputAnswer]
    ): Question
  }
`;

const resolvers = {
  Query: {
    getQuestions: async () => await QuestionModel.find({}).exec(),
    getZones: async (_, { zone }) =>
      await QuestionModel.find({ Zone: zone }).exec(),
    getQuestion: async (_, { id }) => await QuestionModel.findById(id).exec()
  },
  Mutation: {
    addQuestion: async (_, args) => {
      try {
        let response = await QuestionModel.create(args);
        return response;
      } catch (e) {
        return e.message;
      }
    },
    updateQuestion: async (_, { ...args }) =>
      await QuestionModel.findByIdAndUpdate(args.id, args)
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
