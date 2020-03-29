const express = require("express");
const config = require("./config");
const routes = require("./auth/authAPI");
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", routes);

app.listen(config.api.port, () => {
  console.log("App listening on port " + config.api.port);
});
