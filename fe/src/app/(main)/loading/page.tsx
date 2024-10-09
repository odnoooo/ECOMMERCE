"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Page() {
  return (
    <div className="h-[848px] m-auto">
      <div className="w-[72px] py-[200px] m-auto container">
        <div className="border-gray-300 h-16 w-16 animate-spin rounded-full border-8 border-t-gray-600 " />
      </div>
    </div>
  );
}
