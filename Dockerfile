 

# base image
FROM node:12.17.0

 
# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
RUN npm install -g @angular/cli@10.1.7

# USER node
# COPY --chown=node:node . .


# add app
COPY . /app

RUN npm install
RUN npm run build:ssr


EXPOSE 8080
# start app
CMD node dist/server/main.js