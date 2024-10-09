"use client";

import Image from "next/image";

export default function Page() {
  return (
    <div className="w-full bg-[#f0f1f3] h-[848px] py-[150px]">
      <div className="py-14 px-2  bg-white w-[360px] m-auto flex flex-col gap-4  justify-center items-center rounded-2xl">
        <div className="relative w-[32px] h-[32px] text-center flex ">
          <Image fill src={"/Vector (1).png"} alt="Image"></Image>
        </div>
        <p>Захиалга амжилттай баталгаажлаа.</p>
      </div>
    </div>
  );
}
