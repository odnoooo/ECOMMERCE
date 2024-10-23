import { RequestHandler } from "express";
import { productModel } from "../../models";

export const updateProduct: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    price,
    description,
    discountPercent,
    images,
    coupon,
    viewCounts,
    category,
  } = req.body;
  try {
    const updatedProduct = await productModel.findByIdAndUpdate(
      id,
      {
        name,
        price,
        description,
        discountPercent,
        images,
        coupon,
        viewCounts,
        category,
      },
      { new: true }
    );
    if (!updatedProduct)
      return res.status(404).json({ message: "Product not found" });
    await updatedProduct.save();
    res.status(200).json({ product: updatedProduct });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
