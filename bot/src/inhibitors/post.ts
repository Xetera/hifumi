import { Command, Inhibitor } from "discord-akairo";
import { Message } from "discord.js";
import { withDatadog } from "../analytics/datadog";

export default class extends Inhibitor {
  constructor() {
    // @ts-ignore
    super("post", {
      type: "post"
    });
  }

  public exec(message: Message, e: Command) {
    withDatadog((client) => client.increment("bot.commands.used", 1, [`name:${e.id}`]));
    return false;
  }
}
