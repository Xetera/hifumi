import dotenv from "dotenv";
dotenv.config();

import { AkairoClient } from "discord-akairo";
import { handleEvents } from "./events";

import "./db";

const prefix = process.env.PREFIX || "$";

const client = new AkairoClient({
  prefix,
  ownerID: [],
  commandDirectory: "./dist/commands/",
}, {
  disableEveryone: true,
});

handleEvents(client);

// TODO: check token first
client.login(process.env.TOKEN!);
