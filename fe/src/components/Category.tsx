"use client";

import { ProductCard } from "./assets";
import { Checkbox } from "@/components/ui/checkbox";
import React, { useState, useEffect } from "react";
import { api } from "@/axios";
import { Axios, AxiosError } from "axios";
import { toast } from "react-toastify";

const sizes = ["Free", "S", "M", "L", "XL", "2XL", "3XL"];

interface categoryType {
  _id: string;
  name: string;
}

interface productType {
  _id: string;
  title: string;
  price: number;
  discountPercent: number;
  description: number;
  category: string[];
  images: string[];
}

export const CategoryContent = () => {
  const [products, setproducts] = useState<productType[]>([]);
  const [categories, setCategories] = useState<categoryType[]>([]);
  const [categoryId, setCategoryId] = useState<string>("");
  const [handleSize, setHandleSize] = useState<string>("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await api.get("/product");
        setproducts(response.data.products);
      } catch (error: unknown) {
        console.log(error);
        if (error instanceof AxiosError) {
          toast.error(error.response?.data?.message || "Login failed.");
        } else {
          toast.error("An unknown error occured.");
        }
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await api.get("/category");
        setCategories(response.data.categories);
      } catch (error: unknown) {
        console.log(error);
        if (error instanceof AxiosError) {
          toast.error(error.response?.data?.message);
        } else {
          toast.error("An unknown error occured.");
        }
      }
    };
    getCategories();
  }, []);

  const categoryFilteredProduct =
    categoryId === ""
      ? products
      : products.filter((product) => product.category.includes(categoryId));

  return (
    <div className="w-[60%] m-auto py-12 h-fit flex gap-5">
      <div className="w-[calc((100%/4)+60px)] h-full flex flex-col gap-8 container">
        <div className="flex flex-col gap-4 ">
          <h1
            onClick={() => setCategoryId("")}
            className="font-semibold text-xl"
          >
            Ангилал
          </h1>{" "}
          {categories.map((category, index) => (
            <div
              onClick={() => setCategoryId(category._id)}
              key={index}
              className={`${
                categoryId === category._id
                  ? "underline underline-offset-4"
                  : null
              } hover:underline hover:underline-offset-4 hover:text-blue-500 cursor-pointer flex gap-2`}
            >
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {category.name}
              </label>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 ">
          <h1
            onClick={() => setHandleSize("")}
            className="font-semibold text-xl"
          >
            Хэмжээ
          </h1>
          <ul className="flex flex-col gap-4 ">
            {sizes.map((size, index) => (
              <div
                onClick={() => setHandleSize(size)}
                key={index}
                className={`${
                  handleSize === size ? "underline underline-offset-4" : null
                }hover:underline hover:underline-offset-4 hover:text-blue-500 cursor pointer flex gap-2`}
              >
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {size}
                </label>
              </div>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full grid grid-cols-3 grid-rows-4 gap-5 [&<div:nth-child(1)]:row-span-4 ">
        {categoryFilteredProduct.slice(0, 12).map((product, index) => (
          <ProductCard
            key={index}
            id={product._id}
            images={product.images}
            title={product.title}
            price={product.price}
            className="h-full"
            imageClassName="h-[330px]"
          />
        ))}
      </div>
    </div>
  );
};
