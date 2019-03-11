import { createCommand } from "../../utils";
import { Message } from "discord.js";

export default createCommand({
  id: "eval",
  aliases: ["eval"],
  args: [{
    id: "code",
    match: "rest"
  }],
  condition(message: Message) {
    const { OWNERS } = process.env;
    if (!OWNERS) {
      return false;
    }
    const owners = OWNERS.split(",");
    return owners.some(owner => message.author.id === owner);
  },
  async exec(message: Message, { code }: any) {
    // @ts-ignore
    const out = await eval(code);
    return message.channel.send(out);
  }
});
