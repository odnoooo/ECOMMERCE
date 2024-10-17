"use client";

import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useData } from "../utils/dataProvider";

type ProductCardProps = {
  id: string;
  images: string[];
  name: string;
  price: number;
  desc?: string;
  discount?: number;
  className?: string;
  imageClassName?: string;
} & PropsWithChildren;

export const ProductCard = ({
  id,
  images,
  name,
  price,
  discount,
  className,
  imageClassName,
}: ProductCardProps) => {
  const router = useRouter();

  const { saveProduct, setSaveProduct } = useData();

  const showPrice = (price: number, discount: number | undefined) => {
    const newPrice = stringPrice(price);
    if (discount) {
      const newDiscountedPrice = stringDiscountedPrice(price, discount);
      const newDiscount = stringDiscount(discount);
      return (
        <div className="flex items-center gap-2">
          <p className="font-semibold">{newDiscountedPrice}</p>
          <p className="text-xs line-through text-[#71717a]">{newPrice}</p>
          <p className="font-semibold text-red-500">{newDiscount}</p>
        </div>
      );
    } else {
      return <p className="font-semibold">{newPrice}</p>;
    }
  };

  const stringPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'") + "₮";
  };

  const stringDiscountedPrice = (price: number, discount: number): string => {
    return (
      (price - (price * discount) / 100)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, "'") + "₮"
    );
  };

  const stringDiscount = (discount: number) => {
    return `${discount}%`;
  };

  const handleSave = () => {
    if (Array.isArray(saveProduct)) return;
    setSaveProduct((prevProducts) => [...prevProducts, id]);
  };

  const handleRemoveSave = () => {
    if (!Array.isArray(saveProduct)) return;
    const newSaveProduct = saveProduct.filter((product) => product !== id);
    setSaveProduct(newSaveProduct);
  };
  return (
    <div key={id} className={`flex flex-col relative gap-2 ${className}`}>
      <div className={`relative overflow-hidden rounded-lg ${imageClassName}`}>
        {images.length > 0 ? (
          <div
            onClick={() => router.push(`/product/${id}`)}
            style={{
              backgroundImage: `url(${images[0]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="w-full h-[330px]"
          ></div>
        ) : (
          <div className="bg-gray-300 h-[330px] w-full"></div>
        )}
      </div>

      {/* Шалгаж байна: saveProduct массив эсэх */}
      {Array.isArray(saveProduct) && saveProduct.includes(id) ? (
        <FaHeart
          onClick={handleRemoveSave}
          size={18}
          className="absolute top-4 right-4 text-red-500 cursor-pointer"
        />
      ) : (
        <FaRegHeart
          onClick={handleSave}
          size={18}
          className="absolute top-4 right-4 cursor-pointer"
        />
      )}

      <div className="flex flex-col">
        <p>{name}</p>
        {showPrice(price, discount)}
      </div>
    </div>
  );
};
