import { Guild, User } from "discord.js";
import gql from "gql-tag/dist";
import request from "graphql-request";
import { Variables } from "graphql-request/dist/src/types";
import { GRAPHQL_ENDPOINT } from "./constants";
import {
  Guilds_Insert_Input,
  Users_Insert_Input
} from "./generated/graphql";
import { logger } from "./utils";

export const req = (q: string, vars?: Variables) => request(GRAPHQL_ENDPOINT, q, vars);

export const syncGuilds = (guilds: Guild[]) => {
  logger.info("Synchronizing guilds");
  const data = guilds.map((guild): Guilds_Insert_Input => ({
    guild_id: guild.id,
    name: guild.name
  }));
  const query = gql`
    mutation($data: [guilds_insert_input!]!) {
      insert_guilds(
        objects: $data
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
          constraint: users_user_id_key
          update_columns: [name, avatar]
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
