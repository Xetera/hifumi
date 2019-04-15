import { Command } from "discord-akairo";
import { Message } from "discord.js";
import { _client } from "../db";
import { image_channels } from "../graphql/schema";

export default class extends Command {
  constructor() {
    super("autotag", {
      aliases: ["autotag"],
      description: "Gets an image",
      args: [{
        id: "channel",
        type: "channel"
      }, {
        id: "tags",
        match: "rest"
      }],
    });

  }

  public async exec(message: Message, { channel, tags }: any) {
    if (!channel) {
      return message.channel.send("No channel selected");
    }
    const { data } = await _client.query({
      image_channels_by_pk: [{
        channel_id: channel.id
      }, {
        channel_id: 1
      }]
    });

    if (!data!.image_channels_by_pk) {
      return message.channel.send("That channel is not autosaving");
    }
    if (!tags) {
      return message.channel.send("No tags specified");
    }
    const tagArray: string[] = tags.split(",");
    const existing = await _client.query({
      auto_tags: [{
        where: {
          _or: tagArray.map((name: string) => ({
            name: {
              _eq: name
            }
          }))
        }
      }, {
        name: 1
      }]
    });

    if (!existing.data) {
      console.log(existing.errors);
      return message.channel.send(`There was an error`);
    }

    const { auto_tags } = existing.data;
    const existingTagsArr = new Set(auto_tags.map((t) => t.name));
    const toAdd = new Set(tagArray);
    const uniqueTags = [...toAdd].filter((adding: string) => !existingTagsArr.has(adding));

    if (!uniqueTags.length) {
      return message.channel.send("All of those tags are already being auto-added");
    }

    const addedTags = await _client.mutation({
      insert_auto_tags: [{
        objects: uniqueTags.map((name: string) => ({
          channel_id: channel.id,
          name
        }))
      }, {
        affected_rows: 1
      }]
    });
    if (addedTags.errors) {
      return message.channel.send(`There was an error adding those tags`);
    }
    return message.channel.send(
      `Added tags: ${uniqueTags.map((name) => `\`${name}\``).join(", ")}`
    );
  }
}
