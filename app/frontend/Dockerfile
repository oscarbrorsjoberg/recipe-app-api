FROM node:13.12-alpine
MAINTAINER Oscar Sjoeberg

ARG API_URL

RUN mkdir /frontend
WORKDIR /frontend

# COPY package.json package-lock.json ./

ENV REACT_APP_HOST_API_ADDRESS $API_URL

# -D creates user for the application
# RUN adduser -D user
# RUN chown -R user:user /frontend/ && chmod -R 755 /frontend
# USER user

COPY . /frontend
RUN npm install
RUN npm install react-scripts@3.4.1 -g


EXPOSE 3000
