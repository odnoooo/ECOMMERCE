"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { FC, useState } from "react";
import { PiEyeThin } from "react-icons/pi";
import { PiEyeSlashThin } from "react-icons/pi";

interface FormValues {
  password: string;
  confirmPassword: string;
}

const Page: FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik<FormValues>({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(8, "Нууц үг 8 тэмдэгтээс дээш байх ёстой")
        .matches(/[A-Z]/, "Том үсэг орсон байх")
        .matches(/[a-z]/, "Жижиг үсэг орсон байх")
        .matches(/\d/, "Тоо орсон байх")
        .matches(/[\W_]/, "Тэмдэгт орсон байх")
        .required("Нууц үг шаардлагатай"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Нууц үг таарахгүй байна")
        .required("Нууц үг давтах шаардлагатай"),
    }),
    onSubmit: (values) => {
      console.log("Form submitted", values);
    },
  });

  const isValidUpperCase = /[A-Z]/.test(formik.values.password);
  const isValidLowerCase = /[a-z]/.test(formik.values.password);
  const isValidNumber = /\d/.test(formik.values.password);
  const isValidSpecialChar = /[\W_]/.test(formik.values.password);

  return (
    <div className="bg-[#f0f1f3] h-[848px]">
      <div className=" container m-auto w-[334px] h-200 w-260  flex flex-col py-[172px] gap-6 ">
        <h1 className="text-2xl font-semibold text-center">Нууц үг сэргээх</h1>
        <div className="">
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Нууц үг"
                className="border px-3 py-1 rounded-2xl shadow-md relative w-full"
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
              placeholder="Нууц үг давтах"
              className="border px-3 py-1 rounded-2xl shadow-md  w-full"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className="text-xs text-red-500">
                {formik.errors.confirmPassword}
              </div>
            ) : null}
          </form>
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
              Том үсэг орсон байх
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
              Жижиг үсэг орсон байх
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
              Тоо орсон байх
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
              Тэмдэгт орсон байх
            </li>
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-3 py-1 rounded-2xl"
        >
          Үүсгэх
        </button>
      </div>
    </div>
  );
};
export default Page;
