import { AkairoClient } from "discord-akairo";
import mongoose from "mongoose";
import { Guild } from "./models/guild";

export const checkStartup = async (client: AkairoClient) => {
  const all = await Guild.find().exec();
  for (const guild of client.guilds.array()) {
    
  }
};

mongoose.connect(process.env.DATABASE_URL!, { useNewUrlParser: true });
