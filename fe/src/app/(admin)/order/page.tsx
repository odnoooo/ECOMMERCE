"use client";
import { Input } from "@/components/ui/input";
import { Calendar } from "../components/Calendar";
import { OrderButton } from "../components/OrderButton";
import { Title } from "../components/Title";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
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
  interface Path {
    name: string;
  }

  const itemName: Path[] = [
    { name: "Бүгд" },
    { name: "Шинэ захиалга" },
    { name: "Бэлтгэгдэж байна" },
    { name: "Хүргэлтэнд гарсан" },
    { name: "Хүргэгдсэн" },
    { name: "Цуцлагдсан" },
  ];

  return (
    <div className="w-screen h-screen bg-[#f0f1f3] flex">
      <Title />
      <div className="flex flex-col gap-6 h-screen p-6 w-full ">
        <div className="border-b flex gap-4 font-light text-xs text-gray-500 cursor-pointer">
          {itemName.map((item, index) => (
            <div key={index} className="p-4">
              {item.name}
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          <Calendar />
          <div className="relative ">
            <CiSearch size={18} className="absolute w-6 h-6 top-[8px] left-2" />
            <Input
              type="search"
              placeholder="Дугаар, имэйл"
              className="bg-transparent border w-80 px-10 bg-white text-gray-600 h-[42px]"
            ></Input>
          </div>
        </div>
        <div className="bg-white rounded p-8">
          <h1 className="h-12">Захиалга</h1>
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-100 ">
                <TableHead>Захиалгын ID дугаар</TableHead>
                <TableHead>Үйлчлүүлэгч</TableHead>
                <TableHead>Огноо</TableHead>
                <TableHead>Цаг</TableHead>
                <TableHead>Төлбөр</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead>Дэлгэрэнгүй</TableHead>
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
                  <TableCell>{invoice.soldOut}</TableCell>
                  <TableCell>
                    <OrderButton />
                  </TableCell>
                  <TableCell className="text-right">
                    <IoIosArrowForward
                      onClick={() => router.push("/orderDetail")}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Page;
