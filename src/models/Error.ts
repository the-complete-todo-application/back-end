import { Dictionary } from "express-serve-static-core";

/**
 * Representation of how an ResError should look.
 */
export default interface IResError {
    status: number;
    method: string;
    endpoint: string;
    details?: string;
    params?: Dictionary<string>;
    body?: {};
}
