import { Request, RequestHandler } from "express";
import { IResError } from "../../src/interfaces/Error";
import errorHandler from "../../src/middleware/errorHandler";
import { IReqMock, IResMock } from "../interfaces/mocks";

const resMock = jest.fn(() => {
    const res: IResMock = {
        status: (status: number) => this,
        json: (body: IResError) => this
    };
    return res as unknown as Request;
});


test("We're in the testing environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
});

describe("errorHandler", () => {
    test("No error will throw a 500 Internal Service Error", async () => {
        const expectedStatus = 500;
        const expectedDetails = "Internal Server Error x_x";

        const response = await errorHandler(null, {} as Request, resMock, () => {;});
    });
});
