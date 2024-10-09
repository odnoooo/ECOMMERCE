"use client";

import { FaRegBell } from "react-icons/fa";
import { LuUser } from "react-icons/lu";
import { useEffect } from "react";
import { api } from "@/axios";
import Image from "next/image";
import Link from "next/link";

export const AdminHeader = () => {
  useEffect(() => {
    const getData = async () => {
      console.log("hhhh");
      console.log(process.env.API);

      await api.get("/");
    };

    getData();
  }, []);

  return (
    <div className="h-[48px]  bg-[#000] w-screen flex justify-between py-4 px-16 text-white items-center">
      <div className="flex gap-8">
        <Image
          width={32}
          height={32}
          src={"/pineconeLogo.png"}
          alt="Pinecone logo"
        />
      </div>

      <div className="flex gap-10 items-center text-white">
        <Link href={"/save"}>
          {" "}
          <FaRegBell />
        </Link>
        <LuUser />
        <p>Username</p>
      </div>
    </div>
  );
};
