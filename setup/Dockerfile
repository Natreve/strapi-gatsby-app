FROM strapi/base

RUN mkdir -p /src

WORKDIR /src

COPY ./package.json /src

RUN npm install

COPY . /src

RUN npm build

EXPOSE 1337

ENV NODE_ENV production
ENV HOST localhost
ENV DATABASE_CLIENT mongo
ENV DATABASE_HOST localhost
ENV DATABASE_PORT 27017
ENV DATABASE_NAME strapi
ENV DATABASE_USERNAME strapi
ENV DATABASE_PASSWORD strapi

CMD ["npm", "start"]