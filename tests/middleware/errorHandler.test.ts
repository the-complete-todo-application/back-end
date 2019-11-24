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

    test("No error will throw a 500 status", () => {
        const expectedStatus = 500;
        const res = resMock();

        errorHandler({}, {} as Request, res, null);

        expect(res.status).toBeCalledWith(expectedStatus);
    });

    test("Basic 400 response", () => {
        const expectedStatus = 400;
        const res = resMock();
        const err = {status: 400, details: "You must send a body with this request!"};
        const expectedErr = {
            ...errObjTemplate(), 
            status: expectedStatus, 
            details: "You must send a body with this request!"
        };

        errorHandler(err, {} as Request, res, null);

        expect(res.status).toBeCalledWith(expectedStatus);
        expect(res.json).toBeCalledWith(expectedErr);
    });

    test("Example 401 response", () => {
        const expectedStatus = 401;
        const res = resMock();
        const err = {
            status: 401, 
            details: "You're missing some things on this request!",
            params: "username, password"
        };
        const expectedErr = {
            ...errObjTemplate(),
            status: expectedStatus,
            details: "You're missing some things on this request!",
            params: "username, password"
        };

        errorHandler(err, {} as Request, res, null);

        expect(res.status).toBeCalledWith(expectedStatus);
        expect(res.json).toBeCalledWith(expectedErr);
    });

    test("Example 404 response", () => {
        const expectedStatus = 404;
        const res = resMock();
        const err = {
            status: 404, 
            details: "We could not find anything. Sorry.",
        };
        const expectedErr = {
            ...errObjTemplate(),
            status: expectedStatus,
            details: "We could not find anything. Sorry.",
        };

        errorHandler(err, {} as Request, res, null);

        expect(res.status).toBeCalledWith(expectedStatus);
        expect(res.json).toBeCalledWith(expectedErr);
    });

});
