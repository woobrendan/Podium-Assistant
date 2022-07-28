FROM node:15.13-alpine
WORKDIR /podium-helper
ENV PATH="./node_modules/.bin:$PATH"
COPY package.json ./
COPY . .
RUN npm run build
CMD ["npm", "start"]