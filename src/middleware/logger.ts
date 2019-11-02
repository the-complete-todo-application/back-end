import { NextFunction, Request, Response } from "express";

export default function(req: Request, res: Response, next: NextFunction) {
    console.log(
        `\x1b[35m[${new Date().toISOString()}]\x1b[0m ` +
        `\x1b[32m${req.method.toUpperCase()}\x1b[0m ` +
        `${req.originalUrl} ` +
        ``
    );
    next();
}
