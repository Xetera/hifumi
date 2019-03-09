import { Inhibitor } from "discord-akairo";
import { Message } from "discord.js";
import { withDatadog } from "../analytics/datadog";


export default class extends Inhibitor {
  constructor(){
    super("util", {
      reason: "util"
    })
  }
  exec(message: Message) {
    withDatadog(client => client.increment('commands.used'));
    // console.log(message.content);
    return false;
  }
}
