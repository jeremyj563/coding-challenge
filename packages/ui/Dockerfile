# ui

FROM node:lts-alpine
WORKDIR /usr/src/app
COPY ./packages/ui packages/ui
COPY ./package*.json .
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "ui"]
