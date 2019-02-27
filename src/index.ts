import { AkairoClient } from "discord-akairo";
import dotenv from "dotenv";
import { handleEvents } from "./events";

dotenv.config();

const prefix = process.env.PREFIX || "$";

const client = new AkairoClient({
  prefix,
  ownerID: [],
  commandDirectory: "./dist/commands/",
}, {
  disableEveryone: true,
});

console.log(`Working dir: ${process.cwd()}`);

handleEvents(client);

// TODO: check token first
client.login(process.env.TOKEN!);
