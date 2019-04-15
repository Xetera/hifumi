/// <reference path="./graphql/createClient">
import { Guild, User } from "discord.js";
import gql from "gql-tag/dist";
import { GraphQLClient } from "graphql-request";
import { Variables } from "graphql-request/dist/src/types";
import { GRAPHQL_ENDPOINT } from "./constants";
import {
  Guilds_Insert_Input,
  Users_Insert_Input
} from "./generated/graphql";
import { createClient } from "./graphql/createClient";
import { logger } from "./utils";

const client = new GraphQLClient(GRAPHQL_ENDPOINT, {
  headers: process.env.HASURA_ACCESS_KEY ? {
    "X-Hasura-Access-Key": process.env.HASURA_ACCESS_KEY
  } : {}
});

export const _client = createClient({
  fetcher: ({ query, variables }, fetch) =>
    fetch(process.env.HASURA_URL!, {
      method: "POST",
      body: JSON.stringify({ query, variables }),
      headers: {
        "X-Hasura-Admin-Secret": process.env.HASURA_ACCESS_KEY!
      }
    }).then((r: any) => r.json())
});

export const req = (q: string, vars?: Variables) => client.request(q, vars);

export const syncGuilds = (guilds: Guild[]) => {
  logger.info("Synchronizing guilds");
  const data = guilds.map((guild): Guilds_Insert_Input => ({
    guild_id: guild.id,
    name: guild.name,
    enabled: true
  }));
  const query = gql`
    mutation($data: [guilds_insert_input!]!) {
      insert_guilds(
        objects: $data
        on_conflict: {
          constraint: guilds_pkey
          update_columns: [name]
        }
      ) {
        returning {
          guild_id
        }
      }
    }
  `;
  return req(query, { data });
};

export const syncUsers = (users: User[]) => {
  logger.info("Synchronizing users");
  const data = users.map((user): Users_Insert_Input => ({
    user_id: user.id,
    name: user.username,
    avatar: user.displayAvatarURL
  }));
  const query = gql`
    mutation($data: [users_insert_input!]!) {
      insert_users(
        objects: $data
        on_conflict: {
          constraint: users_pkey
          update_columns: [name, avatar]
        }
      ) {
        returning {
          user_id
        }
      }
    }
  `;
  return req(query, { data });
};
