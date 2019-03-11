import dotenv from "dotenv";
dotenv.config();
import { AkairoClient } from "discord-akairo";
import{ logger } from "./utils";
import { handleEvents } from "./events";

import "./db";

const prefix = process.env.PREFIX || "$";

const client = new AkairoClient({
  prefix,
  ownerID: [],
  commandDirectory: "./dist/commands/",
  inhibitorDirectory: "./dist/inhibitors"
}, {
  disableEveryone: true,
});

logger.debug(`Working dir: ${process.cwd()}`);

handleEvents(client);

// TODO: check token first
client.login(process.env.TOKEN!);
