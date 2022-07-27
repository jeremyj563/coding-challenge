# api

FROM node:lts-alpine
WORKDIR /usr/src/app
COPY ./api/package*.json .
RUN npm ci
COPY ./api ./api
COPY ./common ./common
EXPOSE 8080
CMD [ "node", "api/index.js" ]
