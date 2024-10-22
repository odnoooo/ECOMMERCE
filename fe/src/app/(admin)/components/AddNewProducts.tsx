"use client";

import { HiOutlinePlusSmall } from "react-icons/hi2";
import { Title } from "./Title";
import { MdArrowBackIos } from "react-icons/md";
import { useFormik } from "formik";
import * as yup from "yup";
import { api } from "@/axios";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { AddProductImages } from "./AddProductImages";
import { CreateNewCategory } from "./CreateNewCategory";
import { useData } from "@/components/utils/dataProvider";

interface FormValues {
  name: string;
  description: string;
  productCode: string;
  images: string[];
  price: number;
  discountPercent: number;
  qty: {
    free?: number;
    s?: number;
    m?: number;
    l?: number;
    xl?: number;
  };
  category: string;
}

export const AddNewProducts = () => {
const{createProduct}=useData()

  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      price: 0,
      productCode: "",
      discountPercent: 0,
      description: "",
      qty: {},
      images: [],
      category: "",
    },
    validationSchema: yup.object({
      name: yup.string().required("Нэрээ оруулна уу !"),
      price: yup
        .number()
        .required("Үнэ оруулна уу !")
        .min(0, "Үнэ 0-ээс их байх ёстой"),
      qty: yup.object().shape({
        free: yup
          .number()
          .min(0, "Тоо дугаар 0-ээс багагүй байх ёстой")
          .notRequired(),
        s: yup.number().min(0).notRequired(),
        m: yup.number().min(0).notRequired(),
        l: yup.number().min(0).notRequired(),
        xl: yup.number().min(0).notRequired(),
        "2xl": yup.number().min(0).notRequired(),
        "3xl": yup.number().min(0).notRequired(),
      }),
      discountPercent: yup
        .number()
        .required("")
        .min(0, "0-ээс их байх ёстой")
        .max(100, "100-с бага байх ёстой"),
      productCode: yup.string().required("Бүтээгдэхүүний кодыг оруулна уу"),
      description: yup.string().required("Нэмэлт мэдээлэл оруулна уу "),
      images: yup.array().of(yup.string()).required("Зураг оруулна уу"),
      category: yup.array().of(yup.string()).required("Ангилал оруулна уу"),
    }),
    onSubmit: (values) => {
      console.log("helooo");

      createProduct({
        name: values.name,
        description: values.description,
        productCode: values.productCode,
        images: values.images,
        price: values.price,
        discountPercent: values.discountPercent,
        qty: values.qty,
        category: values.category,
      });
      console.log(values);
    },
  });

  return (
    <div className="w-screen h-screen bg-[#f0f1f3] flex">
      <Title />
      <div className="w-full">
        <div className="p-4 flex gap-8 border-b w-full items-center">
          <MdArrowBackIos className="cursor-pointer" />
          <p>Бүтээгдэхүүн</p>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="p-8 flex gap-6">
            <div className="flex-1 space-y-4">
              <div className="p-4 space-y-4 bg-white rounded-xl">
                <div className="flex flex-col">
                  <Label className="text-sm">Бүтээгдэхүүний нэр</Label>
                  <Input
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`bg-gray-50 rounded border p-2 ${
                      formik.touched.name && formik.errors.name
                        ? "border-red-500"
                        : ""
                    }`}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {formik.errors.name}
                    </p>
                  )}
                </div>
                <div className="flex flex-col">
                  <Label className="text-sm">Нэмэлт мэдээлэл</Label>
                  <Textarea
                    name="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`bg-gray-50 rounded border p-2 ${
                      formik.touched.description && formik.errors.description
                        ? "border-red-500"
                        : ""
                    }`}
                  />
                </div>
                {formik.touched.description && formik.errors.description && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.description}
                  </p>
                )}
                <div className="flex flex-col">
                  <Label className="text-sm">Барааны код</Label>
                  <Input
                    name="productCode"
                    value={formik.values.productCode}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`bg-gray-50 rounded border p-2 ${
                      formik.touched.productCode && formik.errors.productCode
                        ? "border-red-500"
                        : ""
                    }`}
                  />
                  {formik.touched.productCode && formik.errors.productCode && (
                    <p className="text-red-500 text-sm mt-1">
                      {formik.errors.productCode}
                    </p>
                  )}
                </div>
              </div>
              <AddProductImages
                images={formik.values.images}
                setImages={(images: string[]) =>
                  formik.setFieldValue("images", images)
                }
              />
              <div className="bg-white p-4 rounded flex gap-4">
                <div className="flex-1 text-sm w-full flex flex-col gap-2">
                  <Label>Үндсэн үнэ</Label>
                  <Input
                    name="price"
                    type="number"
                    value={formik.values.price || ""}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Үндсэн үнэ"
                    className="border rounded bg-gray-100 p-2 text-sm"
                  />
                </div>
                <div className="flex-1 text-sm w-full  flex flex-col gap-2">
                  <Label>Хямдралын хувь</Label>
                  <Input
                    name="discountPercent"
                    type="number"
                    value={formik.values.discountPercent || ""}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Хямдралын хувь"
                    className="border rounded bg-gray-100 p-2 text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <div className="p-4 space-y-4 bg-white rounded-xl">
                <CreateNewCategory
                  category={formik.values.category}
                  setCategory={(category: string[]) =>
                    formik.setFieldValue("category", category)
                  }
                />
              </div>
              <div className="bg-white p-8 space-y-2 rounded-xl ">
                <p className="font-semibold">Хэмжээ</p>
                <div className="space-y-2">
                  Хэмжээг оруулах хэсэг
                  {["free", "s", "m", "l", "xl"].map((size) => (
                    <div
                      className="flex items-center justify-between"
                      key={size}
                    >
                      <Label>{size.toUpperCase()}</Label>
                      <Input
                        id={`qty.${size}`}
                        name={`qty.${size}`}
                        type="number"
                        placeholder=""
                        className="w-24"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={
                          formik.values.qty[
                            size as keyof typeof formik.values.qty
                          ]
                        }
                      />
                    </div>
                  ))}
                  <div className="mt-4 font-semibold">
                    <p>
                      Нийт үлдэгдэл:{" "}
                      {Object.values(formik.values.qty).reduce(
                        (acc, cur) => acc + cur,
                        0
                      )}
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 items-center text-sm">
                  <p>Шинэ Хэмжээ</p>
                  <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer">
                    <HiOutlinePlusSmall />
                  </div>
                </div>
              </div>
              <div className="flex gap-3 justify-end">
                <button
                  type="button"
                  className="border border-black py-2 px-4 rounded-md"
                >
                  Ноорог
                </button>
                <button
                  type="submit"
                  className="border py-2 px-4 rounded-md bg-black text-white"
                >
                  Нийтлэх
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
