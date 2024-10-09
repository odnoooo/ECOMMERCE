"use client";

import Image from "next/image";
import { ProductCard } from "./assets/ProductCard";
import { api } from "@/axios";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useAuth } from "./utils/AuthProvider";

const slides = [
  {
    title: "title",
    price: "1000000",
    img: "/image(1).png",
  },
  {
    title: "title",
    price: "1000000",
    img: "/image(2)",
  },
  {
    title: "title",
    price: "1000000",
    img: "/image(3)",
  },
];
interface productType {
  _id: string;
  title: string;
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
  title: string;
  price: number;
  discount?: number;
  favorite?: number;
};

// interface productType {
//   _id: string;
//   title: string;
//   images: string[];
//   price: number;
//   description: string;
//   salePercent: number;
// }

const productsData: productsData[] = [
  {
    id: 1,
    image: ["/image (2).png"],
    title: "Wildflower Hoodie",
    price: 120000,
  },
  {
    id: 2,
    image: ["/image (13).png"],
    title: "Wildflower Hoodie",
    price: 120000,
  },
  {
    id: 3,
    image: ["/image (4).png"],
    title: "Wildflower Hoodie",
    price: 120000,
  },
  {
    id: 4,
    image: ["/image (5).png"],
    title: "Wildflower Hoodie",
    price: 120000,
  },
  {
    id: 5,
    image: ["/image (6).png"],
    title: "Wildflower Hoodie",
    price: 120000,
  },
  {
    id: 6,
    image: ["/image (7).png"],
    title: "Wildflower Hoodie",
    price: 120000,
  },
  {
    id: 7,
    image: ["/image (8).png"],
    title: "Wildflower Hoodie",
    price: 120000,
  },
  {
    id: 8,
    image: ["/image (3).png"],
    title: "Wildflower Hoodie",
    price: 120000,
  },
  {
    id: 9,
    image: ["/image (13).png"],
    title: "Wildflower Hoodie",
    price: 120000,
  },
  {
    id: 10,
    image: ["/image (11).png"],
    title: "Wildflower Hoodie",
    price: 120000,
  },
  {
    id: 11,
    image: ["/image (4).png"],
    title: "Wildflower Hoodie",
    price: 120000,
  },
  {
    id: 12,
    image: ["/image (3).png"],
    title: "Wildflower Hoodie",
    price: 120000,
  },
  {
    id: 13,
    image: ["/image (2).png"],
    title: "Wildflower Hoodie",
    price: 120000,
    discount: 10,
  },
  {
    id: 14,
    image: ["/image (1).png"],
    title: "Wildflower Hoodie",
    price: 120000,
  },
  {
    id: 15,
    image: ["/image (13).png"],
    title: "Wildflower Hoodie",
    price: 120000,
  },
  {
    id: 16,
    image: ["/image (2).png"],
    title: "Wildflower Hoodie",
    price: 120000,
  },
  {
    id: 17,
    image: ["/image (3).png"],
    title: "Wildflower Hoodie",
    price: 120000,
  },
  {
    id: 18,
    image: ["/image (4).png"],
    title: "Wildflower Hoodie",
    price: 120000,
  },
];

export const MainPage = () => {
  const [products, setProducts] = useState<productType[]>([]);
  const [slideIndex, setSlideIndex] = useState(0);
  const [percent, setPercent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  // const { carousel } = useData();
  useEffect(() => {
    const interval = setInterval(() => {
      percent === 3 ? setIsTransitioning(false) : setIsTransitioning(true);
      setPercent((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await api.get("/product");
        setProducts(response.data.products);
      } catch (error: unknown) {
        console.log(error);
        if (error instanceof AxiosError) {
          toast.error(error.response?.data?.message || "Login failed.");
        } else {
          toast.error("An unknown error occurred.");
        }
      }
    };
    getProducts();
  }, []);

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
      {/* <div
        // style={{ transform: `translateX(-${(percent * 100) / 4}%)` }}
        // className={`absolute bg-red-200 w-[400%] flex h-full ${
        //   isTransitioning ? "duration-1000" : null
        // }`}
        className="flex h-[480px] relative overflow-hidden rounded-lg container"
      >
        <div
          style={{
            backgroundImage: `url(https://res.cloudinary.com/dhatxjujo/image/upload/v1727232486/nsmaaqt9fbzbhm81rulw.jpg)`,
          }}
          className="w-full bg-blue-200 h-full bg-cover bg-center relative"
        ></div>
        <div className="flex flex-col gap-2 absolute left-9 bottom-9">
          <p>Dress</p>
          <p className="text-4xl font-semibold">{`1₮`}</p>
        </div>
      </div> */}

      <div className="grid grid-cols-4 grid-rows-6 gap-x-5 gap-y-10 [&>div:nth-child(7)]:h-[700px] [&>div:nth-child(8)]:h-[700px] [&>div:nth-child(7)]:col-span-2 [&>div:nth-child(7)]:row-span-2 [&>div:nth-child(8)]:col-span-2 [&>div:nth-child(8)]:row-span-2 h-[2508px]">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            id={product._id}
            images={product.images}
            title={product.title}
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
