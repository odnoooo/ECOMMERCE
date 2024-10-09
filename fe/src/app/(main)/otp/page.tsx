"use client";

import Image from "next/image";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export default function Page() {
  return (
    <div className="bg-[#f0f1f3] h-[848px] ">
      <div className="w-[1040px] m-auto flex flex-col gap-12 text-center py-[200px]">
        <div className=" flex flex-col gap-6">
          <div className="relative w-[96px] h-[96px] m-auto">
            <Image sizes="96" fill src={"/frame.png"} alt="Frame" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold">Баталгаажуулах</h1>
            <p className="font-light">
              “mujo@nest.edu.mn” хаягт илгээсэн баталгаажуулах кодыг оруулна уу
            </p>
          </div>
          <div className="m-auto">
            <InputOTP maxLength={6}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
              </InputOTPGroup>
            </InputOTP>
          </div>
        </div>
        <div className="flex gap-1 justify-center underline underline-offset-4 text-gray-600">
          <p>Дахин илгээх</p>
          <p>(33)</p>
        </div>
      </div>
    </div>
  );
}
