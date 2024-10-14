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
import { toast } from "react-toastify";
import { IoIosClose } from "react-icons/io";

export const CreateNewCategory = () => {
  const [newCategory, setNewCategory] = useState<string>("");
  const { categories, setCategories } = useData();

  const createCategory = async () => {
    if (!newCategory) {
      toast.error("Ангиллын нэрийг оруулна уу!");
      return;
    }

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
      toast.success("Ангилал амжилттай нэмэгдлээ!");
    } catch (error) {
      console.log(error);
      toast.error("Ангилал нэмэх явцад алдаа гарлаа.");
    }
  };

  const deleteCategory = async (categoryId: string) => {
    if (confirm("Энэ ангиллыг устгах уу?")) {
      try {
        await api.delete(`/deleteCategoryById/${categoryId}`);
        setCategories((prevCategories) =>
          prevCategories.filter((cat) => cat._id !== categoryId)
        ); // Ангилал устгасны дараа түүнийг жагсаалтаас хасах
        toast.success("Ангилал амжилттай устгагдлаа!");
      } catch (error) {
        console.error("Ангиллыг устгах явцад алдаа гарлаа:", error);
        toast.error("Ангиллыг устгаж чадсангүй. Дахин оролдоно уу.");
      }
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
                  <div className="flex gap-2 justify-between w-full items-center">
                    {category.name}
                    <IoIosClose
                      onClick={() => deleteCategory(category._id)}
                      className="cursor-pointer items-center flex flex-end"
                    />
                  </div>
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
