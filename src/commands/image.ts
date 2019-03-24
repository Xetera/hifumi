import { Command } from "discord-akairo";
import { GuildMember, Message } from "discord.js";
import { Role } from "../models/role";
import { ArchivedImage } from "../models/archived_image";

export default class extends Command {
  constructor() {
    super("image", {
      aliases: ["image"],
      description: "Gets an image",
      args: [{
        id: "type",
      }],
    });

  }

  public async exec(message: Message, { type }: any) {
    const count = await ArchivedImage.count({});
    const random = Math.floor(Math.random() * count);
    const image = await ArchivedImage.findOne().skip(random);
    if (!image) {
      throw Error();
    }
    message.channel.send(image.url);
    // await Role.find({ id: role.id }).then(console.log);
  }
}