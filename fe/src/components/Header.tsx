"use client";

import { FaRegHeart } from "react-icons/fa";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { useEffect } from "react";
import { api } from "@/axios";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Input } from "./ui/input";

export const Header = () => {
  // const [res, _setRes] = useState<string>("");

  // useEffect(() => {
  //   const getData = async () => {
  //     console.log("hhhh");
  //     console.log(process.env.API);

  //     await api.get("/");
  //   };

  //   getData();
  // }, []);

  const pathname: string = usePathname();
  interface Path {
    name: string;
    path: string;
  }

  const paths: Path[] = [
    { name: "ECOMMERCE", path: "/" },
    { name: "Ангилал", path: "/category" },
    { name: "Бүртгүүлэх", path: "/register" },
    { name: "Нэвтрэх", path: "/login" },
  ];

  return (
    <div className="h-[68px]  bg-[#000] w-screen flex justify-between py-4 px-16 text-white items-center">
      <div className="flex gap-8">
        <Image
          width={32}
          height={32}
          src={"/pineconeLogo.png"}
          alt="Pinecone logo"
        />
        {paths.slice(0, 2).map((path, index) => (
          <Link key={index} href={path.path}>
            <div
              style={{ color: pathname === path.path ? "#2563EB" : "white" }}
            >
              {path.name}
            </div>
          </Link>
        ))}
      </div>
      <div className="relative">
        <CiSearch size={18} className="absolute w-6 h-6 top-[6px] left-2" />
        <Input
          type="search"
          placeholder="Бүтээгдэхүүн хайх"
          className="bg-transparent border-none w-80 px-10 bg-gray-800"
        ></Input>
      </div>
      <div className="flex gap-4 items-center text-white">
        <Link href={"/save"}>
          <div className="relative w-6 h-6 flex">
            <div className="absolute top-0 right-0 bg-blue-500 rounded-full h-4 w-4 flex justify-center items-center text-xs">
              1
            </div>{" "}
            <FaRegHeart className="absolute bottom-0 left-0" />
          </div>
        </Link>
        <Link href={"/byStep"}>
          <div className="relative w-6 h-6 flex">
            <div className="absolute top-0 right-0 bg-blue-500 rounded-full h-4 w-4 flex justify-center items-center text-xs">
              1
            </div>
            <PiShoppingCartSimpleBold className="absolute bottom-0 left-0" />
          </div>
        </Link>
        {paths.slice(2, 4).map((path, index) => (
          <Link key={index} href={path.path}>
            <button
              type="submit"
              className={`border border-blue-500 text-white py-1 px-4 rounded-2xl ${
                pathname === path.path ? "bg-blue-500 " : "bg-transparent"
              }`}
            >
              {path.name}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};
