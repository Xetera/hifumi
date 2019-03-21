import { Command } from "discord-akairo";
import { Message } from "discord.js";

export default class extends Command {
  constructor() {
    super("stats", {
      aliases: ["stats"],
      description: "Sends the link to hifumi's stats",
    });

  }

  public async exec(message: Message, { role }: any) {
    message.channel.send("https://api.hifumi.io/bot/stats");
  }
}
