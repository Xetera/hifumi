import {CommandHandler} from "discord-akairo";

export default class extends CommandHandler {
  public on(event: string, ...e: any[]): any {
    console.log(event);
  }
}
