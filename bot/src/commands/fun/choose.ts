import { Command } from "discord-akairo";
import { Message } from "discord.js";

export default class extends Command {
  constructor() {
    super("choose", {
      aliases: ["choose", "pick"],
      category: "choose",
      description: "Picks an option from a selection.",
    });
  }

  public exec(msg: Message, { input }: any) {
    const options = `${input}`.split(",").map((str) => str.trim());
    const choice = Math.floor(Math.random() * options.length);
    msg.channel.send(`${msg.author}, I choose **${options[choice]}**`);
  }
}
