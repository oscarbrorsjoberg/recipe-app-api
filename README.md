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
