"use strict";
const request = require("supertest");
const app = require("./../../app");
describe("not found test", () => {
    it("should test not found  ", async () => {
        const res = await request(app).get("/not_FouNd_pAth");
        expect(res.status).toEqual(404);
        expect(res.body.message).toEqual("Not Found");
    });
});
