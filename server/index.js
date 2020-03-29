const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config");
const routes = require("./auth/authAPI");
var app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use("/", routes);

app.listen(config.api.port, () => {
  console.log("App listening on port " + config.api.port);
});
