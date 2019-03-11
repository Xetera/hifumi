import { createCommand } from "../utils";
import { Message } from "discord.js";
import { Command } from "discord-akairo";

export default createCommand({
  id: "settings",
  aliases: ["settings"],
  description: "Adjusts the settings",
  args: [{
    id: "setting",
  }, {
    id: "out",
  }],
  exec(message: Message, args: any, edited: boolean) {
    // console.log(this.client);
    return "dab"
  },
});
