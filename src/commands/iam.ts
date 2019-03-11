import { Command } from "discord-akairo";
import { GuildMember, Message } from "discord.js";
import { Role } from "../models/role";
import { createCommand } from "../utils";


export default class extends Command {
  constructor() {
    super("iam", {
      aliases: ["iam"],
      description: "Assigns a grantable role",
      args: [{
        id: "role",
        type: "role"
      }],
    });

  }

  async exec(message: Message, { role }: any) {
    await Role.find({ id: role.id }).then(console.log);
  }
}
