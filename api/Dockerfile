FROM node:18.13.0-alpine 

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm run build

RUN rm -rf ./src

EXPOSE 5000

CMD [ "npm", "run", "start:prod" ]