import { Dictionary } from "express-serve-static-core";

/**
 * Representation of how a full ResError should look.
 */
export interface IResError {
    status: number;
    method: string;
    endpoint: string;
    details?: string;
    devMessage?: string;
    source?: string;
    params?: string;

}

export interface IServerError {
    devMessage: string;
}

export interface IBasicError {
    status: number;
    details: string;
}
