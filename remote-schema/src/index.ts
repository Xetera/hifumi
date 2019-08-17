import path from "path";
require("dotenv").config({ path: path.resolve("..", ".env") });
import jwt from "jsonwebtoken";

import { HttpLink } from "apollo-link-http";
import fetch from "isomorphic-fetch";
import {
  makeExecutableSchema, makeRemoteExecutableSchema, introspectSchema, IGraphQLToolsResolveInfo, mergeSchemas,
} from "graphql-tools";
import { setContext } from "apollo-link-context";


import { ApolloServer } from "apollo-server";

// we should probably change this
const { HIFUMI_HASURA_URL } = process.env;
console.log(HIFUMI_HASURA_URL)
const authLink = setContext(() => ({
  headers: {
    "X-Hasura-Admin-Secret": "test"
  }
}))

const httpLink = new HttpLink({
  uri: HIFUMI_HASURA_URL,
  fetch,
});

const link = authLink.concat(httpLink);

const createRemoteExecutableSchema = () => introspectSchema(link)
  .then(remoteSchema => makeRemoteExecutableSchema({
    schema: remoteSchema,
    link
  }));

const createNewSchema = async () => {
  const schema = await createRemoteExecutableSchema();

  const resolvers = {
    Mutation: {
      insert_images: async (_, args, ctx, info: IGraphQLToolsResolveInfo) => {
        console.log("received info");

        console.log(ctx);
        // if (!args.id) {
        //   return [];
        // }
        return info.mergeInfo!.delegateToSchema({
          schema,
          operation: 'mutation',
          fieldName: 'insert_images',
          args,
          context: ctx,
          info
        })
      }
    }
  };

  return mergeSchemas({
    schemas: [schema],
    resolvers
  })
}


const runServer = async () => {
  const schema = await createNewSchema();

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
