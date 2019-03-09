import { AkairoClient } from "discord-akairo";
import { Emoji, Message, MessageReaction, TextChannel, User } from "discord.js";
import { logger } from "./utils";
import { addStar, removeStar } from "./starboard";

const events: { [key: string]: string } = {
  MESSAGE_REACTION_ADD: "messageReactionAdd",
  MESSAGE_REACTION_REMOVE: "messageReactionRemove",
};

const onMessage = ({ guild, channel, author, content }: Message) => {
  // @ts-ignore
  console.log(`(${guild.name}:${channel.name}) ${author.tag}: ${content}`);
};

const onReady = async (client: AkairoClient) => {
  console.log("Started up!");
  const l = `Logged in as ${client.user.tag} [id:${client.user.id}]`;
  console.log("-".repeat(l.length));
  console.log(l);
  console.log("-".repeat(l.length));
  console.log("Loading commands...");

  for (const command of client.commandHandler.modules.array()) {
    console.log(` - ${process.env.PREFIX || "$"}${command.id}: ${command.description}`);
  }
  console.log("-".repeat(l.length));
};

const onReactAdd = async (react: MessageReaction, user: User) => {
  logger.info(`Received a add event by ${user.username}`);
  await addStar(react, user);
};

const onReactRemove = async (react: MessageReaction, user: User) => {
  logger.info(`Received a reaction remove event by ${user.username}`);
  await removeStar(react, user);
};

export const handleEvents = (client: AkairoClient) => {
  client.on("message", onMessage);
  client.on("ready", () => onReady(client));
  client.on("messageReactionAdd", onReactAdd);
  client.on("messageReactionRemove", onReactRemove);
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
