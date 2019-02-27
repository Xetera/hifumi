import { Command } from "discord-akairo";
import { Message } from "discord.js";

export default class TestCommand extends Command {
    constructor() {
        super("test", {
            aliases: ["test"],
            description: "This is a test",
        });
    }

    public exec(message: Message) {
        return message.channel.send("This is a test command. If you can see this that means it worked.");
    }
}
