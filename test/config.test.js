"use strict";
const dotenv = require("dotenv");

describe("test config and env", () => {
    it("should test development config", () => {
        const env = "development";
        process.env.DEBUGGER = true; // update debugger
        dotenv.config("../../.env");
        const config = require("../config/settings")(env);
        expect(config.name).toEqual(env);
        expect(config.app.debug).toEqual(true);
        expect(config.app.port).toEqual(parseInt(process.env.PORT));
    });

    it("should test production config", () => {
        const env = "production";
        process.env.DEBUGGER = true; // update debugger
        dotenv.config("../../.env");
        let config = require("../config/settings")(env);
        expect(config.app.debug).toEqual(true);
        expect(config.app.port).toEqual(parseInt(process.env.PORT));
    });

    it("should test testing config", () => {
        const env = "testing";
        process.env.DEBUGGER = true; // update debugger
        dotenv.config("../../.env");
        let config = require("../config/settings")(env);

        expect(config.app.debug).toEqual(false);
        expect(config.app.port).toEqual(parseInt(process.env.PORT));
    });
});
