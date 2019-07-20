import { Command } from "discord-akairo";
import { Message, TextChannel, User } from "discord.js";
import gql from "gql-tag/dist";
import { _client, req } from "../db";
import { isMod, isOwner, logger } from "../utils";

const changeWelcome = (message: Message, channel: TextChannel) =>
  req(gql`
  mutation {
    update_guilds(
      _set: {
        welcome_channel: "${channel.id}"
      }
      where: {
        guild_id: {
          _eq: "${channel.guild.id}"
        }
      }
    ) {
      returning {
        welcome_channel
      }
    }
  }
`);

const deleteWelcome = (message: Message) =>
  req(gql`
  mutation {
    update_guilds(
      _set: {
        welcome_channel: null
      }
      where: {
        guild_id: {
          _eq: "${message.id}"
        }
      }
    ) {
      returning {
        welcome_channel
      }
    }
  }
`);

const upsertImageChannel = (channel: TextChannel, user: User) =>
  _client.mutation({
    insert_image_channels: [
      {
        objects: [
          {
            channel_id: channel.id,
            guild_id: channel.guild.id,
            assigner_id: user.id
          }
        ]
      },
      {
        returning: {
          channel_id: 1
        }
      }
    ]
  });

const deleteImageChannel = (channel: TextChannel) =>
  req(gql`
  mutation {
    delete_image_channels(
      where: {
        channel_id: {
          _eq: "${channel.id}"
        }
      }
    ) {
      returning {
        assigner_id
      }
    }
  }
`);

interface Context {
  message: Message;
  args: string;
}

const settings: { [k: string]: (ctx: Context) => Promise<void> } = {
  welcome: async ({ message, args }: Context) => {
    const [value] = args;
    const targetChannel = message.mentions.channels.first();
    if (targetChannel) {
      await changeWelcome(message, targetChannel);
      await message.channel.send(
        `Set your welcome channel to ${targetChannel}.`
      );
    } else if (value === "disable" || value === "off") {
      await deleteWelcome(message);
      await message.channel.send(`Disabled the server welcome.`);
    }
  },
  imageBoard: async ({ message, args }: Context) => {
    const [target, status] = args.split(" ");
    const targetChannel = message.mentions.channels.first();
    if (!targetChannel) {
      return void message.channel.send(`No channel was specified`);
    }
    if (target === "remove") {
      await deleteImageChannel(targetChannel);
      await message.channel.send(
        `${targetChannel} was removed from your tracked image archives`
      );
    } else if (target === "add") {
      await upsertImageChannel(targetChannel, message.author);
      await message.channel.send(
        `Added ${targetChannel} to your tracked image archives`
      );
    } else if (!target) {
      await message.channel.send(`No setting specified`);
    }
  }
};

export default class extends Command {
  constructor() {
    super("settings", {
      aliases: ["settings"],
      description: "Adjusts the settings",
      args: [
        {
          id: "setting"
        },
        {
          id: "args",
          match: "rest",
          type: "string"
        }
      ]
    });
  }

  public async exec(message: Message, { setting, args }: any) {
    if (!isMod(message.member)) {
      return;
    }

    if (!setting) {
      return message.channel.send(`Available settings: welcome, imageBoard`);
    }
    const func = settings[setting];
    if (!func) {
      return message.channel.send(`'${setting}' is not a valid setting`);
    }
    try {
      await func({ message, args });
    } catch (e) {
      await message.channel.send(
        `Something went wrong while trying to change that setting!`
      );
      logger.error(e);
    }
  }
}
