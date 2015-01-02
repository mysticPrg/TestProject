#!/bin/sh
docker stop test
docker build --tag mysticprg/testproject .
docker rm test
docker run -d -p 8123:8080 --name test mysticprg/testproject