import { AkairoClient } from "discord-akairo";
import { Guild } from "discord.js";
import { Emoji } from "../models/emoji";

export const loadEmojis = async (guild: Guild) => {
  const emojiCommits = guild.emojis.map(({ name, url, id, guild: g }) => ({
    updateOne: {
      filter: { guild_id: g.id, name },
      update: { $set: { name, url, id, guild_id: g.id } },
      upsert: true
    }
  }));
  return Emoji.bulkWrite(emojiCommits);
};

export const updateEmojis = (client: AkairoClient) => {
  const promises = client.guilds.map(loadEmojis);
  return Promise.all(promises);
};
