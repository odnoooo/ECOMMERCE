"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const MonthSelection = () => {
  return (
    <div className="reative ">
      <Select>
        <SelectTrigger className="w-[180px] bg-white h-[42px] rounded">
          <SelectValue placeholder="Сараар" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="january">1</SelectItem>
            <SelectItem value="february">2</SelectItem>
            <SelectItem value="march">3</SelectItem>
            <SelectItem value="april">4</SelectItem>
            <SelectItem value="may">5</SelectItem>
            <SelectItem value="june">6</SelectItem>
            <SelectItem value="july">7</SelectItem>
            <SelectItem value="august">8</SelectItem>
            <SelectItem value="september">9</SelectItem>
            <SelectItem value="october">10</SelectItem>
            <SelectItem value="november">11</SelectItem>
            <SelectItem value="december">12</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
