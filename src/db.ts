/// <reference path="./graphql/createClient">
import { AkairoClient } from "discord-akairo";
import { Collection, Guild, GuildMember, User } from "discord.js";
import gql from "gql-tag/dist";
import { GraphQLClient } from "graphql-request";
import { Variables } from "graphql-request/dist/src/types";
import { GRAPHQL_ENDPOINT } from "./constants";
import { Users_Insert_Input } from "./generated/graphql";
import { createClient } from "./graphql/createClient";
import { guilds_constraint, guilds_update_column } from "./graphql/schema";
import { logger } from "./utils";

const client = new GraphQLClient(GRAPHQL_ENDPOINT, {
  headers: process.env.HASURA_ACCESS_KEY
    ? {
        "X-Hasura-Access-Key": process.env.HASURA_ACCESS_KEY
      }
    : {}
});

export const syncAll = ({ guilds, users }: AkairoClient) =>
  Promise.all([
    syncGuilds(guilds.array()),
    syncUsers(users.array()),
    syncMembers(
      guilds.map((guild) => guild.members.array())
        .reduce((a, b) => a.concat(b))
    )
  ]);

export const _client = createClient({
  fetcher: ({ query, variables }: { query: any; variables: any }, fetch: any) =>
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
  return _client.mutation({
    insert_guilds: [
      {
        objects: guilds.map((guild) => ({
          guild_id: guild.id,
          name: guild.name,
          icon: guild.iconURL
        })),
        on_conflict: {
          constraint: guilds_constraint.guilds_pkey,
          update_columns: [guilds_update_column.name, guilds_update_column.icon]
        }
      },
      {
        affected_rows: 1
      }
    ]
  });
};

export const syncUsers = (users: User[]) => {
  logger.info("Synchronizing users");
  const data = users.map(
    (user): Users_Insert_Input => ({
      user_id: user.id,
      name: user.username,
      avatar: user.displayAvatarURL
    })
  );
  const query = gql`
    mutation($data: [users_insert_input!]!) {
      insert_users(
        objects: $data
        on_conflict: { constraint: users_pkey, update_columns: [name, avatar] }
      ) {
        returning {
          user_id
        }
      }
    }
  `;
  return req(query, { data });
};

const syncMembers = (members: GuildMember[]) => {
  logger.info("Synchronizing members");
  return _client.mutation({
    insert_members: [
      {
        objects: members.map((member: GuildMember) => ({
          guild_id: member.guild.id,
          user_id: member.user.id
        }))
      },
      {
        affected_rows: 1
      }
    ]
  });
};
