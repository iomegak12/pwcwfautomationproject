FROM node:10-alpine

COPY ./dist/learningngdevops /app

WORKDIR /app

RUN npm init -y

RUN npm install http-server --save

EXPOSE 8080

ENTRYPOINT http-server -p 8080
