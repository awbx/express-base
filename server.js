const http = require("http");
const app = require("./app");

// create instance from http
const server = http.createServer(app);

const PORT = app.get("port");
const ENV = app.get("env");
const DEBUGGER = app.get("debugger");

// start listening on port specified
server.listen(PORT);

server.on("listening", () => {
    console.log(`* Environment : ${ENV}`);
    console.log(`* Debugger : ${DEBUGGER ? "On" : "Off"}`);
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
            throw err;
    }
});
