FROM hasura/graphql-engine:v1.0.0-beta.4.cli-migrations

ARG HASURA_GRAPHQL_DATABASE_URL
ENV HASURA_GRAPHQL_MIGRATIONS_DIR=migrations

ADD migrations migrations
