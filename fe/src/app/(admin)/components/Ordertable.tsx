"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";
import { OrderButton } from "./OrderButton";
import { CiTrash } from "react-icons/ci";
import { MdOutlineModeEdit } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { OrderCard } from "./OrderCard";
import { ProductAddCard } from "./ProductAddCard";
import { Checkbox } from "@/components/ui/checkbox";

const invoices = [
  {
    invoice: "1",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    soldOut: "zoloo ",
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

export const OrderTable = () => {
  return (
    <div>
      <div className="bg-white rounded p-8">
        <h1 className="h-12">Захиалга</h1>
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100 ">
              <TableHead></TableHead>
              <TableHead>Бүтээгдэхүүн</TableHead>
              <TableHead>Ангилал</TableHead>
              <TableHead>Үнэ</TableHead>
              <TableHead>Үлдэгдэл</TableHead>
              <TableHead>Зарагдсан</TableHead>
              <TableHead>Нэмсэн огноо</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">
                  <Checkbox id="terms" />
                </TableCell>
                <TableCell>
                  <ProductAddCard />
                </TableCell>
                <TableCell>{invoice.soldOut}</TableCell>
                <TableCell>{invoice.soldOut}</TableCell>
                <TableCell>{invoice.soldOut}</TableCell>
                <TableCell>{invoice.soldOut}</TableCell>
                <TableCell>{invoice.invoice}</TableCell>
                <TableCell className="text-right flex gap-2 text-gray-500">
                  <CiTrash />
                  <MdOutlineModeEdit />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
