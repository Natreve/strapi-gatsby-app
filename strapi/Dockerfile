FROM node:10

RUN mkdir -p /src

COPY . /src

WORKDIR /src

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]