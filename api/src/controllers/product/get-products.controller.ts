import { RequestHandler } from "express";
import { productModel } from "../../models";

export const getProductsController: RequestHandler=async(_req, res)=>{
    try{
        const products =await productModel.find({}).populate("category",{name:true});

        return res.status(200).json({
            products,
        });
    }catch(error){
        return res.status(500).json({
            message: "Internal server error",
        });
    }
};
