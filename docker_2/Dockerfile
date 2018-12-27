FROM node:8

WORKDIR /app

COPY package.json app.js ./
COPY public public/
RUN npm install

CMD ["node", "app.js"]
