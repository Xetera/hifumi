import {
  AkairoClient, Command,
  CommandExecFunction, CommandOptions,
  ConditionalCommandExecFunction,
  RegexCommandExecFunction
} from "discord-akairo";
import { GuildMember, Message, TextChannel } from "discord.js";
import pino from "pino";
import { chain } from "ramda";
import R = require("ramda");
import { withDatadog } from "./analytics/datadog";

const _send = TextChannel.prototype.send;

TextChannel.prototype.send = function(...args: any[]) {
  withDatadog((client) => client.increment("bot.messages.sent"));
  return _send.call(this, ...args);
};

export const boxContents = (...texts: string[]) => {
  const getLines = (text: string) => text.split("\n").map((line) => line.length);
  const splitTexts = chain(getLines);
  const maxLength = Math.max(...splitTexts(texts));
  const [head, ...tail] = texts;

  const spacer = "-".repeat(maxLength);
  return tail.reduce((all, text) => [...all, text, spacer], [spacer, head, spacer]).join("\n");
};

export const countMembers = (client: AkairoClient) =>
  client.guilds.reduce((all, guild) => guild.memberCount + all, 0);

export const logger = pino({
  prettyPrint: process.env.NODE_ENV !== "production",
  level: "debug"
});

interface CreateCommand extends CommandOptions {
  /**
   * The exec function can be called in 3 different ways, however,
   * Typescript doesn't seem to be able to support explicit `this`
   * coming from external types, union types or overloads. In order to
   * specify the `this` type the signature MUST be directly assigned
   * in the interface
   * @param message
   * @param args
   * @param edited
   */
  exec: (this: Command, message: Message, args: any, edited: boolean) => any;
  id: string;
}

export const isOwner = (id: string) => (process.env.OWNERS || "140862798832861184")
  .split(",")
  .some(R.equals(id));

export const isMod = (member: GuildMember) =>
  member.hasPermission("BAN_MEMBERS") || isOwner(member.id);

export const STAR = "⭐";
