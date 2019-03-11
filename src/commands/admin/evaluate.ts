import { Message } from "discord.js";
import { Command } from "discord-akairo";

export default class EvalCommand extends Command {
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

  async exec(message: Message, { code }: any) {
    const { OWNERS } = process.env;

    if (!OWNERS) {
      return false;
    }

    const isOwner = OWNERS.split(",").some(owner => owner === message.author.id);
    if (!isOwner) {
      return;
    }

    const out = await eval(code);
    return message.channel.send(out);
  }
}
