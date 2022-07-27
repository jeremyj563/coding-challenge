# api

FROM node:lts-alpine
WORKDIR /usr/src/app
COPY api/package*.json .
COPY api api
COPY common common
EXPOSE 8080
WORKDIR /usr/src/app/api
RUN npm ci
CMD ["node", "api/index.js"]
