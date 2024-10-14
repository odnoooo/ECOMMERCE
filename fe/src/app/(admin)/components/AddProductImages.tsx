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
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedFiles = Array.from(event.target.files);
      setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
      await handleUpload(selectedFiles);
    }
  };

  const handleUpload = async (selectedFiles: File[]) => {
    if (selectedFiles.length === 0) return;

    setUploading(true);
    const uploadedImageUrls: string[] = [];

    try {
      for (const file of selectedFiles) {
        const formData = new FormData();
        formData.append("ProductImage", file);

        const response = await axios.post(
          "http://localhost:3001/upload",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );

        const uploadedImageUrl = response.data.url;
        uploadedImageUrls.push(uploadedImageUrl);
      }

      // Зургийн URL-уудыг setImages ашиглан шинэчлэх
      setImages((prevImages) => [...prevImages, ...uploadedImageUrls]);
      setImageUrls((prevImageUrls) => [...prevImageUrls, ...uploadedImageUrls]);
    } catch (error) {
      console.error("Зураг ачаалахдаа алдаа гарлаа:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <div className="p-4 space-y-4 bg-white rounded-xl">
        <p>Бүтээгдэхүүний зураг</p>
        <div className="p-4 h-[130px] w-full border grid grid-cols-4 gap-4 items-center">
          {imageUrls.map((url, index) => (
            <img
              key={index}
              className="h-[100px] w-[100px] border border-dashed rounded"
              src={url} // URL-ыг шууд ашиглана
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
