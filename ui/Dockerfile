# ui

FROM node:lts-alpine
WORKDIR /usr/src/app
COPY ./api/package*.json .
COPY ./ui ./ui
EXPOSE 3000
WORKDIR /usr/src/app/ui
RUN npm ci
CMD ["npm", "start"]
