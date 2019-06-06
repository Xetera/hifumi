FROM elixir:1.8
ENV REPLACE_OS_VARS=true

RUN apt-get update && apt-get install -y inotify-tools
WORKDIR /opt/app

RUN mix local.hex --force && mix local.rebar --force

COPY mix.exs mix.lock ./
COPY . ./
RUN mix do deps.get, deps.compile, compile
RUN mix release --env=prod

CMD _build/dev/rel/yun/bin/yun foreground