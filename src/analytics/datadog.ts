import { BufferedMetricsLogger } from "datadog-metrics";
import { AkairoClient } from "discord-akairo";
import { countMembers, logger } from "../utils";

const { DATADOG_API_KEY } = process.env;

const _dd = new BufferedMetricsLogger({
  apiKey: DATADOG_API_KEY || "disabled in development",
  host: "hifumi",
  prefix: "hifumi.",
  // allows us to buffer stats and send them in bulk
  flushIntervalSeconds: 15,
});

/**
 * Wrapper function that prevents calling metrics in development mode
 * @param func
 */
export const withDatadog = (func: (client: BufferedMetricsLogger) => void): void => {
  if (DATADOG_API_KEY) {
    func(_dd);
  }
};

export const sendAnalytics = (client: AkairoClient) => {
  const perMinute = 60000;
  const totalMembers = countMembers(client);
  const totalServers = client.guilds.size;
  const ping = client.ping;
  const uptime = client.uptime / perMinute;
  withDatadog((datadog) => {
    logger.debug(`Sending analytics`);
    datadog.gauge("bot.member.count", totalMembers);
    datadog.gauge("bot.server.count", totalServers);
    datadog.gauge("bot.ping", ping);
    datadog.gauge("bot.uptime", uptime);
  });
};
