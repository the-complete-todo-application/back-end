import { NextFunction, Request, Response } from "express";
import { IResError } from "../interfaces/Error";


const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    
    // If there is an error with the JSON object received, this will write the error
    //     message to the details property :thumbsup:
    if (!!err && !!err.statusCode) { err.details = err.toString(); }

    // If The database throws an error automatically, there is no status code
    //     The status will be auto-set to 500, so we will just store the error
    //     as a devMessage to see :thumbsup:
    if (!!err && !err.status && !err.devMessage) { err.devMessage = err.toString(); }

    const errObj: IResError = {
        status: err && err.status ? err.status : 500,
        method: req.method,
        endpoint: req.originalUrl,
        details: err && err.details ? err.details : "Internal Server Error x_x",
        devMessage: err && err.devMessage ? err.devMessage : undefined,
        source: err && err.source ? err.source : undefined,
        params: err && err.params ? err.params : undefined,
    };

    if (errObj.status === 500 && process.env.DB_ENV === "development") {
    // A Nice Consoled Message:
    // Create an Error and grab the stack. Add a "\n" because...
    const stackTrace = new Error(errObj.devMessage || errObj.details).stack + "\n";

    // ...we need some regex! We look through each line of our 
    //     stackTrace, find any lines that DON'T include "node_modules"
    //     (which means they were actually coded out), and then we 
    //     highlight those specific lines in red
    //     Note: \x1b[31m = red font color
    //           \x1b[0m  = reset color
    const markedStackTrace = 
        stackTrace
            .replace(/(?<=\n\s+)(.*)(?=\n)/g, (match: string) => {
                if (!match.includes("node_modules")) {
                    return `\x1b[31m${match}\x1b[0m`;
                } else {
                    return match;
                }
            });

    console.log(markedStackTrace);
    }

    res.status(errObj.status).json(errObj);

};

export default errorHandler;
