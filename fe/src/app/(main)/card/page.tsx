"use client";

import { cards } from "@/components/utils/cards";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CiTrash } from "react-icons/ci";

export default function Page() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleClick = () => {
    setCount(count + 1);
  };

  const pathname: string = usePathname();
  interface Path {
    name: string;
    path: string;
  }
  const paths: Path[] = [
    { name: "1", path: "/card" },
    { name: "2", path: "/user/address" },
    { name: "3", path: "/user/pay" },
  ];

  return (
    <div className="bg-[#f0f1f3] h-[848px] py-5">
      <div className="w-[638px] m-auto flex flex-col gap-8">
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
        <div>
          <div className="w-[638px] p-8 flex flex-col gap-4 bg-white rounded-2xl">
            <div className="flex gap-1 items-center">
              <h1 className="text-xl font-semibold">1. Сагс</h1>
              <span>(3)</span>
            </div>
            <div className="flex flex-col gap-4">
              {cards.slice(0, 3).map((card, index) => (
                <div
                  key={index}
                  className="flex gap-4 rounded-md h-[132px] border p-4 bg-white"
                >
                  <div className="relative  h-[100px] w-[100px] rounded-md flex ">
                    <Image
                      sizes="100"
                      fill
                      src={card.image}
                      alt="Save image"
                      className="rounded-md"
                    />
                  </div>
                  <div className="w-[402px] flex flex-col  gap-2">
                    <h1>{card.title}</h1>
                    <div className="flex gap-2">
                      <div
                        onClick={decrement}
                        className="w-8 h-8 rounded-full border border-gray-500 flex justify-center items-center"
                      >
                        -
                      </div>
                      <div className="w-8 h-8 rounded-full flex justify-center items-center">
                        {count}
                      </div>
                      <div
                        onClick={increment}
                        className="w-8 h-8 rounded-full border border-gray-500 flex justify-center items-center"
                      >
                        +
                      </div>
                    </div>
                    <p className="font-light">1*{card.price}₮</p>
                  </div>
                  <div className="">
                    {" "}
                    <CiTrash className="m-4" />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between">
              <p>Нийт төлөх дүн:</p>
              <p></p>
            </div>
            <div className="flex justify-end ">
              <button className="w-[175px] px-8 py-1 rounded-2xl bg-blue-500  text-white">
                Худалдан авах
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
