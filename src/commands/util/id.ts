import { Command } from "discord-akairo";
import { Message, RichEmbedOptions } from "discord.js";

enum Modes {
  NONE = -1,
  SNOWFLAKE,
  MEMBER,
  EMOTE,
  ANIMATED_EMOTE,
  CHANNEL
};

export default class extends Command {
  constructor() {
    super("id", {
      aliases: ["id", "snowflake"],
      category: "util",
      description: "Discord snowflake id parser",
      args: [{
        id: "id",
      }, {
        id: "more",
      }, {
        id: "_"
      }],
    });
  }

  // https://github.com/discordjs/discord.js/blob/master/src/util/Util.js#L365
  public decToBin(dec: string) {
    let bin = '';
    let high = parseInt(dec.slice(0, -10)) || 0;
    let low = parseInt(dec.slice(-10));
  
    while (low > 0 || high > 0) {
      bin = String(low & 1) + bin;
      low = Math.floor(low / 2);
      if (high > 0) {
        low += 5000000000 * (high % 2);
        high = Math.floor(high / 2);
      }
    }
  
    return bin;
  };

  public ident(id: string) {
    if (typeof parseInt(id) === "number" && !isNaN(parseInt(id))) {
      return {id: id, mode: Modes.SNOWFLAKE};
    } else if (id.startsWith("<") && id.endsWith(">")) {
      const cid = id.slice(1,-1);

      if (cid.includes(":")) { // emote case
        const emote = cid.split(":");
        if (emote[0] === "a") { // animated case
          return {id: emote[2], mode: Modes.ANIMATED_EMOTE, extra: emote[1]};
        };
        return {id: emote[2], mode: Modes.EMOTE, extra: emote[1]};
      }

      const prefix = "" + /[^0-9]+/g.exec(cid);
      const snowflake = cid.slice(prefix.length);

      if (prefix === "@" || prefix === "@!") {
        return {id: snowflake, mode: Modes.MEMBER};
      } else if (prefix === "#") {
        return {id: snowflake, mode: Modes.CHANNEL};
      };

      // if all else fails
      return {id: Modes.NONE, mode: Modes.NONE};
    } else {
      return {id: Modes.NONE, mode: Modes.NONE};
    }
  }

  public deconstruct(id: string, mode: Modes, more: string) {
    const epoch = 1420070400000;
    if (/^\d{17,19}$/.test(id)) {
      const bin = this.decToBin(id).padStart(64, '0');
      const inc = parseInt(bin.slice(52), 2);
      const pid = parseInt(bin.slice(47, 52), 2);
      const wid = parseInt(bin.slice(42, 47), 2);
      const ts = parseInt(bin.slice(0, 42), 2) + epoch;
      const date = new Date(ts).toUTCString();

      if (more == "true") {
        return `**Timestamp:** _${date}_\n**Increment:** _${inc}_\n**Process id:** _${pid}_\n**Worker id:** _${wid}_`;
      } else {
        if (mode == Modes.MEMBER) {
          return `**Account Creation Date:**\n  _${date}_`;
        } else {
          return `**Timestamp:**\n_${date}_`;
        }
      }
    };
  }

  public parser(id: any, mode: number, ctx: Message, more?: any, extra?: any) {
    const error: RichEmbedOptions = {
      color: 0xFF0000,
      title: "Error",
      description: "Please submit a valid discord snowflake/mention."
    };

    const hifumi = "https://cdn.discordapp.com/emojis/457982593028325376.png?v=1";

    if (mode === Modes.SNOWFLAKE) {
      const embed: RichEmbedOptions = {
        color: 0x7DD9FE,
        title: this.deconstruct(id, mode, more)
      }
      return embed;
    } else if (mode === Modes.MEMBER) {
      const member = ctx.guild.members.get(id)
      if (typeof member === "undefined") {
        return error;
      }
      const user = member.user;
      const rstr = member.roles.map((roles) => 
        (roles.name == "@everyone") ? `\\${roles.name}` : `${roles.name}`
      );
      const ustr = [`Nickname: ${member.displayName}`, `Tag: ${user.tag}`, `Status: ${(user.bot) ? "Bot" : "User"}`];
      
      const ext = (more == "true") ? ` | ${id}` : "";

      const embed: RichEmbedOptions = {
        color: 0x7DD9FE,
        title: this.deconstruct(id, mode, more),
        thumbnail: { url: user.avatarURL, height: 32, width: 32 },
        footer: { text: `Joined server at: ${new Date(member.joinedTimestamp).toUTCString()}${ext}`, icon_url: hifumi },
        fields: [{
          name: `${user.username}'s Info`,
          value: `${ustr.join("\n")}`,
          inline: true
        },{
          name: "Roles:",
          value: rstr.join(", "),
          inline: true
        }]
      };
      return embed;
    };

    return error;
  }

  public exec(message: Message, { id, more, _ }: any) {
    const out = this.ident(id);
    const embed = this.parser(out.id, out.mode, message, more, out.extra);
    message.channel.send({ embed });
  }
}

