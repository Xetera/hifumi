FROM node:10

WORKDIR /opt/app

ADD package*.json ./
RUN npm install

ADD tsconfig.json typings.d.ts ./
ADD src src/
RUN npm run build
CMD npm start
