 import { RequestHandler } from "express";
 import { orderModel } from "../../models/order.schema";

 export const getOrdersController: RequestHandler = async (_req, res)=>{
    try{
        const orders =await orderModel.find({});

        return res.status(200).json({
            orders,
        });
    }catch (error){
        return res.status(500).json({
            message: "Internal server error",
        });
    }
 };