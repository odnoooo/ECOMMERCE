"use client";

import { HiOutlinePlusSmall } from "react-icons/hi2";
import { Title } from "./Title";
import { MdArrowBackIos } from "react-icons/md";
import { useRouter } from "next/navigation";
import { api } from "@/axios";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { AddProductForm } from "./AddProductForm";

interface ProductType {
  name: string;
  description: string;
  code: string;
  images: string[];
  price: number;
  discountPercent: number;
  qty: {
    free?: number;
    s?: number;
    m?: number;
    l?: number;
    xl?: number;
    "2xl"?: number;
    "3xl"?: number;
  };
  category: string[];
}
export const AddNewProducts = () => {
  useEffect(() => {});

  return (
    <div className="w-screen h-screen bg-[#f0f1f3] flex">
      <Title />
      <div className="w-full">
        <div className="p-4 flex gap-8 border-b w-full items-center">
          <MdArrowBackIos
            // onClick={() => router.push("/productslist")}
            className="cursor-pointer"
          />
          <p>Бүтээгдэхүүн</p>
        </div>
        <AddProductForm />
      </div>
    </div>
  );
};
