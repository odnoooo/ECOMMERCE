import { Router } from "express";
import {
    getCategoriesController,
    createCategoryController,
    getCategoryByIdController,
} from "../controllers/category";

const categoryRouter=Router();

categoryRouter
.post("/createCategory", createCategoryController)
.get("/getCategories", getCategoriesController)
.get("/getCategoryById/:id", getCategoryByIdController);

export {categoryRouter};