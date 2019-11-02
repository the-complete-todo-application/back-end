import { NextFunction, Request, Response } from "express";
import IResError from "../models/Error";

export default function(err: any, req: Request, res: Response, next: NextFunction) {

    const errObj: IResError = {
        status: err.errStatus || 404,
        method: req.method,
        endpoint: req.originalUrl,
        details: err.details || "This Endpoint seems to not exist!",
    };
    // A Nice Consoled Message
    console.log("Error!");
    console.log(errObj);
    console.log(new Error("Internal Server Error x_x").stack.replace(/(?<=\n\s+)(.*)(?=\n\s)/g, (match: string) => {
                    if (!match.includes("node_modules")) {
                        return `\x1b[31m${match}\x1b[0m`;
                    } else {
                        return match;
                    }
                }));

    res.status(errObj.status).json(errObj);
}
