import { IResError } from "../../src/interfaces/Error";

export interface IResMock {
    status: (status: number) => {};
    json: (body: IResError) => {};
}

export interface IReqMock {
    method: string;
    originalUrl: string;
    params?: {[key: string]: string};
    body?: {[key: string]: any};
}
