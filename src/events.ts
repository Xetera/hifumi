import { AkairoClient } from "discord-akairo";
import { Emoji, GuildMember, Message, MessageReaction, RichEmbedOptions, TextChannel, User } from "discord.js";
import { sendAnalytics, withDatadog } from "./analytics/datadog";
import { ANALYTICS_INTERVAL } from "./constants";
import { Guild } from "./models/guild";
import { updateEmojis } from "./services/emoji";
import { addStar, removeStar } from "./starboard";
import { boxContents, logger } from "./utils";

const events: { [key: string]: string } = {
  MESSAGE_REACTION_ADD: "messageReactionAdd",
  MESSAGE_REACTION_REMOVE: "messageReactionRemove",
};

const onGuildMessage = ({ guild, channel, author, content }: Message) => {
  const channelName = (channel as TextChannel).name;
  console.log(`(${guild.name}:${channelName}) ${author.username}: ${content}`);
  withDatadog((client) => client.increment("bot.messages.seen", 1, ["guild"]));
};

const onDM = ({ author, content }: Message) => {
  console.log(`(DM:${author.username}#${author.tag}): ${content}`);
  withDatadog((client) => client.increment("bot.messages.seen", 1, ["dm"]));
};

const onMessage = (message: Message) => {
  if (message.guild) {
    return onGuildMessage(message);
  }
};
const logStartup = (client: AkairoClient) => {
  const stat = `Logged in as ${client.user.tag} [id:${client.user.id}]`;
  const commands = client.commandHandler.modules.map(
    (mod) => `${process.env.PREFIX || "$"}${mod.id}: ${mod.description}`
  );
  const out = boxContents("Started Up!", stat, commands.join("\n"));
  console.log(out);
};

const onReady = async (client: AkairoClient) => {
  logStartup(client);
  await updateEmojis(client);
  setInterval(() => sendAnalytics(client), ANALYTICS_INTERVAL);
};

const onReactAdd = async (react: MessageReaction, user: User) => {
  logger.info(`Received an add event by ${user.username}`);
  await addStar(react, user);
};

const onReactRemove = async (react: MessageReaction, user: User) => {
  logger.info(`Received a reaction remove event by ${user.username}`);
  await removeStar(react, user);
};

const onUserJoin = async (member: GuildMember) => {
  const { welcome_channel } = await Guild.findOne({ id: member.guild.id }) || new Guild();
  if (!welcome_channel) {
    return;
  }

  const channel = member.guild.channels.get(welcome_channel);

  if (!channel) {
    // TODO: delete setting here
    return logger.warn(`welcome channel in ${member.guild.name} deleted`);
  } else if (!(channel instanceof TextChannel)) {
    return logger.warn(`welcome channel in ${member.guild.name} is not a text channel`);
  }

  const embed: RichEmbedOptions = {
    color: 42495,
    title: `Welcome ${member.user.username}`,
    description:
      `Welcome to ${member.guild.name}, check out #welcome for the rules and ` +
      `instructions on getting yourself a role. Come say hi when you're done.`,
    thumbnail: { url: member.user.displayAvatarURL }
  };
  channel.send({ embed });
};

export const handleEvents = (client: AkairoClient) => {
  client.on("message", onMessage);
  client.on("ready", () => onReady(client));
  client.on("messageReactionAdd", onReactAdd);
  client.on("messageReactionRemove", onReactRemove);
  client.on("guildMemberAdd", onUserJoin);
  client.on("raw", async (event: any) => {
    if (!("t" in event) || !Object.keys(events).includes(event.t)) {
      return;
    }

    const { d: data } = event;

    const user = client.users.get(data.user_id);
    const channel = client.channels.get(data.channel_id) as TextChannel || await user!.createDM();

    if (channel.messages.has(data.message_id)) {
      return;
    }

    const message = await channel.fetchMessage(data.message_id);
    const emojiKey = data.emoji.id ? `${data.emoji.name}:${data.emoji.id}` : data.emoji.name;

    let reaction = message.reactions.get(emojiKey);

    // when removing the last reaction no reaction is emitted
    if (!reaction) {
      const emoji = new Emoji(client.guilds.get(data.guild_id)!, data.emoji);
      reaction = new MessageReaction(message, emoji, 0, data.user_id === client.user.id);
    }

    console.log(reaction);

    client.emit(events[event.t], reaction, user);
  });
};
