const { Command } = require('discord-akairo');

const Discord = require('discord.js');
const RichEmbed = Discord.RichEmbed

class HelpCommand extends Command {
    constructor() {
        super('help', {
            aliases: ['help'],
            description: "Lists all the commands",
        });
    }

    exec(message) {
        let cstr = [];

        for (command of this.client.commandHandler.modules.array()) {
            cstr.push(`$${command.id}: ${command.description}`)
        }

        const HelpEmbed = new RichEmbed()
        .setTitle("Hifumi (Rewritten)")
        .setDescription("Temporary Description")

        .addField("Commands", cstr.join('\n'))

        message.channel.send({ embed: HelpEmbed })
    }
}

module.exports = HelpCommand;