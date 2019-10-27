import express from "express";
import ICategory from "../models/Category";
import * as categoryService from "../services/CategoryService";

const router = express.Router();

router.get("/all", async (req, res) => {
    const allCategories: ICategory[] = await categoryService.findAll();
    res.status(200).json(allCategories);
});

router.get("/byList/:listid", async (req, res) => {
    const listCategories: ICategory[] = await categoryService.findByListId(req.params.listid);
    res.status(200).json(listCategories);
});

export default router;
