"use client";

import React, { useEffect, useState } from "react";
import { api } from "@/axios";
import { useData } from "./utils/DataProvider";
import { FaHeart } from "react-icons/fa";

interface productType {
  _id: string;
  title: string;
  images: string[];
  price: number;
  discountPercent: number;
  description: string;
}

export const SaveProduct = () => {
  const { saveProduct, setSaveProduct } = useData();
  const [savedProducts, setSavedProducts] = useState<productType[]>([]);

  const fetchSavedProducts = async () => {
    try {
      // Хадгалсан бүтээгдэхүүнүүдийн ID-г ашиглан, API-аас бүтээгдэхүүн бүрийг татаж авна
      const productPromises = saveProduct.map(async (id: string) => {
        const response = await api.get(`/product/${id}`);
        return response.data.product;
      });
      const products = await Promise.all(productPromises); // Бүх бүтээгдэхүүний мэдээллийг хүлээн авна
      setSavedProducts(products); // Хадгалсан бүтээгдэхүүнийг state-д хадгална
    } catch (error: unknown) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   if (saveProduct.length > 0) {
  //     fetchSavedProducts();
  //   } else {
  //     setSavedProducts([]); // Хэрэв хадгалсан бараа байхгүй бол хоосон массив болгоно
  //   }
  // }, [saveProduct]);

  const handleRemoveSave = (id: string) => {
    const newSaveProduct = saveProduct.filter((productId) => productId !== id);
    setSaveProduct(newSaveProduct); // ID-г устгаж, хадгалсан барааны жагсаалтаас хасна
  };

  return (
    <div className="bg-[#f0f1f3] h-[848px]">
      <div className="w-[622px] py-[100px] m-auto container">
        <div className="flex gap-2 items-center mb-6">
          <h1 className="text-2xl font-semibold">Хадгалсан бараа</h1>
          <span className="text-gray-600">({savedProducts.length})</span>
        </div>

        <div className="flex flex-col gap-6">
          {savedProducts.length > 0 ? (
            savedProducts.map((product) => (
              <div key={product._id} className="flex w-full gap-6">
                <div
                  style={{
                    backgroundImage: `url(${product.images[0]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="w-[120px] h-[120px] rounded-2xl"
                ></div>
                <div className="w-80 space-y-2">
                  <div className="space-y-1">
                    <h1>{product.title}</h1>
                    <p>{product.price.toLocaleString("mn-MN")}₮</p>
                  </div>
                  <button className="bg-blue-500 px-3 py-1 text-white rounded-full text-sm">
                    Сагслах
                  </button>
                </div>
                <button>
                  <FaHeart
                    onClick={() => handleRemoveSave(product._id)}
                    className="w-6 h-6"
                  />
                </button>
              </div>
            ))
          ) : (
            <p>Та одоогоор ямар ч бараа хадгалаагүй байна.</p>
          )}
        </div>
      </div>
    </div>
  );
};
