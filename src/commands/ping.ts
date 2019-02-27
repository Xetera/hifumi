import { Command } from "discord-akairo";
import { Message, RichEmbed } from "discord.js";

export default class PingCommand extends Command {
  constructor() {
    super("ping", {
        aliases: ["ping"],
        description: "Checks latency of the bot",
      },
    );
  }

  public async exec(msg: Message) {
    const m = await msg.channel.send("Ping...") as Message;
    const latency = Math.round(m.createdTimestamp - msg.createdTimestamp);

    const PingEmbed = new RichEmbed()
      .setDescription(`Pong! 🏓`)
      .addField("Latency", `${latency} ms`, true);

    return m.edit({ embed: PingEmbed });
  }
}
