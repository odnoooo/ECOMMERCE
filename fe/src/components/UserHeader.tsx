"use client";

import { FaRegHeart } from "react-icons/fa";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { LuUser } from "react-icons/lu";
import { useEffect } from "react";
import { api } from "@/axios";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const UserHeader = () => {
  // const [res, _setRes] = useState<string>("");

  useEffect(() => {
    const getData = async () => {
      console.log("hhhh");
      console.log(process.env.API);

      await api.get("/");
    };

    getData();
  }, []);

  const pathname: string = usePathname();
  interface Path {
    name: string;
    path: string;
  }

  const paths: Path[] = [
    {
      name: "ECOMMERCE",
      path: "/",
    },
    {
      name: "Ангилал",
      path: "/category",
    },
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
      <div className="w-[300px] h-[36px] flex gap-2 bg-gray-800 items-center px-4 py-1 rounded-2xl text-gray-500 ">
        <CiSearch size={18} />
        <input
          type="search"
          placeholder="Бүтээгдэхүүн хайх"
          className="bg-transparent"
        ></input>
      </div>
      <div className="flex gap-8 px-20 items-center text-white">
        <Link href={"/save"}>
          <FaRegHeart />
        </Link>
        <Link href={"/byStep"}>
          <PiShoppingCartSimpleBold />
        </Link>
        <LuUser />
      </div>
    </div>
  );
};
