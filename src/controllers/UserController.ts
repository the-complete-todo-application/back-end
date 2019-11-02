import express, { NextFunction, Request, Response } from "express";
import { IBasicError } from "../models/Error";
import IUser from "../models/User";
import * as userService from "../services/UserService";

const router = express.Router();


router.get("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result: IUser[] = await userService.findAll();
        res.status(200).json(result);
    } catch (err) {
        console.log(err);

        const error: IBasicError = {
            status: 500,
            details: "Internal Server Error x.x",
        };
        next(error);
    }
});

export default router;
