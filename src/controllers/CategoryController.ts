import express, { NextFunction, Request, Response } from "express";
import validateListId from "../middleware/validateListId";
import ICategory from "../models/Category";
import * as categoryService from "../services/CategoryService";

const router = express.Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const allCategories: ICategory[] = await categoryService.findAll();
        res.status(200).json(allCategories);
    } catch (err) {
        console.log(err);
        next(undefined);
    }
});

router.get("/byList/:listid", validateListId, async (req: Request, res: Response, next: NextFunction) => {
    // if (res.locals.errStatus) { return next(); } // Have an error? Go to the error handler!
    try {
        const listCategories: ICategory[] = await categoryService.findByListId(req.params.listid);
        res.status(200).json(listCategories);
    } catch (err) {
        console.log(err);
        next(undefined);
    }
});

export default router;
