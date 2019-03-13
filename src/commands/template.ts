import { Command } from "discord-akairo";
import { Message } from "discord.js";
import { loadTemplate, placeText } from "../services/image";

export default class extends Command {
  constructor() {
    super("template", {
      aliases: ["template"],
      description: "Creates an image template",
      args: [{
        id: "canvas",
      }, {
        id: "text",
        match: "rest"
      }],
    });
  }

  public async exec(message: Message, { canvas, text }: any) {
    try {
      const image: any = await loadTemplate(canvas);
      const texted = placeText(text, image, { x: 80, y: 160, width: 280, height: 80 });
      const attachment = texted.toBuffer();
      message.channel.send({
        files: [{
          attachment,
          name: "momo.jpg"
        }]
      });
    } catch (e) {
      console.log(e);
    }
  }
}
