"use client";

import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const Page = () => {
  return (
    <div className="p-11 h-100vh">
      <div className="relative w-[194px] h-[32px]">
        <Image fill src={"/Group.png"} alt="pinecone logo" />
      </div>
      <div className="flex flex-col gap-6 w-[440px] m-auto p-8 border rounded-2xl my-[134px]">
        <h1 className="text-2xl font-semibold text-center">Бүртгүүлэх</h1>
        <div className="flex flex-col gap-4">
          <div>
            <label>Таны имэйл</label>
            <input
              name="Имэйл"
              placeholder="Имэйл"
              className="p-2 rounded-xl bg-gray-100 w-full border h-[48px]"
            ></input>
          </div>
          <div>
            <label>Таны нэр</label>
            <input
              name="Нэр"
              placeholder="Нэр"
              className="p-2 rounded-xl bg-gray-100 w-full border h-[48px]"
            ></input>
          </div>
          <div className="relative ">
            <button className="bg-black rounded-xl py-2 text-white h-[48px w-full relative ">
              Дарах
            </button>
            <IoIosArrowRoundForward
              className="absolute right-6 bottom-3 text-white"
              size={18}
            />
          </div>

          <div className="border-b border-t flex flex-col gap-4 py-6 ">
            <div className="flex h-[48px] items-center justify-center bg-gray-100 p-4 rounded-xl">
              {" "}
              <FcGoogle size={24} />
              <p>Google-ээр нэвтрэх</p>
            </div>
            <div className="h-[48px] flex  items-center justify-center bg-gray-100 p-4 rounded-xl ">
              <div className="h-[24px] w-[24px] relative">
                <Image
                  src={"/microsoft.png"}
                  fill
                  alt="Microsoft logo"
                  sizes="24"
                  className="object-cover"
                />
              </div>

              <p>Microsoft-оор нэвтрэх</p>
            </div>
            <div className="flex h-[48px]  items-center justify-center bg-gray-100 p-4 rounded-xl">
              <FaApple size={24} />
              <p>Apple-аар нэвтрэх</p>
            </div>
          </div>

          <div className="flex justify-center p-4">
            <p>Бүртгэлтэй юу? </p>
            <Link href={"/login"} className="underline underline-offset-4">
              Нэвтрэх
            </Link>
          </div>
        </div>
      </div>
      <p className="text-gray-400 text-center absolute bottom-5 left-1/2 transform -translate-x-1/2">
        © 2023 Pinecone
      </p>
    </div>
  );
};
export default Page;
