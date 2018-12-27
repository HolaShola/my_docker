FROM node:8

WORKDIR /app

COPY package.json app.js ./
RUN npm install

CMD ["node", "app.js"]
EXPOSE 8080