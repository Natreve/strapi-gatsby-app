# Dockerized Gatbsy site powered by Strapi

> Dockerized backend and frontend application powered by Strapi and Gatsby. Rebuild Gatsby site with webhook powered by NodeJS and Express.

## Quick Start

In order to get up and running add a **.env** file to the root of your folder. Specify a **TOKEN**, **STRAPI_API_URL** and **DATABASE_HOST**. The TOKEN is important for the webhook to trigger a rebuild of your Gatsby site, the STRAPI_API_URL is needed for gatsby in order to connect to the strapi backend server, and finally the DATABASE_HOST is the url of your mongodb database you had set up.

Before running the commands to create the docker images and containers, make sure that the values in the **docker-compose.yml** file for **strapiCMS** match your own values. The database of choice is mongodb so ensure you have a mongodb container or application running for strapi to connect to. If you want to change this you'll have to edit the strapi server config files. Run the _gatsby buildcommand_ in the gatsby folder to generate the default gatsby website or leave the basic landing page. You can now run the commands below to setup the application for development and to create the gatsby an strapiCMS containers.

```bash
# Install all the dependancies for the Nodejs webhook and site server
npm install

# Starts the gatsby website at localhost:3000
# This locks the terminal, so you will need to open a new one
npm start

# Runs the setup script to create a strapi project for development & production
npm run setup

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
