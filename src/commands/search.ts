import { Command } from "discord-akairo";
import { GuildMember, Message, MessageReaction, RichEmbedOptions, User } from "discord.js";
import gql from "gql-tag/dist";
import { req } from "../db";
import { Images } from "../generated/graphql";

export default class extends Command {
  constructor() {
    super("search", {
      aliases: ["search"],
      category: "utility",
      description: "Searches a saved image",
      args: [{
        id: "query",
        match: "rest"
      }]
    });
  }

  public async exec(msg: Message, { query }: any) {
    const res = await req(gql`{
      images(
        limit: 5, where: {_or: [{image_tags: {name: {_ilike: "${query}"}}}, {user: {name: {_ilike: "${query}"}}}]}
      ) {
        url
        image_tags {
          name
        }
        user_id
      }
    }`) as { images: Images[] };
    const { images: [first] } = res;
    if (!first) {
      return msg.channel.send(`No results found...`);
    }
    const embed: RichEmbedOptions = {
      image: {
        url: first.url
      },
      description: `**Posted By:** <@!${first.user_id}>\n${first.image_tags.length ?
        `**Tags**: ${first.image_tags.map((tag) => tag.name).join(", ")}` : ""}`
    };
    return msg.channel.send({ embed });
    // const filter = (reaction: MessageReaction, user: User) => (
    //   reaction.message.guild.member(user).hasPermission("BAN_MEMBERS")
    //   || .split(",").includes(member.id)
    // ) && reaction.emoji.name === "🗑";
    // // out.awaitReactions(filter, { maxEmojis: 1 }).then(() => )
  }
}
