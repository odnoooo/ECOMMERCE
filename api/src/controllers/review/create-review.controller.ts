import { RequestHandler } from "express";
import { reviewModel } from "../../models/review.schema";


export const createReviewController: RequestHandler= async(req,res)=>{
    try{
        const{productId,user,star,comment }=req.body;
        await reviewModel.create({
            product: productId,
            user,
            star,
            comment,
        });

        return res.status(201).json({
            message: "Review created successfully",
        });
        }catch(error){
            return res.status(500).json({
                message: "Internal server error",
            });
        }
   
};