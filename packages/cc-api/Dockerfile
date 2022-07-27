# api

FROM node:lts-alpine
WORKDIR /usr/src/app
COPY ./packages/cc-api packages/api
COPY ./packages/cc-common packages/common
COPY ./package*.json .
RUN npm install
EXPOSE 8080
CMD ["npm", "run", "api"]
