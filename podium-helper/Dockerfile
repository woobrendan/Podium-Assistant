FROM node:15.13-alpine

WORKDIR /podium-helper


COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY . .

CMD ["npm", "start"]