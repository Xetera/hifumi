import dotenv from "dotenv";
dotenv.config();
import { AkairoClient } from "discord-akairo";
import { handleEvents } from "./events";
import { logger } from "./utils";

import "./db";

const prefix = process.env.PREFIX || "$";
const owners = process.env.OWNERS || "";

const client = new AkairoClient({
  prefix,
  ownerID: owners.split(","),
  commandDirectory: "./dist/commands/",
  inhibitorDirectory: "./dist/inhibitors",
}, {
  disableEveryone: true,
});

logger.debug(`Logging in...`);

handleEvents(client);

// TODO: check token first
client.login(process.env.TOKEN!);
