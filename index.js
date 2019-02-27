const { AkairoClient } = require('discord-akairo');
//const djs = new Discord.Client();
const glob = require('glob');

const client = new AkairoClient({
    ownerID: [],
    prefix: '$',
    commandDirectory: './commands/',
}, {
        disableEveryone: true
});

console.log(`Working dir: ${process.cwd()}`);

const config = require("./config.json");
const prefix = "$"


client.on('message', message => {
	console.log(`(${message.guild.name}:${message.channel.name}) ${message.author.tag}: ${message.content}`);
});

function initToastLog() {
    console.log("Loading commands...")
    for (command of client.commandHandler.modules.array()) {
        console.log(` - ${prefix}${command.id}: ${command.description}`)
    }
};

client.login(config["token"]).then(() => {
    console.log('Started up!');
    const l = `Logged in as ${client.user.tag} [id:${client.user.id}]`;
    console.log('-'.repeat(l.length));
    console.log(l);
    console.log('-'.repeat(l.length));
    initToastLog();
    console.log('-'.repeat(l.length));
});

