import { Inhibitor } from "discord-akairo";
import { Message } from "discord.js";
import { withDatadog } from "../analytics/datadog";

export default class extends Inhibitor {
  constructor() {
    // @ts-ignore
    super("pre", {
      reason: "pre",
      type: "pre",
    });
  }

  public exec(message: Message, e: any) {
    // console.log(message.content);
    return false;
  }
}
