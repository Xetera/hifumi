import { Command } from "discord-akairo";
import { Message } from "discord.js";
import gql from "gql-tag/dist";
import { req } from "../db";

export default class extends Command {
  constructor() {
    super("autotag", {
      aliases: ["autotag"],
      description: "Autotags images from a saved image channel",
      args: [{
        id: "channel",
        type: "channel"
      }, {
        id: "tags",
        match: "rest"
      }],
    });
  }

  public async exec(message: Message, { channel, tags }: any) {
    if (!channel) {
      return message.channel.send("No channel specified");
    }
    console.log(channel.id);
    const { image_channels_by_pk: { channel_id } } = await req(gql`query($id: String!) {
      image_channels_by_pk(channel_id: $id) {
        channel_id
      }
    }`, { id: channel.id }) as any;
    if (!channel_id) {
      return message.channel.send("Only tracked channels can be autotagged, use `settings imageBoard add { channel }`");
    }
    if (!tags) {
      return message.channel.send("No tags were specified");
    }
    const tagArray = tags.split(",");

    const resp = await req(gql`
      mutation($input: [auto_tags_insert_input!]!) {
        insert_auto_tags(
          objects: $input
        ) {
            affected_rows
        }
      }
    `);
    console.log();
    // const count = await ArchivedImage.countDocuments();
    // const random = Math.floor(Math.random() * count);
    // const image = await ArchivedImage.findOne().skip(random);
    // if (!image) {
    //   throw Error();
    // }
    // await message.channel.send(image.url);
    // await Role.find({ id: role.id }).then(console.log);
  }
}
