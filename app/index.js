"use strict";
const errorHandler = require("./middlewares/errorHandler");
const createError = require("http-errors");
const express = require("express");
const logger = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");

// inlcude routers
const homeRouter = require("./routes/homeRouter");

// inlcude .env  variables
require("dotenv").config("../.env");
const env = process.env.NODE_ENV;
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
app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    express.static(path.join(__dirname, "./public"), { dotfiles: "allow" })
);
if (debug) app.use(logger(logger_format));

// registering route
app.use("/home", homeRouter);

// handle 404 error
app.use("*", (req, res, next) => {
    try {
        throw createError.NotFound(); // throw an error to the catch
    } catch (err) {
        next(err);
    }
});

// error handler
app.use(errorHandler);

module.exports = app;
