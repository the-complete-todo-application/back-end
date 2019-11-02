import express from "express";
import ITodo from "../models/Todo";
import * as todoService from "../services/TodoService";

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const allTodos: ITodo[] = await todoService.findAll();
        res.status(200).json(allTodos);
    } catch (err) {
        console.log(err);
        next(undefined);
    }
});

router.get("/byTodoId/:todoid", async (req, res) => {
    const todo: ITodo = await todoService.findById(req.params.todoid);
    res.status(200).json(todo);
});

router.get("/byList/:listid", async (req, res) => {
    const listTodos: ITodo[] = await todoService.findByList(req.params.listid);
    res.status(200).json(listTodos);
});

export default router;
