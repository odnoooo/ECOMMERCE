import { RequestHandler } from "express";
import { productModel } from "../../models";

export const createProductController: RequestHandler=async(req,res)=>{
    const { name,categories,images,productCode, price, description, averageRaiting, discountPercent,qty,}=req.body;
    try{ 
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
            qty,
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


