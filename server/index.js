const express = require("express");
const config = require("./config/");

var app = express();

app.listen(config.api.port, () => {
  console.log("App listening on port " + config.api.port);
});
