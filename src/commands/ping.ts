import { Command } from "discord-akairo";
import { Message, RichEmbed } from "discord.js";
import { createCommand } from "../utils";

export default class extends Command {
  constructor() {
    super("ping", {
      aliases: ["ping", "🏓"],
      category: "utility",
      description: "Checks latency of the bot",
    });

  }
  async exec(msg: Message) {
    const m = await msg.channel.send("Ping...") as Message;
    const latency = Math.round(m.createdTimestamp - msg.createdTimestamp);
    const response = `Pong! 🏓 Latency: **${latency}ms**`;
    return m.edit(response);
  }
}
