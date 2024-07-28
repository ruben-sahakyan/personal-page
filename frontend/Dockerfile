FROM node:18.13.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.21.0-alpine


CMD [ "nginx", "-g", "daemon off;" ]