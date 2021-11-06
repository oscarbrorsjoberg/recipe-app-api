FROM node:13.12-alpine
MAINTAINER Oscar Sjoeberg

ARG API_URL

RUN mkdir -p /app/frontend
WORKDIR /app/frontend

COPY package.json package-lock.json ./
RUN npm install
RUN npm install react-scripts@3.4.1 -g

ENV REACT_APP_HOST_API_ADDRESS $API_URL

# -D creates user for the application
RUN adduser -D user
USER user

EXPOSE 3000
