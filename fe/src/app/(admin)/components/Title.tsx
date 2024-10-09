"use client";

import { RiDashboardFill } from "react-icons/ri";
import { PiNotepadLight } from "react-icons/pi";
import { BiSolidBriefcase } from "react-icons/bi";
import { CgNotes } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const Title = () => {
  const pathname: string = usePathname();
  interface Path {
    name: string;
    path: string;
    icon: React.ComponentType;
  }

  const paths: Path[] = [
    { icon: RiDashboardFill, name: "Хяналтын самбар", path: "/dashboard" },
    { icon: PiNotepadLight, name: "Захиалга", path: "/order" },
    { icon: BiSolidBriefcase, name: "Орлого", path: "/income" },
    { icon: CgNotes, name: "Бүтээгдэхүүн", path: "/adminproduct" },
    { icon: IoMdSettings, name: "Тохиргоо", path: "/settings" },
  ];
  return (
    <div className="bg-white">
      <div className="w-[300px] flex flex-col gap-4 bg-white py-6 h-screen font-semibold">
        {paths.map((item, index) => {
          const IconComponent = item.icon;

          return (
            <Link href={item.path} key={index}>
              <div
                className="flex items-center gap-2 p-2 rounded hover:bg-gray-100"
                style={{
                  color: pathname === item.path ? "bg-#f0f1f3" : "bg-white",
                }}
              >
                <IconComponent />
                <div>{item.name}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
