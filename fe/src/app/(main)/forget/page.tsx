"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-[#f0f1f3]">
      <div className="w-[334px] m-auto py-[268px] container ">
        <div className=" flex flex-col gap-6 text-center mb-[180px]">
          <h1 className="text-2xl font-semibold">Нууц үг сэргээх</h1>
          <div className="flex flex-col gap-4 ">
            <input
              name="name"
              placeholder="Имэйл хаяг"
              className="border px-3 py-2 rounded-2xl shadow-md cursor-pointer"
            ></input>
            <Link href={"/loading"}>
              <Button
                type="submit"
                className="w-full bg-blue-500 text-white rounded-2xl  hover:bg-white hover:text-blue-500 hover:border"
              >
                Нэвтрэх
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
