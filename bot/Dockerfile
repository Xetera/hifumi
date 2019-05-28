FROM node:10 as build

WORKDIR /app/bot

COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build

CMD npm start
