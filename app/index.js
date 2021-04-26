"use strict";
const express = require("express");

// inlcude .env  variables
require("dotenv").config("../.env");
const env = process.env.ENV;
const {
    name,
    app: { port, debug },
} = require("../config/settings")(env);

// create instance from express
const app = express();

// set express variables
app.set("port", port);
app.set("env", name);
app.set("debugger", debug);

module.exports = app;
