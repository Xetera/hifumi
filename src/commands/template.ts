import { Command } from "discord-akairo";
import { Message } from "discord.js";
import { imageTemplates, loadTemplate, placeText } from "../services/image";

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
      const template = imageTemplates.find((tmp) => tmp.name.toLowerCase() === canvas.toLowerCase());
      if (!template) {
        const templates = imageTemplates.map((tmp) => `\`${tmp.name}\``);
        // TODO: echoing message back, clean this out first somehow
        return message.channel.send(
          `No template named **${canvas}** was found\n\n**Available templates:**\n${templates.join(", ")}`
        );
      }
      const image: any = await loadTemplate(template.image);
      const texted = placeText(text, image, template.dimensions, template.options);
      const attachment = texted.toBuffer();
      message.channel.send({
        files: [{
          attachment,
          name: template.image
        }]
      });
    } catch (e) {
      console.log(e);
    }
  }
}
