# FROM elixir:1.8 as build
# 
# COPY . .
# 
# RUN mix local.hex --force && mix local.rebar --force
# 
# RUN export MIX_ENV=prod && \
#     rm -Rf _build && \
#     mix deps.get && \
#     mix release
# 
# CMD ["_build/prod/rel/yun/bin/yun", "foreground"]

FROM elixir:1.8

RUN apt-get update && apt-get install -y inotify-tools

WORKDIR /opt/app

RUN mix local.hex --force && mix local.rebar --force

COPY config/* config/
COPY mix.exs mix.lock ./
COPY . ./
RUN mix do deps.get, deps.compile, compile
RUN mix release --env=prod

CMD iex -S mix