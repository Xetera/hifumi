import { Channel, Guild, Message, MessageAttachment, TextChannel } from "discord.js";
import gql from "gql-tag/dist";
import { resolve } from "media-extractor";
import { _client, req } from "../db";
import { logger } from "../utils";

const findArchiveChannels = (guild: Guild) =>
  _client.query({
    image_channels: [{where: {
      guild_id: {
        _eq: guild.id
      }
    }}, {
      channel_id: 1
    }]
  });

const upsertImage = (message: Message, att: MessageAttachment, url: string, tags: string[]) => _client.mutation({
  insert_images: [{
    objects: [{
      message_id: message.id,
      url,
      image_tags: {
        data: tags.map((tag) => ({
          name: tag,
        }))
      },
      file_name: att.filename,
      guild_id: message.guild.id,
      user_id: message.author.id
    }]
  }, {
    returning: {
      id: 1
    }
  }]
});

const isArchiveChannel = async (channel: Channel) => {
  if (!(channel instanceof TextChannel)) {
    return false;
  }

  const res = await findArchiveChannels(channel.guild);
  if (res.errors && res.errors.length || !res.data) {
    return logger.error("Error finding archive channels", res.errors);
  }
  return res.data.image_channels.some((chan) => chan.channel_id === channel.id);
};

const hasArchivableContent = async (message: Message) =>
  message.attachments.size > 0;

const archiveAttachments = async (message: Message) => {
  const uploads = message.attachments.map(async (att) => {
    const src = await resolve(att.url);
    const tagsRes = await _client.query({
      auto_tags: [{
        where: {
          channel_id: {
            _eq: message.channel.id
          }
        }
      }, {
        name: 1
      }]
    });
    const tags = tagsRes.data!.auto_tags.map((t) => t.name);
    return upsertImage(message, att, src, tags);
  });
  return Promise.all(uploads);
};

export const processImage = async (message: Message) => {
  if (!hasArchivableContent(message) || !await isArchiveChannel(message.channel)) {
    return;
  }
  logger.debug(
    `Uploading valid image from channel ${message.channel instanceof TextChannel ? message.channel.name : ""}`
  );
  return archiveAttachments(message);
};
