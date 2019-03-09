import { AkairoClient } from "discord-akairo";
import {Message, MessageReaction, TextChannel, User} from "discord.js";

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

const onReact = async (react: MessageReaction, user: User) => {
  console.log(react);
};

export const handleEvents = (client: AkairoClient) => {
  client.on("message", onMessage);
  client.on("ready", () => onReady(client));
  client.on("messageReactionAdd", onReact);
  client.on("raw", async (event: any) => {
    console.log(event.t);
    if (!Object.keys(events).includes(event.t)) {
      return;
    }
    const { d: data } = event;
    const user = client.users.get(data.user_id);
    const channel = client.channels.get(data.channel_id) as TextChannel || await user!.createDM();

    if (channel.messages.has(data.message_id)) { return; }

    const message = await channel.fetchMessage(data.message_id);
    const emojiKey = (data.emoji.id) ? `${data.emoji.name}:${data.emoji.id}` : data.emoji.name;
    const reaction = message.reactions.get(emojiKey);

    client.emit(events[event.t], reaction, user);
  });
};
