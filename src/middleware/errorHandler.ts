import { NextFunction, Request, Response } from "express";
import { IBasicError, IResError } from "../interfaces/Error";

export default function(err: IBasicError | undefined, req: Request, res: Response, next: NextFunction) {

    const errObj: IResError = {
        status: err ? err.status : 500,
        method: req.method,
        endpoint: req.originalUrl,
        details: err ? err.details : "Internal Server Error x_x",
    };

    if (errObj.status === 500) {
    // A Nice Consoled Message
    console.log(new Error("Internal Server Error x_x").stack
                .replace(/(?<=\n\s+)(.*)(?=\n\s)/g, (match: string) => {
                    if (!match.includes("node_modules")) {
                        return `\x1b[31m${match}\x1b[0m`;
                    } else {
                        return match;
                    }
                }));
    }

    res.status(errObj.status).json(errObj);
}
