require("dotenv").config();
import jwt from "jsonwebtoken";

import fetch from "isomorphic-fetch";
import {
  makeExecutableSchema,
} from "graphql-tools";

import { ApolloServer } from "apollo-server";

const typeDefs = `
  enum Privilege {
    Owner,
    Admin,
    Moderator,
    ImageModerator
  }
  type User {
    name: String!
    avatar: String!
    discriminator: String!
    privilege: Privilege
  }
  type Query {
    user(id: String!): User!
  }
`;

const resolvers = {
  Query: {
    user: async (_, args, ctx, info) => {
      console.log(args.id);
      const yeet = await fetch(process.env.HASURA_GRAPHQL_URL, {
        method: "POST",
        body: JSON.stringify({
          query: `{
            users_by_pk(user_id: ${String(args.id)}) {
              name
              avatar
            }
          }`
        }),
        headers: {
          "X-Hasura-Access-Key": "test",
          "Content-Type": "application/json"
        }
      }).then(r => r.json());
      console.log(yeet);
      return {
        name: "yes"
      };
    }
  }
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});
const runServer = async () => {
  // Get newly merged schema
  // start server with the new schema (set knex instance in the context)
  const server = new ApolloServer({
    schema,
    context: ({ req }) => {
      if (!req.headers.authorization) {
        return {};
      }
      const [_, token] = req.headers.authorization.split(" ");
      const tk = jwt.decode(token)
      return {
        userId: tk
      };
    }
  });
  server.listen({ port: 1234 }).then(({ url }) => {
    console.log(`Running at ${url}`);
  });
};

runServer().catch(console.log);
