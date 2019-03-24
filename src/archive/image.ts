import { Channel, Message, TextChannel } from "discord.js";
import { ArchivedImage } from "../models/archived_image";
import { Guild } from "../models/guild";
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

  const { _id } = await Guild.findOne({ id: message.guild.id }) || new Guild();
  if (!_id) {
    throw Error(`Received an attachment from a non-existing guild: ${message.guild.id}`);
  }
  const uploads = attachments.map((att) =>
    ArchivedImage.updateOne(
      { message_id: id },
      { message_id: id, url: att.url, file_name: att.filename, guild: _id },
      { upsert: true }
    )
  );
  return Promise.all(uploads);
};

export const processImage = (message: Message) => {
  logger.debug("Processing an message");
  if (!isArchiveChannel(message.channel) || !hasArchivableContent(message)) {
    return;
  }
  logger.debug("Image is valid");
  return archiveAttachments(message);
};
