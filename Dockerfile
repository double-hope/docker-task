FROM node:16-alpine

COPY package*.json ./
RUN npm install

COPY src ./src
COPY index.js ./

CMD ['npm', 'start']