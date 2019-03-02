import Discord from "discord.js";

export const boxContents = (...texts: string[]) => {
  const maxLength = Math.max(...texts.map(text => text.length));
  const [head, ...tail] = texts;
  const spacer = '-'.repeat(maxLength);
  return tail.reduce((all, text) => [...all, text, spacer], [spacer, head, spacer]).join('\n')
};

// Discord.TextChannel.prototype.send =
