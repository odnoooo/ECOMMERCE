import {Router} from "express";
import {
    getProductByIdController,
    getProductsController,
    createProductController,
} from "../controllers";

const productRouter=Router();

productRouter
.post("/createProduct", createProductController)
.get("/getProducts", getProductsController)
.get("/getProductById/:id", getProductByIdController);

export {productRouter};
 

