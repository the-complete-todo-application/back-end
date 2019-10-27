import express from "express";
import IList from "../models/List";
import * as listService from "../services/ListService";

const router = express.Router();

router.get("/all", async (req, res) => {
    const listOfLists: IList[] = await listService.findAll();
    res.status(200).json(listOfLists);
});

router.get("/byUser/:userid", async (req, res) => {
    const listsByUser: IList[] = await listService.findByUserId(req.params.userid);
    res.status(200).json(listsByUser);
});

router.get("/byListId/:listid", async (req, res) => {
    const list: IList = await listService.findByListId(req.params.listid);
    res.status(200).json(list);
});

export default router;
