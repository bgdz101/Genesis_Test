FROM node:16
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm install -g migrate-mongo
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
