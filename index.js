/*jshint esversion: 6 */
require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 3000;
const path = require("path");
const bodyParser = require("body-parser");
const app = express().use(bodyParser.json());
const shell = require("shelljs");

app.use(express.static("gatsby/public"));

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(`${__dirname}/public/index.html`));
});
app.get("/build", (req, res) => {
  const bearToken = req.headers.authorization;
  if (bearToken !== process.env.TOKEN) res.sendStatus(401);
  else console.log("Varified request");

  shell.cd("gatsby").exec("gatsby build", (code, stdout, stderr) => {
    if (code !== 0) {
      shell.echo("Error: gatsby build failed");
      shell.exit(1);
    }
    console.log(`[Gatbsy] Webhook is listening on ${port}`);
  });
  res.status(202).send("Building Gatsby site");
});
app.post("/build", (req, res) => {
  const bearToken = req.headers.authorization;
  if (bearToken !== process.env.TOKEN) res.sendStatus(401);
  else console.log("Varified request");

  shell.cd("gatsby").exec("gatsby build", (code, stdout, stderr) => {
    if (code !== 0) {
      shell.echo("Error: gatsby build failed");
      shell.exit(1);
    }
    console.log(`[Gatbsy] Webhook is listening on ${port}`);
  });
  res.status(202).send("Building Gatsby site");
});

app.listen(port, () => console.log(`[Gatbsy] Webhook is listening on ${port}`));