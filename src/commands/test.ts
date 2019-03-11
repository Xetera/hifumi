import { Message } from "discord.js";
import { createCommand } from "../utils";
import { Command } from "discord-akairo";

export default class extends Command {
  constructor() {
    super("test", {
      aliases: ["test"],
      description: "This is a test",
      editable: true
    });
  }

  async exec(message: Message) {
    return message.channel.send("This is a test command. If you can see this that means it worked.");
  }
}
