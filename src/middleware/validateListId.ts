import { NextFunction, Request, Response } from "express";
import * as listService from "../services/ListService";

export default function(req: Request, res: Response, next: NextFunction) {
    const id = req.params.listid;
    listService.findByListId(id)
        .then((list) => {
            if (list) { return next(); }
            const error = {
                errStatus: 404,
                details: `No List found with id ${id}.`,
                stack: new Error().stack
            };
            next(error);
        })
        .catch(() => {
            const error = {
                errStatus: 500,
                details: `Internal Server Error x.x`,
                stack: new Error().stack
            };
            next(error);
        });
}
