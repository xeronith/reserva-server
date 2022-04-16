FROM node:16

WORKDIR /app
COPY package*.json ./
COPY tsconfig.json ./
COPY src /app/src

RUN ls -a
RUN npm install && npm install typescript -g

WORKDIR /app/src
RUN tsc

EXPOSE 3000
CMD ["node", "/app/dist/index.js"]