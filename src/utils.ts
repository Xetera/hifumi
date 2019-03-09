import { AkairoClient } from "discord-akairo";
import { CommandHandler } from "discord-akairo";
import pino from "pino";
import { chain } from "ramda";

export const boxContents = (...texts: string[]) => {
  const getLines = (text: string) => text.split('\n').map(line => line.length);
  const splitTexts = chain(getLines);
  const maxLength = Math.max(...splitTexts(texts));
  const [head, ...tail] = texts;

  const spacer = '-'.repeat(maxLength);
  return tail.reduce((all, text) => [...all, text, spacer], [spacer, head, spacer]).join('\n')
};

export const countMembers = (client: AkairoClient) =>
  client.guilds.reduce((all, guild) => guild.memberCount + all, 0);


export const logger = pino({ prettyPrint: process.env.NODE_ENV !== "production" });

export default class extends CommandHandler {
  public on(event: string, ...e: any[]): any {
    console.log(event);
  }
}

export const STAR = "⭐";
