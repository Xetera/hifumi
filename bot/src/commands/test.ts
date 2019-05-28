import { Command } from "discord-akairo";
import { Message } from "discord.js";

export default class extends Command {
  constructor() {
    super("test", {
      aliases: ["test"],
      description: "This is a test",
      editable: true
    });
  }

  public async exec(message: Message) {
    return message.channel.send("This is a test command. If you can see this that means it worked.");
  }
}
