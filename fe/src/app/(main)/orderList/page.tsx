"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { cards } from "@/components/utils/cards";

export default function Page() {
  const pathname: string = usePathname();
  interface Path {
    name: string;
    path: string;
  }

  const paths: Path[] = [
    {
      name: " Хэрэглэгчийн хэсэг",
      path: "/userInfo",
    },
    {
      name: " Захиалгын түүх",
      path: "/orderList",
    },
  ];
  return (
    <div className="bg-[#f0f1f3] h-[848px]">
      <div className="w-[884px] m-auto flex gap-5 py-[68px]">
        <div className="w-[244px] flex flex-col gap-4">
          {paths.map((path, index) => (
            <Link key={index} href={path.path}>
              <div
                className={`py-1 px-4 rounded-2xl w-full text-sm ${
                  pathname === path.path ? "bg-white " : "bg-transparent"
                }`}
              >
                {path.name}
              </div>
            </Link>
          ))}
        </div>
        <div className="w-[620px] flex flex-col gap-4">
          <div className=" border-b-zinc-300 border-b-2 text-2xl font-semibold pb-6">
            <h1 className="">Захиалгын түүх</h1>
          </div>
          <div className="bg-white rounded-xl flex flex-col gap-4 py-8 px-6">
            <div className="flex gap-2 items-center">
              <p className="text-xl font-semibold">2024-09-09 09:09</p>
              <button className="bg-blue-500 text-white text-xs h-5 rounded-2xl px-3">
                Хүргэлтэнд гарсан
              </button>
            </div>
            <div className="flex flex-col gap-3">
              {/* {cards.slice(0, 4).map((card, index) => {
                return (
                  <div
                    key={index}
                    className="w-full h-[36px] flex gap-6  bg-white rounded-xl"
                  >
                    <div className="relative w-[36px] h-[36px] rounded-md flex ">
                      <Image
                        fill
                        src={card.image}
                        alt="Save image"
                        className="rounded-md"
                      />
                    </div>
                    <div className="w-[402px] flex flex-col text-xs">
                      <h1>{card.title}</h1>
                      <p className="font-light">1*{card.price}₮</p>
                    </div>
                  </div>
                );
              })} */}
            </div>
            <div className="flex justify-between border-t-2 pt-4 ">
              <p>Үнийн дүн :</p>
              <p>6666666$</p>
            </div>
          </div>
          <div className="h-[132px] bg-white rounded-xl py-8 px-6">
            <div className="flex gap-2 items-center">
              <p className="text-xl font-semibold">2024-09-09 09:09</p>
              <button className="bg-blue-500 text-white text-xs h-5 rounded-2xl px-3">
                Хүргэлтэнд гарсан
              </button>
            </div>
            <div className="flex justify-between">
              <p>Үнийн дүн :</p>
              <p>6666666$</p>
            </div>
          </div>
          <div className="h-[132px] bg-white rounded-xl py-8 px-6">
            <div className="flex gap-2 items-center">
              <p className="text-xl font-semibold">2024-09-09 09:09</p>
              <button className="bg-blue-500 text-white text-xs h-5 rounded-2xl px-3">
                Хүргэлтэнд гарсан
              </button>
            </div>
            <div className="flex justify-between ">
              <p>Үнийн дүн :</p>
              <p>6666666$</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
