"use client ";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useEffect } from "react";
import { api } from "@/axios";

interface CategoryType {
  _id: string;
  name: string;
}

export const CreateNewCategory = () => {
  const [allCategories, setAllCategories] = useState<CategoryType[]>([]);
  const [newCategory, setNewCategory] = useState<string>("");

  const getAllCategories = async () => {
    try {
      const response = await api.get("/category");
      console.log(response.data.category);
      if (response.data && Array.isArray(response.data.category)) {
        setAllCategories(response.data.category);
      }
    } catch (error) {
      console.error("Ангиллыг татахад алдаа гарлаа:", error);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  const addNewCategory = async () => {
    try {
      const response = await api.post("/category", { name: newCategory });
      setAllCategories((prev) => [...prev, response.data.category]);
      setNewCategory("");
    } catch (error) {
      console.error("Ангилал нэмэхэд алдаа гарлаа:", error);
    }
  };

  return (
    <div className="p-4 space-y-4 bg-white rounded-xl">
      <div className="flex flex-col gap-4">
        <Label className="text-sm">Ерөнхий ангилал</Label>
        <div className="flex gap-2 items-center">
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="border p-2 rounded w-full bg-gray-50 text-sm"
            placeholder="Шинэ ангилал нэмэх"
          />
          <button
            onClick={addNewCategory}
            className="py-2 px-4 bg-blue-500 text-white rounded text-sm"
          >
            Нэмэх
          </button>
        </div>
        <Select>
          <SelectTrigger className="w-full rounded border p-2 bg-gray-50">
            <SelectValue placeholder="Ангилал сонгох" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Ангилал</SelectLabel>
              {allCategories.length > 0 ? (
                allCategories.map((category, index) =>
                  category._id ? (
                    <SelectItem key={index} value={category._id}>
                      {category.name}
                    </SelectItem>
                  ) : (
                    <p key={index} className="text-red-500">
                      Ангиллын мэдээлэл дутуу байна (_id байхгүй).
                    </p>
                  )
                )
              ) : (
                <p>Ангилал олдсонгүй.</p>
              )}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
