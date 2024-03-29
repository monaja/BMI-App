FROM node:latest

# create app directory
RUN  mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN npm install

ADD src /usr/src/app/src
ADD public /usr/src/app/public

RUN npm build

EXPOSE 3000

CMD [ "npm", "start"]