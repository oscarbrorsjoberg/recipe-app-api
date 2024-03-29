FROM python:3.7-alpine
MAINTAINER Oscar Sjoeberg

ENV PYTHONUNBUFFERED 1

COPY ./requirements.txt /requirements.txt
RUN apk add --update --no-cache postgresql-client jpeg-dev
# RUN apk add --update nodejs npm
RUN apk add --update --no-cache --virtual .tmp-build-deps \
      gcc libc-dev linux-headers postgresql-dev musl-dev zlib zlib-dev
RUN pip install -r /requirements.txt
RUN apk del .tmp-build-deps


RUN mkdir /app 
WORKDIR /app
COPY ./app /app

# WORKDIR /app/frontend
# RUN npm install
# RUN npm install react-scripts@3.4.1 -g


RUN mkdir -p /vol/web/media
RUN mkdir -p /vol/web/static
# -D creates user for the application
RUN adduser -D user
RUN chown -R user:user /vol/
RUN chmod -R 755 /vol/web

USER user
