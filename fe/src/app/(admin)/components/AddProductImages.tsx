"use client";

import axios from "axios";
import { useState, ChangeEvent, useEffect } from "react";

interface AddProductImagesProps {
  images: string[];
  setImages: (images: string[]) => void;
}

export const AddProductImages = ({
  images,
  setImages,
}: AddProductImagesProps) => {
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.currentTarget.files;
    if (files) setImage(files[0]);
  };

  const handleUpload = async () => {
    if (!image) return;

    setUploading(true);

    const formData = new FormData();
    formData.append("image", image);
    const res = await axios.post("http://localhost:3001/upload", formData);
    console.log(res.data);
    setLoading(false);
  };
  console.log(image);

  return (
    <div>
      <div className="p-4 space-y-4 bg-white rounded-xl">
        <p>Бүтээгдэхүүний зураг</p>
        <div className="p-4 h-[130px] w-full border grid grid-cols-4 gap-4 items-center">
          {image.map((image, index) => (
            <img
              key={index}
              className="h-[100px] w-[100px] border border-dashed rounded"
              src={image}
              alt={`Uploaded preview ${index + 1}`}
            />
          ))}

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
            />
          </div>
        </div>
        <button
          type="button"
          onClick={() => handleUpload(files)}
          disabled={uploading}
          className="bg-black text-white px-4 py-2 rounded-md"
        >
          {uploading ? "Ачаалж байна..." : "Ачаалах"}
        </button>
      </div>
    </div>
  );
};
