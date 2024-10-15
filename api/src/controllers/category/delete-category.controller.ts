import { RequestHandler } from "express";
import { categoryModel } from "../../models";

export const deleteCategoryController: RequestHandler = async (req, res) => {
    try {
      const { name, id } = req.body;
  
      const result = await categoryModel.deleteOne({
        $or: [{ name }, { _id: id }],
      });
  
      if (result.deletedCount === 0) {
        return res.status(404).json({
          message: "Category not found",
        });
      }
  
      return res.status(200).json({
        message: "Category deleted successfully.",
      });
    } catch (error) {
      return res.status(500).json({
        message: "Internal server error",
      });
    }
  };