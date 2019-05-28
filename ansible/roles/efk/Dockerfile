FROM fluent/fluentd:v1.3.3-1.0

USER root

COPY fluentd.conf /fluentd/etc/fluent.conf

RUN ["gem", "install", "fluent-plugin-elasticsearch", "--no-rdoc", "--no-ri", "--version", "1.9.5"]
