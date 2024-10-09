import { RequestHandler } from "express";
import { reviewModel } from "../../models/review.schema";

export const getReviewsController: RequestHandler = async (_req, res)=>{
   try{
       const review =await reviewModel.find({});

       return res.status(200).json({
           review,
       });
   }catch (error){
       return res.status(500).json({
           message: "Internal server error",
       });
   }
};