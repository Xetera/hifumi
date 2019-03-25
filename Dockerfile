FROM maven:3-alpine as build

MAINTAINER Xetera

RUN mkdir /app
WORKDIR /app

COPY . /app

RUN mvn clean package

VOLUME ["/kotlin-data"]

EXPOSE 3000

# multistage build
FROM openjdk:9

ENV JARFILE yun-1.0-SNAPSHOT-jar-with-dependencies.jar
COPY --from=build /app/target/$JARFILE .

CMD java -jar $JARFILE

