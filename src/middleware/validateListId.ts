import { NextFunction, Request, Response } from "express";
import { IBasicError } from "../models/Error";
import * as listService from "../services/ListService";

export default function(req: Request, res: Response, next: NextFunction) {
    const id = req.params.listid;
    listService.findByListId(id)
        .then((list) => {

            if (list) {
                res.locals.list = list;
                return next();
            }

            const error: IBasicError = {
                status: 404,
                details: `No List found with id ${id}.`,
            };
            next(error);
        })
        .catch((err: any) => {
            console.log(err);
            next(undefined);
        });
}
