import express from "express";
import IList from "../interfaces/List";
import validateListId from "../middleware/validateListId";
import * as categoryService from "../models/CategoryModel";
import * as listService from "../models/ListModel";
import * as todoService from "../models/TodoModel";

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const listOfLists: IList[] = await listService.findAll();
        res.status(200).json(listOfLists);
    } catch (err) {
        console.log(err);
        next(undefined);
    }
});

router.get("/byUser/:userid", async (req, res, next) => {
    try {
        const listsByUser: IList[] = await listService.findByUserId(req.params.userid);
        res.status(200).json(listsByUser);
    } catch (err) {
        console.log(err);
        next(undefined);
    }
});

router.get("/simpleList/:listid", validateListId, async (req, res) => {
    res.status(200).json(res.locals.list);
});

router.get("/fullyFormattedList/:listid", async (req, res, next) => {
    const listid: string = req.params.listid;
    
    try {
        const formattedList: IList = {
            ...res.locals.list,
            categories: await categoryService.findByListId(listid),
            todos: await todoService.findByList(Number(listid))
        };
        res.status(200).json(formattedList);
    } catch (err) {
        console.log(err);
        next(undefined);
    }
});

export default router;
