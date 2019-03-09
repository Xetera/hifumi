import { CommandHandler } from "discord-akairo";
import pino from "pino";

export const logger = pino({ prettyPrint: process.env.NODE_ENV !== "production" });

export default class extends CommandHandler {
  public on(event: string, ...e: any[]): any {
    console.log(event);
  }
}

export const STAR = "⭐";
