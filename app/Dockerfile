FROM node:10.15.1

ADD yarn.lock /yarn.lock
ADD package.json /package.json

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin
RUN yarn

# set working directory
WORKDIR /app
ADD . /app

CMD ["npm", "start"]