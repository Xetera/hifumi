import { Command } from "discord-akairo";
import { Message, RichEmbedOptions } from "discord.js";
import { isNullOrUndefined } from "util";

enum Modes {
  NONE = -1,
  SNOWFLAKE,
  MEMBER,
  EMOTE,
  ANIMATED_EMOTE,
  CHANNEL
}

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
    const FIVE_BILLION = 5000000000;
    const TWO = 2;
    const NEGTEN = -10;
    let bin = "";
    let high = parseInt(dec.slice(0, NEGTEN), 10) || 0;
    let low = parseInt(dec.slice(NEGTEN), 10);

    while (low > 0 || high > 0) {
      // tslint:disable-next-line: no-bitwise // because fuck it i want bitwise
      bin = String(low & 1) + bin;
      low = Math.floor(low / TWO);
      if (high > 0) {
        low += FIVE_BILLION * (high % TWO);
        high = Math.floor(high / TWO);
      }
    }

    return bin;
  }

  public ident(id: string) {
    const LIST_END = -1;
    const EMOTE_NAME = 1;
    const EMOTE_ID = 2;

    if (typeof parseInt(id, 10) === "number" && !isNaN(parseInt(id, 10))) {
      return {id, mode: Modes.SNOWFLAKE};
    } else if (id.startsWith("<") && id.endsWith(">")) {
      const cid = id.slice(1, LIST_END);

      if (cid.includes(":")) { // emote case
        const emote = cid.split(":");
        if (emote[0] === "a") { // animated case
          return {id: emote[EMOTE_ID], mode: Modes.ANIMATED_EMOTE, extra: emote[EMOTE_NAME]};
        }
        return {id: emote[EMOTE_ID], mode: Modes.EMOTE, extra: emote[EMOTE_NAME]};
      }

      const prefix = `${/[^0-9]+/g.exec(cid)}`;
      const snowflake = cid.slice(prefix.length);

      if (prefix === "@" || prefix === "@!") {
        return {id: snowflake, mode: Modes.MEMBER};
      } else if (prefix === "#") {
        return {id: snowflake, mode: Modes.CHANNEL};
      }

      // if all else fails
      return {id: Modes.NONE, mode: Modes.NONE};
    } else {
      return {id: Modes.NONE, mode: Modes.NONE};
    }
  }

  public deconstruct(id: string, mode: Modes, more: string) {
    const EPOCH = 1420070400000;
    if (/^\d{17,19}$/.test(id)) {
      const PADDING = 64;
      const INC_START = 52;
      const PID_END = 52;
      const PID_START = 47;
      const WID_END = 47;
      const WID_START = 42;
      const TS_END = 42;

      const bin = this.decToBin(id).padStart(PADDING, "0");
      const inc = parseInt(bin.slice(INC_START), 2);
      const pid = parseInt(bin.slice(PID_START, PID_END), 2);
      const wid = parseInt(bin.slice(WID_START, WID_END), 2);
      const ts = parseInt(bin.slice(0, TS_END), 2) + EPOCH;
      const date = new Date(ts).toUTCString();

      if (more === "true") {
        return `**Timestamp:** _${date}_\n**Increment:** _${inc}_\n**Process id:** _${pid}_\n**Worker id:** _${wid}_`;
      } else {
        if (mode === Modes.MEMBER) {
          return `**Account Creation Date:**\n  _${date}_`;
        } else if (mode === Modes.EMOTE || mode === Modes.ANIMATED_EMOTE) {
          return `**Emote Creation Date:**\n_${date}_`;
        } else {
          return `**Timestamp:**\n_${date}_`;
        }
      }
    }
  }

  public parser(id: any, mode: number, ctx: Message, more?: any, extra?: string) {
    const error: RichEmbedOptions = {
      color: 0xFF0000,
      title: "Error",
      description: "Please submit a valid discord snowflake/mention."
    };

    if (mode === Modes.NONE) {
      return error;
    }

    const hifumi = "https://cdn.discordapp.com/emojis/457982593028325376.png?v=1";

    if (mode === Modes.SNOWFLAKE) {
      const embed: RichEmbedOptions = {
        color: 0x7DD9FE,
        title: this.deconstruct(id, mode, more)
      };
      return embed;
    } else if (mode === Modes.MEMBER) {
      const member = ctx.guild.members.get(id);
      if (typeof member === "undefined") {
        return error;
      }
      const user = member.user;
      const rstr = member.roles.map((roles) =>
        (roles.name === "@everyone") ? `\\${roles.name}` : `${roles.name}`
      );
      const ustr = [`Nickname: ${member.displayName}`, `Tag: ${user.tag}`, `Status: ${(user.bot) ? "Bot" : "User"}`];

      const ext = (more === "true") ? ` | ${id}` : "";
      const ts = new Date(member.joinedTimestamp).toUTCString();

      const embed: RichEmbedOptions = {
        color: 0x7DD9FE,
        title: this.deconstruct(id, mode, more),
        thumbnail: { url: user.avatarURL, height: 32, width: 32 },
        footer: { text: `Joined server at: ${ts}${ext}`, icon_url: hifumi },
        fields: [{
          name: `${user.username}'s Info`,
          value: `${ustr.join("\n")}`,
          inline: true
        }, {
          name: "Roles:",
          value: rstr.join(", "),
          inline: true
        }]
      };
      return embed;
    } else if (mode === Modes.EMOTE || mode === Modes.ANIMATED_EMOTE) {
      const extension = (mode === Modes.ANIMATED_EMOTE) ? ".gif" : ".png";
      const emoteURL = `https://cdn.discordapp.com/emojis/${id}${extension}`;
      const ext = (more === "true") ? `| ${id}` : "";
      const type = (mode === Modes.ANIMATED_EMOTE) ? "animated" : "static";

      const ZWSP = "\u200B"; // to allow for blank fields
      const data = [`${ZWSP} Name: ${extra}`, `${ZWSP} Type: ${type}`];

      const embed: RichEmbedOptions = {
        color: 0x7DD9FE,
        title: this.deconstruct(id, mode, more),
        thumbnail: { url: emoteURL, height: 32, width: 32 },
        footer: { text: `${ZWSP}${ext}`, icon_url: hifumi },
        fields: [{
          name: "Emote Information",
          value: data.join("\n")
        }],
        description: emoteURL
      };
      return embed;
    } else if (mode === Modes.CHANNEL) {
      const channel = ctx.guild.channels.get(id);
      if (typeof channel === "undefined") {
        const cError = error;
        cError.description = "Please submit a valid discord channel from this guild.";
        return cError;
      }

      const ext = (more === "true") ? `| ${id}` : "";

      const cts = channel.createdAt.toUTCString();
      const name = channel.name;
      const pos = channel.calculatedPosition;
      const category = channel.parent;

      const hasCat = (isNullOrUndefined(category)) ? false : true;
      const catName = (hasCat === true) ? category.name : "none";
      const children = (hasCat === true) ? category.children.array().join(", ") : "none";
      const catDat = (hasCat === true) ? [`Name: ${catName}`, `Children: ${children}`] : [];

      const cstr = [`Name: ${name}`, `Position: ${pos}`, `Has Category: ${hasCat}`];

      const embed: RichEmbedOptions = {
        color: 0x7DD9FE,
        title: this.deconstruct(id, mode, more),
        footer: { text: `Channel created on ${cts}${ext}`, icon_url: hifumi },
      };

      if (hasCat) {
        embed.fields = [{
          name: "Channel Information:",
          value: cstr.join("\n")
        }, {
          name : `${(hasCat) ? "Category Information:" : ""}`,
          value: `${(hasCat) ? catDat.join("\n") : ""}`
        }];
      } else {
        embed.fields = [{
          name: "Channel Information:",
          value: cstr.join("\n")
        }];
      }
      return embed;
    }
  }

  public exec(message: Message, { id, more, _ }: any) {
    const out = this.ident(id);
    const embed = this.parser(out.id, out.mode, message, more, out.extra);
    message.channel.send({ embed });
  }
}
