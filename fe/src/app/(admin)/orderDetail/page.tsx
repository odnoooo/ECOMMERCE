"use client";

import { useRouter } from "next/navigation";
import { Title } from "../components/Title";
import { IoIosArrowBack } from "react-icons/io";
import { OrderButton } from "../components/OrderButton";
import { OrderCard } from "../components/OrderCard";

const Page = () => {
  const router = useRouter();

  return (
    <div className="w-screen h-screen bg-[#f0f1f3] flex">
      <Title />
      <div className="w-full ">
        <div className="flex gap-4 p-4 items-center bg-white">
          <IoIosArrowBack onClick={() => router.push("/order")} />
          <p className="font-semibold">Захиалгын дэлгэрэнгүй</p>
        </div>
        <div className="p-8 flex gap-4">
          <div className="rounded-xl bg-white p-6 space-y-6 w-[800px] flex-1 min-h-screen">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm">Захиалгын ID дугаар</p>
                <p className="font-semibold text-sm">user._id</p>
              </div>
              <OrderButton />
            </div>
            <div className="text-sm">
              <p>Захиалагч: хувь хүн</p>
              <div className="flex">
                <p>username -</p>
                <p>email, phonoNumber</p>
              </div>
            </div>
            <OrderCard />
          </div>
          <div className="flex-1 space-y-4">
            <div className="rounded-xl p-4 bg-white ">
              <div className="p-4 border-b">Хүргэлтийн мэдээлэл</div>
              <div className=" space-y-2 p-4">
                <p className="text-gray-500 text-sm">haana</p>
                <p>bzd 1r horoo</p>
              </div>
            </div>
            <div className="rounded-xl p-4 bg-white ">
              <div className="p-4 border-b">Төлбөрийн мэдээлэл</div>
              <div className="p-4 space-y-2">
                <p className="text-gray-500 text-sm">Бүтээгдэхүүн</p>
                <p>product</p>
              </div>
              <div className="border-b p-4 text-gray-500 text-sm flex justify-between w-full">
                <p className="">Хүргэлт</p>
                <p>₮ 5000</p>
              </div>
              <div className="font-semibold flex justify-between w-full p-4">
                <p>Нийт төлсөн дүн:</p>
                <p className="">₮ total</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
