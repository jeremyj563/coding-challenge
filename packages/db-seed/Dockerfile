# db-seed

FROM node:lts-alpine
WORKDIR /usr/src/app
COPY ./packages/cc-db-seed packages/db-seed
COPY ./packages/cc-common packages/common
COPY ./package*.json .
RUN npm install
CMD ["npm", "run", "db-seed"]
