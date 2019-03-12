import { Message, MessageEmbed, MessageReaction, RichEmbed, RichEmbedOptions, TextChannel, User } from "discord.js";
import { Guild } from "./models/guild";
import { StarredMessage, } from "./models/starred_message";
import { logger, STAR } from "./utils";

const genFooter = (count: string | number) => `${STAR} ${count}`;

const genEmbed = (embed: MessageEmbed) => (count: number): MessageEmbed =>
  // @ts-ignore
  new RichEmbed(embed).setFooter(genFooter(count) );

const updateStar = async (id: string, starboard: TextChannel, stars: number) => {
  const doc = await StarredMessage.findOne({ id });
  if (!doc) {
    return logger.error("Tried to delete a starred message that should have been committed but wasn't");
  }
  console.log(doc);
  const message = await starboard.fetchMessage(doc.embed_id);
  const [embed] = message.embeds;
  if (!embed) {
    return logger.warn("A saved star was found with 0 embeds");
  }
  const newEmbed = genEmbed(embed)(stars);
  await message.edit({ embed: newEmbed });
};

const deleteStar = async (id: string, starboard: TextChannel) => {
  const doc = await StarredMessage.findOneAndDelete({ id });
  if (!doc) {
    return logger.error("Tried to delete a starred message that should have been committed but wasn't");
  }
  console.log(doc);
  const embed = await starboard.fetchMessage(doc.embed_id);
  await embed.delete();
};

export const addStar = async (reaction: MessageReaction, user: User) => {
  if (reaction.emoji.name !== STAR) {
    return;
  }

  const settings = await Guild.findOne({ id: reaction.message.guild.id }) || new Guild();
  const underMinimum = reaction.count < settings.min_stars;

  if (underMinimum) {
    return;
  }

  const starred = await StarredMessage.findOne({ id: reaction.message.id });

  if (!settings.starboard_channel) {
    return;
  }

  const starboard = user.client.channels.get(settings.starboard_channel) as TextChannel;

  if (!starred) {
    const embed: RichEmbedOptions = {
      fields: [{
        name: "Author",
        value: reaction.message.author.toString(),
        inline: true
      }, {
        name: "Message",
        value: reaction.message.cleanContent,
      }],
      footer: {
        text: genFooter(reaction.count)
      }
    };
    const { id: embed_id } = await starboard.send({ embed }) as Message;

    await StarredMessage.create({
      id: reaction.message.id, stars: reaction.count, embed_id
    });
    return;
  }

  return updateStar(reaction.message.id, starboard, reaction.count);
};

export const removeStar = async (reaction: MessageReaction, user: User) => {
  if (reaction.emoji.name !== STAR) {
    return;
  }
  const settings = await Guild.findOne({ id: reaction.message.guild.id }) || new Guild();

  if (!settings.starboard_channel) {
    return;
  }

  const starboard = user.client.channels.get(settings.starboard_channel) as TextChannel;
  const underMinimum = reaction.count < settings.min_stars;

  console.log(underMinimum);

  if (underMinimum) {
    return deleteStar(reaction.message.id, starboard);
  }

  return updateStar(reaction.message.id, starboard, reaction.count);
};
