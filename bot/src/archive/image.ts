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
import { reactUploaded } from "../services/reaction";

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

const hasArchivableContent = (message: Message) => message.attachments.size > 0;

const fetchChannelAutoTags = async (channelId: string): Promise<string[]> => {
  const res = await _client.query({
    image_channels_by_pk: [
      {
        channel_id: channelId
      },
      {
        auto_tags: {
          name: 1
        }
      }
    ]
  });
  if (res.errors) {
    return Promise.reject(res.errors);
  }
  const channel = res.data!.image_channels_by_pk;
  if (!channel) {
    return Promise.reject(Error(`No channel with id ${channelId} was found`));
  }
  return channel.auto_tags.map(r => r.name);
};

export const archiveAttachments = async (message: Message, tags: string[]) => {
  const uploads = message.attachments.map(async att => {
    const src = await resolve(att.url);
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
        original_url: src,
        guild_id: message.guild.id,
        member_id: message.author.id,
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
      client.increment("bot.images.auto_tagged", res.length);
    });
    return res;
  });
};

export const processImage = async (message: Message) => {
  const isInvalidImage =
    !hasArchivableContent(message) ||
    !(await isArchiveChannel(message.channel));

  if (isInvalidImage) {
    return;
  }

  logger.debug(
    `Uploading valid image from channel ${
      message.channel instanceof TextChannel ? message.channel.name : ""
    }`
  );
  const autoTags = await fetchChannelAutoTags(message.channel.id);
  await archiveAttachments(message, autoTags);
  await reactUploaded(message);
};
