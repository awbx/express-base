const request = require("supertest");
const app = require("../../app");

describe("home route test", () => {
    it("should test if body==='Express App' && status===200 ", async () => {
        const res = await request(app).get("/home");
        expect(res.status).toEqual(200);
        expect(res.body).toEqual("Express App");
    });
});
