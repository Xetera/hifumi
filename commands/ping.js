const { Command } = require('discord-akairo');

const Discord = require('discord.js');
const RichEmbed = Discord.RichEmbed

class PingCommand extends Command {
    constructor() {
        super('ping', {
            aliases: ['ping'],
            description: "Checks latency of the bot",
        }
    )};

    async exec(msg) {
        const m = await msg.channel.send('Ping...');
        const latency = Math.round(m.createdTimestamp - msg.createdTimestamp);
    
        const PingEmbed = new RichEmbed()
    
        .setDescription(`Pong! 🏓`)
        .addField('Latency', `${latency} ms`, true)

        m.edit({ embed: PingEmbed });
    }
}

module.exports = PingCommand;