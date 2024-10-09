"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

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
      <div className="w-[884px] m-auto flex gap-5 py-[168px]">
        <div className="w-[244px] flex flex-col gap-4">
          {paths.map((path, index) => (
            <Link key={index} href={path.path}>
              <div
                className={`py-1 px-4 rounded-2xl w-full ${
                  pathname === path.path ? "bg-white " : "bg-transparent"
                }`}
              >
                {path.name}
              </div>
            </Link>
          ))}
        </div>
        <div className="w-[620px] flex flex-col gap-4">
          <div className=" border-b-2 text-2xl font-semibold pb-6">
            <h1 className="">Хэрэглэгчийн хэсэг</h1>
          </div>
          <div>
            <label>Овог:</label>
            <input className="w-full bg-white h-[28px] rounded-2xl shadow-md"></input>
          </div>
          <div>
            <label>Нэр:</label>
            <input className="w-full bg-white h-[28px] rounded-2xl shadow-md"></input>
          </div>{" "}
          <div>
            <label>Утасны дугаар:</label>
            <input className="w-full bg-white h-[28px] rounded-2xl shadow-md"></input>
          </div>{" "}
          <div>
            <label>Имэйл хаяг:</label>
            <input className="w-full bg-white h-[28px] rounded-2xl shadow-md"></input>
          </div>
          <div>
            <label>Хаяг</label>
            <textarea className="w-full bg-white h-[94px] rounded-2xl shadow-md"></textarea>
          </div>
          <div className="flex justify-end">
            <button className="bg-blue-500 text-white rounded-2xl py-1 w-[212px] shadow-md ">
              {" "}
              Мэдээлэл шинэчлэх
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
