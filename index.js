const { ApolloServer, gql } = require("apollo-server");
require("./config");

const { Question } = require("./models");

const typeDefs = gql`
  type Question {
    id: ID!
    Question: String
    Location: String
    Zone: String
    Date: String
    Answers: [Answer]
  }

  type Query {
    # getQuestions(date: String): [Question]
    getQuestions: [Question]
    getZones(zone: String): [Question]
  }

  type Answer {
    Gardener: String
    AnAnswer: String
  }

  type Mutation {
    addQuestion(Question: String!, Location: String!): Question
  }
`;

const resolvers = {
  Query: {
    // getQuestions: async (_, { date }) =>
    //   await Question.find({ Date: date }).exec(),
    getQuestions: async () => await Question.find({}).exec(),
    getZones: async (_, { zone }) => await Question.find({ Zone: zone }).exec()
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
