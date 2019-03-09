import { Command } from "discord-akairo";
import { Message } from "discord.js";
import { Role } from "../models/role";

export default class AddRoleCommand extends Command {
  constructor() {
    super("addrole", {
      aliases: ["ar", "addrole"],
      description: "Adds a role to the grantables list",
      userPermissions: "BAN_MEMBERS",
      args: [{
        id: "role",
        type: "role",
      }],
    });
  }

  async exec(message: Message, { role }: any) {
    const existing = await Role.find({ id: role.id });

    if (existing) {
      return message.channel.send("That role is already grantable.");
    }

    await Role.create({ id: role.id, guild_id: role.guild.id, name: role.name });
  }
}
