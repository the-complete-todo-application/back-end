import express from "express";
import ICategory from "../models/Category";
import IList from "../models/List";
import ITodo from "../models/Todo";
import * as categoryService from "../services/CategoryService";
import * as listService from "../services/ListService";
import * as todoService from "../services/TodoService";

const router = express.Router();

router.get("/all", async (req, res) => {
    const listOfLists: IList[] = await listService.findAll();
    res.status(200).json(listOfLists);
});

router.get("/byUser/:userid", async (req, res) => {
    const listsByUser: IList[] = await listService.findByUserId(req.params.userid);
    res.status(200).json(listsByUser);
});

router.get("/simpleList/:listid", async (req, res) => {
    const list: IList = await listService.findByListId(req.params.listid);
    res.status(200).json(list);
});

router.get("/fullyFormattedList/:listid", async (req, res) => {
    const listid: string = req.params.listid;
    const list: IList = await listService.findByListId(listid);
    
    const formattedList: IList = {
        ...list,
        categories: await categoryService.findByListId(listid),
        todos: await todoService.findByList(listid)
    };

    res.status(200).json(formattedList);
});

export default router;
