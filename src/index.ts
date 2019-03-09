import { AkairoClient } from "discord-akairo";
import CustomCommandHandler from "./utils";
import dotenv from "dotenv";
import { handleEvents } from "./events";
dotenv.config();

import "./db";

const prefix = process.env.PREFIX || "$";

const client = new AkairoClient({
  prefix,
  ownerID: [],
  commandDirectory: "./dist/commands/",
}, {
  disableEveryone: true,
});

const _ = new CustomCommandHandler(client, {
  commandDirectory: "./dist/commands",
  blockClient: true,
});

console.log(`Working dir: ${process.cwd()}`);

handleEvents(client);

// TODO: check token first
client.login(process.env.TOKEN!);
