import { Request, Response } from "express";
import { IResError } from "../../src/interfaces/Error";
import errorHandler from "../../src/middleware/errorHandler";
import { IReqMock, IResMock } from "../interfaces/mocks";

const resMock = () => {
    const res: IResMock = {
        status: jest.fn((status: number) => res),
        json: jest.fn((body: IResError) => res)
    };
    return res as unknown as Response;
};

/**
 * Call this function to create an empty error object.
 * Then fill it in with the expected properties.
 * 
 * Undefined properties are `method`, `endpoint`,
 * `devMessage`, `source`, and `params`.
 */
const errObjTemplate = (): IResError => {
    return {
        status: 500,
        method: undefined,
        endpoint: undefined,
        details: "Internal Server Error x_x",
        devMessage: undefined,
        source: undefined,
        params: undefined
    };
};


test("We're in the testing environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
});

describe("errorHandler", () => {
    test("No error will throw a 500 Internal Server Error", async () => {
        const expectedStatus = 500;
        const expectedErr = errObjTemplate();
        const res = resMock();

        errorHandler({}, {} as Request, res, null);

        expect(res.status).toBeCalledWith(expectedStatus);
        expect(res.json).toBeCalledWith(expectedErr);
    });
});
