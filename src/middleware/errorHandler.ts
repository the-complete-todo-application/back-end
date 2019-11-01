import { Request, Response } from "express";

export default function(req: Request, res: Response) {
    const errObj = {
        status: res.locals.errStatus,
        method: req.method,
        endpoint: req.originalUrl,
        details: res.locals.details
    };

    res.status(res.locals.errStatus).json(errObj);
}
