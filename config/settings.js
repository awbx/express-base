// initialize common config
const commonConfig = {
    corsOptions: {
        origin: "*", // TODO : change it in production !
    },
    app: {
        port: parseInt(process.env.PORT, 10) || 5000,
        debug: process.env.DEBUGGER?.toLowerCase() === "true",
        loggerFormat: process.env.LOGGER_FORMAT || "combined",
    },
};

// initialize development config
const devConfig = {
    ...JSON.parse(JSON.stringify(commonConfig)),
    name: "development",
};

// initialize testing config
const testConfig = {
    ...JSON.parse(JSON.stringify(commonConfig)),
    name: "testing",
};
testConfig.app.debug = false;

// initialize production config
const proConfig = {
    ...JSON.parse(JSON.stringify(commonConfig)),
    name: "production",
};
proConfig.app.port = parseInt(process.env.PORT, 10) || 8080;

// arrange for exporting
const config = new Map();
config.set(devConfig.name, devConfig);
config.set(proConfig.name, proConfig);
config.set(testConfig.name, testConfig);

// set env fallback
const fallback = "production";

module.exports = (env) =>
    config.has(env?.toLowerCase()) ? config.get(env) : config.get(fallback);
