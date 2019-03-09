import { BufferedMetricsLogger } from "datadog-metrics";

const { DATADOG_API_KEY } = process.env;

const _dd = new BufferedMetricsLogger({
  apiKey: DATADOG_API_KEY || "disabled in development",
  host: 'hifumi',
  prefix: 'hifumi.',
  flushIntervalSeconds: 15,
});

export const withDatadog = (func: (client: BufferedMetricsLogger) => void) => {
  if (DATADOG_API_KEY) {
    func(_dd);
  }
};

