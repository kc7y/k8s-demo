FROM node

WORKDIR /app

RUN npm install -g serve

EXPOSE 5000

COPY build .

CMD [ "serve", "-s", "build" ]
