import express from "express";
import validateListId from "../middleware/validateListId";
import IList from "../models/List";
import * as categoryService from "../services/CategoryService";
import * as listService from "../services/ListService";
import * as todoService from "../services/TodoService";

const router = express.Router();

router.get("/all", async (req, res, next) => {
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
            todos: await todoService.findByList(listid)
        };
        res.status(200).json(formattedList);
    } catch (err) {
        console.log(err);
        next(undefined);
    }
});

export default router;
