"use strict";

// initialize common config
const commonConfig = {
    corsOptions: {
        origin: "*", // TODO : change it in production !
    },
    app: {
        port: parseInt(process.env.PORT) || 5000,
        debug: process.env.DEBUGGER?.toLowerCase() === "true" ? true : false,
        logger_format: process.env.LOGGER_FORMAT || "combined",
    },
};

// initialize development config
const devConfig = { ...commonConfig, name: "development" };

// initialize testing config
const testConfig = { ...commonConfig, name: "testing" };

// initialize production config
const proConfig = {
    ...commonConfig,
    name: "production",
};
proConfig.app.port = parseInt(process.env.PORT) || 8080;

// arrange for exporting
const config = new Map();
config.set(devConfig.name, devConfig);
config.set(proConfig.name, proConfig);
config.set(testConfig.name, testConfig);

// set env fallback
const fallback = "production";

const env = process.env.NODE_ENV;

module.exports = config.has(env?.toLowerCase())
    ? config.get(env)
    : config.get(fallback);
