"use strict";
const express = require("express");
const logger = require("morgan");
const cors = require("cors");

// inlcude .env  variables
require("dotenv").config("../.env");
const env = process.env.ENV;
const {
    name,
    corsOptions,
    app: { port, debug, logger_format },
} = require("../config/settings")(env);

// create instance from express
const app = express();

// set express variables
app.set("port", port);
app.set("env", name);
app.set("debugger", debug);

// initialize middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
if (debug) app.use(logger(logger_format));
module.exports = app;
