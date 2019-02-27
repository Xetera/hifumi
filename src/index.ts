import { AkairoClient } from "discord-akairo";
import { Message } from "discord.js";
import dotenv from "dotenv";
import glob from "glob";

dotenv.config();

const prefix = process.env.PREFIX || "$";

const client = new AkairoClient({
  prefix,
  ownerID: [],
  commandDirectory: "./dist/commands/",
}, {
  disableEveryone: true,
});

console.log(`Working dir: ${process.cwd()}`);

client.on("message", (message: Message) => {
  // TODO: fix this
  // @ts-ignore
  console.log(`(${message.guild.name}:${message.channel.name}) ${message.author.tag}: ${message.content}`);
});

const initToastLog = () => {
  console.log("Loading commands...");
  for (const command of client.commandHandler.modules.array()) {
    console.log(` - ${prefix}${command.id}: ${command.description}`);
  }
};

// TODO: check token first
client.login(process.env.TOKEN!).then(() => {
  console.log("Started up!");
  const l = `Logged in as ${client.user.tag} [id:${client.user.id}]`;
  console.log("-".repeat(l.length));
  console.log(l);
  console.log("-".repeat(l.length));
  initToastLog();
  console.log("-".repeat(l.length));
});
