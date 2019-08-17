import { Command } from "discord-akairo";
import { Message, TextChannel } from "discord.js";
import { resolve } from "media-extractor";
import R from "ramda";
import { withDatadog } from "../analytics/datadog";
import { insertImages, registerTags } from "../archive/image";
import { _client } from "../db";
import {
  images_insert_input,
} from "../graphql/schema";
import { images_bool_exp } from "../graphql/schema";

export default class extends Command {
  constructor() {
    super("tag", {
      aliases: ["tag"],
      category: "image",
      description: "Tags and saves an image to the archive",
      args: [
        {
          id: "target"
        },
        {
          id: "rest",
          match: "rest"
        }
      ]
    });
  }

  public async exec(msg: Message, { target, rest }: any) {
    if (!target) {
      return msg.channel.send(`No image target found`);
    }

    const targetMsg =
      target === "last"
        ? this.findValidMessage(msg.channel as TextChannel)
        : msg.channel.messages.get(target);

    if (!targetMsg) {
      return msg.channel.send(`Couldn't find a message with an image`);
    }

    const tags: string[] = rest ? rest.split(",").map(R.trim) : [];

    const url = await resolve(this.fetchMedia(targetMsg));

    const where: images_bool_exp = {
      _and: [
        {
          member_id: { _eq: targetMsg.author.id }
        },
        {
          url: { _eq: url }
        }
      ]
    };

    const { data } = await _client.query({
      images: [
        { where },
        {
          id: 1,
          image_tags: {
            tag: {
              name: 1
            }
          }
        }
      ]
    });
    if (!data) {
      return;
    }
    const imageExists = data.images.length;
    if (imageExists && tags) {
      const [existing] = data.images;

      const updatedTags = tags
        // TODO: reduce
        .map(t => ({
          name: t,
          guild_id: targetMsg.guild.id
        }))
        .filter(e => existing.image_tags.every(tag => tag.name !== e.name));

      const results = await registerTags(updatedTags);

      console.log(results);

      const res = await _client.mutation({
        insert_image_tags: [
          {
            objects: updatedTags.map(items => ({
              ...items,
              image_id: existing.id,
              user_id: targetMsg.author.id
            }))
          },
          {
            affected_rows: 1
          }
        ]
      });
      if (res.errors || !res.data) {
        return;
      }
      // @ts-ignore
      const { affected_rows } = res.data.insert_image_tags;
      console.log(affected_rows);
      const s = affected_rows === 1 ? "" : "s";

      withDatadog(client => {
        client.increment("bot.images.tags_added", updatedTags.length);
      });
      return msg.channel.send(
        `Added ${affected_rows} new tag${s} to that image`
      );
    } else if (!tags) {
      return msg.channel.send(`That image is already saved`);
    }

    const tagsToAdd = tags.map(name => ({
      name,
      guild_id: targetMsg.guild.id
    }));

    await registerTags(tagsToAdd);

    const { filename } = targetMsg.attachments.first() || { filename: null };
    const imageTags = tags.length
      ? {
        image_tags: {
          data: tagsToAdd.map(items => ({
            ...items,
            user_id: targetMsg.author.id
          }))
        }
      }
      : {};
    const image: images_insert_input = {
      ...imageTags,
      file_name: filename,
      member_id: targetMsg.author.id,
      message_id: targetMsg.id,
      guild_id: targetMsg.guild.id,
      original_url: url
    };
    const resp = await insertImages([image]);
    console.log(resp);
    withDatadog(client => {
      client.increment("bot.images.uploaded");
      client.increment("bot.images.tags_added", tags.length);
    });
    const wrappedTags = tags.map(t => `\`${t}\``);
    msg.channel.send(
      `✅ | Saved ${
      targetMsg.author.username
      }'s image with the following tags: ${wrappedTags.join(", ")}`
    );
  }

  private findValidMessage = (channel: TextChannel) =>
    channel.messages
      .array()
      .reverse()
      .find(msg => msg.attachments.size > 0 || msg.embeds.length > 0);

  private fetchMedia = (msg: Message) =>
    (msg.attachments.first() && msg.attachments.first().url) ||
    (msg.embeds[0] && msg.embeds[0].url);
}
