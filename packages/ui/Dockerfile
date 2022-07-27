# ui

FROM node:lts-alpine
WORKDIR /usr/src/app
COPY ./packages/cc-ui packages/cc-ui
COPY ./package*.json .
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "ui"]
