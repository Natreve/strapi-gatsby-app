# Dockerized Gatbsy site powered by Strapi

> Dockerized backend and frontend application powered by Strapi and Gatsby. Rebuild Gatsby site with webhook powered by NodeJS and Express.

## Quick Start

In order to get up and running add a **.env** file to the root of your folder. Specify a **TOKEN** value and a **STRAPI_API_URL**. This is important for the webhook in order to trigger a rebuild of your Gatsby site as well as for the gatsby site to fetch data from the strapi backend service.

Before running the commands to create the docker images and containers, make sure that the values in the **docker-compose.yml** file for **strapiCMS** match up with your own values. The database of choice is mongodb so ensure you have a mongodb container or application running for strapi to connect to, if you want to change this you'll have to edit the strapi server config files. Run the _gatsby build command_ in the gatsby folder or create a _gatsby/public_ folder and add a **index.html** landing page. One is include called **index.template.html**. You can now run the commands below to create the gatsby an strapiCMS containers.

```bash
# Navigate to the strapi folder and install dependencies
npm install

# Start strapi in development mode(Make sure the database host is available)

npm run develop

# Run the Docker container in background
docker-compose up -d

# List the runing containers
docker ps

```
