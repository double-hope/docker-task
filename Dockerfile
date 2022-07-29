FROM node:16-alpine

COPY src ./src
COPY index.js ./
COPY package*.json ./
RUN npm install

CMD ["npm", "start"]
EXPOSE 8080