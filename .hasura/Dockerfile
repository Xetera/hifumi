FROM hasura/graphql-engine:v1.0.0-alpha42.cli-migrations

ARG HASURA_GRAPHQL_DATABASE_URL
ENV HASURA_GRAPHQL_MIGRATIONS_DIR=migrations

ADD migrations migrations
