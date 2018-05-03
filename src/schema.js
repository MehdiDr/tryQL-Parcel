import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';


// ! for required, [] for a list.
const typeDefs = `
  type VideoGames {
    id: ID!
    name: String
    messages: [Message]!
  }

  type Message {
    id: ID!
    text: String
  }

  type Query {
    channels: [Channel]
    channel(id: ID!): Channel
  } 

  type Mutation {
    addChanel(name: String!): Channel
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };