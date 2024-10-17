"use client";

import axios from "axios";
import { useState, ChangeEvent } from "react";
import Image from "next/image";

interface AddProductImagesProps {
  imagesChange?: (imagesUrls: string[]) => void;
}

export const AddProductImages: React.FC<AddProductImagesProps> = ({
  imagesChange,
}) => {
  const [uploading, setUploading] = useState(false);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [, setSelectedImages] = useState<File[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.currentTarget.files;
    if (files) {
      const fileArray = Array.from(files);
      console.log(fileArray);
      // олон файлуудыг массив руу хувиргах
      setSelectedImages(fileArray);
      await handleUpload(fileArray);
    }
  };

  const handleUpload = async (selectedImages: File[]) => {
    if (selectedImages.length === 0) return; // Хэрэв зураг сонгоогүй бол гарна

    setUploading(true);

    try {
      const uploadedImageUrls: string[] = [];

      for (const image of selectedImages) {
        const formData = new FormData();
        formData.append("ProductImage", image);

        const res = await axios.post("http://localhost:3001/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(uploadedImageUrls, "===");

        const uploadedImageUrl = res.data.url;
        uploadedImageUrls.push(res.data.url);
      }

      setImageUrls((prevImages) => [...prevImages, ...uploadedImageUrls]); // Шинэ зургийн URL-уудыг нэмнэ
      if (imagesChange) imagesChange(uploadedImageUrls);
    } catch (error) {
      console.error("Зураг байршуулах үед алдаа гарлаа:", error);
    } finally {
      setUploading(false);
    }
  };

  const handleRemoveImage = (index: number) => {
    const updatedImages = imageUrls.filter((_, i) => i !== index);
    setImageUrls(updatedImages);
    if (imagesChange) imagesChange(updatedImages);
  };

  return (
    <div>
      <div className="p-4 space-y-4 bg-white rounded-xl">
        <p>Бүтээгдэхүүний зураг</p>
        <div className="p-4 h-[130px] w-full border grid grid-cols-4 gap-4 items-center">
          {imageUrls.length > 0
            ? imageUrls.map((url, index) => (
                <div className="h-[100px] w-[100px] border border-dashed rounded relative">
                  <Image fill src={url} alt={`Upload image ${index + 1}`} />
                  {hoveredIndex === index && (
                    <button
                      className="absolute top-1 right-1 bg-gray-500 text-white w-6 h-6 rounded-full flex justify-center items-center"
                      onClick={() => handleRemoveImage}
                    >
                      {" "}
                      X
                    </button>
                  )}
                </div>
              ))
            : ""}

          <div className="h-10 w-10 rounded-full border flex items-center justify-center cursor-pointer">
            <label htmlFor="image-upload" className="cursor-pointer">
              +
            </label>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={handleFileChange}
              onClick={(e) => (e.currentTarget.value = "")}
            />
          </div>
        </div>
        <button
          type="button"
          // onClick={handleUpload}
          disabled={uploading}
          className="bg-black text-white px-4 py-2 rounded-md"
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </div>
    </div>
  );
};
