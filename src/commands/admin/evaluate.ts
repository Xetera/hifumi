import { Command } from "discord-akairo";
import { Message } from "discord.js";

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

  public async exec(message: Message, { code }: any) {
    const { OWNERS } = process.env;

    if (!OWNERS) {
      return false;
    }

    const isOwner = OWNERS.split(",").some((owner) => owner === message.author.id);
    if (!isOwner) {
      return;
    }
    const clean = (s: string) => s.replace(process.env.TOKEN!, "[REDACTED]");

    try {
      // tslint:disable-next-line:no-eval
      const out = await eval(code);
      return message.channel.send(clean(out));
    } catch (e) {
      return message.channel.send(clean(e.message));
    }
  }
}
