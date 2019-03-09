import {Command} from "discord-akairo";
import {Message} from "discord.js";
import {Role} from "../models/role";

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

  public async exec(message: Message, {role}: any) {
    await message.reply("Creating role...");
    await Role.create({id: role.id, guild_id: role.guild.id, name: role.name}).then(console.log);
  }
}
