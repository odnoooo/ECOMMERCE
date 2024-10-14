import { RequestHandler } from "express";
import { productModel } from "../../models";

export const createProductController: RequestHandler=async(req,res)=>{
    try{
        const { name,categories,images,productCode, price, description, averageRaiting, discountPercent}=req.body;
        const newProduct= await productModel.create({
            name,
            categories,
            images,
            price,
            productCode,
            description, 
            discountPercent: discountPercent || 0,
            averageRaiting,
            createdAt: new Date(),
            updatedAt: new Date(),
         });
         return res.status(201).json({
            message: "Product created successfully",
            newProduct,
         });
    }catch(error){
        console.log(error);
        
        return res.status(500).json({
            message: "Internal server error"
        });
    }
};


