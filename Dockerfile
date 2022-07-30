FROM node:16-alpine

WORKDIR /app

COPY package.json .

RUN npm install 

COPY . .

EXPOSE 8080

ENV PORT=8081

ENTRYPOINT ["npm", "run", "pro"]

