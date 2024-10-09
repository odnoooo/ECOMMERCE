import { RequestHandler } from "express";
import { categoryModel } from "../../models";

export const getCategoriesController: RequestHandler=async(_req,res)=>{
  try{
    const categories = await categoryModel.find({});

    return res.status(200).json({
      categories,
    });
  }catch(error){
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

