import { RequestHandler } from "express";
import { reviewModel } from "../../models/review.schema";

export const getReviewByIdController: RequestHandler=async(req,res)=>{
    const {id}=req.params;

    try{
        const review=await reviewModel.findById(id);

        if(!review) {
            return res.status(404).json({
                message: "Review not found",
            });
        }
        return res.status(200).json({
            review,
        }) ;
    }catch (error){
        return res.status(500).json({
            message: "Internal server error",
        });
    }
};