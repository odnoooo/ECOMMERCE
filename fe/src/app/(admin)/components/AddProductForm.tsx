"use client";

import { useFormik } from "formik";
import * as yup from "yup";
import { AddProductImages } from "./AddProductImages";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { HiOutlinePlusSmall } from "react-icons/hi2";
import { useData } from "@/components/utils/dataProvider";
import { CreateNewCategory } from "./CreateNewCategory";

interface FormValues {
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

export const AddProductForm = () => {
  const { categories } = useData();
  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      price: 0,
      code: "",
      discountPercent: 0,
      description: "",
      qty: {
        free: 0,
        s: 0,
        m: 0,
        l: 0,
        xl: 0,
        "2xl": 0,
        "3xl": 0,
      },
      images: [""],
      category: [],
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
      description: yup.string().required("Нэмэлт мэдээлэл оруулна уу "),
      images: yup.array().of(yup.string()).required("Зураг оруулна уу"),
      category: yup.array().of(yup.string()).required("Ангилал оруулна уу"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div>
      {" "}
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
                  className="bg-gray-50 rounded border p-2"
                />
              </div>
              <div className="flex flex-col">
                <Label className="text-sm">Нэмэлт мэдээлэл</Label>
                <Textarea
                  name="description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="bg-gray-50 rounded border p-2"
                />
              </div>
              <div className="flex flex-col">
                <Label className="text-sm">Барааны код</Label>
                <Input
                  name="code"
                  value={formik.values.code}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="bg-gray-50 rounded border p-2"
                />
              </div>
            </div>
            <AddProductImages />
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
              <CreateNewCategory />
            </div>
            <div className="bg-white p-8 space-y-2 rounded-xl ">
              <p className="font-semibold">Хэмжээ</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>FREE</Label>
                  <Input
                    id="qty.free"
                    name="qty.free"
                    type="number"
                    placeholder=""
                    className="w-24"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.qty.free}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label>S</Label>
                  <Input
                    id="qty.s"
                    name="qty.s"
                    type="number"
                    placeholder=""
                    className="w-24"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.qty.s}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label>M</Label>
                  <Input
                    id="qty.m"
                    name="qty.m"
                    type="number"
                    placeholder=""
                    className="w-24"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.qty.m}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label>L</Label>
                  <Input
                    id="qty.l"
                    name="qty.l"
                    type="number"
                    placeholder=""
                    className="w-24"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.qty.l}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label>XL</Label>
                  <Input
                    id="qty.xl"
                    name="qty.xl"
                    type="number"
                    placeholder=""
                    className="w-24"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.qty.xl}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label>2XL</Label>
                  <Input
                    id="qty['2xl']"
                    name="qty['2xl']"
                    type="number"
                    placeholder=""
                    className="w-24"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.qty["2xl"]}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label>3XL</Label>
                  <Input
                    id="qty['3xl']"
                    name="qty['3xl']"
                    type="number"
                    placeholder=""
                    className="w-24"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.qty["3xl"]}
                  />
                </div>
                <div className="mt-4 font-semibold">
                  <p>
                    Нийт үлдэгдэл:{" "}
                    {Object.values(formik.values.qty).reduce(
                      (acc, cur) => acc + cur,
                      0
                    )}
                  </p>{" "}
                </div>
              </div>

              <div className="flex gap-2 items-center text-sm">
                <p>Шинэ Хэмжээ</p>
                <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer">
                  <HiOutlinePlusSmall />
                </div>
              </div>

              <button className="border py-2 px-4 rounded-md">
                Төрөл нэмэх
              </button>
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
  );
};
