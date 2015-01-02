FROM node:latest
MAINTAINER mysticPrg <mysticPrg@gmail.com>

RUN apt-get update
RUN apt-get install -y npm

RUN mkdir /home/TestProject
COPY ./ /home/TestProject

WORKDIR /home/TestProject
RUN npm install
CMD node index
#CMD /bin/bash