import dotenv from "dotenv";
dotenv.config();

import { AkairoClient } from "discord-akairo";

import "./db";
import { handleEvents } from "@/events";

const prefix = process.env.PREFIX || "$";

const client = new AkairoClient({
  prefix,
  ownerID: [],
  commandDirectory: "./dist/commands/",
  inhibitorDirectory: "./dist/inhibitors/"
}, {
  disableEveryone: true,
});

handleEvents(client);

// TODO: check token first
client.login(process.env.TOKEN!);
