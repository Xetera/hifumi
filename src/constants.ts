const SECOND = 1000;
const MINUTE = 60;
const DEFAULT_ANALYTICS_INTERVAL = SECOND * MINUTE;
export const ANALYTICS_INTERVAL = Number(process.env.ANALYTICS_INTERVAL || DEFAULT_ANALYTICS_INTERVAL);

export const GRAPHQL_ENDPOINT = process.env.HASURA_URL || "http://localhost:8080/v1alpha1/graphql";
