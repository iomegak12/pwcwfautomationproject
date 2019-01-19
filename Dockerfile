FROM node:latest

COPY ./dist/learningngdevops /app

WORKDIR /app

RUN npm init -y

RUN npm install http-server --save

EXPOSE 8080

ENTRYPOINT http-server -p 8080
