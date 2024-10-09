import { RequestHandler } from "express";
import { orderModel } from "../../models/order.schema";

export const createOrderController: RequestHandler= async( req, res)=>{
    try {
        const {user, products}=req.body;

        await orderModel.create({
            user,products,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        return res.status(201).json({
            message: "Order created successfully",

        });
      
    }catch(error) { return res.status(500).json({
        message: "Internal server error",
    });
 }
};