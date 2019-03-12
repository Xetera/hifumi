import { BufferedMetricsLogger } from "datadog-metrics";
import { AkairoClient } from "discord-akairo";
import { countMembers, logger } from "../utils";

const { DATADOG_API_KEY } = process.env;

const dd = new BufferedMetricsLogger({
  apiKey: DATADOG_API_KEY || "disabled in development",
  host: "hifumi",
  prefix: "hifumi.",
  flushIntervalSeconds: 15,
  defaultTags: [process.env.NODE_ENV === "production" ? "prod" : "dev"]
});

export const withDatadog = (func: (client: BufferedMetricsLogger) => void) => {
  if (DATADOG_API_KEY) {
    func(dd);
  }
};

export const sendAnalytics = (client: AkairoClient) => {
  logger.debug(`Sending analytics`);
  const totalMembers = countMembers(client);
  const totalServers = client.guilds.size;
  const ping = client.ping;
  withDatadog((datadog) => {
    datadog.gauge("bot.member.count", totalMembers);
    datadog.gauge("bot.server.count", totalServers);
    datadog.gauge("bot.ping", ping);
  });
};
