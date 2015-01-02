FROM node:latest
MAINTAINER mysticPrg <mysticPrg@gmail.com>

#RUN apt-get update

RUN mkdir /home/TestProject
COPY ./ /home/TestProject

WORKDIR /home/TestProject
CMD node index
#CMD /bin/bash