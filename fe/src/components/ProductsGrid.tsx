"use client";
import { useEffect, useState } from "react";
import { ProductCard } from "./assets";
import { api } from "@/axios";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useData } from "./utils/dataProvider";

type productsData = {
  id: number;
  image: string[];
  title: string;
  price: number;
  discount?: number;
  favorite?: number;
};

interface productType {
  _id: string;
  title: string;
  images: string[];
  price: number;
  description: string;
  salePercent: number;
}

export const ProductsGrid = () => {
  const { products, setProducts } = useData();

  // useEffect(() => {
  //   const getProducts = async () => {
  //     try {
  //       const response = await api.get("/getProducts");
  //       setProducts(response.data.products);
  //     } catch (error: unknown) {
  //       console.log(error);
  //       if (error instanceof AxiosError) {
  //         toast.error(error.response?.data?.message || "getProducts failed.");
  //       } else {
  //         toast.error("An unknown error occurred.");
  //       }
  //     }
  //   };
  //   getProducts();
  // }, []);

  return (
    <div>
      <div
        style={{
          backgroundImage: "/image(1).png",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="h-[446px] rounded-xl mb-8"
      ></div>
      <div className="grid grid-cols-4 grid-rows-6 [&>div:nth-child(7):h-[700px] [&>div:nth-child(8)]:h-[700px] [&>div:nth-child(7)];col-span-2 [&>div:nth-child(7)]:row-span-2 [&>div:nth-child(8)]:col-span-2 [&>div:nth-child(8)]:row-span-2 gap-5">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            id={product._id}
            name={product.name}
            images={product.images}
            price={product.price}
            className="h-full"
            imageClassName="h-[330px]"
          />
        ))}
      </div>
    </div>
  );
};
