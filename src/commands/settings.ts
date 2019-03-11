import { Message, TextChannel } from "discord.js";
import { Guild } from "../models/guild";
import { Command } from "discord-akairo";

const changeWelcome = (message: Message, channel: TextChannel) =>
  Guild.updateOne({ id: channel.guild.id }, { welcome_channel: channel.id }, { upsert: true });

const deleteWelcome = (message: Message) =>
  Guild.updateOne({ id: message.guild.id }, { $unset: { welcome_channel: "" } });

const settings = new Set("welcome");

export default class extends Command {
  constructor() {
    super("settings", {
      aliases: ["settings"],
      userPermissions: ["BAN_MEMBERS"],
      description: "Adjusts the settings",
      args: [{
        id: "setting",
      }, {
        id: "val",
      }],
    });
  }

  async exec(message: Message, { setting, val }: any) {
    const targetChannel = message.mentions.channels.first();

    if (setting === "welcome") {
      if (targetChannel) {
        await changeWelcome(message, targetChannel);
        await message.channel.send(`Set your welcome channel to ${targetChannel}.`);
      } else if (val === "disable") {
        await deleteWelcome(message);
        await message.channel.send(`Disabled the server welcome.`);
      }
    }
  }
}

