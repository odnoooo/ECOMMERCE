"use client";
import { useEffect, useState } from "react";
import { ProductCard } from "./assets";
import { api } from "@/axios";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

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

export const ProductsGrid = () => {
  const [products, setProducts] = useState<productType[]>([]);

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
            title={product.title}
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
