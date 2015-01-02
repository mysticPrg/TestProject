#!/bin/sh
docker build --tag mysticprg/testproject .
docker run -d -p 8123:8080 --name test mysticprg/testproject