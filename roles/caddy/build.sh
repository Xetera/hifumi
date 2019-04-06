#!/usr/bin/env bash

docker build --build-arg plugins=docker,datadog,cloudflare \
  -t moedevs/caddy \
  github.com/abiosoft/caddy-docker.git \
  && docker push moedevs/caddy
