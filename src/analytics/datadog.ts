import { BufferedMetricsLogger } from "datadog-metrics";

const dd = new BufferedMetricsLogger({
  apiKey: process.env.DATADOG_API_KEY || "disabled in development",
  host: 'hifumi',
  prefix: 'hifumi.',
  flushIntervalSeconds: 15,
});

export const withDatadog = (fun: (client: BufferedMetricsLogger) => any) => {
  if (process.env.DATADOG_API_KEY) {
    console.log('sending data');
    fun(dd);
  }
};

