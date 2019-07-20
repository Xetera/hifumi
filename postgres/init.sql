-- user needed for analytics
CREATE USER datadog WITH PASSWORD 'datadog';
GRANT pg_monitor to datadog;

-- fuzzy search for hasura graphql function
CREATE EXTENSION fuzzystrmatch;
CREATE EXTENSION pg_stat_statements;
