FROM node:15-slim

RUN mkdir -p /usr/src/webapp

COPY src /usr/src/webapp/src
COPY dist /usr/src/webapp/dist

COPY server.js /usr/src/webapp/

COPY data.json /usr/src/webapp/
COPY deploy-package.json /usr/src/webapp/package.json


WORKDIR /usr/src/webapp

# RUN npm ci --only=production
RUN echo 'package-lock=false' >> .npmrc
RUN npm install

EXPOSE 4200

CMD ["node", "server.js"]