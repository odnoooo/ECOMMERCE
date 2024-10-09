"use client";

export const ProductAddCard = () => {
  return (
    <div className="h-10 w-[108px] flex gap-2 items-center">
      <div className="h-10 w-10 rounded-full bg-gray-300">image</div>
      <div className="text-xs text-gray-500">
        <p>Product.title</p>
        <p>Product_id</p>
      </div>
    </div>
  );
};
