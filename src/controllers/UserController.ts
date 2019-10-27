import express from "express";
import IUser from "../models/User";
import * as userService from "../services/UserService";

const router = express.Router();

router.get("/all", async (req, res) => {
    const result: IUser[] = await userService.findAll();
    res.status(200).json(result);
});

export default router;
