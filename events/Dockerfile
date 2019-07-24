# This dockerfile is used solely for local development
FROM node:10

COPY package*.json .

RUN npm install

COPY . .

CMD npm run dev