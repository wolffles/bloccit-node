const express = require("express");
const app = express();

module.exports = app;
const appConfig
const routeConfig = require("./config/route-config.js");

appConfig.init();
routeConfig.init(app);
