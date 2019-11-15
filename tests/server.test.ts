import request from "supertest";
import errorHandler from "../src/middleware/errorHandler";
import server from "../src/server";

jest.mock("../src/middleware/errorHandler", () => {
    return jest.fn((err, req, res, next) => {
        res.status(err.status).json(err);
    });
});

test("We're in the testing environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
})

describe("Get \"/\"", () => {
    test("Receive 200 with text", async () => {
        const expectedString = "Well, here we are, huh..?";
        const response = await request(server).get("/");

        expect(response.status).toBe(200);
        expect(response.type).toMatch(/text/i);
        expect(response.text).toBe(expectedString);
    });
});

describe("Incorrect endpoints", () => {
    test("Return a 404 status", async () => {
        const expectedStatus = 404;

        const res1 = await request(server).get("/asdf");
        const res2 = await request(server).post("/");
        const res3 = await request(server).delete("/56");

        expect(res1.status).toBe(expectedStatus);
        expect(res2.status).toBe(expectedStatus);
        expect(res3.status).toBe(expectedStatus);
        expect(errorHandler).toHaveBeenCalledTimes(3);
    });
});
