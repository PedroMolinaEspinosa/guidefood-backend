FROM node:9-slim
WORKDIR /app
COPY package.json package.json 
RUN npm install
RUN npm install nodemon -g --quiet
COPY . .
EXPOSE 3003
CMD  ["npm",  "start"]