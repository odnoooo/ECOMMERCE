"use client";

import { RiDashboardFill } from "react-icons/ri";
import { PiNotepadLight } from "react-icons/pi";
import { BiSolidBriefcase } from "react-icons/bi";
import { CgNotes } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";
import { usePathname } from "next/navigation";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { Title } from "../components/Title";

const invoices = [
  {
    invoice: "1",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    soldOut: "",
  },
  {
    invoice: "2",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    soldOut: "PayPal",
  },
  {
    invoice: "3",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    soldOut: "Bank Transfer",
  },
  {
    invoice: "4",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    soldOut: "Credit Card",
  },
  {
    invoice: "5",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    soldOut: "PayPal",
  },
  {
    invoice: "6",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    soldOut: "Bank Transfer",
  },
  {
    invoice: "7",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    soldOut: "Credit Card",
  },
];

const Page = () => {
  return (
    <div className="w-screen bg-[#f0f1f3] flex">
      <Title />
      <div className="p-6 w-full flex gap-6">
        <div className="flex-1 flex flex-col gap-6">
          <div className="bg-white rounded flex flex-col gap-2 p-6">
            <h1>$ Орлого</h1>
            <p className="text-2xl font-semibold">1000000₮</p>
            <p className="text-gray-500">Өнөөдөр</p>
          </div>
          <div className="bg-white rounded p-8">
            <h1 className="h-12">Шилдэг бүтээгдэхүүн</h1>
            <Table>
              <TableCaption>A list of your recent invoices.</TableCaption>
              <TableHeader>
                <TableRow className="bg-gray-100">
                  <TableHead className="w-[100px] ">№</TableHead>
                  <TableHead>Бүтээгдэхүүн</TableHead>
                  <TableHead>Зарагдсан</TableHead>
                  <TableHead className="text-right">Үнэ</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.invoice}>
                    <TableCell className="font-medium">
                      {invoice.invoice}
                    </TableCell>
                    <TableCell>
                      <Card />
                    </TableCell>
                    <TableCell>{invoice.soldOut}</TableCell>
                    <TableCell className="text-right">
                      {invoice.totalAmount}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3}>Total</TableCell>
                  <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-6">
          <div className="bg-white rounded flex flex-col gap-2 p-6">
            <h1>$ Захиалга</h1>
            <p className="text-2xl font-semibold">66</p>
            <p className="text-gray-500">Өнөөдөр</p>
          </div>
          <div className="bg-white rounded p-8">
            <h1>Борлуулалт</h1>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

type CardProps = {
  image: string;
  title: string;
  _id: string;
};

const Card = ({ _id, image, title }: CardProps) => {
  return (
    <div className="flex gap-4 w-[200px]">
      <div className="w-10 h-10 border rounded-full ">
        <img className="object-cover rounded-full " src={image} />
      </div>
      <div className="flex flex-col">
        <h1 className="font-semibold">{title}</h1>
        <p>#{_id}</p>
      </div>
    </div>
  );
};
