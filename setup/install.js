/*jshint esversion: 6 */
const shell = require("shelljs");
const child_process = require("child_process");

shell.mkdir("-p", "gatsby/public");
shell.cp("setup/index.html", "gatsby/public");

child_process.execSync("npx create-strapi-app strapi", {
  stdio: "inherit"
});

shell.cp(["setup/.dockerignore", "setup/Dockerfile"], "strapi/");
