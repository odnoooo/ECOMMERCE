"use client";

import Image from "next/image";
import { FiPhone } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="w-screen bg-[#000] px-50 py-16 ">
      <div className="flex flex-col gap-8 w-[60%] text-white m-auto">
        <div className="flex justify-between items-center">
          <Image
            width={48}
            height={48}
            src={"/pineconeLogo.png"}
            alt="Pinecone logo"
          />
          <div className="text-white flex gap-6 items-center">
            <div className="p-3 border rounded-full">
              <FiPhone />
            </div>
            <p>(976)77123456</p>
            <div className="p-3 border rounded-full">
              <IoMailOutline />
            </div>
            <p>contact@ecommerce.mn</p>
          </div>
        </div>
        <div className="w-full h-[1px] bg-white"></div>
        <div className="w-full h-5 flex justify-between">
          <p>© 2024 Ecommerce MN</p>
          <div className="flex gap-4">
            <IoLogoFacebook />
            <FaInstagram />
            <FaXTwitter />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
};
