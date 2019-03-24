import { Channel, Message, TextChannel } from "discord.js";
import { Guild } from "../models/guild";
import { ArchivedImage } from "../models/image";
import { logger } from "../utils";

const isArchiveChannel = async (channel: Channel) => {
  if (!(channel instanceof TextChannel)) {
    return false;
  }

  const { image_archives } = await Guild.findOne({ id: channel.guild.id }) || new Guild();
  return image_archives.includes(channel.id);
};

const hasArchivableContent = async (message: Message) =>
  message.attachments.size > 0;

const archiveAttachments = async (message: Message) => {
  const { attachments, id } = message;

  const targetGuild = await Guild.findOne({ id: message.guild.id });

  if (!targetGuild) {
    throw Error(`Received an attachment from a non-existing guild: ${message.guild.id}`);
  }

  const uploads = attachments.map((att) =>
    ArchivedImage.updateOne(
      { message_id: id },
      {
        message_id: id,
        url: att.url,
        file_name: att.filename,
        guild: targetGuild._id,
        user_id: message.author.id
      },
      { upsert: true }
    )
  );
  return Promise.all(uploads);
};

export const processImage = async (message: Message) => {
  logger.debug("Processing an message");
  if (!hasArchivableContent(message) || !await isArchiveChannel(message.channel)) {
    return;
  }
  logger.debug("Image is valid");
  return archiveAttachments(message);
};
