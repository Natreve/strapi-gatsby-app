# Dockerized Gatbsy site powered by Strapi

> Dockerized backend and frontend application powered by Strapi and Gatsby. Rebuild Gatsby site with webhook powered by NodeJS and Express.

## Quick Start

In order to get up and running add a **.env** file to the root of your folder. Specify a **TOKEN** value. This is important for the webhook in order to trigger a rebuild of your Gatsby site.

Before running the commands to create the docker images and containers, make sure that
the values in the **docker-compose.yml** file for **strapiCMS** match up with your own values. The database of choice is mongodb so ensure you have a mongodb container or application running for strapi to connect to.

```bash
# Run the Docker container in background
docker-compose up -d

# List the runing containers
docker ps

```
