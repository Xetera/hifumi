import { Command } from "discord-akairo";
import { Message, RichEmbedOptions } from "discord.js";

export default class extends Command {
  constructor() {
    super("8ball", {
      aliases: ["8ball", "🎱"],
      category: "fun",
      description: "Ask the magic 8 ball anything...",
    });

  }
  public choose() {
    // https://en.wikipedia.org/wiki/Magic_8-Ball

    const choices = [["It is certain."], // Affermative
                     ["It is decidedly so."],
                     ["Without a doubt."],
                     ["Yes - definitely."],
                     ["You may rely on it."],
                     ["As I see it, yes."],
                     ["Most likely."],
                     ["Outlook good."],
                     ["Yes."],
                     ["Signs point to yes."],
                     ["Reply hazy, try again."], // Non-Committal
                     ["Ask again later."],
                     ["Better not tell you now."],
                     ["Cannot predict now."],
                     ["Concentrate and ask again."],
                     ["Don't count on it."], // Negative
                     ["My reply is no."],
                     ["My sources say no."],
                     ["Outlook not so good."],
                     ["Very doubtful."],
                    ];

    const num = Math.floor(Math.random()*20);

    if (num < 10) {
        return {string: choices[num], color: 0x6DAE55}
    }
    else if (num < 15) {
        return {string: choices[num], color: 0xF1982D}
    }
    else {
        return {string: choices[num], color: 0xFF5370}
    }
  }

  public exec(msg: Message) {

    const out = this.choose()

    const response: RichEmbedOptions = {
        color: out.color,
        title: "",
        description: `<:hb1:556699207235403787> <a:hb2:556699208967651328> **${out.string}** <a:hb4:556699207516291113> <:hb5:556699207893909504>`,
      };

    return msg.channel.send("🎱 |  The Magic 8 Ball says...", { embed: response});
  }
}
