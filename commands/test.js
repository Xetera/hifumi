const { Command } = require('discord-akairo');

class TestCommand extends Command {
    constructor() {
        super('test', {
            aliases: ['test'],
            description: "This is a test",
        });
    }

    exec(message) {
        return message.channel.send("This is a test command. If you can see this that means it worked.")
    }
}

module.exports = TestCommand;