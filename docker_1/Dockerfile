FROM node:8

WORKDIR /app

COPY package.json /app
RUN npm install
COPY app.js /app

# error in next line
CMD node index.js
EXPOSE 8080