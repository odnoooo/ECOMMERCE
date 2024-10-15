"use client";

import Image from "next/image";
import { ProductCard } from "./assets/ProductCard";
import { api } from "@/axios";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useAuth } from "./utils/AuthProvider";
import { useData } from "./utils/dataProvider";

interface productType {
  _id: string;
  name: string;
  price: number;
  discountPercent: number;
  description: string;
  qty: {
    free?: number;
    s?: number;
    m?: number;
    l?: number;
    xl?: number;
    "2xl"?: number;
    "3xl"?: number;
  };
  images: string[];
}

type productsData = {
  id: number;
  image: string[];
  name: string;
  price: number;
  discount?: number;
  favorite?: number;
};

export const MainPage = () => {
  const [percent, setPercent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const { products } = useData();
  useEffect(() => {
    const interval = setInterval(() => {
      percent === 3 ? setIsTransitioning(false) : setIsTransitioning(true);
      setPercent((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <div className="flex flex-col gap-8 w-[1040px] m-auto bg-[#f0f1f3]">
      <div className="h-96 xl:h-[36rem] mx-4 xl:mx-0 rounded-2xl xl:rounded-none bg-white relative overflow-hidden">
        <div
          style={{ transform: `translateX(-${(percent * 100) / 4}%)` }}
          className={`absolute bg-red-200 w-[400%] flex h-full ${
            isTransitioning ? "duration-1000" : null
          }`}
        >
          <div
            style={{
              backgroundImage: `url(https://res.cloudinary.com/dhatxjujo/image/upload/v1727749561/z82pdn3dkzingbll06oj.jpg)`,
            }}
            className="w-1/4 bg-[#F2F0FF] h-full bg-cover bg-center relative "
          ></div>
          <div
            style={{
              backgroundImage: `url(https://res.cloudinary.com/dhatxjujo/image/upload/v1727232486/nsmaaqt9fbzbhm81rulw.jpg)`,
            }}
            className="w-1/4 bg-green-200 h-full bg-cover bg-center relative"
          ></div>
          <div
            style={{
              backgroundImage: `url(https://res.cloudinary.com/dhatxjujo/image/upload/v1727749410/swrgvodgmvdorl44xrdj.jpg)`,
            }}
            className="w-1/4 bg-red-200 h-full bg-cover bg-center relative"
          ></div>
          <div
            style={{
              backgroundImage: `url(https://res.cloudinary.com/dhatxjujo/image/upload/v1727749510/getiksasgrc2rxwhprfi.jpg)`,
            }}
            className="w-1/4 bg-blue-200 h-full bg-cover bg-center relative"
          ></div>
        </div>
      </div>

      <div className="grid grid-cols-4 grid-rows-6 gap-x-5 gap-y-10 [&>div:nth-child(7)]:h-[700px] [&>div:nth-child(8)]:h-[700px] [&>div:nth-child(7)]:col-span-2 [&>div:nth-child(7)]:row-span-2 [&>div:nth-child(8)]:col-span-2 [&>div:nth-child(8)]:row-span-2 h-[2508px]">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            id={product._id}
            images={product.images}
            name={product.name}
            price={product.price}
            className="h-full"
            imageClassName={`${
              index === 6 || index === 7 ? "h-[754px]" : "h-[330px]"
            } object-cover`}
          />
        ))}
      </div>
    </div>
  );
};
