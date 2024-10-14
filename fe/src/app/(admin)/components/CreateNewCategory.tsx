 "use client";

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
import { useState } from "react";
import { api } from "@/axios";
import { useData } from "@/components/utils/dataProvider";

export const CreateNewCategory = () => {
  const [newCategory, setNewCategory] = useState<string>("");

  const { categories, setCategories } = useData();

  const createCategory = async () => {
    const newCategoryData = {
      name: newCategory,
    };
    console.log(newCategoryData);

    try {
      const response = await api.post("/createCategory", newCategoryData);
      console.log(response, "categoriessss");

      const addedCategory = response.data;

      setCategories((prevCategories) => [...prevCategories, addedCategory]);

      setNewCategory("");
    } catch (error) {
      console.log(error);
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
            onClick={createCategory}
            className="py-2 px-4 bg-blue-500 text-white rounded text-sm"
          >
            Нэмэх
          </button>
        </div>
        <Select onValueChange={(value) => setNewCategory(value)}>
          <SelectTrigger className="w-full rounded border p-2 bg-gray-50">
            <SelectValue placeholder="Ангилал сонгох" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Ангилал</SelectLabel>
              {categories?.map((category, index) => (
                <SelectItem key={index} value={category._id}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
