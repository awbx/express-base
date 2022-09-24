"use strict";

const app = require("./app");
const http = require("http");

// create instance from http
const server = http.createServer(app);

const ENV = app.get("config").name;
const PORT = app.get("config").app.port;
const HOSTNAME = app.get("config").app.hostname;
const DEBUGGER = app.get("config").app.debug;
const LOGGER_FORMAT = app.get("config").app.logger_format;
const BACKLOG = app.get("config").app.backlog;

// start listening on port specified
server.listen(PORT, HOSTNAME, BACKLOG);

server.on("listening", () => {
    console.log(`* Environment : ${ENV}`);
    console.log(`* Debugger : ${DEBUGGER ? "On" : "Off"}`);
    console.log(`* Logger Format : ${LOGGER_FORMAT}`);
    console.log(`* Running on http://localhost:${PORT} (CTRL + C to quit)`);
});
// handle error
server.on("error", (err) => {
    if (err.syscall !== "listen") throw err;
    switch (err.code) {
        case "EACCES":
            console.error(`${PORT} is requires elevated privileges`);
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(`${PORT} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
});
