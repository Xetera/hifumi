import { Command } from "discord-akairo";
import { GuildMember, Message, MessageReaction, RichEmbedOptions, User } from "discord.js";
import gql from "gql-tag/dist";
import { _client, req } from "../db";
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
    const { data } = await _client.query({
      image_tags_aggregate: [{
        where: {
          name: {
            _eq: query
          }
        }
      }, {
        aggregate: {
          count: 1,
        }
      }]
    });
    const { count } = data!.image_tags_aggregate.aggregate!;
    const offset = Math.floor(Math.random() * count!);
    const res = await _client.query({
      images: [{
        limit: 1,
        offset,
        where: {
          image_tags: {
            name: {
              _eq: query
            }
          }
        }
      }, {
        url: 1,
        image_tags: {
          name: 1
        },
        user_id: 1
      }]
    });
    const { images: [first] } = res.data!;
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
