FROM haskell:8
ENV executable=newgame-exe

COPY . .
RUN stack build
CMD stack exec $executable