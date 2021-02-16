FROM node:alpine

WORKDIR /app

RUN npm install -g serve

EXPOSE 5000

COPY build build

CMD [ "serve", "-s", "build" ]
