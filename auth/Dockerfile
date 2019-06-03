FROM maven:3-alpine as build

MAINTAINER Xetera

RUN mkdir /app
WORKDIR /app

ADD pom.xml /app

RUN mvn dependency:go-offline -B

COPY src /app/src

RUN mvn package

VOLUME ["/kotlin-data"]

EXPOSE 3000

# multistage build
FROM openjdk:9

ENV JARFILE yun-1.0-SNAPSHOT-jar-with-dependencies.jar
COPY --from=build /app/target/$JARFILE .
RUN touch .env

CMD java -jar $JARFILE

