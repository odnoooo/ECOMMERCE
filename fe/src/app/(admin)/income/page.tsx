"use client";

import { Calendar } from "../components/Calendar";
import { Title } from "../components/Title";
import { MdOutlineFileDownload } from "react-icons/md";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";
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

const Page = () => {
  const router = useRouter();
  return (
    <div className="w-screen h-screen bg-[#f0f1f3] flex">
      <Title />
      <div className="m-auto w-1/2 space-y-4">
        <div className="rounded-xl w-full h-40 bg-white ">
          <div className="h-20 flex justify-between items-center border-b px-8">
            <h1>Орлого</h1>
            <div className="bg-gray-100 rounded h-10 w-40 flex gap-4 items-center justify-center">
              <MdOutlineFileDownload />
              <p>Хуулга татах</p>
            </div>
          </div>
          <div className="flex justify-between items-center px-8 h-20">
            <p>₮444</p>
            <Calendar />
          </div>
        </div>
        <div className="bg-white rounded-xl p-8 w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-100 w-full">
                <TableHead>Захиалгын ID дугаар</TableHead>
                <TableHead>Үйлчлүүлэгч</TableHead>
                <TableHead>Төлбөр</TableHead>
                <TableHead>Огноо</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="font-medium">
                    {invoice.invoice}
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <p>{invoice.soldOut}</p>
                      <p>{invoice.soldOut}</p>
                    </div>
                  </TableCell>
                  <TableCell>{invoice.soldOut}</TableCell>
                  <TableCell>{invoice.soldOut}</TableCell>

                  <TableCell></TableCell>
                  <TableCell className="text-right"></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};
export default Page;
