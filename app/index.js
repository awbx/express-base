"use strict";
const express = require("express");
const logger = require("morgan");

// inlcude .env  variables
require("dotenv").config("../.env");
const env = process.env.ENV;
const {
    name,
    app: { port, debug, logger_format },
} = require("../config/settings")(env);

// create instance from express
const app = express();

// set express variables
app.set("port", port);
app.set("env", name);
app.set("debugger", debug);

// initialize middlewares
if (debug) app.use(logger(logger_format));
module.exports = app;
