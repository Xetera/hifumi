import { Command } from "discord-akairo";
import { Message, RichEmbed } from "discord.js";

export default class HelpCommand extends Command {
  constructor() {
    super("help", {
      aliases: ["help"],
      description: "Lists all the commands",
    });
  }

  public exec(message: Message) {
    const cstr = [];

    for (const command of this.client.commandHandler.modules.array()) {
      cstr.push(`$${command.id}: ${command.description}`);
    }

    const HelpEmbed = new RichEmbed()
      .setTitle("Hifumi (Rewritten)")
      .setDescription("Temporary Description")

      .addField("Commands", cstr.join("\n"));

    message.channel.send({ embed: HelpEmbed });
  }
}

