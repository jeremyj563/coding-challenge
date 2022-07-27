# db-seed

FROM node:16-alpine
WORKDIR /usr/src/app
COPY db-seed/package*.json .
RUN npm ci
COPY db-seed ./db-seed
COPY common ./common
CMD [ "node", "db-seed/index.js" ]
