import { Router } from "express";
import {
    getCategoriesController,
    createCategoryController,
    getCategoryByIdController,
    deleteCategoryController
} from "../controllers/category";

const categoryRouter = Router();

categoryRouter
    .post("/createCategory", createCategoryController)
    .get("/getCategories", getCategoriesController)
    .get("/getCategoryById/:id", getCategoryByIdController)
    .delete("/deleteCategoryById/:id", deleteCategoryController);  

export { categoryRouter };
