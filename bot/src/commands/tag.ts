import { Command } from "discord-akairo";
import { Message, TextChannel } from "discord.js";
import gql from "gql-tag/dist";
import { resolve } from "media-extractor";
import { _client, req } from "../db";
import { images_insert_input } from "../graphql/schema";
import { image_tags_insert_input, images_bool_exp } from "./../graphql/schema";

export default class extends Command {
  constructor() {
    super("tag", {
      aliases: ["tag"],
      category: "image",
      description: "Tags and saves an image to the archive",
      args: [{
        id: "target"
      }, {
        id: "rest",
        match: "rest"
      }]
    });
  }

  public async exec(msg: Message, { target, rest }: any) {
    if (!target) {
      return msg.channel.send(`No image target found`);
    }

    const targetMsg = target === "last"
      ? this.findValidMessage(msg.channel as TextChannel)
      : msg.channel.messages.get(target);

    if (!targetMsg) {
      return msg.channel.send(`Couldn't find a message with an image`);
    }

    const tags: image_tags_insert_input[] =
      rest && rest.trim().split(",").map((name: string) => ({
        name,
        tagger_id: targetMsg.author.id
      }));

    const url = await resolve(this.fetchMedia(targetMsg));

    const where: images_bool_exp = {
      _and: [{
        user_id: { _eq: targetMsg.author.id }
      }, {
        url: { _eq: url }
      }]
    };

    const { data } = await _client.query({
      images: [{
        where
      }, {
        id: 1,
        image_tags: {
          name: 1
        }
      }]
    })
    if (!data) {
      return;
    }
    const imageExists = data.images.length;
    if (imageExists && tags) {
      const [existing] = data.images;

      const updatedTags = tags.map((t) => ({
        ...t,
        image_id: existing.id
      })).filter((e) => existing.image_tags.every((t) => t.name !== e.name));

      const res = await req(gql`mutation($tags: [image_tags_insert_input!]!) {
        insert_image_tags(objects: $tags) {
          affected_rows
        }
      }`, { tags: updatedTags }) as {
        insert_image_tags: { affected_rows: number }
      };

      const s = (res.insert_image_tags.affected_rows === 1) ? "" : "s"

      return msg.channel.send(
        `Added ${res.insert_image_tags.affected_rows} new tag${s} to that image`
      );
    } else if (!tags) {
      return msg.channel.send(`That image is already saved`);
    }

    const { filename } = targetMsg.attachments.first() || { filename: null };
    const image: images_insert_input = {
      file_name: filename,
      user_id: targetMsg.author.id,
      message_id: targetMsg.id,
      guild_id: targetMsg.guild.id,
      url,
      ...(tags ? {
        image_tags: {
          data: tags
        }
      } : {})
    };
    const query = gql`mutation($image: images_insert_input!) {
      insert_images(objects: [$image]) {
        returning {
          guild_id
        }
      }
    }`;
    const resp = await req(query, { image });
    const wrappedTags = tags.map((t) => `\`${t.name}\``);
    msg.channel.send(
      `✅ | Saved ${targetMsg.author.username}'s image with the following tags: ${wrappedTags.join(", ")}`
    );
  }

  private findValidMessage = (channel: TextChannel) =>
    channel.messages.array().reverse().find((msg) => msg.attachments.size > 0 || msg.embeds.length > 0);

  private fetchMedia = (msg: Message) =>
    (msg.attachments.first() && msg.attachments.first().url)
    || (msg.embeds[0] && msg.embeds[0].url);
}
