"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/components/utils/AuthProvider";
import { useFormik } from "formik";
import Link from "next/link";
import { FC, useState } from "react";
import { PiEyeThin } from "react-icons/pi";
import { PiEyeSlashThin } from "react-icons/pi";

interface FormValues {
  email: string;
  password: string;
}

const Page: FC = () => {
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik<FormValues>({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      login(values.email, values.password);
      console.log("Form Submitted", values);
    },
  });

  return (
    <div className="bg-[#f0f1f3]">
      <div className="w-[334px] m-auto py-[268px] container bg-">
        <div className=" flex flex-col gap-6 text-center">
          <h1 className="text-2xl font-semibold">Нэвтрэх</h1>
          <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col gap-4 ">
              <input
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="email"
                placeholder="Имэйл хаяг"
                className="border px-3 py-1 rounded-2xl shadow-md cursor-pointer"
              ></input>
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
                  className="absolute inset-y-0 right-0 pr-3 flex items-center "
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <PiEyeThin /> : <PiEyeSlashThin />}
                </button>
              </div>

              <Button
                type="submit"
                className="bg-blue-500 text-white px-3 py-1 rounded-2xl cursor-pointer hover:bg-white hover:text-blue-500 hover:border"
              >
                Нэвтрэх
              </Button>
              <Link href={"/register"}>
                <Button
                  type="button"
                  className="border w-full text-blue-500 px-3 py-1 rounded-2xl cursor-pointer mt-8 bg-white hover:bg-blue-500 hover:text-white"
                >
                  Бүртгүүлэх
                </Button>
              </Link>

              <Link href={"/forget"}>
                <p className="underline underline-offset-1 text-gray-500">
                  Нууц үг мартсан
                </p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Page;
