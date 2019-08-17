import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve("..", ".env") });
import { AkairoClient } from "discord-akairo";
import { handleEvents } from "./events";
import { logger } from "./utils";

import "./db";

const prefix = process.env.HIFUMI_PREFIX || "$";
const owners = process.env.HIFUMI_OWNERS || "";

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
client.login(process.env.HIFUMI_TOKEN!);
