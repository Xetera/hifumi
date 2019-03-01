FROM haskell as build-env

WORKDIR /opt/server
ENV executable=newgame-exe

COPY package.yaml .
COPY stack.yaml .
RUN stack install --only-dependencies -j4
ADD . .
RUN stack install

FROM ubuntu

WORKDIR /opt/server
COPY --from=build-env /root/.local/bin/newgame-exe ./newgame-exe

RUN apt-get update
RUN apt-get install netbase

CMD ./newgame-exe
