import { AkairoClient } from "discord-akairo";
import { GuildMember, Message, TextChannel } from "discord.js";
import { withDatadog } from "./analytics/datadog";
import { boxContents, countMembers } from "./utils";
import { ANALYTICS_INTERVAL } from "./constants";

const onGuildMessage = ({ guild, channel, author, content }: Message) => {
  const channelName = (channel as TextChannel).name;
  console.log(`(${guild.name}:${channelName}) ${author.username}: ${content}`);
  withDatadog(client => client.increment('messages.seen', 1, ['guild']))
};

const onDM = ({ author, content }: Message) => {
  console.log(`(DM:${author.username}#${author.tag}): ${content}`);
  withDatadog(client => client.increment('messages.seen', 1, ['dm']))
};

const onMessage = (message: Message) => {
  if (message.guild) {
    return onGuildMessage(message)
  }
  return onDM(message);
};

const logStartup = (client: AkairoClient) => {
  const stat = `Logged in as ${client.user.tag} [id:${client.user.id}]`;
  const commands = client.commandHandler.modules.map(
    mod => `${process.env.PREFIX || "$"}${mod.id}: ${mod.description}`
  );
  const out = boxContents("Started Up!", stat, commands.join("\n"));
  console.log(out)
};

const sendAnalytics = (client: AkairoClient) => {
  const totalMembers = countMembers(client);
  const totalServers = client.guilds.size;
  withDatadog(datadog => {
    datadog.gauge('member.count', totalMembers);
    datadog.gauge('server.count', totalServers)
  });
};

const onReady = async (client: AkairoClient) => {
  logStartup(client);
  setTimeout(
    () => sendAnalytics(client),
    ANALYTICS_INTERVAL
  )
};

export const handleEvents = (client: AkairoClient) => {
  client.on("message", onMessage);
  client.on("ready", () => onReady(client));
};
