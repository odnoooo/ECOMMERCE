"use client";

import { HiOutlinePlusSmall } from "react-icons/hi2";
import { Title } from "./Title";
import { MdArrowBackIos } from "react-icons/md";
import { useRouter } from "next/navigation";
import { AddProductImages } from "./AddProductImages";
import { api } from "@/axios";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { AddProductForm } from "./AddProductForm";

export const AddNewProducts = () => {
  // const [images, setImages] = useState<string[]>([]);
  // const [sizes, setSizes] = useState<{ [key: string]: number }>({
  //   free: 0,
  //   s: 0,
  //   m: 0,
  //   l: 0,
  //   xl: 0,
  //   "2xl": 0,
  //   "3xl": 0,
  // });

  const sizesData = ["free", "s", "m", "l", "xl", "2xl", "3xl"];

  // const router = useRouter();
  // const token = Cookies.get("token");

  // const createProduct = async () => {
  //   try {
  //     const response = await api.post(
  //       "/product",
  //       { ...values, images, qty: sizes },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     toast.success(
  //       response.data.message || "Бүтээгдэхүүн амжилттай нэмэгдлээ"
  //     );
  //     router.push("/adminproduct");
  //   } catch (error: unknown) {
  //     if (error instanceof AxiosError) {
  //       toast.error(
  //         error.response?.data?.message || "Бүтээгдэхүүн үүсгэхэд алдаа гарлаа."
  //       );
  //     } else {
  //       toast.error("Тодорхойгүй алдаа гарлаа.");
  //     }
  //   }
  // };

  // const handleCreate = () => {
  //   if (
  //     !formik.values.name ||
  //     !formik.values.description ||
  //     formik.values.price <= 0
  //   ) {
  //     toast.error(
  //       "Бүтээгдэхүүний нэр, нэмэлт мэдээлэл болон үнийг зөв оруулна уу!"
  //     );
  //     return;
  //   }
  //   createProduct();
  // };

  // const handleSizeClick = (size: string) => {
  //   setChooseSize(size);
  //   setSizes((prevSizes) => ({
  //     ...prevSizes,
  //     [size]: (prevSizes[size] || 0) + 1,
  //   }));
  // };

  // const handleInputChange = (
  //   e: React.ChangeEvent<HTMLInputElement>,
  //   size: string
  // ) => {
  //   const { value } = e.target;
  //   setSizes((prevSizes) => ({
  //     ...prevSizes,
  //     [size]: Number(value),
  //   }));
  // };
  // const getTotal = () => {
  //   return Object.values(sizes).reduce((sum, current) => sum + current, 0);
  // };

  // useEffect(() => {
  //   formik.setFieldValue("qty", getTotal());
  // }, [sizes]);

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
