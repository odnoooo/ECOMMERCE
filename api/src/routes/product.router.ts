import {Router} from "express";
import {
    getProductByIdController,
    getProductsController,
    createProductController,
} from "../controllers";

const productRouter=Router();

productRouter
.post("/", createProductController)
.get("/", getProductsController)
.get("/:id", getProductByIdController);

export {productRouter};
 

