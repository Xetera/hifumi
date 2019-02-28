import { Command } from "discord-akairo";
import { GuildMember, Message } from "discord.js";
import { Roles } from "../models/roles";

export default class IamCommand extends Command {
  constructor() {
    super("iam", {
      aliases: ["iam"],
      description: "Assigns a grantable role",
      args: [{
        id: "role",
        type: "role"
      }]
    })
  }

  public async exec(message: Message, { role }: any){
    await Roles.find({ id: role.id }).then(console.log)
  }
}
