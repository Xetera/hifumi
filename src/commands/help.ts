import { Message, RichEmbedOptions } from "discord.js";
import { createCommand } from "../utils";

export default createCommand({
  id: "help",
  aliases: ["help"],
  description: "Lists all the commands",
  exec(message: Message) {
    const cstr = this.client.commandHandler.modules.map(command =>
      `$${command.id}: ${command.description}`
    );

    const embed: RichEmbedOptions = {
      title: "Hifumi (Rewritten)",
      description: "Temporary Description",
      fields: [{
        name: "Commands",
        value: cstr.join("\n")
      }]
    };

    message.channel.send({ embed });
  }
});

