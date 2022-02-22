FROM node:14

WORKDIR /usr/src/project

COPY . .
RUN npm install
RUN rm ./env/local.env

RUN npm run build
CMD node dist/main.js
