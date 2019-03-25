import { Guild, User } from "discord.js";
import gql from "gql-tag/dist";
import request from "graphql-request";
import { Variables } from "graphql-request/dist/src/types";
import { GRAPHQL_ENDPOINT } from "./constants";
import {
  Mutation_RootInsert_Image_ChannelsArgs, Users_Insert_Input
} from "./generated/graphql";
import { upsertImageQ } from "./queries/image";
import { logger } from "./utils";

export const req = (q: string, vars?: Variables) => request(GRAPHQL_ENDPOINT, q, vars);

export const addImage = (vars: Mutation_RootInsert_Image_ChannelsArgs) =>
  req(upsertImageQ, vars);

export const syncGuilds = (guilds: Guild[]) => {
  logger.info("Synchronizing guilds");
  const gps = guilds.map((guild) => {
    const query = gql`
      mutation {
        insert_guilds(
          objects: {
            guild_id: "${guild.id}"
            name: "${guild.name}"
          }
          on_conflict: {
            constraint: guilds_guild_id_key
            update_columns: [name]
          }
        ) {
          returning {
            id
          }
        }
      }
    `;
    return req(query);
  });
  return Promise.all(gps);
};

export const syncUsers = (users: User[]) => {
  logger.info("Synchronizing users");
  const data: Users_Insert_Input[] = users.map((user) => ({
    user_id: user.id,
    name: user.username
  }));
  const query = gql`
    mutation($data: [users_insert_input!]!) {
      insert_users(
        objects: $data
        on_conflict: {
          constraint: users_user_id_key
          update_columns: [name]
        }
      ) {
        returning {
          id
        }
      }
    }
  `;
  return req(query, { data });
};
