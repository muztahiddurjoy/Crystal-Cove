FROM node:19

WORKDIR /typical-express
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["npm","start"]