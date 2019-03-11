import { Message } from "discord.js";
import { Command } from "discord-akairo";

export default class Eval extends Command {
  constructor() {
    super("eval", {
      aliases: ["eval"],
      category: "admin",
      args: [{
        id: "code",
        match: "rest"
      }],
    });
  }

  condition(message: Message): boolean {
    const { OWNERS } = process.env;

    if (!OWNERS) {
      return false;
    }

    return OWNERS.split(",").some(owner => owner === message.author.id);
  }

  async exec(message: Message, { code }: any) {
    const out = await eval(code);
    return message.channel.send(out);
  }
}
