# Dockerized Gatbsy site powered by Strapi

> Dockerized backend and frontend application powered by Strapi and Gatsby. Rebuild Gatsby site with webhook powered by NodeJS and Express.

## Quick Start

In order to get up and running add a **.env** file to the root of your folder. Specify a **TOKEN**, **PORT**, **HOST**, **STRAPI_API_URL**, **DATABASE_HOST** and **DATABASE_PORT**. The TOKEN is important for the webhook to trigger a rebuild of your Gatsby site, then PORT is used for to access the gatbsy site and webhook on the host, the HOST is the address of the strapi container and STRAPI_API_URL is needed for gatsby in order to connect to the strapi backend server, and finally the DATABASE_HOST and DATABSE_PORT is for your mongodb database you had set up.

Before running the commands to create the docker images and containers, make sure that the values in the **docker-compose.yml** file for **strapiCMS** match your own values. The database of choice is mongodb so ensure you have a mongodb container or application running for strapi to connect to. If you want to change this you'll have to edit the strapi server config files. Run the _gatsby buildcommand_ in the gatsby folder to generate the default gatsby website or leave the basic landing page. You can now run the commands below to setup the application for development and to create the gatsby an strapiCMS containers.

**Note**: If the database is a docker container on the same network the localhost ip address of that container most be used. You can get the address by running the following command.

```bash
# Gets the docker container ip address, so if the ip address is 172.21.0.2, use the ip address 172.21.0.1 to connect
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' container_name_or_id
```

```bash
# Install all the dependancies for the Nodejs webhook and site server
npm install

# Runs the setup script to create a strapi project for development & production and basic landing page for the gatsby website.
npm run setup

# Starts the gatsby website at localhost:3000 or PORT specified
# This locks the terminal, so you will need to open a new one
npm start

# Navigate to the strapi folder
cd strapi

# Start strapi in development mode (Make sure the database host is available)
# This allows you to test the application locally and make any custom changes before building your docker image
npm run develop

# Builds strapi for production
# This commits all your custom changes to strapi before making your docker image
npm run build

# You can terminate strapi and nodejs before running the docker-compose
# Creates a Docker image and container and/or runs the container in the background
docker-compose up -d

# List the runing containers
# This is useful when you want to know what ports to access the contains on or to check if they are running
docker ps

```
