"use client";

import { Formik, useFormik } from "formik";
import * as Yup from "yup"; // for validation schema
import { FC, useState } from "react";
import { PiEyeThin } from "react-icons/pi";
import { PiEyeSlashThin } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/components/utils/AuthProvider";

interface FormValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Page: FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { register } = useAuth();

  const formik = useFormik<FormValues>({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Хэрэглэгчийн нэр шаардлагатай"),
      email: Yup.string()
        .email("Имэйл хаяг буруу байна")
        .required("Имэйл хаяг шаардлагатай"),
      password: Yup.string()
        .min(8, "Нууц үг 8 тэмдэгтээс дээш байх ёстой")
        .matches(/[A-Z]/, "Том үсэг оруулах шаардлагатай")
        .matches(/[a-z]/, "Жижиг үсэг оруулах шаардлагатай")
        .matches(/\d/, "Тоо оруулах шаардлагатай")
        .matches(/[\W_]/, "Тусгай тэмдэгт оруулах шаардлагатай")
        .required("Нууц үг шаардлагатай"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Нууц үг таарахгүй байна")
        .required("Нууц үгээ давтан оруулах шаардлагатай"),
    }),
    onSubmit: (values) => {
      register({
        username: values.username,
        email: values.email,
        password: values.password,
      });
      console.log("Form Submitted", values);
    },
  });

  const isValidUpperCase = /[A-Z]/.test(formik.values.password);
  const isValidLowerCase = /[a-z]/.test(formik.values.password);
  const isValidNumber = /\d/.test(formik.values.password);
  const isValidSpecialChar = /[\W_]/.test(formik.values.password);

  return (
    <div className="bg-[#f0f1f3]">
      <div className="w-[334px] h-200 w-260 m-auto flex flex-col py-[172px] gap-6 ">
        <h1 className="text-2xl font-semibold text-center">Бүртгүүлэх</h1>

        <div className="w-[334px] flex flex-col gap-4">
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
            <input
              name="username"
              placeholder="Хэрэглэгчийн нэр"
              className="border px-3 py-1 rounded-2xl shadow-md cursor-pointer"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="text-xs text-red-500">
                {formik.errors.username}
              </div>
            ) : null}

            <input
              name="email"
              placeholder="Имэйл хаяг"
              className="border px-3 py-1 rounded-2xl shadow-md cursor-pointer"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-xs text-red-500">{formik.errors.email}</div>
            ) : null}

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Нууц үг"
                className="border px-3 py-1 rounded-2xl shadow-md relative w-full cursor-pointer"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <PiEyeThin /> : <PiEyeSlashThin />}
              </button>
            </div>

            {formik.touched.password && formik.errors.password ? (
              <div className="text-xs text-red-500">
                {formik.errors.password}
              </div>
            ) : null}

            <input
              type="password"
              name="confirmPassword"
              placeholder="Нууц үг давтан оруулах"
              className="border px-3 py-1 rounded-2xl shadow-md relative cursor-pointer w-full"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className="text-xs text-red-500">
                {formik.errors.confirmPassword}
              </div>
            ) : null}

            <div className="text-xs p-2 leading-5 text-gray-500 ">
              <li
                className={`${
                  formik.values.password === ""
                    ? "text-gray-500"
                    : isValidUpperCase
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                Том үсэг оруулах шаардлагатай
              </li>
              <li
                className={`${
                  formik.values.password === ""
                    ? "text-gray-500"
                    : isValidLowerCase
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                Жижиг үсэг оруулах шаардлагатай
              </li>
              <li
                className={`${
                  formik.values.password === ""
                    ? "text-gray-500"
                    : isValidNumber
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                Тоо оруулах шаардлагатай
              </li>
              <li
                className={`${
                  formik.values.password === ""
                    ? "text-gray-500"
                    : isValidSpecialChar
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                Тусгай тэмдэгт оруулах шаардлагатай
              </li>
            </div>

            <Button
              type="submit"
              className="bg-blue-500 text-white px-3 py-1 rounded-2xl cursor-pointer hover:bg-transparent hover:text-blue-500 hover:border"
            >
              Үүсгэх
            </Button>
          </form>
        </div>

        <Button
          type="button"
          className="border  text-blue-500 px-3 py-1 rounded-2xl cursor-pointer mt-8 bg-transparent hover:bg-blue-500 hover:text-white"
        >
          Нэвтрэх
        </Button>
      </div>
    </div>
  );
};

export default Page;
