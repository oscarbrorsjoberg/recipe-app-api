# Bknd REST API with Django

## Recipe app

Hello from the other side!

## Notes

TDD -- test driven development

Dockerfile -- for running app

requirements -- for getting python packages up on the Dockerfile


### Docker compose

So after building the dockerfile we want to interact with it, using a docker compose file.
Running the different services.


Docker compose runns application on the docker image, but

see: docker-compose.yml


## Travis CI https://www.travis-ci.com/

Continues integrations service that can be linked to github

 see .travis.yml

## Flake8

flake8 is a command-line utility for enforcing style consistency across Python projects

## Djangos test framework

Use djangos test framework to build tests.

## TDD

Write tests first, see that code solves the test.

## Using docker compose together with django

Staring an app with name core

```
docker-compose run app sh -c "python manage.py startapp core"
```

Migrates models in core module 
```
docker-compose run app sh -c "python manage.py makemigrations core"
```

Runs tests and flake8 for all test files in django project
```
sudo docker-compose run app sh -c "python manage.py test && flake8"
```
## Django Documentation

# Reverse util function

Gets the url template tag of the given model/object
This is useful so we call on objects rather than url names, since the latter can change.

"admin:corer\_user\_changelist"
1. Here admin is for the given superuser.
2. core is the application 
3. User changelist: path to custom template

So for admin within coreapp we get the path to the custom template(url)?

## Read admin documentation

For this project we fiddled around somewhat overriding some of django admins
core functions

## Testing actual pages work
 set up a testing client
 reverse() to get url
 check with status_code == 200

# Postgres
 
Postgresql is the an open database framework.
There is a python module for this (see requirements)
Postgres needs to be started up in the dockercontainer.
Certain env variables needs to be set to communicate between the postgres image and the application.
The type of database needs to be set up in django settings file.

# Mocking (unittest.mock) Read
- Never write tests that depends on external services
- Not have to create data
Do this programately with a mock model

# Mange user endpoint

Simply put, an endpoint is one end of a communication channel. When an API interacts with another system, the touchpoints of this communication are considered endpoints. For APIs, an endpoint can include a URL of a server or service. 

Each endpoint is the location from which APIs can access the resources they need to carry out their function.

- create users
- change user data like 
- update users 
- create user auth token


## Serializers

What really is this??
A model serializer post/get data from frontend from/to the abstract data class in backend.
So takes python data and formulates some web response or web request.

## Views

Python function that takes a web request and returns a web response.

## Create token endpoint


## Questions: 

Q1. What is a rest api?

Rest stands for representational state transfer.
CRUD (Create Read Update and Delete)
These have to be linked to the http operations.

Create = Post
Read   = Get
Update = Put
Delete = Delete

Request (Header, Operation, Endpoint, Params)

Needs to handle this!

Q2. What is a view in Django?

Q3. What is an url in Django?

Q4. What is a serializer in Django?

Q5. What is authentication in Django?

Q6. What is an endpoint in Django?
An url where fonctionality is stored.

Q7. What is a payload in web development?

Q8. When to use django translations? 

Q9. How can ModelViewSet from django rest\_framework be used? 

Q10. How can ModelSerializer from django rest\_framework be used? 
