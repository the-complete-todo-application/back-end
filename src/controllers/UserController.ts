import express, { NextFunction, Request, Response } from "express";
import errorHandler from "../middleware/errorHandler";
import IUser from "../models/User";
import * as userService from "../services/UserService";

const router = express.Router();


router.get("/all", async (req: Request, res: Response, next: NextFunction) => {
    console.log(res.locals);
    try {
        const result: IUser[] = await userService.findAll();
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        const error = {
            errStatus: 500,
            details: "Internal Server Error x.x",
            stack: new Error().stack
        };
        next(error);
    }
});

export default router;
