FROM node:16.20.2

WORKDIR .
COPY package*.json ./
RUN yarn
COPY . .
EXPOSE 3001
CMD [ "node", "app.js" ]