import express, { NextFunction, Request, Response } from "express";
import errorHandler from "../middleware/errorHandler";
import IUser from "../models/User";
import * as userService from "../services/UserService";

const router = express.Router();


router.get("/all", async (req, res, next) => {
    console.log(res.locals);
    try {
        const result: IUser[] = await userService.findAll();
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.locals.errStatus = 500;
        res.locals.details = "Internal Server Error x.x";
        next();
    }
}, errorHandler);

export default router;
