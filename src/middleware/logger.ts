import { NextFunction, Request, Response } from "express";

export default function(req: Request, res: Response, next: NextFunction) {
    console.log(
        `[${new Date().toISOString()}] ` +
        `\x1b[32m${req.method.toUpperCase()} ` +
        `${req.originalUrl} ` +
        ``
    );
    next();
}
