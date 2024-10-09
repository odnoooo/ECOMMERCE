"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const OrderButton = () => {
  return (
    <div>
      <Select>
        <SelectTrigger className="w-[280px] bg-white">
          <SelectValue placeholder="шинэ захиалга" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="шинэ захиалга">шинэ захиалга</SelectItem>
            <SelectItem value="Бэлтгэгдэж байна">Бэлтгэгдэж байна</SelectItem>
            <SelectItem value="Хүргэлтэнд гарсан">Хүргэлтнэд гарсан</SelectItem>
            <SelectItem value="Хүргэгдсэн">Хүргэгдсэн</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
