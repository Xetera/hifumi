import { Inhibitor } from "discord-akairo";
import { Message } from "discord.js";

export default class extends Inhibitor {
  constructor() {
    // @ts-ignore
    super("post", {
      type: "post"
    })
  }

  exec(message: Message) {
    console.log('after');
    return false;
  }
}
