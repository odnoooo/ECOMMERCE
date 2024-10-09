import { Router } from "express";
import {
    getCategoriesController,
    createCategoryController,
    getCategoryByIdController,
} from "../controllers/category";

const categoryRouter=Router();

categoryRouter
.post("/", createCategoryController)
.get("/", getCategoriesController)
.get("/:id", getCategoryByIdController);

export {categoryRouter};