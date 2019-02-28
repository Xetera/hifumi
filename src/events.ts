import { AkairoClient } from "discord-akairo";
import { Message } from "discord.js";

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

export const handleEvents = (client: AkairoClient) => {
  client.on("message", onMessage);
  client.on("ready", () => onReady(client))
};
