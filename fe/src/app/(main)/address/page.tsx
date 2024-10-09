"use client";

import { cards } from "@/components/utils/cards";
import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-[#f0f1f3] h-[848px] p-5">
      <div className="w-[1040px] m-auto flex flex-col gap-[66px]">
        <div className="flex items-center  justify-center">
          <div className="w-8 h-8 rounded-full border border-gray-500  flex justify-center items-center">
            1
          </div>
          <div className="border border-gray-500  w-[80px]"></div>
          <div className="w-8 h-8 rounded-full border border-gray-500  flex justify-center items-center">
            2
          </div>
          <div className="border border-gray-500 w-[80px]"></div>
          <div className="w-8 h-8 rounded-full border border-gray-500  flex justify-center items-center">
            3
          </div>
        </div>

        <div className="flex w-full gap-4">
          <div className="w-[333px] p-6  flex flex-col gap-4 bg-white rounded-xl">
            <div className="flex gap-1 items-center">
              <h1 className="text-xl font-semibold">1. Сагс</h1>
              <span>(3)</span>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4 ">
                {cards.slice(0, 3).map((card, index) => (
                  <div
                    key={index}
                    className="flex gap-4 rounded-md h-[80px] bg-white"
                  >
                    <div className="relative  h-[80px] w-[80px] rounded-md flex ">
                      <Image
                        sizes="80"
                        fill
                        src={card.image}
                        alt="Save image"
                        className="rounded-md"
                      />
                    </div>
                    <div className=" flex flex-col  gap-2 text-xs">
                      <h1>{card.title}</h1>
                      <p className="font-light">1*{card.price}₮</p>
                      <p className="font-semibold">{card.price}₮</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border border-gray-300"></div>
              <div className="flex justify-between">
                <p>Нийт төлөх дүн:</p>
                <p className="font-semibold">12222$</p>
              </div>
            </div>
          </div>
          <div className="p-6 flex flex-col gap-4 w-full rounded-xl bg-white">
            <div className="flex gap-1 items-center">
              <h1 className="text-xl font-semibold">
                2. Хүргэлтийн мэдээлэл оруулах
              </h1>
              <span>(3)</span>
            </div>
            <div className="flex flex-col  ">
              <label>Нэр :</label>
              <input className="border shadow-md rounded-2xl"></input>
            </div>
            <div className="flex flex-col  ">
              <label>Овог :</label>
              <input className="border rounded-2xl shadow-md"></input>
            </div>{" "}
            <div className="flex flex-col ">
              <label>Утасны дугаар :</label>
              <input className="border rounded-2xl shadow-md"></input>
            </div>{" "}
            <div className="flex flex-col ">
              <label>Хаяг :</label>
              <textarea className="border rounded-2xl shadow-md"></textarea>
            </div>{" "}
            <div className="flex flex-col ">
              <label>Нэмэлт мэдээлэл :</label>
              <textarea className="border rounded-2xl shadow-md"></textarea>
              <p className="text-xs text-gray-500">
                Хүргэлттэй холбоотой нэмэлт мэдээлэл үлдээгээрэй
              </p>
            </div>
            <div className=" flex justify-between">
              <button className="rounded-2xl border px-8 py-1">Буцах</button>
              <button className="rounded-2xl bg-blue-500 text-white px-8 py-1">
                Төлбөр төлөх
              </button>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}
