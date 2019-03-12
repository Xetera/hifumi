import { Command } from "discord-akairo";
import { Message, RichEmbed } from "discord.js";

export default class extends Command {
  constructor() {
    super("ping", {
      aliases: ["ping", "🏓"],
      category: "utility",
      description: "Checks latency of the bot",
    });

  }
  public async exec(msg: Message) {
    const m = await msg.channel.send("Ping...") as Message;
    const latency = Math.round(m.createdTimestamp - msg.createdTimestamp);
    const response = `Pong! 🏓 Latency: **${latency}ms**`;
    return m.edit(response);
  }
}
