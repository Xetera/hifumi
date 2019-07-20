import { Channel, Guild, Message, TextChannel } from "discord.js";
import { resolve } from "media-extractor";
import { withDatadog } from "../analytics/datadog";
import { _client } from "../db";
import {
  image_tags_constraint,
  images_insert_input,
  tags_constraint,
  tags_insert_input
} from "../graphql/schema";
import { logger } from "../utils";

export const registerTags = (tags: tags_insert_input[]) => {
  return _client.mutation({
    insert_tags: [
      {
        objects: tags,
        on_conflict: {
          constraint: tags_constraint.tags_pkey,
          update_columns: []
        }
      },
      {
        returning: {
          name: 1,
          guild_id: 1,
          created_at: 1
        }
      }
    ]
  });
};
const findArchiveChannels = (guild: Guild) => {
  return _client.query({
    image_channels: [
      {
        where: {
          guild_id: {
            _eq: guild.id
          }
        }
      },
      {
        channel_id: 1
      }
    ]
  });
};
export const insertImages = (tags: images_insert_input[]) => {
  return _client.mutation({
    insert_images: [
      {
        objects: tags
      },
      {
        returning: {
          id: 1
        }
      }
    ]
  });
};

const isArchiveChannel = async (channel: Channel) => {
  if (!(channel instanceof TextChannel)) {
    return false;
  }

  const res = await findArchiveChannels(channel.guild);
  if ((res.errors && res.errors.length) || !res.data) {
    return logger.error("Error finding archive channels", res.errors);
  }
  return res.data.image_channels.some(chan => chan.channel_id === channel.id);
};

const hasArchivableContent = async (message: Message) =>
  message.attachments.size > 0;

const archiveAttachments = async (message: Message) => {
  const uploads = message.attachments.map(async att => {
    const src = await resolve(att.url);
    const tagsRes = await _client.query({
      auto_tags: [
        {
          where: {
            channel_id: {
              _eq: message.channel.id
            }
          }
        },
        {
          name: 1
        }
      ]
    });
    const tags = tagsRes.data!.auto_tags.map(t => t.name);
    const e = await registerTags(
      tags.map(tag => ({
        name: tag,
        guild_id: message.guild.id
      }))
    );
    if (e.errors) {
      console.error(
        `Error registering a new auto_tag for message in ${message.guild.name}`
      );
      return console.error(e.errors);
    }
    return insertImages([
      {
        message_id: message.id,
        url: src,
        image_tags: {
          data: tags.map(tag => ({
            name: tag,
            guild_id: message.guild.id,
            user_id: message.author.id
          })),
          on_conflict: {
            constraint: image_tags_constraint.image_tags_pkey,
            update_columns: []
          }
        }
      }
    ]);
  });
  return Promise.all(uploads).then(res => {
    withDatadog(client => {
      client.increment("bot.images.uploaded", res.length);
      client.increment("bot.images.auto_tagged", res.length)
    });
    return res;
  });
};

export const processImage = async (message: Message) => {
  if (
    !hasArchivableContent(message) ||
    !(await isArchiveChannel(message.channel))
  ) {
    return;
  }
  logger.debug(
    `Uploading valid image from channel ${
      message.channel instanceof TextChannel ? message.channel.name : ""
    }`
  );
  return archiveAttachments(message);
};
