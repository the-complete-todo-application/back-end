import { Dictionary } from "express-serve-static-core";

/**
 * Representation of how an ResError should look.
 */
export interface IResError {
    status: number;
    method: string;
    endpoint: string;
    details?: string;
    params?: Dictionary<string>;
    body?: {};
}

export interface IBasicError {
    status: number;
    details: string;
}
