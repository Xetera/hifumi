import { Channel, Guild, Message, MessageAttachment, TextChannel } from "discord.js";
import gql from "gql-tag/dist";
import { req } from "../db";
import { Image_Channels } from "../generated/graphql";
import { logger } from "../utils";

const findArchiveChannels = (guild: Guild) => req(gql`
  query {
    image_channels(
      where: {
        guild_id: {
          _eq: "${guild.id}"
        }
      }
    ) {
      channel_id
    }
  }
`);

const upsertImage = (message: Message, att: MessageAttachment) => req(gql`
  mutation {
    insert_images(
      objects: [{
        message_id: "${message.id}"
        url: "${att.url}"
        file_name: "${att.filename}"
        guild_id: "${message.guild.id}"
        user_id: "${message.author.id}"
      }]
    ) {
      returning {
        id
      }
    }
  }
`);

const isArchiveChannel = async (channel: Channel) => {
  if (!(channel instanceof TextChannel)) {
    return false;
  }

  const res = await findArchiveChannels(channel.guild) as { image_channels: Image_Channels[] };
  return res.image_channels.some((chan) => chan.channel_id === channel.id);
};

const hasArchivableContent = async (message: Message) =>
  message.attachments.size > 0;

const archiveAttachments = async (message: Message) => {
  const uploads = message.attachments.map((att) => upsertImage(message, att));
  return Promise.all(uploads);
};

export const processImage = async (message: Message) => {
  if (!hasArchivableContent(message) || !await isArchiveChannel(message.channel)) {
    return;
  }
  logger.debug(`Uploading valid image from channel ${message.channel instanceof TextChannel ? message.channel.name : ""}`);
  return archiveAttachments(message);
};
