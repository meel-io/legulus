FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "./node_modules/pm2/bin/pm2", "start", "ecosystem.config.js" ]