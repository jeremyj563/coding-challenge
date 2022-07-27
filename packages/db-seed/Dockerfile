# db-seed

FROM node:lts-alpine
WORKDIR /usr/src/app
COPY ./packages/db-seed packages/db-seed
COPY ./packages/common packages/common
COPY ./package*.json .
RUN npm install
CMD ["npm", "run", "db-seed"]
