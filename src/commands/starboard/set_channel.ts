import { Command } from "discord-akairo";
import { Message } from "discord.js";
import { Guild } from "../../models/guild";

export default class extends Command {
  constructor() {
    super("setchannel", {
      aliases: ["setchannel", "sc"],
      description: "Sets the starboard channel",
      userPermissions: "BAN_MEMBERS",
      args: [{
        id: "channel",
        type: "channel",
      }],
    });
  }

  async exec(message: Message, { channel }: any) {
    await Guild.updateOne({ id: message.guild.id }, { starboard_channel: channel.id }, {
      upsert: true,
      setDefaultsOnInsert: true
    });
    await message.channel.send(`Set your starboard channel to ${channel}`);
  }
}
