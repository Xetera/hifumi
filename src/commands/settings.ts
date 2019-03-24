import { Command } from "discord-akairo";
import { Message, TextChannel } from "discord.js";
import { Guild } from "../models/guild";
import { logger } from "../utils";

const changeWelcome = (message: Message, channel: TextChannel) =>
  Guild.updateOne({ id: channel.guild.id }, { welcome_channel: channel.id }, { upsert: true });

const deleteWelcome = (message: Message) =>
  Guild.updateOne({ id: message.guild.id }, { $unset: { welcome_channel: "" } });

interface Context {
  message: Message;
  args: string[];
}

const settings: { [k: string]: (ctx: Context) => Promise<void> } = {
  welcome: async ({ message, args }: Context) => {
    const [value] = args;
    const targetChannel = message.mentions.channels.first();
    if (targetChannel) {
      await changeWelcome(message, targetChannel);
      await message.channel.send(`Set your welcome channel to ${targetChannel}.`);
    } else if (value === "disable") {
      await deleteWelcome(message);
      await message.channel.send(`Disabled the server welcome.`);
    }
  },
  imageBoard: async ({ message, args }: Context) => {
    const [target, status] = args;
    const targetChannel = message.mentions.channels.first();
    if (!targetChannel) {
      return void message.channel.send(`No channel was specified`);
    }
    if (target === "remove") {
      await Guild.updateOne(
        { id: message.guild.id }, { $pull: { image_archives: targetChannel.id } }
      );
      await message.channel.send(`${targetChannel} was removed from your tracked image archives`);
    } else if (target === "add") {
      await Guild.updateOne(
        { id: message.guild.id }, { $addToSet: { image_archives: targetChannel.id } }
      );
      await message.channel.send(`Added ${targetChannel} to your tracked image archives`);
    } else if (!target) {
      await message.channel.send(`No setting specified`);
    }
  }
};

export default class extends Command {
  constructor() {
    super("settings", {
      aliases: ["settings"],
      userPermissions: ["BAN_MEMBERS"],
      description: "Adjusts the settings",
      args: [{
        id: "setting",
      }, {
        id: "args",
        match: "rest",
        type: "string"
      }],
    });
  }

  public async exec(message: Message, { setting, args }: any) {
    const func = settings[setting];
    if (!func) {
      message.channel.send(`'${setting}' is not a valid setting`);
    }
    try {
      await func({ message, args });
    } catch (e) {
      await message.channel.send(`Something went wrong while trying to change that setting!`);
      logger.error(e);
    }
  }
}
