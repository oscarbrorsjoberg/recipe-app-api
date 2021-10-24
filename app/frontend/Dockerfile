FROM node:13.12-alpine
MAINTAINER Oscar Sjoeberg

RUN mkdir -p /app/frontend
WORKDIR /app/frontend

COPY package.json package-lock.json ./
RUN npm install
RUN npm install react-scripts@3.4.1 -g

COPY . /app/frontend

# -D creates user for the application
RUN adduser -D user
USER user


EXPOSE 3000
