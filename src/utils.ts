import { AkairoClient } from "discord-akairo";
import { chain } from "ramda";

export const boxContents = (...texts: string[]) => {
  const getLines = (text: string) => text.split('\n').map(line => line.length);
  const splitTexts = chain(getLines);
  const maxLength = Math.max(...splitTexts(texts));
  const [head, ...tail] = texts;

  const spacer = '-'.repeat(maxLength);
  return tail.reduce((all, text) => [...all, text, spacer], [spacer, head, spacer]).join('\n')
};

export const countMembers = (client: AkairoClient) =>
  client.guilds.reduce((all, guild) => guild.memberCount + all, 0);

