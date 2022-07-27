# api

FROM node:lts-alpine
WORKDIR /usr/src/app
COPY ./packages/api packages/api
COPY ./packages/common packages/common
COPY ./package*.json .
RUN npm install
EXPOSE 8080
CMD ["npm", "run", "api"]
