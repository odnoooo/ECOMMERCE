import { Router } from "express";
import {
    getOrderByIdController,
    getOrdersController,
    createOrderController
} from "../controllers/order"

const orderRouter=Router();

orderRouter
.get("/:id", getOrderByIdController)
.get("/", getOrdersController)
.post("/", createOrderController);

export {orderRouter}