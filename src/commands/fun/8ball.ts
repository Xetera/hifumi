import { Command } from "discord-akairo";
import { Message, RichEmbedOptions, Permissions } from "discord.js";
import { ClientRequest } from "http";
import { Guild } from "../../models/guild";

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

    const TEN = 10;
    const FIFTEEN = 15;
    const TWENTY = 20;

    const num = Math.floor(Math.random()*TWENTY);


    if (num < TEN) {
        return {string: choices[num], color: 0x6DAE55};
    } else if (num < FIFTEEN) {
        return {string: choices[num], color: 0xF1982D};
    } else {
        return {string: choices[num], color: 0xFF5370};
    }
  }

  public exec(msg: Message) {

    const out = this.choose();
    const blobber = "<:hb1:556699207235403787>";
    const clapR = "<a:hb2:556699208967651328>";
    const clapL = "<a:hb4:556699207516291113>";
    const aoooba = "<:hb5:556699207893909504>";

    const ifServerIsFun = `${blobber} ${clapR} **${out.string}** ${clapL} ${aoooba}`;
    const ifServerSucks = `**${out.string}**`;

    const embed: RichEmbedOptions = {
        color: out.color,
        description: (msg.guild.me.permissions.has("EXTERNAL_EMOJIS")) ? ifServerIsFun : ifServerSucks,
      };

    return msg.channel.send("🎱 |  The Magic 8 Ball says...", { embed });
  }
}
